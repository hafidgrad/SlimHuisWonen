import { getAllProducts } from "@/data/products";
import { tips } from "@/data/tips";
import { blogPosts } from "@/data/blog";
import { howto } from "@/data/howto";
import { categories } from "@/data/categories";
import { aanraders } from "@/data/aanraders";

// Productslugs die 301-redirecten naar een aanraders-gids (zie PRODUCT_REDIRECTS
// in next.config.mjs) — niet in sitemap opnemen
const REDIRECTED_PRODUCT_SLUGS = new Set([
  "aqara-cube-t1-pro",
  "aqara-deur-raamsensor-p2",
  "aqara-fp2-aanwezigheidssensor",
  "aqara-hub-m3",
  "aqara-mini-switch-t1",
  "aqara-motion-sensor",
  "aqara-presence-sensor-fp1e",
  "aqara-rookmelder",
  "aqara-smart-plug",
  "aqara-temperatuur-rv-t1",
  "aqara-vibratiesensor",
  "aqara-waterleksensor-t1",
  "bosch-deur-en-raamcontact-2-matter",
  "bosch-draadloze-rookmelder-2",
  "bosch-slimme-kamerthermostaat-2",
  "bosch-slimme-radiatorknop-2-matter",
  "bosch-smart-home-controller-2",
  "bosch-smart-plug-compact",
  "brostrend-mini-ax900-wifi-6",
  "eero-pro-6e",
  "eve-door-window",
  "eve-energy",
  "eve-motion-matter-bewegingssensor",
  "eve-weather",
  "frient-elektriciteitsmeter-interface-2-p1",
  "google-nest-thermostaat",
  "google-nest-wifi-pro",
  "govee-neon-rope-light-2-white-5m",
  "govee-outdoor-ledstrip",
  "govee-rgbic-ledstrip",
  "home-assistant-green",
  "homey-bridge",
  "homey-pro-2026",
  "homey-pro-early-2023",
  "innr-smart-gu10-zigbee-4pack",
  "innr-zigbee-e27",
  "innr-zigbee-outdoor-smart-plug",
  "nanoleaf-lines-60-degrees-starterkit-slimme-verlic",
  "nanoleaf-shapes-mini-triangles-uitbreidingspakket-",
  "netatmo-slimme-thermostaat",
  "philips-hue-bridge",
  "philips-hue-color-ambiance-e27",
  "philips-hue-dimmer-switch-v2",
  "philips-hue-go-tafellamp-white-and-color-zwart",
  "philips-hue-gu10-white-ambiance",
  "philips-hue-lightstrip-plus",
  "philips-hue-lily-starter-pack-white-and-color-prik",
  "philips-hue-motion-sensor",
  "philips-hue-play-hdmi-sync-box-8k",
  "philips-hue-smart-plug",
  "philips-hue-smart-plug-combipack",
  "philips-hue-white-ambiance-starterkit",
  "philips-hue-white-e27",
  "samsung-smartthings-hub",
  "shelly-em",
  "shelly-pro-3em",
  "slimme-thermostaat-combiketel",
  "sonoff-zigbee-bewegingssensor-snzb-03p-voor-huisbe",
  "sonoff-zigbee-openingssensor-voor-smart-home-syste",
  "switchbot-matter-plug-mini",
  "tado-radiatorkraan-v3-plus",
  "tado-smart-thermostat-v3",
  "tado-smart-thermostat-v3-bedraad",
  "tapo-h200-smart-hub",
  "tapo-ke100-kit",
  "tapo-l510e",
  "tapo-l530e",
  "tapo-l920-5-ledstrip",
  "tapo-p110",
  "tapo-p115",
  "tapo-t100",
  "tapo-t110",
  "tapo-t300-waterlekkagesensor",
  "tapo-t315",
  "tp-link-deco-be25",
  "tp-link-deco-be25-2-pack",
  "tp-link-deco-be65-2-pack",
  "tp-link-deco-x10-3-pack",
  "tp-link-deco-xe75",
  "tp-link-deco-xe75-2pack",
  "tp-link-tapo-l535e-wit-en-gekleurd-licht-e27",
  "tp-link-tapo-l535e-wit-en-gekleurd-licht-e27-4-pac",
  "tp-link-tapo-l630-wit-en-gekleurd-licht-gu10-4-pac",
  "tp-link-tapo-l930-5-lichtstrip-5m",
  "tp-link-tapo-p410m",
  "tp-link-tapo-t30-smart-sensor-kit",
  "zendure-slimme-meter-p1",
]);

// Slugs die nu redirecten — weghouden uit sitemap
const REDIRECTED_AANRADERS = new Set([
  "beste-robotstofzuigers-2026",
  "beste-slimme-deurbel",
  "beste-slimme-camera",
  "beste-slimme-slot",
  "beste-slimme-stekkers-2026",
]);

// Productcategorieën met noindex meta-tag — niet in sitemap opnemen
const NOINDEX_PRODUCT_CATEGORIES = new Set([
  "slimme-cameras",
  "slimme-deurbellen",
  "slimme-sloten",
]);

