import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme deurbel (2026) – onze aanraders",
  description:
    "De beste slimme deurbellen van dit moment. Bekijk onze aanraders voor bedraad, accu, zonder abonnement en smart home integraties.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-deurbel",
  },
};

export default function BesteSlimmeDeurbelKoopgidsPage() {
  const guide = {
    title: "Beste slimme deurbel (2026)",
    intro:
      "Een slimme deurbel zorgt voor extra veiligheid en gemak, maar de juiste keuze hangt sterk af van je woning en wensen. In deze koopgids zetten we onze beste aanraders per situatie overzichtelijk op een rij.",
    image: "/images/blog/beste-slimme-deurbel.png",
    whatToLookFor: [
      "Bedraad of op accu",
      "Wel of geen abonnement",
      "Lokale opslag vs cloud",
      "Beeldkwaliteit & nachtzicht",
      "Integratie met Home Assistant / Homey",
    ],
    picks: [
      {
        title: "Beste bedrade slimme deurbel: Google Nest Doorbell",
        description:
          "Altijd online, stabiel en scherpe beeldkwaliteit. Ideaal als je bestaande bedrading hebt en maximale betrouwbaarheid wilt.",
        image: "/images/products/google-nest-doorbell-wired.png",
        href: "/producten/google-nest-doorbell-wired",
        badges: ["Bedraad", "Meest stabiel"],
      },
      {
        title: "Beste slimme deurbel op accu: Ring Battery Doorbell Plus",
        description:
          "Makkelijk te installeren zonder bedrading. Goede app en veel functies, maar wel een abonnement voor volledige functionaliteit.",
        image: "/images/products/ring-battery-doorbell-plus.png",
        href: "/producten/ring-battery-doorbell-plus",
        badges: ["Accu", "Populair"],
      },
      {
        title: "Beste zonder abonnement: Eufy Video Doorbell",
        description:
          "Slaat beelden lokaal op en werkt zonder maandelijkse kosten. Goede keuze als privacy belangrijk is.",
        image: "/images/products/eufy-video-doorbell.png",
        href: "/producten/eufy-video-doorbell",
        badges: ["Geen abonnement", "Lokale opslag"],
      },
      {
        title: "Beste voor smart home integratie: Tapo Video Doorbell",
        description:
          "Betaalbare deurbel die goed samenwerkt met Home Assistant en andere smart home platforms.",
        image: "/images/products/tapo-video-doorbell.png",
        href: "/producten/tapo-video-doorbell",
        badges: ["Smart home", "Wi-Fi"],
      },
      {
        title: "Beste premium & privacy: Netatmo Smart Video Doorbell",
        description:
          "Bedrade deurbel met lokale opslag en sterke focus op privacy. Geen abonnement, wel een hogere prijs.",
        image: "/images/products/netatmo-smart-video-doorbell.png",
        href: "/producten/netatmo-smart-video-doorbell",
        badges: ["Premium", "Privacy"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ VASTE KOOPGIDS HERO (geen mega image) */}
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
            Keuzehulp:{" "}
            <Link href="/blog/beste-slimme-deurbel">
              waar moet je op letten bij een slimme deurbel?
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
            Alleen slimme deurbellen die betrouwbaar zijn en logisch voor hun
            gebruikssituatie.
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
              <Link href="/aanraders/beste-slimme-camera">
                Beste slimme camera
              </Link>
            </li>
            <li>
              <Link href="/tips/slim-huis-beveiligen">
                Slim huis beveiligen
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
