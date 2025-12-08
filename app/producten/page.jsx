import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/data/products";
import Link from "next/link";

export const metadata = {
  title: "Alle slimme producten",
  description:
    "Overzicht van slimme producten die we aanraden, zoals slimme verlichting, sensoren, deurbellen, camera’s en thermostaten.",
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
              Een selectie van slimme producten die goed passen in een slim huis. Klik door naar de productpagina
              voor meer informatie en je affiliate link.
            </p>
            <div className="product-grid">
              {products.map((p) => (
                <article className="product-card" key={p.slug}>
                  <div className="product-tag">{p.brand}</div>
                  <h3>{p.title}</h3>
                  <p className="product-desc">{p.description}</p>
                  <ul className="product-bullets">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="product-actions">
                    <a href={p.affiliateUrl} className="btn btn-primary product-btn" target="_blank" rel="noreferrer">
                      Bekijk bij Amazon
                    </a>
                    <Link href={`/producten/${p.slug}`} className="product-details-link">
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
