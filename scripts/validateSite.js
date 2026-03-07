import fs from "fs";
import path from "path";

import products from "../data/products.js";
import { aanraders } from "../data/aanraders.js";
let blogPosts = [];
let tips = [];

try {
  const blogModule = await import("../data/blog.js");
  blogPosts = blogModule.blogPosts || [];
} catch {
  console.log("⚠️ blog.js bevat JSX – validator slaat blog checks over");
}

try {
  const tipsModule = await import("../data/tips.js");
  tips = tipsModule.tips || [];
} catch {
  console.log("⚠️ tips.js bevat JSX – validator slaat tips checks over");
}

const AFFILIATE_TAG = "slimhuiswonen-21";

const ROOT = process.cwd();
const PRODUCT_IMAGE_DIR = path.join(ROOT, "public", "images", "products");
const PUBLIC_DIR = path.join(ROOT, "public");

const allowedProductCategories = new Set([
  "slimme-verlichting",
  "sensoren",
  "slimme-deurbellen",
  "slimme-cameras",
  "slimme-thermostaten",
  "slimme-stekkers",
  "smart-home-hubs",
]);

const errors = [];
const warnings = [];
const infos = [];

function existsPublicFile(publicPath) {
  if (!publicPath || typeof publicPath !== "string") return false;
  const cleaned = publicPath.startsWith("/") ? publicPath.slice(1) : publicPath;
  const fullPath = path.join(PUBLIC_DIR, cleaned);
  return fs.existsSync(fullPath);
}

