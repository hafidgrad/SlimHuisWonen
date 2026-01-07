export const products = [
  {
    slug: "philips-hue-white-ambiance-starterkit",
    brand: "Philips Hue",
    title: "Philips Hue White Ambiance Starterkit",
    shortTitle: "Hue White Ambiance kit",
    category: "slimme-verlichting",
    tags: ["verlichting", "hue", "starterkit"],
    description:
      "Complete starterkit met slimme lampen en bridge. Ideaal om je eerste stappen te zetten met slimme verlichting.",
    features: [
      "Bediening via app, timer en scènes",
      "Werkt met Google Assistant, Alexa en Siri",
      "Uitbreidbaar met extra lampen en accessoires",
    ],
    seo: {
      title: "Philips Hue White Ambiance starterkit | Slimme verlichting",
      description:
        "Complete Philips Hue White Ambiance starterkit met bridge. Compatibel met Homey en Home Assistant.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "native",
    },
    image: "/images/products/hue-starterkit.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0991VHWSJ?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€80–€120",
    rating: 4.7,
  },

  {
    slug: "aqara-deur-raamsensor",
    brand: "Aqara",
    title: "Aqara Deur- & Raamsensor",
    shortTitle: "Aqara deur-raamsensor",
    category: "sensoren",
    tags: ["sensor", "contact", "zigbee"],
    description:
      "Zigbee deur- en raamsensor voor beveiliging en slimme automatiseringen.",
    features: [
      "Ondersteunt SmartThings, Home Assistant en Homey",
      "Zigbee (energiezuinig)",
      "Compact en onopvallend",
    ],
    seo: {
      title: "Aqara deur- en raamsensor | Zigbee sensor",
      description:
        "Aqara Zigbee deur- en raamsensor voor beveiliging en automatiseringen. Werkt met Homey en Home Assistant.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "via-zigbee",
    },
    image: "/images/products/aqara-door-window.jpg",
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
      "Slimme videodeurbel op batterij waarmee je altijd ziet wie er aanbelt.",
    features: [
      "Live videobeeld via app",
      "Bewegingsdetectie",
      "Werkt met Alexa",
    ],
    seo: {
      title: "Ring video deurbel op batterij | Slimme deurbel",
      description:
        "Ring slimme videodeurbel op batterij met bewegingsdetectie en live beeld. Integratie via cloud.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "via-cloud",
    },
    image: "/images/products/ring-doorbell.jpg",
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
      "Slimme thermostaat die helpt energie te besparen zonder in te leveren op comfort.",
    features: [
      "Zelflerende schema’s",
      "Bediening via app en spraak",
      "Inzicht in energieverbruik",
    ],
    seo: {
      title: "Google Nest slimme thermostaat | Energie besparen",
      description:
        "Google Nest slimme thermostaat met zelflerende schema’s. Geschikt voor Home Assistant en Homey.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "native",
    },
    image: "/images/products/nest-thermostat.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0BXRYLMCC?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€200–€280",
    rating: 4.4,
  },

  /* =========================
     NIEUWE PRODUCTEN
  ========================== */

  {
    slug: "tapo-l530e-slimme-wifi-lamp-e27",
    brand: "TP-Link Tapo",
    title: "Tapo L530E Slimme Wi-Fi LED Lamp E27 (2-pack)",
    shortTitle: "Tapo L530E",
    category: "slimme-verlichting",
    tags: ["verlichting", "wifi", "kleur", "tapo"],
    description:
      "Slimme Wi-Fi LED lamp met kleur- en wittinten, zonder hub te gebruiken.",
    features: [
      "Kleur + warm en koud wit",
      "Geen hub nodig",
      "Werkt met Alexa en Google Assistant",
    ],
    seo: {
      title: "Tapo L530E slimme Wi-Fi lamp E27 | Kleur & wit",
      description:
        "TP-Link Tapo L530E slimme Wi-Fi lamp met kleur en wit licht. Geen hub nodig.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "native",
    },
    image: "/images/products/tapo-l530e.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B08QRQQ53T?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€25–€35",
    rating: 4.6,
  },

  {
    slug: "innr-zigbee-e27-led-warm-wit",
    brand: "Innr",
    title: "Innr Zigbee E27 LED Lamp Warm Wit (4-pack)",
    shortTitle: "Innr Zigbee E27",
    category: "slimme-verlichting",
    tags: ["verlichting", "zigbee", "innr"],
    description:
      "Zigbee slimme LED lampen met warm wit licht, geschikt voor Hue en Home Assistant.",
    features: [
      "Zigbee protocol",
      "Dimbaar warm wit",
      "Werkt met Philips Hue",
    ],
    seo: {
      title: "Innr Zigbee E27 slimme lamp warm wit (4-pack)",
      description:
        "Innr Zigbee E27 slimme lampen met warm wit licht. Geschikt voor Homey en Home Assistant.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "via-zigbee",
    },
    image: "/images/products/innr-e27.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0CHJQDRSY?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€45–€60",
    rating: 4.5,
  },

  {
    slug: "tapo-d235-video-deurbel",
    brand: "TP-Link Tapo",
    title: "Tapo D235 Video Deurbel met Camera",
    shortTitle: "Tapo D235",
    category: "slimme-deurbellen",
    tags: ["deurbel", "camera", "beveiliging", "tapo"],
    description:
      "Slimme videodeurbel met 2K camera, kleurennachtzicht en zonder abonnement.",
    features: [
      "2K 5MP camera",
      "Kleur nachtzicht",
      "Geen abonnement nodig",
    ],
    seo: {
      title: "Tapo D235 videodeurbel met camera (2K)",
      description:
        "TP-Link Tapo D235 slimme videodeurbel met 2K camera en kleurennachtzicht.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "via-cloud",
    },
    image: "/images/products/tapo-d235.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0DDL95M8Z?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€120–€160",
    rating: 4.4,
  },

  {
    slug: "tp-link-tapo-t315-temperatuur-luchtvochtigheid",
    brand: "TP-Link Tapo",
    title: "TP-Link Tapo T315 Temperatuur- en Luchtvochtigheidssensor",
    shortTitle: "Tapo T315",
    category: "sensoren",
    tags: ["sensor", "temperatuur", "luchtvochtigheid", "tapo"],
    description:
      "Slimme temperatuur- en luchtvochtigheidssensor binnen het Tapo-ecosysteem.",
    features: [
      "Realtime metingen",
      "Automatiseringen via Tapo app",
      "Compact ontwerp",
    ],
    seo: {
      title: "TP-Link Tapo T315 temperatuur- en RV sensor",
      description:
        "TP-Link Tapo T315 temperatuur- en luchtvochtigheidssensor. Geschikt voor Home Assistant.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "native",
    },
    image: "/images/products/tapo-t315.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0BNYSVV3J?tag=slimhuiswonen-21",
    bolUrl: null,
    priceHint: "€20–€30",
    rating: 4.6,
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
