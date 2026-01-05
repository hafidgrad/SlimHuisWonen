import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Slimme lamp werkt niet met schakelaar? Dit is waarom",
  description:
    "Werkt je slimme lamp niet meer met de schakelaar? Ontdek waarom dit gebeurt en hoe je dit probleem eenvoudig oplost.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/tips/slimme-lamp-werkt-niet-met-schakelaar",
  },
};

export default function SlimmeLampSchakelaar() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Slimme lamp werkt niet met schakelaar? Dit is waarom</h1>

          <p className="section-intro">
            Je zet de schakelaar om… en je slimme lamp doet niets meer. Of hij
            werkt alleen nog via de schakelaar en niet meer via de app. Dit is
            één van de meest voorkomende problemen bij slimme verlichting.
          </p>

          <h2>Waarom gebeurt dit?</h2>

          <p>
            Slimme lampen hebben <strong>altijd stroom nodig</strong> om slim te
            blijven. Als je de schakelaar uitzet, verbreek je de stroom en kan
            de lamp geen verbinding meer maken.
          </p>

          <ul>
            <li>Lamp is offline in de app</li>
            <li>Automatiseringen werken niet meer</li>
            <li>Spraakbediening stopt</li>
          </ul>

          <h2>Dit is géén fout van de lamp</h2>

          <p>
            Veel mensen denken dat de lamp kapot is, maar dit is normaal gedrag.
            Slimme verlichting werkt anders dan traditionele lampen.
          </p>

          <p>
            👉 Lees ook:{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Wat is slimme verlichting?
            </Link>
          </p>

          <h2>Zo los je dit probleem op</h2>

          <h3>Oplossing 1: Laat de schakelaar altijd aan</h3>
          <p>
            Dit is de simpelste oplossing. Bedien je lamp alleen via de app,
            afstandsbediening of automatiseringen.
          </p>

          <h3>Oplossing 2: Gebruik een slimme schakelaar of dimmer</h3>
          <p>
            Slimme schakelaars werken samen met slimme lampen zonder de stroom
            te onderbreken.
          </p>

          <h3>Oplossing 3: Gebruik slimme stekkers</h3>
          <p>
            Voor staande lampen zijn slimme stekkers een eenvoudige oplossing.
          </p>

          <h2>Wat is de beste oplossing?</h2>

          <p>
            Voor vaste verlichting is een systeem met hub het meest betrouwbaar.
            Zo blijven je lampen altijd bereikbaar.
          </p>

          <ul>
            <li>
              <Link href="/producten/philips-hue-white-ambiance-starterkit">
                Philips Hue White Ambiance Starterkit
              </Link>
            </li>
          </ul>

          <h2>Veelgemaakte fouten</h2>

          <ul>
            <li>Schakelaar steeds uitzetten</li>
            <li>Goedkope wifi-lampen combineren met automatiseringen</li>
            <li>Geen rekening houden met meerdere gebruikers</li>
          </ul>

          <h2>Conclusie</h2>

          <p>
            Werkt je slimme lamp niet meer met de schakelaar? Dan is dat bijna
            altijd omdat de stroom wordt onderbroken. Door slim om te gaan met
            schakelaars voorkom je frustratie.
          </p>

          <p>
            Wil je goed beginnen?{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Bekijk onze stap-voor-stap gids voor slimme verlichting
            </Link>
          </p>

          <hr />

          <p className="muted small">
            *Oplossingen kunnen verschillen per merk en installatie.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
