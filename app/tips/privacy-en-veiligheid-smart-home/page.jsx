import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Privacy & veiligheid in je smart home – zo bescherm je je huis",
  description:
    "Praktische tips om je smart home veiliger te maken. Zo bescherm je slimme apparaten, camera’s en deurbellen tegen hackers.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/tips/privacy-en-veiligheid-smart-home",
  },
};

export default function PrivacyEnVeiligheidSmartHomePage() {
  const tipImg =
    "/images/tips/privacy-en-veiligheid-smart-home.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is een smart home veilig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een smart home kan veilig zijn, mits je sterke wachtwoorden gebruikt, apparaten up-to-date houdt en onnodige cloud- en internettoegang beperkt.",
        },
      },
      {
        "@type": "Question",
        name: "Kunnen slimme camera’s gehackt worden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vooral bij zwakke wachtwoorden of verouderde software. Door tweestapsverificatie, updates en beperkte toegang verklein je dit risico sterk.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn hubs veiliger dan wifi-apparaten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In veel gevallen wel. Apparaten via een hub zijn minder direct verbonden met internet en werken vaker lokaal, wat de veiligheid vergroot.",
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
            src={tipImg}
            alt="Privacy en veiligheid in je smart home"
          />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Wifi & netwerk
            </Link>{" "}
            •{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren zonder gedoe
            </Link>
          </p>

          <h1>Privacy & veiligheid in je smart home</h1>

          <p className="section-intro">
            Slimme apparaten maken je huis comfortabeler, maar brengen ook
            vragen met zich mee over privacy en veiligheid. Camera’s,
            deurbellen en sensoren zijn verbonden met het internet — en daarom
            is het belangrijk om ze goed te beveiligen.
          </p>

          <h2>Waarom privacy belangrijk is in een smart home</h2>
          <p>
            Slimme apparaten verzamelen vaak meer gegevens dan je denkt.
            Denk aan camerabeelden, bewegingsdata en informatie over wanneer
            je thuis bent. Als deze data niet goed beschermd is, kan dit
            leiden tot ongewenste meekijkers of misbruik.
          </p>

          <h2>De grootste risico’s bij slimme apparaten</h2>
          <ul>
            <li>zwakke of hergebruikte wachtwoorden</li>
            <li>apparaten die direct aan internet hangen</li>
            <li>geen of verouderde software-updates</li>
            <li>te veel cloudtoegang zonder controle</li>
          </ul>

          <h2>Zo maak je je smart home veiliger</h2>

          <h3>1. Gebruik sterke, unieke wachtwoorden</h3>
          <p>
            Gebruik voor elk account een uniek wachtwoord van minimaal
            12 tekens. Vermijd hergebruik en gebruik bij voorkeur een
            password manager.
          </p>

          <h3>2. Zet tweestapsverificatie aan</h3>
          <p>
            Waar mogelijk is tweestapsverificatie een van de effectiefste
            manieren om ongewenste toegang te voorkomen.
          </p>

          <h3>3. Gebruik een apart netwerk voor slimme apparaten</h3>
          <p>
            Veel routers bieden een gast- of IoT-netwerk. Zo kunnen slimme
            apparaten niet bij je laptop of persoonlijke data.
          </p>

          <p>
            Heb je last van instabiele verbindingen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home
            </Link>
            .
          </p>

          <h2>Slimme camera’s en deurbellen veilig gebruiken</h2>

          <h3>Camera’s</h3>
          <ul>
            <li>kies bij voorkeur bekende merken</li>
            <li>beperk cloudopslag als dat mogelijk is</li>
            <li>controleer regelmatig wie toegang heeft</li>
            <li>plaats geen camera’s in privéruimtes</li>
          </ul>

          <h3>Deurbellen met camera</h3>
          <p>
            Slimme deurbellen hangen permanent buiten en zijn altijd online.
            Schakel functies uit die je niet nodig hebt, zoals continu
            opnemen of de microfoon.
          </p>

          <h2>Zijn hubs veiliger dan losse wifi-apparaten?</h2>
          <p>
            In veel gevallen wel. Apparaten die via een hub werken, zijn
            minder direct verbonden met internet en werken vaker lokaal.
          </p>

          <p>
            Meer hierover?{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>
          </p>

          <h2>Conclusie</h2>
          <p>
            Een smart home hoeft geen risico te zijn voor je privacy.
            Door bewuste keuzes te maken en je apparaten goed in te stellen,
            woon je niet alleen slimmer, maar ook veiliger.
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/wifi-verbeteren-voor-smart-home">
                Wifi verbeteren voor smart home
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
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
