import fs from "fs";
import path from "path";

import products from "../data/products.js";
import { aanraders } from "../data/aanraders.js";

const productImages = "./public/images/products";

const errors = [];
const warnings = [];

/* =========================
   PRODUCT VALIDATION
========================== */

const slugs = new Set();

products.forEach((p) => {

  /* slug */
  if (!p.slug) {
    errors.push(`❌ Product zonder slug: ${p.name}`);
  }

  if (slugs.has(p.slug)) {
    errors.push(`❌ Dubbele product slug: ${p.slug}`);
  } else {
    slugs.add(p.slug);
  }

  /* affiliate */
  if (!p.affiliateUrl) {
    warnings.push(`⚠️ Geen affiliate link: ${p.slug}`);
  }

  if (p.affiliateUrl && !p.affiliateUrl.includes("slimhuiswonen-21")) {
    warnings.push(`⚠️ Affiliate tag ontbreekt: ${p.slug}`);
  }

  /* youtube */
  if (!p.youtubeUrl) {
    warnings.push(`⚠️ Geen YouTube video: ${p.slug}`);
  }

  /* image */
  if (p.image) {

    const file = path.join(productImages, path.basename(p.image));

    if (!fs.existsSync(file)) {
      errors.push(`❌ Afbeelding bestaat niet: ${p.image}`);
    }

  }

});

/* =========================
   KOOPGIDS VALIDATION
========================== */

aanraders.forEach((guide) => {

  guide.picks.forEach((pick) => {

    if (!pick.href) return;

    const slug = pick.href.replace("/producten/", "");

    const exists = products.find(p => p.slug === slug);

    if (!exists) {

      errors.push(
        `❌ Koopgids product bestaat niet: ${slug} (in ${guide.slug})`
      );

    }

  });

});

/* =========================
   RESULT
========================== */

console.log("\n🔎 SlimHuisWonen Validator\n");

if (errors.length === 0) {
  console.log("✅ Geen kritieke fouten gevonden\n");
} else {
  errors.forEach(e => console.log(e));
}

if (warnings.length > 0) {

  console.log("\n⚠️ Waarschuwingen\n");

  warnings.forEach(w => console.log(w));

}

console.log(`\n📦 Producten: ${products.length}`);
console.log(`📚 Koopgidsen: ${aanraders.length}`);