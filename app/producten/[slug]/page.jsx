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

  try {
    // Shorts: https://www.youtube.com/shorts/VIDEOID
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^?]+)/);
    if (shortsMatch?.[1]) {
      return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    }

    // Watch: https://www.youtube.com/watch?v=VIDEOID
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch?.[1]) {
      return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }

    // Short url: https://youtu.be/VIDEOID
    const shortUrlMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortUrlMatch?.[1]) {
      return `https://www.youtube.com/embed/${shortUrlMatch[1]}`;
    }

    return null;
  } catch {
    return null;
  }
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
    youtubeUrl,
    videoUrl, // ✅ optioneel (fallback voor TikTok of andere platformen)
  } = product;

  const chosenVideoUrl = youtubeUrl || videoUrl;
  const youtubeEmbedUrl = toYouTubeEmbedUrl(chosenVideoUrl);

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>{name}</h1>

            <p className="product-brand">{brand}</p>
            <p className="product-desc">{description}</p>

            {/* ✅ Video blok */}
            {chosenVideoUrl && (
              <section style={{ marginTop: "2rem" }}>
                <h2>Video: zo werkt dit product</h2>

                {/* YouTube embed */}
                {youtubeEmbedUrl ? (
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%", // 16:9
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
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  // Fallback: geen YouTube (bijv. TikTok link)
                  <div style={{ marginTop: "1rem" }}>
                    <a
                      href={chosenVideoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      Bekijk video →
                    </a>
                    <p style={{ marginTop: "0.75rem", fontSize: "0.95rem" }}>
                      (Deze video opent in een nieuw tabblad.)
                    </p>
                  </div>
                )}
              </section>
            )}

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

            {affiliateUrl && (
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noreferrer"
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
