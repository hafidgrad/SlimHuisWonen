import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { aanraders as aanradersData } from "@/data/aanraders";
import { getProductBySlug } from "@/data/products";

const EXCLUDED_SLUGS = new Set([
  "beste-slimme-camera",
  "beste-slimme-deurbel",
  "beste-slimme-slot",
  "beste-robotstofzuigers-2026",
  "beste-slimme-producten-voor-huisdieren",
  "beste-slimme-producten-voor-kinderen",
]);

const SLUG_ORDER = [
  "beste-slimme-verlichting",
  "slimme-verlichting-per-kamer",
  "beste-slimme-bewegingssensor",
  "beste-slimme-sensoren",
  "beste-smart-home-hub",
  "beste-slimme-stekkers",
  "beste-slimme-stekkers-2026",
  "beste-slimme-thermostaat",
  "beste-slimme-radiatorkraan",
  "beste-energie-monitor",
  "beste-mesh-wifi-systeem",
  "beste-smart-home-huurwoning",
  "goedkoopste-smart-home-beginners",
  "alle-lsc-smart-connect-producten-action",
];

export const metadata = {
  title: "Slimme verlichtingsgidsen & koopadvies",
  description:
    "Onafhankelijke koopgidsen voor slimme verlichting, hubs, stekkers en sensoren. Eerlijk advies, bijgewerkt 2026.",
  alternates: {
    canonical: "https://www.slimhuiswonen.nl/aanraders",
  },
};

/* Dezelfde enrichment-logica als in [slug]/page.jsx */
function getTopPick(guide) {
  if (!guide.picks?.length) return null;
  const pick = guide.picks[0];
  const productSlug = pick.href?.replace("/producten/", "");
  const product = productSlug && !pick.href?.startsWith("/aanraders")
    ? getProductBySlug(productSlug)
    : null;
  const searchQuery = encodeURIComponent(pick.title.replace(/^[^:]+:\s*/, ""));
  const hasActionUrl = !!pick.actionUrl;
  const awinId = process.env.NEXT_PUBLIC_AWIN_PUBLISHER_ID;

  const awinBolFallback = `https://www.awin1.com/cread.php?awinaffid=${awinId}&awinmid=13926&p=${encodeURIComponent(`https://www.bol.com/nl/nl/s/?searchtext=${searchQuery}`)}`;
  const awinCoolblueFallback = `https://www.awin1.com/cread.php?awinaffid=${awinId}&awinmid=13813&ued=${encodeURIComponent(`https://www.coolblue.nl/zoeken?query=${searchQuery}`)}`;

  return {
    title: pick.title.replace(/^[^:]+:\s*/, ""),
    priceHint: product?.priceHint || pick.priceHint || null,
    actionUrl: pick.actionUrl || null,
    bolUrl: hasActionUrl ? null : (product?.bolUrl || pick.bolUrl || awinBolFallback),
    coolblueUrl: hasActionUrl ? null : (product?.coolblueUrl || pick.coolblueUrl || awinCoolblueFallback),
    amazonUrl: hasActionUrl ? null : (product?.affiliateUrl || pick.amazonUrl || `https://www.amazon.nl/s?k=${searchQuery}&tag=slimhuiswonen-21`),
  };
}

