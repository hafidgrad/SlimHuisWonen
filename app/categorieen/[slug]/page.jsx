import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getProductsByCategory } from "@/data/products";

const categoryLabels = {
  "slimme-verlichting": "Slimme verlichting",
  sensoren: "Sensoren",
  "slimme-deurbellen": "Slimme deurbellen",
  "slimme-thermostaten": "Slimme thermostaten",
  "slimme-stekkers": "Slimme stekkers",
};

const categoryIntros = {
  "slimme-verlichting":
    "Slimme verlichting maakt je huis sfeervoller én slimmer. Hieronder vind je onze aanraders.",
  sensoren:
    "Sensoren zorgen voor automatiseringen en veiligheid. Denk aan deur/raam, beweging en temperatuur.",
  "slimme-deurbellen":
    "Met een slimme deurbel zie je altijd wie er aanbelt. Handig voor veiligheid en pakketjes.",
  "slimme-thermostaten":
    "Slimme thermostaten helpen je energie besparen zonder in te leveren op comfort.",
  "slimme-stekkers":
    "Maak apparaten slim met slimme stekkers. Ideaal voor schema’s en inzicht in verbruik.",
};

export function generateMetadata({ params }) {
  const label = categoryLabels[params.slug] ?? params.slug;
  const url = `https://slimhuiswonen.nl/categorieen/${params.slug}`;

  return {
    title: `${label} | SlimHuisWonen`,
    description: `Bekijk aanbevolen ${label.toLowerCase()} inclusief tips en productlinks.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${label} | SlimHuisWonen`,
      description: `Bekijk aanbevolen ${label.toLowerCase()} inclusief tips en productlinks.`,
      url,
      type: "website",
    },
  };
}

export default function CategoryPage({ params }) {
  const { slug } = params;
  const products = getProductsByCategory(slug);

  const label = categoryLabels[slug] ?? slug.replace("-", " ");
  const intro =
    categoryIntros[slug] ??
    "Bekijk onze selectie van slimme producten binnen deze categorie.";

  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>{label}</h1>
          <p className="section-intro">{intro}</p>

          {products.length === 0 ? (
            <p>Geen producten gevonden in deze categorie.</p>
          ) : (
            <div className="product-grid">
              {products.map((p) => (
                <article key={p.slug} className="product-card">
                  <div className="product-tag">{p.brand}</div>
                  <h3>{p.title}</h3>
                  <p className="product-desc">{p.description}</p>

                  <ul className="product-bullets">
                    {p.features?.slice(0, 3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <div className="product-actions">
                    {p.affiliateUrl && p.affiliateUrl !== "#" && (
                      <a
                        href={p.affiliateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary product-btn"
                      >
                        Bekijk prijs bij Amazon
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
          )}

          <p className="muted small">
            *Prijzen kunnen wijzigen. Bekijk actuele prijs bij Amazon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
