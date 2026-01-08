import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllProducts } from "@/data/products";

export const metadata = {
  title: "Alle slimme producten voor een slim huis",
  description:
    "Overzicht van slimme producten voor verlichting, beveiliging, verwarming en energie. Geschikt voor Homey en Home Assistant.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/producten",
  },
};

export default function ProductenPage() {
  const products = getAllProducts();

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>Alle slimme producten</h1>

            <p className="section-intro">
              Ontdek slimme producten voor verlichting, beveiliging, verwarming
              en energie.
            </p>

            <div className="product-grid">
              {products.map((p) => (
                <article key={p.slug} className="product-card">
                  <div className="product-tag">{p.brand}</div>
                  <h3>{p.name}</h3>
                  <p className="product-desc">{p.description}</p>

                  <Link
                    href={`/producten/${p.slug}`}
                    className="product-details-link"
                  >
                    Meer info →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
