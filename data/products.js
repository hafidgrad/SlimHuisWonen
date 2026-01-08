export const products = [
  {
    slug: "philips-hue-white-ambiance-starterkit",
    brand: "Philips Hue",
    name: "Philips Hue White Ambiance Starterkit",
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
    name: "Aqara Deur- & Raamsensor",
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
    name: "Ring Video Deurbel op Batterij",
    title: "Ring Video Deurbel op Batterij",
    shortTitle: "Ring deurbel",
    category: "slimme-deurbellen",
    tags: ["deurbel", "camera", "beveiliging"],
    description:
      "Slimme videodeurbel op batterij met live beeld en meldingen.",
    features: ["Live video via app", "Bewegingsdetectie", "Werkt met Alexa"],
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
    name: "Google Nest Thermostaat",
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

  {
    slug: "aeotec-smart-home-hub",
    brand: "Aeotec",
    name: "Aeotec Smart Home Hub (SmartThings)",
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
    name: "Amazon Echo Show 5 (3e generatie)",
    title: "Amazon Echo Show 5 (3e generatie)",
    shortTitle: "Echo Show 5",
    category: "slimme-speakers",
    tags: ["amazon", "alexa", "speaker", "display"],
    description:
      "Slimme speaker met scherm en Alexa voor smart home bediening.",
    features: ["Slim scherm", "Nederlandse Alexa", "Wifi & Bluetooth"],
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
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug);
}
