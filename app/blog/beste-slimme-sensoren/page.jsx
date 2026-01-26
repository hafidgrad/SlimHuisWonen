import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Beste slimme sensoren voor je smart home (2026)",
  description:
    "Welke slimme sensoren heb je nodig? Ontdek de beste bewegings-, deur-, temperatuur- en aanwezigheidssensoren voor een veilig en slim huis.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-slimme-sensoren",
  },
};

export default function BesteSlimmeSensorenPage() {
  const blogImg = "/images/blog/beste-slimme-sensoren.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Welke slimme sensoren zijn het meest nuttig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bewegingssensoren, deur- en raamsensoren en temperatuur- en luchtvochtigheidssensoren zijn het meest gebruikt. Ze vormen de basis voor automatiseringen en beveiliging.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig voor slimme sensoren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De meeste slimme sensoren werken via Zigbee of Z-Wave en hebben een hub nodig, zoals Homey, Home Assistant of een Aqara Hub.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn slimme sensoren veilig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, zolang je betrouwbare merken gebruikt, je hub goed beveiligt en sensoren niet onnodig via cloud-diensten laat werken.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* ✅ Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner
            src={blogImg}
            alt="Beste slimme sensoren voor smart home"
          />
        </div>

        <div className="container article">
          <h1>Beste slimme sensoren voor je smart home</h1>

          <p className="section-intro">
            Slimme sensoren zijn het hart van een écht slim huis. Ze meten,
            detecteren en reageren automatisch — zonder dat jij iets hoeft te
            doen. In dit artikel ontdek je welke sensoren het meest nuttig zijn
            en welke je écht nodig hebt.
          </p>

          <h2>Wat zijn slimme sensoren?</h2>
          <p>
            Slimme sensoren verzamelen informatie uit je huis en gebruiken die
            voor meldingen, automatiseringen en beveiliging. Ze werken vaak op
            batterij en communiceren via een hub.
          </p>

          <h2>De belangrijkste soorten slimme sensoren</h2>

          <h3>1. Bewegingssensoren</h3>
          <p>
            Bewegingssensoren detecteren aanwezigheid en worden gebruikt voor
            verlichting, alarmen en automatiseringen.
          </p>

          <ul>
            <li>lichten automatisch aan bij beweging</li>
            <li>beveiliging tegen ongewenste bezoekers</li>
            <li>energie besparen door slimme schakelingen</li>
          </ul>

          <p>
            Populaire keuze:{" "}
            <Link href="/producten/aqara-fp2-aanwezigheidssensor">
              Aqara FP2 aanwezigheidssensor
            </Link>
          </p>

          <h3>2. Deur- en raamsensoren</h3>
          <p>
            Deze sensoren laten weten of een deur of raam open of dicht is.
            Ideaal voor beveiliging én automatiseringen.
          </p>

          <ul>
            <li>melding bij openen van deuren</li>
            <li>alarm bij ongewenste toegang</li>
            <li>verwarming uit bij open raam</li>
          </ul>

          <h3>3. Temperatuur- en luchtvochtigheidssensoren</h3>
          <p>
            Met deze sensoren krijg je inzicht in je binnenklimaat en kun je
            slimmer verwarmen en ventileren.
          </p>

          <ul>
            <li>automatisch verwarmen of koelen</li>
            <li>voorkomen van schimmelvorming</li>
            <li>energie besparen</li>
          </ul>

          <h3>4. Water- en lekdetectiesensoren</h3>
          <p>
            Waterleksensoren waarschuwen direct bij lekkage. Vooral handig bij
            wasmachines, vaatwassers en cv-installaties.
          </p>

          <h2>Heb je een hub nodig voor slimme sensoren?</h2>
          <p>
            Ja, in de meeste gevallen wel. Slimme sensoren werken vaak via
            Zigbee of Z-Wave en hebben een hub nodig om te functioneren.
          </p>

          <p>
            Meer hierover lees je in:{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>
          </p>

          <h2>Welke slimme sensoren raden wij aan?</h2>
          <ul>
            <li>Aqara (uitstekende prijs-kwaliteit)</li>
            <li>TP-Link Tapo (wifi & eenvoudig)</li>
            <li>Eve (premium, Matter & Thread)</li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Slimme sensoren maken je huis niet alleen slimmer, maar ook
            veiliger en energiezuiniger. Begin met een paar basis-sensoren en
            breid rustig uit wanneer je automatiseringen ontdekt die bij jouw
            woning passen.
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/beste-slimme-camera">
                Beste slimme camera’s
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-slimme-deurbel">
                Beste slimme deurbellen
              </Link>
            </li>
            <li>
              <Link href="/tips/slim-huis-beveiligen">
                Slim huis beveiligen
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
