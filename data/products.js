export const products = [
  /* =========================
     SLIMME VERLICHTING
  ========================== */

  {
    slug: "philips-hue-white-ambiance-starterkit",
    brand: "Philips Hue",
    title: "Philips Hue White Ambiance Starterkit",
    shortTitle: "Hue White Ambiance kit",
    category: "slimme-verlichting",
    tags: ["verlichting", "hue", "starterkit"],
    description:
      "Complete starterkit met slimme lampen en Hue Bridge. Ideaal om te beginnen met slimme verlichting.",
    features: [
      "Bediening via app, timers en scènes",
      "Werkt met Google Assistant, Alexa en Siri",
      "Uitbreidbaar tot 50 lampen",
    ],
    seo: {
      title: "Philips Hue White Ambiance starterkit | Slimme verlichting",
      description:
        "Complete Philips Hue White Ambiance starterkit met bridge. Werkt met Homey en Home Assistant.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "native",
    },
    image: "/images/products/hue-starterkit.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0991VHWSJ?tag=slimhuiswonen-21",
    priceHint: "€80–€120",
    rating: 4.7,
  },

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
    priceHint: "€45–€60",
    rating: 4.5,
  },

  /* =========================
     SENSOREN
  ========================== */

  {
    slug: "aqara-deur-raamsensor",
    brand: "Aqara",
    title: "Aqara Deur- & Raamsensor",
    shortTitle: "Aqara deur-raamsensor",
    category: "sensoren",
    tags: ["sensor", "contact", "zigbee"],
    description:
      "Zigbee deur- en raamsensor voor beveiliging en automatiseringen.",
    features: [
      "Zigbee (energiezuinig)",
      "Realtime meldingen",
      "Compact ontwerp",
    ],
    seo: {
      title: "Aqara deur- en raamsensor | Zigbee sensor",
      description:
        "Aqara Zigbee deur- en raamsensor voor beveiliging. Werkt met Homey en Home Assistant.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "via-zigbee",
    },
    image: "/images/products/aqara-door-window.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0BTL8B72D?tag=slimhuiswonen-21",
    priceHint: "€15–€25",
    rating: 4.6,
  },

  {
    slug: "aqara-waterleksensor-t1",
    brand: "Aqara",
    title: "Aqara Waterleksensor T1",
    shortTitle: "Aqara waterleksensor",
    category: "sensoren",
    tags: ["sensor", "waterlek", "zigbee"],
    description:
      "Slimme waterleksensor die direct waarschuwt bij lekkage.",
    features: [
      "Directe meldingen",
      "Zigbee protocol",
      "Tot 2 jaar batterijduur",
    ],
    seo: {
      title: "Aqara waterleksensor T1 | Slimme lekkagedetectie",
      description:
        "Aqara waterleksensor T1 voor snelle lekkagedetectie. Geschikt voor Homey en Home Assistant.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "via-zigbee",
    },
    image: "/images/products/aqara-water-leak.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0DWXHMFQS?tag=slimhuiswonen-21",
    priceHint: "€20–€30",
    rating: 4.6,
  },

  {
    slug: "aqara-vibratiesensor",
    brand: "Aqara",
    title: "Aqara Vibratiesensor",
    shortTitle: "Aqara vibratiesensor",
    category: "sensoren",
    tags: ["sensor", "trilling", "zigbee"],
    description:
      "Trillingssensor voor glasbreukdetectie en objectbeveiliging.",
    features: [
      "Detecteert trilling, kanteling en val",
      "Zigbee protocol",
      "Instelbare gevoeligheid",
    ],
    seo: {
      title: "Aqara vibratiesensor | Glasbreuk & beveiliging",
      description:
        "Aqara vibratiesensor voor slimme beveiliging. Werkt met Homey en Home Assistant.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "via-zigbee",
    },
    image: "/images/products/aqara-vibration.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B07PJT939B?tag=slimhuiswonen-21",
    priceHint: "€20–€30",
    rating: 4.5,
  },

  {
    slug: "tp-link-tapo-t315-temperatuur-luchtvochtigheid",
    brand: "TP-Link Tapo",
    title: "TP-Link Tapo T315 Temperatuur- en Luchtvochtigheidssensor",
    shortTitle: "Tapo T315",
    category: "sensoren",
    tags: ["sensor", "temperatuur", "luchtvochtigheid", "tapo"],
    description:
      "Temperatuur- en luchtvochtigheidssensor binnen het Tapo-ecosysteem.",
    features: [
      "Realtime metingen",
      "Automatiseringen via Tapo app",
      "Compact ontwerp",
    ],
    seo: {
      title: "TP-Link Tapo T315 temperatuur- en RV sensor",
      description:
        "TP-Link Tapo T315 sensor voor temperatuur en luchtvochtigheid. Geschikt voor Home Assistant.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "native",
    },
    image: "/images/products/tapo-t315.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0BNYSVV3J?tag=slimhuiswonen-21",
    priceHint: "€20–€30",
    rating: 4.6,
  },

  {
    slug: "tp-link-tapo-t100-bewegingssensor",
    brand: "TP-Link Tapo",
    title: "TP-Link Tapo T100 Bewegingssensor",
    shortTitle: "Tapo T100",
    category: "sensoren",
    tags: ["sensor", "beweging", "tapo"],
    description:
      "Slimme bewegingssensor voor automatiseringen binnen het Tapo-ecosysteem.",
    features: [
      "Snelle bewegingsdetectie",
      "Automatiseringen via Tapo app",
      "Werkt met Tapo hub",
    ],
    seo: {
      title: "TP-Link Tapo T100 bewegingssensor",
      description:
        "TP-Link Tapo T100 bewegingssensor voor slimme automatiseringen.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "native",
    },
    image: "/images/products/tapo-t100.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0B7NDJW6J?tag=slimhuiswonen-21",
    priceHint: "€15–€25",
    rating: 4.5,
  },

  /* =========================
     SLIMME HUBS
  ========================== */

  {
    slug: "homey-pro-early-2023",
    brand: "Homey",
    title: "Homey Pro (Early 2023)",
    shortTitle: "Homey Pro",
    category: "slimme-hubs",
    tags: ["homey", "hub", "slimme-verlichting"],
    description:
      "Krachtige alles-in-één smart home hub met ondersteuning voor vrijwel alle protocollen.",
    features: [
      "Zigbee, Z-Wave, Wi-Fi, Bluetooth",
      "Volledige lokale automatisering",
      "Geen abonnement nodig",
    ],
    seo: {
      title: "Homey Pro Early 2023 | Slimme hub",
      description:
        "Homey Pro Early 2023 smart home hub. Ondersteunt vrijwel alle slimme apparaten.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "via-mqtt",
    },
    image: "/images/products/homey-pro.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0C5R1JS91?tag=slimhuiswonen-21",
    priceHint: "€399",
    rating: 4.8,
  },

  {
    slug: "homey-bridge",
    brand: "Homey",
    title: "Homey Bridge",
    shortTitle: "Homey Bridge",
    category: "slimme-hubs",
    tags: ["homey", "hub"],
    description:
      "Toegankelijke smart home hub voor Homey Cloud.",
    features: [
      "Werkt samen met Homey Cloud",
      "Ondersteunt Zigbee en Z-Wave",
      "Betaalbare instap",
    ],
    seo: {
      title: "Homey Bridge | Slimme hub",
      description:
        "Homey Bridge smart home hub als instapmodel voor Homey Cloud.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "nee",
    },
    image: "/images/products/homey-bridge.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B08FRLQH75?tag=slimhuiswonen-21",
    priceHint: "€69–€99",
    rating: 4.4,
  },

  {
    slug: "philips-hue-bridge",
    brand: "Philips Hue",
    title: "Philips Hue Bridge",
    shortTitle: "Hue Bridge",
    category: "slimme-hubs",
    tags: ["hue", "hub", "slimme-verlichting"],
    description:
      "Centrale hub voor Philips Hue verlichting.",
    features: [
      "Bediening tot 50 lampen",
      "Scènes en automatiseringen",
      "Werkt met Alexa en Google Assistant",
    ],
    seo: {
      title: "Philips Hue Bridge | Slimme verlichtingshub",
      description:
        "Philips Hue Bridge voor volledige controle over slimme verlichting.",
    },
    compatibility: {
      homey: "native",
      homeAssistant: "native",
    },
    image: "/images/products/hue-bridge.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B09CV9F3KR?tag=slimhuiswonen-21",
    priceHint: "€50–€65",
    rating: 4.7,
  },

  {
    slug: "home-assistant-green",
    brand: "Home Assistant",
    title: "Home Assistant Green Smart Hub",
    shortTitle: "HA Green",
    category: "slimme-hubs",
    tags: ["home-assistant", "hub"],
    description:
      "Officiële Home Assistant hub voor lokale smart home automatisering.",
    features: [
      "Volledig lokaal",
      "Geen cloud nodig",
      "Open source platform",
    ],
    seo: {
      title: "Home Assistant Green | Slimme hub",
      description:
        "Home Assistant Green smart home hub voor lokale automatiseringen.",
    },
    compatibility: {
      homey: "nee",
      homeAssistant: "native",
    },
    image: "/images/products/home-assistant-green.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0CXVKSG19?tag=slimhuiswonen-21",
    priceHint: "€99–€120",
    rating: 4.7,
  },

  /* =========================
     SLIMME SPEAKERS
  ========================== */

  {
    slug: "google-nest-mini-2e-generatie",
    brand: "Google Nest",
    title: "Google Nest Mini (2e generatie)",
    shortTitle: "Nest Mini",
    category: "slimme-speakers",
    tags: ["google", "assistant", "speaker"],
    description:
      "Compacte slimme speaker met Google Assistant.",
    features: [
      "Spraakbediening",
      "Werkt met Google Home",
      "Compact formaat",
    ],
    seo: {
      title: "Google Nest Mini 2e generatie | Slimme speaker",
      description:
        "Google Nest Mini slimme speaker met Google Assistant.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "via-cloud",
    },
    image: "/images/products/google-nest-mini.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0CGYFYY34?tag=slimhuiswonen-21",
    priceHint: "€45–€60",
    rating: 4.6,
  },

  {
    slug: "amazon-echo-dot-5e-generatie",
    brand: "Amazon",
    title: "Amazon Echo Dot (5e generatie)",
    shortTitle: "Echo Dot",
    category: "slimme-speakers",
    tags: ["amazon", "alexa", "speaker"],
    description:
      "Slimme speaker met Alexa en verbeterd geluid.",
    features: [
      "Alexa spraakassistent",
      "Bluetooth en Wi-Fi",
      "Nederlandse ondersteuning",
    ],
    seo: {
      title: "Amazon Echo Dot 5e generatie | Slimme speaker",
      description:
        "Amazon Echo Dot slimme speaker met Alexa en indrukwekkend geluid.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "via-cloud",
    },
    image: "/images/products/echo-dot.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B09B8X9RGM?tag=slimhuiswonen-21",
    priceHint: "€55–€65",
    rating: 4.6,
  },

  {
    slug: "amazon-echo-show-8",
    brand: "Amazon",
    title: "Amazon Echo Show 8",
    shortTitle: "Echo Show 8",
    category: "slimme-speakers",
    tags: ["amazon", "alexa", "speaker", "display"],
    description:
      "Slimme speaker met scherm en Alexa.",
    features: [
      "8,7 inch HD-scherm",
      "Alexa spraakbediening",
      "Videobellen en smart home bediening",
    ],
    seo: {
      title: "Amazon Echo Show 8 | Slimme speaker met scherm",
      description:
        "Amazon Echo Show 8 slimme speaker met scherm en Alexa.",
    },
    compatibility: {
      homey: "via-cloud",
      homeAssistant: "via-cloud",
    },
    image: "/images/products/echo-show-8.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0DTQF1MQT?tag=slimhuiswonen-21",
    priceHint: "€140–€160",
    rating: 4.7,
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
