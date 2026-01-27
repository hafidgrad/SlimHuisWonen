import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Wat is Zigbee? Uitleg voor smart home (plus voordelen/nadelen) – 2026",
  description:
    "Wat is Zigbee en waarom gebruiken Philips Hue, IKEA en Aqara het? Lees hoe Zigbee werkt, de voordelen t.o.v. wifi en wanneer je een hub nodig hebt.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/wat-is-zigbee",
  },
};

export default function WatIsZigbeeBlogPage() {
  // ✅ FAQ schema (structured data) — helpt bij rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zigbee is een draadloos protocol speciaal voor smart home apparaten zoals lampen, sensoren en schakelaars. Het is energiezuinig en betrouwbaar en werkt vaak via een hub/bridge.",
        },
      },
      {
        "@type": "Question",
        name: "Is Zigbee beter dan wifi voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vaak wel. Zigbee gebruikt weinig stroom (ideaal voor sensoren) en is stabieler bij veel apparaten. Wifi is eenvoudiger om mee te starten maar kan bij grotere setups instabiel worden.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig voor Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meestal wel. Zigbee apparaten verbinden via een hub/bridge zoals Philips Hue Bridge, Homey of Home Assistant met Zigbee-stick. Die hub is de ‘vertaler’ naar je netwerk en app.",
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
            style={{ "--blog-bg": "url(/images/blog/wat-is-zigbee.png)" }}
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
                src="/images/blog/wat-is-zigbee.png"
                alt="Wat is Zigbee?"
                width={1400}
                height={520}
                priority
                className="blogBannerImg"
              />
            </div>
          </div>

          {/* ✅ Cluster navigatie (topical context) */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Gerelateerd:{" "}
            <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
              Zigbee vs Z-Wave vs Matter
            </Link>{" "}
            •{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Smart home hub
            </Link>{" "}
            •{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren
            </Link>
          </p>

          <h1>Wat is Zigbee?</h1>

          <p className="section-intro">
            Zigbee is een van de populairste verbindingen voor smart home.
            Apparaten zoals slimme lampen, sensoren en schakelaars (bijv. Hue,
            IKEA of Aqara) maken vaak gebruik van Zigbee omdat het betrouwbaar en
            energiezuinig is.
          </p>

          <h2>Wat maakt Zigbee anders dan wifi?</h2>
          <p>
            Veel mensen starten met wifi-smart home producten. Dat werkt prima,
            maar Zigbee is speciaal gemaakt voor smart home en heeft een paar
            grote voordelen. In onze vergelijking{" "}
            <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
              Zigbee vs Z-Wave vs Matter vs wifi
            </Link>{" "}
            gaan we hier dieper op in.
          </p>

          <ul>
            <li>
              <strong>Energiezuinig:</strong> ideaal voor sensoren op batterij
            </li>
            <li>
              <strong>Betrouwbaar:</strong> minder gevoelig voor wifi-problemen
            </li>
            <li>
              <strong>Schaalbaar:</strong> geschikt voor veel apparaten
            </li>
          </ul>

          <h2>Hoe werkt Zigbee? (simpel uitgelegd)</h2>
          <p>
            Zigbee-apparaten communiceren meestal via een hub of bridge. Zo’n hub
            vormt het hart van je smart home. Lees ook:{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              wat is een smart home hub?
            </Link>
            .
          </p>

          <p>Veelgebruikte hubs/bridges zijn:</p>
          <ul>
            <li>Philips Hue Bridge (voor Hue verlichting)</li>
            <li>Homey (meerdere merken combineren)</li>
            <li>Home Assistant (met Zigbee dongle / Zigbee2MQTT)</li>
          </ul>

          <h2>Wat is een Zigbee mesh netwerk?</h2>
          <p>
            Een groot voordeel van Zigbee is het{" "}
            <strong>mesh netwerk</strong>. Apparaten geven signalen aan elkaar
            door, waardoor je bereik automatisch groter wordt.
          </p>

          <p className="muted">
            Tip: apparaten op stroom (zoals lampen en slimme stekkers) fungeren
            vaak als versterkers binnen het mesh netwerk.
          </p>

          <h2>Wanneer kies je Zigbee (en wanneer wifi)?</h2>

          <h3>Kies Zigbee als:</h3>
          <ul>
            <li>je veel slimme apparaten hebt</li>
            <li>je sensoren gebruikt</li>
            <li>je betrouwbaarheid belangrijk vindt</li>
            <li>je merken wilt combineren</li>
          </ul>

          <h3>Kies wifi als:</h3>
          <ul>
            <li>je klein en simpel begint</li>
            <li>je geen extra hub wilt</li>
            <li>je alles binnen één merk gebruikt</li>
          </ul>

          <p>
            Start je net? Bekijk dan ook{" "}
            <Link href="/tips/beginnen-met-smart-home">
              beginnen met smart home in 5 stappen
            </Link>
            .
          </p>

          <h2>Conclusie</h2>
          <p>
            Zigbee is een sterke basis voor een betrouwbaar en uitbreidbaar
            smart home. Zeker wanneer je meerdere merken wilt combineren of
            later wilt opschalen.
          </p>

          <hr />

          {/* ✅ Gerelateerde artikelen (blog + tips mix) */}
          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
                Zigbee vs Z-Wave vs Matter vs wifi
              </Link>
            </li>
            <li>
              <Link href="/blog/aqara-vs-tapo">
                Aqara vs Tapo: verschillen uitgelegd
              </Link>
            </li>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
          </ul>

          {/* ✅ FAQ zichtbaar */}
          <h2>Veelgestelde vragen</h2>

          <h3>Wat is Zigbee?</h3>
          <p>
            Zigbee is een energiezuinig smart home protocol voor lampen,
            sensoren en schakelaars.
          </p>

          <h3>Heb je een hub nodig voor Zigbee?</h3>
          <p>
            Meestal wel. Zigbee werkt via een hub of bridge zoals Homey, Hue
            Bridge of Home Assistant.
          </p>

          <h3>Is Zigbee beter dan wifi?</h3>
          <p>
            Voor grotere smart homes wel: stabieler en beter schaalbaar dan wifi.
          </p>

          {/* ✅ Structured data */}
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
