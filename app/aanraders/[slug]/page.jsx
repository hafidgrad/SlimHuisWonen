import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aanraders } from "@/data/aanraders";
import { blogPosts } from "@/data/blog";
import { getProductBySlug } from "@/data/products";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";
import AmazonSearchCta from "@/components/AmazonSearchCta";
import RelatedContent from "@/components/RelatedContent";
import BannerImage from "@/components/BannerImage";

/* ================= Amazon zoekterm mapping ================= */

const KOOPGIDS_AMAZON_TERMS = {
  "beste-slimme-camera": "slimme beveiligingscamera wifi",
  "beste-slimme-stekkers": "slimme stekker wifi",
  "beste-slimme-verlichting": "slimme verlichting",
  "beste-smart-home-hub": "smart home hub",
  "beste-slimme-deurbel": "slimme deurbel met camera",
  "beste-slimme-thermostaat": "slimme thermostaat",
  "beste-slimme-bewegingssensor": "slimme bewegingssensor zigbee",
  "beste-mesh-wifi-systeem": "mesh wifi systeem",
  "beste-slimme-slot": "slim deurslot",
  "beste-energie-monitor": "slimme energiemeter p1",
};

function getAmazonSearchTerm(slug) {
  return KOOPGIDS_AMAZON_TERMS[slug] ?? slug.replace(/-/g, " ");
}

/* ================= METADATA ================= */

