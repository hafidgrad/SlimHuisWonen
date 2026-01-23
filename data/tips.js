import { getAllProducts } from "@/data/products";
import { tips } from "@/data/tips";

export default function sitemap() {
  const baseUrl = "https://slimhuiswonen.nl";
  const lastModified = new Date();

  // ✅ Statische pagina’s
  const staticRoutes = [
    "",
    "/producten",
    "/tips",
    "/blog",
    "/aanraders",
    "/over",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  // ✅ Product pagina’s
  const productRoutes = getAllProducts().map((p) => ({
    url: `${baseUrl}/producten/${p.slug}`,
    lastModified,
  }));

  // ✅ Tip pagina’s (alleen available === true)
  const tipRoutes = (tips || [])
    .filter((t) => t.available)
    .map((t) => ({
      url: `${baseUrl}/tips/${t.slug}`,
      lastModified,
    }));

  // ✅ Blog pagina’s (hardcoded lijst — later kunnen we dynamisch maken)
  const blogRoutes = [
    "/blog/wat-is-zigbee",
    "/blog/aqara-vs-tapo",
    "/blog/beste-slimme-stekkers",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  return [...staticRoutes, ...productRoutes, ...tipRoutes, ...blogRoutes];
}
