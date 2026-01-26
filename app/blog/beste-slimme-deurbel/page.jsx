import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Beste slimme deurbel (2026) – keuzehulp & aandachtspunten",
  description:
    "Wat is de beste slimme deurbel voor jouw situatie? Ontdek de verschillen tussen accu of bedraad, wifi, abonnementen, privacy en slimme integraties.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-slimme-deurbel",
  },
};

export default function BesteSlimmeDeurbelPage() {
  const blogImg = "/images/blog/beste-slimme-deurbel.png";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is de beste slimme deurbel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De beste slimme deurbel hangt af van je woning, wifi-bereik en voorkeur voor accu of vaste stroom. Let vooral op beeldkwaliteit, betrouwbaarheid en privacy-instellingen.",
        },
      },
      {
        "@type": "Question",
        name: "Accu of bedrade slimme deurbel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een bedrade deurbel is onderhoudsvrij en stabiel. Een accu-deurbel is makkelijker te installeren, maar moet regelmatig worden opgeladen.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een abonnement nodig voor een slimme deurbel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veel slimme deurbellen gebruiken een abonnement voor videohistorie en AI-detectie. Zonder abonnement heb je vaak alleen live beeld.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner src={blogImg} alt="Beste slimme deurbel" />
        </div>

        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Beveiliging:{" "}
            <Link href="/tips/slim-huis-beveiligen">Slim huis beveiligen</Link> •{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid
            </Link>
          </p>

          <h1>Beste slimme deurbel: waar moet je op letten?</h1>

          <p className="section-intro">
            Een slimme deurbel laat je zien wie er aanbelt — waar je ook bent.
            Maar de verschillen zijn groot. In deze gids helpen we je de juiste
            keuze maken zonder spijt achteraf.
          </p>

          <h2>Accu of bedraad</h2>
          <p>
            De eerste keuze is hoe de deurbel van stroom wordt voorzien.
          </p>

          <ul>
            <li>
              <strong>Bedraad:</strong> altijd online, geen opladen
            </li>
            <li>
              <strong>Accu:</strong> flexibel te plaatsen, wel onderhoud
            </li>
          </ul>

          <h2>Beeldkwaliteit & kijkhoek</h2>
          <ul>
            <li>Minimaal Full HD (liefst 2K)</li>
            <li>Brede kijkhoek voor pakketdetectie</li>
            <li>Goed nachtzicht</li>
          </ul>

          <h2>Wifi & betrouwbaarheid</h2>
          <p>
            Slimme deurbellen zijn gevoelig voor wifi-problemen. Slecht bereik
            zorgt voor vertraging of gemiste meldingen.
          </p>

          <p>
            Problemen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home →
            </Link>
          </p>

          <h2>Abonnementen & opslag</h2>
          <p>
            Veel merken vereisen een abonnement voor:
          </p>
          <ul>
            <li>videohistorie</li>
            <li>persoon- en pakketdetectie</li>
            <li>terugkijken van meldingen</li>
          </ul>

          <p>
            Zonder abonnement heb je meestal alleen live beeld.
          </p>

          <h2>Privacy & wettelijke aandachtspunten</h2>
          <ul>
            <li>stel privacyzones in (buren & openbare weg)</li>
            <li>gebruik meldingen alleen voor eigen terrein</li>
            <li>schakel audio-opname uit indien nodig</li>
          </ul>

          <p>
            Lees ook:{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid in je smart home
            </Link>
            .
          </p>

          <h2>Integraties & smart home</h2>
          <p>
            Sommige deurbellen werken beter binnen een ecosysteem:
          </p>
          <ul>
            <li>Ring ↔ Alexa</li>
            <li>Google Nest ↔ Google Home</li>
            <li>Tapo ↔ Tapo app & Home Assistant</li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            De beste slimme deurbel is betrouwbaar, past bij je woning en houdt
            rekening met privacy. Kijk verder dan alleen resolutie en let vooral
            op stroom, wifi en abonnementskosten.
          </p>

          <hr />

          <h2>Gerelateerde blogs</h2>
          <ul>
            <li>
              <Link href="/blog/beste-slimme-camera">
                Beste slimme camera
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-slimme-sensoren">
                Beste slimme sensoren
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
