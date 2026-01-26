import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slim huis beveiligen: camera’s, sensoren & slimme beveiliging – 2026",
  description:
    "Wil je je huis slimmer beveiligen? Lees hoe slimme camera’s, deurbellen, sensoren en automatiseringen helpen bij een veilig smart home.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/slim-huis-beveiligen",
  },
};

export default function SlimHuisBeveiligenPage() {
  const tipImg = "/images/tips/slim-huis-beveiligen.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hoe kan ik mijn huis slimmer beveiligen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Met slimme camera’s, deurbellen, bewegingssensoren en automatiseringen kun je je huis continu in de gaten houden en meldingen ontvangen bij verdachte situaties.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn slimme camera’s veilig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, mits je sterke wachtwoorden gebruikt, tweestapsverificatie inschakelt en camera’s correct instelt. Ook netwerkbeveiliging speelt hierbij een grote rol.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een abonnement nodig voor slimme beveiliging?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Veel camera’s werken zonder abonnement voor live beeld. Voor cloud-opslag of AI-detectie is soms wel een abonnement nodig.",
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
          {/* ✅ Cluster links */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Gerelateerd:{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid
            </Link>{" "}
            •{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Wi-Fi verbeteren
            </Link>{" "}
            •{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home
            </Link>
          </p>

          <h1>Slim huis beveiligen</h1>

          <p className="section-intro">
            Een smart home kan je huis niet alleen comfortabeler maken, maar ook
            veiliger. Met slimme camera’s, deurbellen en sensoren weet je altijd
            wat er rondom je woning gebeurt — waar je ook bent.
          </p>

          <h2>Waarom slimme beveiliging?</h2>
          <p>
            Slimme beveiliging werkt preventief. Zichtbare camera’s en slimme
            deurbellen schrikken af en geven je direct inzicht bij beweging of
            aanbellen.
          </p>

          <ul>
            <li>meldingen bij beweging of aanbellen</li>
            <li>live meekijken via je smartphone</li>
            <li>automatisch verlichting of alarm activeren</li>
            <li>extra gemoedsrust, ook op afstand</li>
          </ul>

          <h2>Slimme camera’s</h2>
          <p>
            Slimme camera’s zijn verkrijgbaar voor binnen en buiten. Ze kunnen
            beweging detecteren, opnemen en meldingen sturen.
          </p>

          <ul>
            <li>binnen- en buitencamera’s</li>
            <li>nachtzicht en bewegingsdetectie</li>
            <li>optioneel cloud- of lokale opslag</li>
          </ul>

          <p>
            Let op privacy-instellingen en plaats camera’s nooit op plekken waar
            dit wettelijk niet is toegestaan.
          </p>

          <h2>Slimme deurbellen</h2>
          <p>
            Met een slimme deurbel zie je wie er aanbelt, zelfs als je niet thuis
            bent. Veel modellen hebben ook bewegingsdetectie.
          </p>

          <p>
            Bekijk bijvoorbeeld de{" "}
            <Link href="/producten/ring-video-deurbel-batterij">
              Ring Video Deurbel
            </Link>{" "}
            of de{" "}
            <Link href="/producten/tapo-d235-video-deurbel">
              TP-Link Tapo D235
            </Link>
            .
          </p>

          <h2>Sensoren als extra beveiligingslaag</h2>
          <p>
            Bewegings-, deur- en raamsensoren maken je beveiliging compleet. Ze
            kunnen camera’s, verlichting of meldingen activeren.
          </p>

          <ul>
            <li>bewegingssensoren</li>
            <li>deur- en raamsensoren</li>
            <li>trillings- en glasbreuksensoren</li>
          </ul>

          <h2>Automatiseringen maken het écht slim</h2>
          <p>
            Door automatiseringen wordt beveiliging pas echt krachtig.
          </p>

          <ul>
            <li>licht automatisch aan bij beweging</li>
            <li>melding + opname bij aanbellen</li>
            <li>alles uitschakelen wanneer je thuis bent</li>
          </ul>

          <p>
            Wil je merken combineren?{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Zo combineer je slimme beveiliging zonder gedoe
            </Link>
            .
          </p>

          <h2>Let op je netwerk & privacy</h2>
          <p>
            Slimme beveiliging leunt sterk op je netwerk. Een stabiele wifi en
            goede instellingen zijn cruciaal.
          </p>

          <p>
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Wi-Fi verbeteren voor smart home
            </Link>{" "}
            •{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid in je smart home
            </Link>
          </p>

          <h2>Conclusie</h2>
          <p>
            Een slim beveiligd huis combineert camera’s, sensoren en
            automatiseringen. Begin klein en breid uit wanneer je weet wat je
            nodig hebt — zo blijft het overzichtelijk én effectief.
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/privacy-en-veiligheid-smart-home">
                Privacy & veiligheid in je smart home
              </Link>
            </li>
            <li>
              <Link href="/tips/wifi-verbeteren-voor-smart-home">
                Wi-Fi verbeteren voor smart home
              </Link>
            </li>
            <li>
              <Link href="/tips/beginnen-met-smart-home">
                Beginnen met smart home
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
