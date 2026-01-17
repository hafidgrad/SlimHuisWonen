import Link from "next/link";
import { getAllProducts } from "@/data/products";

export default function TopAanraders() {
  const products = getAllProducts().slice(0, 4);

  return (
    <section className="section" id="aanraders">
      <div className="container">
        {/* ✅ Banner (gecentreerd) */}
        <div className="banner-center">
          <div className="aanraders-banner">
            <img
              src="/images/banner_onze_slimme_aanraders.png"
              alt="Onze slimme aanraders"
            />
          </div>
        </div>

        {/* ✅ Titel + korte tekst los (niet in de afbeelding) */}
        <h2 className="section-title">Onze slimme aanraders</h2>
        <p className="section-intro">
          Onze favoriete smart home producten: betrouwbaar, populair en makkelijk te installeren.
        </p>

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
      </div>
    </section>
  );
}
