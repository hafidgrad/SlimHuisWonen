const fs = require('fs');

const tables = {
  "beste-slimme-camera": {
    headers: ["Model", "Type", "Protocol", "Prijs", "Geen abo nodig"],
    rows: [
      ["Eufy Indoor Cam", "Binnen", "Wi-Fi", "~€45", "✓"],
      ["Eufy Solo Outdoor", "Buiten (accu)", "Wi-Fi", "~€80", "✓"],
      ["Reolink PoE", "Buiten (PoE)", "Ethernet", "~€60", "✓"],
      ["Tapo C200", "Binnen (budget)", "Wi-Fi", "~€25", "✓"],
      ["Eve Cam", "Binnen (privacy)", "HomeKit", "~€130", "✓"],
      ["Tapo C220", "Binnen (pan-tilt)", "Wi-Fi", "~€35", "✓"],
      ["Tapo C230", "Binnen (babyfoon)", "Wi-Fi", "~€45", "✓"],
      ["Tapo C500", "Buiten (360°)", "Wi-Fi", "~€40", "✓"],
      ["Tapo C530WS", "Buiten (3K)", "Wi-Fi", "~€65", "✓"],
    ],
  },
  "beste-slimme-deurbel": {
    headers: ["Model", "Stroomtype", "Protocol", "Prijs", "Chime mee"],
    rows: [
      ["Aqara G4410", "Bedraad", "Zigbee", "~€100", "✓"],
      ["Tapo D205", "Accu", "Wi-Fi", "~€65", "✗"],
      ["Tapo D235", "Bedraad/Accu", "Wi-Fi", "~€80", "✗"],
      ["Reolink Video Doorbell", "Bedraad", "Wi-Fi", "~€90", "✗"],
      ["Hue Secure Videodeurbel", "Bedraad", "Zigbee", "~€230", "✓"],
      ["Tapo D210", "Accu", "Wi-Fi", "~€75", "✓"],
    ],
  },
  "beste-slimme-sensoren": {
    headers: ["Model", "Type", "Protocol", "Prijs", "Hub nodig"],
    rows: [
      ["Aqara sensoren", "Beweging/Deur", "Zigbee", "~€15-€25", "Ja"],
      ["Eve Door & Window", "Deur/Raam", "Matter (Thread)", "~€40", "Matter hub"],
      ["Eve Motion", "Beweging", "Matter (Thread)", "~€50", "Matter hub"],
      ["Aqara FP1E", "Aanwezigheid (radar)", "Zigbee", "~€50", "Ja"],
      ["Sonoff SNZB-03P", "Beweging (budget)", "Zigbee", "~€12", "Ja"],
      ["Bosch Deur/Raam 2", "Deur/Raam", "Matter", "~€35", "Matter hub"],
      ["Tapo T30 Kit", "Starterkit", "Wi-Fi", "~€40", "Nee"],
    ],
  },
  "beste-slimme-verlichting": {
    headers: ["Merk/Lijn", "Protocol", "Prijs/lamp", "Hub nodig", "Kleuren"],
    rows: [
      ["Philips Hue", "Zigbee + Matter", "~€20-€25", "Hue Bridge", "✓"],
      ["Innr", "Zigbee", "~€15", "Zigbee hub", "Beperkt"],
      ["Tapo L510E", "Wi-Fi", "~€12", "Nee", "Alleen wit"],
      ["Tapo L530E", "Wi-Fi", "~€15", "Nee", "✓"],
      ["Govee", "Wi-Fi + BT", "~€20-€60", "Nee", "✓"],
      ["Tapo L535E", "Wi-Fi + Matter", "~€18", "Matter hub opt.", "✓"],
      ["Tapo L930-5 strip", "Wi-Fi", "~€45", "Nee", "✓ (segment)"],
      ["Nanoleaf Lines", "Wi-Fi + Matter", "~€180", "Nee", "✓ (design)"],
      ["Govee Neon Rope", "Wi-Fi + BT", "~€60", "Nee", "✓ (neon)"],
    ],
  },
  "beste-smart-home-hub": {
    headers: ["Hub", "Protocollen", "Prijs", "Lokaal", "Matter"],
    rows: [
      ["Homey Pro", "Zigbee, Z-Wave, Matter, Wi-Fi, IR", "~€400", "✓", "✓"],
      ["Home Assistant Green", "Alles via add-ons", "~€100", "✓", "✓"],
      ["SmartThings Hub", "Zigbee, Z-Wave, Matter", "~€80", "Deels", "✓"],
      ["Bosch SHC 2", "Zigbee (Bosch)", "~€120", "✓", "✓"],
    ],
  },
  "beste-slimme-stekkers": {
    headers: ["Model", "Protocol", "Prijs", "Energiemeting", "Matter"],
    rows: [
      ["Tapo P110", "Wi-Fi", "~€15", "✓", "✗"],
      ["Aqara Smart Plug", "Zigbee", "~€20", "✓", "✗"],
      ["Eve Energy", "Matter (Thread)", "~€40", "✓", "✓"],
      ["Tapo P110M", "Wi-Fi + Matter", "~€18", "✓", "✓"],
      ["Tapo P410M outdoor", "Wi-Fi + Matter", "~€30", "✓", "✓"],
      ["Bosch SPC 2", "Matter", "~€35", "✓", "✓"],
    ],
  },
  "beste-slimme-producten-voor-huisdieren": {
    headers: ["Product", "Type", "Prijs", "Automatisering"],
    rows: [
      ["Tapo C220", "Bewakingscamera (pan-tilt)", "~€35", "Bewegingsmelding"],
      ["Eufy Indoor Cam", "Bewakingscamera", "~€45", "Huisdierdetectie"],
      ["Govee Neon / Strip", "Sfeerverlichting", "~€45-€60", "Timer/scene"],
      ["Tapo P110", "Slimme stekker", "~€15", "Schema's"],
      ["Aqara bewegingssensor", "Bewegingssensor", "~€15", "Auto verlichting"],
    ],
  },
  "beste-slimme-producten-voor-kinderen": {
    headers: ["Product", "Type", "Prijs", "Leeftijd"],
    rows: [
      ["Philips Hue Go", "Slaapkamerlamp met kleuren", "~€80", "4+"],
      ["Tapo L530E", "Kleuren wifi-lamp", "~€15", "4+"],
      ["Govee Neon Rope", "Neon sfeerlamp", "~€60", "8+"],
      ["Nanoleaf Shapes Mini", "Design verlichting", "~€50", "8+"],
      ["Tapo C230 (babyfoon)", "Camera met geluiddetectie", "~€45", "0-3"],
      ["Eve Motion", "Bewegingssensor voor kinderbeveiliging", "~€50", "Alle"],
    ],
  },
  "beste-slimme-thermostaat": {
    headers: ["Model", "Protocol", "Prijs", "Multi-zone", "Matter"],
    rows: [
      ["Tado slimme thermostaat", "Wi-Fi", "~€120", "Ja (uitbreidbaar)", "✗"],
      ["Bosch Kamerthermostaat 2", "Matter", "~€150", "Ja", "✓"],
      ["Netatmo thermostaat", "Wi-Fi", "~€130", "Beperkt", "✗"],
      ["Homematic IP thermostaat", "Eigen RF", "~€100", "Ja", "✗"],
    ],
  },
  "beste-slimme-bewegingssensor": {
    headers: ["Model", "Protocol", "Prijs", "Detectie", "Hub nodig"],
    rows: [
      ["Aqara Motion Sensor P1", "Zigbee", "~€20", "Beweging + licht", "Ja"],
      ["Philips Hue Motion", "Zigbee", "~€40", "Beweging + licht", "Hue Bridge"],
      ["Eve Motion", "Matter (Thread)", "~€50", "Beweging + licht", "Matter hub"],
      ["Aqara FP1E", "Zigbee", "~€50", "Aanwezigheid (radar)", "Ja"],
      ["Sonoff SNZB-03P", "Zigbee", "~€12", "Beweging", "Ja"],
    ],
  },
  "beste-mesh-wifi-systeem": {
    headers: ["Model", "Wifi-standaard", "Prijs (kit)", "Nodes", "Matter/Thread"],
    rows: [
      ["TP-Link Deco BE25 (1-pack)", "Wi-Fi 7", "~€130", "1", "✓"],
      ["TP-Link Deco BE25 (2-pack)", "Wi-Fi 7", "~€200", "2", "✓"],
      ["TP-Link Deco BE65 (2-pack)", "Wi-Fi 7 (premium)", "~€380", "2", "✓"],
      ["TP-Link Deco X10 (3-pack)", "Wi-Fi 6", "~€130", "3", "Deels"],
      ["Eero Pro 6E", "Wi-Fi 6E", "~€250", "1", "✓"],
      ["Google Nest Wifi Pro", "Wi-Fi 6E", "~€200", "1", "✓ (Thread)"],
    ],
  },
  "beste-slimme-slot": {
    headers: ["Model", "Protocol", "Prijs", "Auto-lock", "Matter"],
    rows: [
      ["Nuki Smart Lock Pro 4", "Matter + BT", "~€230", "✓", "✓"],
      ["Yale Linus Smart Lock", "Zigbee", "~€180", "✓", "✗"],
      ["Danalock V3", "Zigbee/Z-Wave", "~€130", "✓", "✗"],
      ["Aqara Smart Lock U100", "Zigbee", "~€150", "✓", "✗"],
    ],
  },
  "beste-energie-monitor": {
    headers: ["Model", "Type", "Prijs", "Realtime", "P1-poort"],
    rows: [
      ["HOMEWIZARD Energy P1", "P1 meter", "~€25", "✓", "✓"],
      ["SMAPPEE Infinity", "Kabelkast + sub", "~€300", "✓", "✗"],
      ["Tapo P110", "Stekker met meting", "~€15", "✓", "✗"],
      ["Shelly 3EM", "Kabelkast monitor", "~€80", "✓", "✗"],
    ],
  },
  "beste-slimme-radiatorkraan": {
    headers: ["Model", "Protocol", "Prijs", "App", "Matter"],
    rows: [
      ["Tado radiatorknop", "Wi-Fi", "~€80", "Tado", "✗"],
      ["Bosch Radiatorknop 2", "Matter", "~€80", "Bosch SHC", "✓"],
      ["Eve Thermo", "Matter (Thread)", "~€80", "Eve", "✓"],
      ["Netatmo radiatorknop", "Wi-Fi", "~€70", "Netatmo", "✗"],
    ],
  },
  "beste-smart-home-huurwoning": {
    headers: ["Product", "Type", "Prijs", "Boren nodig"],
    rows: [
      ["Philips Hue (starter)", "Slimme verlichting", "~€60", "Nee"],
      ["Tapo L530E", "Wifi lamp", "~€15", "Nee"],
      ["Tapo P110", "Slimme stekker", "~€15", "Nee"],
      ["Nuki Smart Lock", "Slim slot (opzet)", "~€230", "Nee"],
      ["Aqara sensoren", "Sensoren (kleefstrip)", "~€15-€25", "Nee"],
      ["Tapo C220", "Camera (bureauvoet)", "~€35", "Nee"],
    ],
  },
  "goedkoopste-smart-home-beginners": {
    headers: ["Product", "Type", "Prijs", "Protocol", "Hub nodig"],
    rows: [
      ["Tapo L530E", "Wifi lamp (kleur)", "~€15", "Wi-Fi", "Nee"],
      ["Tapo P110", "Slimme stekker", "~€15", "Wi-Fi", "Nee"],
      ["Tapo C200", "Beveiligingscamera", "~€25", "Wi-Fi", "Nee"],
      ["Sonoff SNZB-03P", "Bewegingssensor", "~€12", "Zigbee", "Ja"],
      ["Tapo T30 Kit", "Sensorstarter kit", "~€40", "Wi-Fi", "Nee"],
      ["Amazon Echo Dot", "Slimme speaker", "~€30", "Wi-Fi/BT", "Nee"],
    ],
  },
};

