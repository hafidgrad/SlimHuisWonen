import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Koopgids template – SlimHuisWonen",
  description:
    "Template voor koopgidsen op SlimHuisWonen: structuur, productblokken en interne links.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/template",
  },
};

export default function KoopgidsTemplatePage() {
  // ✅ Vervang later per koopgids
  const guide = {
    title: "Koopgids: [Onderwerp invullen]",
    intro:
      "In deze koopgids helpen we je kiezen. We leggen kort uit waar je op moet letten en geven daarna onze beste keuzes (zonder spam).",
    image: "/images/blog/beste-smart-home-hub.png", // tijdelijke placeholder
    whatToLookFor: [
      "Compatibiliteit (Hue/Aqara/Tapo, Homey, Home Assistant, Google/Alexa/Apple)",
      "Protocol: Zigbee / Matter / Wi-Fi (en of je een hub nodig hebt)",
      "Betrouwbaarheid en lokale werking",
      "Prijs en uitbreidbaarheid",
    ],
    picks: [
      {
        title: "Beste overall: [Product 1]",
        description:
          "Korte reden waarom dit de beste keuze is (1–2 zinnen). Denk aan stabiliteit, ecosysteem en prijs/kwaliteit.",
        image: "/images/products/placeholder.png",
        href: "/producten/slug-van-product-1",
        badges: ["Beste keuze", "Meest compleet"],
      },
      {
        title: "Beste budget: [Product 2]",
        description:
          "Voor wie vooral betaalbaar wil starten zonder gedoe. 1–2 zinnen met concrete voordelen.",
        image: "/images/products/placeholder.png",
        href: "/producten/slug-van-product-2",
        badges: ["Budget", "Makkelijk starten"],
      },
      {
        title: "Beste voor power users: [Product 3]",
        description:
          "Voor geavanceerde setups. 1–2 zinnen met focus op flexibiliteit/automatiseringen.",
        image: "/images/products/placeholder.png",
        href: "/producten/slug-van-product-3",
        badges: ["Power users", "Max controle"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Hero/cover */}
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

          {/* ✅ Mini breadcrumb / interne links */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Handig om te lezen:{" "}
            <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
              Zigbee vs Z-Wave vs Matter vs Wi-Fi
            </Link>{" "}
            •{" "}
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
            We houden het overzichtelijk: alleen keuzes die we logisch vinden,
            met een korte reden erbij.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <h2>Veelgestelde vragen</h2>
          <h3>Heb je een hub nodig?</h3>
          <p>
            Dat hangt af van het type product. Voor Zigbee heb je meestal een
            hub/bridge nodig. Voor Wi-Fi vaak niet. Matter kan via Wi-Fi of
            Thread werken (soms met border router).
          </p>

          <h3>Hoe kies ik de juiste optie?</h3>
          <p>
            Kies op basis van je platform (Homey/Home Assistant/Google/Apple),
            je protocollen (Zigbee/Matter/Wi-Fi) en hoeveel je later wilt
            uitbreiden.
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/blog/wat-is-matter">Wat is Matter?</Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub (keuzehulp)
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
