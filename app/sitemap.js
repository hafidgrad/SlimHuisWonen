import { getAllProducts } from "@/data/products";
import { tips } from "@/data/tips";
import { blogPosts } from "@/data/blog";
import { howto } from "@/data/howto";

export default function sitemap() {
  const baseUrl = "https://slimhuiswonen.nl";
  const lastModified = new Date();

  // ✅ Statische routes
  const staticRoutes = [
    "",
    "/producten",
    "/tips",
    "/blog",
    "/aanraders",
    "/how-to",
    "/over",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  // ✅ Topic hub routes
  const topicRoutes = [
    "/topic/smart-home-basis",
    "/topic/wifi-netwerk",
    "/topic/beveiliging",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  // ✅ Product routes (veilig)
  const allProducts =
    typeof getAllProducts === "function" ? getAllProducts() : [];
  const productsArray = Array.isArray(allProducts) ? allProducts : [];

  const productRoutes = productsArray
    .filter((p) => p?.slug)
    .map((p) => ({
      url: `${baseUrl}/producten/${p.slug}`,
      lastModified,
    }));

  // ✅ How-To routes (alleen available: true)
  const howtoArray = Array.isArray(howto) ? howto : [];

  const howtoRoutes = howtoArray
    .filter((h) => h?.available && h?.slug)
    .map((h) => ({
      url: `${baseUrl}/how-to/${h.slug}`,
      lastModified,
    }));

  // ✅ Tips routes (alleen available: true)
  const tipsArray = Array.isArray(tips) ? tips : [];

  const tipRoutes = tipsArray
    .filter((t) => t?.available && t?.slug)
    .map((t) => ({
      url: `${baseUrl}/tips/${t.slug}`,
      lastModified,
    }));

  // ✅ Blog routes (alleen available: true)
  const blogArray = Array.isArray(blogPosts) ? blogPosts : [];

  const blogRoutes = blogArray
    .filter((b) => b?.available && b?.slug)
    .map((b) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified,
    }));

  return [
    ...staticRoutes,
    ...topicRoutes,
    ...productRoutes,
    ...howtoRoutes,
    ...tipRoutes,
    ...blogRoutes,
  ];
}