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
  /* ================= AI SUMMARY ================= */

const aiSummary =
  article.description?.length > 160
    ? article.description.slice(0, 157) + "..."
    : article.description;

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

  /* ================= KOOPGIDS MATCHING ================= */

  const koopgidsMap = {
    verlichting: [
      { title: "Beste slimme verlichting", slug: "beste-slimme-verlichting" },
    ],
    hub: [
      { title: "Beste smart home hub", slug: "beste-smart-home-hub" },
    ],
    veiligheid: [
      { title: "Beste slimme camera", slug: "beste-slimme-camera" },
      { title: "Beste slimme deurbel", slug: "beste-slimme-deurbel" },
    ],
    wifi: [
      { title: "Beste smart home hub", slug: "beste-smart-home-hub" },
    ],
    energie: [
      { title: "Beste slimme stekkers", slug: "beste-slimme-stekkers" },
    ],
  };

  const relatedKoopgidsen = relatedKeys
    .flatMap((key) => koopgidsMap[key] || [])
    .slice(0, 3);

  /* ================= STRUCTURED DATA ================= */

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: article.title,
    description: article.description,
    image: `https://slimhuiswonen.nl${article.image}`,
    author: {
      "@type": "Organization",
      name: "SlimHuisWonen.nl",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://slimhuiswonen.nl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "How-To",
        item: "https://slimhuiswonen.nl/how-to",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://slimhuiswonen.nl/how-to/${article.slug}`,
      },
    ],
  },

  ...(article.faq
    ? [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ]
    : []),
];

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="section">

        {/* ARTICLE */}
        <div className="container article">

          {article.image && (
            <div
              className="blogBanner"
              style={{ "--blog-bg": `url(${article.image})` }}
            >
              <div className="blogBannerBlur blogBannerBlurLeft" />
              <div className="blogBannerBlur blogBannerBlurRight" />

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

          <p className="muted small">
            <Link href="/how-to">How-To</Link> / {article.title}
          </p>

          <h1>{article.title}</h1>
          <p className="section-intro">{article.description}</p>
          {/* ================= KORT ANTWOORD (AI OPTIMALISATIE) ================= */}

{aiSummary && (
  <div
    style={{
      background: "#f5f7fa",
      padding: "1rem 1.25rem",
      borderRadius: "8px",
      marginBottom: "1.5rem",
      border: "1px solid #e2e8f0",
    }}
  >
    <strong>Kort antwoord:</strong>
    <p style={{ margin: "0.5rem 0 0 0" }}>{aiSummary}</p>
  </div>
)}

          <hr />

          {article.content}
          {/* ================= FAQ ================= */}

{article.faq && (
  <>
    <h2>Veelgestelde vragen</h2>

    <div className="faq-list">
      {article.faq.map((item, index) => (
        <div key={index} style={{ marginBottom: "1.25rem" }}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  </>
)}

        </div>

        {/* RELATED CONTENT */}
        {(relatedTips.length > 0 || relatedBlogs.length > 0) && (
          <section className="section">
            <div className="container">

              {relatedTips.length > 0 && (
                <>
                  <h2>Gerelateerde Tips & Uitleg</h2>
                  <div className="grid-3">
                    {relatedTips.map((tip) => (
                      <Link key={tip.slug} href={`/tips/${tip.slug}`} className="card">
                        <Image src={tip.image} alt={tip.title} width={400} height={240} />
                        <h3>{tip.title}</h3>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {relatedBlogs.length > 0 && (
                <>
                  <h2 style={{ marginTop: "2.5rem" }}>Gerelateerde Artikelen</h2>
                  <div className="grid-3">
                    {relatedBlogs.map((blog) => (
                      <Link key={blog.slug} href={`/blog/${blog.slug}`} className="card">
                        <Image src={blog.image} alt={blog.title} width={400} height={240} />
                        <h3>{blog.title}</h3>
                      </Link>
                    ))}
                  </div>
                </>
              )}

            </div>
          </section>
        )}

        {/* KOOPGIDSEN */}
        {relatedKoopgidsen.length > 0 && (
          <section className="section">
            <div className="container">
              <h2>Aanbevolen koopgidsen</h2>

              <div className="grid-3">
                {relatedKoopgidsen.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/aanraders/${guide.slug}`}
                    className="card"
                  >
                    <h3>{guide.title}</h3>
                    <p>Bekijk onze aanbevelingen →</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BACK BUTTON */}
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