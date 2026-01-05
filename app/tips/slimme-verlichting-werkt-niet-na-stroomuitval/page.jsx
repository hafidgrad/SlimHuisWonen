import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Slimme verlichting werkt niet na stroomuitval? Zo los je het op",
  description:
    "Werkt je slimme verlichting niet meer na een stroomstoring? Ontdek waarom dit gebeurt, hoe je het oplost en hoe je het voorkomt.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/tips/slimme-verlichting-werkt-niet-na-stroomuitval",
  },
};

export default function SlimmeVerlichtingStroomuitval() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Slimme verlichting werkt niet na stroomuitval? Zo los je het op</h1>

          <p className="section-intro">
            Na een stroomuitval werkt je slimme verlichting ineens niet meer.
            Lampen reageren niet, apps tonen “offline” of automatiseringen
            stoppen. Dit probleem komt vaak voor — en gelukkig is het meestal
            eenvoudig op te lossen.
          </p>

          <h2>Hoe herken je dit probleem?</h2>

          <ul>
            <li>Lampen reageren niet meer in de app</li>
            <li>Automatiseringen werken niet</li>
            <li>Spraakbediening doet niets</li>
            <li>Lampen blijven aan of juist uit</li>
          </ul>

          <p>
            Dit gebeurt vaak direct na een stroomstoring of wanneer de stroom
            kort is uitgevallen.
          </p>

          <h2>Waarom werkt slimme verlichting niet na stroomuitval?</h2>

          <p>
            Slimme verlichting is afhankelijk van meerdere onderdelen. Na een
            stroomuitval starten deze niet altijd in de juiste volgorde op.
          </p>

          <ul>
            <li>De router start later op dan de lampen</li>
            <li>Wifi-verbindingen raken kwijt</li>
            <li>De hub heeft tijd nodig om apparaten opnieuw te vinden</li>
            <li>Goedkope wifi-lampen raken “in de war”</li>
          </ul>

          <h2>Verschil tussen systemen</h2>

          <h3>Wifi-lampen</h3>
          <p>
            Wifi-lampen zijn het meest gevoelig. Ze verbinden direct met je
            netwerk en kunnen na stroomuitval offline blijven.
          </p>

          <h3>Verlichting met hub (zoals Zigbee)</h3>
          <p>
            Systemen met een hub, zoals Philips Hue, herstellen zichzelf meestal
            automatisch. Dit is stabieler en betrouwbaarder.
          </p>

          <p>
            👉 Lees ook:</p>
            <Link href="/tips/wat-is-slimme-verlichting">
              Wat is slimme verlichting?
            </Link>
          </p>

          <h2>Zo los je het probleem stap voor stap op</h2>

          <ol>
            <li>Wacht tot je router volledig is opgestart</li>
            <li>Controleer of de hub weer online is</li>
            <li>Zet lampen één keer uit en aan via de schakelaar</li>
            <li>Open de app en ververs de verbinding</li>
            <li>Herstart de hub als dat nodig is</li>
          </ol>

          <p>
            In de meeste gevallen werken je lampen hierna weer normaal.
          </p>

          <h2>Hoe voorkom je dit in de toekomst?</h2>

          <ul>
            <li>Gebruik een hub-gebaseerd systeem</li>
            <li>Laat schakelaars altijd aan staan</li>
            <li>Gebruik scènes in plaats van losse lampen</li>
            <li>Kies betrouwbare merken</li>
          </ul>

          <p>
            Wil je stabiel starten?
            </p>
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Bekijk onze stap-voor-stap gids voor slimme verlichting
            </Link>
          </p>

          <h2>Aanbevolen oplossing</h2>

          <p>
            Hub-gebaseerde systemen zijn het meest betrouwbaar bij
            stroomuitval. Ze herstellen automatisch en blijven lokaal werken.
          </p>

          <ul>
            <li>
              <Link href="/producten/philips-hue-white-ambiance-starterkit">
                Philips Hue White Ambiance Starterkit
              </Link>
            </li>
          </ul>

          <h2>Conclusie</h2>

          <p>
            Slimme verlichting die niet meer werkt na stroomuitval is vervelend,
            maar bijna altijd eenvoudig op te lossen. Door slimme keuzes te
            maken voorkom je dit probleem in de toekomst.
          </p>

          <hr />

          <p className="muted small">
            *Tips zijn algemeen. Resultaat kan verschillen per merk en situatie.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
