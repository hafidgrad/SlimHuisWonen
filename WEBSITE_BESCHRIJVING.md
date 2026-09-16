# SlimHuisWonen.nl — Volledige website-inhoudsbeschrijving

**URL:** https://www.slimhuiswonen.nl  
**Eigenaar / auteur:** Hafid  
**Niche:** Smart home producten en tips voor de Nederlandse consument  
**Doel:** Praktische, eerlijke koopgidsen en uitleg voor iedereen die wil beginnen met of uitbreiden van een slim huis  
**Verdienmodel:** Affiliate commissies via bol.com en Coolblue (lezer betaalt geen extra)  
**Tech-stack:** Next.js 14 (App Router), statisch gegenereerde pagina's

---

## Wat doet de website?

SlimHuisWonen.nl is een Nederlandstalige affiliate- en informatiewebsite over smart home. De site helpt consumenten bij het kiezen van slimme apparaten voor thuis: van lampen en stekkers tot thermostaten, cameras en hubs. De content is geschreven vanuit persoonlijke ervaring van de eigenaar (Hafid), die zijn eigen huis heeft ingericht met smart home technologie — aanvankelijk met Homey Pro, nu volledig op Home Assistant met een eigen Zigbee-netwerk.

De site onderscheidt zich van generieke vergelijkingssites door:
- Persoonlijke aanbevelingen vanuit eigen gebruik
- Uitleg van protocollen (Zigbee, Matter, Thread, Z-Wave, Wi-Fi)
- Stap-voor-stap handleidingen voor installatie en automatisering
- Eerlijke vergelijkingen tussen merken (Philips Hue vs IKEA, Tado vs Netatmo, etc.)

---

## Contentstructuur

### 1. Aanraders (Koopgidsen) — 20 gidsen
Pagina's onder `/aanraders/[slug]` met per categorie een overzicht van de beste producten, elk met een "Beste keuze" badge, uitgebreide pros & cons, en affiliate links naar bol.com en Coolblue.

| Slug | Titel |
|------|-------|
| `beste-slimme-verlichting` | Beste slimme verlichting (2026) |
| `beste-slimme-stekkers` | Beste slimme stekkers (2026) |
| `beste-slimme-sensoren` | Beste slimme sensoren (2026) |
| `beste-smart-home-hub` | Beste smart home hub (2026) |
| `beste-slimme-thermostaat` | Beste slimme thermostaat (2026) |
| `beste-slimme-radiatorkraan` | Beste slimme radiatorkraan (2026) |
| `beste-slimme-bewegingssensor` | Beste slimme bewegingssensor (2026) |
| `beste-mesh-wifi-systeem` | Beste mesh wifi systeem (2026) |
| `beste-energie-monitor` | Beste slimme energiemeter (2026) |
| `beste-slimme-slot` | Beste slimme deurslot (2026) |
| `beste-slimme-camera` | Beste slimme camera (2026) |
| `beste-slimme-deurbel` | Beste slimme deurbel (2026) |
| `beste-slimme-producten-voor-huisdieren` | Beste slimme producten voor huisdieren (2026) |
| `beste-slimme-producten-voor-kinderen` | Beste slimme producten voor kinderen (2026) |
| `beste-smart-home-huurwoning` | Beste smart home producten voor een huurwoning (2026) |
| `goedkoopste-smart-home-beginners` | Goedkoop smart home beginnen: starterset onder €50 (2026) |
| `slimme-verlichting-per-kamer` | Slimme verlichting per kamer: wat werkt het best? |
| `alle-lsc-smart-connect-producten-action` | LSC Smart Connect Action: alle producten |

> Twee gidsen zijn geredirect: `beste-slimme-stekkers-2026` → `beste-slimme-stekkers` en `beste-robotstofzuigers-2026` → buiten de focus van de site.

---

### 2. Blog — 43 artikelen
Pagina's onder `/blog/[slug]`. Mix van vergelijkingsartikelen, uitlegartikelen, protocol-diepgangen en productreviews.

**Protocollen & technologie**
- `wat-is-zigbee` — Wat is Zigbee? Alles over het smart home protocol
- `wat-is-matter` — Wat is Matter? De nieuwe smart home standaard
- `wat-is-thread` — Wat is Thread? Het slimme protocol naast Matter uitgelegd
- `zigbee-vs-zwave-vs-matter-vs-wifi` — Zigbee vs Z-Wave vs Matter vs Wi-Fi: wat moet je kiezen?
- `matter-vs-zigbee` — Matter vs Zigbee: wat is het verschil en wat kies je in 2026?
- `zigbee-vs-wifi-lampen` — Zigbee vs wifi lampen: welke moet je kiezen?
- `p1-meter-uitleg` — P1 meter: wat is het en hoe lees je je slimme meter uit?

