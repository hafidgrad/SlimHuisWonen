import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({
    slug: p.slug,
  }));
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const {
    name,
    brand,
    description,
    features = [],
    affiliateUrl,
    priceHint,
    compatibility = {},
  } = product;

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>{name}</h1>

            <p className="product-brand">{brand}</p>
            <p className="product-desc">{description}</p>

            {features.length > 0 && (
              <>
                <h2>Belangrijkste kenmerken</h2>
                <ul className="product-bullets">
                  {features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}

            {priceHint && (
              <p className="price-hint">
                <strong>Prijsindicatie:</strong> {priceHint}
              </p>
            )}

            {affiliateUrl && (
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Bekijk bij Amazon
              </a>
            )}

            {compatibility && Object.keys(compatibility).length > 0 && (
              <>
                <h2>Compatibiliteit</h2>
                <ul>
                  {Object.entries(compatibility).map(([platform, value]) => (
                    <li key={platform}>
                      {platform}: {value}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
