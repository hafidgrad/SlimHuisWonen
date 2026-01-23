import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

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
          {/* ✅ Cluster navigatie */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Gerelateerd:{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">Smart home hub</Link> •{" "}
            <Link href="/tips/wat-is-slimme-verlichting">Slimme verlichting</Link> •{" "}
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
            grote voordelen.
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
            Zigbee-apparaten communiceren meestal via een hub/bridge. Die hub
            koppelt Zigbee aan je netwerk en app.
          </p>

          <p>Veelgebruikte hubs/bridges zijn:</p>
          <ul>
            <li>Philips Hue Bridge (voor Hue verlichting)</li>
            <li>Homey (veel merken combineren)</li>
            <li>Home Assistant (met Zigbee dongle / Zigbee2MQTT)</li>
          </ul>

          <h2>Wat is een Zigbee mesh netwerk?</h2>
          <p>
            Een groot voordeel: Zigbee kan een <strong>mesh netwerk</strong>{" "}
            vormen. Dat betekent dat apparaten elkaar kunnen doorgeven en het
            bereik groter wordt.
          </p>

          <p className="muted">
            Tip: apparaten op stroom (zoals lampen/stekkers) zijn vaak “repeaters”
            in het mesh netwerk.
          </p>

          <h2>Wanneer kies je Zigbee (en wanneer wifi)?</h2>

          <h3>Kies Zigbee als:</h3>
          <ul>
            <li>je veel slimme apparaten hebt</li>
            <li>je sensoren gebruikt (bewegingssensor, deurcontact, etc.)</li>
            <li>je betrouwbaarheid wilt</li>
            <li>je merken wilt combineren</li>
          </ul>

          <h3>Kies wifi als:</h3>
          <ul>
            <li>je simpel begint met een paar apparaten</li>
            <li>je geen hub wil kopen</li>
            <li>je alles via één merk/app gebruikt</li>
          </ul>

          <p>
            Start je net? Bekijk dan ook:{" "}
            <Link href="/tips/beginnen-met-smart-home">
              beginnen met smart home in 5 stappen
            </Link>
            .
          </p>

          <h2>Conclusie</h2>
          <p>
            Zigbee is een slimme keuze als je een betrouwbaar smart home wil dat
            kan meegroeien. Voor beginners kan wifi prima zijn, maar zodra je meer
            apparaten en automatiseringen wilt, wordt Zigbee vaak de betere basis.
          </p>

          <hr />

          {/* ✅ Gerelateerde links / interne links */}
          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
              </Link>
            </li>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
            <li>
              <Link href="/blog/aqara-vs-tapo">Aqara vs Tapo</Link>
            </li>
          </ul>

          {/* ✅ FAQ (ook zichtbaar) */}
          <h2>Veelgestelde vragen</h2>
          <h3>Wat is Zigbee?</h3>
          <p>
            Zigbee is een smart home protocol dat veel gebruikt wordt voor lampen,
            sensoren en schakelaars. Het is energiezuinig en betrouwbaar.
          </p>

          <h3>Heb je een hub nodig voor Zigbee?</h3>
          <p>
            Meestal wel. Zigbee werkt vaak via een hub/bridge zoals Hue Bridge,
            Homey of Home Assistant.
          </p>

          <h3>Is Zigbee beter dan wifi?</h3>
          <p>
            Voor grote smart home setups meestal wel: stabieler en beter schaalbaar.
            Wifi is eenvoudiger om mee te starten.
          </p>

          {/* ✅ Structured data inject */}
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
