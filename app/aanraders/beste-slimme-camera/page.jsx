import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme camera (2026) – onze aanraders",
  description:
    "Op zoek naar de beste slimme camera? Bekijk onze aanraders voor binnen, buiten, PoE en privacyvriendelijke oplossingen.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-camera",
  },
};

export default function BesteSlimmeCameraKoopgidsPage() {
  const guide = {
    title: "Beste slimme camera (2026)",
    image: "/images/blog/beste-slimme-camera.png",
    intro:
      "Een slimme camera verhoogt je veiligheid, maar alleen als je de juiste kiest. In deze koopgids vind je onze beste keuzes voor binnen, buiten en maximale betrouwbaarheid.",
    picks: [
      {
        title: "Beste binnencamera (totaalpakket): Eufy Indoor Cam",
        description:
          "Betaalbare binnencamera met lokale opslag, goede beeldkwaliteit en geen verplicht abonnement.",
        image: "/images/products/eufy-indoor-cam.png",
        href: "/producten/eufy-indoor-cam",
        badges: ["Beste keuze", "Geen abonnement"],
      },
      {
        title: "Beste buitencamera (Wi-Fi): Eufy Solo Outdoor",
        description:
          "Weerbestendige camera met accu en lokale opslag. Ideaal als je geen kabel wilt trekken.",
        image: "/images/products/eufy-solo-outdoor.png",
        href: "/producten/eufy-solo-outdoor-cam",
        badges: ["Buiten", "Accu"],
      },
      {
        title: "Beste PoE camera: Reolink PoE Camera",
        description:
          "Bekabelde camera met maximale stabiliteit en lokale opslag via NVR. Geen wifi-problemen.",
        image: "/images/products/reolink-poe-camera.png",
        href: "/producten/reolink-poe-camera",
        badges: ["PoE", "Maximale stabiliteit"],
      },
      {
        title: "Beste budget camera: TP-Link Tapo C200",
        description:
          "Goede Wi-Fi camera voor binnen met verrassend veel functies voor de prijs.",
        image: "/images/products/tapo-c200.png",
        href: "/producten/tapo-c200",
        badges: ["Budget", "Wi-Fi"],
      },
      {
        title: "Beste privacyvriendelijke camera: Eve Cam",
        description:
          "Premium binnencamera met focus op privacy en lokale verwerking via HomeKit Secure Video.",
        image: "/images/products/eve-cam.png",
        href: "/producten/eve-cam",
        badges: ["Privacy", "HomeKit"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
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
            Alleen camera’s die betrouwbaar zijn en logisch voor hun gebruikssituatie.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <p>
            Twijfel je nog? Lees ook{" "}
            <Link href="/blog/beste-slimme-camera">
              waar je op moet letten bij slimme camera’s
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
