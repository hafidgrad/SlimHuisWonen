import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slimme sensoren uitgelegd: soorten, toepassingen & tips – 2026",
  description:
    "Wat zijn slimme sensoren en wat kun je ermee? Uitleg over bewegings-, deur-, temperatuur- en andere sensoren voor beveiliging, comfort en energiebesparing.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/slimme-sensoren-uitleg",
  },
};

export default function SlimmeSensorenUitleg() {
  const tipImg =
    "/images/tips/slimme-sensoren-uitleg.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat zijn slimme sensoren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme sensoren meten beweging, temperatuur, contact of andere gebeurtenissen en sturen deze informatie automatisch naar je smart home systeem.",
        },
      },
      {
        "@type": "Question",
        name: "Waarvoor gebruik je slimme sensoren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme sensoren worden gebruikt voor beveiliging, automatiseringen, energiebesparing en extra comfort in huis.",
        },
      },
      {
        "@type": "Question",
        name: "Werken slimme sensoren op wifi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sommige wel, maar de meeste slimme sensoren werken via Zigbee, Z-Wave of Thread omdat dit energiezuiniger en stabieler is.",
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
          <TipBanner src={tipImg} alt="Slimme sensoren uitleg" />
        </div>

        <div className="container article">
          {/* ✅ Cluster link */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/slim-huis-beveiligen">
              Slim huis beveiligen
            </Link>{" "}
            •{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home
            </Link>
          </p>

          <h1>Slimme sensoren: uitleg & toepassingen</h1>

          <p className="section-intro">
            Slimme sensoren maken een smart home écht slim. Ze zorgen ervoor dat
            apparaten automatisch reageren op wat er gebeurt in huis. In dit
            artikel lees je welke soorten sensoren er zijn en hoe je ze gebruikt.
          </p>

          <h2>Wat doen slimme sensoren?</h2>
          <p>
            Slimme sensoren meten gebeurtenissen en sturen die informatie door
            naar je smart home systeem.
          </p>

          <ul>
            <li>detecteren beweging of aanwezigheid</li>
            <li>meten temperatuur en luchtvochtigheid</li>
            <li>zien of een deur of raam open staat</li>
            <li>signaleren trillingen of waterlekken</li>
          </ul>

          <h2>Veelgebruikte soorten slimme sensoren</h2>

          <h3>Bewegings- & aanwezigheidssensoren</h3>
          <p>
            Deze sensoren detecteren beweging of aanwezigheid en worden vaak
            gebruikt voor verlichting en beveiliging.
          </p>

          <ul>
            <li>licht automatisch aan bij beweging</li>
            <li>melding bij onverwachte beweging</li>
            <li>energie besparen door licht automatisch uit</li>
          </ul>

          <h3>Deur- & raamsensoren</h3>
          <p>
            Contactsensoren laten weten of een deur of raam open of dicht is.
          </p>

          <ul>
            <li>melding bij openen van deur of raam</li>
            <li>alarm bij ongewenste toegang</li>
            <li>verwarming uit bij open raam</li>
          </ul>

          <h3>Temperatuur- & luchtvochtigheidssensoren</h3>
          <p>
            Deze sensoren meten het binnenklimaat en helpen bij comfort en
            energiebesparing.
          </p>

          <ul>
            <li>slimme thermostaat aansturen</li>
            <li>ventilatie automatisch inschakelen</li>
            <li>schimmelvorming voorkomen</li>
          </ul>

          <h3>Waterlek- & trillingssensoren</h3>
          <p>
            Minder bekend, maar erg waardevol voor schadepreventie.
          </p>

          <ul>
            <li>melding bij lekkage</li>
            <li>detectie van trillingen of sabotage</li>
            <li>extra beveiliging voor ramen en deuren</li>
          </ul>

          <h2>Wifi vs Zigbee sensoren</h2>
          <p>
            De meeste sensoren werken niet via wifi, maar via energiezuinige
            protocollen zoals Zigbee.
          </p>

          <ul>
            <li>langere batterijduur (vaak 1–2 jaar)</li>
            <li>betere stabiliteit</li>
            <li>snellere reacties</li>
          </ul>

          <p>
            Hiervoor heb je meestal een hub nodig.{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat doet een smart home hub?
            </Link>
          </p>

          <h2>Automatiseringen met sensoren</h2>
          <p>
            De echte kracht zit in automatiseringen:
          </p>

          <ul>
            <li>licht aan bij beweging na zonsondergang</li>
            <li>verwarming lager als niemand thuis is</li>
            <li>melding bij open raam tijdens regen</li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Slimme sensoren zijn de basis van een goed smart home. Ze zorgen voor
            comfort, veiligheid en energiebesparing — zonder dat je er continu
            over hoeft na te denken.
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/slim-huis-beveiligen">
                Slim huis beveiligen
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-camera-uitleg">
                Slimme camera’s uitleg
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-deurbel-uitleg">
                Slimme deurbel uitleg
              </Link>
            </li>
            <li>
              <Link href="/tips/privacy-en-veiligheid-smart-home">
                Privacy & veiligheid
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
