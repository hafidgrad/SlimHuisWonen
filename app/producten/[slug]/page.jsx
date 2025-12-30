import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";
import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
} from "@/data/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product niet gevonden",
      description: "Dit product staat niet (meer) in ons overzicht.",
    };
  }

  const url = `https://slimhuiswonen.nl/producten/${product.slug}`;

  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: product.title,
      description: product.description,
      url,
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <>
        <Header />
        <main className="section">
          <div className="container">
            <h1>Product niet gevonden</h1>
            <p>Dit product staat niet (meer) in ons overzicht.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const url = `https://slimhuiswonen.nl/producten/${product.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    description: product.description,
    url,
    image: product.image
      ? `https://slimhuiswonen.nl${product.image}`
      : undefined,
    aggregateRating: product.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: 10,
        }
      : undefined,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      url: product.affiliateUrl,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container product-detail">
            <h1>{product.title}</h1>
            <p className="product-desc">{product.description}</p>

            <ul className="product-bullets">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <p className="muted">{product.priceHint}</p>

            {/* ✅ Sticky affiliate CTA (Client Component) */}
            <div className="sticky-cta">
              <AffiliateButton product={product} />
            </div>

            <p className="muted small">
              *Prijzen kunnen wijzigen. Bekijk actuele prijs bij Amazon.
            </p>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section related-products">
            <div className="container">
              <h2>Vergelijkbare producten</h2>

              <div className="product-grid">
                {related.map((p) => (
                  <article key={p.slug} className="product-card">
                    <div className="product-tag">{p.brand}</div>
                    <h3>{p.title}</h3>

                    <Link
                      href={`/producten/${p.slug}`}
                      className="product-details-link"
                    >
                      Bekijk product →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>

      <Footer />
    </>
  );
}
