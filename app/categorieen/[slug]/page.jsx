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

const relatedCategories = {
  "slimme-verlichting": ["sensoren", "slimme-stekkers"],
  sensoren: ["slimme-verlichting", "slimme-deurbellen"],
  "slimme-deurbellen": ["sensoren"],
  "slimme-thermostaten": ["slimme-stekkers", "sensoren"],
  "slimme-stekkers": ["slimme-verlichting", "slimme-thermostaten"],
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

  const productsRaw = getProductsByCategory(slug);
  const products = [...productsRaw].sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
  );

  const topThree = products.slice(0, 3);
  const rest = products.slice(3);

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

          {products.length === 0 && (
            <p>Geen producten gevonden in deze categorie.</p>
          )}

          {topThree.length > 0 && (
            <section className="top-products">
              <h2>Beste keuzes</h2>
              <div className="product-grid">
                {topThree.map((p, index) => (
                  <article key={p.slug} className="product-card highlight">
                    {index === 0 && (
                      <div className="best-choice">Beste keuze</div>
                    )}

                    <div className="product-tag">{p.brand}</div>
                    <h3>{p.title}</h3>
                    <p className="product-desc">{p.description}</p>

                    <ul className="product-bullets">
                      {p.features?.slice(0, 3).map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>

                    <div className="product-actions">
                      <a
                        href={p.affiliateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary product-btn"
                      >
                        Bekijk prijs bij Amazon
                      </a>
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
            </section>
          )}

          {rest.length > 0 && (
            <>
              <h2>Meer producten</h2>
              <div className="product-grid">
                {rest.map((p) => (
                  <article key={p.slug} className="product-card">
                    <div className="product-tag">{p.brand}</div>
                    <h3>{p.title}</h3>
                    <p className="product-desc">{p.description}</p>
                  </article>
                ))}
              </div>
            </>
          )}

          {relatedCategories[slug]?.length > 0 && (
            <section className="related-categories">
              <h2>Gerelateerde categorieën</h2>
              <ul className="category-links">
                {relatedCategories[slug].map((cat) => (
                  <li key={cat}>
                    <Link href={`/categorieen/${cat}`}>
                      {categoryLabels[cat] ?? cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
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
