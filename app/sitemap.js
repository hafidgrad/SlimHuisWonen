import { getAllProducts } from "@/data/products";
import { tips } from "@/data/tips";
import { blogPosts } from "@/data/blog";
import { howto } from "@/data/howto";
import { categories } from "@/data/categories";
import { aanraders } from "@/data/aanraders";

// Slugs die nu redirecten — weghouden uit sitemap
const REDIRECTED_AANRADERS = new Set([
  "beste-robotstofzuigers-2026",
  "beste-slimme-deurbel",
  "beste-slimme-camera",
  "beste-slimme-slot",
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
    .filter((b) => b?.available && b?.slug)
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
    .filter((p) => p?.slug)
    .map((p) => ({
      url: `${baseUrl}/producten/${p.slug}`,
      lastModified,
      priority: 0.5,
      changeFrequency: "monthly",
    }));

  const howtoArray = Array.isArray(howto) ? howto : [];
  const howtoRoutes = howtoArray
    .filter((h) => h?.available && h?.slug)
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
