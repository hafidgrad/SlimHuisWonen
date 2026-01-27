import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme stekkers (2026) – onze aanraders",
  description:
    "Zoek je de beste slimme stekker? Bekijk onze aanraders met en zonder energiemeting, voor Wi-Fi en Zigbee. Duidelijke keuzes, zonder spam.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-stekkers",
  },
};

export default function BesteSlimmeStekkersKoopgidsPage() {
  const guide = {
    title: "Beste slimme stekkers (2026)",
    intro:
      "Een slimme stekker is een makkelijke manier om apparaten slim te maken en energie te besparen. In deze koopgids laten we je onze beste keuzes zien per situatie.",
    image: "/images/blog/beste-slimme-stekkers.png",
    whatToLookFor: [
      "Energieverbruik meten (watt / kWh)",
      "Wi-Fi of Zigbee (met of zonder hub)",
      "Maximaal vermogen (voor zware apparaten)",
      "Compatibiliteit met Homey / Home Assistant",
    ],
    picks: [
      {
        title: "Beste overall (Wi-Fi + energiemeting): TP-Link Tapo P110",
        description:
          "Betaalbare slimme stekker met energiemeting. Ideaal om verbruik te monitoren en makkelijk te starten zonder hub.",
        image: "/images/products/tapo-p110.png",
        href: "/producten/tapo-p110",
        badges: ["Beste keuze", "Energieverbruik"],
      },
      {
        title: "Beste voor energie-inzicht: HomeWizard Energy Socket",
        description:
          "Perfect als je serieus inzicht wilt in stroomverbruik en wilt koppelen aan HomeWizard Energy.",
        image: "/images/products/homewizard-energy-socket.png",
        href: "/producten/homewizard-energy-socket",
        badges: ["Energie-inzicht", "Monitoring"],
      },
      {
        title: "Beste Zigbee stekker: Aqara / IKEA",
        description:
          "Zigbee stekkers zijn stabieler in grotere smart homes en ideaal in combinatie met een hub zoals Homey of Home Assistant.",
        image: "/images/products/aqara-smart-plug.png",
        href: "/producten/aqara-smart-plug",
        badges: ["Zigbee", "Stabiel"],
      },
      {
        title: "Beste budget stekker: Tapo P100",
        description:
          "Geen energiemeting, maar wel goedkoop en simpel. Prima keuze voor lampen of kleine apparaten.",
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
            Alleen stekkers die logisch zijn voor hun prijs en gebruik.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <h2>Veelgestelde vragen</h2>
          <h3>Heb ik een hub nodig?</h3>
          <p>
            Wi-Fi stekkers werken zonder hub. Zigbee stekkers hebben meestal een
            hub nodig, maar zijn stabieler bij meerdere apparaten.
          </p>

          <h3>Is energiemeting nuttig?</h3>
          <p>
            Ja. Je ziet precies welke apparaten stroom verbruiken en kunt
            automatiseringen maken om te besparen.
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
              </Link>
            </li>
            <li>
              <Link href="/tips/beginnen-met-smart-home">
                Beginnen met smart home
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
