import products from "@/data/products";
import Link from "next/link";

export default function TopAanraders() {
  // Pak bijvoorbeeld 3 aanraders (pas aan naar jouw logica)
  const topProducts = products.slice(0, 3);

  return (
    <section className="section section-alt">
      <div className="container">
        {/* ✅ Banner exact gecentreerd, zonder balk */}
        <div className="banner-center">
          <div className="aanraders-banner">
            <img
              src="/images/aanraders-banner.png"
              alt="Onze slimme aanraders"
            />
          </div>
        </div>

        <h2>Onze slimme aanraders</h2>
        <p className="section-intro">
          Onze favoriete smart home producten: betrouwbaar, populair en makkelijk te installeren.
        </p>

        <div className="product-grid">
          {topProducts.map((product) => (
            <div key={product.slug} className={`product-card ${product.highlight ? "highlight" : ""}`}>
              {product.highlight && <span className="best-choice">Beste keuze</span>}

              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>

              {product.bullets?.length > 0 && (
                <ul className="product-bullets">
                  {product.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              <div className="product-actions">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-amazon product-btn"
                >
                  Bekijk beste prijs bij Amazon
                </a>

                <Link href={`/producten/${product.slug}`} className="product-details-link">
                  Meer info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
