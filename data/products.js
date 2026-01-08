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
    affiliateUrl: "https://www.amazon.nl/dp/B0991VHWSJ?tag=slimhuiswonen-21",
    priceHint: "€80–€120",
    rating: 4.7,
  },

  {
    slug: "aqara-deur-raamsensor",
    brand: "Aqara",
    name: "Aqara Deur- & Raamsensor",
    title: "Aqara Deur- & Raamsensor",
    category: "sensoren",
    description:
      "Zigbee deur- en raamsensor voor beveiliging en automatiseringen.",
    features: [
      "Compact en energiezuinig",
      "Zigbee protocol",
      "Werkt met Homey en Home Assistant",
    ],
    affiliateUrl: "https://www.amazon.nl/dp/B0BTL8B72D?tag=slimhuiswonen-21",
    priceHint: "€15–€25",
    rating: 4.6,
  },

  {
    slug: "aqara-fp2-aanwezigheidssensor",
    brand: "Aqara",
    name: "Aqara Aanwezigheidssensor FP2",
    title: "Aqara Aanwezigheidssensor FP2",
    category: "sensoren",
    description:
      "mmWave aanwezigheidssensor met zone-detectie voor geavanceerde automatiseringen.",
    features: ["mmWave radar", "Zone-detectie", "Zeer nauwkeurig"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BXWZMQJ3?tag=slimhuiswonen-21",
    priceHint: "€70–€100",
    rating: 4.5,
  },

  {
    slug: "aqara-contact-p2",
    brand: "Aqara",
    name: "Aqara Contactsensor P2 (Matter)",
    title: "Aqara Contactsensor P2 (Matter)",
    category: "sensoren",
    description:
      "Matter contactsensor met Thread voor snelle en lokale automatiseringen.",
    features: ["Matter over Thread", "Lokaal", "Toekomstbestendig"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BTL8B72D?tag=slimhuiswonen-21",
    priceHint: "€20–€35",
    rating: 4.6,
  },

  {
    slug: "tp-link-tapo-t110-contactsensor",
    brand: "TP-Link Tapo",
    name: "TP-Link Tapo T110 Contactsensor",
    title: "TP-Link Tapo T110 Contactsensor",
    category: "sensoren",
    description:
      "Contactsensor voor deuren en ramen binnen het Tapo ecosysteem.",
    features: [
      "Directe meldingen",
      "Lange batterijduur",
      "Werkt met Tapo Hub",
    ],
    affiliateUrl: "https://www.amazon.nl/dp/B0BF5MC9QXJ?tag=slimhuiswonen-21",
    priceHint: "€15–€25",
    rating: 4.4,
  },

  {
    slug: "ring-video-deurbel",
    brand: "Ring",
    name: "Ring Video Deurbel op Batterij",
    title: "Ring Video Deurbel op Batterij",
    category: "slimme-deurbellen",
    description:
      "Slimme videodeurbel op batterij met live beeld en meldingen.",
    features: ["Live video", "Bewegingsdetectie", "Werkt met Alexa"],
    affiliateUrl: "https://www.amazon.nl/dp/B0BZWQP9Z1?tag=slimhuiswonen-21",
    priceHint: "€80–€250",
    rating: 4.5,
  },

  {
    slug: "nest-learning-thermostaat",
    brand: "Google Nest",
    name: "Google Nest Thermostaat",
    title: "Google Nest Thermostaat",
    category: "slimme-thermostaten",
    description:
      "Slimme thermostaat die energie bespaart met zelflerende schema’s.",
    features: [
      "Zelflerend schema",
      "Spraakbediening",
      "Inzicht in energieverbruik",
    ],
    affiliateUrl: "https://www.amazon.nl/dp/B0BXRYLMCC?tag=slimhuiswonen-21",
    priceHint: "€200–€280",
    rating: 4.4,
  },

  {
    slug: "aeotec-smart-home-hub",
    brand: "Aeotec",
    name: "Aeotec Smart Home Hub (SmartThings)",
    title: "Aeotec Smart Home Hub (SmartThings)",
    category: "slimme-hubs",
    description:
      "Smart home hub met Zigbee en Z-Wave ondersteuning voor SmartThings.",
    features: ["Zigbee & Z-Wave", "SmartThings", "Automatiseringen"],
    affiliateUrl: "https://www.amazon.nl/dp/B08NDH9NXN?tag=slimhuiswonen-21",
    priceHint: "€120–€160",
    rating: 4.3,
  },

  {
    slug: "amazon-echo-show-5-3e-generatie",
    brand: "Amazon",
    name: "Amazon Echo Show 5 (3e generatie)",
    title: "Amazon Echo Show 5 (3e generatie)",
    category: "slimme-speakers",
    description:
      "Slimme speaker met scherm en Alexa voor smart home bediening.",
    features: ["Scherm", "Alexa NL", "Wifi & Bluetooth"],
    affiliateUrl: "https://www.amazon.nl/dp/B0DJDGN3BX?tag=slimhuiswonen-21",
    priceHint: "€90–€120",
    rating: 4.5,
  },

  {
    slug: "amazon-echo-studio",
    brand: "Amazon",
    name: "Amazon Echo Studio",
    title: "Amazon Echo Studio",
    category: "slimme-speakers",
    description:
      "Premium Alexa speaker met Dolby Atmos en krachtig geluid.",
    features: ["Dolby Atmos", "Krachtig geluid", "Alexa"],
    affiliateUrl: "https://www.amazon.nl/dp/B0DXN1YWZZ?tag=slimhuiswonen-21",
    priceHint: "€170–€220",
    rating: 4.6,
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

