import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme verlichting (2026) – onze aanraders",
  description:
    "Op zoek naar de beste slimme verlichting? Bekijk onze aanraders voor Philips Hue, IKEA, Tapo en Govee. Duidelijke keuzes, zonder spam.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-verlichting",
  },
};

export default function BesteSlimmeVerlichtingKoopgidsPage() {
  const guide = {
    title: "Beste slimme verlichting (2026)",
    intro:
      "Wil je slimme verlichting kopen maar twijfel je tussen Hue, IKEA, Tapo of Govee? In deze koopgids geven we je onze beste keuzes per situatie – kort, eerlijk en zonder verkooppraat.",
    image: "/images/blog/beste-slimme-verlichting.png",
    whatToLookFor: [
      "Wi-Fi of Zigbee (met of zonder hub)",
      "Stabiliteit bij meerdere lampen",
      "Sfeer (kleur, scenes, LED-strips)",
      "Uitbreiden met sensoren en schakelaars",
      "Compatibiliteit met Homey / Home Assistant",
    ],
    picks: [
      {
        title: "Beste totaalpakket: Philips Hue",
        description:
          "De meest stabiele slimme verlichting met het beste ecosysteem. Ideaal als je later wilt uitbreiden met sensoren, schakelaars en automatiseringen.",
        image: "/images/products/philips-hue-white-ambiance.png",
        href: "/producten/philips-hue-white-ambiance-starterkit",
        badges: ["Beste keuze", "Meest stabiel"],
      },
      {
        title: "Beste budget Zigbee: IKEA Tradfri / Innr",
        description:
          "Wil je Zigbee maar niet de hoofdprijs betalen? IKEA en Innr zijn goede alternatieven die prima werken met hubs zoals Homey en Home Assistant.",
        image: "/images/products/innr-zigbee-e27.png",
        href: "/producten/innr-zigbee-e27",
        badges: ["Budget", "Zigbee"],
      },
      {
        title: "Beste zonder hub: Tapo (Wi-Fi)",
        description:
          "Perfect om goedkoop te starten zonder extra hub. Simpel in gebruik, ideaal voor één of twee ruimtes.",
        image: "/images/products/tapo-l510e.png",
        href: "/producten/tapo-l510e",
        badges: ["Goedkoop", "Geen hub"],
      },
      {
        title: "Beste Wi-Fi kleur: Tapo L530E",
        description:
          "Wil je kleurverlichting zonder hub? Deze Tapo lampen bieden veel functies voor een scherpe prijs.",
        image: "/images/products/tapo-l530e.png",
        href: "/producten/tapo-l530e",
        badges: ["Kleur", "Wi-Fi"],
      },
      {
        title: "Beste LED strips & sfeer: Govee",
        description:
          "Voor sfeer en LED-strips is Govee ijzersterk. Veel effecten, muzieksync en aantrekkelijk geprijsd.",
        image: "/images/products/govee-rgbic-ledstrip.png",
        href: "/producten/govee-rgbic-ledstrip",
        badges: ["LED strips", "Sfeer"],
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

          {/* Context links */}
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
            We houden het overzichtelijk: alleen producten die logisch zijn voor
            hun prijs en gebruikssituatie.
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
            Wi-Fi lampen werken vaak zonder hub. Zigbee-lampen (zoals Hue of IKEA)
            hebben meestal een hub of bridge nodig, maar zijn stabieler bij grotere setups.
          </p>

          <h3>Wat is beter: Wi-Fi of Zigbee?</h3>
          <p>
            Voor kleine setups is Wi-Fi prima. Voor meerdere lampen en
            automatiseringen is Zigbee vaak betrouwbaarder.
          </p>

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
