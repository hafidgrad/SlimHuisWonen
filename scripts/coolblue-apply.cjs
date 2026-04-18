const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const productsPath = path.join(ROOT, 'data/products.js');

// The 11 confirmed datafeed matches (aw_deep_link = AWIN affiliate link)
// philips-hue-bridge excluded: match was "Bridge Pro" (different product)
const matches = [
  {
    slug: 'philips-hue-white-ambiance-starterkit',
    feedName: 'Philips Hue White Ambiance Starter Pack E27 met 3 lampen, dimmer + Bridge',
    merchantId: '889938',
    awLink: 'https://www.awin1.com/pclick.php?p=38561477934&a=2855887&m=85161',
  },
  {
    slug: 'tapo-t110',
    feedName: 'TP-Link Tapo T110 smart-contactsensor',
    merchantId: '928517',
    awLink: 'https://www.awin1.com/pclick.php?p=44127004388&a=2855887&m=85161',
  },
  {
    slug: 'tapo-t315',
    feedName: 'TP-Link Tapo T315 Smart thermometer and hygrometer',
    merchantId: '928583',
    awLink: 'https://www.awin1.com/pclick.php?p=38840443808&a=2855887&m=85161',
  },
  {
    slug: 'tapo-p115',
    feedName: 'Tapo P115 Slimme Stekker',
    merchantId: '918281',
    awLink: 'https://www.awin1.com/pclick.php?p=38561531995&a=2855887&m=85161',
  },
  {
    slug: 'philips-hue-smart-plug',
    feedName: 'Philips Hue Smart Plug',
    merchantId: '890074',
    awLink: 'https://www.awin1.com/pclick.php?p=38561531997&a=2855887&m=85161',
  },
  {
    slug: 'tapo-d235',
    feedName: 'TP-Link Tapo D235 Smart Battery & Wired Doorbell',
    merchantId: '950564',
    awLink: 'https://www.awin1.com/pclick.php?p=38561530908&a=2855887&m=85161',
  },
  {
    slug: 'tapo-c225',
    feedName: 'TP-Link Tapo C225 2.5K Pan & Tilt',
    merchantId: '919556',
    awLink: 'https://www.awin1.com/pclick.php?p=38561477674&a=2855887&m=85161',
  },
  {
    slug: 'tapo-t100',
    feedName: 'TP-Link Tapo T100 smart-bewegingssensor',
    merchantId: '928516',
    awLink: 'https://www.awin1.com/pclick.php?p=38840441964&a=2855887&m=85161',
  },
  {
    slug: 'tp-link-deco-xe75',
    feedName: 'TP-Link Deco XE75 3-pack',
    merchantId: '904018',
    awLink: 'https://www.awin1.com/pclick.php?p=43417689963&a=2855887&m=85161',
  },
  {
    slug: 'philips-hue-gu10-white-ambiance',
    feedName: 'Philips Hue White Ambiance GU10',
    merchantId: '949408',
    awLink: 'https://www.awin1.com/pclick.php?p=38561477987&a=2855887&m=85161',
  },
];

let src = fs.readFileSync(productsPath, 'utf8');
let changed = 0;

for (const m of matches) {
  // Replace the zoeklink for this slug with the AWIN link
  // Pattern: find the block for this slug and replace its coolblueUrl zoeklink
  const slugPattern = `slug: "${m.slug}"`;
  const idx = src.indexOf(slugPattern);
  if (idx === -1) {
    console.warn('Slug not found:', m.slug);
    continue;
  }

  // Find the end of this product block (next },)
  const blockEnd = src.indexOf('\n  },', idx);
  const block = src.slice(idx, blockEnd === -1 ? undefined : blockEnd);

  // Check it has a zoeklink (not already a direct link)
  const coolblueMatch = block.match(/coolblueUrl:\s*"(https:\/\/www\.coolblue\.nl\/zoeken[^"]+)"/);
  if (!coolblueMatch) {
    console.log('SKIP (already has direct link or no coolblueUrl):', m.slug);
    continue;
  }

  const oldUrl = coolblueMatch[1];
  src = src.replace(
    `coolblueUrl: "${oldUrl}"`,
    `coolblueUrl: "${m.awLink}"`,
  );
  console.log('UPDATED:', m.slug);
  console.log('  was:', oldUrl);
  console.log('  now:', m.awLink);
  changed++;
}

fs.writeFileSync(productsPath, src, 'utf8');
console.log('\nDone. Updated', changed, 'products.');
