import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme sensoren (2026) – onze aanraders",
  description:
    "De beste slimme sensoren voor je smart home. Bekijk onze aanraders voor beweging, deuren/ramen, temperatuur en aanwezigheid.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-sensoren",
  },
};

export default function BesteSlimmeSensorenKoopgidsPage() {
  const guide = {
    title: "Beste slimme sensoren (2026)",
    intro:
      "Slimme sensoren vormen de basis van een écht slim huis. Ze zorgen voor automatiseringen, energiebesparing en beveiliging. In deze koopgids vind je onze beste keuzes per type sensor.",
    image: "/images/blog/beste-slimme-sensoren.png",
    whatToLookFor: [
      "Type sensor (beweging, deur/raam, temperatuur, aanwezigheid)",
      "Protocol: Zigbee, Thread, Wi-Fi",
      "Batterijduur en betrouwbaarheid",
      "Lokale werking via hub",
      "Compatibiliteit met Homey / Home Assistant",
    ],
    picks: [
      {
        title: "Beste allround sensoren: Aqara",
        description:
          "Uitstekende prijs-kwaliteit, zeer stabiel en breed inzetbaar. Aqara sensoren werken perfect met Homey en Home Assistant.",
        image: "/images/products/aqara-motion-sensor.png",
        href: "/producten/aqara-motion-sensor",
        badges: ["Beste keuze", "Zigbee"],
      },
      {
        title: "Beste aanwezigheidssensor: Aqara FP2",
        description:
          "Detecteert aanwezigheid extreem nauwkeurig (mmWave). Ideaal voor verlichting en automatiseringen zonder valse triggers.",
        image: "/images/products/aqara-fp2.png",
        href: "/producten/aqara-fp2-aanwezigheidssensor",
        badges: ["Aanwezigheid", "Geavanceerd"],
      },
      {
        title: "Beste temperatuur & klimaat: Eve Weather",
        description:
          "Premium sensor met focus op privacy. Werkt via Thread en HomeKit, lokaal en zonder cloud.",
        image: "/images/products/eve-weather.png",
        href: "/producten/eve-weather",
        badges: ["Klimaat", "Thread"],
      },
      {
        title: "Beste budget sensor (Wi-Fi): Tapo",
        description:
          "Eenvoudige en betaalbare sensoren zonder hub. Ideaal om laagdrempelig te starten.",
        image: "/images/products/tapo-sensor.png",
        href: "/producten/tapo-sensor",
        badges: ["Budget", "Wi-Fi"],
      },
      {
        title: "Beste premium sensoren: Eve",
        description:
          "Hoogwaardige sensoren met focus op privacy, lokale verwerking en Matter/Thread-ondersteuning.",
        image: "/images/products/eve-door-window.png",
        href: "/producten/eve-door-window",
        badges: ["Premium", "Privacy"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Compacte koopgids hero */}
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

          {/* ✅ Koopgids hero – vaste hoogte */}
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
            Alleen sensoren die betrouwbaar zijn en in de praktijk goed werken.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <h2>Gerelateerde koopgidsen</h2>
          <ul>
            <li>
              <Link href="/aanraders/beste-slimme-camera">
                Beste slimme camera
              </Link>
            </li>
            <li>
              <Link href="/aanraders/beste-slimme-deurbel">
                Beste slimme deurbel
              </Link>
            </li>
            <li>
              <Link href="/aanraders/beste-smart-home-hub">
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
