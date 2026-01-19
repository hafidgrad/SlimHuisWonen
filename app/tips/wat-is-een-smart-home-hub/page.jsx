import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Wat is een smart home hub?",
  description:
    "Wat is een smart home hub en heb je er één nodig? We leggen uit wat een hub doet, wanneer hij handig is en wanneer niet.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-een-smart-home-hub",
  },
};

export default function WatIsEenSmartHomeHub() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wat%20is%20een%20smart%20home%20hub.png";

  return (
    <>
      <Header />

      <main className="section">
        {/* Banner met blur zijkanten */}
        <TipBanner src={tipImg} alt="Wat is een smart home hub?" />

        <div className="container article">
          <h1>Wat is een smart home hub?</h1>

          <p className="section-intro">
            Een smart home hub is vaak het brein van een slim huis. Maar heb je
            zo’n hub écht nodig? In dit artikel leggen we het simpel en
            praktisch uit.
          </p>

          <h2>Wat doet een smart home hub?</h2>

          <p>
            Een smart home hub verbindt verschillende slimme apparaten met
            elkaar. In plaats van losse apps per merk, komt alles samen op één
            plek.
          </p>

          <ul>
            <li>Verbindt apparaten van verschillende merken</li>
            <li>Maakt geavanceerde automatiseringen mogelijk</li>
            <li>Zorgt dat apparaten lokaal met elkaar praten</li>
          </ul>

          <h2>Waarom gebruiken merken een hub?</h2>

          <p>
            Veel slimme apparaten gebruiken geen wifi, maar protocollen zoals
            Zigbee of Z-Wave. Deze zijn:
          </p>

          <ul>
            <li>Energiezuinig</li>
            <li>Betrouwbaar</li>
            <li>Sneller dan wifi</li>
          </ul>

          <p>Een hub is nodig om deze apparaten met je netwerk en apps te verbinden.</p>

          <h2>Voorbeelden van populaire hubs</h2>

          <ul>
            <li>Philips Hue Bridge</li>
            <li>Homey</li>
            <li>Home Assistant</li>
            <li>Samsung SmartThings</li>
          </ul>

          <h2>Wanneer heb je géén hub nodig?</h2>

          <p>
            Je hebt niet altijd een hub nodig. Veel beginners starten prima
            zonder.
          </p>

          <ul>
            <li>Bij wifi-producten (zoals TP-Link Tapo)</li>
            <li>Als je maar één merk gebruikt</li>
            <li>Als je alleen basisfuncties wilt</li>
          </ul>

          <p>
            Twijfel je hierover?{" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Lees ons artikel over een slim huis zonder hub
            </Link>
            .
          </p>

          <h2>Wanneer is een hub wél aan te raden?</h2>

          <p>Een hub wordt interessant als je meer wilt dan alleen aan/uit.</p>

          <ul>
            <li>Meerdere merken combineren</li>
            <li>Automatiseringen met sensoren</li>
            <li>Betrouwbare werking zonder cloud</li>
          </ul>

          <p>Vooral bij sensoren en routines merk je het verschil.</p>

          <h2>Hub vs geen hub: wat is beter?</h2>

          <p>Er is geen goed of fout. Het hangt af van je wensen:</p>

          <ul>
            <li>
              <strong>Zonder hub:</strong> simpel, goedkoop, snel starten
            </li>
            <li>
              <strong>Met hub:</strong> flexibel, krachtig, toekomstvast
            </li>
          </ul>

          <h2>Conclusie</h2>

          <p>
            Een smart home hub is geen verplichting, maar wel een sterke
            upgrade. Begin zonder als je twijfelt en stap later over als je meer
            controle wilt.
          </p>

          <p>
            Wil je weten hoe je het beste begint?{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Bekijk onze gids: beginnen met smart home in 5 stappen
            </Link>
            .
          </p>

          <hr />

          <p className="muted small">
            *De keuze voor een hub hangt af van je wensen, budget en
            toekomstplannen.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
