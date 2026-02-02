import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme stekkers (2026) – onze aanraders",
  description:
    "Op zoek naar de beste slimme stekker? Bekijk onze aanraders met en zonder energiemeting, voor Wi-Fi en Zigbee smart homes.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-stekkers",
  },
};

export default function BesteSlimmeStekkersKoopgidsPage() {
  const guide = {
    title: "Beste slimme stekkers (2026)",
    image: "/images/blog/beste-slimme-stekkers.png",
    intro:
      "Een slimme stekker is vaak de makkelijkste manier om je huis slimmer te maken. In deze koopgids vind je onze beste keuzes voor energiemeting, stabiliteit en uitbreiden.",
    picks: [
      {
        title: "Beste totaalpakket (Wi-Fi): TP-Link Tapo P110",
        description:
          "Betaalbare slimme stekker met energiemeting. Ideaal om inzicht te krijgen in verbruik en eenvoudig te starten.",
        image: "/images/products/tapo-p110.png",
        href: "/producten/tapo-p110",
        badges: ["Beste keuze", "Energiemeting"],
      },
      {
        title: "Beste Zigbee stekker: Aqara Smart Plug",
        description:
          "Zeer stabiele Zigbee-stekker. Werkt via een Aqara hub en is perfect voor automatiseringen in HomeKit, Home Assistant of Homey.",
        image: "/images/products/aqara-smart-plug.png",
        href: "/producten/aqara-smart-plug",
        badges: ["Zigbee", "Stabiel"],
      },
      {
        title: "Beste inzicht in verbruik: HomeWizard Energy Socket",
        description:
          "Perfect als je energieverbruik wilt monitoren via een duidelijk dashboard.",
        image: "/images/products/homewizard-energy-socket.png",
        href: "/producten/homewizard-energy-socket",
        badges: ["Energie", "Inzicht"],
      },
      {
        title: "Beste Matter stekker: SwitchBot Matter Plug Mini",
        description:
          "Compacte slimme stekker met Matter-ondersteuning en energiemeting. Werkt met Apple Home, Google Home, Alexa en Home Assistant.",
        image: "/images/products/switchbot-matter-plug-mini.png",
        href: "/producten/switchbot-matter-plug-mini",
        badges: ["Matter", "Energiemeting"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <div className="categorie-banner" style={{ marginBottom: "1.25rem" }}>
            <img src={guide.image} alt={guide.title} className="banner-img" />
          </div>

          <h1>{guide.title}</h1>
          <p className="section-intro">{guide.intro}</p>

          <h2>Onze aanraders</h2>
          <p className="muted">
            Alleen slimme stekkers die logisch zijn voor hun prijs en gebruik.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <p>
            Meer uitleg nodig? Lees ook{" "}
            <Link href="/blog/beste-slimme-stekkers">
              onze uitgebreide koopgids over slimme stekkers
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
