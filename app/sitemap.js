import { getAllProducts } from "@/data/products";
import { tips } from "@/data/tips";
import { blogPosts } from "@/data/blog";
import { howto } from "@/data/howto";
import { categories } from "@/data/categories";
import { aanraders } from "@/data/aanraders";

export default function sitemap() {
  const baseUrl = "https://www.slimhuiswonen.nl";
  const lastModified = new Date();

  // ✅ Statische routes — hoge prioriteit
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/aanraders", priority: 0.9, changeFrequency: "weekly" },
    { path: "/producten", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/tips", priority: 0.8, changeFrequency: "weekly" },
    { path: "/how-to", priority: 0.8, changeFrequency: "weekly" },
    { path: "/over", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
    { path: "/retourbeleid", priority: 0.3, changeFrequency: "yearly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    priority,
    changeFrequency,
  }));

  // ✅ Topic hub routes — hoge prioriteit (veel interne links)
  const topicRoutes = [
    "/topic/smart-home-basis",
    "/topic/wifi-netwerk",
    "/topic/beveiliging",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  // ✅ Aanrader koopgids routes — hoogste prioriteit (koopintentie)
  const aanradersArray = Array.isArray(aanraders) ? aanraders : [];
  const aanraderRoutes = aanradersArray
    .filter((g) => g?.slug)
    .map((g) => ({
      url: `${baseUrl}/aanraders/${g.slug}`,
      lastModified,
      priority: 0.9,
      changeFrequency: "monthly",
    }));

  // ✅ Blog routes (alleen available: true)
  const blogArray = Array.isArray(blogPosts) ? blogPosts : [];
  const blogRoutes = blogArray
    .filter((b) => b?.available && b?.slug)
    .map((b) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified,
      priority: 0.7,
      changeFrequency: "yearly",
    }));

  // ✅ Categorie routes
  const categorieRoutes = (Array.isArray(categories) ? categories : []).map((c) => ({
    url: `${baseUrl}/categorie/${c.slug}`,
    lastModified,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  // ✅ Product routes
  const allProducts =
    typeof getAllProducts === "function" ? getAllProducts() : [];
  const productsArray = Array.isArray(allProducts) ? allProducts : [];
  const productRoutes = productsArray
    .filter((p) => p?.slug)
    .map((p) => ({
      url: `${baseUrl}/producten/${p.slug}`,
      lastModified,
      priority: 0.6,
      changeFrequency: "monthly",
    }));

  // ✅ How-To routes (alleen available: true)
  const howtoArray = Array.isArray(howto) ? howto : [];
  const howtoRoutes = howtoArray
    .filter((h) => h?.available && h?.slug)
    .map((h) => ({
      url: `${baseUrl}/how-to/${h.slug}`,
      lastModified,
      priority: 0.7,
      changeFrequency: "yearly",
    }));

  // ✅ Tips routes (alleen available: true)
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
    ...topicRoutes,
    ...aanraderRoutes,
    ...blogRoutes,
    ...categorieRoutes,
    ...howtoRoutes,
    ...tipRoutes,
    ...productRoutes,
  ];
}
