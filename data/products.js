/**
 * EAN-codes voor bol.com knoppen:
 * Voeg per product toe: ean: "1234567890123"
 * EAN vind je op bol.com in de URL (/p/naam/EAN/) of in productspecificaties.
 * Laat het veld weg of zet "" als je de EAN nog niet weet → geen bol.com knop.
 */
export const products = [
  /* =========================
     SLIMME VERLICHTING
  ========================== */

  {
    slug: "philips-hue-white-ambiance-starterkit",
    ean: "8718696904503",
    brand: "Philips Hue",
    name: "Philips Hue White Ambiance Starterkit",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-white-ambiance.png",
    featured: true,
    description:
      "Complete starterkit met slimme lampen en bridge. Ideaal om te starten met slimme verlichting.",
    features: [
      "Bediening via app en spraak",
      "Werkt met Alexa, Google en Siri",
      "Uitbreidbaar met extra lampen",
    ],
    affiliateUrl: "https://www.amazon.nl/dp/B0991VHWSJ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561477934&a=2855887&m=85161",
    rating: 4.7,
    priceHint: "€70 – €85",
    priceLastUpdated: "april 2026",
    pros: ["Volledig ecosysteem uitbreidbaar", "Stabiele Zigbee verbinding", "Werkt met alle grote platforms"],
    cons: ["Duurder dan wifi-alternatieven", "Bridge vereist voor volledige functionaliteit"],
    forWho: ["Voor wie serieus wil beginnen met slimme verlichting", "Voor Zigbee-gebruikers die willen uitbreiden"],
    personalNote: "De beste starterkit als je serieus een slim huis wilt bouwen. De bridge maakt automatiseringen zonder internet mogelijk.",
    youtubeUrl: "https://www.youtube.com/watch?v=wm9IsHKN-ZQ",
  },

  {
    slug: "philips-hue-white-e27",
    ean: "8719514288232",
    brand: "Philips Hue",
    name: "Philips Hue White E27 (losse lamp)",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-white.png",
    description:
      "Losse slimme E27 lamp met warm wit licht, dimbaar en app-gestuurd.",
    features: ["Warm wit licht", "Dimbaar", "Werkt met Hue Bridge"],
    affiliateUrl: "https://www.amazon.nl/dp/B09TCNXYXJ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=42367630896&a=2855887&m=85161",
    priceHint: "€15 – €20",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/iUsm0cBeMiA",
  },

  {
    slug: "philips-hue-color-ambiance-e27",
    ean: "8719514291171",
    brand: "Philips Hue",
    name: "Philips Hue Color Ambiance E27",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-color-ambiance.png",
    description:
      "Slimme lamp met wit én gekleurd licht, bedienbaar via Bluetooth of Hue Bridge.",
    features: ["16 miljoen kleuren", "Dimbaar", "Bluetooth & Bridge"],
    affiliateUrl: "https://www.amazon.nl/dp/B099P3CP1K?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=42367630897&a=2855887&m=85161",
    priceHint: "€35 – €45",
    priceLastUpdated: "april 2026",
    pros: ["16 miljoen kleuren", "Werkt via Bluetooth zonder bridge"],
    cons: ["Bridge nodig voor automatiseringen", "Duurder dan kleurlampen van andere merken"],
    forWho: ["Voor wie kleurverandering en sfeerverlichting wil", "Voor Hue-gebruikers die kleuren willen toevoegen"],
    personalNote: "Prima keuze als je al een Hue Bridge hebt. Via Bluetooth werkt hij ook solo, maar automatiseringen werken beter met bridge.",
    youtubeUrl: "https://www.youtube.com/shorts/mwye3iuxo7Q",
  },

  {
    slug: "philips-hue-lightstrip-plus",
    ean: "8721103087812",
    brand: "Philips Hue",
    name: "Philips Hue Lightstrip Plus",
    category: "slimme-verlichting",
    image: "/images/products/philips-lightstrip-plus.png",
    description:
      "Flexibele LED-strip voor indirecte verlichting, uitbreidbaar en dimbaar.",
    features: ["Uitbreidbaar", "Wit & kleur", "Hue ecosysteem"],
    affiliateUrl: "https://www.amazon.nl/dp/B088RX9CSZ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F864282%2Fphilips-hue-lightstrip-plus-white-color-bluetooth-2m-basisset.html",
    priceHint: "€55 – €70",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/b8WqkwpsRM8",
  },

  {
    slug: "govee-rgbic-ledstrip",
    ean: "6974316999911",
    brand: "Govee",
    name: "Govee RGBIC Pro LED Strip (5 m)",
    category: "slimme-verlichting",
    image: "/images/products/govee-rgbic-ledstrip.png",
    description:
      "Betaalbare RGBIC LED-strip met app-bediening en muzieksynchronisatie.",
    features: ["RGBIC", "Muzieksync", "Geen hub nodig"],
    affiliateUrl: "https://www.amazon.nl/dp/B09BN2PSR8?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DGovee%2520RGBIC%2520Pro%2520LED%2520Strip%2520(5%2520m)",
    priceHint: "€20 – €30",
    priceLastUpdated: "april 2026",
    pros: ["Betaalbaar", "Geen hub nodig", "Kleurverandering per segment (RGBIC)"],
    cons: ["Eigen Govee-app vereist", "Beperkte smart home integratie"],
    forWho: ["Voor wie sfeerverlichting wil zonder hoge kosten", "Voor gamers en decoratieve toepassingen"],
    personalNote: "Sterk in prijs-kwaliteit voor decoratieve toepassingen. Niet ideaal als je volledige smart home integratie wilt.",
    youtubeUrl: "https://www.youtube.com/shorts/h43CHLmeEXc",
  },

  {
    slug: "tapo-l530e",
    ean: "6935364006167",
    brand: "TP-Link Tapo",
    name: "Tapo L530E Wi-Fi Kleurlamp",
    category: "slimme-verlichting",
    image: "/images/products/tp-link-tapo-l530e.png",
    description:
      "Slimme Wi-Fi lampen met kleur en wit licht, geen hub nodig.",
    features: ["Wi-Fi", "Kleur & wit", "Alexa & Google"],
    affiliateUrl: "https://www.amazon.nl/dp/B08QRQQ53T?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956290%2Ftp-link-tapo-l535e-wit-en-gekleurd-licht-e27.html",
    priceHint: "€18 – €25",
    priceLastUpdated: "april 2026",
    pros: ["Kleur en wit licht", "Geen hub nodig", "Alexa & Google Home"],
    cons: ["Wifi-belasting bij veel lampen", "App minder uitgebreid dan Hue"],
    forWho: ["Voor starters die betaalbaar willen beginnen", "Voor wie kleur wil zonder Hue-investering"],
    personalNote: "Goede instapkeuze. Werkt prima voor eenvoudig gebruik, maar minder geschikt als basis voor een groter smart home.",
    youtubeUrl: "https://www.youtube.com/shorts/ISkg6oerWgE",
  },

  {
    slug: "innr-zigbee-e27",
    ean: "8718781555108",
    brand: "Innr",
    name: "Innr Zigbee E27 LED (4-pack)",
    category: "slimme-verlichting",
    image: "/images/products/innr-zigbee-e27.png",
    description:
      "Zigbee slimme lampen, compatibel met Philips Hue en SmartThings.",
    features: ["Zigbee", "Dimbaar", "Warm wit"],
    affiliateUrl: "https://www.amazon.nl/dp/B0CHJQDRSY?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DInnr%2520Zigbee%2520E27%2520LED",
    priceHint: "€40 – €55",
    priceLastUpdated: "april 2026",
    pros: ["Compatibel met Philips Hue Bridge", "Zigbee — stabiel en energiezuinig", "Warm wit licht"],
    cons: ["Geen kleuren", "Vereist een Zigbee hub"],
    forWho: ["Voor Hue-gebruikers die betaalbaar willen uitbreiden", "Voor Zigbee-enthousiastelingen"],
    personalNote: "Slimme keuze als je al een Hue Bridge of Zigbee hub hebt en wil uitbreiden zonder de Hue-prijs te betalen.",
    youtubeUrl: "https://www.youtube.com/shorts/VbaTma08sMc",
  },

  {
    slug: "tapo-l510e",
    ean: "6935364030988",
    brand: "TP-Link Tapo",
    name: "Tapo L510E Slimme Wi-Fi Lamp",
    category: "slimme-verlichting",
    image: "/images/products/tapo-l510e.png",
    description: "Dimbare slimme Wi-Fi lamp zonder hub.",
    features: ["Wi-Fi", "Dimbaar", "Geen hub nodig"],
    affiliateUrl: "https://www.amazon.nl/dp/B087RZVBQW?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DTapo%2520L510E%2520Slimme%2520Wi-Fi%2520Lamp",
    priceHint: "€10 – €15",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/Up756rCbJkw",
  },

  /* =========================
     SENSOREN
  ========================== */

  {
    slug: "aqara-deur-raamsensor-p2",
    ean: "6970504219649",
    brand: "Aqara",
    name: "Aqara Deur- & Raamsensor",
    category: "sensoren",
    image: "/images/products/aqara-deur-en-raamsensor-p2.png",
    description: "Zigbee contactsensor voor deuren en ramen.",
    features: ["Zigbee", "Compact", "Automatiseringen"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BTL8B72D?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Deur-%2520%2526%2520Raamsensor",
    priceHint: "€15 – €20",
    priceLastUpdated: "april 2026",
    pros: ["Compact en betrouwbaar", "Lage batterijverbruik", "Werkt met Homey, Home Assistant en HomeKit"],
    cons: ["Vereist Zigbee hub", "Geen wifi versie"],
    forWho: ["Voor wie automatisch wil weten of ramen/deuren open zijn", "Voor beveiligingsautomatiseringen"],
    personalNote: "Één van de meest gebruikte sensoren in mijn eigen smart home. Klein, stil en zeer betrouwbaar.",
    youtubeUrl: "https://www.youtube.com/shorts/j2NIXDy3yI8",
  },

  {
  slug: "eve-motion-matter-bewegingssensor",
  name: "Eve Motion (Matter)",
  brand: "Eve",
  category: "sensoren",
  image: "/images/products/eve-motion-matter-bewegingssensor.png",
  description:
    "Slimme bewegingssensor met Matter en Thread ondersteuning.",
  features: ["Bewegingsdetectie", "Matter", "Thread", "Automatisering"],
  affiliateUrl:
    "https://www.amazon.nl/Eve-Motion-Matter-bewegingssensor-automatische/dp/B0BZJLJZRM?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DEve%2520Motion%2520(Matter)",
  priceHint: "€35 – €42",
  priceLastUpdated: "april 2026",
  pros: ["Matter + Thread: toekomstbestendig", "Volledig lokaal — geen cloud", "Werkt met Apple Home, Google Home, Home Assistant"],
  cons: ["Duurder dan wifi-alternatieven", "Thread vereist een Thread Border Router"],
  forWho: ["Voor Apple-gebruikers die maximale privacy willen", "Voor wie investeert in een toekomstbestendig smart home"],
  personalNote: "De beste keuze als je al een Matter-compatibele hub hebt. Matter + Thread zorgt voor ultralage latency en werkt zonder internet.",
  youtubeUrl: "https://www.youtube.com/watch?v=MwK6XCo_5JY",
},

  {
    slug: "aqara-fp2-aanwezigheidssensor",
  ean: "6970504219663",
    brand: "Aqara",
    name: "Aqara FP2 Aanwezigheidssensor",
    category: "sensoren",
    image: "/images/products/aqara-fp2.png",
    description:
      "Geavanceerde mmWave aanwezigheidssensor met zone-detectie.",
    features: ["mmWave radar", "Zone-detectie", "Zeer nauwkeurig"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BXWZMQJ3?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520FP2%2520Aanwezigheidssensor",
    priceHint: "€50 – €60",
    priceLastUpdated: "april 2026",
    pros: ["Zone-detectie: meerdere zones in één ruimte", "Detecteert aanwezigheid ook zonder beweging", "Zeer nauwkeurig (mmWave radar)"],
    cons: ["Duurder dan gewone bewegingssensoren", "Vereist Zigbee hub", "Configuratie vraagt meer kennis"],
    forWho: ["Voor wie nooit een lamp wil die onterecht uitgaat terwijl je er nog bent", "Voor geavanceerde automatiseringen met zone-detectie"],
    personalNote: "De Aqara FP2 is een gamechanger voor verlichting op basis van aanwezigheid. Normale sensoren detecteren alleen beweging — de FP2 detecteert of je er nog bent, ook als je stilzit.",
    youtubeUrl: "https://www.youtube.com/shorts/LPven_LKoT8",
  },

  {
    slug: "aqara-temperatuur-rv-t1",
    ean: "0192784001264",
    brand: "Aqara",
    name: "Aqara Temperatuur & RV Sensor T1",
    category: "sensoren",
    image: "/images/products/aqara-temperatuur-rv-sensor.png",
    description:
      "Temperatuur- en luchtvochtigheidssensor voor slimme automatiseringen.",
    features: ["Temperatuur", "Luchtvochtigheid", "Zigbee"],
    affiliateUrl: "https://www.amazon.nl/dp/B0DM23Q1VB?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Temperatuur%2520%2526%2520RV%2520Sensor%2520T1",
    priceHint: "€14 – €18",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/2gnel7Aku3c",
  },

  {
    slug: "tapo-t110",
    ean: "4897098682951",
    brand: "TP-Link Tapo",
    name: "Tapo T110 Contactsensor",
    category: "sensoren",
    image: "/images/products/tapo-t100-contactsensor.png",
    description:
      "Contactsensor voor deuren en ramen binnen het Tapo ecosysteem.",
    features: ["Deur / raam detectie", "Slimme meldingen", "Automatiseringen"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BF5MC9QX?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=44127004388&a=2855887&m=85161",
    priceHint: "€12 – €15",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/rUPcVT878V4",
  },

  {
    slug: "aqara-waterleksensor-t1",
    ean: "6975833352142",
    brand: "Aqara",
    name: "Aqara Waterleksensor T1",
    category: "sensoren",
    image: "/images/products/aqara-waterleksensor.png",
    description: "Detecteert waterlekken en waarschuwt direct via app.",
    features: ["Waterdetectie", "Zigbee", "Automatiseringen"],
    affiliateUrl: "https://www.amazon.nl/dp/B0DWXHMFQS?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Waterleksensor%2520T1",
    priceHint: "€15 – €20",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/sKgjw-64WVg",
  },

  {
    slug: "tapo-t315",
    ean: "4897098682401",
    brand: "TP-Link Tapo",
    name: "Tapo T315 Temperatuur & Luchtvochtigheid",
    category: "sensoren",
    image: "/images/products/tapo-t315-temperatuur-en-luchtvochtigheid.png",
    description:
      "Slimme temperatuur- en luchtvochtigheidsmeter met display.",
    features: ["Temperatuur", "Luchtvochtigheid", "Display"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BNYSVV3J?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38840443808&a=2855887&m=85161",
    priceHint: "€18 – €25",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/96W-aKT8vPk",
  },

  {
    slug: "aqara-vibratiesensor",
    ean: "6975833357789",
    brand: "Aqara",
    name: "Aqara Vibratiesensor",
    category: "sensoren",
    image: "/images/products/aqara-vibratie-sensor.png",
    description: "Detecteert trillingen, kantelen en schokken.",
    features: ["Trilling detectie", "Kantelen", "Schokken"],
    affiliateUrl: "https://www.amazon.nl/dp/B07PJT939B?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Vibratiesensor",
    priceHint: "€15 – €20",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/dwRf4hPIUEM",
  },

    /* =========================
     SLIMME DEURBELLEN
  ========================== */

  {
    slug: "ring-video-deurbel",
    ean: "0840268997984",
    brand: "Ring",
    name: "Ring Video Deurbel (batterij)",
    category: "slimme-deurbellen",
    image: "/images/products/ring-videodeurbel-batterij.png",
    description: "Slimme videodeurbel met live beeld en meldingen.",
    features: ["Live beeld", "Meldingen", "Smartphone bediening"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BZWQP9Z1?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DRing%2520Video%2520Deurbel%2520(batterij)",
    priceHint: "€85 – €100",
    priceLastUpdated: "april 2026",
    pros: ["Grote naamsbekendheid", "Eenvoudige installatie", "Maandelijks gratis opslag inbegrepen"],
    cons: ["Cloudopslag na gratis periode betaald", "Beperkte smart home integratie buiten Ring/Amazon"],
    forWho: ["Voor wie geen bedrading wil aanpassen", "Voor Amazon Alexa gebruikers"],
    personalNote: "Goede keuze voor wie simpel wil beginnen. Wil je meer privacy of smart home integratie, kijk dan ook naar Aqara G410 of Reolink.",
    youtubeUrl: "https://www.youtube.com/shorts/_Oz6c6BiMjo",
  },

  /* =========================
     SLIMME THERMOSTATEN
  ========================== */

  {
    slug: "google-nest-thermostaat",
    brand: "Google Nest",
    name: "Google Nest Thermostaat",
    category: "slimme-thermostaten",
    image: "/images/products/google-thermostaat.png",
    description: "Slimme thermostaat die leert van je leefpatroon.",
    features: ["Zelflerend", "Energie besparen", "Google Home"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BXRYLMCC?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F671720%2Fgoogle-nest-learning-thermostat-3e-generatie.html",
    priceHint: "€110 – €130",
    priceLastUpdated: "april 2026",
    pros: ["Leert van je schema en past zich aan", "Energierapport via app", "Werkt met Google Home, Alexa en HomeKit"],
    cons: ["Alleen interessant voor Google-gebruikers", "Niet compatibel met alle ketelmerken"],
    forWho: ["Voor Google Home gebruikers die energie willen besparen", "Voor wie een designthermostaat zoekt"],
    personalNote: "Strak design en slimme functies, maar controleer eerst of hij werkt met jouw ketel. Tado en Netatmo zijn bredere alternatieven.",
    youtubeUrl: "https://www.youtube.com/shorts/ddghtqKnuBw",
  },

  {
    slug: "slimme-thermostaat-combiketel",
    ean: "8721352852360",
    brand: "Universeel",
    name: "Slimme Thermostaat voor Combiketel",
    category: "slimme-thermostaten",
    image: "/images/products/slimme-thermostaat-combiketel.png",
    description: "Universele slimme thermostaat voor cv-ketels.",
    features: ["Geschikt voor combiketel", "Energie besparen", "Slim schema"],
    affiliateUrl: "https://www.amazon.nl/dp/B0FHWDBYTF?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DSlimme%2520Thermostaat%2520voor%2520Combiketel",
    priceHint: "€55 – €75",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/watch?v=-xF6Ok9YNsg",
  },

  {
    slug: "tapo-ke100-kit",
    ean: "4897098688588",
    brand: "TP-Link",
    name: "TP-Link KE100 KIT Radiatorknop",
    category: "slimme-thermostaten",
    image: "/images/products/tp-link-ke100-radiatorknop.png",
    description: "Slimme radiatorknoppen met hub voor energiebesparing.",
    features: ["Radiatorknoppen", "Hub inbegrepen", "Energie besparen"],
    affiliateUrl: "https://www.amazon.nl/dp/B0CKWFVQZQ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DTP-Link%2520KE100%2520KIT%2520Radiatorknop",
    priceHint: "€50 – €65",
    priceLastUpdated: "april 2026",
    pros: ["Hub inbegrepen", "Energiebesparing per radiator", "App-bediening"],
    cons: ["Vereist Tapo hub", "Minder uitgebreid dan Tado"],
    forWho: ["Voor wie per kamer wil regelen zonder dure installatie"],
    youtubeUrl: "https://www.youtube.com/shorts/G1OlrOdJsX0",
  },

  /* =========================
     SLIMME STEKKERS
  ========================== */

  {
    slug: "tapo-p115",
    ean: "4897098687406",
    brand: "TP-Link Tapo",
    name: "TP-Link Tapo P115 Slimme Stekker",
    category: "slimme-stekkers",
    image: "/images/products/tp-link-tapo-p115-stekker.png",
    description: "Compacte slimme stekker met energiemeting.",
    features: ["Energieverbruik inzicht", "Wi-Fi", "Geen hub nodig"],
    affiliateUrl: "https://www.amazon.nl/dp/B09ZBGWYH9?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561531995&a=2855887&m=85161",
    rating: 4.6,
    priceHint: "€12 – €15",
    priceLastUpdated: "april 2026",
    pros: ["Realtime energiemeting", "Compact", "Geen hub nodig"],
    cons: ["Alleen binnen Tapo-app", "Energiemeting minder nauwkeurig dan Shelly"],
    forWho: ["Voor wie wil zien hoeveel een apparaat verbruikt", "Voor gebruik met timers en slimme schema's"],
    personalNote: "Mijn favoriete budget-stekker voor energiemeting. Voor €13 krijg je verrassend veel functionaliteit.",
    youtubeUrl: "https://www.youtube.com/shorts/l6WrOy4wRhU",
  },

  {
    slug: "tapo-p110",
    ean: "4897098682432",
    brand: "TP-Link Tapo",
    name: "TP-Link Tapo P110 Slimme Stekker",
    category: "slimme-stekkers",
    image: "/images/products/tapo-p110.png",
    description: "Populaire slimme stekker met realtime energiemeting.",
    features: ["Realtime energiemeting", "Timers", "Geen hub nodig"],
    affiliateUrl: "https://www.amazon.nl/dp/B09BFT7NZJ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F918281%2Ftapo-p115-slimme-stekker.html",
    rating: 4.7,
    priceHint: "€10 – €14",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/L5fLN4e77m8",
  },

  {
    slug: "eve-energy",
    ean: "4260195392328",
    brand: "Eve",
    name: "Eve Energy (Matter / Thread)",
    category: "slimme-stekkers",
    image: "/images/products/eve-energy-matter-thread.png",
    description: "Premium slimme stekker met Matter en Thread.",
    features: ["Matter", "Thread", "Volledig lokaal"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BYTB11J3?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DEve%2520Energy%2520(Matter%2520%252F%2520Thread)",
    rating: 4.5,
    priceHint: "€35 – €42",
    priceLastUpdated: "april 2026",
    pros: ["Matter + Thread: breed compatibel", "Volledig lokaal — geen cloud", "Nauwkeurige energiemeting"],
    cons: ["Duurder dan wifi-alternatieven", "Thread Border Router vereist voor Thread"],
    forWho: ["Voor wie toekomstbestendig wil werken met Matter", "Voor Apple Home en Home Assistant gebruikers"],
    personalNote: "De premium keuze in slimme stekkers. Als je al in Matter investeert, is Eve Energy de logische keuze — betrouwbaar en volledig lokaal.",
    youtubeUrl: "https://www.youtube.com/watch?v=ltf25fzyS0o",
  },

  {
    slug: "philips-hue-smart-plug",
    ean: "8719514342309",
    brand: "Philips Hue",
    name: "Philips Hue Smart Plug",
    category: "slimme-stekkers",
    image: "/images/products/philips-hue-smartplug.png",
    description: "Slimme stekker binnen het Hue ecosysteem.",
    features: ["Hue integratie", "Bluetooth", "Bridge optioneel"],
    affiliateUrl: "https://www.amazon.nl/dp/B09CV7QQKB?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561531997&a=2855887&m=85161",
    priceHint: "€25 – €32",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/watch?v=SQ3ClKGRbq8",
  },

  {
    slug: "philips-hue-smart-plug-combipack",
    ean: "8719327502785",
    brand: "Philips Hue",
    name: "Philips Hue Smart Plug + Dimmer Switch",
    category: "slimme-stekkers",
    image: "/images/products/philips-hue-smart-plug-combipack.png",
    description: "Combipack met slimme stekker en dimmer.",
    features: ["Dimmer switch", "Hue ecosysteem"],
    affiliateUrl: "https://www.amazon.nl/dp/B09QP98F9W?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F838481%2Fphilips-hue-smart-plug.html",
    priceHint: "€38 – €48",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/watch?v=SQ3ClKGRbq8",
  },

  {
    slug: "innr-zigbee-outdoor-smart-plug",
    ean: "8718781556273",
    brand: "Innr",
    name: "Innr Zigbee Outdoor Smart Plug",
    category: "slimme-stekkers",
    image: "/images/products/innr-zigbee-smart-plug.png",
    description: "Slimme stekker voor buitengebruik.",
    features: ["IP54", "Zigbee repeater"],
    affiliateUrl: "https://www.amazon.nl/dp/B0FL83D4DS?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DInnr%2520Zigbee%2520Outdoor%2520Smart%2520Plug",
    priceHint: "€25 – €32",
    priceLastUpdated: "april 2026",
    pros: ["IP54 — geschikt voor buiten", "Zigbee repeater ingebouwd", "Hue Bridge compatibel"],
    cons: ["Vereist Zigbee hub", "Iets groter dan binnenmodellen"],
    forWho: ["Voor wie buiten slimme apparaten wil schakelen", "Voor kerstverlichting of tuinverlichting"],
    youtubeUrl: "https://www.youtube.com/watch?v=EZeoW8ZK2vs",
  },

  {
    slug: "switchbot-matter-plug-mini",
    ean: "0810150540291",
    brand: "SwitchBot",
    name: "SwitchBot Matter Plug Mini",
    category: "slimme-stekkers",
    image: "/images/products/switchbot-matter-plug-mini.png",
    description:
      "Matter slimme stekker met energiemonitoring en brede platformondersteuning.",
    features: ["Matter", "Energiemonitoring", "Wi-Fi & Bluetooth"],
    affiliateUrl:
      "https://www.amazon.nl/SwitchBot-Energiemonitoring-Bluetooth-Compatibel-HomeAssistant/dp/B0FFN2FKD6?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DSwitchBot%2520Matter%2520Plug%2520Mini",
    priceHint: "€20 – €28",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/watch?v=A7iH-PR5By4",
  },

  {
    slug: "aqara-smart-plug",
    ean: "6970504210646",
    brand: "Aqara",
    name: "Aqara Smart Plug",
    category: "slimme-stekkers",
    image: "/images/products/aqara-smart-plug.png",
    description:
      "Zeer stabiele Zigbee-stekker. Werkt via een Aqara hub en is perfect voor automatiseringen in HomeKit, Home Assistant of Homey.",
    features: ["Zigbee 3.0", "Vereist hub", "Automatiseringen"],
    affiliateUrl:
      "https://www.amazon.nl/Aqara-timerstand-spraakbediening-Assistant-SmartThings/dp/B087M8LF63?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Smart%2520Plug",
    priceHint: "€20 – €28",
    priceLastUpdated: "april 2026",
    pros: ["Zeer stabiele Zigbee verbinding", "Werkt met HomeKit, Home Assistant en Homey", "Nauwkeurige energiemeting"],
    cons: ["Vereist Aqara hub of compatibele Zigbee hub", "Iets grotere steekplug"],
    forWho: ["Voor Zigbee-gebruikers die maximale stabiliteit willen", "Voor HomeKit gebruikers die Zigbee-stekker zoeken"],
    personalNote: "De meest stabiele Zigbee-stekker die ik heb gebruikt. Ideaal als je al een Aqara hub hebt.",
    youtubeUrl: "https://www.youtube.com/watch?v=eUS_OWHaJAs",
  },

  /* =========================
     EXTRA SLIMME DEURBELLEN
  ========================== */

  {
    slug: "aqara-doorbell-g410-grey",
    ean: "6975833358397",
    brand: "Aqara",
    name: "Aqara Video Doorbell G410 (Wit)",
    category: "slimme-deurbellen",
    image: "/images/products/aqara-doorbell-g410-grey.png",
    description:
      "Bedrade of draadloze slimme deurbel in het wit met 2K-beeld, ingebouwde Matter hub en HomeKit Secure Video.",
    features: ["2K", "Matter", "Bedraad / Accu"],
    affiliateUrl:
      "https://www.amazon.nl/Aqara-ingebouwde-Draadloos-Compatibel-Assistant/dp/B0F6CJF9M9?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Video%2520Doorbell%2520G410%2520(Wit)",
    priceHint: "€95 – €115",
    priceLastUpdated: "april 2026",
    pros: ["2K beeldkwaliteit", "Matter hub ingebouwd", "HomeKit Secure Video, geen abonnement nodig"],
    cons: ["Premium prijs", "Installatie iets complexer dan Ring"],
    forWho: ["Apple HomeKit gebruikers die privacy belangrijk vinden", "Voor wie Matter-integratie wil"],
    personalNote: "De meest complete slimme deurbel voor smart home liefhebbers. De ingebouwde Matter hub is uniek op dit prijsniveau.",
    youtubeUrl: "https://www.youtube.com/shorts/uGFFXvbUAnU",
  },

  {
    slug: "aqara-doorbell-g410-black",
    ean: "6975833358380",
    brand: "Aqara",
    name: "Aqara Video Doorbell G410 (Zwart)",
    category: "slimme-deurbellen",
    image: "/images/products/aqara-doorbell-g410-black.png",
    description:
      "Slimme deurbel met sterke smart home integratie via Matter, geschikt voor Apple Home, Google en Home Assistant.",
    features: ["2K", "Matter", "Smart home"],
    affiliateUrl:
      "https://www.amazon.nl/Aqara-Ingebouwde-Draadloos-Compatibel-Assistant/dp/B0F6CJ93GS?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Video%2520Doorbell%2520G410%2520(Zwart)",
    priceHint: "€95 – €115",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/KVS6asoEDyM",
  },

  {
    slug: "tapo-d205",
    ean: "1210002607810",
    brand: "TP-Link",
    name: "Tapo D205",
    category: "slimme-deurbellen",
    image: "/images/products/tapo-d205.png",
    description:
      "Draadloze slimme deurbel op accu met scherpe 2K-beelden en eenvoudige installatie.",
    features: ["Accu", "2K", "Geen abonnement"],
    affiliateUrl:
      "https://www.amazon.nl/Tapo-D205-video-deurintercom-gezichtsveld-USB-C-aansluiting/dp/B0FHXVX9W9?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DTapo%2520D205",
    priceHint: "€55 – €70",
    priceLastUpdated: "april 2026",
    pros: ["Geen abonnement vereist", "Accu", "Goede prijs-kwaliteit"],
    cons: ["Beperkte smart home integratie buiten Tapo"],
    forWho: ["Voor wie betaalbaar wil beginnen", "Voor Tapo-gebruikers"],
    youtubeUrl: "https://www.youtube.com/shorts/dsKyD2p0BUE",
  },

  {
    slug: "tapo-d235",
    ean: "4895252501254",
    brand: "TP-Link",
    name: "Tapo D235",
    category: "slimme-deurbellen",
    image: "/images/products/tapo-d235.png",
    description:
      "Slimme deurbel met kleurennachtzicht, brede kijkhoek en zonder verplichte abonnementskosten.",
    features: ["Geen abonnement", "Accu / Bedraad", "2K"],
    affiliateUrl:
      "https://www.amazon.nl/Tapo-D235-videodeurbel-gezichtsveld-niet-verwijderbare/dp/B0DDL95M8Z?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561530908&a=2855887&m=85161",
    priceHint: "€60 – €80",
    priceLastUpdated: "april 2026",
    youtubeUrl: "https://www.youtube.com/shorts/5wVHfrHFqwE",
  },

  {
    slug: "reolink-video-doorbell-wifi",
    ean: "6978285036684",
    brand: "Reolink",
    name: "Reolink Video Doorbell Wi-Fi",
    category: "slimme-deurbellen",
    image: "/images/products/reolink-video-doorbell-wifi.png",
    description:
      "Premium bedrade deurbel met hoofd-tot-teen beeld, lokale opslag en betrouwbare detectie.",
    features: ["Bedraad", "Lokale opslag", "Premium"],
    affiliateUrl:
      "https://www.amazon.nl/Reolink-Videodeurbel-Wi-Fi-camera-beltoon-Hoofd-aan-teen/dp/B0CN95V61Y?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DReolink%2520Video%2520Doorbell%2520Wi-Fi",
    priceHint: "€75 – €95",
    priceLastUpdated: "april 2026",
    pros: ["Hoofd-tot-teen beeld — ook pakketten zichtbaar", "Lokale opslag via NVR", "Geen verplicht abonnement"],
    cons: ["Bedraad — vereist bestaande aansluiting", "Minder bekende naam dan Ring"],
    forWho: ["Voor wie de beste beeldkwaliteit wil", "Voor wie lokale opslag prefereert boven cloud"],
    personalNote: "De beste keuze als je al bekabelde aansluiting hebt. Het hoofd-tot-teen beeld is een groot voordeel tegenover concurrenten.",
    youtubeUrl: "https://www.youtube.com/shorts/chwqRQrgYyY",
  },
  
  /* =========================
     SLIMME CAMERA’S
  ========================== */

{
  slug: "eufy-indoor-cam",
  ean: "0194644176136",
  name: "Eufy Indoor Cam",
  brand: "Eufy",
  category: "slimme-cameras",
  image: "/images/products/eufy-indoor-cam.png",
  description:
    "Betaalbare binnencamera met lokale opslag en zonder abonnement.",
  features: ["Binnen", "Geen abonnement", "Lokale opslag"],
  affiliateUrl:
    "https://www.amazon.nl/eufy-Binnencamera-UHD-bewakingscamera-kleur-nachtzicht-auto-tracking/dp/B0FMRCM9D2?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DEufy%2520Indoor%2520Cam",
  priceHint: "€35 – €50",
  priceLastUpdated: "april 2026",
  pros: ["Lokale opslag — geen abonnement", "Goede beeldkwaliteit voor de prijs", "Auto-tracking"],
  cons: ["Eufy-app vereist", "Beperkte smart home integratie (geen Zigbee of Matter)"],
  forWho: ["Voor wie een betrouwbare binnencamera wil zonder maandelijkse kosten", "Voor huisdieren of babybewaking"],
  personalNote: "De beste binnencamera voor wie gewoon wil dat het werkt. Geen abonnement, goede app en betrouwbare opslag.",
  youtubeUrl: "https://www.youtube.com/shorts/RQWhYv7T5CQ",
},

{
  slug: "tapo-c225",
  name: "TP-Link Tapo C225",
  brand: "TP-Link Tapo",
  category: "slimme-cameras",
  image: "/images/products/tapo-c225-beveiligingscamera.png",
  description:
    "Slimme 2K binnencamera met draaifunctie, bewegingsdetectie, tweeweg-audio en privacymodus. Ideaal om huisdieren in de gaten te houden wanneer je niet thuis bent.",
  features: ["2K", "Pan & tilt", "Tweeweg-audio"],
  affiliateUrl:
    "https://www.amazon.nl/Tapo-C225-Beveiligingscamera-Intelligente-Compatibel/dp/B0BN4BQ1DM?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561477674&a=2855887&m=85161",
  priceHint: "€30 – €40",
  priceLastUpdated: "april 2026",
  pros: ["2K beeld", "Pan & tilt — volgt beweging", "Privacymodus (lens klapt weg)"],
  cons: ["Vereist Tapo-app", "Cloud voor geavanceerde functies"],
  forWho: ["Voor wie ook zijn huisdieren wil volgen via de camera", "Voor gebruik in woonkamer of babykamer"],
  youtubeUrl: "https://www.youtube.com/shorts/ldJrxLdBxfg",
},

{
  slug: "eufy-solo-outdoor-cam",
  ean: "0194644247546",
  name: "Eufy Solo Outdoor Cam",
  brand: "Eufy",
  category: "slimme-cameras",
  image: "/images/products/eufy-solo-outdoor.png",
  description:
    "Weerbestendige buitencamera met accu en lokale opslag.",
  features: ["Buiten", "Accu", "Geen abonnement"],
  affiliateUrl:
    "https://www.amazon.nl/eufy-Bewakingscamera-bewakingscamera-zonne-energie-beveiligingscamera/dp/B0DT6WMJD6?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DEufy%2520Solo%2520Outdoor%2520Cam",
  priceHint: "€70 – €90",
  priceLastUpdated: "april 2026",
  pros: ["Accu — geen kabel nodig", "Weerbestendig", "Lokale opslag, geen abonnement"],
  cons: ["Accuduur wisselend bij veel activiteit", "Minder stabiel dan PoE-alternatieven"],
  forWho: ["Voor wie flexibel buiten wil plaatsen zonder kabel", "Voor achtertuin, garage of schuur"],
  personalNote: "Goede keuze als je geen kabel wilt trekken. Lokale opslag is een groot voordeel tegenover Ring.",
  youtubeUrl: "https://www.youtube.com/shorts/r31OVIk5XCM",
},

{
  slug: "reolink-poe-camera",
  ean: "6976930225858",
  name: "Reolink PoE Camera",
  brand: "Reolink",
  category: "slimme-cameras",
  image: "/images/products/reolink-poe-camera.png",
  description:
    "Bekabelde PoE camera voor maximale stabiliteit en betrouwbaarheid.",
  features: ["PoE", "Bekabeld", "Lokale opslag"],
  affiliateUrl:
    "https://www.amazon.nl/PoE-vandaalbestendig-nachtzicht-Duo-2V/dp/B0D2XQV692?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DReolink%2520PoE%2520Camera",
  priceHint: "€55 – €75",
  priceLastUpdated: "april 2026",
  pros: ["Bekabeld = maximale stabiliteit", "Lokale opslag via NVR", "Geen accu — altijd online"],
  cons: ["Vereist netwerkkabel trekken", "Minder flexibel te verplaatsen"],
  forWho: ["Voor wie een permanente beveiligingsoplossing wil", "Voor vaste buitenlocaties met NVR setup"],
  personalNote: "De meest betrouwbare keuze voor buiten. Als je eenmaal de kabel trekt, heb je er nooit meer omkijken naar.",
  youtubeUrl: "https://www.youtube.com/shorts/61ERlRmhpbA",
},

{
  slug: "tapo-c200",
  ean: "6935364088095",
  name: "TP-Link Tapo C200",
  brand: "TP-Link",
  category: "slimme-cameras",
  image: "/images/products/tapo-c200.png",
  description:
    "Budget Wi-Fi camera voor binnen met verrassend veel functies.",
  features: ["Budget", "Wi-Fi", "Binnen"],
  affiliateUrl:
    "https://www.amazon.nl/Tapo-C200P2-bewakingscamera-nachtzicht-bewegingsdetectie/dp/B0CDCL38KZ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F892927%2Ftp-link-tapo-c200.html",
  priceHint: "€22 – €32",
  priceLastUpdated: "april 2026",
  pros: ["Goedkoopste optie met pan & tilt", "Eenvoudige installatie", "Roteer-functie"],
  cons: ["Full HD (geen 2K)", "Cloud of SD-kaart vereist voor opslag"],
  forWho: ["Voor wie goedkoop wil beginnen", "Voor een extra camera in een minder kritieke ruimte"],
  personalNote: "Uitstekende waarde voor de prijs. Niet de scherpste camera, maar voor binnenbewaking meer dan genoeg.",
  youtubeUrl: "https://www.youtube.com/shorts/4hLvY_Fj8bg",
},

{
  slug: "eve-cam",
  ean: "4260195392427",
  name: "Eve Cam",
  brand: "Eve",
  category: "slimme-cameras",
  image: "/images/products/eve-cam.png",
  description:
    "Privacygerichte binnencamera met HomeKit Secure Video en lokale verwerking.",
  features: ["Privacy", "HomeKit", "Binnen"],
  affiliateUrl:
    "https://www.amazon.nl/Eve-Cam-beveiligingscamera-iPhone-meldingen-luidspreker/dp/B0CHJCZSJP?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DEve%2520Cam",
  priceHint: "€110 – €130",
  priceLastUpdated: "april 2026",
  pros: ["HomeKit Secure Video — verwerking op iPhone/iPad", "Geen abonnement nodig", "Volledig privacygericht: geen cloud"],
  cons: ["Alleen voor Apple-gebruikers", "Duurste binnencamera in dit overzicht"],
  forWho: ["Voor Apple-gebruikers die privacy als prioriteit stellen", "Voor wie beelden uitsluitend lokaal wil verwerken"],
  personalNote: "De enige juiste keuze als je iPhone gebruikt en privacy bovenaan zet. Prijzig, maar je betaalt nooit abonnement en beelden verlaten je netwerk niet.",
  youtubeUrl: "https://www.youtube.com/shorts/8Kmoas7Ct30",
},

/* =========================
   EXTRA SENSOREN
========================== */

{
  slug: "aqara-motion-sensor",
  ean: "6970504219656",
  name: "Aqara Bewegingssensor",
  brand: "Aqara",
  category: "sensoren",
  image: "/images/products/aqara-motion-sensor.png",
  description:
    "Zeer betrouwbare Zigbee bewegingssensor voor automatiseringen.",
  features: ["Zigbee", "Beweging", "Automatiseringen"],
  affiliateUrl:
    "https://www.amazon.nl/Aqara-configureerbare-detectie-timeout-waarschuwingssysteem-automatiseringen/dp/B0B9XZ1D51?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Bewegingssensor",
  priceHint: "€15 – €20",
  priceLastUpdated: "april 2026",
  pros: ["Zeer betrouwbaar en snel", "Configureerbare detectie-timeout", "Werkt met Homey, Home Assistant en HomeKit"],
  cons: ["Vereist Zigbee hub"],
  forWho: ["Voor automatisch licht aan/uit bij beweging", "Voor beveiligingsautomatiseringen"],
  youtubeUrl: "https://www.youtube.com/shorts/dwRf4hPIUEM",
},

{
  slug: "eve-weather",
  name: "Eve Weather",
  brand: "Eve",
  category: "sensoren",
  image: "/images/products/eve-weather.png",
  description:
    "Slimme buitensensor voor temperatuur en luchtvochtigheid via Thread.",
  features: ["Klimaat", "Thread", "Privacy"],
  affiliateUrl:
    "https://www.amazon.nl/Weather-Matter-luchtvochtigheid-IPX4-waterbestendigheid-Siri-spraaktoegang/dp/B0D817K9TL?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DEve%2520Weather",
  priceHint: "€60 – €70",
  priceLastUpdated: "april 2026",
  pros: ["IPX4 waterbestendig — geschikt voor buiten", "Thread = lage latency", "Privacygericht: geen cloud"],
  cons: ["Duurder dan Tapo-alternatieven", "Thread Border Router vereist"],
  forWho: ["Apple-gebruikers die klimaatdata in Apple Home willen", "Voor buitenplaatsing"],
  youtubeUrl: "https://www.youtube.com/shorts/89ofmY6aCdY",
},

{
  slug: "tapo-t100",
  name: "Tapo T100 Smart Motion Sensor",
  brand: "TP-Link",
  category: "sensoren",
  image: "/images/products/tapo-sensor.png",
  description:
    "Compacte bewegingssensor voor beveiliging en slimme automatiseringen.",
  features: ["Beweging", "Automatiseringen", "Slimme meldingen"],
  affiliateUrl:
    "https://www.amazon.nl/Tapo-0184500512-T100/dp/B0B7NDJW6J?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38840441964&a=2855887&m=85161",
  priceHint: "€12 – €15",
  priceLastUpdated: "april 2026",
  youtubeUrl: "https://www.youtube.com/shorts/dorW24Ba4oo",
},

{
  slug: "eve-door-window",
  name: "Eve Door & Window",
  brand: "Eve",
  category: "sensoren",
  image: "/images/products/eve-door-window.png",
  description:
    "Premium deur- en raamsensor met focus op privacy en lokale verwerking.",
  features: ["Privacy", "Thread", "Premium"],
  affiliateUrl:
    "https://www.amazon.nl/Door-Window-Matter-contactsensor-dicht-detectie/dp/B0BZ8YV5GW?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DEve%2520Door%2520%2526%2520Window",
  priceHint: "€30 – €38",
  priceLastUpdated: "april 2026",
  pros: ["Matter + Thread: breed compatibel", "Volledig lokaal", "Apple Home, Google Home, Home Assistant"],
  cons: ["Duurder dan Zigbee-alternatieven", "Thread Border Router vereist"],
  forWho: ["Apple-gebruikers die de beste integratie willen", "Voor Matter smart homes"],
  youtubeUrl: "https://www.youtube.com/shorts/avnIXG9Z6O0",
},

/* =========================
   SMART HOME HUBS
========================== */

{
  slug: "samsung-smartthings-hub",
  brand: "Aeotec",
  name: "Aeotec Smart Home Hub (SmartThings)",
  category: "smart-home-hubs",
  image: "/images/products/samsung-smartthings-hub.png",
  description:
    "Werkt als SmartThings hub met ondersteuning voor Zigbee en Z-Wave.",
  features: ["SmartThings", "Zigbee", "Z-Wave"],
  affiliateUrl:
    "https://www.amazon.nl/Aeotec-Smart-Home-Hub-SmartThings/dp/B08NDH9NXN?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAeotec%2520Smart%2520Home%2520Hub%2520(SmartThings)",
  priceHint: "€75 – €90",
  priceLastUpdated: "april 2026",
  pros: ["Ondersteunt Zigbee én Z-Wave", "SmartThings platform met grote community", "Breed compatibel"],
  cons: ["Samsung SmartThings cloud vereist", "Minder flexibel dan Home Assistant"],
  forWho: ["Voor wie Zigbee én Z-Wave in één hub wil combineren", "Voor SmartThings-gebruikers"],
  youtubeUrl: "https://www.youtube.com/shorts/ZjyfLL9m5Bw",
},

{
  slug: "homey-pro-early-2023",
  ean: "8719327218198",
  brand: "Homey",
  name: "Homey Pro (Early 2023)",
  category: "smart-home-hubs",
  image: "/images/products/homey-pro-early-2023.png",
  description:
    "Krachtige lokale smart home hub zonder cloud-afhankelijkheid.",
  features: ["Volledig lokaal", "Zigbee", "Z-Wave", "Matter"],
  affiliateUrl:
    "https://www.amazon.nl/dp/B0C5R1JS91?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F933660%2Fathom-homey-pro.html",
  priceHint: "€380 – €420",
  priceLastUpdated: "april 2026",
  pros: ["Volledig lokaal — geen cloud nodig", "Ondersteunt Zigbee, Z-Wave, Matter, BLE, 433MHz", "Intuïtieve flow-editor voor automatiseringen"],
  cons: ["Duurste hub in dit overzicht", "Minder flexibel dan Home Assistant voor geavanceerde gebruikers"],
  forWho: ["Voor wie maximale controle wil zonder technisch gedoe", "Voor gebruikers die bereid zijn te investeren in de beste gebruikservaring"],
  personalNote: "De beste plug-and-play smart home hub. Homey Pro heeft een superieure gebruikerservaring vergeleken met concurrenten. De hoge prijs is gerechtvaardigd als je een zorgeloos slim huis wilt.",
  youtubeUrl: "https://www.youtube.com/shorts/yIQxbRQHTRo",
},

{
  slug: "homey-pro-2026",
  brand: "Athom",
  name: "Homey Pro (2026)",
  category: "smart-home-hubs",
  image: "/images/products/homey-pro-early-2023.png",
  description: "Nieuwste versie van de populaire smart home hub. 4GB RAM (dubbel t.o.v. 2023), zelfde prijs van €399. Ondersteunt Matter, Thread, Zigbee, Z-Wave, Bluetooth, 433MHz, IR en wifi in één apparaat.",
  features: ["4GB RAM (2x meer dan 2023 versie)", "7 protocollen in één hub", "Lokale verwerking, werkt zonder internet", "Matter en Thread ingebouwd"],
  affiliateUrl: "https://www.amazon.nl/s?k=Homey+Pro+2026&tag=slimhuiswonen-21",
  priceHint: "€399",
  priceLastUpdated: "april 2026",
  pros: ["4GB RAM — geschikt voor grotere setups", "7 protocollen in één apparaat", "Lokale verwerking, geen cloud vereist", "Ondersteuning gegarandeerd t/m 2031"],
  cons: ["Duurder dan concurrenten", "Beperkte offline backup-opties"],
  forWho: ["Voor wie een toekomstbestendige all-in-one hub zoekt", "Voor setups met meer dan 50 apparaten"],
},

{
  slug: "homey-bridge",
  ean: "8717953223487",
  brand: "Homey",
  name: "Homey Bridge",
  category: "smart-home-hubs",
  image: "/images/products/homey-smart-bridge.png",
  description: "Verbindt slimme apparaten met Homey Cloud.",
  features: ["Homey Cloud", "Uitbreiding Homey"],
  affiliateUrl:
    "https://www.amazon.nl/dp/B08FRLQH75?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F897077%2Fathom-homey-bridge.html",
  priceHint: "€55 – €70",
  priceLastUpdated: "april 2026",
  pros: ["Goedkope instap in Homey", "Verbindt veel apparaten", "Eenvoudige installatie"],
  cons: ["Vereist Homey Cloud — cloud-afhankelijk", "Beperktere functionaliteit dan Homey Pro"],
  forWho: ["Voor wie wil kennismaken met Homey zonder grote investering"],
  youtubeUrl: "https://www.youtube.com/shorts/_fRsj0azjVI",
},

{
  slug: "philips-hue-bridge",
  ean: "8720169155114",
  brand: "Philips Hue",
  name: "Philips Hue Bridge",
  category: "smart-home-hubs",
  image: "/images/products/philips-bridge.png",
  description: "Centrale hub voor Philips Hue verlichting.",
  features: ["Hue ecosysteem", "Zigbee", "Lokale automatiseringen"],
  affiliateUrl:
    "https://www.amazon.nl/dp/B09CV9F3KR?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F890077%2Fphilips-hue-bridge.html",
  priceHint: "€48 – €58",
  priceLastUpdated: "april 2026",
  pros: ["Vereist voor volledige Hue automatiseringen", "Lokale verwerking zonder internet", "Stabiele Zigbee verbinding"],
  cons: ["Alleen voor Philips Hue producten", "Extra kosten bovenop de lampen"],
  forWho: ["Voor Hue-gebruikers die automatiseringen en timer willen", "Voor wie meer dan 10 Hue-lampen heeft"],
  personalNote: "Verplicht als je Hue serieus wilt gebruiken. Zonder bridge werkt Bluetooth, maar automatiseringen werken niet als je thuis bent.",
  youtubeUrl: "https://www.youtube.com/shorts/isaMt7n0Vhw",
},

{
  slug: "home-assistant-green",
  brand: "Home Assistant",
  name: "Home Assistant Green",
  category: "smart-home-hubs",
  image: "/images/products/home-assistant-green.png",
  description:
    "Officiële Home Assistant hub voor maximale lokale controle.",
  features: ["Home Assistant OS", "Volledig lokaal"],
  affiliateUrl:
    "https://www.amazon.nl/dp/B0CXVKSG19?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DHome%2520Assistant%2520Green",
  priceHint: "€90 – €105",
  priceLastUpdated: "april 2026",
  pros: ["Volledig lokaal en open source", "Enorme community en integraties", "Werkt met Zigbee, Z-Wave, Matter"],
  cons: ["Technisch — vereist kennis om goed in te stellen", "Minder intuïtief dan Homey"],
  forWho: ["Voor technisch ingestelde gebruikers die maximale controle willen", "Voor wie geen abonnement of cloud wil"],
  personalNote: "Home Assistant is de meest krachtige hub die er is — maar niet voor iedereen. Ben je bereid tijd te investeren, dan haal je er het meeste uit.",
  youtubeUrl: "https://www.youtube.com/shorts/u8sk6B8_Qkc",
},

/* ==========================
   SLIMME THERMOSTATEN
========================== */

{
  slug: "tado-smart-thermostat-v3",
  ean: "4260328611968",
  brand: "Tado",
  name: "Tado Slimme Thermostaat V3+",
  category: "slimme-thermostaten",
  image: "/images/products/tado-smart-thermostat-v3.png",
  description:
    "Populaire slimme thermostaat met geofencing en energiebesparing. Werkt met Homey, Alexa, Google Home en Apple HomeKit.",
  features: [
    "Geofencing: automatisch aan/uit bij vertrek",
    "Compatibel met Homey, Google, Alexa, HomeKit",
    "Energierapport per maand",
  ],
  affiliateUrl: "https://www.amazon.nl/dp/B07YCMD7ZW?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F817952%2Ftado-slimme-thermostaat-v3.html",
  priceHint: "€85 – €110",
  priceLastUpdated: "april 2026",
  pros: ["Geofencing — automatisch aan/uit bij vertrek", "Werkt met Homey, Alexa, Google, HomeKit", "Uitgebreide energierapporten"],
  cons: ["Verplicht abonnement voor geavanceerde functies na 3 maanden", "Hogere prijs dan sommige alternatieven"],
  forWho: ["Voor wie automatisch wil regelen op basis van locatie", "Voor wie energiebesparing serieus neemt"],
  personalNote: "Tado's geofencing is de beste die ik ken. Wees je bewust van de abonnementsstructuur — de gratis functies zijn beperkt.",
},

{
  slug: "netatmo-slimme-thermostaat",
  ean: "3700730503853",
  brand: "Netatmo",
  name: "Netatmo Slimme Thermostaat",
  category: "slimme-thermostaten",
  image: "/images/products/netatmo-slimme-thermostaat.png",
  description:
    "Strakke slimme thermostaat zonder verplicht abonnement. Werkt met Apple HomeKit, Alexa en Google Home.",
  features: [
    "Geen verplicht abonnement",
    "Apple HomeKit ondersteuning",
    "Strak design, eenvoudige installatie",
  ],
  affiliateUrl: "https://www.amazon.nl/dp/B01DBJP2WO?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F468773%2Fnetatmo-slimme-aan-uit-thermostaat.html",
  priceHint: "€95 – €120",
  priceLastUpdated: "april 2026",
  pros: ["Geen verplicht abonnement", "Apple HomeKit ondersteuning", "Strak minimalistische design"],
  cons: ["Hogere aanschafprijs", "Minder functies dan Tado"],
  forWho: ["Apple-gebruikers die geen abonnement willen", "Voor wie design belangrijk vindt"],
},

/* ==========================
   MESH WIFI
========================== */

{
  slug: "tp-link-deco-xe75",
  ean: "0840030707148",
  brand: "TP-Link",
  name: "TP-Link Deco XE75 (WiFi 6E Mesh, 3-pack)",
  category: "mesh-wifi",
  image: "/images/products/tp-link-deco-xe75.png",
  description:
    "Krachtig WiFi 6E mesh-systeem in 3-pack voor een snel en stabiel netwerk in het hele huis. Dekt tot 750 m². Ideaal voor smart home met veel apparaten.",
  features: [
    "WiFi 6E (tri-band)",
    "3-pack — tot 750 m² dekking",
    "Eenvoudig uitbreidbaar",
  ],
  affiliateUrl: "https://www.amazon.nl/TP-Link-Deco-XE75-3-pack-Gigabit-poorten/dp/B09ZRY9YHB?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=43417689963&a=2855887&m=85161",
  priceHint: "€280 – €310",
  priceLastUpdated: "april 2026",
  pros: ["WiFi 6E — snelste standaard", "Tot 250 m² per punt", "Eenvoudig uitbreidbaar"],
  cons: ["Premium prijs", "WiFi 6E vereist ondersteunde apparaten"],
  forWho: ["Voor grote woningen met veel smart home apparaten", "Voor wie toekomstbestendig wil investeren"],
  personalNote: "De TP-Link Deco serie is de beste prijs-kwaliteitskeuze voor mesh wifi. De XE75 is een toekomstbestendige investering.",
  youtubeUrl: "https://www.youtube.com/shorts/NZ4NUioL4MQ",
},

{
  slug: "eero-pro-6e",
  brand: "Amazon",
  name: "Amazon Eero Pro 6E",
  category: "mesh-wifi",
  image: "/images/products/eero-pro-6e.png",
  description:
    "Gebruiksvriendelijk mesh-systeem met WiFi 6E en Alexa-integratie. Ideaal als je Amazon-producten combineert.",
  features: [
    "WiFi 6E",
    "Alexa ingebouwd",
    "Eenvoudige app-installatie",
  ],
  affiliateUrl: "https://www.amazon.nl/eero-6-/dp/B08ZK2T3GS?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAmazon%2520Eero%2520Pro%25206E",
  priceHint: "€190 – €230",
  priceLastUpdated: "april 2026",
  pros: ["Alexa ingebouwd", "Zeer eenvoudige app", "WiFi 6E"],
  cons: ["Amazon-ecosysteem afhankelijk", "Duurder dan TP-Link alternatieven"],
  forWho: ["Voor Amazon Alexa gebruikers", "Voor wie geen gedoe wil met configuratie"],
  youtubeUrl: "https://www.youtube.com/shorts/1H31syVYPus",
},

{
  slug: "google-nest-wifi-pro",
  ean: "0193575004563",
  brand: "Google",
  name: "Google Nest Wifi Pro",
  category: "mesh-wifi",
  image: "/images/products/google-nest-wifi-pro.png",
  description:
    "Google's krachtigste mesh-router met WiFi 6E en Matter-ondersteuning ingebouwd. Ideaal voor Google Home gebruikers.",
  features: [
    "WiFi 6E",
    "Matter hub ingebouwd",
    "Werkt naadloos met Google Home",
  ],
  affiliateUrl: "https://www.amazon.nl/Google-Nest-Wifi-Pro-2-pack/dp/B0BDKHRGV6?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DGoogle%2520Nest%2520Wifi%2520Pro",
  priceHint: "€210 – €250",
  priceLastUpdated: "april 2026",
  pros: ["Matter hub ingebouwd", "Werkt naadloos met Google Home", "WiFi 6E"],
  cons: ["Google-ecosysteem afhankelijk", "Duurder dan TP-Link"],
  forWho: ["Voor Google Home gebruikers die ook Matter willen", "Voor grotere woningen"],
  youtubeUrl: "https://www.youtube.com/shorts/BFTzcpo_0f0",
},

/* ==========================
   SLIMME SLOTEN
========================== */

{
  slug: "nuki-smart-lock-4-pro",
  ean: "6154545266286",
  brand: "Nuki",
  name: "Nuki Smart Lock 4 Pro",
  category: "slimme-sloten",
  image: "/images/products/nuki-smart-lock-4-pro.png",
  description:
    "Populairste slimme deurslot in Nederland. Monteert op bestaand slot, geen sleutelgat aanpassen.",
  features: [
    "Werkt met bestaand cilinderslot",
    "WiFi, Bluetooth en Matter",
    "Compatibel met Homey, Alexa, Google, HomeKit",
  ],
  affiliateUrl: "https://www.amazon.nl/Bluetooth-moeiteloze-integratie-elektronisch-vergrendelen/dp/B0DX2FPQFQ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F940644%2Fnuki-smart-lock-pro-4e-generatie-wit.html",
  priceHint: "€170 – €200",
  priceLastUpdated: "april 2026",
  pros: ["Werkt met bestaand cilinderslot", "WiFi, Bluetooth én Matter", "Compatibel met alle grote platforms"],
  cons: ["Premium prijs", "Batterijen vervangen (niet oplaadbaar)"],
  forWho: ["Voor wie zijn voordeur wil automatiseren zonder de deur aan te passen", "Voor Matter smart homes"],
  personalNote: "Het populairste slimme slot in Nederland. Matter-ondersteuning maakt het breed inzetbaar. Eenvoudige installatie — geen sleutelgat aanpassen.",
  youtubeUrl: "https://www.youtube.com/shorts/QlhX3U2cLyw",
},

{
  slug: "yale-linus-smart-lock",
  ean: "5052847179307",
  brand: "Yale",
  name: "Yale Linus Smart Lock",
  category: "slimme-sloten",
  image: "/images/products/yale-linus-smart-lock.png",
  description:
    "Compact slim deurslot van een vertrouwd merk. Werkt met de Yale Access app en integreert met Alexa en Google Home.",
  features: [
    "Compact design",
    "Werkt met bestaand slot",
    "Alexa en Google Home integratie",
  ],
  affiliateUrl: "https://www.amazon.nl/Yale-Sleutelloze-Eenvoudige-installatie-compatibel/dp/B0FTG1L89G?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DYale%2520Linus%2520Smart%2520Lock",
  priceHint: "€120 – €150",
  priceLastUpdated: "april 2026",
  pros: ["Compact design", "Vertrouwd merk", "Alexa en Google Home"],
  cons: ["Beperktere integratie dan Nuki", "Geen Matter ondersteuning"],
  forWho: ["Voor wie een compacte oplossing wil van een vertrouwd slot-merk"],
  youtubeUrl: "https://www.youtube.com/shorts/m4qA0kb0dys",
},

{
  slug: "danalock-v3",
  brand: "Danalock",
  name: "Danalock V3",
  category: "slimme-sloten",
  image: "/images/products/danalock-v3.png",
  description:
    "Slim deurslot met Bluetooth, Z-Wave en Zigbee ondersteuning. Ideaal voor geavanceerde smart home setups.",
  features: [
    "Bluetooth, Z-Wave en Zigbee",
    "Werkt met Home Assistant en Homey",
    "Betrouwbare Europese fabrikant",
  ],
  affiliateUrl: "https://www.amazon.nl/Danalock-Bluettoth-Solution-batterijen-inbegrepen/dp/B0CV18ZTK2?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DDanalock%2520V3",
  priceHint: "€110 – €140",
  priceLastUpdated: "april 2026",
  pros: ["Bluetooth, Z-Wave én Zigbee", "Werkt met Home Assistant en Homey", "Europese fabrikant"],
  cons: ["Minder bekende naam", "Z-Wave module soms apart nodig"],
  forWho: ["Voor geavanceerde smart home gebruikers die Z-Wave of Zigbee prefereren", "Voor Home Assistant setups"],
  youtubeUrl: "https://www.youtube.com/shorts/RIDEaJa78hs",
},

/* ==========================
   ENERGIE MONITORS
========================== */

{
  slug: "frient-elektriciteitsmeter-interface-2-p1",
  brand: "frient",
  name: "frient Elektriciteitsmeter Interface 2, P1",
  category: "energie-monitors",
  image: "/images/products/homewizard-energy-p1-meter.png",
  description:
    "Eenvoudige P1-meter die je slimme meter uitleest en realtime energieverbruik toont in de app. Werkt met Home Assistant.",
  features: [
    "Realtime verbruik en teruglevering",
    "Werkt met Home Assistant en Homey",
    "Eenvoudig zelf installeren",
  ],
  priceHint: "€50 – €65",
  priceLastUpdated: "april 2026",
  pros: ["Werkt met Home Assistant en Homey", "Zigbee — stabiel en snel", "Realtime verbruik én teruglevering"],
  cons: ["Vereist Zigbee hub", "P1-kabel niet altijd inbegrepen"],
  forWho: ["Voor wie energieverbruik wil monitoren via Home Assistant of Homey", "Voor zonnepaneelhouders"],
  affiliateUrl: "https://www.amazon.nl/frient-Elektriciteitsmeter-energieverbruik-elektriciteitsmeters-SmartThings/dp/B0CYZWLX65?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3Dfrient%2520Elektriciteitsmeter%2520Interface%25202%252C%2520P1",
  youtubeUrl: "https://www.youtube.com/watch?v=9HHH6RO3WG0",
},

{
  slug: "shelly-pro-3em",
  ean: "3800235268193",
  brand: "Shelly",
  name: "Shelly Pro 3EM",
  category: "energie-monitors",
  image: "/images/products/shelly-pro-3em.png",
  description:
    "Professionele 3-fase energiemeter voor montage in de meterkast. Ideaal voor wie zonnepanelen wil koppelen aan smart home.",
  features: [
    "3-fase meting",
    "Werkt met Home Assistant en Homey",
    "Zonnepanelen integratie mogelijk",
  ],
  affiliateUrl: "https://www.amazon.nl/Shelly-120A-Afstandsbediening-Fotovolta%C3%AFsche-Zonnestelsels/dp/B0BVKZ4NGM?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DShelly%2520Pro%25203EM",
  priceHint: "€90 – €110",
  priceLastUpdated: "april 2026",
  pros: ["3-fase meting — volledig huisverbruik in één apparaat", "Integratie met Home Assistant en Homey", "Zonnepanelen monitoring"],
  cons: ["Montage in de meterkast — elektricien aanbevolen", "Complexere installatie"],
  forWho: ["Voor 3-fase aansluitingen", "Voor zonnepaneelhouders die alles willen monitoren"],
  personalNote: "De Shelly Pro 3EM is de beste keuze voor wie het volledige energieverbruik van het huis wil meten — inclusief teruglevering van zonnepanelen.",
  youtubeUrl: "https://www.youtube.com/shorts/zxPh7ekFqc4",
},

{
  slug: "brostrend-mini-ax900-wifi-6",
  brand: "BrosTrend",
  name: "BrosTrend Mini AX900 WiFi 6",
  category: "energie-monitors",
  image: "/images/products/homewizard-wifi-p1-dongle.png",
  description:
    "Compacte wifi-dongle die je slimme meter uitleest. Klein, goedkoop en snel ingesteld.",
  features: [
    "Direct op de P1-poort van je meter",
    "Realtime data via app",
    "Werkt met Home Assistant",
  ],
  affiliateUrl: "https://www.amazon.nl/BrosTrend-Mini-AX900-WiFi-USB/dp/B0CYZBT4GM?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DBrosTrend%2520Mini%2520AX900%2520WiFi%25206",
  priceHint: "€35 – €50",
  priceLastUpdated: "april 2026",
  pros: ["Direct op P1-poort", "Klein en goedkoop", "Werkt met Home Assistant"],
  cons: ["Minder nauwkeurig dan frient Zigbee P1 meter", "Soms wifi-instabiliteit"],
  forWho: ["Voor starters die energieverbruik willen inzien via Home Assistant"],
  youtubeUrl: "https://www.youtube.com/shorts/8oT4Go7z_1w",
},

/* =========================
   SLIMME VERLICHTING — UITBREIDING
========================== */

{
  slug: "philips-hue-gu10-white-ambiance",
  ean: "8719514340145",
  brand: "Philips Hue",
  name: "Philips Hue GU10 White Ambiance (2-pack)",
  category: "slimme-verlichting",
  image: "/images/products/philips-hue-gu10-white-ambiance.png",
  description:
    "Slimme GU10-spots voor badkamer, keuken of hal. Instelbaar wit licht van warm tot koel daglicht, dimbaar via app of bridge.",
  features: ["GU10 fitting", "Instelbaar wit licht", "Dimbaar", "Zigbee & Bluetooth"],
  affiliateUrl: "https://www.amazon.nl/Philips-Hue-instelbaar-Bluetooth-compatibel-stembediening/dp/B0D6NLJHQ3?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/pclick.php?p=38561477987&a=2855887&m=85161",
  priceHint: "€35 – €45",
  priceLastUpdated: "april 2026",
  pros: ["Dimbaar warm tot koel daglicht", "Past in elk standaard GU10-armatuur", "Werkt met Hue Bridge én Bluetooth"],
  cons: ["Geen kleuren — alleen wit licht", "Bridge nodig voor automatiseringen"],
  forWho: ["Voor wie spots in keuken, badkamer of hal slim wil maken", "Voor Hue-gebruikers die uitbreiden naar GU10-armaturen"],
  personalNote: "Logische volgende stap na E27-lampen. Als je spots hebt in de keuken of badkamer, zijn dit de meest betrouwbare slimme GU10-lampen.",
  youtubeUrl: "https://www.youtube.com/shorts/P-Lb6Wve-Gc",
},

{
  slug: "philips-hue-dimmer-switch-v2",
  ean: "8719514274617",
  brand: "Philips Hue",
  name: "Philips Hue Dimmer Switch V2",
  category: "slimme-verlichting",
  image: "/images/products/philips-hue-dimmer-switch-v2.png",
  description:
    "Draadloze dimschakelaar voor het Hue-systeem. Bevestig magnetisch aan de muur of gebruik als losse afstandsbediening.",
  features: ["Draadloos", "Magnetische muurbevestiging", "4 knoppen", "Zigbee"],
  affiliateUrl: "https://www.amazon.nl/dp/B08PKMT2DV?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F876977%2Fphilips-hue-draadloze-dimmer-switch.html",
  priceHint: "€25 – €30",
  priceLastUpdated: "april 2026",
  pros: ["Geen bedrading nodig", "Muurbevestiging met magneet — geen boren", "Werkt ook als losse afstandsbediening"],
  cons: ["Alleen voor Hue-lampen", "Geen touchscreen"],
  forWho: ["Voor Hue-gebruikers die een fysieke schakelaar willen", "Voor huisgenoten die geen app willen gebruiken"],
  personalNote: "Ideale aanvulling als je huisgenoten hebt die gewoon een schakelaar willen. Plak hem naast de deur en iedereen kan de lampen bedienen.",
  youtubeUrl: "https://www.youtube.com/shorts/w398sZur0Pw",
},

{
  slug: "philips-hue-motion-sensor",
  ean: "8719514342125",
  brand: "Philips Hue",
  name: "Philips Hue Motion Sensor (binnen)",
  category: "sensoren",
  image: "/images/products/philips-hue-motion-sensor.png",
  description:
    "Slimme bewegingssensor die automatisch Hue-lampen aan- en uitzet. Met ingebouwde lichtsensor — gaat alleen aan als het donker genoeg is.",
  features: ["Bewegingsdetectie", "Ingebouwde lichtsensor", "Zigbee", "Batterij"],
  affiliateUrl: "https://www.amazon.nl/Philips-Hue-Bewegingssensor-Ingebouwde-Lichtsensor/dp/B09CV78GV1?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F890049%2Fphilips-hue-bewegingssensor.html",
  priceHint: "€35 – €45",
  priceLastUpdated: "april 2026",
  pros: ["Werkt naadloos met alle Hue-lampen", "Lichtsensor — gaat niet aan overdag", "Eenvoudige Hue-app configuratie"],
  cons: ["Alleen voor Hue-ecosysteem", "Detectiezone niet instelbaar"],
  forWho: ["Voor Hue-gebruikers die automatisch licht willen bij binnenkomst", "Voor hal, trap of badkamer"],
  personalNote: "De eenvoudigste manier om Hue-lampen automatisch te laten reageren op beweging. De lichtsensor zorgt dat je overdag nooit onnodig licht aan hebt.",
  youtubeUrl: "https://www.youtube.com/shorts/NKLJZ8mdIzU",
},

{
  slug: "tapo-l920-5-ledstrip",
  ean: "4897098682609",
  brand: "TP-Link Tapo",
  name: "Tapo L920-5 RGBIC LED Strip (5m)",
  category: "slimme-verlichting",
  image: "/images/products/tapo-l920-5-ledstrip.png",
  description:
    "Slimme RGBIC LED-strip van 5 meter met 50 individuele kleurzones, muzieksynchro en app-bediening. Geen hub nodig.",
  features: ["RGBIC — 50 kleurzones", "Muzieksynchro", "Wi-Fi", "Geen hub nodig"],
  affiliateUrl: "https://www.amazon.nl/dp/B09FSTVWFF?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956287%2Ftp-link-tapo-l930-5-lichtstrip-5m.html",
  priceHint: "€30 – €40",
  priceLastUpdated: "april 2026",
  pros: ["50 individuele kleurzones", "Muzieksynchro via microfoon", "Geen hub nodig"],
  cons: ["Alleen binnen Tapo-app", "Beperkte smart home integratie"],
  forWho: ["Voor sfeerverlichting in woonkamer, gaming-setup of achter tv", "Voor Tapo-gebruikers die LED-strip willen toevoegen"],
  personalNote: "Sterk alternatief voor de Govee strip. Betaalbaar, veelzijdig en eenvoudig in gebruik. De 50 kleurzones geven mooie effecten.",
  youtubeUrl: "https://www.youtube.com/shorts/afJD-6I6zFc",
},

{
  slug: "govee-outdoor-ledstrip",
  ean: "6974316999430",
  brand: "Govee",
  name: "Govee Outdoor LED Strip (10m)",
  category: "slimme-verlichting",
  image: "/images/products/govee-outdoor-ledstrip.png",
  description:
    "Weerbestendige RGBIC LED-strip van 10 meter voor tuin, terras of gevel. IP65, app-gestuurd met segmentbediening.",
  features: ["IP65 weerbestendig", "10 meter", "RGBIC segmentbediening", "Muzieksynchro"],
  affiliateUrl: "https://www.amazon.nl/Govee-app-bediening-segmentcontrole-kleurverandering-muzieksynchronisatie/dp/B0BXKWTDC6?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DGovee%2520Outdoor%2520LED%2520Strip%2520(10m)",
  priceHint: "€40 – €60",
  priceLastUpdated: "april 2026",
  pros: ["IP65 — geschikt voor buiten", "10 meter — dekt grote oppervlakken", "Segmentbediening voor gevarieerde effecten"],
  cons: ["Govee-app vereist", "Minder smart home integratie"],
  forWho: ["Voor sfeerverlichting buiten: terras, gevel, pergola", "Voor seizoensgebonden decoratie"],
  personalNote: "De enige buitengeschikte LED-strip in dit overzicht. Ideaal voor sfeerverlichting op het terras of langs de dakgoot.",
  youtubeUrl: "https://www.youtube.com/shorts/15PpKHcLSs0",
},

/* =========================
   SMART HOME HUBS — UITBREIDING
========================== */

{
  slug: "tapo-h200-smart-hub",
  ean: "4897098689547",
  brand: "TP-Link Tapo",
  name: "Tapo H200 Smart Hub",
  category: "smart-home-hubs",
  image: "/images/products/tapo-h200-smart-hub.png",
  description:
    "Centrale hub voor het Tapo-ecosysteem. Koppelt tot 64 sensoren én 4 camera's. Werkt als deurbel-gong en heeft microSD-opslag voor camerabeelden.",
  features: ["Tot 64 sensoren", "microSD opslag", "Deurbel-gong", "Tapo ecosysteem"],
  affiliateUrl: "https://www.amazon.nl/Tapo-H200-batterijcameras-Tapo-cameramodellen-Kasa-thermostaat/dp/B0C8BJ9ZLB?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DTapo%2520H200%2520Smart%2520Hub",
  priceHint: "€30 – €40",
  priceLastUpdated: "april 2026",
  pros: ["Betaalbaar instapmodel voor Tapo-ecosysteem", "microSD-opslag voor camera's", "Werkt als deurbel-gong"],
  cons: ["Alleen voor Tapo-apparaten", "Beperkte automatiseringslogica"],
  forWho: ["Voor wie al Tapo-sensoren en -camera's heeft", "Voor wie een centrale hub wil voor zijn Tapo-ecosystem"],
  personalNote: "De logische hub als je al meerdere Tapo-sensoren of een Tapo-deurbel hebt. Betaalbaar en eenvoudig te configureren.",
  youtubeUrl: "https://www.youtube.com/shorts/I9zLg6F3bYo",
},

{
  slug: "aqara-hub-m3",
  ean: "6975833351336",
  brand: "Aqara",
  name: "Aqara Hub M3",
  category: "smart-home-hubs",
  image: "/images/products/aqara-hub-m3.png",
  description:
    "Geavanceerde Matter/Thread/Zigbee hub voor het Aqara-ecosysteem. Werkt met HomeKit, Google Home, Alexa en Home Assistant. Lokale automatisering zonder cloud.",
  features: ["Matter", "Thread", "Zigbee 3.0", "Lokale automatisering"],
  affiliateUrl: "https://www.amazon.nl/Aqara-Controller-Bluetooth-ondersteunt-SmartThings/dp/B0CWLHSKYC?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Hub%2520M3",
  priceHint: "€80 – €100",
  priceLastUpdated: "april 2026",
  pros: ["Matter + Thread + Zigbee in één hub", "Werkt met alle grote platforms", "Volledig lokale automatisering"],
  cons: ["Hogere prijs dan instapmodellen", "Configuratie vraagt wat kennis"],
  forWho: ["Aqara-gebruikers die een centrale hub willen", "Voor wie Matter en Zigbee in één hub wil combineren"],
  personalNote: "De beste hub als je diep in het Aqara-ecosysteem zit. Matter én Thread én Zigbee in één apparaat is uniek op dit prijsniveau.",
  youtubeUrl: "https://www.youtube.com/shorts/mu-BDOW7KuI",
},

/* =========================
   SLIMME THERMOSTATEN — UITBREIDING
========================== */

{
  slug: "tado-smart-thermostat-v3-bedraad",
  ean: "4260328611968",
  brand: "tado°",
  name: "tado° Slimme Thermostaat V3+ (Bedraad)",
  category: "slimme-thermostaten",
  image: "/images/products/tado-smart-thermostat-v3-bedraad.png",
  description:
    "Bedrade versie van de populaire tado° slimme thermostaat met geofencing. Werkt met OpenTherm, Alexa, Google Home en Apple HomeKit. Geen abonnement vereist voor basisfuncties.",
  features: ["Geofencing", "OpenTherm", "Alexa, Google Home, HomeKit", "Geen verplicht abonnement"],
  affiliateUrl: "https://www.amazon.nl/tado%C2%B0-Bedrade-Slimme-Thermostaat-verwarmingsaansturing/dp/B01BWUH8W4?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F817952%2Ftado-slimme-thermostaat-v3.html",
  priceHint: "€80 – €110",
  priceLastUpdated: "april 2026",
  pros: ["Geofencing: stookt alleen als er iemand thuis is", "OpenTherm voor maximale energiebesparing", "Breed compatibel: Alexa, Google, HomeKit, Homey"],
  cons: ["Geavanceerde functies vereisen betaald Auto-Assist abonnement", "Vereist internet-verbinding"],
  forWho: ["Voor wie geofencing wil: thermostaat reageert op je locatie", "Voor wie energie wil besparen op verwarming"],
  personalNote: "tado° is marktleider in Nederland voor slimme thermostaten en dat is niet voor niets. De geofencing werkt uitstekend in de praktijk.",
  youtubeUrl: "https://www.youtube.com/shorts/oCauDVeOGBg",
},

{
  slug: "tado-radiatorkraan-v3-plus",
  ean: "4260328612040",
  brand: "tado°",
  name: "tado° Slimme Radiatorkraan V3+",
  category: "slimme-thermostaten",
  image: "/images/products/tado-radiatorkraan-v3-plus.png",
  description:
    "Slimme radiatorkraan voor kamertemperatuurregeling per ruimte. Werkt met de tado° thermostaat of standalone via internet-bridge.",
  features: ["Per-kamer regeling", "Compatibel met tado° thermostaat", "Geofencing", "OpenWindowDetectie"],
  affiliateUrl: "https://www.amazon.nl/tado%C2%B0-Slimme-Radiatorknop-intelligente-verwarmingsaansturing/dp/B08LNX3SDN?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F876945%2Ftado-slimme-radiatorknop-uitbreiding.html",
  priceHint: "€60 – €80",
  priceLastUpdated: "april 2026",
  pros: ["Per kamer regelen — slaapkamer kouder, woonkamer warmer", "Combineert met tado° thermostaat", "Open-raam detectie"],
  cons: ["Duurder per stuk bij meerdere kamers", "Internet bridge vereist bij standalone gebruik"],
  forWho: ["Voor wie elke kamer apart wil regelen", "Als aanvulling bij een tado° thermostaat"],
  personalNote: "Combineer met de tado° thermostaat voor volledige controle per kamer. Terugverdientijd via energiebesparing is realistisch.",
  youtubeUrl: "https://www.youtube.com/shorts/oCauDVeOGBg",
},

/* =========================
   SLIMME SLOTEN — UITBREIDING
========================== */

{
  slug: "nuki-smart-lock-3-pro",
  ean: "9120072083969",
  brand: "Nuki",
  name: "Nuki Smart Lock 3.0 Pro",
  category: "slimme-sloten",
  image: "/images/products/nuki-smart-lock-3-pro.png",
  description:
    "Slimme deurslot met ingebouwde WiFi en Matter-ondersteuning. Past op bestaand euro-cilinderslot. Auto Unlock en Auto Lock via geofencing.",
  features: ["WiFi ingebouwd", "Matter", "Auto Unlock & Auto Lock", "Geofencing"],
  affiliateUrl: "https://www.amazon.nl/Smart-Module-elektronisch-automatisch-digitaal/dp/B09MRWW6WZ?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F895014%2Fnuki-smart-lock-3-0-pro-white.html",
  priceHint: "€280 – €310",
  priceLastUpdated: "april 2026",
  pros: ["WiFi ingebouwd — geen bridge nodig", "Auto Unlock: deur gaat open als je aankomt", "Matter: werkt met alle grote platforms"],
  cons: ["Hogere prijs dan V4 Pro zonder bridge", "Batterijen vervangen i.p.v. opladen"],
  forWho: ["Voor wie Auto Unlock wil zonder extra bridge te kopen", "Voor Matter smart home setups"],
  personalNote: "Als je de WiFi-versie wilt zonder extra brug, is de 3.0 Pro nog steeds een uitstekende keuze. De Auto Unlock functie is dagelijks gemak dat je niet meer wilt missen.",
},

{
  slug: "aqara-smart-lock-u200-lite",
  ean: "6970504219922",
  brand: "Aqara",
  name: "Aqara Smart Lock U200 Lite",
  category: "slimme-sloten",
  image: "/images/products/aqara-smart-lock-u200-lite.png",
  description:
    "Betaalbaar slim deurslot met Matter/Thread, vingerafdruksensor en NFC-kaartje. Werkt met HomeKit, Google Home, Alexa en Home Assistant.",
  features: ["Vingerafdruksensor", "NFC", "Matter & Thread", "HomeKit, Google, Alexa"],
  affiliateUrl: "https://www.amazon.nl/dp/B0D9Q1WPBT?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Smart%2520Lock%2520U200%2520Lite",
  priceHint: "€130 – €160",
  priceLastUpdated: "april 2026",
  pros: ["Betaalbaar alternatief voor Nuki", "Vingerafdruk + NFC ingebouwd", "Matter: breed compatibel"],
  cons: ["Minder bekende naam dan Nuki", "Volledig nieuw slot — bestaand cilinderslot vervangen"],
  forWho: ["Voor wie een nieuw slot zoekt met biometrie en Matter", "Aqara-gebruikers die alles in één ecosysteem willen"],
  personalNote: "Sterk alternatief voor Nuki, zeker als je al in het Aqara-ecosysteem zit. De vingerafdruksensor maakt het dagelijks gebruik heel prettig.",
  youtubeUrl: "https://www.youtube.com/shorts/nm5_od4Unkk",
},

/* =========================
   MESH WIFI — UITBREIDING
========================== */

{
  slug: "tp-link-deco-xe75-2pack",
  ean: "4897098684986",
  brand: "TP-Link",
  name: "TP-Link Deco XE75 (2-pack)",
  category: "mesh-wifi",
  image: "/images/products/tp-link-deco-xe75-2pack.png",
  description:
    "WiFi 6E mesh-systeem in een 2-pack voor woningen tot ca. 370 m². Ideaal als fundament voor een betrouwbaar smart home met veel apparaten.",
  features: ["WiFi 6E (tri-band)", "2-pack — tot 370 m²", "Eenvoudig uitbreidbaar"],
  affiliateUrl: "https://www.amazon.nl/dp/B09W9FZQKC?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DTP-Link%2520Deco%2520XE75",
  priceHint: "€150 – €200",
  priceLastUpdated: "april 2026",
  pros: ["WiFi 6E — snelste standaard", "Eenvoudige Deco-app", "Goede prijs-kwaliteit voor 2-pack"],
  cons: ["WiFi 6E-snelheid vereist ondersteunde apparaten", "Premium prijs"],
  forWho: ["Voor middelgrote woningen die stabiel mesh wifi willen", "Voor smart home setups met 20+ apparaten"],
  personalNote: "De 2-pack is ideaal voor de meeste woningen in Nederland. Goedkoper dan de 3-pack terwijl de dekking voor de gemiddelde woning ruim voldoende is.",
  youtubeUrl: "https://www.youtube.com/shorts/J-wW_HLFVoM",
},

/* =========================
   ENERGIE MONITORS — UITBREIDING
========================== */

{
  slug: "zendure-slimme-meter-p1",
  ean: "6976552197113",
  brand: "Zendure",
  name: "Zendure Slimme Meter P1",
  category: "energie-monitors",
  image: "/images/products/zendure-slimme-meter-p1.png",
  description:
    "Slimme P1-meter die je slimme meter uitleest en energieverbruik realtime doorgeeft. Werkt met Zendure SolarFlow en Home Assistant. Geen abonnement.",
  features: ["P1-poort aansluiting", "Realtime energieverbruik", "Home Assistant compatibel", "Geen abonnement"],
  affiliateUrl: "https://www.amazon.nl/Zendure-Slimme-Meter-P1/dp/B0FL2CQ56X?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DZendure%2520Slimme%2520Meter%2520P1",
  priceHint: "€90 – €110",
  priceLastUpdated: "april 2026",
  pros: ["Plug-and-play op P1-poort", "Werkt met SolarFlow en Home Assistant", "Geen maandelijks abonnement"],
  cons: ["Hogere prijs dan eenvoudige P1-dongles", "Primair gericht op Zendure-ecosysteem"],
  forWho: ["Voor Zendure SolarFlow-gebruikers die verbruik willen koppelen", "Voor Home Assistant-gebruikers die P1-data willen"],
  youtubeUrl: "https://www.youtube.com/watch?v=3vy7SmFM-G8",
},

{
  slug: "shelly-em",
  ean: "3800235268100",
  brand: "Shelly",
  name: "Shelly EM Energiemeter",
  category: "energie-monitors",
  image: "/images/products/shelly-em.png",
  description:
    "Energiemeter voor in de meterkast die per fase het verbruik meet. Werkt met Home Assistant, Homey en de eigen Shelly-app. Geschikt voor gevorderde gebruikers.",
  features: ["Per-fase meting", "WiFi", "Home Assistant & Homey", "Meterkast montage"],
  affiliateUrl: "https://www.amazon.nl/Shelly-Bluetooth-Energiemeter-Schakelbesturing-Vermogensmeting%E2%94%82-Huisautomatisering%E2%94%82/dp/B0CH1JW2CW?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DShelly%2520EM%2520Energiemeter",
  priceHint: "€60 – €75",
  priceLastUpdated: "april 2026",
  pros: ["Per-fase meting", "Werkt met Home Assistant en Homey", "Goedkoper dan Shelly Pro 3EM"],
  cons: ["Montage in meterkast — elektricien aanbevolen", "Minder functies dan Pro 3EM"],
  forWho: ["Voor Home Assistant-gebruikers die energieverbruik per fase willen meten", "Als goedkoper alternatief voor Shelly Pro 3EM"],
  personalNote: "De Shelly EM is de betaalbaardere instapper voor energiemeting in de meterkast. Minder uitgebreid dan de Pro 3EM maar voor de meeste woningen meer dan genoeg.",
  youtubeUrl: "https://www.youtube.com/shorts/zxPh7ekFqc4",
},

/* =========================
   SENSOREN — UITBREIDING
========================== */

{
  slug: "aqara-rookmelder",
  brand: "Aqara",
  name: "Aqara Rookmelder (Zigbee)",
  category: "sensoren",
  image: "/images/products/aqara-rookmelder.png",
  description:
    "Slimme Zigbee rookmelder met app-meldingen en integratie in HomeKit, Alexa en Home Assistant. Werkt met de Aqara hub.",
  features: ["Zigbee", "App-meldingen bij rookdetectie", "HomeKit, Alexa, Home Assistant", "LED-indicator"],
  affiliateUrl: "https://www.amazon.nl/Aqara-Rookmelders-LED-indicator-Batterijduur-Ondersteunt/dp/B0DHZ7LK2M?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Rookmelder%2520(Zigbee)",
  priceHint: "€35 – €45",
  priceLastUpdated: "april 2026",
  pros: ["App-melding bij rookdetectie — ook op afstand", "Integratie in automatiseringen (bijv. lampen rood laten knipperen)", "Lange batterijduur"],
  cons: ["Vereist Zigbee hub", "Duurdere dan gewone rookmelders"],
  forWho: ["Voor wie rookmelding ook buiten huis wil ontvangen", "Voor slimme automatiseringen bij branddetectie"],
  personalNote: "De slimme rookmelder voegt echt waarde toe ten opzichte van een gewone: je krijgt een melding op je telefoon, ook als je er niet bij bent.",
  youtubeUrl: "https://www.youtube.com/shorts/a3T4mHfMRCQ",
},

{
  slug: "aqara-mini-switch-t1",
  ean: "6975833352166",
  brand: "Aqara",
  name: "Aqara Mini Switch T1",
  category: "sensoren",
  image: "/images/products/aqara-mini-switch-t1.png",
  description:
    "Draadloze Zigbee-knop voor het starten van automatiseringen. Ondersteunt druk-, dubbel- en houdklik. Bevestig aan de muur of gebruik als losse afstandsbediening.",
  features: ["Zigbee", "Druk / Dubbel / Houd klik", "Muurbevestiging", "Automatiseringen"],
  affiliateUrl: "https://www.amazon.nl/Aqara-Schakelaar-Zigbee-verbinding-Bedieningsknop-Home-apparaten/dp/B07D19YXND?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DAqara%2520Mini%2520Switch%2520T1",
  priceHint: "€15 – €22",
  priceLastUpdated: "april 2026",
  pros: ["3 acties per knop (druk / dubbel / houd)", "Werkt met alle Aqara-hubs", "Goedkoop en veelzijdig"],
  cons: ["Vereist Aqara hub of compatibele Zigbee hub", "Geen display"],
  forWho: ["Voor wie een fysieke knop wil voor elke automatisering", "Voor Aqara/Home Assistant-gebruikers"],
  personalNote: "Een van de meest veelzijdige en goedkoopste toevoegingen aan een smart home. Één knop kan drie verschillende acties uitvoeren — denk aan licht aan/uit, scène wisselen en alles uitzetten.",
  youtubeUrl: "https://www.youtube.com/shorts/PnvBQ2v_fjs",
},

{
  slug: "tapo-t300-waterlekkagesensor",
  ean: "4897098682364",
  brand: "TP-Link Tapo",
  name: "Tapo T300 Waterlekkagesensor",
  category: "sensoren",
  image: "/images/products/tapo-t300-waterlekkagesensor.png",
  description:
    "Slimme waterlekkagesensor met alarm tot 90dB en directe app-melding. IP67 waterbestendig. Vereist Tapo Hub H100 of H200.",
  features: ["90dB alarm", "IP67 waterbestendig", "App-melding", "Vereist Tapo Hub"],
  affiliateUrl: "https://www.amazon.nl/Tapo-T300-waterlek-sensor-ingebouwde-instelbare/dp/B0CB8Q3X4N?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DTapo%2520T300%2520Waterlekkagesensor",
  priceHint: "€15 – €20",
  priceLastUpdated: "april 2026",
  pros: ["Luid alarm (90dB) + app-melding", "Goedkoop", "IP67 — bestand tegen water"],
  cons: ["Vereist Tapo Hub H100 of H200", "Alleen binnen Tapo-ecosysteem"],
  forWho: ["Voor Tapo-gebruikers die al een H100/H200 hub hebben", "Voor plaatsing onder wasmachine, vaatwasser of in kelder"],
  personalNote: "Het Tapo-equivalent van de Aqara waterleksensor. Als je al een Tapo hub hebt, is dit de logische keuze.",
  youtubeUrl: "https://www.youtube.com/shorts/sJRH_NO6iNY",
},

/* =========================
   SLIMME VERLICHTING — GU10
========================== */

{
  slug: "innr-smart-gu10-zigbee-4pack",
  ean: "8718781550578",
  brand: "Innr",
  name: "Innr Smart GU10 Zigbee LED (4-pack)",
  category: "slimme-verlichting",
  image: "/images/products/innr-smart-gu10-led-lamp-geschikt-voor-philips-hue.jpg",
  description:
    "Zigbee GU10-spots compatibel met Philips Hue Bridge en SmartThings. Warm wit licht, dimbaar en geschikt voor badkamer, keuken of hal.",
  features: ["Zigbee", "Compatibel met Philips Hue Bridge", "Dimbaar", "Warm wit", "4-pack"],
  affiliateUrl: "https://www.amazon.nl/s?k=Innr+Smart+GU10+Zigbee&tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DInnr%2520Smart%2520GU10%2520Zigbee%2520LED",
  priceHint: "€40 – €55",
  priceLastUpdated: "april 2026",
  pros: ["Compatibel met Hue Bridge en SmartThings", "Zigbee — stabiel en energiezuinig", "4-pack voor een goede prijs"],
  cons: ["Geen kleuren — alleen warm wit", "Vereist een Zigbee hub"],
  forWho: ["Voor Hue-gebruikers die GU10-spots willen toevoegen", "Voor Zigbee-gebruikers die betaalbaar willen uitbreiden"],
  personalNote: "Een goede keuze als je al een Hue Bridge hebt en GU10-spots in de keuken of badkamer slim wil maken zonder de Hue-prijs te betalen.",
},

/* =========================
   SLIMME DEURBELLEN — UITBREIDING
========================== */

{
  slug: "eufy-c30-2k-draadloze-videodeurbel-bundel",
  ean: "0194644900083",
  brand: "eufy",
  name: "eufy C30 2K Draadloze Video Deurbel (Bundel met 64GB SD)",
  category: "slimme-deurbellen",
  image: "/images/products/eufy-c30-2k-draadloze-video-deurbel-2k-fhd-accu-zw.jpg",
  description:
    "Draadloze 2K videodeurbel op accu zonder Homebase. Inclusief 64GB SD-kaart voor lokale opslag. Eenvoudige installatie zonder boren.",
  features: ["2K beeldkwaliteit", "Accu — geen bedrading nodig", "Geen Homebase vereist", "64GB SD-kaart inbegrepen", "Lokale opslag"],
  affiliateUrl: "https://www.amazon.nl/s?k=eufy+C30+2K+Videodeurbel&tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3Deufy%2520C30%25202K%2520Draadloze%2520Video%2520Deurbel",
  priceHint: "€80 – €110",
  priceLastUpdated: "april 2026",
  pros: ["Geen Homebase nodig — direct bruikbaar", "Lokale opslag via SD-kaart — geen abonnement", "Eenvoudige draadloze installatie"],
  cons: ["Accu moet periodiek opgeladen worden", "Minder smart home integraties dan bedrade modellen"],
  forWho: ["Voor wie geen bedrading wil aanleggen", "Voor wie lokale opslag verkiest boven cloud-abonnement"],
  personalNote: "Sterk alternatief voor Ring als je geen abonnement wilt. De SD-kaart bundel maakt het direct compleet en je hebt geen extra Homebase nodig.",
},


  {
    slug: "philips-hue-go-tafellamp-white-and-color-zwart",
    
    brand: "Philips Hue",
    name: "Philips Hue Go tafellamp - White and Color - zwart",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-go-tafellamp-white-and-color-zwart.png",
    description: "Met de slimme Philips Hue Go draagbare tafellamp op batterij breng je slimme verlichting naar iedere hoek van je huis. Deze kleine staande lamp verplaats je namelijk gemakkelijk dankzij het siliconen handvat. Deze lamp verplaats je gemakkelijk naar waar je het meeste licht nodig hebt, omdat de batterij 48 uur meegaat. Eet je eens buiten maar is het wat donker? De Philips Hue Go is ook geschikt voor buitenshuis gebruik. Deze lamp geeft 16 miljoen verschillende kleuren licht. Je verbindt de lamp via bluetooth of aan het internet met een bridge. Met een bridge bedien je de lampen ook buitenshuis en stel je vaste routines in.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Philips-Hue-Tafellamp-Verlichting-Bluetooth/dp/B0B2PV9YX5?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F922837",
    youtubeId: "yhQIaa8hvEg",
    priceHint: "€131,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "philips-hue-lily-starter-pack-white-and-color-prik",
    
    brand: "Philips Hue",
    name: "Philips Hue Lily Starter Pack White and Color prikspot 3-Pack",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-lily-starter-pack-white-and-color-prik.png",
    description: "Met dit Philips Hue Lily Starter Pack heb jij Philips Hue in de tuin of op je terras. Deze basisset bestaat uit 3 armaturen voor buiten en alle onderdelen die je nodig hebt voor het aansluiten. Steek de stekker in het stopcontact en kies uit 1 van de 16 miljoen kleuren of alle tinten wit. De armaturen zijn van aluminium en zijn waterdicht. Je koppelt de slimme buitenlamp aan de Hue bridge (niet meegeleverd). Met de app op je smartphone zet je de lamp op afstand aan en uit, bepaal je de lichtkleur of laat je de lamp automatisch reageren op de zonsondergang. Dankzij geofencing kan de lamp automatisch in- of uitschakelen wanneer je thuiskomt of je woning verlaat. Bovendien is de buitenlamp compatibel met Amazon Alexa, Apple HomeKit of Google Assistant. Let op! Deze Philips Hue buitenverlichting werkt alleen in combinatie met een bridge.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Philips-Hue-Tuinspot-3-Lichts-Basis/dp/B07BXT7VHT?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F813432",
    youtubeId: "4JZbVX8kc74",
    priceHint: "€286,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "philips-hue-play-hdmi-sync-box-8k",
    
    brand: "Philips Hue",
    name: "Philips Hue Play HDMI Sync Box 8K",
    category: "slimme-verlichting",
    image: "/images/products/philips-hue-play-hdmi-sync-box-8k.png",
    description: "Met de Philips Hue Play HDMI Sync Box 8K laat je jouw Philips Hue smart lampen meekleuren met je televisie. De Sync Box verwerkt 4K beelden op 120Hz en 8K beelden op 60Hz. Je maakt dus de afweging tussen een hogere 8K beeldkwaliteit of extra vloeiend beeld met 120Hz. Als je tv maximaal 4K beeld ondersteunt, kies je altijd voor 4K beeldkwaliteit met 120Hz. De Sync Box heeft 5 HDMI poorten. Eén daarvan is de uitgang naar je tv. De andere 4 gebruik je als ingangen. Zo sluit je bijvoorbeeld een Playstation, laptop en Google Chromecast tegelijk aan. De Sync Box verwerkt het beeld van deze apparaten. In de Philips Hue app stel je in welke lampen meekleuren met je beeldscherm.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Philips-Hue-Play-HDMI-sync/dp/B0DGQSY3ZT?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F954033",
    youtubeId: "5jveH90EX14",
    priceHint: "€350,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-l630-wit-en-gekleurd-licht-gu10-4-pac",
    
    brand: "TP-Link",
    name: "TP-Link Tapo L630 - Wit en Gekleurd Licht - GU10 - 4-pack",
    category: "slimme-verlichting",
    image: "/images/products/tp-link-tapo-l630-wit-en-gekleurd-licht-gu10-4-pac.png",
    description: "Met het TP-Link Tapo L630 - Wit en Gekleurd Licht - GU10 - 4-pack voorzie je direct een hele kamer van smart spotjes met GU10 fitting. Deze lampen geven gekleurd en alle tinten wit licht. Zo kies je voor ieder moment van de dag het juiste licht. Met de juiste lichtkleur op het juiste moment voel je je vaak beter. Je bedient de lampen ook buitenshuis omdat de lampen via wifi aan je smartphone verbonden zijn. In de Tapo app stel je de lichtkleur en vaste routines in. Wil je de lamp ook met je stem bedienen? Dan koppel je hem aan je slimme assistent. Je verbindt de lamp ook met andere Tapo smart home apparaten zoals schakelaars en stekkers.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-L630-4-Pack-Energiebesparend-Meerkleurig/dp/B0BG64ZG8Q?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956288",
    youtubeId: "Jq9ePVawrok",
    priceHint: "€45,99",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "nanoleaf-lines-60-degrees-starterkit-slimme-verlic",

    brand: "Nanoleaf",
    name: "Nanoleaf Lines 60 Degrees Starterkit - 9 LED/RGB Lichtbalken",
    category: "slimme-verlichting",
    image: "/images/products/nanoleaf-lines-60-degrees-starterkit-slimme-verlic.jpg",
    description: "Modulaire LED-lichtbalken die je onder 60° aan elkaar koppelt en op de muur monteert. Maak je eigen uniek patroon. Inclusief ritme-modus die meegaat met muziek.",
    features: [
      "9 lichtbalken in starterkit",
      "Matter + Thread + Wifi",
      "Muziek ritme-modus",
      "Uitbreidbaar met losse sets",
      "Werkt met Siri, Google, Alexa",
    ],
    affiliateUrl: "https://www.amazon.nl/Nanoleaf-Lines-Squared-Starterkit-4PK/dp/B0BNJ59PTH?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DNanoleaf%2520Lines%252060%2520Degrees%2520Starterkit%2520-%25209%2520LED%252FRGB%2520Lichtbalken%2520-%2520Siri%252C%2520Google",
    
    youtubeId: "mlAMAE0AWXg",
    priceHint: "€70,99",
    priceLastUpdated: "april 2026",
    rating: 5,
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "nanoleaf-shapes-mini-triangles-uitbreidingspakket-",

    brand: "Nanoleaf",
    name: "Nanoleaf Shapes Mini Triangles Uitbreidingspakket - 10 Panelen",
    category: "slimme-verlichting",
    image: "/images/products/nanoleaf-shapes-mini-triangles-uitbreidingspakket-.jpg",
    description: "Uitbreidingspakket met 10 mini driehoekige lichtpanelen voor je bestaande Nanoleaf Shapes setup. Voeg extra panelen toe en vergroot je wandinstallatie.",
    features: [
      "10 uitbreidingspanelen",
      "Vereist bestaande Nanoleaf Shapes starter",
      "Matter + Thread + Wifi",
      "Muzieksynchro",
      "Uitbreidbaar naar eigen wens",
    ],
    affiliateUrl: "https://www.amazon.nl/Nanoleaf-Expansion-Additional-RGBW-Modular-Assistant/dp/B08K87XT4L?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DNanoleaf%2520Shapes%2520Mini%2520Triangles%2520Uitbreidingspakket%2520-%252010%2520Panelen%2520-%2520Siri%252C%2520Google",
    
    youtubeId: "fX9EES42ZBk",
    priceHint: "€94,99",
    priceLastUpdated: "april 2026",
    rating: 5,
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "govee-neon-rope-light-2-white-5m",

    brand: "Govee",
    name: "Govee Neon Rope Light 2 White (5m)",
    category: "slimme-verlichting",
    image: "/images/products/govee-neon-rope-light-2-white-5m.jpg",
    description: "Flexibele neon-look ledstrip van 5 meter die je in elke gewenste vorm buigt. Ideaal als opvallend accentlicht of wanddecoratie. Bediening via de Govee-app met muzieksynchro en effecten.",
    features: [
      "5 meter lengte",
      "Buigbaar in elke vorm",
      "Muzieksynchro",
      "Werkt via wifi",
      "Geen hub nodig",
      "Govee app bediening",
    ],
    affiliateUrl: "https://www.amazon.nl/Govee-Lights-vormtoewijzing-Assistant-wanddecoratie/dp/B0CQRBC3Y2?tag=slimhuiswonen-21",
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DGovee%2520Neon%2520Rope%2520Light%25202%2520White%2520(5m)",
    
    youtubeId: "fuvrklEnzWI",
    priceHint: "€63,74",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "aqara-presence-sensor-fp1e",

    brand: "Aqara",
    name: "Aqara Presence Sensor FP1E",
    category: "sensoren",
    image: "/images/products/aqara-presence-sensor-fp1e.jpg",
    description: "Compacte mmWave aanwezigheidssensor die het verschil ziet tussen aanwezig en bewegend. Goedkoper alternatief voor de FP2, zonder zone-detectie maar wel betrouwbare aanwezigheidsdetectie.",
    features: [
      "mmWave radar",
      "Zigbee protocol",
      "Detecteert aanwezigheid ook zonder beweging",
      "Werkt met HomeKit, Home Assistant, Homey",
      "Vereist Aqara hub",
    ],
    affiliateUrl: "https://www.amazon.nl/Aqara-Aanwezigheidssensor-Bewegingssensor-ondersteunt-SmartThings/dp/B0D5QPH3T6?tag=slimhuiswonen-21",
    bolUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=13926&p=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Faqara-presence-sensor-fp1e%2F9300000184492428%2F",
    
    youtubeId: "M9FEJ5c2j8c",
    priceHint: "€49,99",
    priceLastUpdated: "april 2026",
    rating: 4.5,
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "sonoff-zigbee-bewegingssensor-snzb-03p-voor-huisbe",

    brand: "Sonoff",
    name: "Sonoff SNZB-03P Zigbee Bewegingssensor",
    category: "sensoren",
    image: "/images/products/sonoff-zigbee-bewegingssensor-snzb-03p-voor-huisbe.jpg",
    description: "Betaalbare Zigbee bewegingssensor van Sonoff met snelle detectie en lange batterijduur. Werkt met vrijwel alle Zigbee-hubs waaronder Homey, Home Assistant en ZHA.",
    features: [
      "Zigbee 3.0",
      "Detectietijd < 5 seconden",
      "Batterijduur tot 3 jaar",
      "Werkt met Homey, Home Assistant, ZHA",
      "Compact formaat",
    ],
    affiliateUrl: "https://www.amazon.nl/SONOFF-SNZB-03P-ZigBee-bewegingssensor-3-0-detector-Zigbee-bridge/dp/B0C1GB4DVR?tag=slimhuiswonen-21",
    bolUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=13926&p=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsonoff-zigbee-bewegingssensor-snzb-03p-voor-huisbeveiliging-%2F9300000189727787%2F",
    
    youtubeId: "XX2byg88Sp0",
    priceHint: "€44,99",
    priceLastUpdated: "april 2026",
    rating: 5,
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "sonoff-zigbee-openingssensor-voor-smart-home-syste",

    brand: "Sonoff",
    name: "Sonoff SNZB-04P Zigbee Deur- en Raamsensor",
    category: "sensoren",
    image: "/images/products/sonoff-zigbee-openingssensor-voor-smart-home-syste.jpg",
    description: "Eenvoudige en betaalbare Zigbee deur- en raamsensor van Sonoff. Stuurt een melding bij opening en sluit goed aan op automatiseringen in Homey of Home Assistant.",
    features: [
      "Zigbee 3.0",
      "Deur en raam detectie",
      "Batterijduur tot 2 jaar",
      "Werkt met Homey, Home Assistant, ZHA",
      "Magnetische montage",
    ],
    affiliateUrl: "https://www.amazon.nl/SONOFF-SNZB-04P-deurcontactalarmsysteem-huisdeursensor-intelligente/dp/B0C1G7W72B?tag=slimhuiswonen-21",
    bolUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=13926&p=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsonoff-zigbee-openingssensor-voor-smart-home-systeem-met-bat%2F9300000192511370%2F",
    
    youtubeId: "3gYyQRAUz8o",
    priceHint: "€9,99",
    priceLastUpdated: "april 2026",
    rating: 5,
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "aqara-cube-t1-pro",

    brand: "Aqara",
    name: "Aqara Cube T1 Pro",
    category: "sensoren",
    image: "/images/products/aqara-cube-t1-pro.jpg",
    description: "Unieke Zigbee-controller in kubusform waarmee je tot 6 verschillende acties uitvoert: draaien, kantelen, schudden, tikken en meer. Perfect voor het bedienen van verlichting, muziek of andere smart home apparaten zonder je telefoon.",
    features: [
      "Zigbee protocol",
      "6 actiemodi",
      "Werkt met HomeKit, Alexa, Google Home",
      "Vereist Aqara hub",
      "Batterij CR2450",
    ],
    affiliateUrl: "https://www.amazon.nl/Aqara-verschillende-handelingen-Home-apparaten-ondersteunt/dp/B0BHWS3VTZ?tag=slimhuiswonen-21",
    bolUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=13926&p=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Faqara-cube-t1-pro%2F9300000135991859%2F",
    
    youtubeId: "RaE9ylNAI-4",
    priceHint: "€22,99",
    priceLastUpdated: "april 2026",
    rating: 4.5,
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tapo-c220-beveiligingscamera-binnen-2k-4mp-qhd-pan",
    
    brand: "Tapo",
    name: "Tapo C220 Beveiligingscamera binnen - 2K 4MP QHD - Pan Tilt",
    category: "slimme-cameras",
    image: "/images/products/tapo-c220-beveiligingscamera-binnen-2k-4mp-qhd-pan.jpg",
    description: "Tapo C220 Beveiligingscamera binnen - 2K 4MP QHD - Pan Tilt",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-C220-WiFi-beveiligingscamera-AI-detecties-privacymodus/dp/B0CF2RRBW5?tag=slimhuiswonen-21",
    bolUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=13926&p=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Ftapo-c220-beveiligingscamera-binnen-2k-4mp-qhd-pan-tilt%2F9300000162714113%2F",
    
    youtubeId: "rpqeOAkQLdA",
    priceHint: "€43,99",
    priceLastUpdated: "april 2026",
    rating: 4.5,
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-c230",
    
    brand: "TP-Link",
    name: "TP-Link Tapo C230",
    category: "slimme-cameras",
    image: "/images/products/tp-link-tapo-c230.png",
    description: "Met de TP-Link Tapo C230 weet je precies wat er thuis gebeurt. Via de Tapo app op je smartphone draai je deze IP camera 360 graden rond en kantel je hem 114 graden omhoog en omlaag. Zo houd je met één camera een hele ruimte in de gaten in haarscherpe 3K resolutie. Omdat de camera het geluid van een huilende baby herkent, gebruik je hem ook als babyfoon. Dankzij de ingebouwde microfoon stel je jouw baby op afstand gerust en houd je een oogje in het zeil. De camera draait automatisch mee met beweging en herkent mensen, dieren en voertuigen. Beelden bewaar je op een SD kaart. Hiervoor heb je geen extra cloudabonnement nodig.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-C230-bewakingscamera-KI-detectie-bewegingsdetectie/dp/B0DSW6SF34?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960205",

    priceHint: "€34,99",
    priceLastUpdated: "april 2026",

    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-c500",
    
    brand: "TP-Link",
    name: "TP-Link Tapo C500",
    category: "slimme-cameras",
    image: "/images/products/tp-link-tapo-c500.png",
    description: "Met een TP-Link Tapo C500 beveiligingscamera houd je in de app je omgeving in 360 graden in de gaten. De full hd camera draait namelijk 360 graden horizontaal rond. Hij volgt beweging automatisch, zodat je een ongewenste gast altijd in beeld hebt. Stel een alarm naar wens in, om mensen af te schrikken. Via de app praat je ook met bezoekers. Dankzij nachtvisie heb je ook in het donker helder beeld. Beelden bewaar je op een SD kaart, waarna je ze terugkijkt in de app. De SD kaart is niet meegeleverd. Voor een vast bedrag per maand bewaar je ook beelden in de cloud. Je sluit deze camera op het stopcontact aan. De camera heeft een privacy mode, die de lens fysiek blokkeert.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-C500-bewakingscamera-bewegingsdetectie-nachtzicht/dp/B0BQJVKVQR?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F924862",
    youtubeId: "yfXoRvY7X2o",
    priceHint: "€34,99",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-c530ws",
    
    brand: "TP-Link",
    name: "TP-Link Tapo C530WS",
    category: "slimme-cameras",
    image: "/images/products/tp-link-tapo-c530ws.png",
    description: "Beveilig je tuin, garage of oprit met de TP-Link Tapo C530WS. Deze IP camera draait 360 graden rond en kantelt 130 graden omhoog en omlaag. Hij volgt bewegingen, zoals mensen die langslopen, automatisch. Zo mis je geen enkele gebeurtenis. De camera filmt in scherpe 3K kwaliteit. Je koppelt deze beveiligingscamera aan je smartphone via de Tapo app. Hier kijk je live mee met de beelden, kantel en draai je de camera en praat je met bezoekers. Als het buiten te donker is om het beeld scherp te zien, zet je de ingebouwde spotlights aan. Ook kijk je in de app de opgenomen beelden terug. Deze bewaar je op een SD kaart. Heb je geen sterke wifi verbinding op de plek waar je de camera installeert? Dan sluit je een ethernetkabel aan. Let op: de SD kaart en ethernetkabel worden niet meegeleverd.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-C530WS-bewakingscamera-bewegingstracking-microSD-kaart/dp/B0DY94MCLN?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960206",
    youtubeId: "lg6pBF37pCQ",
    priceHint: "€57,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-d210-slimme-video-deurbel",
    
    brand: "TP-Link",
    name: "TP-Link Tapo D210 Slimme Video Deurbel",
    category: "slimme-deurbellen",
    image: "/images/products/tp-link-tapo-d210-slimme-video-deurbel.png",
    description: "De TP-Link Tapo D210 is een slimme deurbel die je makkelijk overal plaatst, omdat hij op een batterij werkt. Zo hoef je geen kabels te trekken en kies je zelf de plek bij jouw voordeur. Je bewaart de beelden op een SD kaart, zodat je geen abonnement nodig hebt om beelden terug te kijken. Dankzij de grote kijkhoek zie je bezoekers van top tot teen en houd je goed zicht op jouw stoep of tuin. Met de meegeleverde chime hoor je in huis altijd een geluid als iemand aanbelt. Zo mis je nooit een bezoeker, ook als je telefoon niet bij de hand is.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-D210-Video-deurbel-tweeweg-audio-niet-verwijderbare/dp/B0DN6LZGBW?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F969587",
    youtubeId: "NeLH-0hV91k",
    priceHint: "€57,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-c520ws-2-pack-smart-battery-video-doo",
    
    brand: "TP-Link",
    name: "TP-Link Tapo C520WS 2-pack + Smart Battery Video Doorbell D230S1",
    category: "slimme-deurbellen",
    image: "/images/products/tp-link-tapo-c520ws-2-pack-smart-battery-video-doo.png",
    description: "Met de TP-Link Tapo C520WS 2-pack houd je jouw voor- en achtertuin haarscherp in de gaten. De camera's en deurbel filmen alles in 2K kwaliteit. Zo zie je alle details en blijft het beeld scherp als je inzoomt. Je koppelt de apparaten aan de Tapo app op je smartphone. Hier zoom je in en uit met de camera's en draai je ze 360 graden rond. Ook krijg je via de app een melding bij beweging en wanneer iemand aanbelt. Doordat de deurbel op een batterij werkt, plaats je hem makkelijk waar je maar wilt. De bridge van de deurbel is meegeleverd. Als iemand de bel indrukt, hoor je hardop een geluid. Beelden bewaar je op een SD kaart. Hiervoor heb je geen extra cloudabonnement nodig.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-D230S1-Video-deurbel-gezichtsveld-AI-herkenning/dp/B0C8BFXFN6?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F953221",
    youtubeId: "4J7qLD3_m-M",
    priceHint: "€181,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "hue-secure-bedrade-videodeurbel",
    
    brand: "Philips Hue",
    name: "Hue Secure Bedrade Videodeurbel",
    category: "slimme-deurbellen",
    image: "/images/products/hue-secure-bedrade-videodeurbel.png",
    description: "Met de Hue Secure Bedrade Videodeurbel houd je altijd in de gaten wie er voor de deur staat, dag en nacht. Dankzij de 2K resolutie zie je bezoekers en details extra scherp, terwijl de ingebouwde verlichting zorgt dat beelden ook in het donker helder blijven. Via de microfoon en speaker reageer je direct op wie er aanbelt in de Hue app op je telefoon. De deurbel werkt op vaste bedrading van 12 tot 24 volt en heeft daarvoor een transformator van minimaal 10 VA nodig. Zodra de deurbel beweging herkent, ontvang je direct een melding op je telefoon. Wil je binnen ook een belgeluid horen? Dan heb je de Hue Chime nodig. Koppel de deurbel aan Hue lampen zodat de verlichting automatisch reageert. Beelden sla je op in de Hue cloud met een betaald Hue Secure abonnement. De Hue Chime worden niet meegeleverd.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Philips-Hue-Secure-bedrade-videodeurbel/dp/B0FSLX1RKX?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F970386",
    youtubeId: "ZxB4RXlLuhM",
    priceHint: "€158,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "hue-secure-bedrade-videodeurbel-chime",
    
    brand: "Philips Hue",
    name: "Hue Secure Bedrade Videodeurbel + Chime",
    category: "slimme-deurbellen",
    image: "/images/products/hue-secure-bedrade-videodeurbel-chime.png",
    description: "Met de Hue Secure Bedrade Videodeurbel + Chime houd je altijd in de gaten wie er voor de deur staat, dag én nacht. Dankzij de 2K resolutie zie je bezoekers en details extra scherp, terwijl de ingebouwde verlichting zorgt dat beelden ook in het donker helder blijven. Via de microfoon en speaker reageer je direct op wie er aanbelt in de Hue app op je telefoon. De deurbel werkt op vaste bedrading van 12 tot 24 volt en heeft daarvoor een transformator van minimaal 10 VA nodig. Zodra de deurbel beweging herkent, ontvang je direct een melding en hoor je een belgeluid via de meegeleverde Hue Chime. Koppel de deurbel aan Hue lampen zodat de verlichting automatisch reageert. Beelden sla je op in de Hue cloud met een betaald Hue Secure abonnement. De Hue Bridge wordt niet meegeleverd.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Philips-Hue-Secure-2K-videoresolutie-Bewegingsdetectie/dp/B0FSLSNH89?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F970387",
    youtubeId: "ZxB4RXlLuhM",
    priceHint: "€184,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-l535e-wit-en-gekleurd-licht-e27",
    
    brand: "TP-Link",
    name: "TP-Link Tapo L535E - Wit en Gekleurd Licht - E27",
    category: "slimme-verlichting",
    image: "/images/products/tp-link-tapo-l535e-wit-en-gekleurd-licht-e27.png",
    description: "Met de TP-Link Tapo L535E - Wit en Gekleurd Licht - E27 voorzie je een lamp met E27 fitting van smart verlichting. Deze lamp geeft gekleurd en alle tinten wit licht. Zo kies je voor ieder moment van de dag het juiste licht. Met de juiste lichtkleur op het juiste moment voel je je vaak beter. Je bedient de lampen ook buitenshuis omdat de lampen via wifi aan je smartphone verbonden zijn.In de Tapo app stel je de lichtkleur en vaste routines in. Wil je de lamp ook met je stem bedienen? Dan koppel je hem aan je slimme assistent. Je verbindt de lamp ook met andere Tapo smart home apparaten zoals schakelaars en stekkers.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-L535E-gecertificeerd-wifi-gloeilamp-energiebewaking/dp/B0CKXSYYH2?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956290",
    youtubeId: "ElWxMlAcUOg",
    priceHint: "€19,99",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-l535e-wit-en-gekleurd-licht-e27-4-pac",
    
    brand: "TP-Link",
    name: "TP-Link Tapo L535E - Wit en Gekleurd Licht - E27 - 4-pack",
    category: "slimme-verlichting",
    image: "/images/products/tp-link-tapo-l535e-wit-en-gekleurd-licht-e27-4-pac.png",
    description: "Met de TP-Link Tapo L535E - Wit en Gekleurd Licht - E27 - 4-pack voorzie je 4 lampen met E27 fitting van smart verlichting. Deze lampen geven gekleurd en alle tinten wit licht. Zo kies je voor ieder moment van de dag het juiste licht. Met de juiste lichtkleur op het juiste moment voel je je vaak beter. Je bedient de lampen ook buitenshuis omdat de lampen via wifi aan je smartphone verbonden zijn.In de Tapo app stel je de lichtkleur en vaste routines in. Wil je de lampen ook met je stem bedienen? Dan koppel je ze aan je slimme assistent. Je verbindt de lamp ook met andere Tapo smart home apparaten zoals schakelaars en stekkers.",
    features: [],
    
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F957194",
    youtubeId: "ElWxMlAcUOg",
    priceHint: "€80,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-l930-5-lichtstrip-5m",
    
    brand: "TP-Link",
    name: "TP-Link Tapo L930-5 Lichtstrip 5m",
    category: "slimme-verlichting",
    image: "/images/products/tp-link-tapo-l930-5-lichtstrip-5m.png",
    description: "De TP-Link Tapo L930-5 Lichtstrip 5m is een lichtsnoer met verschillende kleurzones. Zo stel je tot 50 verschillende kleuren tegelijk in. Je gebruikt de lightstrip als subtiele sfeerverlichting, of je laat hem juist uitbundig meebewegen met je muziek. De lightstrip reageert op het geluid van je speakers. Met de kleefstrip plak je de lightstrip op de juiste plaats. Je verbindt de lichtstrip via wifi aan je smartphone, waarna je hem in de app bedient. Is de lichtstrip te lang? Dan knip je hem gemakkelijk op maat. Om de lamp met je stem te bedienen, koppel je hem aan je slimme assistent zoals Siri of Google Assistant.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-L930-5-lichtstripsynchronisatie-kleurverandering-segmentcontrole/dp/B0B59RLH4F?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F956287",
    youtubeId: "q1ghar1-Kko",
    priceHint: "€39,99",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "bosch-slimme-kamerthermostaat-2",
    
    brand: "Bosch",
    name: "Bosch Slimme Kamerthermostaat 2",
    category: "slimme-thermostaten",
    image: "/images/products/bosch-slimme-kamerthermostaat-2.png",
    description: "Met de Bosch Slimme Kamerthermostaat 2 is het thuis altijd de juiste temperatuur. De thermostaat werkt samen met je Bosch radiatorknoppen. Je koppelt ze aan elkaar via een Bosch Smart Home Controller. Let op: deze krijg je niet meegeleverd. Omdat de thermostaat op batterijen werkt, plaats je hem makkelijk overal. Hij meet de temperatuur op de plek waar je hem neerzet. Via de app stel je jouw gewenste temperatuur in. De thermostaat stuurt de radiatorknoppen dan automatisch aan en zet de verwarming hoger of lager. Naast de temperatuur meet de thermostaat de luchtvochtigheid in huis en geeft een melding als deze te hoog of te laag is. Via de Smart Home Controller koppel je ook andere Bosch apparaten aan de thermostaat. Stel bijvoorbeeld in dat als de luchtvochtigheid te laag is, de thermostaat je luchtbevochtiger aanzet via een Bosch slimme stekker.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Bosch-Kamerthermostaat-besturing-slimme-radiatorthermostaten/dp/B0BKLXTWQX?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F973110",
    youtubeId: "U9i2RjJdsFk",
    priceHint: "€69,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "bosch-slimme-radiatorknop-2-matter",
    
    brand: "Bosch",
    name: "Bosch Slimme Radiatorknop 2 Matter",
    category: "slimme-thermostaten",
    image: "/images/products/bosch-slimme-radiatorknop-2-matter.png",
    description: "Regel de verwarming in huis met de Bosch Slimme Radiatorknop 2 Matter. Met deze slimme radiatorknop regel je de temperatuur in één ruimte. Via de Bosch Smart Home app op je smartphone stel je de temperatuur in of kies je een verwarmingsschema. Zo is het in die ruimte altijd de juiste temperatuur. Zo bespaar je energie, want de verwarming staat nooit onnodig aan. Kies bijvoorbeeld dat de verwarming een uur voordat je uit je werk komt aangaat, zodat je altijd thuiskomt in een warm huis. De knop werkt met Matter, waardoor je hem koppelt aan je andere slimme apparaten. Bijvoorbeeld je smart verlichting. Let op: voor sommige functies, bijvoorbeeld het inzien van verbruik en het instellen van verschillende scenario's, heb je een Bosch Smart Home Controller nodig.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Bosch-radiatorknop-Home-systeem-fabrikantonafhankelijk-Matter-systemen/dp/B0DHGR23CN?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F964392",
    youtubeId: "kgsgwnrEYN8",
    priceHint: "€73,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "bosch-smart-home-controller-2",
    
    brand: "Bosch",
    name: "Bosch Smart Home Controller 2",
    category: "slimme-thermostaten",
    image: "/images/products/bosch-smart-home-controller-2.png",
    description: "Je bedient al je Bosch smart home apparaten met de Bosch Smart Home Controller 2. Verbind de controller bijvoorbeeld slimme thermostaten, lampen, deursensoren, rookmelders en beveiligingscamera's van Bosch. Dankzij Zigbee en Matter verbind je ook sommige apparaten van andere merken. Je verbindt de controller aan je router en installeert hem via de Bosch app. Daarna vind je hier alle ondersteunde apparaten. Je slaat je gegevens lokaal op, zodat je systeem ook zonder internet werkt. Wil je apparaten met je stem bedienen? Dan koppel je de controller aan Siri, Alexa en Google Assistant.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Bosch-controller-besturing-Home-systeem-smartHub/dp/B0BLZL6QLK?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F964190",
    youtubeId: "USPzQb37iZ4",
    priceHint: "€87,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "bosch-deur-en-raamcontact-2-matter",
    
    brand: "Bosch",
    name: "Bosch Deur- en Raamcontact 2 Matter",
    category: "sensoren",
    image: "/images/products/bosch-deur-en-raamcontact-2-matter.png",
    description: "Met de Bosch Deur- en Raamcontact 2 Matter trek je met een veilig gevoel de deur achter je dicht. Je plakt deze sensor op een deur of raam. Als iemand de deur of het raam opent, krijg je een melding via de app. Hier controleer je ook altijd en overal of de deur of het raam dicht is. De sensor werkt met Matter, waardoor je hem koppelt aan je andere slimme apparaten. Zo stel je bijvoorbeeld in dat je beveiligingscamera automatisch begint met filmen zodra iemand een deur of raam opent. Omdat de sensor draadloos is, plaats je hem gemakkelijk op alle soorten deuren of ramen. Bijvoorbeeld de achterdeur of het keukenraam, maar ook een medicijnkastje of tuinpoort.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Bosch-energiezuinige-inbraakalarm-fabrikantoverkoepelend-Matter-systemen/dp/B0DK7PQS4T?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F964221",
    youtubeId: "thRNnNY02io",
    priceHint: "€45,99",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "bosch-draadloze-rookmelder-2",
    
    brand: "Bosch",
    name: "Bosch Draadloze Rookmelder 2",
    category: "sensoren",
    image: "/images/products/bosch-draadloze-rookmelder-2.png",
    description: "Met de Bosch Draadloze Rookmelder 2 ga je zorgeloos de deur uit. Je koppelt deze slimme rookmelder aan je smartphone via de Bosch Smart Home app. Wanneer de melder rook herkent, gaat de sirene af en stuurt hij je een melding. Ook waarschuw je de brandweer via de app. De rookmelder werkt op een batterij, waardoor je hem gemakkelijk op elke plek ophangt. Je plaatst een rookmelder het liefst zo hoog mogelijk tegen het plafond. Verbind de melder met je andere Bosch smart home apparaten, bijvoorbeeld een IP camera. Wanneer de rookmelder afgaat, kijk je via de app live mee met de camerabeelden. De Bosch rookmelder werkt ook met Philips Hue smart lampen. Bij rookontwikkeling gaan de lampen automatisch aan, zodat je de route naar buiten beter ziet.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Bosch-Home-rookmelder-app-functie-compatibel-Homekit/dp/B09XFGPTZY?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F964216",
    youtubeId: "l5Bm4MqM6JY",
    priceHint: "€63,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-t30-smart-sensor-kit",
    
    brand: "TP-Link",
    name: "TP-Link Tapo T30 Smart Sensor Kit",
    category: "sensoren",
    image: "/images/products/tp-link-tapo-t30-smart-sensor-kit.png",
    description: "Ga zorgeloos de deur uit met de TP-Link Tapo T30 Smart Sensor Kit. Je koppelt deze slimme sensoren aan je smartphone via de Tapo app. Zo krijg je altijd en overal een melding wanneer iemand langs een bewegingssensor loopt of een deur of raam opent. Ook gaat er op de hub een alarm af. Je verbindt de sensoren aan je andere Tapo apparaten. Op die manier stel je bijvoorbeeld in dat je Tapo beveiligingscamera automatisch begint met filmen als de sensor beweging opmerkt. De sensoren hebben ingebouwde magneten en plakstrips, waardoor je ze makkelijk overal aan vastmaakt. Bijvoorbeeld de deurpost of de muur van de babykamer. De hub sluit je op een centrale plek in huis aan op een stopcontact.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-T30-KIT-bewegingsdetectie-deurbeveiliging/dp/B0DD4F2KXN?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F960204",
    youtubeId: "7IzGibqoc8I",
    priceHint: "€60,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-tapo-p410m",
    
    brand: "TP-Link",
    name: "TP-Link Tapo P410M",
    category: "slimme-stekkers",
    image: "/images/products/tp-link-tapo-p410m.png",
    description: "Met de TP-Link Tapo P410M slimme stekker bedien je elektrische apparaten buiten veilig en slim. Omdat deze stekker waterdicht is, gebruik je hem ook voor buitenverlichting of een heater in de tuin. De stekker werkt via wifi en verbindt meteen met de Tapo app. In de app zie je hoeveel stroom je apparaten gebruiken en zet je ze aan of uit, ook als je niet thuis bent. Je stelt vaste schema¿s in, zodat apparaten automatisch werken op de momenten die jij kiest. Deze stekker herkent of je stroom verbruikt of teruglevert. Je krijgt hierbij inzicht in wat je zonnepanelen doen. Met Amazon Alexa of Google Assistant bedien je apparaten ook met je stem.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Tapo-P410M-stopcontact-stroommeter-afstandsbediening/dp/B0FZCP6BK7?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F975143",
    youtubeId: "uc-R7GvTKtc",
    priceHint: "€21,99",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "bosch-smart-plug-compact",
    
    brand: "Bosch",
    name: "Bosch Smart Plug Compact",
    category: "slimme-stekkers",
    image: "/images/products/bosch-smart-plug-compact.png",
    description: "Met de Bosch Smart Plug Compact schakel je apparaten op afstand in of uit via je smartphone of slimme assistent. Zo zet je bijvoorbeeld de lamp in je woonkamer aan zonder op te staan. Je meet met deze slimme stekker hoeveel stroom een apparaat verbruikt. Hierdoor weet je precies waar je op bespaart. Heb je een plug & play zonnepaneel of mini PV systeem? Dan meet de stekker ook hoeveel energie je bespaart. Dankzij het kleine formaat blijft er ruimte over voor andere stekkers in het stopcontact. Je bedient deze slimme stekker via de Bosch Smart Home app of met je stem via Amazon Alexa of Google Assistant. Of koppel de stekker aan je smart home systeem met Matter. Hij is geschikt voor apparaten tot 3.680 watt.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/Bosch-energiespaarfunctie-Home-systeem-fabrikantonafhankelijk-Matter-systemen/dp/B0DY9ZPVTT?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F964393",
    youtubeId: "99ig_Gu_8yM",
    priceHint: "€58,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-deco-be25",
    
    brand: "TP-Link",
    name: "TP-Link Deco BE25",
    category: "mesh-wifi",
    image: "/images/products/tp-link-deco-be25.png",
    description: "Breid je Deco netwerk uit, of begin met je mesh systeem met de TP-Link Deco BE25. In dit pakket zit één station, waarmee je in een klein appartement overal wifi hebt. Je breidt dit pakket makkelijk uit met extra Deco stations. Dankzij wifi 7 haal je hogere snelheden en heb je minder last van storingen. Als een deel van de verbinding wordt verstoord, blijven de andere banden namelijk gewoon werken. De BE25 router werkt samen via Multi-Link Operation. Zo gebruiken ze meerdere frequenties tegelijk, waarmee je de hoogste snelheden haalt. Deze dual band router gebruikt 2 frequenties: De 5 GHz en de 2.4 GHz frequentie. Op de 5 GHz band haal je snelheden tot 2.882 Mbps. Je verbindt ook andere apparaten bedraad aan het station. Verbind bijvoorbeeld je tv bedraad aan een station, zodat je nooit last hebt van haperingen.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/TP-Link-Deco-BE25-BE3600Mbps-Ethernet-poorten/dp/B0D6W1FWJG?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F967105",
    youtubeId: "xfJQRk9xhDo",
    priceHint: "€112,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-deco-be25-2-pack",
    
    brand: "TP-Link",
    name: "TP-Link Deco BE25 2-pack",
    category: "mesh-wifi",
    image: "/images/products/tp-link-deco-be25-2-pack.png",
    description: "Zorg voor een snelle wifi 7 verbinding op één verdieping van je huis met het TP-Link Deco BE25 2-Pack. Voor een stabiele verbinding op meerdere verdiepingen voeg je een station toe. Dankzij wifi 7 haal je hogere snelheden en heb je minder last van storingen. Als een deel van de verbinding wordt verstoord, blijven de andere banden namelijk gewoon werken. De BE25 routers werken samen via Multi-Link Operation. Zo gebruiken ze meerdere frequenties tegelijk, waarmee je de hoogste snelheden haalt. Deze dual band router gebruikt 2 frequenties. De 5 GHz en de 2.4 GHz frequentie. Op de 5 GHz band haal je snelheden tot 2.882 Mbps. De BE25 stations maken draadloos verbinding met elkaar of via een 2.5 Gbps kabelverbinding. Je verbindt ook andere apparaten bedraad aan ieder station. Verbind bijvoorbeeld je tv bedraad aan een station, zodat je nooit last hebt van haperingen.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/TP-Link-Deco-BE25-BE3600Mbps-Ethernet-poorten/dp/B0D6W3T4M3?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F967108",
    youtubeId: "uhr-Jac9nQk",
    priceHint: "€230,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-deco-be65-2-pack",
    
    brand: "TP-Link",
    name: "TP-Link Deco BE65 2-pack",
    category: "mesh-wifi",
    image: "/images/products/tp-link-deco-be65-2-pack.png",
    description: "Zorg voor een snelle wifi 7 verbinding op 2 verdiepingen met het TP-Link Deco BE65 2-Pack. Dankzij wifi 7 halen deze routers hogere snelheden. Je hebt minder last van stoorzenders, doordat de frequenties van de banden doorwerken wanneer een deel ervan verstoord wordt. De routers hebben 3 draadloze verbindingen die dankzij Multi-Link Operation samenwerken voor de hoogste snelheid. De 5 GHz band heeft een snelheid van 4320 Mbps en de 6 GHz band verwerkt 5760 Mbps. Hierdoor koppel je zonder moeite al je apparaten aan deze snelle banden. De BE65 stations maken verbinding met elkaar via de 3 snelle frequenties, of via een bekabelde 2.5 Gbps verbinding.",
    features: [],
    affiliateUrl: "https://www.amazon.nl/TP-Link-Deco-BE65-2-pack-overdrachten/dp/B0CJJ733W3?tag=slimhuiswonen-21",
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F942270",
    youtubeId: "MSdFzOvPk3k",
    priceHint: "€332,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },

  {
    slug: "tp-link-deco-x10-3-pack",
    
    brand: "TP-Link",
    name: "TP-Link Deco X10 3-Pack",
    category: "mesh-wifi",
    image: "/images/products/tp-link-deco-x10-3-pack.png",
    description: "Zorg overal in huis voor een stabiele internetverbinding met het TP-Link Deco X10 3-Pack. Deze 3 stations gebruiken Wifi 6, waardoor elk station een groter bereik heeft. De 5 GHz band haalt snelheden tot 1200 Mbps. Dit is genoeg snelheid voor een stabiele verbinding. Zonder een 6 GHz band heb je met veel apparaten soms last van vertraging. Dankzij de OFDMA technologie sluit je nog steeds wel veel apparaten tegelijk aan. Elk station heeft 2 poorten met een snelheid van 1 Gbps, je koppelt dus niet veel apparaten bedraad aan deze routers.",
    features: [],
    
    
    coolblueUrl: "https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=85161&p=https%3A%2F%2Fwww.coolblue.nl%2Fproduct%2F944159",
    youtubeId: "-MYZP7E6Dd4",
    priceHint: "€126,00",
    priceLastUpdated: "april 2026",
    
    pros: [],
    cons: [],
    forWho: [],
  },
];

/* =========================
   HELPERS
========================== */

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export default products;

