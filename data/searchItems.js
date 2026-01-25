import { blogPosts } from "@/data/blog";
import { getAllProducts } from "@/data/products";
import { tips } from "@/data/tips";

// 1 uniforme lijst voor zoeken door Blog + Tips + Producten
export function getSearchItems() {
  const blogItems = Array.isArray(blogPosts)
    ? blogPosts
        .filter((p) => p?.slug && p?.title)
        .map((p) => ({
          type: "blog",
          title: p.title,
          description: p.description || "",
          url: `/blog/${p.slug}`,
        }))
    : [];

  const tipsItems = Array.isArray(tips)
    ? tips
        .filter((t) => t?.slug && t?.title)
        .map((t) => ({
          type: "tips",
          title: t.title,
          description: t.description || "",
          url: `/tips/${t.slug}`,
        }))
    : [];

  const allProducts = getAllProducts?.();
  const productsArray = Array.isArray(allProducts) ? allProducts : [];

  const productItems = productsArray
    .filter((p) => p?.slug && (p?.name || p?.title))
    .map((p) => ({
      type: "producten",
      title: p.name || p.title,
      description: p.description || "",
      url: `/producten/${p.slug}`,
    }));

  return [...blogItems, ...tipsItems, ...productItems];
}