**Hubs & ecosystemen**
- `beste-smart-home-hub` — Smart home hub kiezen: Homey, Home Assistant of SmartThings?
- `home-assistant-vs-homey` — Home Assistant vs Homey: wat is beter?
- `homey-bridge-vs-homey-pro` — Homey Bridge of Homey Pro? De eerlijke vergelijking (2026)
- `homey-uitleg-beginners` — Homey uitgelegd: de beste smart home hub voor beginners?
- `google-home-vs-alexa` — Google Home vs Amazon Alexa: welk smart home systeem past bij jou?
- `homekit-uitleg` — Apple HomeKit: smart home voor Apple-gebruikers uitgelegd
- `google-home-uitleg` — Google Home uitgelegd: smart home met Google instellen in 2026
- `klikaanklikuit-smart-home` — KlikAanKlikUit slim maken: de overstap naar een echt smart home

**Verlichting**
- `wat-is-slimme-verlichting` — Wat is slimme verlichting en hoe werkt het?
- `slimme-lampen-zonder-hub` — Slimme lampen zonder hub: wanneer is het slim en wanneer niet?
- `slimme-lamp-kopen` — Slimme lamp kopen: waar moet je op letten? (complete gids 2026)
- `philips-hue-alternatieven` — Philips Hue alternatieven: 4 goedkopere slimme lampen vergeleken
- `philips-hue-vs-ikea-tradfri` — Philips Hue vs IKEA (2026): welke slimme verlichting kies je?
- `philips-hue-bridge-nodig` — Philips Hue Bridge — heb je hem echt nodig?
- `mijn-slimme-verlichtingssetup-homey-pro` — Mijn slimme verlichtingssetup met Homey Pro 2026

**Sensoren & beveiliging**
- `wat-zijn-slimme-sensoren` — Wat zijn slimme sensoren en hoe werken ze?
- `aqara-vs-tapo` — Aqara vs Tapo: wat is beter?
- `aqara-vs-philips-hue-sensoren` — Aqara vs Philips Hue sensoren (2026)
- `smart-home-beveiliging-tips` — Smart home beveiliging: zo voorkom je hackers en datalekken

**Camera's & deurbellen**
- `wat-is-een-slimme-camera` — Wat is een slimme camera en hoe werkt het?
- `beste-slimme-deurbel` — Slimme deurbel kiezen: waar moet je op letten?
- `ring-vs-tapo-deurbel` — Ring deurbel vs Tapo deurbel: welke slimme deurbel is beter?
- `eufy-vs-ring-camera` — Eufy vs Ring camera (2026): welke is de beste beveiligingscamera?
- `slimme-deurbel-zonder-abonnement` — Slimme deurbel zonder abonnement: de beste opties in 2026

**Stekkers & energie**
- `wat-is-een-slimme-stekker` — Wat is een slimme stekker en hoe werkt het?
- `slimme-stekker-energiebesparing` — Slimme stekker voor energiebesparing: hoeveel bespaar je echt?
- `smart-home-energiebesparing` — Smart home voor energiebesparing: zo verlaag je je energierekening

**Thermostaten**
- `beste-slimme-thermostaat` — Beste slimme thermostaat 2026: Tado, Netatmo of Nest?
- `slimme-radiatorkraan` — Slimme radiatorkraan: wat is het en welke is de beste in 2026?
- `tado-vs-netatmo` — Tado vs Netatmo thermostaat (2026): welke past bij jou?
- `slimme-thermostaat-besparing` — Hoeveel bespaar je met een slimme thermostaat? (rekenvoorbeelden)

**Doelgroep & situatie**
- `smart-home-voor-huisdieren` — Smart Home voor Huisdieren: veiligheid, comfort en controle
- `smart-home-voor-kinderen` — Smart Home voor Kinderen: meer veiligheid en rust in huis
- `smart-home-huurwoning` — Smart home in een huurwoning: wat mag en wat werkt?
- `slim-huis-budget` — Slim huis beginnen met een budget: starterset onder €100 (2026)
- `lsc-smart-connect-action-smart-home` — LSC Smart Connect van Action: goedkoop slim huis voor €10?

---

### 3. How-to (Stap-voor-stap handleidingen) — 19 handleidingen
Pagina's onder `/how-to/[slug]`. Praktische stappenplannen voor installatie, koppeling en automatisering.

