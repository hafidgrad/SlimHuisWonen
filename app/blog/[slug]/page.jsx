import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

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
    title: `${post.title} – SlimHuisWonen.nl`,
    description: post.description,
    alternates: {
      canonical: `https://slimhuiswonen.nl/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.available);

  if (!post) return notFound();

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Compacte banner */}
          {post.image && (
            <div
              className="blogBanner compact"
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
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
          )}

          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/blog">← Terug naar blog</Link>
          </p>

          <h1>{post.title}</h1>

          {post.description && (
            <p className="section-intro" style={{ marginTop: "0.75rem" }}>
              {post.description}
            </p>
          )}

          <hr style={{ marginTop: "2rem" }} />

          <p className="muted">
            (Hier komt straks de inhoud van deze blogpost te staan.)
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
