import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme stekkers (2026) – onze aanraders",
  description:
    "Op zoek naar de beste slimme stekker? Bekijk onze aanraders met en zonder energiemeting, voor Home Assistant, Homey en beginners.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-stekkers",
  },
};

export default function BesteSlimmeStekkersKoopgidsPage() {
  const guide = {
    title: "Beste slimme stekkers (2026)",
    intro:
      "Met een slimme stekker maak je bestaande apparaten in één klap slim. Maar kies je voor Wi-Fi of Zigbee? Met of zonder energiemeting? In deze koopgids zetten we onze beste keuzes op een rij.",
    image: "/images/blog/beste-slimme-stekkers.png",
    whatToLookFor: [
      "Wi-Fi of Zigbee (met of zonder hub)",
      "Energieverbruik meten",
      "Betrouwbaarheid bij automatiseringen",
      "Compatibiliteit met Home Assistant / Homey",
      "Fysieke knop & formaat (past hij naast andere stekkers?)",
    ],
    picks: [
      {
        title: "Beste totaalpakket: TP-Link Tapo P110",
        description:
          "Betrouwbare Wi-Fi stekker met energiemeting. Ideaal voor beginners en eenvoudig te koppelen aan Home Assistant.",
        image: "/images/products/tapo-p110.png",
        href: "/producten/tapo-p110",
        badges: ["Beste keuze", "Energieverbruik"],
      },
      {
        title: "Beste Zigbee stekker: Aqara Smart Plug",
        description:
          "Zeer stabiele Zigbee-stekker voor gebruik met Homey, Home Assistant of Aqara Hub.",
        image: "/images/products/aqara-smart-plug.png",
        href: "/producten/aqara-smart-plug",
        badges: ["Zigbee", "Stabiel"],
      },
      {
        title: "Beste voor Home Assistant: HomeWizard Energy Socket",
        description:
          "Perfect voor wie energieverbruik serieus wil monitoren en lokaal wil automatiseren.",
        image: "/images/products/homewizard-energy-socket.png",
        href: "/producten/homewizard-energy-socket",
        badges: ["Home Assistant", "Energiemeting"],
      },
      {
        title: "Beste budget stekker: TP-Link Tapo P100",
        description:
          "Geen energiemeting, wel betrouwbaar en goedkoop. Ideaal voor simpele automatiseringen.",
        image: "/images/products/tapo-p100.png",
        href: "/producten/tapo-p100",
        badges: ["Budget", "Wi-Fi"],
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
            Handig om te lezen:{" "}
            <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link> •{" "}
            <Link href="/aanraders/beste-smart-home-hub">
              Beste smart home hub
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
            Alleen slimme stekkers die betrouwbaar zijn en logisch voor hun
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
              <Link href="/blog/beste-slimme-verlichting">
                Beste slimme verlichting
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/tips/slim-huis-energie-besparen">
                Slim energie besparen
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
