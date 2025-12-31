import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Beginnen met slimme verlichting – stap voor stap",
  description:
    "Wil je beginnen met slimme verlichting? Volg deze eenvoudige stappen en ontdek welke producten geschikt zijn.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/tips/beginnen-met-slimme-verlichting",
  },
};

export default function BeginnenMetSlimmeVerlichting() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Beginnen met slimme verlichting (stap-voor-stap)</h1>

          <p className="section-intro">
            Slimme verlichting is één van de makkelijkste manieren om je huis
            slimmer te maken. In dit artikel leggen we stap voor stap uit hoe je
            begint – zonder technische kennis.
          </p>

          <h2>Stap 1: Kies het juiste systeem</h2>
          <p>
            Er zijn grofweg twee keuzes:
          </p>
          <ul>
            <li>
              <strong>Zonder hub</strong> – bijvoorbeeld TP-Link Tapo (werkt via
              wifi)
            </li>
            <li>
              <strong>Met hub</strong> – zoals Philips Hue (stabieler en
              uitgebreider)
            </li>
          </ul>

          <h2>Stap 2: Begin klein</h2>
          <p>
            Je hoeft niet meteen je hele huis slim te maken. Begin met één kamer,
            zoals de woonkamer of slaapkamer.
          </p>

          <h2>Stap 3: Installeer de app</h2>
          <p>
            Download de bijbehorende app en volg de stappen om je lampen toe te
            voegen. Dit duurt meestal maar een paar minuten.
          </p>

          <h2>Stap 4: Maak schema’s en scènes</h2>
          <p>
            Stel automatische tijden in of maak scènes aan zoals “avond”,
            “film” of “ontspannen”.
          </p>

          <h2>Stap 5: Koppel aan spraakassistenten</h2>
          <p>
            Slimme verlichting werkt vaak samen met Google Assistant, Alexa of
            Siri. Zo bedien je alles met je stem.
          </p>

          <h2>Aanbevolen producten om te starten</h2>
          <ul>
            <li>
              <Link href="/producten/philips-hue-white-ambiance-starterkit">
                Philips Hue White Ambiance Starterkit
              </Link>
            </li>
            <li>
              <Link href="/producten/tp-link-tapo-p110-slimme-stekker">
                TP-Link Tapo slimme producten
              </Link>
            </li>
          </ul>

          <p className="muted small">
            *Prijzen kunnen wijzigen. Bekijk actuele prijs bij Amazon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
