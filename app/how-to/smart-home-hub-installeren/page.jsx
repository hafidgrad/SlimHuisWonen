import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipBanner from "@/components/TipBanner"; // ✅ toegevoegd
import Link from "next/link";

export const metadata = {
  title: "Hoe installeer je een smart home hub? | SlimHuisWonen",
  description:
    "Stap-voor-stap uitleg voor het installeren en instellen van een smart home hub. Leer hoe je apparaten koppelt en automatiseringen maakt.",
};

export default function SmartHomeHubInstalleren() {
  const headerImg = "/images/how-to/smart-home-hub-installeren.png"; // ✅ toegevoegd

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Banner toegevoegd */}
          <TipBanner
            src={headerImg}
            alt="Hoe installeer je een smart home hub?"
          />

          <h1>Hoe installeer je een smart home hub?</h1>

          <p>
            Een smart home hub is het brein van je slimme huis. Hiermee verbind
            je verschillende apparaten met elkaar en kun je automatiseringen
            maken die verder gaan dan losse apps.
          </p>

          <p>
            In deze handleiding lees je stap voor stap hoe je een smart home hub
            installeert en optimaal instelt.
          </p>

          <h2>Stap 1: Kies de juiste hub</h2>

          <p>
            Niet elke hub ondersteunt dezelfde protocollen. Controleer of jouw
            apparaten werken met Zigbee, Z-Wave, WiFi of Matter.
          </p>

          <p>
            Bekijk onze{" "}
            <Link href="/aanraders/beste-smart-home-hub">
              beste smart home hubs
            </Link>{" "}
            om een geschikte keuze te maken.
          </p>

          <h2>Stap 2: Sluit de hub aan</h2>

          <p>
            Sluit de hub aan op stroom en verbind hem met je router via een
            netwerkkabel of wifi (afhankelijk van het model).
          </p>

          <p>
            Wacht tot het apparaat volledig is opgestart voordat je verder
            gaat.
          </p>

          <h2>Stap 3: Installeer de bijbehorende app</h2>

          <p>
            Download de officiële app van de fabrikant en volg de
            installatiestappen om de hub toe te voegen aan je account.
          </p>

          <h2>Stap 4: Voeg apparaten toe</h2>

          <p>
            Zet je slimme apparaten in koppelmodus en voeg ze via de app toe
            aan je hub.
          </p>

          <p>
            Begin met verlichting of stekkers. Bekijk bijvoorbeeld onze{" "}
            <Link href="/aanraders/beste-slimme-verlichting">
              beste slimme verlichting
            </Link>{" "}
            om direct goed te starten.
          </p>

          <h2>Stap 5: Maak je eerste automatisering</h2>

          <p>
            Zodra apparaten zijn gekoppeld, kun je automatiseringen maken zoals:
          </p>

          <ul>
            <li>Lichten aan bij zonsondergang</li>
            <li>Apparaten uitschakelen als je het huis verlaat</li>
            <li>Bewegingssensor → lamp aan</li>
          </ul>

          <h2>Veelgemaakte fouten</h2>

          <ul>
            <li>Hub te ver van router plaatsen</li>
            <li>Te veel apparaten tegelijk koppelen</li>
            <li>Vergeten firmware-updates uit te voeren</li>
            <li>Apparaten kopen die niet compatibel zijn</li>
          </ul>

          <h2>Conclusie</h2>

          <p>
            Een smart home hub geeft je maximale controle en flexibiliteit.
            Door apparaten centraal te beheren, maak je je slimme huis stabieler
            en toekomstbestendiger.
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
