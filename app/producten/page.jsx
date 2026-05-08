import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/data/products";

export const metadata = {
  title: "Alle slimme producten voor een slim huis (2026)",
  description:
    "Ontdek alle slimme producten voor een slim huis. Van slimme verlichting en sensoren tot camera's, hubs en energiemonitors. Geschikt voor Homey en Home Assistant.",
  alternates: {
    canonical: "https://www.slimhuiswonen.nl/producten",
  },
};

const CATEGORY_NAMES = {
  "slimme-verlichting": "Slimme verlichting",
  sensoren: "Sensoren",
  "slimme-deurbellen": "Slimme deurbellen",
  "slimme-thermostaten": "Slimme thermostaten",
  "slimme-stekkers": "Slimme stekkers",
  "slimme-cameras": "Slimme camera's",
  "smart-home-hubs": "Smart home hubs",
  "mesh-wifi": "Mesh wifi",
  "slimme-sloten": "Slimme sloten",
  "energie-monitors": "Energie monitors",
};

function getCategoryName(slug) {
  return (
    CATEGORY_NAMES[slug] ??
    slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export default function ProductenPage() {
  const products = getAllProducts();

  const categories = {};
  products.forEach((product) => {
    const category = product.category || "Overig";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(product);
  });

  const categoryEntries = Object.entries(categories);

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>Alle slimme producten voor een slim huis (2026)</h1>

            <p className="section-intro">
              Ontdek ons complete aanbod slimme producten voor verlichting,
              beveiliging, energie en automatisering. Geschikt voor Homey,
              Home Assistant, Google Home en Apple HomeKit.
            </p>

            {/* Categoriefilter pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                margin: "1.5rem 0",
              }}
            >
              {categoryEntries.map(([slug]) => (
                <a
                  key={slug}
                  href={`#${slug}`}
                  style={{
                    display: "inline-block",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "background 0.15s",
                  }}
                >
                  {getCategoryName(slug)}
                </a>
              ))}
            </div>

            {categoryEntries.map(([category, items]) => (
              <div key={category} className="product-category" id={category}>
                <h2 className="product-category-title">
                  {getCategoryName(category)}
                </h2>

                <div className="product-grid">
                  {items.map((p) => (
                    <article key={p.slug} className="product-card">
                      {p.image && (
                        <Link href={`/producten/${p.slug}`}>
                          <Image
                            src={p.image}
                            alt={p.name}
                            width={300}
                            height={300}
                            className="product-image"
                          />
                        </Link>
                      )}

                      <div className="product-card-content">
                        <div className="product-tag">{p.brand}</div>

                        <h3>{p.name}</h3>

                        <p className="product-desc">{p.description}</p>

                        <Link
                          href={`/producten/${p.slug}`}
                          className="product-details-link"
                        >
                          Bekijk product →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