function isKebabCase(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function pushError(message) {
  errors.push(`❌ ${message}`);
}

function pushWarning(message) {
  warnings.push(`⚠️ ${message}`);
}

function pushInfo(message) {
  infos.push(`ℹ️ ${message}`);
}

/* =========================
   PRODUCT VALIDATION
========================== */

const productSlugMap = new Map();

products.forEach((product, index) => {
  const label = product.slug || `index-${index}`;

  if (!product.slug) {
    pushError(`Product zonder slug op index ${index}`);
  } else {
    if (productSlugMap.has(product.slug)) {
      pushError(`Dubbele product slug: ${product.slug}`);
    } else {
      productSlugMap.set(product.slug, product);
    }

    if (!isKebabCase(product.slug)) {
      pushWarning(`Product slug niet kebab-case: ${product.slug}`);
    }
  }

  if (!product.name) {
    pushError(`Product zonder naam: ${label}`);
  }

  if (!product.brand) {
    pushWarning(`Product zonder merk: ${label}`);
  }

  if (!product.category) {
    pushError(`Product zonder categorie: ${label}`);
  } else if (!allowedProductCategories.has(product.category)) {
    pushError(`Ongeldige categorie bij product ${label}: ${product.category}`);
  }

  if (!product.description) {
    pushWarning(`Product zonder description: ${label}`);
  }

  if (!Array.isArray(product.features) || product.features.length === 0) {
    pushWarning(`Product zonder features: ${label}`);
  }

  if (!product.affiliateUrl) {
    pushWarning(`Geen affiliate link: ${label}`);
  } else {
    if (!product.affiliateUrl.includes(AFFILIATE_TAG)) {
      pushError(`Affiliate tag ontbreekt bij product ${label}`);
    }
    if (!product.affiliateUrl.startsWith("https://")) {
      pushWarning(`Affiliate link lijkt ongeldig bij product ${label}`);
    }
  }

  if (!product.youtubeUrl) {
    pushWarning(`Geen YouTube video: ${label}`);
  } else if (
    !product.youtubeUrl.includes("youtube.com") &&
    !product.youtubeUrl.includes("youtu.be")
  ) {
    pushWarning(`YouTube URL lijkt geen YouTube link: ${label}`);
  }

  if (!product.image) {
    pushWarning(`Product zonder afbeelding: ${label}`);
  } else {
    const imageName = path.basename(product.image);
    const imagePath = path.join(PRODUCT_IMAGE_DIR, imageName);

    if (!fs.existsSync(imagePath)) {
      pushError(`Productafbeelding bestaat niet: ${product.image} (${label})`);
    }

    if (/[A-Z]/.test(imageName)) {
      pushWarning(`Bestandsnaam bevat hoofdletters: ${product.image}`);
    }
  }
});

/* =========================
   KOOPGIDS VALIDATION
========================== */

const guideSlugSet = new Set();

aanraders.forEach((guide, index) => {
  const label = guide.slug || `koopgids-index-${index}`;

  if (!guide.slug) {
    pushError(`Koopgids zonder slug op index ${index}`);
  } else {
    if (guideSlugSet.has(guide.slug)) {
      pushError(`Dubbele koopgids slug: ${guide.slug}`);
    } else {
      guideSlugSet.add(guide.slug);
    }

    if (!isKebabCase(guide.slug)) {
      pushWarning(`Koopgids slug niet kebab-case: ${guide.slug}`);
    }
  }

  if (!guide.title) {
    pushError(`Koopgids zonder titel: ${label}`);
  }

  if (!guide.description) {
    pushWarning(`Koopgids zonder description: ${label}`);
  }

  if (!guide.image) {
    pushWarning(`Koopgids zonder afbeelding: ${label}`);
  } else if (!existsPublicFile(guide.image)) {
    pushError(`Koopgids afbeelding bestaat niet: ${guide.image} (${label})`);
  }

  if (!guide.relatedBlog) {
    pushWarning(`Koopgids zonder relatedBlog: ${label}`);
  } else {
    const relatedExists = blogPosts.some((blog) => blog.slug === guide.relatedBlog);
    if (!relatedExists) {
      pushError(`relatedBlog bestaat niet bij koopgids ${label}: ${guide.relatedBlog}`);
    }
  }

  if (!Array.isArray(guide.picks) || guide.picks.length === 0) {
    pushError(`Koopgids zonder picks: ${label}`);
    return;
  }

  guide.picks.forEach((pick, pickIndex) => {
    const pickLabel = `${label} > pick ${pickIndex + 1}`;

    if (!pick.title) {
      pushError(`Pick zonder titel in ${pickLabel}`);
    }

    if (!pick.href) {
      pushError(`Pick zonder href in ${pickLabel}`);
      return;
    }

    if (pick.href.startsWith("/producten/")) {
      const slug = pick.href.replace("/producten/", "");
      const exists = productSlugMap.has(slug);

      if (!exists) {
        pushError(`Koopgids product bestaat niet: ${slug} (in ${label})`);
      }
    } else if (
      !pick.href.startsWith("/aanraders/") &&
      !pick.href.startsWith("/blog/") &&
      !pick.href.startsWith("/tips/") &&
      !pick.href.startsWith("/categorie/") &&
      !pick.href.startsWith("/how-to/")
    ) {
      pushWarning(`Onverwachte href in koopgids ${pickLabel}: ${pick.href}`);
    }

    if (pick.image && !existsPublicFile(pick.image)) {
      pushError(`Pick afbeelding bestaat niet: ${pick.image} (${pickLabel})`);
    }

    if (!Array.isArray(pick.badges) || pick.badges.length === 0) {
      pushWarning(`Pick zonder badges in ${pickLabel}`);
    }
  });
});

/* =========================
   BLOG VALIDATION
========================== */

const blogSlugSet = new Set();

blogPosts.forEach((blog, index) => {
  const label = blog.slug || `blog-index-${index}`;

  if (!blog.slug) {
    pushError(`Blog zonder slug op index ${index}`);
  } else {
    if (blogSlugSet.has(blog.slug)) {
      pushError(`Dubbele blog slug: ${blog.slug}`);
    } else {
      blogSlugSet.add(blog.slug);
    }

    if (!isKebabCase(blog.slug)) {
      pushWarning(`Blog slug niet kebab-case: ${blog.slug}`);
    }
  }

  if (!blog.title) {
    pushError(`Blog zonder titel: ${label}`);
  }

  if (!blog.description) {
    pushWarning(`Blog zonder description: ${label}`);
  }

  if (!blog.image) {
    pushWarning(`Blog zonder afbeelding: ${label}`);
  } else if (!existsPublicFile(blog.image)) {
    pushError(`Blog afbeelding bestaat niet: ${blog.image} (${label})`);
  }

  if (Array.isArray(blog.related)) {
    blog.related.forEach((relatedSlug) => {
      if (!guideSlugSet.has(relatedSlug) && !blogSlugSet.has(relatedSlug)) {
        pushWarning(`Blog related slug niet gevonden bij ${label}: ${relatedSlug}`);
      }
    });
  }
});

/* =========================
   TIPS VALIDATION
========================== */

const tipSlugSet = new Set();

tips.forEach((tip, index) => {
  const label = tip.slug || `tip-index-${index}`;

  if (!tip.slug) {
    pushError(`Tip zonder slug op index ${index}`);
  } else {
    if (tipSlugSet.has(tip.slug)) {
      pushError(`Dubbele tip slug: ${tip.slug}`);
    } else {
      tipSlugSet.add(tip.slug);
    }

    if (!isKebabCase(tip.slug)) {
      pushWarning(`Tip slug niet kebab-case: ${tip.slug}`);
    }
  }

  if (!tip.title) {
    pushError(`Tip zonder titel: ${label}`);
  }

  if (!tip.description) {
    pushWarning(`Tip zonder description: ${label}`);
  }

  if (tip.image && !existsPublicFile(tip.image)) {
    pushError(`Tip afbeelding bestaat niet: ${tip.image} (${label})`);
  }
});

/* =========================
   CROSS CHECKS
========================== */

const usedProductSlugsInGuides = new Set();

aanraders.forEach((guide) => {
  guide.picks?.forEach((pick) => {
    if (pick.href?.startsWith("/producten/")) {
      usedProductSlugsInGuides.add(pick.href.replace("/producten/", ""));
    }
  });
});

products.forEach((product) => {
  if (!usedProductSlugsInGuides.has(product.slug) && !product.featured) {
    pushInfo(`Product niet gebruikt in koopgidsen: ${product.slug}`);
  }
});

/* =========================
   RESULT
========================== */

console.log("\n🔎 SlimHuisWonen Super Validator\n");

if (errors.length === 0) {
  console.log("✅ Geen kritieke fouten gevonden");
} else {
  errors.forEach((msg) => console.log(msg));
}

if (warnings.length > 0) {
  console.log("\n⚠️ Waarschuwingen");
  warnings.forEach((msg) => console.log(msg));
}

if (infos.length > 0) {
  console.log("\nℹ️ Info");
  infos.forEach((msg) => console.log(msg));
}

console.log(`\n📦 Producten: ${products.length}`);
console.log(`📚 Koopgidsen: ${aanraders.length}`);
console.log(`📝 Blogs: ${blogPosts.length}`);
console.log(`💡 Tips: ${tips.length}`);

if (errors.length > 0) {
  process.exitCode = 1;
}