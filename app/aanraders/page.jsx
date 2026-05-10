import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { aanraders as aanradersData } from "@/data/aanraders";

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
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/aanraders/${guide.slug}`}
                className="tip-card tip-card--media"
              >
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

                <div className="tip-card__content">
                  <h2 className="tip-card__title">{guide.title}</h2>

                  {guide.description && (
                    <p className="tip-card__desc">{guide.description}</p>
                  )}

                  <span className="tip-card__cta">
                    Bekijk koopgids <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
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
