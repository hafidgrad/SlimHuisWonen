import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { howto } from "@/data/howto";
import { getAllTips } from "@/data/tips";
import { blogPosts } from "@/data/blog";

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
      siteName: "SlimHuisWonen",
      images: [
        {
          url: `https://slimhuiswonen.nl${article.image}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "nl_NL",
      type: "article",
    },
  };
}

/* ================= PAGE ================= */

export default function HowToDetailPage({ params }) {
  const article = howto.find(
    (h) => h.slug === params.slug && h.available
  );

  if (!article) return notFound();

  /* ================= RELATED CONTENT ================= */

  const relatedKeys =
    article.categories ||
    (article.category ? [article.category] : []);

  const relatedTips = getAllTips()
    .filter((tip) =>
      relatedKeys.some(
        (key) =>
          tip.category === key ||
          tip.categories?.includes?.(key)
      )
    )
    .slice(0, 3);

  const relatedBlogs = blogPosts
    .filter((blog) =>
      relatedKeys.some(
        (key) =>
          blog.category === key ||
          blog.categories?.includes?.(key)
      )
    )
    .slice(0, 3);

  /* ================= HOWTO SCHEMA ================= */

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      <main className="section">

        {/* ================= ARTICLE ================= */}
        <div className="container article">

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

          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/how-to">How-To</Link> / {article.title}
          </p>

          <h1>{article.title}</h1>

          <p className="section-intro">
            {article.description}
          </p>

          <hr />

          {article.content}

          {!article.content && (
            <>
              <hr />
              <p>
                Deze handleiding wordt binnenkort volledig uitgewerkt.
              </p>
            </>
          )}

        </div>

        {/* ================= RELATED CONTENT ================= */}
        {(relatedTips.length > 0 || relatedBlogs.length > 0) && (
          <section className="section">
            <div className="container">

              {relatedTips.length > 0 && (
                <>
                  <h2>Gerelateerde Tips & Uitleg</h2>
                  <div className="grid-3">
                    {relatedTips.map((tip) => (
                      <Link
                        key={tip.slug}
                        href={`/tips/${tip.slug}`}
                        className="card"
                      >
                        <Image
                          src={tip.image}
                          alt={tip.title}
                          width={400}
                          height={240}
                          className="card-image"
                        />
                        <h3>{tip.title}</h3>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {relatedBlogs.length > 0 && (
                <>
                  <h2 style={{ marginTop: "2.5rem" }}>
                    Gerelateerde Artikelen
                  </h2>
                  <div className="grid-3">
                    {relatedBlogs.map((blog) => (
                      <Link
                        key={blog.slug}
                        href={`/blog/${blog.slug}`}
                        className="card"
                      >
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={400}
                          height={240}
                          className="card-image"
                        />
                        <h3>{blog.title}</h3>
                      </Link>
                    ))}
                  </div>
                </>
              )}

            </div>
          </section>
        )}

        {/* ================= BACK BUTTON ================= */}
        <div className="container" style={{ marginTop: "2rem" }}>
          <Link href="/how-to" className="btn btn-primary">
            ← Terug naar How-To overzicht
          </Link>
        </div>

      </main>

      <Footer />
    </>
  );
}