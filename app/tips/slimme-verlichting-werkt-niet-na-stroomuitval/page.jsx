import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Slimme verlichting werkt niet na stroomuitval? Zo los je het op",
  description:
    "Werkt je slimme verlichting niet meer na een stroomstoring? Ontdek waarom dit gebeurt, hoe je het oplost en hoe je het voorkomt.",
};

export default function SlimmeVerlichtingStroomuitval() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Slimme verlichting werkt niet na stroomuitval</h1>

          <p className="section-intro">
            Na een stroomuitval kan slimme verlichting offline raken.
            Gelukkig is dit meestal eenvoudig op te lossen.
          </p>

          <h2>Waarom gebeurt dit?</h2>

          <ul>
            <li>Router start later dan de lampen</li>
            <li>Wifi-verbinding raakt kwijt</li>
            <li>Hub heeft tijd nodig om opnieuw te verbinden</li>
          </ul>

          <p>
            👉 Lees ook:{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Wat is slimme verlichting?
            </Link>
          </p>

          <h2>Zo los je het stap voor stap op</h2>

          <ol>
            <li>Wacht tot je router volledig is opgestart</li>
            <li>Controleer of je hub online is</li>
            <li>Zet lampen één keer uit en aan</li>
            <li>Open de app en ververs</li>
            <li>Herstart de hub indien nodig</li>
          </ol>

          <p>
            In de meeste gevallen werkt alles hierna weer normaal.
          </p>

          <hr />

          <p className="muted small">
            *Resultaat kan per merk verschillen.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
