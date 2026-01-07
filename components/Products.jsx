import Link from "next/link";
import { getAllProducts } from "@/data/products";

export default function Products() {
  const products = getAllProducts();

  return (
    <section id="aanraders" className="section">
      <div className="container">
        <h2>Onze slimme aanraders</h2>
        <p className="section-intro">
          Deze producten zijn zorgvuldig geselecteerd op basis van populariteit, ervaringen en compatibiliteit met slimme woningen.
          Wanneer je via onze links bestelt, ontvangen wij mogelijk een kleine commissie – zonder extra kosten voor jou.
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
                  Beste prijs op Amazon
                </a>
                <p className="muted small">
   *Prijzen kunnen wijzigen. Bekijk actuele prijs bij Amazon.
</p>
                <Link href={`/producten/${p.slug}`} className="product-details-link">
                  Meer info
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
