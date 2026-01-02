import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is een smart home hub?",
  description:
    "Wat is een smart home hub en heb je er één nodig? We leggen het simpel uit, met voorbeelden en tips.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-een-smart-home-hub",
  },
};

export default function WatIsSmartHomeHub() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Wat is een smart home hub?</h1>

          <p className="section-intro">
            Een smart home hub is het centrale brein van je slimme huis.
            Maar heb je er écht één nodig? In dit artikel leggen we het
            eenvoudig uit.
          </p>

          <h2>Wat doet een smart home hub?</h2>

          <p>
            Een smart home hub verbindt verschillende slimme apparaten met
            elkaar, zodat ze samen kunnen werken — ook als ze van
            verschillende merken zijn.
          </p>

          <ul>
            <li>Verbindt lampen, sensoren en schakelaars</li>
            <li>Maakt automatiseringen mogelijk</li>
            <li>Zorgt voor stabiele communicatie</li>
          </ul>

          <h2>Voorbeelden van smart home hubs</h2>

          <ul>
            <li>Homey</li>
            <li>Samsung SmartThings</li>
            <li>Aqara Hub</li>
            <li>Philips Hue Bridge</li>
          </ul>

          <h2>Heb je altijd een hub nodig?</h2>

          <p>
            Nee. Veel slimme apparaten werken ook zonder hub, via wifi.
            Denk aan slimme stekkers of wifi-lampen.
          </p>

          <p>
            Wil je echter automatiseringen maken of meerdere merken
            combineren, dan is een hub vaak slimmer.
          </p>

          <p>
            <Link href="/tips/slim-huis-zonder-hub">
              Lees hier wanneer je géén hub nodig hebt →
            </Link>
          </p>

          <h2>Wanneer is een hub wél aan te raden?</h2>

          <ul>
            <li>Je wilt merken combineren</li>
            <li>Je gebruikt veel sensoren</li>
            <li>Je wilt stabiele automatiseringen</li>
            <li>Je wilt minder wifi-belasting</li>
          </ul>

          <h2>Conclusie</h2>

          <p>
            Een smart home hub is niet verplicht, maar maakt je slimme huis
            wel krachtiger en overzichtelijker.
          </p>

          <p>
            Begin klein — en voeg pas een hub toe als je merkt dat je
            automatiseringen wilt uitbreiden.
          </p>

          <hr />

          <p className="muted small">
            Bekijk ook:
          </p>

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
