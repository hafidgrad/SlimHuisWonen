import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is slimme verlichting?",
  description:
    "Wat is slimme verlichting en hoe werkt het? Ontdek de voordelen, voorbeelden en waar je op moet letten.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-slimme-verlichting",
  },
};

export default function SlimmeVerlichtingUitleg() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Wat is slimme verlichting?</h1>

          <p className="section-intro">
            Slimme verlichting is verlichting die je kunt bedienen via een app,
            spraakassistent of automatiseringen. Het maakt je huis comfortabeler,
            energiezuiniger en slimmer.
          </p>

          <h2>Hoe werkt slimme verlichting?</h2>
          <p>
            Slimme lampen maken verbinding via wifi, Zigbee of Bluetooth.
            Je bedient ze met een app op je telefoon of via systemen zoals
            Google Assistant, Alexa of Apple HomeKit.
          </p>

          <h2>Wat zijn de voordelen?</h2>
          <ul>
            <li>Bedien verlichting op afstand</li>
            <li>Automatische schema’s en timers</li>
            <li>Sfeerverlichting per kamer</li>
            <li>Energie besparen</li>
          </ul>

          <h2>Heb je een hub nodig?</h2>
          <p>
            Sommige systemen werken zonder hub (zoals TP-Link Tapo),
            andere – zoals Philips Hue – gebruiken een bridge voor
            extra stabiliteit en mogelijkheden.
          </p>

          <h2>Aanbevolen producten</h2>
          <ul>
            <li>
              <Link href="/producten/philips-hue-white-ambiance-starterkit">
                Philips Hue White Ambiance Starterkit
              </Link>
            </li>
            <li>
              <Link href="/producten/tp-link-tapo-l530e-slimme-lamp">
                TP-Link Tapo slimme lamp
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
