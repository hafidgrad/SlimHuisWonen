import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/data/products";

export const metadata = {
  title: "Alle slimme producten voor een slim huis | SlimHuisWonen",
  description:
    "Overzicht van slimme producten voor verlichting, beveiliging, sensoren, camera’s en energie. Geschikt voor Homey, Home Assistant en Matter.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/producten",
  },
};

export default function ProductenPage() {
  const products = getAllProducts();

  /* producten groeperen per categorie */
  const categories = {};

  products.forEach((product) => {
    const category = product.category || "Overig";

    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push(product);
  });

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>Alle slimme producten</h1>

            <p className="section-intro">
              Ontdek slimme producten voor verlichting, sensoren, camera’s,
              slimme stekkers en meer. Geschikt voor Homey, Home Assistant en
              andere smart home systemen.
            </p>

            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="product-category">
                <h2 className="product-category-title">{category}</h2>

                <div className="product-grid">
                  {items.map((p) => (
                    <article key={p.slug} className="product-card">
                      {p.image && (
                        <Link href={`/producten/${p.slug}`}>
                          <Image
                            src={p.image}
                            alt={`${p.name} slim product`}
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