| Slug | Titel |
|------|-------|
| `beginnen-met-smart-home` | Hoe begin je met een smart home? |
| `slimme-verlichting-installeren` | Hoe installeer je slimme verlichting? |
| `wifi-verbeteren-voor-smart-home` | Hoe verbeter je wifi voor je smart home? |
| `smart-home-hub-installeren` | Hoe installeer je een smart home hub? |
| `slim-huis-beveiligen` | Hoe beveilig je je slimme huis? |
| `lamp-automatisch-aan-bij-beweging` | Lamp automatisch aan bij beweging instellen (stap voor stap) |
| `slimme-verlichting-koppelen-lukt-niet` | Slimme verlichting koppelen lukt niet? Zo los je het op |
| `bewegingssensor-instellen` | Bewegingssensor instellen: zo werkt het stap voor stap |
| `smart-home-zonder-hub-instellen` | Smart home zonder hub instellen: zo werkt het |
| `slimme-stekker-instellen` | Slimme stekker instellen: zo werkt het stap voor stap |
| `homey-automatisering-maken` | Hoe maak je een automatisering in Homey? (flows stap voor stap) |
| `hoe-installeer-je-een-slimme-deurbel` | Hoe installeer je een slimme deurbel? |
| `hoe-stel-je-een-slimme-thermostaat-in` | Hoe stel je een slimme thermostaat in? |
| `hoe-koppel-je-philips-hue-aan-google-home` | Hoe koppel je Philips Hue aan Google Home? |
| `hoe-installeer-je-een-tapo-camera` | Hoe installeer je een Tapo camera? |
| `hoe-maak-je-automatisering-home-assistant` | Hoe maak je een automatisering in Home Assistant? |
| `hoe-verbind-je-zigbee-apparaten` | Hoe verbind je Zigbee apparaten? |
| `hoe-stel-je-een-slimme-stekker-in-met-schema` | Slimme stekker instellen met tijdschema: zo werkt het |
| `ikea-zigbee-koppelen-homey-pro` | IKEA Zigbee-lamp koppelen aan Homey Pro |

---

### 4. Tips (Uitlegartikelen & advies) — 18 pagina's
Pagina's onder `/tips/[slug]`. Korte informatieve artikelen en uitleg voor beginners en gevorderden.

| Slug | Titel |
|------|-------|
| `privacy-en-veiligheid-smart-home` | Privacy & veiligheid in je smart home |
| `energie-besparen-met-smart-home` | Energie besparen met smart home |
| `slim-huis-beveiligen` | Slim huis beveiligen met slimme apparaten |
| `slimme-camera-uitleg` | Slimme camera's uitgelegd – waar moet je op letten? |
| `slimme-deurbel-uitleg` | Slimme deurbel uitgelegd: werking & privacy |
| `slimme-sensoren-uitleg` | Slimme sensoren uitgelegd: soorten, toepassingen & tips |
| `wat-is-slimme-verlichting` | Wat is slimme verlichting? (uitleg + wifi vs Zigbee) |
| `beginnen-met-slimme-verlichting` | Beginnen met slimme verlichting |
| `beginnen-met-smart-home` | Beginnen met smart home – 5 stappen voor beginners |
| `merken-combineren-zonder-gedoe` | Slimme merken combineren in één smart home |
| `slim-huis-zonder-hub` | Slim huis zonder hub: kan dat? (voor- en nadelen) |
| `slimme-verlichting-werkt-niet-na-stroomuitval` | Slimme verlichting werkt niet na stroomuitval |
| `slimme-lamp-werkt-niet-met-schakelaar` | Slimme lamp werkt niet met schakelaar |
| `wat-is-een-smart-home-hub` | Wat is een smart home hub? |
| `wifi-verbeteren-voor-smart-home` | Wi-Fi verbeteren voor smart home: 10 tips |
| `2-4ghz-vs-5ghz-smart-home` | 2,4 GHz vs 5 GHz voor smart home |
| `smart-home-apparaat-koppelt-niet-wifi` | Smart home apparaat koppelt niet met Wi-Fi? |
| `wifi-bereik-verbeteren-zonder-nieuwe-router` | Wi-Fi bereik verbeteren zonder nieuwe router |

---

### 5. Producten — 113 productpagina's
Pagina's onder `/producten/[slug]`. Individuele productpagina's met specs, persoonlijke noot, pros & cons en affiliate links. De meeste pagina's worden 301-geredirect naar de relevante aanradersgids.

**Categorieën en aantallen:**

| Categorie | Aantal producten | Voorbeeldmerken |
|-----------|-----------------|-----------------|
| `slimme-verlichting` | ~23 | Philips Hue, IKEA Tradfri, Tapo, Innr, Govee, Nanoleaf |
| `sensoren` | ~20 | Aqara, Eve, Tapo, Sonoff, Bosch, Philips Hue |
| `slimme-cameras` | ~10 | Eufy, Tapo, Reolink, Eve |
| `slimme-deurbellen` | ~10 | Aqara, Tapo, Ring, Reolink, Eufy, Philips Hue |
| `slimme-stekkers` | ~10 | Tapo, Eve, Philips Hue, Innr, SwitchBot, Aqara, Bosch |
| `smart-home-hubs` | ~7 | Homey Pro, Home Assistant Green, Philips Hue Bridge, Samsung SmartThings, Homey Bridge, Aqara |
| `slimme-thermostaten` | ~7 | Google Nest, Tado, Netatmo, Bosch |
| `mesh-wifi` | ~8 | TP-Link Deco, Eero, Google Nest Wifi |
| `energie-monitors` | ~5 | Frient, Shelly, Zendure |
| `slimme-sloten` | ~3 | Nuki, Yale, Danalock |

