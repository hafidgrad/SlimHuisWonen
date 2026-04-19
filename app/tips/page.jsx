import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipCard from "@/components/TipCard";
import Image from "next/image";
import { getAllTips } from "@/data/tips";

export const metadata = {
  title: "Tips & Uitleg",
  description:
    "Praktische tips en uitleg over slimme verlichting, sensoren, hubs en netwerken. Begrijp hoe je smart home werkt en voorkom miskopen.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips",
  },
};

const CATEGORIES = [
  {
    label: "Beginnen met smart home",
    key: "beginnen",
    slugs: [
      "beginnen-met-smart-home",
      "wat-is-een-smart-home-hub",
      "merken-combineren-zonder-gedoe",
      "slim-huis-zonder-hub",
    ],
  },
  {
    label: "Verlichting",
    key: "verlichting",
    slugs: [
      "wat-is-slimme-verlichting",
      "beginnen-met-slimme-verlichting",
      "slimme-verlichting-werkt-niet-na-stroomuitval",
      "slimme-lamp-werkt-niet-met-schakelaar",
    ],
  },
  {
    label: "Beveiliging & Privacy",
    key: "beveiliging",
    slugs: [
      "slim-huis-beveiligen",
      "slimme-camera-uitleg",
      "slimme-deurbel-uitleg",
      "privacy-en-veiligheid-smart-home",
    ],
  },
  {
    label: "Netwerk & Wifi",
    key: "wifi",
    slugs: [
      "wifi-verbeteren-voor-smart-home",
      "2-4ghz-vs-5ghz-smart-home",
      "smart-home-apparaat-koppelt-niet-wifi",
      "wifi-bereik-verbeteren-zonder-nieuwe-router",
    ],
  },
  {
    label: "Sensoren & Energie",
    key: "sensoren",
    slugs: [
      "slimme-sensoren-uitleg",
      "energie-besparen-met-smart-home",
    ],
  },
];

export default function TipsPage() {
  const allTips = getAllTips();
  const bySlug = Object.fromEntries(allTips.map((t) => [t.slug, t]));
  const placed = new Set();

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <div
            className="blogBanner"
            style={{ "--blog-bg": "url(/images/banner_tips_uitleg.png)" }}
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
                src="/images/banner_tips_uitleg.png"
                alt="Tips & uitleg smart home"
                fill
                priority
                className="blogBannerImg"
                sizes="100vw"
              />
            </div>
          </div>

          <h1 style={{ fontSize: 42, marginBottom: 8 }}>Tips & Uitleg</h1>

          <p className="section-intro">
            Korte, praktische tips om je smart home stabieler, veiliger en slimmer te maken.
            Van beginnersgids tot wifi-problemen oplossen — gegroepeerd per onderwerp.
          </p>

          {CATEGORIES.map((cat) => {
            const items = cat.slugs.map((s) => bySlug[s]).filter(Boolean);
            if (!items.length) return null;
            items.forEach((t) => placed.add(t.slug));

            return (
              <section key={cat.key} style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1.25rem", fontSize: "1.35rem" }}>
                  {cat.label}
                </h2>
                <div className="tips-grid">
                  {items.map((item) => (
                    <TipCard
                      key={item.slug}
                      basePath="/tips"
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

          {allTips.filter((t) => !placed.has(t.slug)).length > 0 && (
            <section style={{ marginBottom: "3rem" }}>
              <h2 style={{ marginBottom: "1.25rem", fontSize: "1.35rem" }}>
                Meer tips
              </h2>
              <div className="tips-grid">
                {allTips
                  .filter((t) => !placed.has(t.slug))
                  .map((item) => (
                    <TipCard
                      key={item.slug}
                      basePath="/tips"
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
