import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipCard from "@/components/TipCard";
import Image from "next/image";
import { howto as howtoData } from "@/data/howto";

export const metadata = {
  title: "How To Smart Home",
  description:
    "Stap-voor-stap handleidingen voor je smart home. Duidelijke uitleg zonder technisch gedoe voor Homey, Home Assistant en meer.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/how-to",
  },
};

const CATEGORIES = [
  {
    label: "Beginnen met smart home",
    key: "basis",
    slugs: [
      "beginnen-met-smart-home",
      "smart-home-zonder-hub-instellen",
      "hoe-verbind-je-zigbee-apparaten",
      "smart-home-hub-installeren",
    ],
  },
  {
    label: "Verlichting instellen",
    key: "verlichting",
    slugs: [
      "slimme-verlichting-installeren",
      "lamp-automatisch-aan-bij-beweging",
      "slimme-verlichting-koppelen-lukt-niet",
      "hoe-koppel-je-philips-hue-aan-google-home",
    ],
  },
  {
    label: "Sensoren & Automatiseringen",
    key: "automatisering",
    slugs: [
      "bewegingssensor-instellen",
      "homey-automatisering-maken",
      "hoe-maak-je-automatisering-home-assistant",
    ],
  },
  {
    label: "Beveiliging",
    key: "veiligheid",
    slugs: [
      "slim-huis-beveiligen",
      "hoe-installeer-je-een-slimme-deurbel",
      "hoe-installeer-je-een-tapo-camera",
    ],
  },
  {
    label: "Energie & Stekkers",
    key: "energie",
    slugs: [
      "slimme-stekker-instellen",
      "hoe-stel-je-een-slimme-stekker-in-met-schema",
      "hoe-stel-je-een-slimme-thermostaat-in",
    ],
  },
  {
    label: "Netwerk & Wifi",
    key: "wifi",
    slugs: ["wifi-verbeteren-voor-smart-home"],
  },
];

export default function HowToPage() {
  const allHowtos = (Array.isArray(howtoData) ? howtoData : []).filter(
    (h) => h?.available
  );

  const bySlug = Object.fromEntries(allHowtos.map((h) => [h.slug, h]));
  const placed = new Set();

  const headerImg = "/images/banner_how-to.png";

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">

          {/* Blog-style blur banner */}
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
                alt="How To Smart Home"
                fill
                priority
                className="blogBannerImg"
                sizes="100vw"
              />
            </div>
          </div>

          <h1 style={{ fontSize: 42, marginBottom: 8 }}>
            How To Smart Home
          </h1>

          <p className="section-intro">
            Praktische handleidingen om je slimme huis stap voor stap in te
            stellen. Van het koppelen van je eerste lamp tot geavanceerde
            automatiseringen — duidelijk uitgelegd, zonder technisch gedoe.
            Kies een onderwerp en ga direct aan de slag.
          </p>

          {CATEGORIES.map((cat) => {
            const items = cat.slugs
              .map((s) => bySlug[s])
              .filter(Boolean);
            if (!items.length) return null;
            items.forEach((h) => placed.add(h.slug));

            return (
              <section key={cat.key} style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1.25rem", fontSize: "1.35rem" }}>
                  {cat.label}
                </h2>
                <div className="tips-grid">
                  {items.map((item) => (
                    <TipCard
                      key={item.slug}
                      basePath="/how-to"
                      tip={{
                        title: item.title,
                        slug: item.slug,
                        desc: item.description,
                        image: item.image,
                      }}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {/* Overige artikelen die niet in een categorie vallen */}
          {allHowtos.filter((h) => !placed.has(h.slug)).length > 0 && (
            <section style={{ marginBottom: "3rem" }}>
              <h2 style={{ marginBottom: "1.25rem", fontSize: "1.35rem" }}>
                Meer handleidingen
              </h2>
              <div className="tips-grid">
                {allHowtos
                  .filter((h) => !placed.has(h.slug))
                  .map((item) => (
                    <TipCard
                      key={item.slug}
                      basePath="/how-to"
                      tip={{
                        title: item.title,
                        slug: item.slug,
                        desc: item.description,
                        image: item.image,
                      }}
                    />
                  ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
