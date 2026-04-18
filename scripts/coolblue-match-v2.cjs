/**
 * Verbeterde Coolblue datafeed koppeling
 * Strategie: 6-laagse fallback per product
 */
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// ─── 1. Laad en parse de datafeed ────────────────────────────────────────────
const buf = fs.readFileSync(path.join(ROOT, 'data/feeds/coolblue.csv.gz'));
const txt = zlib.gunzipSync(buf).toString('utf8');
const rawLines = txt.split('\n').filter(l => l.trim());

function parseCSV(line) {
  const r = []; let c = '', q = false;
  for (let i = 0; i < line.length; i++) {
    const x = line[i];
    if (x === '"' && !q) q = true;
    else if (x === '"' && q && line[i + 1] === '"') { c += '"'; i++; }
    else if (x === '"' && q) q = false;
    else if (x === ',' && !q) { r.push(c.trim()); c = ''; }
    else c += x;
  }
  r.push(c.trim());
  return r;
}

const headers = parseCSV(rawLines[0]);
const col = {};
headers.forEach((h, i) => col[h] = i);

const feed = [];
for (let i = 1; i < rawLines.length; i++) {
  const p = parseCSV(rawLines[i]);
  const awLink = p[col['aw_deep_link']] || '';
  const name = p[col['product_name']] || '';
  const id = p[col['merchant_product_id']] || '';
  const ean = (p[col['ean']] || '').trim();
  if (awLink && name) {
    feed.push({ rawName: name, name: name.toLowerCase(), awLink, id, ean });
  }
}
console.log('Feed entries:', feed.length);

// ─── 2. Naam opschonen ────────────────────────────────────────────────────────
function cleanName(name) {
  return name
    // Verwijder alles tussen haakjes
    .replace(/\s*\([^)]*\)/g, '')
    // Verwijder alles na een ' - ' die specificaties toevoegt
    .replace(/\s+-\s+.*/g, '')
    // Verwijder alles na ' + ' (bundle)
    .replace(/\s+\+\s+.*/g, '')
    // Verwijder pack-aanduidingen
    .replace(/\s+\d+-pack/gi, '')
    // Verwijder versie-aanduidingen aan het einde
    .replace(/\s+V\d\+?$/i, '')
    // Normaliseer witruimte
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

// Extraheer modelnummer (bijv. "XE75", "L530E", "FP2", "T110", "C225")
function extractModel(name) {
  const m = name.match(/\b([A-Z]{1,4}\d{2,4}[A-Z]?(?:\.\d)?(?:\s*Pro)?(?:\s*Plus)?(?:\s*\d+EM)?)\b/i);
  return m ? m[1].toLowerCase() : null;
}

// ─── 3. Producten lezen uit products.js ──────────────────────────────────────
const src = fs.readFileSync(path.join(ROOT, 'data/products.js'), 'utf8');
const productLines = src.split('\n');

const products = [];
let cur = null;
for (let i = 0; i < productLines.length; i++) {
  const line = productLines[i];
  if (line.match(/^\s*\{/) && (productLines[i + 1]?.includes('slug:') || productLines[i + 2]?.includes('slug:'))) {
    cur = {};
  }
  if (cur) {
    const slug = line.match(/slug:\s*"([^"]+)"/)?.[1]; if (slug) cur.slug = slug;
    const name = line.match(/name:\s*"([^"]+)"/)?.[1]; if (name) cur.name = name;
    const brand = line.match(/brand:\s*"([^"]+)"/)?.[1]; if (brand) cur.brand = brand;
    const ean = line.match(/ean:\s*"([^"]+)"/)?.[1]; if (ean) cur.ean = ean;
    const cb = line.match(/coolblueUrl:\s*"([^"]+)"/)?.[1]; if (cb) cur.coolblueUrl = cb;
    if (line.match(/^\s*\},?\s*$/) && cur.slug) {
      products.push({ ...cur });
      cur = null;
    }
  }
}
console.log('Products loaded:', products.length);

// ─── 4. Matchfuncties ─────────────────────────────────────────────────────────

// Woordoverlap score (0-1)
function wordOverlap(a, b) {
  const wa = new Set(a.split(/\s+/).filter(w => w.length > 2));
  const wb = new Set(b.split(/\s+/).filter(w => w.length > 2));
  if (!wa.size || !wb.size) return 0;
  let hits = 0;
  wa.forEach(w => { if (wb.has(w)) hits++; });
  return hits / Math.max(wa.size, wb.size);
}

