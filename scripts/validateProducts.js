import fs from "fs";
import path from "path";
import products from "../data/products.js";

const imageFolder = "./public/images/products";

const errors = [];
const slugs = new Set();

products.forEach((product, index) => {
  const id = `${product.slug || "unknown"} (index ${index})`;

  /* slug check */
  if (!product.slug) {
    errors.push(`❌ Product zonder slug: ${id}`);
  }

  if (slugs.has(product.slug)) {
    errors.push(`❌ Dubbele slug: ${product.slug}`);
  } else {
    slugs.add(product.slug);
  }

  /* name check */
  if (!product.name) {
    errors.push(`❌ Product zonder naam: ${id}`);
  }

  /* affiliate */
  if (!product.affiliateUrl) {
    errors.push(`⚠️ Geen affiliate link: ${product.slug}`);
  }

  /* youtube */
  if (!product.youtubeUrl) {
    errors.push(`⚠️ Geen YouTube video: ${product.slug}`);
  }

  /* category */
  if (!product.category) {
    errors.push(`❌ Geen categorie: ${product.slug}`);
  }

  /* image */
  if (product.image) {
    const imagePath = path.join(imageFolder, path.basename(product.image));

    if (!fs.existsSync(imagePath)) {
      errors.push(`❌ Afbeelding bestaat niet: ${product.image}`);
    }
  }
});

console.log("\n🔎 Products validator resultaat\n");

if (errors.length === 0) {
  console.log("✅ Alles ziet er goed uit!");
} else {
  errors.forEach((err) => console.log(err));
}

console.log(`\n📦 Gecontroleerde producten: ${products.length}`);