import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Beginnen met smart home in 5 stappen",
  description:
    "Wil je starten met een smart home? Volg deze 5 duidelijke stappen en voorkom beginnersfouten.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/beginnen-met-smart-home",
  },
};

export default function BeginnenMetSmartHome() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Beginnen met smart home in 5 stappen</h1>

          <p className="section-intro">
            Een smart home hoeft niet ingewikkeld te zijn. Met deze stappen bouw
            je rustig en overzichtelijk een slim huis.
          </p>

          <h2>Stap 1: Begin klein</h2>
          <p>Start met één slim apparaat, zoals verlichting.</p>

          <p>
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Zo begin je met slimme verlichting
            </Link>
          </p>

          <h2>Stap 2: Kies één ecosysteem</h2>
          <p>Kies één merk of platform om chaos te voorkomen.</p>

          <h2>Stap 3: Automatiseer slim</h2>
          <p>Denk aan licht bij zonsondergang of beweging.</p>

          <p>
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren zonder gedoe
            </Link>
          </p>

          <h2>Stap 4: Breid rustig uit</h2>
          <p>Voeg pas iets toe als je weet wat je mist.</p>

          <h2>Stap 5: Houd het simpel</h2>
          <p>Een smart home moet je leven makkelijker maken.</p>

          <hr />

          <p className="muted small">
            Bekijk ook:{" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Slim huis zonder hub
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}