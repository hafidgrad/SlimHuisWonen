import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import RelatedPosts from "@/components/RelatedPosts";

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.available);

  if (!post) {
    return {
      title: "Blog – SlimHuisWonen.nl",
      description:
        "Smart home blog met handige uitleg, vergelijkingen en koopgidsen.",
    };
  }

  return {
    title: `${post.title} | SlimHuisWonen`,
    description: post.description,
    alternates: {
      canonical: `https://slimhuiswonen.nl/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://slimhuiswonen.nl/blog/${post.slug}`,
      images: [
        {
          url: `https://slimhuiswonen.nl${post.image}`,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.available);

  if (!post) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://slimhuiswonen.nl${post.image}`,
    author: {
      "@type": "Organization",
      name: "SlimHuisWonen.nl",
    },
    publisher: {
      "@type": "Organization",
      name: "SlimHuisWonen.nl",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://slimhuiswonen.nl/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Header />

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
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="blogBannerImg"
                  sizes="100vw"
                />
              </div>
            </div>
          )}

          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/blog">Blog</Link> / {post.title}
          </p>

          {post.category && (
            <div className="blogCategoryBadge">
              {post.category}
            </div>
          )}

          <h1>{post.title}</h1>

          {post.description && (
            <p className="section-intro">
              {post.description}
            </p>
          )}

          <hr />

          {post.content}

          {/* ✅ Nieuwe professionele related posts */}
          <RelatedPosts related={post.related} />

        </div>
      </main>

      <Footer />
    </>
  );
}