export default function AanradersPage() {
  const headerImg = "/images/aanraders-banner.png";

  const filtered = Array.isArray(aanradersData) && aanradersData.length > 0
    ? aanradersData.filter((g) => !EXCLUDED_SLUGS.has(g.slug))
    : [];

  const guides = [...filtered].sort((a, b) => {
    const ia = SLUG_ORDER.indexOf(a.slug);
    const ib = SLUG_ORDER.indexOf(b.slug);
    if (ia === -1 && ib === -1) return 0;
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <div
            className="blogBanner"
            style={{ "--blog-bg": `url(${headerImg})` }}
          >
            <div className="blogBannerBlur blogBannerBlurLeft" style={{ backgroundImage: "var(--blog-bg)" }} />
            <div className="blogBannerBlur blogBannerBlurRight" style={{ backgroundImage: "var(--blog-bg)" }} />
            <div className="blogBannerInner compact">
              <Image
                src={headerImg}
                alt="Onze slimme aanraders en koopgidsen"
                fill
                priority
                className="blogBannerImg"
                sizes="100vw"
              />
            </div>
          </div>

          <h1 style={{ fontSize: 42, marginBottom: 8 }}>Onze Aanraders</h1>

          <p className="section-intro">
            Op zoek naar de beste smart home producten? Hier vind je onze
            koopgidsen en zorgvuldig geselecteerde aanraders — duidelijk,
            onafhankelijk en praktisch uitgelegd.
          </p>

          <div className="tips-grid">
            {guides.map((guide) => {
              const topPick = getTopPick(guide);
              return (
                <article
                  key={guide.slug}
                  className="tip-card tip-card--media"
                  style={{ position: "relative" }}
                >
                  {/* Stretched link — hele kaart klikbaar behalve knoppen */}
                  <Link
                    href={`/aanraders/${guide.slug}`}
                    aria-label={guide.title}
                    style={{ position: "absolute", inset: 0, zIndex: 0 }}
                    tabIndex={-1}
                  />

                  {guide.image && (
                    <div className="tip-card__imageWrap">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="tip-card__image"
                        sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                      />
                      <div className="tip-card__overlay" />
                      <div className="tip-card__badge">Koopgids</div>
                      <div className="tip-card__imgTitle">{guide.title}</div>
                    </div>
                  )}

                  <div className="tip-card__content" style={{ position: "relative", zIndex: 1 }}>
                    <h2 className="tip-card__title">{guide.title}</h2>

                    {guide.description && (
                      <p className="tip-card__desc">{guide.description}</p>
                    )}

                    {topPick && (
                      <div style={{ marginTop: "0.75rem" }}>
                        <p style={{ fontSize: "0.8rem", color: "#6b7280", margin: "0 0 0.4rem" }}>
                          Topaanrader: <strong style={{ color: "#374151" }}>{topPick.title}</strong>
                          {topPick.priceHint && (
                            <span style={{ marginLeft: "0.5rem", color: "#1d4ed8", fontWeight: 600 }}>
                              {topPick.priceHint}
                            </span>
                          )}
                        </p>

                        {/* Primaire koopknop */}
                        {topPick.actionUrl ? (
                          <a
                            href={topPick.actionUrl}
                            target="_blank"
                            rel="nofollow sponsored noopener noreferrer"
                            className="btn btn-action"
                            style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.35rem" }}
                          >
                            Bekijk prijs bij Action →
                          </a>
                        ) : topPick.bolUrl ? (
                          <a
                            href={topPick.bolUrl}
                            target="_blank"
                            rel="nofollow sponsored noopener noreferrer"
                            className="btn btn-bol"
                            style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.35rem" }}
                          >
                            Bekijk prijs bij bol.com →
                          </a>
                        ) : null}

                        {/* Secundaire links */}
                        {!topPick.actionUrl && (topPick.coolblueUrl || topPick.amazonUrl) && (
                          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                            {topPick.coolblueUrl && (
                              <a
                                href={topPick.coolblueUrl}
                                target="_blank"
                                rel="nofollow sponsored noopener noreferrer"
                                style={{ fontSize: "0.78rem", color: "#6b7280", textDecoration: "underline" }}
                              >
                                Ook bij Coolblue
                              </a>
                            )}
                            {topPick.amazonUrl && (
                              <a
                                href={topPick.amazonUrl}
                                target="_blank"
                                rel="nofollow sponsored noopener noreferrer"
                                style={{ fontSize: "0.78rem", color: "#6b7280", textDecoration: "underline" }}
                              >
                                Ook bij Amazon
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    <Link
                      href={`/aanraders/${guide.slug}`}
                      className="tip-card__cta"
                      style={{ display: "inline-block", marginTop: "0.75rem" }}
                    >
                      Bekijk koopgids <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <hr style={{ marginTop: "2rem" }} />

          <p className="muted small">
            Twijfel je nog? Bekijk ook onze{" "}
            <Link href="/blog">smart home blog met uitleg en vergelijkingen</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
