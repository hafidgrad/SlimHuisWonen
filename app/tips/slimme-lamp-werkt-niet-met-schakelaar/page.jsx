import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slimme lamp werkt niet met schakelaar? Dit is waarom (+ oplossingen) – 2026",
  description:
    "Slimme lamp werkt niet meer na gebruik van de wandschakelaar? Dat is normaal: slimme lampen hebben continu stroom nodig. Dit zijn de beste oplossingen (slimme schakelaar, knop, scènes).",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/slimme-lamp-werkt-niet-met-schakelaar",
  },
};

export default function SlimmeLampSchakelaar() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Slimme%20lamp%20werkt%20niet%20met%20schakelaar.png";

  // ✅ FAQ schema (structured data) — helpt bij rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom werkt een slimme lamp niet met de wandschakelaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Omdat een slimme lamp continu stroom nodig heeft om bereikbaar te blijven via app, spraak of automatiseringen. Als je de schakelaar uitzet, krijgt de lamp geen stroom en lijkt hij offline.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is de beste oplossing voor slimme lampen met schakelaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Laat de schakelaar altijd aan en gebruik een slimme/draadloze knop, slimme schakelaar of dimmer om de lamp te bedienen. Dan blijft de lamp bereikbaar en heb je toch fysieke bediening.",
        },
      },
      {
        "@type": "Question",
        name: "Kan een slimme lamp kapot gaan door de schakelaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee, meestal niet. De lamp lijkt kapot omdat hij geen stroom krijgt en daardoor offline is. Zodra je de schakelaar weer aan zet, kan de lamp weer verbinden (soms na enkele seconden).",
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
          <TipBanner src={tipImg} alt="Slimme lamp werkt niet met schakelaar" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster / slimme verlichting */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Slimme verlichting starten
            </Link>{" "}
            •{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Wat is slimme verlichting?
            </Link>
          </p>

          <h1>Slimme lamp werkt niet met schakelaar</h1>

          <p className="section-intro">
            Werkt je slimme lamp niet meer zodra je de wandschakelaar gebruikt?
            Dit is geen fout, maar normaal gedrag bij slimme verlichting.
          </p>

          <h2>Kort antwoord: dit is de reden</h2>
          <p>
            <strong>Slimme lampen hebben continu stroom nodig</strong> om bereikbaar
            te blijven via de app, automatiseringen of spraakbediening. Zodra je
            de schakelaar uitzet, verliest de lamp stroom en is hij niet meer
            bereikbaar.
          </p>

          <h2>Waarom gebeurt dit?</h2>
          <p>
            Een slimme lamp is eigenlijk een klein “smart apparaat” dat verbinding
            maakt met wifi of met een hub (bijvoorbeeld Zigbee via een bridge). Zonder
            stroom kan hij geen verbinding houden.
          </p>

          <p>Wat gebeurt er als de schakelaar uit staat?</p>

          <ul>
            <li>De lamp is niet meer bereikbaar in de app</li>
            <li>Automatiseringen werken niet meer</li>
            <li>Spraakbediening reageert niet</li>
            <li>De lamp lijkt kapot, maar is dat niet</li>
          </ul>

          <h3>Extra verwarrend: na stroomuitval lijkt het ook “stuk”</h3>
          <p>
            Na een stroomstoring kunnen lampen ook tijdelijk offline zijn.{" "}
            <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
              Bekijk de oplossing bij slimme verlichting na stroomuitval
            </Link>
            .
          </p>

          <h2>Oplossingen</h2>

          <ul>
            <li>
              <strong>Laat de schakelaar altijd aan</strong> (lamp altijd stroom)
            </li>
            <li>
              <strong>Gebruik een slimme schakelaar</strong> (die “smart” schakelt zonder de lamp echt uit te zetten)
            </li>
            <li>
              <strong>Gebruik draadloze knoppen of dimmers</strong> (Hue dimmer / Aqara knop etc.)
            </li>
            <li>
              <strong>Werk met scènes en automatiseringen</strong> (handiger dan los aan/uit)
            </li>
          </ul>

          <h2>Wat is de beste oplossing?</h2>

          <p>
            Voor de meeste mensen werkt een combinatie van slimme lampen en een
            slimme schakelaar of draadloze knop het beste. Zo blijft de lamp
            altijd bereikbaar én heb je fysieke bediening.
          </p>

          <p>
            Wil je weten wat het beste bij jouw situatie past? Start hier:{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              beginnen met slimme verlichting (stap-voor-stap)
            </Link>
            .
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
              <Link href="/tips/wat-is-slimme-verlichting">
                Wat is slimme verlichting?
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
                Slimme verlichting werkt niet na stroomuitval
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
          </ul>

          {/* ✅ FAQ sectie (ook voor bezoekers) */}
          <h2>Veelgestelde vragen</h2>
          <h3>Waarom werkt mijn slimme lamp niet meer na de schakelaar?</h3>
          <p>
            Omdat de lamp geen stroom meer krijgt. Slimme lampen moeten altijd
            stroom hebben om online te blijven.
          </p>

          <h3>Kan ik toch fysieke bediening houden?</h3>
          <p>
            Ja. Gebruik een slimme schakelaar, draadloze knop of dimmer, terwijl
            de wandschakelaar aan blijft.
          </p>

          <h3>Is mijn slimme lamp kapot?</h3>
          <p>
            Meestal niet. Hij is gewoon offline omdat hij geen stroom krijgt.
            Zet de schakelaar weer aan en wacht even.
          </p>

          <hr />

          <p className="muted small">
            *De exacte werking verschilt per merk en type schakelaar.
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
