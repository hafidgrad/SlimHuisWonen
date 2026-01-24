import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slimme verlichting werkt niet na stroomuitval? Oplossing in 5 stappen – 2026",
  description:
    "Werkt je slimme verlichting niet meer na stroomuitval? Lampen offline of automatiseringen weg? Volg deze 5 stappen om het direct op te lossen en problemen te voorkomen.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/tips/slimme-verlichting-werkt-niet-na-stroomuitval",
  },
};

export default function SlimmeVerlichtingStroomuitval() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Slimme%20verlichting%20werkt%20niet%20na%20stroomuitval.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom werkt slimme verlichting niet meer na stroomuitval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Na een stroomuitval starten slimme lampen vaak sneller op dan je router of hub. Daardoor raken ze tijdelijk de verbinding kwijt en reageren ze niet meer via app of automatiseringen.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe krijg ik slimme lampen weer online na stroomuitval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wacht tot modem, router en hub volledig zijn opgestart. Zet daarna de lamp één keer uit en aan, ververs de app en herstart als laatste stap de hub.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe voorkom je problemen met slimme verlichting na stroomstoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gebruik bij voorkeur een hub, laat wandschakelaars aan staan, zorg voor stabiele wifi en werk met scènes en automatiseringen.",
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
            alt="Slimme verlichting werkt niet na stroomuitval"
          />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/wat-is-slimme-verlichting">Slimme verlichting</Link>{" "}
            •{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Beginnen met slimme verlichting
            </Link>
          </p>

          <h1>Slimme verlichting werkt niet na stroomuitval</h1>

          <p className="section-intro">
            Na een stroomuitval kan slimme verlichting ineens offline zijn.
            Lampen reageren niet meer, automatiseringen stoppen en de app lijkt
            niets meer te doen. Gelukkig is dit meestal snel en eenvoudig op te
            lossen.
          </p>

          <h2>Waarom gebeurt dit?</h2>
          <ul>
            <li>lampen starten sneller op dan modem en router</li>
            <li>wifi- of Zigbee-verbinding raakt tijdelijk kwijt</li>
            <li>de hub heeft tijd nodig om opnieuw te verbinden</li>
            <li>het netwerk is nog niet volledig beschikbaar</li>
          </ul>

          <h2>Oplossing: zo los je het stap voor stap op</h2>
          <ol>
            <li>
              <strong>Wacht 2–5 minuten</strong> tot modem en router volledig
              zijn opgestart.
            </li>
            <li>
              <strong>Controleer of je hub online is</strong> (zoals Hue Bridge
              of Homey).
            </li>
            <li>
              <strong>Zet de lamp één keer uit en aan</strong> via app of stekker.
            </li>
            <li>
              <strong>Ververs de app</strong> en laat apparaten opnieuw verbinden.
            </li>
            <li>
              <strong>Herstart de hub als laatste stap</strong>.
            </li>
          </ol>

          <p>
            In de meeste gevallen werkt je verlichting hierna weer normaal.
            Stonden lampen uit via een wandschakelaar? Zorg dan dat deze{" "}
            <strong>permanent aan</strong> blijft.
          </p>

          <h3>Problemen met schakelaars?</h3>
          <p>
            Slimme lampen hebben continu stroom nodig.{" "}
            <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
              Daarom werken slimme lampen niet goed met een schakelaar
            </Link>
            .
          </p>

          <h2>Zo voorkom je problemen bij een volgende stroomstoring</h2>
          <ul>
            <li>gebruik een <strong>hub-gebaseerd systeem</strong> (stabieler)</li>
            <li>laat wandschakelaars altijd aan</li>
            <li>werk met scènes en automatiseringen</li>
            <li>zorg voor stabiele 2.4 GHz wifi of mesh</li>
          </ul>

          <h3>Gebruik je wifi-lampen?</h3>
          <p>
            Dan is je netwerk extra belangrijk.{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home
            </Link>{" "}
            of{" "}
            <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
              verbeter je bereik zonder nieuwe router
            </Link>
            .
          </p>

          <p>
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home in 5 stappen →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
                Slimme lamp werkt niet met schakelaar
              </Link>
            </li>
            <li>
              <Link href="/tips/wifi-verbeteren-voor-smart-home">
                Wifi verbeteren voor smart home
              </Link>
            </li>
            <li>
              <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
                Wifi bereik verbeteren zonder nieuwe router
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
