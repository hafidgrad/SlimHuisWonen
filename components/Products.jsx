import Link from "next/link";
import { getAllProducts } from "@/data/products";

export default function Products({ limit, showHeader = true }) {
  const allProducts = getAllProducts();

  // 1️⃣ Handmatig gekozen toppers
  const featured = allProducts.filter((p) => p.featured === true);

  // 2️⃣ Automatisch aanvullen (hoogste rating, geen duplicaten)
  const autoFill = allProducts
    .filter((p) => !p.featured && typeof p.rating === "number" && p.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating);

  // 3️⃣ Samenvoegen
  const combined = [...featured, ...autoFill];

  // 4️⃣ Alleen limiteren als er een limit is
  const products =
    typeof limit === "number" ? combined.slice(0, limit) : combined;

  return (
    <section id="aanraders" className="section">
      <div className="container">
        {/* ✅ Header optioneel (dus weg op homepage) */}
        {showHeader && (
          <>
            <h2>Onze slimme aanraders</h2>

            <p className="section-intro">
              Deze slimme producten zijn populair vanwege hun betrouwbaarheid,
              gebruiksgemak en compatibiliteit met bekende smart-home-platformen.
            </p>
          </>
        )}

        <div className="product-grid">
          {products.map((p) => (
            <article className="product-card" key={p.slug}>
              {p.featured && <div className="best-choice">Populaire keuze</div>}

              <div className="product-tag">{p.brand}</div>

              <h3>{p.name}</h3>

              <p className="product-desc">{p.description}</p>

              {p.features?.length > 0 && (
                <ul className="product-bullets">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}

              <div className="product-actions">
                {p.affiliateUrl && (
                  <a
                    href={p.affiliateUrl}
                    className="btn btn-amazon product-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Beste prijs op Amazon
                  </a>
                )}

                <Link
                  href={`/producten/${p.slug}`}
                  className="product-details-link"
                >
                  Meer info
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/producten" className="btn btn-secondary">
            Bekijk alle producten →
          </Link>
        </div>
      </div>
    </section>
  );
}
