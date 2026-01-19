import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export default function SlimmeLampSchakelaar() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Slimme%20lamp%20werkt%20niet%20met%20schakelaar.png";

  return (
    <>
      <Header />

      <main className="section">
        {/* Banner met blur zijkanten */}
        <TipBanner src={tipImg} alt="Slimme lamp werkt niet met schakelaar" />

        <div className="container article">
          <h1>Slimme lamp werkt niet met schakelaar</h1>

          <p className="section-intro">
            Werkt je slimme lamp niet meer zodra je de wandschakelaar gebruikt?
            Dit is geen fout, maar normaal gedrag bij slimme verlichting.
          </p>

          <h2>Waarom gebeurt dit?</h2>

          <p>
            Slimme lampen hebben continu stroom nodig om bereikbaar te blijven
            via de app, automatiseringen of spraakbediening. Zodra je de
            schakelaar uitzet, verliest de lamp stroom en is hij niet meer
            bereikbaar.
          </p>

          <p>Wat gebeurt er als de schakelaar uit staat?</p>

          <ul>
            <li>De lamp is niet meer bereikbaar in de app</li>
            <li>Automatiseringen werken niet meer</li>
            <li>Spraakbediening reageert niet</li>
            <li>De lamp lijkt kapot, maar is dat niet</li>
          </ul>

          <h2>Oplossingen</h2>

          <ul>
            <li>Laat de schakelaar altijd aan</li>
            <li>Gebruik een slimme schakelaar</li>
            <li>Gebruik draadloze knoppen of dimmers</li>
            <li>Werk met scènes en automatiseringen</li>
          </ul>

          <h2>Wat is de beste oplossing?</h2>

          <p>
            Voor de meeste mensen werkt een combinatie van slimme lampen en een
            slimme schakelaar of draadloze knop het beste. Zo blijft de lamp
            altijd bereikbaar én heb je fysieke bediening.
          </p>

          <p>
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Beginnen met slimme verlichting (stap-voor-stap) →
            </Link>
          </p>

          <hr />

          <p className="muted small">
            *De exacte werking verschilt per merk en type schakelaar.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
