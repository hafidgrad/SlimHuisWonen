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

  // ✅ Product pagina’s (veilig)
  const allProducts = getAllProducts?.();
  const productsArray = Array.isArray(allProducts) ? allProducts : [];

  const productRoutes = productsArray
    .filter((p) => p?.slug)
    .map((p) => ({
      url: `${baseUrl}/producten/${p.slug}`,
      lastModified,
    }));

  // ✅ Tip pagina’s (alleen available === true) (veilig)
  const tipsArray = Array.isArray(tips) ? tips : [];

  const tipRoutes = tipsArray
    .filter((t) => t?.available && t?.slug)
    .map((t) => ({
      url: `${baseUrl}/tips/${t.slug}`,
      lastModified,
    }));

  // ✅ Blog pagina’s (hardcoded lijst — later kunnen we dit dynamisch maken)
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
