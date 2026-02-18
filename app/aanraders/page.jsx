import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Onze slimme aanraders – SlimHuisWonen.nl",
  description:
    "Ontdek onze beste smart home koopgidsen en aanraders. Vergelijk slimme verlichting, stekkers, camera’s, deurbellen en hubs.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders",
  },
};

const koopgidsen = [
  {
    slug: "beste-slimme-verlichting",
    title: "Beste slimme verlichting",
    description: "Hue, IKEA, Tapo & Govee vergeleken",
    image: "/images/blog/beste-slimme-verlichting.png",
    category: "Koopgids",
  },
  {
    slug: "beste-slimme-stekkers",
    title: "Beste slimme stekkers",
    description: "Met en zonder energiemeting",
    image: "/images/blog/beste-slimme-stekkers.png",
    category: "Koopgids",
  },
  {
    slug: "beste-slimme-camera",
    title: "Beste slimme camera",
    description: "Binnen, buiten & privacy",
    image: "/images/blog/beste-slimme-camera.png",
    category: "Koopgids",
  },
  {
    slug: "beste-slimme-deurbel",
    title: "Beste slimme deurbel",
    description: "Bedraad, accu & abonnementen",
    image: "/images/blog/beste-slimme-deurbel.png",
    category: "Koopgids",
  },
  {
    slug: "beste-smart-home-hub",
    title: "Beste smart home hub",
    description: "Homey, Home Assistant & SmartThings",
    image: "/images/blog/beste-smart-home-hub.png",
    category: "Koopgids",
  },
];

export default function AanradersPage() {
  const headerImg = "/images/aanraders-banner.png";

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">

          {/* 🔥 Exact dezelfde blogBanner */}
          <div
            className="blogBanner"
            style={{ "--blog-bg": `url(${headerImg})` }}
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
                src={headerImg}
                alt="Onze slimme aanraders en koopgidsen"
                fill
                priority
                className="blogBannerImg"
                sizes="100vw"
              />
            </div>
          </div>

          <h1 style={{ fontSize: 42, marginBottom: 8 }}>
            Onze Aanraders
          </h1>

          <p className="section-intro">
            Op zoek naar de beste smart home producten? Hier vind je onze
            koopgidsen en zorgvuldig geselecteerde aanraders — duidelijk,
            onafhankelijk en praktisch uitgelegd.
          </p>

          <div className="tips-grid">
            {koopgidsen.map((item) => (
              <Link
                key={item.slug}
                href={`/aanraders/${item.slug}`}
                className="tip-card tip-card--media"
              >
                {item.image && (
                  <div className="tip-card__imageWrap">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="tip-card__image"
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                    <div className="tip-card__overlay" />
                    <div className="tip-card__badge">
                      {item.category}
                    </div>
                    <div className="tip-card__imgTitle">
                      {item.title}
                    </div>
                  </div>
                )}

                <div className="tip-card__content">
                  <h2 className="tip-card__title">
                    {item.title}
                  </h2>

                  {item.description && (
                    <p className="tip-card__desc">
                      {item.description}
                    </p>
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
            <Link href="/blog">
              smart home blog met uitleg en vergelijkingen
            </Link>
            .
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}