**Redirect-logica:** Dunne productpagina's (~100-150 woorden) worden via HTTP 308 doorgestuurd naar de bijbehorende aanradersgids. Producten in categorieën met noindex (cameras, deurbellen, sloten) hebben een noindex metatag.

---

### 6. Categorie-pagina's
Pagina's onder `/categorie/[slug]`. Overzichtspagina's per productcategorie met alle producten in die categorie.

Actieve categorieën:
- `slimme-verlichting`
- `sensoren`
- `slimme-stekkers`
- `smart-home-hubs`
- `slimme-thermostaten`
- `mesh-wifi`
- `energie-monitors`

Geredirect (noindex-categorieën):
- `slimme-cameras` → `/categorie/slimme-verlichting`
- `slimme-deurbellen` → `/categorie/slimme-verlichting`

---

### 7. Overige pagina's

| URL | Inhoud |
|-----|--------|
| `/` | Homepage met populaire producten, koopgidsen, en persoonlijk verhaal |
| `/over` | Over Hafid: tijdlijn van zijn smart home-reis, huidige setup (Home Assistant) |
| `/aanraders` | Overzicht van alle koopgidsen |
| `/zoeken` | Zoekpagina |
| `/vergelijking` | Vergelijkingspagina's |
| `/contact` | Contactpagina |
| `/disclaimer` | Affiliate disclaimer |
| `/privacy` | Privacybeleid |
| `/cookies` | Cookiebeleid |
| `/retourbeleid` | Retourbeleid |

---

## Merken die op de site voorkomen

**Verlichting:** Philips Hue, IKEA Tradfri, Tapo (TP-Link), Innr, Govee, Nanoleaf  
**Hubs/systemen:** Homey Pro (2026), Home Assistant, Philips Hue Bridge, Samsung SmartThings, Aqara Hub, Google Home, Amazon Alexa, Apple HomeKit  
**Sensoren:** Aqara, Eve, Tapo, Sonoff, Bosch Smart Home, Philips Hue  
**Camera's:** Eufy, Tapo, Reolink, Eve, Ring  
**Deurbellen:** Aqara, Tapo, Ring, Reolink, Eufy, Philips Hue Secure  
**Thermostaten:** Tado, Netatmo, Google Nest, Bosch  
**Slimme sloten:** Nuki, Yale, Danalock  
**Mesh wifi:** TP-Link Deco, Amazon Eero, Google Nest Wifi  
**Energie:** Frient, Shelly, Zendure  
**Budget:** LSC Smart Connect (Action)  

---

## Doelgroep

1. **Beginners** — mensen die willen starten met smart home, geen technische kennis vereist
2. **Gevorderden** — mensen die uitbreiden, automatiseren of overstappen naar een ander systeem
3. **Specifieke situaties** — huurders, mensen met huisdieren/kinderen, energie-bewuste gebruikers, budget-kopers

---

## Protocollen & technologie uitgelegd op de site

- **Zigbee** — mesh-protocol voor sensoren en verlichting, hub vereist
- **Matter** — open standaard voor merkoverschrijdende compatibiliteit (2022+)
- **Thread** — IPv6 mesh-protocol, basis voor Matter over Thread
- **Z-Wave** — alternatief voor Zigbee, betere muurdoordringing
- **Wi-Fi** — directe verbinding, geen hub, maar minder schaalbaar
- **Home Assistant** — open-source domotica-platform (eigenaar's huidige setup)
- **Homey** — commerciële smart home hub (eerder gebruikt)

---

## SEO-structuur (samenvatting)

- **Geïndexeerde content:** aanraders, blog, how-to, tips, categorie-pagina's, producten zonder noindex
- **Noindex:** beveiligingscategorie-pagina's (cameras, deurbellen, sloten), specifieke blog- en how-to-artikelen
- **301-redirects:** dunne productpagina's → bijbehorende aanradersgids; bare domain → www; oude aanraders → canonieke versie
- **Sitemap:** alleen indexeerbare pagina's
- **Robots.txt:** alles allow, behalve `/topic/` (redirectpagina's)
- **Structured data:** FAQPage schema op blog/tips/how-to; Person schema op /over; Product schema op productpagina's
