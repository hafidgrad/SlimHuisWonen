import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedContent from "@/components/RelatedContent";
import { tips, getTipBySlug, getAllTips } from "@/data/tips";

export async function generateMetadata({ params }) {
  const tip = getTipBySlug(params.slug);

  if (!tip) {
    return {
      title: "Tips – SlimHuisWonen.nl",
      description: "Smart home tips en uitleg voor een stabiele slimme woning.",
    };
  }

  return {
    title: `${tip.title} | SlimHuisWonen`,
    description: tip.description,
    alternates: {
      canonical: `https://slimhuiswonen.nl/tips/${tip.slug}`,
    },
    openGraph: {
      title: tip.title,
      description: tip.description,
      url: `https://slimhuiswonen.nl/tips/${tip.slug}`,
      images: [{ url: `https://slimhuiswonen.nl${tip.image}` }],
    },
  };
}

// optional maar fijn als je static builds gebruikt
export async function generateStaticParams() {
  return getAllTips().map((t) => ({ slug: t.slug }));
}

export default function TipPage({ params }) {
  const tip = getTipBySlug(params.slug);
  if (!tip) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tip.title,
    description: tip.description,
    image: `https://slimhuiswonen.nl${tip.image}`,
    author: { "@type": "Organization", name: "SlimHuisWonen.nl" },
    publisher: { "@type": "Organization", name: "SlimHuisWonen.nl" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://slimhuiswonen.nl/tips/${tip.slug}`,
    },
  };

  const relatedItems = (tip.related || [])
  .map((slug) => tips.find((p) => p && p.slug === slug && p.available))
  .filter(Boolean);

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {tip.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tip.faqSchema) }}
        />
      )}

      <main className="section">
        <div className="container article">
          {/* ✅ zelfde banner + blur effect als blog */}
          {tip.image && (
            <div className="blogBanner" style={{ "--blog-bg": `url(${tip.image})` }}>
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
                  src={tip.image}
                  alt={tip.title}
                  fill
                  priority
                  className="blogBannerImg"
                  sizes="100vw"
                />
              </div>
            </div>
          )}

          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/tips">Tips & Uitleg</Link> / {tip.title}
          </p>

          {tip.category && <div className="blogCategoryBadge">{tip.category}</div>}

          <h1>{tip.title}</h1>

          {tip.description && <p className="section-intro">{tip.description}</p>}

          <hr />

          {tip.content}

          {/* ✅ Verder lezen (cards + placeholders) */}
          <RelatedContent items={relatedItems} basePath="tips" />
        </div>
      </main>

      <Footer />
    </>
  );
}