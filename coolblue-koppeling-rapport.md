# Coolblue koppeling rapport

**Datum:** april 2026  
**Totaal producten:** 85  
**Datafeed:** `data/feeds/coolblue.csv.gz` — 3234 producten (AWIN affiliate links)  
**Matching:** 6-laagse strategie (EAN → naam → kernmodel → 2 woorden → modelnummer → zoeklink)

> EAN-kolom aanwezig in feed maar leeg — alleen naam-matching toegepast.

---

## Eindresultaat

| Categorie | Aantal |
|---|---|
| Bestaande directe Coolblue-links | 4 |
| AWIN affiliate links via datafeed (nieuw) | 12 |
| Zoeklinks als fallback | **69** |
| Geen coolblueUrl | **0** |

**Totale dekking:** 85/85 producten hebben een Coolblue knop.

---

## Directe links via datafeed — AWIN affiliate (12 nieuw)

| Productnaam | Coolblue ID | Feed naam | Methode |
|---|---|---|---|
| Philips Hue White Ambiance Starterkit | 889938 | Philips Hue White Ambiance Starter Pack E27 met 3 lampen, dimmer + Bridge | kernmodel |
| Philips Hue White E27 | 968148 | Philips Hue A60 White Ambiance 1100lm E27 | naam |
| Philips Hue Color Ambiance E27 | 968152 | Philips Hue A60 White and Color E27 1100lm | naam |
| Philips Hue GU10 White Ambiance (2-pack) | 949408 | Philips Hue White Ambiance GU10 | kernmodel |
| Philips Hue Smart Plug | 890074 | Philips Hue Smart Plug | naam (100%) |
| TP-Link Tapo T110 Contactsensor | 928517 | TP-Link Tapo T110 smart-contactsensor | modelnummer |
| TP-Link Tapo T315 Temperatuur & Luchtvochtigheid | 928583 | TP-Link Tapo T315 Smart thermometer and hygrometer | modelnummer |
| TP-Link Tapo P115 Slimme Stekker | 918281 | Tapo P115 Slimme Stekker | naam (100%) |
| TP-Link Tapo D235 Slimme Deurbel | 950564 | TP-Link Tapo D235 Smart Battery & Wired Doorbell | modelnummer |
| TP-Link Tapo C225 Camera | 919556 | TP-Link Tapo C225 2.5K Pan & Tilt | modelnummer |
| TP-Link Tapo T100 Smart Motion Sensor | 928516 | TP-Link Tapo T100 smart-bewegingssensor | modelnummer |
| TP-Link Deco XE75 (3-pack) | 904018 | TP-Link Deco XE75 3-pack | naam (100%) |

## Bestaande directe Coolblue-links (4)

| Productnaam | Coolblue ID |
|---|---|
| Philips Hue Go Tafellamp White & Color (Zwart) | 922837 |
| Philips Hue Lily Starter Pack White & Color | 813432 |
| Philips Hue Play HDMI Sync Box 8K | 954033 |
| TP-Link Tapo L630 GU10 Wi-Fi (4-pack) | 956288 |

---

## Producten met zoeklink — niet in datafeed (69)

### Wat niet in de feed staat (én onmogelijk te matchen)

| Merk | Reden |
|---|---|
| Aqara (13 producten) | Volledig afwezig in feed |
| Eve (5 producten) | Volledig afwezig |
| Ring | Niet verkocht via Coolblue feed |
| Google Nest Thermostat | Niet in feed |
| Govee (3 producten) | Niet in feed |
| Innr (3 producten) | Niet in feed |
| Tado / tado° (3 producten) | Niet in feed |
| Nuki (2 producten) | Niet in feed |
| Yale Linus | Niet in feed |
| Danalock V3 | Niet in feed |
| Shelly (2 producten) | Niet in feed |
| SwitchBot | Niet in feed |
| frient | Niet in feed |
| Zendure | Niet in feed |
| BrosTrend | Niet in feed |
| Amazon Eero Pro 6E | Niet in feed |
| Home Assistant Green | Niet in feed |
| Reolink (2 producten) | Niet in feed |
| Eufy (3 producten) | Niet in feed |
| Nanoleaf (2 producten) | Niet in feed |
| Homey (2 producten) | Niet in feed |
| Aeotec SmartThings | Niet in feed |
| Netatmo | Alleen niet-thermostaat producten in feed |

### Producten die Coolblue WEL verkoopt maar niet als losse variant in de feed

Deze producten kun je manueel koppelen via de Coolblue productpagina:

| Productnaam | Opmerking |
|---|---|
| Philips Hue Lightstrip Plus | Feed heeft alleen Outdoor Lightstrip (862206) — andere categorie |
| Philips Hue Dimmer Switch V2 | Geen losse dimmer in feed; alleen combinaties met lampen |
| Philips Hue Motion Sensor (binnen) | Niet in feed |
| Philips Hue Smart Plug + Dimmer Switch combipack | Combipack niet in feed |
| Philips Hue Bridge | Feed heeft Bridge Pro (968647) — check of dit klopt |
| TP-Link Tapo L530E (2-pack) | Coolblue verkoopt L535E — opvolger van L530E |
| TP-Link Tapo L510E | Niet als los product in feed |
| TP-Link Tapo L920-5 LED Strip | Coolblue heeft L930-5 (956287) — opvolger |
| TP-Link Tapo P110 Slimme Stekker | Niet in feed |
| TP-Link Tapo KE100 KIT | Niet in feed |
| TP-Link Tapo H200 Smart Hub | Niet in feed |
| TP-Link Tapo D205 | Coolblue heeft D210 (969587) — opvolger |
| TP-Link Deco XE75 (2-pack) | Feed heeft alleen 3-pack |

### Handmatige koppeling (aanbevolen voor Philips Hue)

1. Ga naar `coolblue.nl/zoeken?query=PRODUCTNAAM`
2. Kopieer het productnummer uit de URL: `coolblue.nl/product/XXXXXX`
3. Voeg toe in `data/products.js`:
   ```js
   coolblueUrl: "https://www.coolblue.nl/product/XXXXXX",
   ```

---

## Afgewezen automatische matches (false positives)

De volgende matches werden gevonden door het algoritme maar zijn **niet toegepast** omdat ze onjuist zijn:

| Ons product | Fout gematchte feed naam | Reden afgewezen |
|---|---|---|
| Philips Hue Smart Plug + Dimmer combipack | Philips Hue Smart Plug (enkelvoudig) | Verkeerd product (geen dimmer) |
| TP-Link Tapo C200 | TP-Link Tapo C500 | Ander modelnummer |
| Eve Cam | Hue Secure beveiligingscamera | Ander merk/product |
| Philips Hue Bridge | Philips Hue Bridge Pro | Pro-versie vs standaard |
| Netatmo Slimme Thermostaat | Netatmo Slimme Windmeter | Verkeerd product |
| Philips Hue Dimmer Switch V2 | Philips Hue Draadloze dimmer switch 4-pack | Verkeerde variant (4-pack) |
| TP-Link Deco XE75 2-pack | TP-Link Deco XE75 3-pack | Andere pack-grootte |
| eufy C30 Deurbel Bundel | Philips stofzuiger XC3031 | Compleet verkeerd product |

---

## Scripts

- `scripts/coolblue-match.cjs` — eerste matchpoging (handmatige keys)
- `scripts/coolblue-match-v2.cjs` — verbeterd algoritme met 6 fallbacks
- `scripts/coolblue-apply.cjs` — schrijft bevestigde matches terug naar products.js
- `scripts/coolblue_matches_v2.json` — ruwe matchresultaten
