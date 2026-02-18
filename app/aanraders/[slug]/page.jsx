import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aanraders } from "@/data/aanraders";
import { blogPosts } from "@/data/blog";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

/* ================= METADATA ================= */

export async function generateMetadata({ params }) {
  console.log("Slug:", params.slug);
console.log("Available slugs:", aanraders.map(a => a.slug));
  const guide = aanraders.find((g) => g.slug === params.slug);

  if (!guide) {
    return {
      title: "Aanraders – SlimHuisWonen.nl",
      description: "Onze beste smart home aanraders en koopgidsen.",
    };
  }

  return {
    title: `${guide.title} | SlimHuisWonen`,
    description: guide.description,
    alternates: {
      canonical: `https://slimhuiswonen.nl/aanraders/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://slimhuiswonen.nl/aanraders/${guide.slug}`,
      images: [
        {
          url: `https://slimhuiswonen.nl${guide.image}`,
        },
      ],
    },
  };
}

/* ================= PAGE ================= */

export default function AanraderDetailPage({ params }) {
  const guide = aanraders.find((g) => g.slug === params.slug);

  if (!guide) return notFound();

  const relatedBlog = blogPosts.find(
    (b) => b.slug === guide.relatedBlog
  );

  /* Structured Data: ItemList */
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: guide.title,
    description: guide.description,
    itemListElement: guide.picks.map((pick, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pick.title,
      url: `https://slimhuiswonen.nl${pick.href}`,
    })),
  };

  return (
    <>
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <main className="section">
        <div className="container article">

          {/* 🔥 BlogBanner stijl */}
          {guide.image && (
            <div
              className="blogBanner"
              style={{ "--blog-bg": `url(${guide.image})` }}
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
                  src={guide.image}
                  alt={guide.title}
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
            <Link href="/aanraders">Aanraders</Link> / {guide.title}
          </p>

          <h1>{guide.title}</h1>

          {guide.intro && (
            <p className="section-intro">
              {guide.intro}
            </p>
          )}
          {guide.whatToLookFor && (
  <>
    <h2>Waar moet je op letten?</h2>
    <ul>
      {guide.whatToLookFor.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </>
)}
          <hr />

          <h2>Onze aanraders</h2>
          <p className="muted">
            Alleen producten die betrouwbaar zijn en logisch voor hun gebruikssituatie.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((pick) => (
              <BuyGuideProductCard key={pick.title} {...pick} />
            ))}
          </div>

          {relatedBlog && (
            <>
              <hr />
              <p>
                Twijfel je nog? Lees ook{" "}
                <Link href={`/blog/${relatedBlog.slug}`}>
                  {relatedBlog.title}
                </Link>
                .
              </p>
            </>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
