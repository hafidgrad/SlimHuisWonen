import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme sensoren (2026) – onze aanraders",
  description:
    "Op zoek naar de beste slimme sensoren? Bekijk onze aanraders voor beweging, deuren, temperatuur en waterdetectie. Duidelijke keuzes, zonder spam.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-sensoren",
  },
};

export default function BesteSlimmeSensorenKoopgidsPage() {
  const guide = {
    title: "Beste slimme sensoren (2026)",
    intro:
      "Slimme sensoren vormen de basis van een écht slim huis. In deze koopgids laten we je onze beste keuzes zien voor beweging, aanwezigheid, klimaat en beveiliging.",
    image: "/images/blog/beste-slimme-sensoren.png",
    whatToLookFor: [
      "Type sensor (beweging, deur/raam, temperatuur, water)",
      "Protocol: Zigbee, Thread/Matter of Wi-Fi",
      "Batterijduur en betrouwbaarheid",
      "Integratie met Homey / Home Assistant",
    ],
    picks: [
      {
        title: "Beste aanwezigheidssensor: Aqara FP2",
        description:
          "Geavanceerde aanwezigheidssensor die zones herkent. Perfect voor slimme verlichting en automatiseringen zonder valse triggers.",
        image: "/images/products/aqara-fp2.png",
        href: "/producten/aqara-fp2-aanwezigheidssensor",
        badges: ["Beste keuze", "Aanwezigheid"],
      },
      {
        title: "Beste bewegingssensor (Zigbee): Aqara Motion",
        description:
          "Betrouwbare en betaalbare bewegingssensor. Ideaal voor verlichting, beveiliging en routines.",
        image: "/images/products/aqara-motion-sensor.png",
        href: "/producten/aqara-motion-sensor",
        badges: ["Zigbee", "Betrouwbaar"],
      },
      {
        title: "Beste deur/raamsensor: Aqara Door & Window",
        description:
          "Compacte sensor voor deuren en ramen. Handig voor beveiliging en slimme verwarmingsregels.",
        image: "/images/products/aqara-door-window.png",
        href: "/producten/aqara-door-window-sensor",
        badges: ["Deur & raam", "Zigbee"],
      },
      {
        title: "Beste klimaat sensor: Aqara Temp & Humidity",
        description:
          "Meet temperatuur en luchtvochtigheid. Ideaal voor comfort en energiebesparing.",
        image: "/images/products/aqara-temp-humidity.png",
        href: "/producten/aqara-temperature-humidity",
        badges: ["Klimaat", "Energie besparen"],
      },
      {
        title: "Beste waterleksensor: Aqara Water Leak",
        description:
          "Waarschuwt direct bij lekkage. Onmisbaar bij wasmachine, vaatwasser of cv-ketel.",
        image: "/images/products/aqara-water-leak.png",
        href: "/producten/aqara-water-leak-sensor",
        badges: ["Waterlek", "Beveiliging"],
      },
      {
        title: "Beste Matter/Thread sensor: Eve Motion",
        description:
          "Premium sensor met Matter & Thread. Werkt lokaal en perfect binnen Apple / Matter-ecosystemen.",
        image: "/images/products/eve-motion.png",
        href: "/producten/eve-motion",
        badges: ["Matter", "Thread"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* Hero */}
          <div
            className="blogBanner"
            style={{ "--blog-bg": `url(${guide.image})` }}
          >
            <div
              className="blogBannerBlur blogBannerBlurLeft"
              style={{ backgroundImage: "var(--blog-bg)" }}
            />
            <div
              className="blogBannerBlur blogBannerBlurRight"
              style={{ backgroundImage: "var(--blog-bg)" }}
            />
            <div className="blogBannerInner">
              <Image
                src={guide.image}
                alt={guide.title}
                width={1400}
                height={520}
                priority
                className="blogBannerImg"
              />
            </div>
          </div>

          {/* Context */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Handig om te lezen:{" "}
            <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link> •{" "}
            <Link href="/blog/beste-smart-home-hub">Beste smart home hub</Link> •{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren
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
            Alleen sensoren die zich in de praktijk bewezen hebben.
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
              <Link href="/tips/slim-huis-beveiligen">
                Slim huis beveiligen
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-matter">
                Wat is Matter?
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
