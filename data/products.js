export const products = [
  /* =========================
     BESTAANDE PRODUCTEN
  ========================== */

  {
    slug: "philips-hue-white-ambiance-starterkit",
    brand: "Philips Hue",
    title: "Philips Hue White Ambiance Starterkit",
    shortTitle: "Hue White Ambiance kit",
    category: "slimme-verlichting",
    tags: ["verlichting", "hue", "starterkit"],
    description:
      "Complete starterkit met slimme lampen en bridge. Ideaal om te starten met slimme verlichting.",
    features: [
      "Bediening via app, timer en scènes",
      "Werkt met Google Assistant, Alexa en Siri",
      "Uitbreidbaar met extra lampen",
    ],
    seo: {
      title: "Philips Hue White Ambiance starterkit | Slimme verlichting",
      description:
        "Complete Philips Hue White Ambiance starterkit met bridge. Geschikt voor Homey en Home Assistant.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "native",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0991VHWSJ?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€80–€120",
    rating: 4.7,
  },

  {
    slug: "aqara-deur-raamsensor",
    brand: "Aqara",
    title: "Aqara Deur- & Raamsensor",
    shortTitle: "Aqara deur/raam",
    category: "sensoren",
    tags: ["sensor", "contact", "zigbee"],
    description:
      "Zigbee deur- en raamsensor voor beveiliging en automatiseringen.",
    features: [
      "Compact en energiezuinig",
      "Zigbee protocol",
      "Werkt met Homey en Home Assistant",
    ],
    seo: {
      title: "Aqara deur- en raamsensor | Zigbee sensor",
      description:
        "Aqara Zigbee deur- en raamsensor voor slimme automatiseringen.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "native",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0BTL8B72D?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€15–€25",
    rating: 4.6,
  },

  {
    slug: "ring-video-deurbel",
    brand: "Ring",
    title: "Ring Video Deurbel op Batterij",
    shortTitle: "Ring deurbel",
    category: "slimme-deurbellen",
    tags: ["deurbel", "camera", "beveiliging"],
    description:
      "Slimme videodeurbel op batterij met live beeld en meldingen.",
    features: [
      "Live video via app",
      "Bewegingsdetectie",
      "Werkt met Alexa",
    ],
    seo: {
      title: "Ring video deurbel op batterij | Slimme deurbel",
      description:
        "Ring slimme videodeurbel met bewegingsdetectie en live beeld.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "via-cloud",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0BZWQP9Z1?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€80–€250",
    rating: 4.5,
  },

  {
    slug: "nest-learning-thermostaat",
    brand: "Google Nest",
    title: "Google Nest Thermostaat",
    shortTitle: "Nest thermostaat",
    category: "slimme-thermostaten",
    tags: ["thermostaat", "energie", "verwarming"],
    description:
      "Slimme thermostaat die energie bespaart met zelflerende schema’s.",
    features: [
      "Zelflerend schema",
      "Spraakbediening",
      "Inzicht in energieverbruik",
    ],
    seo: {
      title: "Google Nest slimme thermostaat | Energie besparen",
      description:
        "Google Nest thermostaat met slimme energiebesparing.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "native",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0BXRYLMCC?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€200–€280",
    rating: 4.4,
  },

  /* =========================
     EXTRA PRODUCTEN TOEGEVOEGD
  ========================== */

  {
    slug: "aeotec-smart-home-hub",
    brand: "Aeotec",
    title: "Aeotec Smart Home Hub (SmartThings)",
    shortTitle: "Aeotec Hub",
    category: "slimme-hubs",
    tags: ["hub", "smartthings", "zigbee", "zwave"],
    description:
      "Smart home hub voor het SmartThings ecosysteem met Zigbee en Z-Wave ondersteuning.",
    features: [
      "Ondersteunt Zigbee & Z-Wave",
      "Werkt met SmartThings",
      "Centrale automatiseringen",
    ],
    seo: {
      title: "Aeotec Smart Home Hub | SmartThings hub",
      description:
        "Aeotec Smart Home Hub voor SmartThings met Zigbee en Z-Wave.",
    },
    compatibility: {
      homey: "nee",
      homeAssistant: "nee",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B08NDH9NXN?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€120–€160",
    rating: 4.3,
  },

  {
    slug: "amazon-echo-show-5-3e-generatie",
    brand: "Amazon",
    title: "Amazon Echo Show 5 (3e generatie)",
    shortTitle: "Echo Show 5",
    category: "slimme-speakers",
    tags: ["amazon", "alexa", "speaker", "display"],
    description:
      "Slimme speaker met scherm en Alexa voor smart home bediening.",
    features: [
      "Slim scherm",
      "Nederlandse Alexa",
      "Wifi & Bluetooth",
    ],
    seo: {
      title: "Amazon Echo Show 5 | Slimme speaker met scherm",
      description:
        "Echo Show 5 met Alexa en scherm. Ideaal voor je smart home.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "via-cloud",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0DJDGN3BX?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€90–€120",
    rating: 4.5,
  },

  {
    slug: "amazon-echo-studio",
    brand: "Amazon",
    title: "Amazon Echo Studio",
    shortTitle: "Echo Studio",
    category: "slimme-speakers",
    tags: ["amazon", "alexa", "speaker", "audio"],
    description:
      "Premium Alexa speaker met Dolby Atmos en krachtig geluid.",
    features: [
      "Dolby Atmos",
      "Ruimtelijk geluid",
      "Alexa ondersteuning",
    ],
    seo: {
      title: "Amazon Echo Studio | Beste Alexa speaker",
      description:
        "Echo Studio met Dolby Atmos voor topgeluid en smart home bediening.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "via-cloud",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0DXN1YWZZ?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€170–€220",
    rating: 4.6,
  },

  {
    slug: "aqara-fp2-aanwezigheidssensor",
    brand: "Aqara",
    title: "Aqara Aanwezigheidssensor FP2",
    shortTitle: "Aqara FP2",
    category: "sensoren",
    tags: ["sensor", "presence", "mmwave"],
    description:
      "mmWave aanwezigheidssensor met zone-detectie voor geavanceerde automatiseringen.",
    features: [
      "mmWave radar",
      "Zone-detectie",
      "Zeer nauwkeurig",
    ],
    seo: {
      title: "Aqara FP2 aanwezigheidssensor | mmWave sensor",
      description:
        "Aqara FP2 mmWave presence sensor voor Home Assistant.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "native",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0BXWZMQJ3?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€70–€100",
    rating: 4.5,
  },

  {
    slug: "aqara-contact-p2",
    brand: "Aqara",
    title: "Aqara Contactsensor P2 (Matter)",
    shortTitle: "Aqara P2",
    category: "sensoren",
    tags: ["sensor", "matter", "thread"],
    description:
      "Matter contactsensor met Thread voor lokale automatiseringen.",
    features: [
      "Matter over Thread",
      "Lokaal & snel",
      "Toekomstbestendig",
    ],
    seo: {
      title: "Aqara P2 contactsensor | Matter sensor",
      description:
        "Aqara P2 Matter contactsensor voor slimme automatiseringen.",
    },
    compatibility: {
      homey: "nee",
      homeAssistant: "native",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0BTL8B72D?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€20–€35",
    rating: 4.6,
  },

  {
    slug: "tp-link-tapo-t110-contactsensor",
    brand: "TP-Link Tapo",
    title: "TP-Link Tapo T110 Contactsensor",
    shortTitle: "Tapo T110",
    category: "sensoren",
    tags: ["sensor", "contact", "tapo"],
    description:
      "Contactsensor voor deuren en ramen binnen het Tapo ecosysteem.",
    features: [
      "Directe meldingen",
      "Lange batterijduur",
      "Werkt met Tapo Hub",
    ],
    seo: {
      title: "TP-Link Tapo T110 contactsensor | Deur/raam",
      description:
        "Tapo T110 contactsensor voor slimme deur- en raambeveiliging.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "native",
    },
    affiliateUrl: "https://www.amazon.nl/dp/B0BF5MC9QXJ?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€15–€25",
    rating: 4.4,
  },
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}
