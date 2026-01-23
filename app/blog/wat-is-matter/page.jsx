import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Wat is Matter? (uitleg + voordelen) – 2026",
  description:
    "Matter is dé nieuwe smart home standaard. Ontdek wat Matter is, hoe het werkt, wat je eraan hebt en of je nieuwe apparaten nodig hebt.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/wat-is-matter",
  },
};

export default function WatIsMatterPage() {
  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is Matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Matter is een smart home standaard waarmee apparaten van verschillende merken beter met elkaar samenwerken. Het doel is: minder gedoe, makkelijker koppelen en meer compatibiliteit.",
        },
      },
      {
        "@type": "Question",
        name: "Heb ik een hub nodig voor Matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Sommige Matter apparaten werken direct via je platform (bijv. Google Home, Apple Home, Alexa). In veel gevallen heb je wel een Matter controller nodig, vaak ingebouwd in een hub of speaker.",
        },
      },
      {
        "@type": "Question",
        name: "Is Matter hetzelfde als Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Zigbee is een draadloos protocol. Matter is een standaard die bepaalt hoe apparaten communiceren en samenwerken. Matter kan werken via Wi-Fi of Thread.",
        },
      },
      {
        "@type": "Question",
        name: "Werkt Matter met Philips Hue, Aqara en Tapo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Steeds meer merken ondersteunen Matter. Sommige werken via een update (bijv. via bridge/hub), anderen hebben nieuwe Matter-producten. Check altijd of een specifiek product Matter support heeft.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Blog banner met blur effect */}
          <div
            className="blogBanner"
            style={{ "--blog-bg": "url(/images/blog/wat-is-matter.png)" }}
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
                src="/images/blog/wat-is-matter.png"
                alt="Wat is Matter?"
                width={1400}
                height={520}
                priority
                className="blogBannerImg"
              />
            </div>
          </div>

          {/* ✅ Cluster navigatie */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link> •{" "}
            <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
              Zigbee vs Z-Wave vs Matter vs Wi-Fi
            </Link>{" "}
            •{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren
            </Link>
          </p>

          <h1>Wat is Matter?</h1>

          <p className="section-intro">
            Matter is dé nieuwe smart home standaard die ervoor moet zorgen dat
            apparaten van verschillende merken makkelijker samenwerken. Minder
            gedoe met apps, meer compatibiliteit en makkelijker koppelen.
          </p>

          <h2>Waarom is Matter zo belangrijk?</h2>
          <p>
            In smart home loop je vaak tegen hetzelfde probleem aan: elk merk
            heeft zijn eigen app, eigen koppelingen en eigen “ecosysteem”.
            Matter probeert dat op te lossen door één universele taal te maken
            voor smart home apparaten.
          </p>

          <ul>
            <li>✅ makkelijker koppelen</li>
            <li>✅ betere samenwerking tussen merken</li>
            <li>✅ minder afhankelijk van cloud/apps</li>
            <li>✅ toekomstvaster systeem</li>
          </ul>

          <h2>Hoe werkt Matter?</h2>
          <p>
            Matter is geen “signaal” zoals Zigbee of Z-Wave. Het is een{" "}
            <strong>standaard</strong> die bepaalt hoe apparaten communiceren.
            Matter werkt over bestaande technieken zoals:
          </p>

          <ul>
            <li>
              <strong>Wi-Fi</strong> – veel smart home apparaten gebruiken dit al
            </li>
            <li>
              <strong>Thread</strong> – energiezuinig mesh netwerk (vergelijkbaar
              met Zigbee, maar moderner)
            </li>
          </ul>

          <h2>Thread, Matter en hubs: hoe zit dat?</h2>
          <p>
            Veel Matter apparaten werken via <strong>Thread</strong>. Daarvoor
            heb je vaak een “Thread border router” nodig. Dat klinkt ingewikkeld,
            maar het zit vaak al in apparaten zoals:
          </p>

          <ul>
            <li>Apple HomePod / Apple TV</li>
            <li>Google Nest Hub / Nest Wifi</li>
            <li>Amazon Echo (sommige modellen)</li>
            <li>Homey Pro (nieuwere generatie)</li>
          </ul>

          <p>
            Dus: je hoeft niet altijd een aparte hub te kopen, maar je hebt wel
            een centrale controller nodig. Wil je weten wat een hub precies doet?{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Lees hier wat een smart home hub is
            </Link>
            .
          </p>

          <h2>Moet je al je apparaten vervangen?</h2>
          <p>
            Nee. Matter komt er vooral “bij”. Veel bestaande systemen blijven
            gewoon werken. Sommige merken voegen Matter toe via updates (zoals
            bridges), maar niet alles krijgt automatisch Matter support.
          </p>

          <h2>Voor wie is Matter interessant?</h2>
          <ul>
            <li>
              <strong>Beginners</strong> die straks minder gedoe willen met apps
            </li>
            <li>
              <strong>Merken-mixers</strong> die Hue + Aqara + Tapo willen combineren
            </li>
            <li>
              <strong>Smart home bouwers</strong> die toekomstvast willen uitbreiden
            </li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Matter is een grote stap richting “smart home zonder gedoe”. Het is
            vooral interessant als je merken wilt combineren en je systeem
            toekomstbestendig wilt maken. Het vervangt Zigbee/Wi-Fi niet direct,
            maar maakt samenwerken makkelijker.
          </p>

          <p>
            Wil je merken combineren zonder frustratie?{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Lees: merken combineren zonder gedoe →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
                Zigbee vs Z-Wave vs Matter vs Wi-Fi
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub (Homey vs Home Assistant vs SmartThings)
              </Link>
            </li>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
              </Link>
            </li>
          </ul>

          <h2>Veelgestelde vragen</h2>
          <h3>Wat is Matter?</h3>
          <p>
            Matter is een smart home standaard die ervoor zorgt dat apparaten van
            verschillende merken makkelijker samenwerken.
          </p>

          <h3>Heb ik een hub nodig?</h3>
          <p>
            Niet altijd, maar je hebt meestal wel een controller/border router in
            huis (zoals een speaker, hub of Homey).
          </p>

          <h3>Is Matter hetzelfde als Zigbee?</h3>
          <p>
            Nee. Zigbee is een protocol, Matter is een standaard. Matter werkt
            vaak via Wi-Fi of Thread.
          </p>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
