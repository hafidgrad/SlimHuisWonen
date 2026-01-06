import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Beginnen met slimme verlichting – stap voor stap",
  description:
    "Wil je beginnen met slimme verlichting? Volg dit praktische stappenplan en ontdek welke producten geschikt zijn voor beginners.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/beginnen-met-slimme-verlichting",
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
            slimmer te maken. In dit artikel leer je stap voor stap hoe je
            begint — zonder technische kennis.
          </p>

          <h2>Welke slimme verlichting past bij jou?</h2>

          <p>
            Slimme verlichting is er in verschillende vormen. De juiste keuze
            hangt af van wat jij belangrijk vindt: gemak, sfeer of automatisering.
          </p>

          <ul>
            <li><strong>Aan/uit en timers</strong> – een slimme stekker of wifi-lamp</li>
            <li><strong>Sfeer en kleur</strong> – wit- en kleurinstellingen</li>
            <li><strong>Automatiseringen</strong> – combineer met sensoren</li>
          </ul>

          <h2>Stap-voor-stap starten</h2>

          <ol>
            <li>Kies één ruimte</li>
            <li>Bepaal wat je wilt bereiken</li>
            <li>Begin met één product</li>
            <li>Installeer de app</li>
            <li>Breid pas later uit</li>
          </ol>

          <h2>Aanbevolen producten</h2>

          <ul>
            <li>
              <Link href="/producten/philips-hue-white-ambiance-starterkit">
                Philips Hue White Ambiance Starterkit
              </Link>
            </li>
            <li>
              <Link href="/producten/tp-link-tapo-p110-slimme-stekker">
                TP-Link Tapo P110 slimme stekker
              </Link>
            </li>
          </ul>

          <p>
            Wil je eerst de basis begrijpen?{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Lees wat slimme verlichting precies is
            </Link>.
          </p>

          <hr />

          <ul className="muted small">
            <li>
              <Link href="/tips/beginnen-met-smart-home">
                Beginnen met smart home in 5 stappen
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}