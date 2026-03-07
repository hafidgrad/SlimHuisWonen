import readline from "readline";

const AFFILIATE_TAG = "slimhuiswonen-21";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function ensureAffiliate(url) {
  if (!url.includes("tag=")) {
    if (url.includes("?")) {
      return `${url}&tag=${AFFILIATE_TAG}`;
    }
    return `${url}?tag=${AFFILIATE_TAG}`;
  }
  return url;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function run() {
  console.log("\n🛠 SlimHuisWonen Product Generator\n");

  const name = await ask("Product naam: ");
  const brand = await ask("Merk: ");
  const category = await ask("Categorie slug: ");
  const amazon = await ask("Amazon link: ");
  const youtube = await ask("YouTube link: ");
  const image = await ask("Afbeelding naam (bijv. tapo-c225.png): ");

  const slug = slugify(name);

  const affiliateUrl = ensureAffiliate(amazon);

  console.log("\n📦 Voeg dit toe aan products.js:\n");

  console.log(`
{
  slug: "${slug}",
  name: "${name}",
  brand: "${brand}",
  category: "${category}",
  image: "/images/products/${image}",
  description:
    "",
  features: [],
  affiliateUrl:
    "${affiliateUrl}",
  youtubeUrl: "${youtube}",
},
`);

  console.log("\n✅ Klaar. Kopieer dit blok naar products.js\n");

  rl.close();
}

run();