const fs = require('fs');

const answers = {
  "beginnen-met-smart-home":
    "Begin met één apparaat dat je direct dagelijks gebruikt, zoals een slimme lamp of stekker. Kies een protocol (wifi voor gemak, Zigbee voor stabiliteit) en bouw daarna stap voor stap uit.",

  "slimme-verlichting-installeren":
    "Draai de slimme lamp in de fitting, download de bijbehorende app en koppel de lamp via 2.4 GHz wifi of een Zigbee hub. Stel daarna een schema of automatisering in via de app.",

  "wifi-verbeteren-voor-smart-home":
    "Zorg dat je smart home apparaten op het 2.4 GHz netwerk zitten en niet op 5 GHz. Plaats je router centraal en overweeg een mesh-systeem bij een groter huis of meerdere verdiepingen.",

  "smart-home-hub-installeren":
    "Sluit de hub aan op je router via een netwerkkabel, download de bijbehorende app en voeg vervolgens je slimme apparaten één voor één toe. De eerste koppeling duurt even, maar daarna gaat uitbreiden snel.",

  "slim-huis-beveiligen":
    "Gebruik sterke, unieke wachtwoorden voor je smart home apps en je wifi-netwerk. Zet twee-factor-authenticatie aan waar mogelijk en houd firmware van hubs en camera's altijd up-to-date.",

  "lamp-automatisch-aan-bij-beweging":
    "Koppel een bewegingssensor en een slimme lamp aan dezelfde app of hub. Maak een automatisering: als beweging → lamp aan. Voeg een tijdvoorwaarde toe zodat de lamp alleen 's avonds aangaat en na 3-5 minuten vanzelf uitgaat.",

  "slimme-verlichting-koppelen-lukt-niet":
    "Controleer of je lamp op 2.4 GHz wifi zit en niet op 5 GHz. Reset de lamp door hem 5 keer kort aan en uit te zetten. Bij Zigbee-lampen: houd de lamp dicht bij de hub tijdens de eerste koppeling.",

  "bewegingssensor-instellen":
    "Voeg de sensor toe aan je app of hub en controleer of hij beweging detecteert. Stel daarna in de automatisering in wanneer hij moet reageren — alleen 's avonds is meestal het handigst.",

  "smart-home-zonder-hub-instellen":
    "Wifi-apparaten zoals Tapo-lampen en slimme stekkers werken direct via de app zonder hub. Koppel ze aan je 2.4 GHz netwerk en stel schema's en automatiseringen in via de fabrieksapp.",

  "slimme-stekker-instellen":
    "Steek de slimme stekker in het stopcontact en download de bijbehorende app. Koppel via 2.4 GHz wifi en stel daarna tijdschema's of energiemeting in via de app.",

  "homey-automatisering-maken":
    "Open de Homey-app, ga naar Flows en tik op de plusknop. Kies een trigger (bijv. beweging), voeg optioneel een voorwaarde toe (bijv. alleen 's avonds) en stel de actie in (bijv. lamp aan).",
};

let text = fs.readFileSync('data/howto.js', 'utf8');
let changed = 0;

for (const [slug, answer] of Object.entries(answers)) {
  const slugIdx = text.indexOf('"' + slug + '"');
  if (slugIdx === -1) { console.log('NOT FOUND: ' + slug); continue; }

  // Check if shortAnswer already exists near this slug
  const section = text.substring(slugIdx, slugIdx + 800);
  if (section.includes('shortAnswer')) { console.log('Already has shortAnswer: ' + slug); continue; }

  // Find the kortAntwoord or description line after the slug to insert before it
  let insertIdx = text.indexOf('kortAntwoord', slugIdx);
  const descIdx = text.indexOf('description', slugIdx);
  if (insertIdx === -1 || (descIdx < insertIdx && descIdx !== -1)) {
    insertIdx = descIdx;
  }
  if (insertIdx === -1) { console.log('No insertion point for: ' + slug); continue; }

  // Find the start of that line
  const lineStart = text.lastIndexOf('\n', insertIdx) + 1;
  const indent = text.substring(lineStart, insertIdx).match(/^\s*/)[0];

  const insertion = indent + 'shortAnswer:\n' + indent + '  "' + answer.replace(/"/g, '\\"') + '",\n';
  text = text.substring(0, lineStart) + insertion + text.substring(lineStart);

  changed++;
  console.log('Added shortAnswer: ' + slug);
}

fs.writeFileSync('data/howto.js', text, 'utf8');
console.log('\nDone! Changed: ' + changed);
