import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slimme verlichting werkt niet na stroomuitval? (Oplossing in 5 stappen) – 2026",
  description:
    "Werkt je slimme verlichting niet meer na stroomuitval? Lampen offline of automatiseringen weg? Volg deze 5 stappen om het direct op te lossen + tips om het te voorkomen.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/tips/slimme-verlichting-werkt-niet-na-stroomuitval",
  },
};

export default function SlimmeVerlichtingStroomuitval() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Slimme%20verlichting%20werkt%20niet%20na%20stroomuitval.png";

  // ✅ FAQ schema (structured data) — helpt bij rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom werkt slimme verlichting niet meer na stroomuitval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Na stroomuitval starten lampen vaak sneller op dan je modem/router of hub. Daardoor raken wifi- of Zigbee-verbindingen tijdelijk kwijt en reageren lampen niet meer op de app of automatiseringen.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe krijg ik slimme lampen weer online na stroomuitval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wacht eerst tot modem en router volledig opgestart zijn. Controleer daarna of je hub online is, zet de lamp één keer uit/aan, ververs de app en herstart als laatste stap de hub. In de meeste gevallen zijn je lampen dan weer bereikbaar.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe voorkom je problemen met slimme verlichting na stroomstoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gebruik bij voorkeur een hub (zoals Hue Bridge), laat wandschakelaars aan staan, verbeter je wifi-netwerk en gebruik scènes/automatiseringen. Een stabiel netwerk en hub beperken uitval na stroomstoring.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* ✅ Banner netjes in dezelfde breedte als site */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner
            src={tipImg}
            alt="Slimme verlichting werkt niet na stroomuitval"
          />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster / slimme verlichting */}
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
            Na een stroomuitval kan slimme verlichting offline raken. Lampen
            reageren niet meer en automatiseringen stoppen. Gelukkig is het vaak
            snel op te lossen.
          </p>

          <h2>Waarom gebeurt dit?</h2>

          <ul>
            <li>Router start later op dan de lampen</li>
            <li>Wifi-verbinding raakt tijdelijk kwijt</li>
            <li>De hub heeft tijd nodig om opnieuw te verbinden</li>
            <li>Lampen starten sneller dan het netwerk</li>
          </ul>

          <p>
            👉{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Lees wat slimme verlichting precies is
            </Link>
          </p>

          <h2>Oplossing: zo los je het stap voor stap op</h2>

          <ol>
            <li>
              <strong>Wacht 2–5 minuten</strong> tot modem en router volledig zijn
              opgestart.
            </li>
            <li>
              <strong>Controleer of je hub online is</strong> (bijv. Hue Bridge of
              Homey).
            </li>
            <li>
              <strong>Zet de lamp één keer uit en aan</strong> (via app of stekker).
            </li>
            <li>
              <strong>Open de app en ververs</strong> (zoeken naar apparaten /
              verbinding vernieuwen).
            </li>
            <li>
              <strong>Herstart de hub als laatste stap</strong> (hub of bridge
              opnieuw opstarten).
            </li>
          </ol>

          <p>
            In de meeste gevallen werkt alles hierna weer normaal. Als je lampen
            via een wandschakelaar uit stonden, kan het ook helpen om die
            <strong> permanent aan</strong> te laten.
          </p>

          <h3>Werkt je lamp niet met schakelaar?</h3>
          <p>
            Dit gebeurt vaak: een slimme lamp heeft continu stroom nodig.{" "}
            <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
              Lees hier waarom slimme lampen niet goed werken met een schakelaar
            </Link>
            .
          </p>

          <h2>Hoe voorkom je dit in de toekomst?</h2>

          <ul>
            <li>
              Gebruik een <strong>hub-gebaseerd systeem</strong> (stabieler dan alleen wifi)
            </li>
            <li>Laat schakelaars altijd aan staan (slimme lampen hebben stroom nodig)</li>
            <li>Gebruik scènes/automatiseringen in plaats van losse lampen</li>
            <li>
              Zorg voor een stabiel netwerk (sterkere wifi op 2.4 GHz / mesh)
            </li>
          </ul>

          <h3>Tip: verbeter je wifi (als je wifi-lampen gebruikt)</h3>
          <p>
            Als je verlichting op wifi werkt (zoals Tapo/Wiz), dan kan wifi na een
            stroomstoring instabiel zijn.{" "}
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

          {/* ✅ Gerelateerde tips / interne links */}
          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
                Slimme lamp werkt niet met schakelaar: zo zit het
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

          {/* ✅ FAQ sectie (ook voor bezoekers) */}
          <h2>Veelgestelde vragen</h2>
          <h3>Waarom werkt slimme verlichting niet na stroomuitval?</h3>
          <p>
            Omdat lampen vaak sneller opstarten dan je netwerk of hub. Daardoor
            kunnen ze tijdelijk offline zijn en niet reageren.
          </p>

          <h3>Hoe krijg ik mijn lampen weer online?</h3>
          <p>
            Wacht tot router/hub opgestart zijn, zet lamp 1x uit/aan, ververs de
            app en herstart als laatste stap de hub/bridge.
          </p>

          <h3>Hoe voorkom ik dit?</h3>
          <p>
            Gebruik een hub (zoals Hue Bridge), laat schakelaars aan, verbeter
            je wifi en gebruik scènes/automatiseringen.
          </p>

          <hr />

          <p className="muted small">
            *Resultaat kan per merk en netwerk verschillen.
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
