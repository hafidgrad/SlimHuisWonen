import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog – SlimHuisWonen.nl",
  description:
    "Smart home blog met handige uitleg, vergelijkingen en koopgidsen over slimme verlichting, hubs, Zigbee, Matter en meer.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog",
  },
};

export default function BlogOverviewPage() {
  // ✅ Alleen public posts tonen
  const posts = (Array.isArray(blogPosts) ? blogPosts : []).filter(
    (p) => p?.available
  );

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Blog header afbeelding */}
          <div className="blog-hero">
            <Image
              src="/images/blog/blog-header.png"
              alt="SlimHuisWonen blog"
              fill
              priority
              className="blog-hero__img"
              sizes="(max-width: 980px) 100vw, 980px"
            />
            <div className="blog-hero__overlay" />
            <div className="blog-hero__content">
              <h1>Blog</h1>
              <p className="section-intro">
                Hier delen we handige uitleg, vergelijkingen en koopgidsen over
                smart home. Praktisch, duidelijk en zonder marketingpraat.
              </p>
            </div>
          </div>

          <div className="tips-grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="tip-card tip-card--media"
              >
                {/* ✅ Image header zoals tips */}
                {post.image && (
                  <div className="tip-card__imageWrap">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="tip-card__image"
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                    <div className="tip-card__overlay" />
                    <div className="tip-card__badge">
                      {post.category || "Blog"}
                    </div>
                    <div className="tip-card__imgTitle">{post.title}</div>
                  </div>
                )}

                <div className="tip-card__content">
                  <h2 className="tip-card__title">{post.title}</h2>
                  {post.description && (
                    <p className="tip-card__desc">{post.description}</p>
                  )}

                  <span className="tip-card__cta">
                    Lees artikel <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <hr style={{ marginTop: "2rem" }} />

          <p className="muted small">
            Tip: wil je starten met smart home?{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home in 5 stappen
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
