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
          text: "Niet altijd. Veel Matter apparaten werken via een ingebouwde controller zoals Google Home, Apple Home of een hub zoals Homey. Soms is een Thread border router nodig.",
        },
      },
      {
        "@type": "Question",
        name: "Is Matter hetzelfde als Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Zigbee is een draadloos protocol. Matter is een standaard die bepaalt hoe apparaten samenwerken en kan werken via Wi-Fi of Thread.",
        },
      },
      {
        "@type": "Question",
        name: "Werkt Matter met Philips Hue, Aqara en Tapo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Steeds meer merken ondersteunen Matter. Soms via een software-update of bridge, soms via nieuwe Matter-apparaten. Controleer altijd per product.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Blog banner */}
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
            <Link href="/blog/beste-smart-home-hub">
              Beste smart home hub
            </Link>
          </p>

          <h1>Wat is Matter?</h1>

          <p className="section-intro">
            Matter is de nieuwe smart home standaard die ervoor moet zorgen dat
            apparaten van verschillende merken makkelijker samenwerken. Zie
            Matter als de **verbindende laag** bovenop technieken zoals Zigbee,
            Thread en Wi-Fi.
          </p>

          <h2>Waarom is Matter zo belangrijk?</h2>
          <p>
            In smart home zit je vaak vast aan één ecosysteem. Matter probeert
            dat te doorbreken. In onze vergelijking{" "}
            <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
              Zigbee vs Z-Wave vs Matter vs Wi-Fi
            </Link>{" "}
            zie je hoe Matter zich verhoudt tot andere technieken.
          </p>

          <ul>
            <li>✅ makkelijker koppelen</li>
            <li>✅ betere samenwerking tussen merken</li>
            <li>✅ minder afhankelijk van losse apps</li>
            <li>✅ toekomstbestendiger smart home</li>
          </ul>

          <h2>Hoe werkt Matter?</h2>
          <p>
            Matter is geen radiosignaal zoals{" "}
            <Link href="/blog/wat-is-zigbee">Zigbee</Link> of Z-Wave. Het is een{" "}
            <strong>standaard</strong> die bepaalt hoe apparaten met elkaar
            communiceren.
          </p>

          <ul>
            <li>
              <strong>Wi-Fi</strong> – veel bestaande apparaten
            </li>
            <li>
              <strong>Thread</strong> – modern, energiezuinig mesh netwerk
            </li>
          </ul>

          <h2>Thread, Matter en hubs</h2>
          <p>
            Veel Matter-apparaten werken via Thread. Daarvoor is een zogeheten
            <em>Thread border router</em> nodig. Die zit vaak al ingebouwd in:
          </p>

          <ul>
            <li>Apple HomePod / Apple TV</li>
            <li>Google Nest Hub / Nest Wifi</li>
            <li>Amazon Echo (selecte modellen)</li>
            <li>Homey Pro (nieuwere generatie)</li>
          </ul>

          <p>
            Wil je precies weten wat een hub doet?{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>
          </p>

          <h2>Moet je al je apparaten vervangen?</h2>
          <p>
            Nee. Matter komt er vooral <em>naast</em>. Veel bestaande Zigbee- en
            Wi-Fi-apparaten blijven gewoon werken, soms via een bridge of update.
          </p>

          <h2>Voor wie is Matter interessant?</h2>
          <ul>
            <li>
              <strong>Beginners</strong> die minder apps willen
            </li>
            <li>
              <strong>Merken-mixers</strong> (Hue + Aqara + Tapo)
            </li>
            <li>
              <strong>Toekomstgerichte bouwers</strong>
            </li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Matter vervangt bestaande protocollen niet direct, maar maakt
            samenwerken eenvoudiger. Het is dé logische stap richting een smart
            home zonder merk-lock-in.
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li><Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link></li>
            <li>
              <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
                Zigbee vs Z-Wave vs Matter vs Wi-Fi
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
          </ul>

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
