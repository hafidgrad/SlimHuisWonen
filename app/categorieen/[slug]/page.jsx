import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";

/* ---------- Helpers ---------- */
function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

/* ---------- Metadata ---------- */
export function generateMetadata({ params }) {
  const category = getCategory(params.slug);

  if (!category) {
    return {
      title: "Categorie niet gevonden",
      description: "Deze categorie bestaat niet.",
    };
  }

  const url = `https://slimhuiswonen.nl/categorieen/${category.slug}`;

  return {
    title: `${category.title} | SlimHuisWonen`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${category.title} | SlimHuisWonen`,
      description: category.description,
      url,
      type: "website",
    },
  };
}

/* ---------- Page ---------- */
export default function CategoryPage({ params }) {
  const { slug } = params;
  const category = getCategory(slug);

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

  const productsRaw = getProductsByCategory(slug);
  const products = [...productsRaw].sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
  );

  const topThree = products.slice(0, 3);
  const rest = products.slice(3);

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1>{category.title}</h1>
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
                        Bekijk beste prijs bij Amazon
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

          <p className="muted small">
            *Prijzen kunnen wijzigen. Bekijk actuele prijs bij Amazon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
