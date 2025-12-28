import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getProductsByCategory } from "@/data/products";

export default function CategoryPage({ params }) {
  const { slug } = params;
  const products = getProductsByCategory(slug);

  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>{slug.replace("-", " ")}</h1>

          {products.length === 0 && (
            <p>Geen producten gevonden in deze categorie.</p>
          )}

          <div className="product-grid">
            {products.map((p) => (
              <article key={p.slug} className="product-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className="product-actions">
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Bekijk bij Amazon
                  </a>

                  <Link href={`/producten/${p.slug}`}>
                    Meer info
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="muted small">
            *Prijzen kunnen wijzigen. Bekijk actuele prijs bij Amazon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