// Blog-slugs met noindex meta-tag — niet in sitemap opnemen
const NOINDEX_BLOG_SLUGS = new Set([
  "wat-is-een-slimme-camera",
  "beste-slimme-deurbel",
  "ring-vs-tapo-deurbel",
  "eufy-vs-ring-camera",
  "slimme-deurbel-zonder-abonnement",
  "smart-home-beveiliging-tips",
]);

// How-to-slugs met noindex meta-tag — niet in sitemap opnemen
const NOINDEX_HOWTO_SLUGS = new Set([
  "hoe-installeer-je-een-slimme-deurbel",
  "hoe-installeer-je-een-tapo-camera",
]);

const REDIRECTED_CATEGORIES = new Set([
  "slimme-cameras",
  "slimme-deurbellen",
]);

// Verlichting-gerelateerde aanraders krijgen hogere prioriteit
const HIGH_PRIORITY_AANRADERS = new Set([
  "beste-slimme-verlichting",
  "beste-smart-home-hub",
]);

// Verlichtings-gerelateerde blog/how-to slugs
const HIGH_PRIORITY_BLOG = new Set([
  "philips-hue-vs-ikea-tradfri",
  "wat-is-slimme-verlichting",
  "slimme-lampen-zonder-hub",
  "zigbee-vs-wifi-lampen",
  "philips-hue-alternatieven",
]);
const HIGH_PRIORITY_HOWTO = new Set([
  "slimme-verlichting-installeren",
  "lamp-automatisch-aan-bij-beweging",
  "slimme-verlichting-koppelen-lukt-niet",
]);

export default function sitemap() {
  const baseUrl = "https://www.slimhuiswonen.nl";
  const lastModified = new Date();

  const newPages = [
    { url: `${baseUrl}/vergelijking/philips-hue-vs-ikea-vs-innr`, lastModified, priority: 0.9, changeFrequency: "monthly" },
  ];

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/aanraders", priority: 0.9, changeFrequency: "weekly" },
    { path: "/producten", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/tips", priority: 0.7, changeFrequency: "weekly" },
    { path: "/how-to", priority: 0.8, changeFrequency: "weekly" },
    { path: "/over", priority: 0.5, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.4, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
    { path: "/retourbeleid", priority: 0.2, changeFrequency: "yearly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    priority,
    changeFrequency,
  }));

  // Topic routes verwijderd — die redirecten nu

  const aanradersArray = Array.isArray(aanraders) ? aanraders : [];
  const aanraderRoutes = aanradersArray
    .filter((g) => g?.slug && !REDIRECTED_AANRADERS.has(g.slug))
    .map((g) => ({
      url: `${baseUrl}/aanraders/${g.slug}`,
      lastModified,
      priority: HIGH_PRIORITY_AANRADERS.has(g.slug) ? 0.95 : 0.8,
      changeFrequency: "monthly",
    }));

  const blogArray = Array.isArray(blogPosts) ? blogPosts : [];
  const blogRoutes = blogArray
    .filter((b) => b?.available && b?.slug && !NOINDEX_BLOG_SLUGS.has(b.slug))
    .map((b) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified,
      priority: HIGH_PRIORITY_BLOG.has(b.slug) ? 0.9 : 0.7,
      changeFrequency: "yearly",
    }));

  const categorieRoutes = (Array.isArray(categories) ? categories : [])
    .filter((c) => !REDIRECTED_CATEGORIES.has(c.slug))
    .map((c) => ({
      url: `${baseUrl}/categorie/${c.slug}`,
      lastModified,
      priority: c.slug === "slimme-verlichting" ? 0.85 : 0.6,
      changeFrequency: "monthly",
    }));

  const allProducts = typeof getAllProducts === "function" ? getAllProducts() : [];
  const productRoutes = (Array.isArray(allProducts) ? allProducts : [])
    .filter(
      (p) =>
        p?.slug &&
        !NOINDEX_PRODUCT_CATEGORIES.has(p.category) &&
        !REDIRECTED_PRODUCT_SLUGS.has(p.slug)
    )
    .map((p) => ({
      url: `${baseUrl}/producten/${p.slug}`,
      lastModified,
      priority: 0.5,
      changeFrequency: "monthly",
    }));

  const howtoArray = Array.isArray(howto) ? howto : [];
  const howtoRoutes = howtoArray
    .filter((h) => h?.available && h?.slug && !NOINDEX_HOWTO_SLUGS.has(h.slug))
    .map((h) => ({
      url: `${baseUrl}/how-to/${h.slug}`,
      lastModified,
      priority: HIGH_PRIORITY_HOWTO.has(h.slug) ? 0.9 : 0.7,
      changeFrequency: "yearly",
    }));

  const tipsArray = Array.isArray(tips) ? tips : [];
  const tipRoutes = tipsArray
    .filter((t) => t?.available && t?.slug)
    .map((t) => ({
      url: `${baseUrl}/tips/${t.slug}`,
      lastModified,
      priority: 0.6,
      changeFrequency: "yearly",
    }));

  return [
    ...staticRoutes,
    ...newPages,
    ...aanraderRoutes,
    ...blogRoutes,
    ...categorieRoutes,
    ...howtoRoutes,
    ...tipRoutes,
    ...productRoutes,
  ];
}
