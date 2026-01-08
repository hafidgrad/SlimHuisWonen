import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/data/products";
import Link from "next/link";

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
              en energie. Klik op een product voor uitgebreide informatie,
              compatibiliteit en actuele prijzen via onze partners.
            </p>

            <div className="product-grid">
              {products.map((p) => (
                <article className="product-card" key={p.slug}>
                  <div className="product-tag">{p.brand}</div>

                  <h3>{p.name}</h3>

                  <p className="product-desc">{p.description}</p>

                  {p.features?.length > 0 && (
                    <ul className="product-bullets">
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}

                  <div className="product-actions">
                    {p.affiliateUrl && (
                      <a
                        href={p.affiliateUrl}
                        className="btn btn-primary product-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bekijk bij Amazon
                      </a>
                    )}

                    <Link
                      href={`/product/${p.slug}`}
                      className="product-details-link"
                    >
                      Meer info
                    </Link>
                  </div>
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