let text = fs.readFileSync('data/aanraders.js', 'utf8');
let changed = 0;

for (const [slug, table] of Object.entries(tables)) {
  const slugIdx = text.indexOf('slug: "' + slug + '"');
  if (slugIdx === -1) { console.log('NOT FOUND: ' + slug); continue; }

  const picksIdx = text.indexOf('\n  picks: [', slugIdx);
  if (picksIdx === -1) { console.log('No picks found for: ' + slug); continue; }

  const between = text.substring(slugIdx, picksIdx);
  if (between.includes('comparisonTable')) { console.log('Already has table: ' + slug); continue; }

  const indent = '  ';
  const rows = table.rows.map(row =>
    indent + indent + '[' + row.map(c => JSON.stringify(c)).join(', ') + ']'
  ).join(',\n');
  const headers = table.headers.map(h => JSON.stringify(h)).join(', ');
  const tableStr = '\n\n' + indent + 'comparisonTable: {\n' +
    indent + indent + 'headers: [' + headers + '],\n' +
    indent + indent + 'rows: [\n' +
    rows + ',\n' +
    indent + indent + '],\n' +
    indent + '},';

  text = text.substring(0, picksIdx) + tableStr + text.substring(picksIdx);
  changed++;
  console.log('Added table to: ' + slug);
}

fs.writeFileSync('data/aanraders.js', text, 'utf8');
console.log('Done! Changed: ' + changed);
