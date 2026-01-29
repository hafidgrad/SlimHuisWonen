import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste smart home hub (2026) – onze aanraders",
  description:
    "De beste smart home hubs van dit moment. Bekijk onze aanraders voor beginners, power users en Samsung-gebruikers.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-smart-home-hub",
  },
};

export default function BesteSmartHomeHubKoopgidsPage() {
  const guide = {
    title: "Beste smart home hub (2026)",
    intro:
      "Een smart home hub is het hart van je slimme huis. De juiste keuze hangt af van hoeveel controle je wilt, hoeveel tijd je erin steekt en welke merken je gebruikt.",
    image: "/images/blog/beste-smart-home-hub.png",
    whatToLookFor: [
      "Ondersteuning voor Zigbee, Z-Wave en Matter",
      "Lokale automatiseringen vs cloud",
      "Gebruiksgemak vs flexibiliteit",
      "Integraties met merken (Hue, Aqara, Tapo, IKEA)",
      "Geschikt voor beginners of power users",
    ],
    picks: [
      {
        title: "Beste allround hub: Homey Pro",
        description:
          "Gebruiksvriendelijk én krachtig. Ondersteunt Zigbee, Z-Wave, Matter en Wi-Fi met sterke automatiseringen zonder technisch gedoe.",
        image: "/images/products/homey-pro.png",
        href: "/producten/homey-pro-early-2023",
        badges: ["Beste keuze", "Allround"],
      },
      {
        title: "Beste voor power users: Home Assistant",
        description:
          "Maximale controle en alles lokaal. Perfect als je graag tweakt en volledige vrijheid wilt — wel meer leercurve.",
        image: "/images/products/home-assistant-green.png",
        href: "/producten/home-assistant-green",
        badges: ["Power users", "Lokaal"],
      },
      {
        title: "Beste voor Samsung-gebruikers: SmartThings Hub",
        description:
          "Ideaal als je al veel Samsung-apparaten gebruikt. Makkelijk in gebruik, maar minder diep dan Homey of Home Assistant.",
        image: "/images/products/samsung-smartthings-hub.png",
        href: "/producten/samsung-smartthings-hub",
        badges: ["Samsung", "Gebruiksgemak"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ VASTE KOOPGIDS HERO (compact, geen mega image) */}
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
            <Link href="/blog/beste-smart-home-hub">
              welke smart home hub past bij jou?
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
            Alleen hubs die logisch zijn voor hun doelgroep en betrouwbaar werken
            in de praktijk.
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
              <Link href="/aanraders/beste-slimme-verlichting">
                Beste slimme verlichting
              </Link>
            </li>
            <li>
              <Link href="/aanraders/beste-slimme-sensoren">
                Beste slimme sensoren
              </Link>
            </li>
            <li>
              <Link href="/blog/home-assistant-vs-homey">
                Home Assistant vs Homey
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
