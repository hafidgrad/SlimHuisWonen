import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme verlichting (2026) – onze aanraders",
  description:
    "Op zoek naar de beste slimme verlichting? Bekijk onze aanraders voor Philips Hue, IKEA, Tapo en Govee. Helder, eerlijk en praktisch.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-verlichting",
  },
};

export default function BesteSlimmeVerlichtingKoopgidsPage() {
  const guide = {
    title: "Beste slimme verlichting (2026)",
    intro:
      "Slimme verlichting is vaak de eerste stap naar een smart home. Maar kies je voor Hue, IKEA, Tapo of Govee? In deze koopgids geven we onze beste keuzes per situatie.",
    image: "/images/blog/beste-slimme-verlichting.png",
    whatToLookFor: [
      "Wi-Fi of Zigbee (met of zonder hub)",
      "Stabiliteit bij meerdere lampen",
      "Kleur, scènes en sfeer",
      "Uitbreiden met sensoren en schakelaars",
      "Compatibiliteit met Homey / Home Assistant",
    ],
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
        title: "Beste budget Zigbee: IKEA / Innr",
        description:
          "Zigbee-verlichting voor een lagere prijs. Werkt goed met hubs zoals Homey en Home Assistant.",
        image: "/images/products/innr-zigbee-e27.png",
        href: "/producten/innr-zigbee-e27",
        badges: ["Budget", "Zigbee"],
      },
      {
        title: "Beste zonder hub: Tapo (Wi-Fi)",
        description:
          "Ideaal om goedkoop te starten zonder extra hub. Simpel in gebruik voor één of twee ruimtes.",
        image: "/images/products/tapo-l510e.png",
        href: "/producten/tapo-l510e",
        badges: ["Geen hub", "Wi-Fi"],
      },
      {
        title: "Beste Wi-Fi kleur: Tapo L530E",
        description:
          "Betaalbare kleurverlichting zonder hub, met verrassend veel functies.",
        image: "/images/products/tapo-l530e.png",
        href: "/producten/tapo-l530e",
        badges: ["Kleur", "Wi-Fi"],
      },
      {
        title: "Beste LED-strips & sfeer: Govee",
        description:
          "Sterk in sfeer, lichteffecten en LED-strips. Veel functies voor een scherpe prijs.",
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
            Alleen verlichting die logisch is qua prijs, stabiliteit en
            uitbreidbaarheid.
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
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub
              </Link>
            </li>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
