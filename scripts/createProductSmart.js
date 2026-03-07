import readline from "readline";

const AFFILIATE_TAG = "slimhuiswonen-21";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function guessCategory(name) {
  const n = name.toLowerCase();

  if (n.includes("camera")) return "slimme-cameras";
  if (n.includes("deurbel")) return "slimme-deurbellen";
  if (n.includes("sensor")) return "sensoren";
  if (n.includes("lamp") || n.includes("light") || n.includes("strip"))
    return "slimme-verlichting";
  if (n.includes("stekker") || n.includes("plug"))
    return "slimme-stekkers";
  if (n.includes("thermostaat") || n.includes("radiator"))
    return "slimme-thermostaten";
  if (n.includes("hub") || n.includes("homey") || n.includes("bridge"))
    return "smart-home-hubs";

  return "sensoren";
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

function generateDescription(name) {
  return `${name} is een slim apparaat voor je smart home dat eenvoudig te integreren is met populaire systemen zoals Home Assistant, Homey, Apple Home of Google Home.`;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function run() {
  console.log("\n🚀 SlimHuisWonen Smart Product Generator\n");

  const name = await ask("Product naam: ");
  const brand = await ask("Merk: ");
  const amazon = await ask("Amazon link: ");
  const youtube = await ask("YouTube link: ");

  const slug = slugify(name);
  const category = guessCategory(name);
  const image = `${slug}.png`;

  const affiliateUrl = ensureAffiliate(amazon);

  const description = generateDescription(name);

  console.log("\n📦 Voeg dit toe aan products.js:\n");

  console.log(`
{
  slug: "${slug}",
  name: "${name}",
  brand: "${brand}",
  category: "${category}",
  image: "/images/products/${image}",
  description:
    "${description}",
  features: [
    "Smart home integratie",
    "Automatiseringen",
    "App bediening"
  ],
  affiliateUrl:
    "${affiliateUrl}",
  youtubeUrl: "${youtube}",
},
`);

  console.log("\n🖼 Afbeelding naam:");
  console.log(`/public/images/products/${image}`);

  console.log("\n✅ Klaar. Kopieer dit blok naar products.js\n");

  rl.close();
}

run();