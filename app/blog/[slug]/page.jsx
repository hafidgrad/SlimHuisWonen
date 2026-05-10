import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { tips } from "@/data/tips";
import { aanraders } from "@/data/aanraders";
import RelatedContent from "@/components/RelatedContent";
import AuthorCard from "@/components/AuthorCard";
import BannerImage from "@/components/BannerImage";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";

const NOINDEX_BLOG = new Set([
  "wat-is-een-slimme-camera",
  "beste-slimme-deurbel",
  "ring-vs-tapo-deurbel",
  "eufy-vs-ring-camera",
  "slimme-deurbel-zonder-abonnement",
  "smart-home-beveiliging-tips",
]);

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.available);

  if (!post) {
    return {
      title: "Blog",
      description:
        "Smart home blog met handige uitleg, vergelijkingen en koopgidsen.",
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.description,
    ...(NOINDEX_BLOG.has(post.slug) && { robots: { index: false, follow: true } }),
    alternates: {
      canonical: `https://www.slimhuiswonen.nl/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.description,
      url: `https://www.slimhuiswonen.nl/blog/${post.slug}`,
      images: [
        {
          url: `https://www.slimhuiswonen.nl${post.image}`,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.available);
  if (!post) return notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.slimhuiswonen.nl" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.slimhuiswonen.nl/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.slimhuiswonen.nl/blog/${post.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://www.slimhuiswonen.nl${post.image}`,
    author: {
      "@type": "Person",
      name: "Hafid",
      url: "https://www.slimhuiswonen.nl/over",
    },
    publisher: {
      "@type": "Organization",
      name: "SlimHuisWonen.nl",
      url: "https://www.slimhuiswonen.nl",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.slimhuiswonen.nl/blog/${post.slug}`,
    },
    ...(post.datePublished && { datePublished: post.datePublished }),
    dateModified: post.dateModified || "2026-04-27",
  };

  // ✅ veilig: als related ontbreekt of leeg is -> []
  const relatedItems = (post.related || [])
    .map((slug) => {
      const blogItem = blogPosts.find((p) => p.slug === slug && p.available);
      if (blogItem) return { ...blogItem, basePath: "blog" };

      const tipItem = tips.find((p) => p.slug === slug && p.available);
      if (tipItem) return { ...tipItem, basePath: "tips" };

      const guideItem = aanraders.find((g) => g.slug === slug);
      if (guideItem) return { ...guideItem, basePath: "aanraders" };

      return null;
    })
    .filter(Boolean);

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {post.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.faqSchema),
          }}
        />
      )}

      <main className="section">
        <div className="container article">
          {post.image && (
            <div
              className="blogBanner"
              style={{ "--blog-bg": `url(${post.image})` }}
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
                <BannerImage
                  src={post.image}
                  alt={post.title}
                  priority
                />
              </div>
            </div>
          )}

          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/blog">Blog</Link> / {post.title}
          </p>

          {post.category && (
            <div className="blogCategoryBadge">{post.category}</div>
          )}

          <h1>{post.title}</h1>

          {post.description && <p className="section-intro">{post.description}</p>}

          <p className="muted small" style={{ marginBottom: "0.5rem" }}>
            {post.datePublished && (
              <>
                Gepubliceerd op{" "}
                <time dateTime={post.datePublished}>
                  {new Date(post.datePublished).toLocaleDateString("nl-NL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                {" "}·{" "}
              </>
            )}
            Bijgewerkt: april 2026
          </p>

          <hr />

          {post.content}

          {post.faq && post.faq.length > 0 && (
            <>
              <hr />
              <FaqSection faqs={post.faq} />
            </>
          )}

          <AuthorCard />

          {/* Link naar meest relevante koopgids */}
          {(() => {
            const relatedGuide = aanraders.find(
              (g) =>
                (g.relatedBlogs && g.relatedBlogs.includes(post.slug)) ||
                g.relatedBlog === post.slug
            );
            if (!relatedGuide) return null;
            return (
              <div
                style={{
                  background: "rgba(99,102,241,0.08)",
                  borderLeft: "4px solid #6366f1",
                  padding: "1rem 1.25rem",
                  borderRadius: "0 8px 8px 0",
                  margin: "1.5rem 0",
                }}
              >
                <p style={{ margin: "0 0 0.4rem", fontWeight: 600 }}>
                  Koopgids aanbeveling
                </p>
                <p style={{ margin: "0 0 0.5rem" }} className="muted">
                  {relatedGuide.description}
                </p>
                <Link href={`/aanraders/${relatedGuide.slug}`} className="btn btn-primary" style={{ fontSize: "0.9rem" }}>
                  {relatedGuide.title} →
                </Link>
              </div>
            );
          })()}

          {/* ✅ Verder lezen (alleen als er items zijn) */}
          <RelatedContent items={relatedItems} basePath="blog" />
        </div>
      </main>

      <Footer />
    </>
  );
}