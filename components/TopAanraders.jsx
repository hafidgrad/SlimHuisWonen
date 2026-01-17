import Link from "next/link";
import { getAllProducts } from "@/data/products";

export default function TopAanraders() {
  const products = getAllProducts().slice(0, 4);

  return (
    <section className="section">
      <div className="container">
        {/* ✅ Titel vervangen door afbeelding */}
        <img
          src="/images/onze-slimme-aanraders.png"
          alt="Onze slimme aanraders"
          className="categories-title-image"
        />

        <div className="product-grid">
          {products.map((p) => (
            <article key={p.slug} className="product-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="product-actions">
                {p.affiliateUrl && p.affiliateUrl !== "#" && (
                  <>
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Bekijk beste prijs bij Amazon
                    </a>

                    <p className="muted small">
                      *Prijzen kunnen wijzigen. Bekijk actuele prijs bij Amazon.
                    </p>
                  </>
                )}

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
