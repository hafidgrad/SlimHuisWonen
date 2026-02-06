import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Hoe installeer je slimme verlichting? | SlimHuisWonen",
  description:
    "Stap-voor-stap uitleg voor het installeren en instellen van slimme verlichting. Inclusief tips om fouten te voorkomen.",
};

export default function SlimmeVerlichtingInstalleren() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Hoe installeer je slimme verlichting?</h1>

          <p>
            Slimme verlichting is voor veel mensen de eerste stap naar een smart
            home. Het is relatief goedkoop, eenvoudig te installeren en je ziet
            direct resultaat.
          </p>

          <p>
            In deze handleiding leggen we stap voor stap uit hoe je slimme
            verlichting installeert en waar je op moet letten.
          </p>

          <h2>Stap 1: Controleer je fitting</h2>

          <p>
            Kijk eerst welke fitting je lamp heeft. De meest voorkomende zijn:
          </p>

          <ul>
            <li>E27 (grote fitting)</li>
            <li>E14 (kleine fitting)</li>
            <li>GU10 (spotjes)</li>
          </ul>

          <p>
            Koop altijd een slimme lamp die past bij jouw huidige armatuur.
          </p>

          <h2>Stap 2: Kies het juiste systeem</h2>

          <p>
            Sommige slimme lampen werken via wifi, andere via Zigbee met een
            hub.
          </p>

          <p>
            Wil je meerdere lampen combineren en automatiseren? Dan is een hub
            vaak stabieler.
          </p>

          <p>
            Bekijk onze{" "}
            <Link href="/aanraders/beste-slimme-verlichting">
              beste slimme verlichting
            </Link>{" "}
            om een goede keuze te maken.
          </p>

          <h2>Stap 3: Draai de oude lamp eruit</h2>

          <p>
            Zet eerst de schakelaar uit. Draai daarna de oude lamp eruit en
            plaats de slimme lamp in dezelfde fitting.
          </p>

          <h2>Stap 4: Installeer de app</h2>

          <p>
            Download de bijbehorende app van de fabrikant en volg de
            installatiestappen.
          </p>

          <p>
            Meestal moet je de lamp een paar seconden aan en uit zetten om hem
            in koppelmodus te zetten.
          </p>

          <h2>Stap 5: Stel automatiseringen in</h2>

          <p>
            Zodra de lamp is gekoppeld, kun je schema’s instellen zoals:
          </p>

          <ul>
            <li>Lampen aan bij zonsondergang</li>
            <li>Lampen uit om 23:00 uur</li>
            <li>Dimbaar licht in de avond</li>
          </ul>

          <p>
            Wil je meerdere apparaten combineren? Dan kun je later uitbreiden
            met een{" "}
            <Link href="/aanraders/beste-smart-home-hub">
              smart home hub
            </Link>.
          </p>

          <h2>Veelgemaakte fouten</h2>

          <ul>
            <li>De wandschakelaar uitzetten (lamp moet altijd stroom hebben)</li>
            <li>Wifi signaal te zwak</li>
            <li>Te veel verschillende merken combineren</li>
          </ul>

          <h2>Conclusie</h2>

          <p>
            Slimme verlichting installeren is eenvoudig en een perfecte eerste
            stap richting een slim huis.
          </p>

          <p>
            Begin met één ruimte, test wat voor jou werkt en breid daarna uit.
          </p>

          <hr style={{ margin: "2rem 0" }} />

          <Link href="/how-to" className="btn btn-primary">
            ← Terug naar How To overzicht
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
