const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// --- Parse CSV feed ---
const buf = fs.readFileSync(path.join(ROOT, 'data/feeds/coolblue.csv.gz'));
const txt = zlib.gunzipSync(buf).toString('utf8');
const lines = txt.split('\n').filter(l => l.trim());

function parseCSVLine(line) {
  const result = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"' && !inQ) { inQ = true; }
    else if (c === '"' && inQ && line[i + 1] === '"') { cur += '"'; i++; }
    else if (c === '"' && inQ) { inQ = false; }
    else if (c === ',' && !inQ) { result.push(cur.trim()); cur = ''; }
    else cur += c;
  }
  result.push(cur.trim());
  return result;
}

const headers = parseCSVLine(lines[0]);
const col = {};
headers.forEach((h, i) => col[h] = i);

// Build feed array
const feed = [];
for (let i = 1; i < lines.length; i++) {
  const p = parseCSVLine(lines[i]);
  const name = p[col['product_name']] || '';
  const awLink = p[col['aw_deep_link']] || '';
  const merchantId = p[col['merchant_product_id']] || '';
  const brand = p[col['brand_name']] || '';
  if (awLink) feed.push({ name: name.toLowerCase(), rawName: name, awLink, merchantId, brand });
}

console.log('Feed entries:', feed.length);