// Vind de beste match uit de feed, geeft { match, method } of null
function findMatch(product) {
  const { name, brand, ean } = product;
  const cleanedName = cleanName(name);
  const model = extractModel(name);
  const brandLow = (brand || '').toLowerCase()
    .replace(/tp-link tapo/i, 'tapo')
    .replace(/tp-link/i, 'tp-link')
    .replace(/philips hue/i, 'philips hue');

  // ── Poging 1: EAN ──────────────────────────────────────────────────────────
  if (ean) {
    const hit = feed.find(f => f.ean === ean);
    if (hit) return { match: hit, method: 'EAN' };
  }

  // ── Poging 2: Volledige opgeschoonde naam (>80% woord-overlap) ─────────────
  const byFullName = feed
    .map(f => ({ f, score: wordOverlap(cleanedName, f.name) }))
    .filter(x => x.score >= 0.8)
    .sort((a, b) => b.score - a.score || a.f.name.length - b.f.name.length);
  if (byFullName.length) return { match: byFullName[0].f, method: 'volledige naam (' + Math.round(byFullName[0].score * 100) + '%)' };

  // ── Poging 3: Merk + kernmodel (alle woorden van cleanedName moeten matchen) ─
  const cleanWords = cleanedName.split(/\s+/).filter(w => w.length > 2);
  if (cleanWords.length >= 2) {
    const candidates = feed.filter(f => cleanWords.every(w => f.name.includes(w)));
    if (candidates.length) {
      const best = candidates.sort((a, b) => a.name.length - b.name.length)[0];
      return { match: best, method: 'merk + kernmodel' };
    }
  }

  // ── Poging 4: Merk + eerste twee kernwoorden ───────────────────────────────
  if (cleanWords.length >= 2) {
    const first2 = cleanWords.slice(0, 2);
    const candidates4 = feed.filter(f => first2.every(w => f.name.includes(w)));
    if (candidates4.length === 1) {
      return { match: candidates4[0], method: 'merk + 2 woorden (uniek)' };
    }
    if (candidates4.length > 1) {
      // Extra score: hoe meer woorden overeenkomen, hoe beter
      const ranked = candidates4
        .map(f => ({ f, score: wordOverlap(cleanedName, f.name) }))
        .sort((a, b) => b.score - a.score || a.f.name.length - b.f.name.length);
      if (ranked[0].score >= 0.6) {
        return { match: ranked[0].f, method: 'merk + 2 woorden (' + candidates4.length + ' kandidaten)' };
      }
    }
  }

  // ── Poging 5: Alleen modelnummer ───────────────────────────────────────────
  if (model && model.length >= 3) {
    const byModel = feed.filter(f => f.name.includes(model));
    if (byModel.length === 1) {
      return { match: byModel[0], method: 'modelnummer (uniek: ' + model + ')' };
    }
    if (byModel.length > 1 && byModel.length <= 5) {
      // Neem kortste naam (minste toevoegingen)
      const best = byModel.sort((a, b) => a.name.length - b.name.length)[0];
      return { match: best, method: 'modelnummer (' + model + ', ' + byModel.length + ' kandidaten)' };
    }
  }

  // ── Poging 6: Geen match ───────────────────────────────────────────────────
  return null;
}

// ─── 5. Match alle producten ──────────────────────────────────────────────────
const results = products.map(p => {
  // Producten met al een directe link (niet-zoeklink) overslaan
  const isSearchLink = p.coolblueUrl?.includes('coolblue.nl/zoeken') || !p.coolblueUrl;
  if (!isSearchLink) {
    return { ...p, foundMethod: 'bestaande directe link', newUrl: p.coolblueUrl, changed: false };
  }

  const found = findMatch(p);
  if (found) {
    return { ...p, foundMethod: found.method, feedName: found.match.rawName, feedId: found.match.id, newUrl: found.match.awLink, changed: true };
  }
  return { ...p, foundMethod: 'geen match — zoeklink', newUrl: p.coolblueUrl, changed: false };
});

const matched = results.filter(r => r.changed);
const unmatched = results.filter(r => !r.changed && !r.foundMethod?.includes('bestaande'));
const existing = results.filter(r => r.foundMethod?.includes('bestaande'));

console.log('\n=== BESTAANDE DIRECTE LINKS (' + existing.length + ') ===');
existing.forEach(r => console.log('  ' + r.slug));

console.log('\n=== NIEUWE MATCHES (' + matched.length + ') ===');
matched.forEach(r => console.log('✓ [' + r.foundMethod + ']\n  ' + r.slug + '\n  Feed: "' + r.feedName + '" (' + r.feedId + ')'));

console.log('\n=== GEEN MATCH (' + unmatched.length + ') ===');
unmatched.forEach(r => console.log('✗ ' + r.slug + ' (' + r.name + ')'));

// ─── 6. Schrijf resultaten ────────────────────────────────────────────────────
fs.writeFileSync(
  path.join(ROOT, 'scripts/coolblue_matches_v2.json'),
  JSON.stringify(results, null, 2)
);
console.log('\nResultaten opgeslagen in scripts/coolblue_matches_v2.json');
