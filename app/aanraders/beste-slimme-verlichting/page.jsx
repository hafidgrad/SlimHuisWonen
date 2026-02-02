import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme verlichting (2026) – onze aanraders",
  description:
    "Op zoek naar de beste slimme verlichting? Bekijk onze aanraders voor Philips Hue, Innr, Tapo en Govee. Duidelijke keuzes, zonder spam.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-verlichting",
  },
};

export default function BesteSlimmeVerlichtingKoopgidsPage() {
  const guide = {
    title: "Beste slimme verlichting (2026)",
    image: "/images/blog/beste-slimme-verlichting.png",
    intro:
      "Wil je slimme verlichting kopen maar twijfel je tussen Hue, Tapo of Govee? In deze koopgids vind je onze beste keuzes per situatie en budget.",
    picks: [
      {
        title: "Beste totaalpakket: Philips Hue",
        description:
          "De meest stabiele slimme verlichting met het beste ecosysteem. Ideaal als je later wilt uitbreiden met sensoren en automatiseringen.",
        image: "/images/products/philips-hue-white-ambiance.png",
        href: "/producten/philips-hue-white-ambiance-starterkit",
        badges: ["Beste keuze", "Meest stabiel"],
      },
      {
        title: "Beste budget Zigbee verlichting: Innr",
        description:
          "Goede Zigbee-verlichting zonder de hoge prijs van Hue. Werkt uitstekend met Homey en Home Assistant.",
        image: "/images/products/innr-zigbee-e27.png",
        href: "/producten/innr-zigbee-e27",
        badges: ["Budget", "Zigbee"],
      },
      {
        title: "Beste zonder hub (Wi-Fi): Tapo L510E",
        description:
          "Perfect om goedkoop te starten zonder extra hub. Simpel, snel opgezet en betrouwbaar.",
        image: "/images/products/tapo-l510e.png",
        href: "/producten/tapo-l510e",
        badges: ["Goedkoop", "Geen hub"],
      },
      {
        title: "Beste Wi-Fi kleurverlichting: Tapo L530E",
        description:
          "Kleurverlichting zonder hub, met veel functies voor een scherpe prijs.",
        image: "/images/products/tapo-l530e.png",
        href: "/producten/tapo-l530e",
        badges: ["Kleur", "Wi-Fi"],
      },
      {
        title: "Beste LED-strips & sfeer: Govee",
        description:
          "Sterk in sfeer en lichteffecten. Ideaal voor tv, bureau of indirecte verlichting.",
        image: "/images/products/govee-rgbic-ledstrip.png",
        href: "/producten/govee-rgbic-ledstrip",
        badges: ["LED-strips", "Sfeer"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Consistente categorie-banner */}
          <div className="categorie-banner" style={{ marginBottom: "1.25rem" }}>
            <img
              src={guide.image}
              alt={guide.title}
              className="banner-img"
            />
          </div>

          <h1>{guide.title}</h1>
          <p className="section-intro">{guide.intro}</p>

          <h2>Onze aanraders</h2>
          <p className="muted">
            Alleen producten die logisch zijn voor hun prijs en gebruik.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <p>
            Wil je eerst weten waar je op moet letten? Lees ook{" "}
            <Link href="/blog/beste-slimme-verlichting">
              onze uitgebreide koopgids voor slimme verlichting
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
