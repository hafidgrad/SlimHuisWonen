import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slim huis beveiligen: slimme camera’s, deurbellen & sensoren – 2026",
  description:
    "Hoe beveilig je je huis slim? Complete uitleg over slimme camera’s, videodeurbellen, sensoren en privacy. Praktische tips voor een veilig smart home.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/slim-huis-beveiligen",
  },
};

export default function SlimHuisBeveiligen() {
  const tipImg =
    "/images/tips/slim-huis-beveiligen.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is een slim beveiligingssysteem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een slim beveiligingssysteem bestaat uit slimme camera’s, sensoren en deurbellen die meldingen geven en automatisch kunnen reageren op gebeurtenissen.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een abonnement nodig voor slimme beveiliging?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Sommige merken werken zonder abonnement, maar functies zoals cloudopslag of gezichtsherkenning vereisen vaak wel een abonnement.",
        },
      },
      {
        "@type": "Question",
        name: "Is slimme beveiliging privacygevoelig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme beveiliging kan privacygevoelig zijn. Het is belangrijk om zones goed in te stellen, meldingen te beperken en rekening te houden met buren en bezoekers.",
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
          <TipBanner src={tipImg} alt="Slim huis beveiligen" />
        </div>

        <div className="container article">
          {/* ✅ Cluster intro */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home
            </Link>
          </p>

          <h1>Slim huis beveiligen: zo pak je het slim aan</h1>

          <p className="section-intro">
            Met slimme beveiliging maak je je huis veiliger én overzichtelijker.
            Denk aan camera’s, videodeurbellen en sensoren die samenwerken en je
            direct waarschuwen bij verdachte situaties.
          </p>

          <h2>Wat valt onder slimme huisbeveiliging?</h2>
          <p>
            Slimme huisbeveiliging bestaat uit meerdere onderdelen die elkaar
            versterken:
          </p>

          <ul>
            <li>slimme camera’s (binnen en buiten)</li>
            <li>slimme videodeurbellen</li>
            <li>bewegings-, deur- en raamsensoren</li>
            <li>meldingen en automatiseringen</li>
          </ul>

          <h2>Slimme camera’s</h2>
          <p>
            Slimme camera’s geven live beeld, meldingen bij beweging en soms
            nachtzicht of AI-detectie.
          </p>

          <p>
            Meer weten?{" "}
            <Link href="/tips/slimme-camera-uitleg">
              Slimme camera’s: uitleg & aandachtspunten
            </Link>
          </p>

          <h2>Slimme deurbellen</h2>
          <p>
            Met een slimme deurbel zie je wie er aanbelt, ook als je niet thuis
            bent. Veel modellen bieden bewegingsdetectie en tweeweg-audio.
          </p>

          <p>
            Lees verder:{" "}
            <Link href="/tips/slimme-deurbel-uitleg">
              Slimme deurbellen uitgelegd
            </Link>
          </p>

          <h2>Slimme sensoren</h2>
          <p>
            Sensoren detecteren beweging, openen van deuren of ramen en zelfs
            waterlekkages. Ze vormen vaak de basis van automatiseringen.
          </p>

          <p>
            Uitleg:{" "}
            <Link href="/tips/slimme-sensoren-uitleg">
              Slimme sensoren: wat kun je ermee?
            </Link>
          </p>

          <h2>Automatiseringen voor extra veiligheid</h2>
          <ul>
            <li>licht automatisch aan bij beweging</li>
            <li>melding bij open deur als je weg bent</li>
            <li>camera activeren bij alarm</li>
          </ul>

          <h2>Privacy & wetgeving</h2>
          <p>
            Bij slimme beveiliging hoort verantwoordelijkheid. Let op zichtlijnen,
            privacyzones en meldingen voor bezoekers.
          </p>

          <p>
            Meer hierover lees je in{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              privacy & veiligheid in een smart home
            </Link>
            .
          </p>

          <h2>Conclusie</h2>
          <p>
            Een slim beveiligd huis bestaat niet uit één apparaat, maar uit een
            slimme combinatie van camera’s, sensoren en automatiseringen. Begin
            klein en breid uit waar nodig.
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
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
              <Link href="/tips/slimme-sensoren-uitleg">
                Slimme sensoren uitleg
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
