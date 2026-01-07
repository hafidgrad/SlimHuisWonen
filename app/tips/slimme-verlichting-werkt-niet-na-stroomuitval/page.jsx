import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Slimme verlichting werkt niet na stroomuitval? Zo los je het op",
  description:
    "Werkt je slimme verlichting niet meer na een stroomstoring? Ontdek waarom dit gebeurt en hoe je het oplost.",
};

export default function SlimmeVerlichtingStroomuitval() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Slimme verlichting werkt niet na stroomuitval</h1>

          <p className="section-intro">
            Na een stroomuitval kan slimme verlichting offline raken. Lampen
            reageren niet meer en automatiseringen stoppen.
          </p>

          <h2>Waarom gebeurt dit?</h2>

          <ul>
            <li>Router start later op dan de lampen</li>
            <li>Wifi-verbinding raakt tijdelijk kwijt</li>
            <li>De hub heeft tijd nodig om opnieuw te verbinden</li>
            <li>Lampen starten sneller dan het netwerk</li>
          </ul>

          <p>
            👉{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Lees wat slimme verlichting precies is
            </Link>
          </p>

          <h2>Zo los je het stap voor stap op</h2>

          <ol>
            <li>Wacht tot modem en router volledig zijn opgestart</li>
            <li>Controleer of je hub online is</li>
            <li>Zet de lamp één keer uit en aan</li>
            <li>Open de app en ververs de verbinding</li>
            <li>Herstart de hub als laatste stap</li>
          </ol>

          <p>
            In de meeste gevallen werkt alles hierna weer normaal.
          </p>

          <h2>Hoe voorkom je dit?</h2>

          <ul>
            <li>Gebruik een hub-gebaseerd systeem</li>
            <li>Laat schakelaars altijd aan staan</li>
            <li>Gebruik scènes in plaats van losse lampen</li>
            <li>Kies betrouwbare merken</li>
          </ul>

          <p>
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home in 5 stappen →
            </Link>
          </p>

          <hr />

          <p className="muted small">
            *Resultaat kan per merk en netwerk verschillen.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
