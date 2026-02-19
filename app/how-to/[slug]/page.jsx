import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { howto } from "@/data/howto";

/* ================= METADATA ================= */

export async function generateMetadata({ params }) {
  const article = howto.find(
    (h) => h.slug === params.slug && h.available
  );

  if (!article) {
    return {
      title: "How-To – SlimHuisWonen.nl",
      description: "Stap-voor-stap smart home handleidingen.",
    };
  }

  return {
    title: `${article.title} | SlimHuisWonen`,
    description: article.description,
    alternates: {
      canonical: `https://slimhuiswonen.nl/how-to/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://slimhuiswonen.nl/how-to/${article.slug}`,
      images: [
        {
          url: `https://slimhuiswonen.nl${article.image}`,
        },
      ],
    },
  };
}

/* ================= PAGE ================= */

export default function HowToDetailPage({ params }) {
  const article = howto.find(
    (h) => h.slug === params.slug && h.available
  );

  if (!article) return notFound();

  /* ✅ SEO HowTo schema */
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: article.title,
    description: article.description,
    image: `https://slimhuiswonen.nl${article.image}`,
    author: {
      "@type": "Organization",
      name: "SlimHuisWonen.nl",
    },
  };

  return (
    <>
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      <main className="section">
        <div className="container article">

          {/* ✅ Blog-style banner */}
          {article.image && (
            <div
              className="blogBanner"
              style={{ "--blog-bg": `url(${article.image})` }}
            >
              <div
                className="blogBannerBlur blogBannerBlurLeft"
                style={{ backgroundImage: "var(--blog-bg)" }}
              />
              <div
                className="blogBannerBlur blogBannerBlurRight"
                style={{ backgroundImage: "var(--blog-bg)" }}
              />

              <div className="blogBannerInner compact">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="blogBannerImg"
                  sizes="100vw"
                />
              </div>
            </div>
          )}

          {/* Breadcrumb */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/how-to">How-To</Link> / {article.title}
          </p>

          <h1>{article.title}</h1>

          <p className="section-intro">
            {article.description}
          </p>

          <hr />

          {/* ✅ CONTENT UIT data/howto.js */}
          {article.content}

          {/* ✅ Alleen tonen als content ontbreekt */}
          {!article.content && (
            <>
              <hr />
              <p>
                Deze handleiding wordt binnenkort volledig uitgewerkt.
              </p>
            </>
          )}

          <hr style={{ marginTop: "2rem" }} />

          <Link href="/how-to" className="btn btn-primary">
            ← Terug naar How-To overzicht
          </Link>

        </div>
      </main>

      <Footer />
    </>
  );
}
