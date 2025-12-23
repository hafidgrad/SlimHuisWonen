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
      "Uitbreidbaar met extra lampen en accessoires"
    ],
    image: "/images/products/hue-starterkit.jpg",
    affiliateUrl: "https://www.amazon.nl/dp/B0991VHWSJ?tag=slimhuiswonen-21",
    priceHint: "Populaire keuze rond de €80-€120",
    rating: 4.7
  },
  {
    slug: "aqara-deur-raamsensor",
    brand: "Aqara",
    title: "Aqara Deur- & Raamsensor",
    shortTitle: "Aqara sensor",
    category: "sensoren",
    tags: ["sensor", "beveiliging", "zigbee"],
    description:
      "Slimme deur- en raamsensor die je direct laat weten wanneer iets open of dicht gaat. Ideaal voor notificaties en automatiseringen.",
    features: [
      "Werkt met Homey, Home Assistant en meer (via Zigbee)",
      "Kleine, onopvallende vormgeving",
      "Perfect voor beveiliging en slimme automatiseringen"
    ],
    image: "/images/products/aqara-door-window.jpg",
    affiliateUrl: "#",
    priceHint: "Meestal tussen de €15-€25 per sensor",
    rating: 4.6
  },
  {
    slug: "ring-video-deurbel",
    brand: "Ring",
    title: "Ring Video Deurbel",
    shortTitle: "Ring deurbel",
    category: "slimme-deurbellen",
    tags: ["deurbel", "camera", "beveiliging"],
    description:
      "Slimme video deurbel waarmee je altijd ziet wie er voor de deur staat, ook als je niet thuis bent.",
    features: [
      "Live video & terugkijken via app",
      "Bewegingsdetectie en meldingen",
      "Werkt met Alexa en andere smart home systemen"
    ],
    image: "/images/products/ring-doorbell.jpg",
    affiliateUrl: "#",
    priceHint: "Afhankelijk van model tussen de €80-€250",
    rating: 4.5
  },
  {
    slug: "nest-learning-thermostaat",
    brand: "Google Nest",
    title: "Google Nest Learning Thermostaat",
    shortTitle: "Nest thermostaat",
    category: "slimme-thermostaten",
    tags: ["thermostaat", "verwarming", "energie"],
    description:
      "Slimme thermostaat die je gewoontes leert en helpt om energie te besparen zonder in te leveren op comfort.",
    features: [
      "Zelflerende schema’s",
      "Bediening via app en spraak",
      "Inzicht in energieverbruik"
    ],
    image: "/images/products/nest-thermostat.jpg",
    affiliateUrl: "#",
    priceHint: "Meestal rond de €200-€280",
    rating: 4.4
  },
  {
    slug: "tp-link-tapo-slimme-stekker",
    brand: "TP-Link Tapo",
    title: "TP-Link Tapo Slimme Stekker",
    shortTitle: "Slimme stekker",
    category: "slimme-stekkers",
    tags: ["stekker", "energie", "schema"],
    description:
      "Slimme stekker om bestaande apparaten slim te maken. Schakel lampen, apparaten of laders op afstand.",
    features: [
      "Werkt via wifi, geen hub nodig",
      "Schema’s en timers instelbaar",
      "Werkt met Google Assistant en Alexa"
    ],
    image: "/images/products/tapo-plug.jpg",
    affiliateUrl: "#",
    priceHint: "Ongeveer €10-€20 per stuk",
    rating: 4.6
  }
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
{
  slug: "tp-link-tapo-bewegingssensor",
  brand: "TP-Link Tapo",
  title: "TP-Link Tapo Bewegingssensor",
  shortTitle: "Tapo bewegingssensor",
  category: "sensoren",
  tags: ["sensor", "beweging", "beveiliging"],
  description:
    "Slimme bewegingssensor voor automatiseringen en beveiliging. Ideaal om verlichting of meldingen te activeren bij beweging.",
  features: [
    "Snelle bewegingsdetectie",
    "Werkt met Tapo hub",
    "Automatiseringen en meldingen"
  ],
  image: "/images/products/tapo-motion.jpg",
  affiliateUrl: "https://www.amazon.nl/dp/B0B2KXYZ12?tag=slimhuiswonen-21",
  priceHint: "Meestal rond de €20–€30",
  rating: 4.5
},
