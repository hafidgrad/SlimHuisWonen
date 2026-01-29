import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
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
    intro:
      "Een slimme camera verhoogt je veiligheid, maar alleen als je de juiste kiest. In deze koopgids vind je onze beste keuzes voor binnen, buiten en maximale betrouwbaarheid.",
    image: "/images/blog/beste-slimme-camera.png",
    whatToLookFor: [
      "Binnen of buiten gebruik",
      "Wifi, accu of PoE (bekabeld)",
      "Lokale opslag vs cloud",
      "Privacy-instellingen en beveiliging",
      "Integratie met Homey / Home Assistant",
    ],
    picks: [
      {
        title: "Beste totaalpakket (binnen): Eufy Indoor Cam",
        description:
          "Betaalbare binnencamera met lokale opslag, goede beeldkwaliteit en geen verplicht abonnement.",
        image: "/images/products/eufy-indoor-cam.png",
        href: "/producten/eufy-indoor-cam",
        badges: ["Beste keuze", "Geen abonnement"],
      },
      {
        title: "Beste buitencamera (wifi): Eufy Solo Outdoor",
        description:
          "Weerbestendige camera met accu en lokale opslag. Ideaal als je geen kabel wilt trekken.",
        image: "/images/products/eufy-solo-outdoor.png",
        href: "/producten/eufy-solo-outdoor-cam",
        badges: ["Buiten", "Accu"],
      },
      {
        title: "Beste PoE camera: Reolink",
        description:
          "Bekabelde camera met hoge betrouwbaarheid en lokale opslag via NVR. Geen wifi-problemen.",
        image: "/images/products/reolink-poe-camera.png",
        href: "/producten/reolink-poe-camera",
        badges: ["PoE", "Maximale stabiliteit"],
      },
      {
        title: "Beste budget camera: Tapo C200",
        description:
          "Goede wifi-camera voor binnen met verrassend veel functies voor de prijs.",
        image: "/images/products/tapo-c200.png",
        href: "/producten/tapo-c200",
        badges: ["Budget", "Wi-Fi"],
      },
      {
        title: "Beste privacyvriendelijk: Eve Cam",
        description:
          "Premium binnencamera met focus op privacy en lokale verwerking (HomeKit Secure Video).",
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
          {/* ✅ VASTE KOOPGIDS HERO */}
          <div className="koopgids-hero">
            <Image
              src={guide.image}
              alt={guide.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Context */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Beveiliging:{" "}
            <Link href="/tips/slim-huis-beveiligen">Slim huis beveiligen</Link> •{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid
            </Link>
          </p>

          <h1>{guide.title}</h1>
          <p className="section-intro">{guide.intro}</p>

          <h2>Waar moet je op letten?</h2>
          <ul>
            {guide.whatToLookFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Onze aanraders</h2>
          <p className="muted">
            Alleen camera’s die betrouwbaar zijn en logisch voor hun gebruik.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/beste-slimme-deurbel">
                Beste slimme deurbel
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-slimme-sensoren">
                Beste slimme sensoren
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
