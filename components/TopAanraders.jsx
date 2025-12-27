import Link from "next/link";
import { getAllProducts } from "@/data/products";

export default function TopAanraders() {
  const products = getAllProducts().slice(0, 4); // beste 4

  return (
    <section className="section">
      <div className="container">
        <h2>Onze Top Aanraders</h2>
        <div className="product-grid">
          {products.map((p) => (
            <article key={p.slug} className="product-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="product-actions">
                {p.affiliateUrl && p.affiliateUrl !== "#" && (
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Beste prijs op Amazon
                  </a>

                  <p className="muted small">
  *Prijzen kunnen wijzigen.
</p>
                )}
                <Link href={`/producten/${p.slug}`}>Meer info</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
