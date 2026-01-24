import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slimme lamp werkt niet met schakelaar? Dit is waarom (+ oplossingen) – 2026",
  description:
    "Werkt je slimme lamp niet meer na gebruik van de wandschakelaar? Dat is normaal. Slimme lampen hebben continu stroom nodig. Dit zijn de beste oplossingen.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/slimme-lamp-werkt-niet-met-schakelaar",
  },
};

export default function SlimmeLampSchakelaar() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Slimme%20lamp%20werkt%20niet%20met%20schakelaar.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom werkt een slimme lamp niet met de wandschakelaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Omdat een slimme lamp continu stroom nodig heeft om bereikbaar te blijven via app, spraakbediening en automatiseringen. Als je de schakelaar uitzet, krijgt de lamp geen stroom en lijkt hij offline.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is de beste oplossing voor slimme lampen met schakelaars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Laat de schakelaar altijd aan en gebruik een slimme schakelaar, draadloze knop of dimmer. Zo blijft de lamp online en heb je toch fysieke bediening.",
        },
      },
      {
        "@type": "Question",
        name: "Kan een slimme lamp kapot gaan door de schakelaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. De lamp lijkt kapot omdat hij geen stroom krijgt en daardoor offline is. Zodra de schakelaar weer aan staat, werkt de lamp meestal weer normaal.",
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
            alt="Slimme lamp werkt niet met schakelaar"
          />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster */}
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
            Reageert je slimme lamp niet meer nadat iemand de wandschakelaar
            heeft gebruikt? Geen paniek — dit is normaal gedrag bij slimme
            verlichting en gelukkig eenvoudig op te lossen.
          </p>

          <h2>Kort antwoord: dit is de reden</h2>
          <p>
            <strong>Slimme lampen hebben continu stroom nodig</strong> om online
            te blijven. Zodra je de wandschakelaar uitzet, krijgt de lamp geen
            stroom meer en is hij niet bereikbaar via app, spraak of
            automatiseringen.
          </p>

          <h2>Waarom gebeurt dit?</h2>
          <p>
            Een slimme lamp is in feite een klein smart apparaat met een
            wifi- of Zigbee-verbinding. Zonder stroom kan hij geen verbinding
            houden met je netwerk of hub.
          </p>

          <p>Als de schakelaar uit staat:</p>
          <ul>
            <li>verdwijnt de lamp uit de app</li>
            <li>werken automatiseringen niet meer</li>
            <li>reageert spraakbediening niet</li>
            <li>lijkt de lamp kapot (maar dat is hij niet)</li>
          </ul>

          <h3>Extra verwarrend: na stroomuitval</h3>
          <p>
            Na een stroomstoring kunnen slimme lampen ook tijdelijk offline
            zijn.{" "}
            <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
              Zo los je problemen na stroomuitval op
            </Link>
            .
          </p>

          <h2>De beste oplossingen</h2>
          <ul>
            <li>
              <strong>Laat de wandschakelaar altijd aan</strong> (lamp blijft
              onder stroom)
            </li>
            <li>
              <strong>Gebruik een slimme schakelaar</strong> die de lamp slim
              bedient zonder de stroom te onderbreken
            </li>
            <li>
              <strong>Gebruik draadloze knoppen of dimmers</strong> (zoals Hue
              dimmer of Aqara knop)
            </li>
            <li>
              <strong>Werk met scènes en automatiseringen</strong> in plaats
              van handmatig aan/uit
            </li>
          </ul>

          <h2>Wat werkt in de praktijk het beste?</h2>
          <p>
            Voor de meeste huishoudens werkt deze combinatie het fijnst:
            slimme lampen + vaste stroom + een draadloze knop of slimme
            schakelaar. Zo blijft alles betrouwbaar én gebruiksvriendelijk.
          </p>

          <p>
            Weet je nog niet wat bij jouw situatie past?{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Bekijk onze stap-voor-stap gids voor slimme verlichting
            </Link>
            .
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
              <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
                Slimme verlichting werkt niet na stroomuitval
              </Link>
            </li>
            <li>
              <Link href="/tips/wat-is-slimme-verlichting">
                Wat is slimme verlichting?
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
