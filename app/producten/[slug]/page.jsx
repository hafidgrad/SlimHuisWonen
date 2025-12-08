import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
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
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url,
      type: "product",
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
    image: product.image ? `https://slimhuiswonen.nl${product.image}` : undefined,
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
      url: product.affiliateUrl === "#" ? undefined : product.affiliateUrl,
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
            <a
              href={product.affiliateUrl}
              className="btn btn-primary product-btn"
              target="_blank"
              rel="noreferrer"
            >
              Naar Amazon
            </a>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
