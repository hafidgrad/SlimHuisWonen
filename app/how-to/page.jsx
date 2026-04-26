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
    label: "Beginnen",
    key: "beginnen",
    slugs: [
      "beginnen-met-smart-home",
      "slimme-verlichting-installeren",
      "smart-home-hub-installeren",
    ],
  },
  {
    label: "Automatiseringen",
    key: "automatisering",
    slugs: [
      "lamp-automatisch-aan-bij-beweging",
      "bewegingssensor-instellen",
      "homey-automatisering-maken",
      "hoe-maak-je-automatisering-home-assistant",
      "hoe-verbind-je-zigbee-apparaten",
    ],
  },
  {
    label: "Problemen oplossen",
    key: "problemen",
    slugs: [
      "slimme-verlichting-koppelen-lukt-niet",
      "smart-home-zonder-hub-instellen",
      "slimme-stekker-instellen",
      "hoe-stel-je-een-slimme-stekker-in-met-schema",
    ],
  },
  {
    label: "Beveiliging & Netwerk",
    key: "beveiliging",
    slugs: [
      "slim-huis-beveiligen",
      "wifi-verbeteren-voor-smart-home",
      "hoe-installeer-je-een-slimme-deurbel",
      "hoe-installeer-je-een-tapo-camera",
    ],
  },
];

const howtoCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "How To Smart Home | SlimHuisWonen",
  description: "Stap-voor-stap handleidingen voor je smart home. Duidelijke uitleg zonder technisch gedoe voor Homey, Home Assistant en meer.",
  url: "https://slimhuiswonen.nl/how-to",
};

export default function HowToPage() {
  const allHowtos = (Array.isArray(howtoData) ? howtoData : []).filter(
    (h) => h?.available
  );

  const bySlug = Object.fromEntries(allHowtos.map((h) => [h.slug, h]));
  const placed = new Set();

  const headerImg = "/images/banner_how-to.png";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoCollectionSchema) }}
      />
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
