import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";
import AmazonSearchCta from "@/components/AmazonSearchCta";

export const dynamic = "force-dynamic";

/* ---------- Helpers ---------- */
const CATEGORY_ALIASES = {
  verlichting: "slimme-verlichting",
  beveiliging: "sensoren",
  cameras: "slimme-deurbellen",
  energie: "slimme-thermostaten",
};

function normalizeCategorySlug(slug) {
  return CATEGORY_ALIASES[slug] ?? slug;
}

function getCategory(slug) {
  const normalized = normalizeCategorySlug(slug);
  return categories.find((c) => c.slug === normalized);
}

/* ---------- Amazon zoekterm mapping ---------- */
const AMAZON_SEARCH_TERMS = {
  "slimme-verlichting": "slimme verlichting",
  "slimme-stekkers": "slimme stekker wifi",
  "slimme-deurbellen": "slimme deurbel met camera",
  "sensoren": "bewegingssensor wifi",
  "slimme-thermostaten": "slimme thermostaat wifi",
  "slimme-camera": "slimme beveiligingscamera wifi",
  "smart-home-hub": "smart home hub",
};

function getAmazonSearchTerm(slug) {
  return AMAZON_SEARCH_TERMS[slug] ?? slug.replace("-", " ");
}

/* ---------- Metadata ---------- */
export function generateMetadata({ params }) {
  const category = getCategory(params.slug);

  if (!category) {
    return {
      title: "Categorie niet gevonden | SlimHuisWonen",
      description: "Deze categorie bestaat niet.",
    };
  }

  const url = `https://slimhuiswonen.nl/categorie/${category.slug}`;

  return {
    title: `${category.name} | SlimHuisWonen`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${category.name} | SlimHuisWonen`,
      description: category.description,
      url,
      type: "website",
    },
  };
}

/* ---------- Page ---------- */
export default function CategoryPage({ params }) {
  const { slug } = params;

  const normalizedSlug = normalizeCategorySlug(slug);
  const category = getCategory(normalizedSlug);

  if (!category) {
    return (
      <>
        <Header />
        <main className="section">
          <div className="container">
            <h1>Categorie niet gevonden</h1>
            <p>Deze categorie bestaat niet.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const products = getProductsByCategory(normalizedSlug).sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
  );

  const topThree = products.slice(0, 3);
  const rest = products.slice(3);

  const amazonSearchTerm = getAmazonSearchTerm(normalizedSlug);

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          {/* Banner */}
          {category.image && (
            <div className="banner-center">
              <div
                className="categorie-banner category-hero-banner"
                style={{ "--category-bg": `url(${category.image})` }}
              >
                <div className="category-darken" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="banner-img"
                />
              </div>
            </div>
          )}

          <h1>{category.name}</h1>
          <p className="section-intro">{category.description}</p>

          {products.length === 0 && (
            <p>Er zijn nog geen producten in deze categorie.</p>
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
                          target="_blank"
                          rel="nofollow sponsored noopener"
                          className="btn btn-amazon product-btn"
                        >
                          Bekijk beste prijs
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
            </section>
          )}

          {rest.length > 0 && (
            <>
              <h2>Meer producten</h2>

              <div className="product-grid">
                {rest.map((p) => (
                  <article key={p.slug} className="product-card">
                    <div className="product-tag">{p.brand}</div>
                    <h3>{p.name}</h3>
                    <p className="product-desc">{p.description}</p>

                    <Link
                      href={`/producten/${p.slug}`}
                      className="product-details-link"
                    >
                      Meer info →
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* ✅ Subtiele Amazon zoek CTA */}
          {products.length > 0 && (
            <AmazonSearchCta searchTerm={amazonSearchTerm} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}