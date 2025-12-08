import { getAllProducts } from "@/data/products";

export default function sitemap() {
  const baseUrl = "https://slimhuiswonen.nl";

  const staticRoutes = [
    "",
    "/producten",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = getAllProducts().map((p) => ({
    url: `${baseUrl}/producten/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
