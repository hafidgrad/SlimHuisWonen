import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipBanner from "@/components/TipBanner"; // ✅ toegevoegd
import Link from "next/link";

export const metadata = {
  title: "Hoe begin je met een smart home? | SlimHuisWonen",
  description:
    "Stap-voor-stap uitleg om zonder fouten te beginnen met een smart home. Praktisch, duidelijk en zonder technisch gedoe.",
};

export default function BeginnenMetSmartHome() {

  const headerImg = "/images/how-to/beginnen-met-smart-home.png"; // ✅ toegevoegd

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">

          {/* ✅ Banner toegevoegd */}
          <TipBanner
            src={headerImg}
            alt="Hoe begin je met een smart home?"
          />

          <h1>Hoe begin je met een smart home?</h1>

          <p>
            Een smart home klinkt ingewikkeld. Veel mensen denken dat je meteen
            een compleet systeem nodig hebt met dure hubs, sensoren en
            automatiseringen. Dat is niet zo.
          </p>

          <p>
            Je kunt klein beginnen. En slim opbouwen. In deze handleiding leg ik
            stap voor stap uit hoe je zonder stress start met een smart home —
            en welke keuzes belangrijk zijn om later geen spijt te krijgen.
          </p>

          <h2>Stap 1: Bepaal wat je wilt automatiseren</h2>

          <p>
            Begin niet met technologie. Begin met een probleem. Wil je energie
            besparen? Meer comfort? Meer veiligheid? Of gewoon gemak?
          </p>

          <p>De meeste mensen starten met:</p>

          <ul>
            <li>Slimme verlichting</li>
            <li>Slimme stekkers</li>
            <li>Een slimme deurbel</li>
          </ul>

          <h2>Stap 2: Kies je ecosysteem</h2>

          <p>
            Dit is de fout die veel beginners maken: losse apparaten kopen zonder
            te kijken of ze samenwerken.
          </p>

          <p>
            Wil je flexibiliteit en uitbreidingsmogelijkheden? Dan is een smart
            home hub een goede keuze.
          </p>

          <p>
            Bekijk bijvoorbeeld onze{" "}
            <Link href="/aanraders/beste-smart-home-hub">
              beste smart home hubs
            </Link>{" "}
            om te zien welke het meest geschikt zijn.
          </p>

          <h2>Stap 3: Begin met slimme verlichting</h2>

          <p>
            Slimme verlichting is de perfecte start omdat installatie simpel is
            en je direct resultaat ziet.
          </p>

          <p>
            Binnen 10 minuten kun je lampen dimmen, tijdschema’s instellen en ze
            automatisch laten inschakelen bij zonsondergang.
          </p>

          <p>
            Bekijk ook onze{" "}
            <Link href="/aanraders/beste-slimme-verlichting">
              beste slimme verlichting
            </Link>{" "}
            als je direct goed wilt beginnen.
          </p>

          <h2>Stap 4: Voeg slimme stekkers toe</h2>

          <p>
            Met slimme stekkers maak je bestaande apparaten slim. Denk aan een
            staande lamp, koffiezetapparaat of ventilator.
          </p>

          <p>
            Bekijk hier de{" "}
            <Link href="/aanraders/beste-slimme-stekkers">
              beste slimme stekkers
            </Link>{" "}
            om eenvoudig te starten.
          </p>

          <h2>Stap 5: Zorg voor stabiele wifi</h2>

          <p>
            Veel smart home problemen ontstaan door slechte wifi. Plaats je
            router centraal en gebruik bij voorkeur 2.4GHz voor smart home
            apparaten.
          </p>

          <p>
            Heb je een groter huis? Dan kan een mesh-systeem uitkomst bieden.
          </p>

          <h2>Conclusie</h2>

          <p>
            Een smart home hoeft niet duur of ingewikkeld te zijn. Begin klein,
            bouw logisch uit en kies apparaten die goed samenwerken.
          </p>

          <p>
            Zo bouw je stap voor stap een slim huis — zonder gedoe.
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