export async function generateMetadata({ params }) {
  const guide = aanraders.find((g) => g.slug === params.slug);

  if (!guide) {
    return {
      title: "Aanraders",
      description: "Onze beste smart home aanraders en koopgidsen.",
    };
  }

  return {
    title: guide.title,
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

  const relatedBlog = blogPosts.find((b) => b.slug === guide.relatedBlog);

  const relatedBlogs = guide.relatedBlogs
    ? guide.relatedBlogs
        .map((slug) => blogPosts.find((b) => b.slug === slug))
        .filter(Boolean)
    : [];

  const relatedGuides = guide.relatedGuides
    ? guide.relatedGuides
        .map((slug) => aanraders.find((g) => g.slug === slug))
        .filter(Boolean)
    : [];

  const relatedItems = [
    ...(relatedBlog ? [{ ...relatedBlog, basePath: "blog" }] : []),
    ...relatedBlogs.map((post) => ({ ...post, basePath: "blog" })),
    ...relatedGuides.map((item) => ({ ...item, basePath: "aanraders" })),
  ];

  const amazonSearchTerm = getAmazonSearchTerm(params.slug);

  /* Verrijk picks met affiliateUrl + priceHint vanuit productdata */
  const enrichedPicks = guide.picks.map((pick) => {
    const slug = pick.href?.replace("/producten/", "");
    const product = slug ? getProductBySlug(slug) : null;
    const searchQuery = encodeURIComponent(pick.title.replace(/^[^:]+:\s*/, ""));
    const hasActionUrl = !!pick.actionUrl;
    return {
      ...pick,
      amazonUrl: hasActionUrl
        ? null
        : product?.affiliateUrl ||
          pick.amazonUrl ||
          `https://www.amazon.nl/s?k=${searchQuery}&tag=slimhuiswonen-21`,
      bolUrl:
        product?.bolUrl ||
        pick.bolUrl ||
        (hasActionUrl ? null : `https://www.bol.com/nl/nl/s/?searchtext=${searchQuery}`),
      coolblueUrl: hasActionUrl
        ? null
        : product?.coolblueUrl ||
          pick.coolblueUrl ||
          `https://www.coolblue.nl/zoeken?query=${searchQuery}`,
      priceHint: product?.priceHint || null,
    };
  });

  /* Structured Data: BreadcrumbList */
  const breadcrumbSchema = {
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
        name: "Aanraders",
        item: "https://slimhuiswonen.nl/aanraders",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `https://slimhuiswonen.nl/aanraders/${guide.slug}`,
      },
    ],
  };

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

  /* Structured Data: FAQ */
  const faqSchema =
    guide.faq && guide.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

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
                <BannerImage
                  src={guide.image}
                  alt={guide.title}
                  priority
                />
              </div>
            </div>
          )}

          {/* Breadcrumb */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/aanraders">Aanraders</Link> / {guide.title}
          </p>

          <h1>{guide.title}</h1>

          {guide.intro && <p className="section-intro">{guide.intro}</p>}

          {guide.whoIsThisFor && guide.whoIsThisFor.length > 0 && (
            <>
              <h2>Voor wie is deze koopgids?</h2>
              <ul>
                {guide.whoIsThisFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {guide.buyingAdviceIntro && <p>{guide.buyingAdviceIntro}</p>}

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

          {guide.comparisonTable && (
            <>
              <h2>Snelle vergelijking</h2>
              <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr style={{ background: "#f1f5f9" }}>
                      {guide.comparisonTable.headers.map((h) => (
                        <th
                          key={h}
                          style={{
                            padding: "0.55rem 0.75rem",
                            textAlign: "left",
                            borderBottom: "2px solid #e2e8f0",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {guide.comparisonTable.rows.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 1 ? "#f8fafc" : "white" }}>
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            style={{
                              padding: "0.45rem 0.75rem",
                              borderBottom: "1px solid #e2e8f0",
                              fontWeight: j === 0 ? 600 : 400,
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          <hr />

          <h2>Onze aanraders</h2>
          <p className="muted">
            Alleen producten die betrouwbaar zijn en logisch voor hun
            gebruikssituatie.
          </p>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            {["✓ Onafhankelijk getest", "✓ Geen gesponsorde aanbevelingen", "✓ Bijgewerkt april 2026"].map((label) => (
              <span key={label} style={{ fontSize: "0.82rem", background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0", borderRadius: "999px", padding: "0.25rem 0.75rem" }}>
                {label}
              </span>
            ))}
          </div>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {enrichedPicks.map((pick) => (
              <BuyGuideProductCard key={pick.title} {...pick} />
            ))}
          </div>

          {relatedItems.length > 0 && (
            <>
              <hr />
              <RelatedContent items={relatedItems} basePath="aanraders" />
            </>
          )}

          {guide.faq && guide.faq.length > 0 && (
            <>
              <hr />
              <h2>Veelgestelde vragen</h2>
              <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
                {guide.faq.map((item) => (
                  <div key={item.question}>
                    <h3 style={{ marginBottom: "0.35rem" }}>{item.question}</h3>
                    <p className="muted" style={{ marginBottom: 0 }}>
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Bekijk ook — links naar relevante producten uit de catalogus */}
          {enrichedPicks.length > 0 && (
            <>
              <hr style={{ marginTop: "2rem" }} />
              <h3>Bekijk ook</h3>
              <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
                {enrichedPicks.slice(0, 3).map((pick) => (
                  <li key={pick.title} style={{ marginBottom: "0.4rem" }}>
                    <Link href={pick.href}>{pick.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Niet gevonden? Zoek op de drie grote webshops */}
          <hr style={{ marginTop: "2rem" }} />
          {guide.slug === "alle-lsc-smart-connect-producten-action" ? (
            <div className="amazonCtaBox">
              <p className="muted">Nog meer LSC producten bekijken?</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "0.5rem" }}>
                <a
                  href="https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=25288&p=https%3A%2F%2Fshop.action.com%2Fnl-nl%2Fs%2F%3Fsearchterm%3DLSC%2BSmart%2BConnect"
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  style={{ fontSize: "0.9rem", display: "inline-block", padding: "0.55rem 1rem", borderRadius: "8px", background: "#003082", color: "#fff", fontWeight: 700, textDecoration: "none" }}
                >
                  Bekijk alle LSC producten bij Action →
                </a>
                <a
                  href="https://www.awin1.com/cread.php?awinaffid=2855887&awinmid=13926&p=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fb%2Flsc-smart-connect%2F606566673%2F"
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="btn btn-bol"
                  style={{ fontSize: "0.9rem" }}
                >
                  Zoek op bol.com →
                </a>
              </div>
            </div>
          ) : (
            <AmazonSearchCta searchTerm={amazonSearchTerm} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}