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

/* ---------- Video helpers ---------- */
function toYouTubeEmbedUrl(url) {
  if (!url || typeof url !== "string") return null;

  // Shorts
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?]+)/);
  if (shortsMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }

  // Watch
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch?.[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  // youtu.be
  const shortUrlMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortUrlMatch?.[1]) {
    return `https://www.youtube.com/embed/${shortUrlMatch[1]}`;
  }

  // already embed
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  return null;
}

/* ---------- Helpers ---------- */
const getAmazonUrl = (p) =>
  p?.affiliateUrl ||
  p?.amazonUrl ||
  p?.amazonLink ||
  p?.url ||
  null;

const getVideoUrl = (p) =>
  p?.youtubeUrl ||
  p?.videoUrl ||
  null;

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
    priceHint,
    compatibility = {},
  } = product;

  const amazonUrl = getAmazonUrl(product);
  const rawVideoUrl = getVideoUrl(product);
  const youtubeEmbedUrl = toYouTubeEmbedUrl(rawVideoUrl);

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>{name}</h1>

            <p className="product-brand">{brand}</p>
            <p className="product-desc">{description}</p>

            {/* ✅ Video */}
            {rawVideoUrl && (
              <section style={{ marginTop: "2rem" }}>
                <h2>Video: zo werkt dit product</h2>

                {youtubeEmbedUrl ? (
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      overflow: "hidden",
                      borderRadius: "12px",
                      marginTop: "1rem",
                    }}
                  >
                    <iframe
                      src={youtubeEmbedUrl}
                      title={`Video van ${name}`}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div style={{ marginTop: "1rem" }}>
                    <a
                      href={rawVideoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      Bekijk video →
                    </a>
                  </div>
                )}
              </section>
            )}

            {/* ✅ Features */}
            {features.length > 0 && (
              <>
                <h2 style={{ marginTop: "2rem" }}>Belangrijkste kenmerken</h2>
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

            {/* ✅ Amazon knop */}
            {amazonUrl && (
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href={amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn btn-primary"
                >
                  Bekijk bij Amazon
                </a>

                <p style={{ marginTop: "0.75rem", fontSize: "0.95rem" }}>
                  * Dit is een affiliate link. Jij betaalt niets extra.
                </p>
              </div>
            )}

            {compatibility && Object.keys(compatibility).length > 0 && (
              <>
                <h2 style={{ marginTop: "2rem" }}>Compatibiliteit</h2>
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