// Our 81 products with search keys (terms that must ALL appear in the feed product name)
const ourProducts = [
  { slug: 'philips-hue-white-ambiance-starterkit', keys: ['hue', 'white ambiance', 'starter'] },
  { slug: 'philips-hue-white-e27', keys: ['hue white e27'] },
  { slug: 'philips-hue-color-ambiance-e27', keys: ['hue', 'color ambiance', 'e27'] },
  { slug: 'philips-hue-lightstrip-plus', keys: ['hue lightstrip plus'] },
  { slug: 'govee-rgbic-ledstrip', keys: ['govee', 'rgbic', 'led strip', '5'] },
  { slug: 'tapo-l530e', keys: ['tapo l530e'] },
  { slug: 'innr-zigbee-e27', keys: ['innr', 'e27', '4'] },
  { slug: 'tapo-l510e', keys: ['tapo l510e'] },
  { slug: 'aqara-deur-raamsensor-p2', keys: ['aqara', 'door', 'window', 'p2'] },
  { slug: 'eve-motion-matter-bewegingssensor', keys: ['eve motion'] },
  { slug: 'aqara-fp2-aanwezigheidssensor', keys: ['aqara fp2'] },
  { slug: 'aqara-temperatuur-rv-t1', keys: ['aqara', 'temperature', 'humidity', 't1'] },
  { slug: 'tapo-t110', keys: ['tapo t110'] },
  { slug: 'aqara-waterleksensor-t1', keys: ['aqara', 'water leak', 't1'] },
  { slug: 'tapo-t315', keys: ['tapo t315'] },
  { slug: 'aqara-vibratiesensor', keys: ['aqara vibration'] },
  { slug: 'ring-video-deurbel', keys: ['ring video doorbell'] },
  { slug: 'google-nest-thermostaat', keys: ['google nest thermostat'] },
  { slug: 'slimme-thermostaat-combiketel', keys: [] }, // no match expected
  { slug: 'tapo-ke100-kit', keys: ['tapo ke100'] },
  { slug: 'tapo-p115', keys: ['tapo p115'] },
  { slug: 'tapo-p110', keys: ['tapo p110'] },
  { slug: 'eve-energy', keys: ['eve energy'] },
  { slug: 'philips-hue-smart-plug', keys: ['hue smart plug'] },
  { slug: 'philips-hue-smart-plug-combipack', keys: ['hue smart plug', 'dimmer'] },
  { slug: 'innr-zigbee-outdoor-smart-plug', keys: ['innr', 'outdoor', 'plug'] },
  { slug: 'switchbot-matter-plug-mini', keys: ['switchbot', 'plug mini'] },
  { slug: 'aqara-smart-plug', keys: ['aqara smart plug'] },
  { slug: 'aqara-doorbell-g410-grey', keys: ['aqara', 'doorbell', 'g410'] },
  { slug: 'aqara-doorbell-g410-black', keys: ['aqara', 'doorbell', 'g410', 'black'] },
  { slug: 'tapo-d205', keys: ['tapo d205'] },
  { slug: 'tapo-d235', keys: ['tapo d235'] },
  { slug: 'reolink-video-doorbell-wifi', keys: ['reolink', 'doorbell', 'wifi'] },
  { slug: 'eufy-indoor-cam', keys: ['eufy', 'indoor cam'] },
  { slug: 'tapo-c225', keys: ['tapo c225'] },
  { slug: 'eufy-solo-outdoor-cam', keys: ['eufy', 'solo', 'outdoor'] },
  { slug: 'reolink-poe-camera', keys: ['reolink', 'poe'] },
  { slug: 'tapo-c200', keys: ['tapo c200'] },
  { slug: 'eve-cam', keys: ['eve cam'] },
  { slug: 'aqara-motion-sensor', keys: ['aqara', 'motion sensor p2'] },
  { slug: 'eve-weather', keys: ['eve weather'] },
  { slug: 'tapo-t100', keys: ['tapo t100'] },
  { slug: 'eve-door-window', keys: ['eve door'] },
  { slug: 'samsung-smartthings-hub', keys: ['aeotec', 'smart home hub'] },
  { slug: 'homey-pro-early-2023', keys: ['homey pro'] },
  { slug: 'homey-bridge', keys: ['homey bridge'] },
  { slug: 'philips-hue-bridge', keys: ['hue bridge'] },
  { slug: 'home-assistant-green', keys: ['home assistant green'] },
  { slug: 'tado-smart-thermostat-v3', keys: ['tado', 'thermostat'] },
  { slug: 'netatmo-slimme-thermostaat', keys: ['netatmo', 'thermostat'] },
  { slug: 'tp-link-deco-xe75', keys: ['deco xe75', '3-pack'] },
  { slug: 'eero-pro-6e', keys: ['eero pro 6e'] },
  { slug: 'google-nest-wifi-pro', keys: ['google nest wifi pro'] },
  { slug: 'nuki-smart-lock-4-pro', keys: ['nuki', 'smart lock 4.0 pro'] },
  { slug: 'yale-linus-smart-lock', keys: ['yale linus'] },
  { slug: 'danalock-v3', keys: ['danalock v3'] },
  { slug: 'frient-elektriciteitsmeter-interface-2-p1', keys: ['frient'] },
  { slug: 'shelly-pro-3em', keys: ['shelly pro 3em'] },
  { slug: 'brostrend-mini-ax900-wifi-6', keys: ['brostrend'] },
  { slug: 'philips-hue-gu10-white-ambiance', keys: ['hue', 'gu10', 'white ambiance'] },
  { slug: 'philips-hue-dimmer-switch-v2', keys: ['hue dimmer switch v2'] },
  { slug: 'philips-hue-motion-sensor', keys: ['hue motion sensor'] },
  { slug: 'tapo-l920-5-ledstrip', keys: ['tapo l920'] },
  { slug: 'govee-outdoor-ledstrip', keys: ['govee', 'outdoor', 'led strip'] },
  { slug: 'tapo-h200-smart-hub', keys: ['tapo h200'] },
  { slug: 'aqara-hub-m3', keys: ['aqara hub m3'] },
  { slug: 'tado-smart-thermostat-v3-bedraad', keys: ['tado', 'thermostat', 'wired'] },
  { slug: 'tado-radiatorkraan-v3-plus', keys: ['tado', 'radiator'] },
  { slug: 'nuki-smart-lock-3-pro', keys: ['nuki', 'smart lock 3.0 pro'] },
  { slug: 'aqara-smart-lock-u200-lite', keys: ['aqara', 'smart lock u200 lite'] },
  { slug: 'tp-link-deco-xe75-2pack', keys: ['deco xe75', '2-pack'] },
  { slug: 'zendure-slimme-meter-p1', keys: ['zendure'] },
  { slug: 'shelly-em', keys: ['shelly em'] },
  { slug: 'aqara-rookmelder', keys: ['aqara smoke'] },
  { slug: 'aqara-mini-switch-t1', keys: ['aqara mini switch t1'] },
  { slug: 'tapo-t300-waterlekkagesensor', keys: ['tapo t300'] },
  { slug: 'innr-smart-gu10-zigbee-4pack', keys: ['innr', 'gu10', '4'] },
  { slug: 'eufy-c30-2k-draadloze-videodeurbel-bundel', keys: ['eufy', 'c30'] },
  { slug: 'nanoleaf-lines-60-degrees-starterkit-slimme-verlic', keys: ['nanoleaf lines 60'] },
  { slug: 'nanoleaf-shapes-mini-triangles-uitbreidingspakket-', keys: ['nanoleaf', 'mini triangles'] },
  { slug: 'govee-neon-rope-light-2-white-5m', keys: ['govee neon rope light'] },
];

function findBest(keys) {
  if (!keys.length) return null;
  const lkeys = keys.map(k => k.toLowerCase());
  const matches = feed.filter(f => lkeys.every(k => f.name.includes(k)));
  if (!matches.length) return null;
  // Prefer shortest name (avoids bundles/combos)
  return matches.sort((a, b) => a.name.length - b.name.length)[0];
}

const results = ourProducts.map(p => {
  const m = findBest(p.keys);
  return { slug: p.slug, match: m ? { rawName: m.rawName, awLink: m.awLink, merchantId: m.merchantId } : null };
});

const matched = results.filter(r => r.match);
const unmatched = results.filter(r => !r.match);

console.log('\n=== MATCHED (' + matched.length + ') ===');
matched.forEach(r => console.log('✓', r.slug, '\n  →', r.match.rawName, '(' + r.match.merchantId + ')\n  ', r.match.awLink));

console.log('\n=== UNMATCHED (' + unmatched.length + ') ===');
unmatched.forEach(r => console.log('✗', r.slug));

// Save results
fs.writeFileSync(path.join(ROOT, 'scripts/coolblue_matches.json'), JSON.stringify(results, null, 2));
console.log('\nResults saved to scripts/coolblue_matches.json');
