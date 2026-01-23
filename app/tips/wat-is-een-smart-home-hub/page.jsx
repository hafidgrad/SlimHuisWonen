import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Wat is een smart home hub? (+ wanneer je er één nodig hebt) – 2026",
  description:
    "Wat is een smart home hub en heb je er één nodig? Lees wat een hub doet, wat het verschil is met wifi, en wanneer Homey/Home Assistant of Hue Bridge handig is.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-een-smart-home-hub",
  },
};

export default function WatIsEenSmartHomeHub() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wat%20is%20een%20smart%20home%20hub.png";

  // ✅ FAQ schema (structured data) — helpt bij rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is een smart home hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een smart home hub is een centraal systeem dat slimme apparaten met elkaar verbindt. In plaats van losse apps per merk beheer je alles op één plek en kun je merken combineren in één automatisering.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een smart home hub nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Als je alleen wifi-producten gebruikt (zoals sommige slimme stekkers) of maar één merk hebt, kun je prima zonder hub starten. Een hub wordt vooral interessant als je meerdere merken wilt combineren of met sensoren wilt automatiseren.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom gebruiken veel smart home apparaten Zigbee of Z-Wave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veel apparaten gebruiken Zigbee of Z-Wave omdat deze protocollen energiezuinig, stabiel en snel zijn. Je hebt vaak een hub nodig om Zigbee/Z-Wave apparaten te koppelen aan je smart home systeem.",
        },
      },
      {
        "@type": "Question",
        name: "Welke smart home hubs zijn populair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bekende hubs zijn Homey, Home Assistant, Samsung SmartThings en de Philips Hue Bridge (voor verlichting). Welke het beste is hangt af van je wensen en merken.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* ✅ Banner netjes in dezelfde breedte als site */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner src={tipImg} alt="Wat is een smart home hub" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster / smart home basis */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home
            </Link>{" "}
            •{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren
            </Link>
          </p>

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
            <li>Maakt automatiseringen en routines mogelijk</li>
            <li>Zorgt dat apparaten lokaal met elkaar kunnen communiceren</li>
          </ul>

          <p>
            Wil je dus merken combineren (bijvoorbeeld Hue + Aqara + Tapo)? Dan is
            een hub meestal de beste stap.{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Lees hier hoe je merken combineert zonder gedoe
            </Link>
            .
          </p>

          <h2>Waarom gebruiken merken een hub?</h2>

          <p>
            Veel slimme apparaten gebruiken geen wifi, maar protocollen zoals{" "}
            <strong>Zigbee</strong> of <strong>Z-Wave</strong>. Deze zijn:
          </p>

          <ul>
            <li>Energiezuinig (ideaal voor sensoren op batterij)</li>
            <li>Betrouwbaar en stabiel</li>
            <li>Vaak sneller dan wifi</li>
          </ul>

          <p>
            Een hub is nodig om Zigbee/Z-Wave apparaten met je netwerk en apps te
            verbinden.{" "}
            <Link href="/blog/wat-is-zigbee">Lees hier wat Zigbee is</Link>.
          </p>

          <h2>Voorbeelden van populaire hubs</h2>

          <ul>
            <li>Philips Hue Bridge (voor Hue verlichting)</li>
            <li>Homey (voor veel merken en automatiseringen)</li>
            <li>Home Assistant (meest uitgebreid, iets technischer)</li>
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

          {/* ✅ Gerelateerde tips / interne links */}
          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
            <li>
              <Link href="/tips/slim-huis-zonder-hub">
                Slim huis zonder hub: wanneer kan dat?
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/tips/beginnen-met-smart-home">
                Beginnen met smart home in 5 stappen
              </Link>
            </li>
          </ul>

          {/* ✅ FAQ sectie (ook voor bezoekers) */}
          <h2>Veelgestelde vragen</h2>
          <h3>Wat is een smart home hub?</h3>
          <p>
            Een hub is een centraal systeem dat je apparaten samenbrengt in één
            app. Zo kun je merken combineren en automatiseringen bouwen.
          </p>

          <h3>Heb je altijd een hub nodig?</h3>
          <p>
            Nee. Met alleen wifi-producten of één merk kun je prima zonder hub
            starten. Voor meerdere merken en sensoren is een hub meestal wél handig.
          </p>

          <h3>Waarom Zigbee/Z-Wave?</h3>
          <p>
            Omdat deze protocollen stabiel en energiezuinig zijn. Ideaal voor
            sensoren, schakelaars en apparaten die betrouwbaar moeten werken.
          </p>

          <hr />

          <p className="muted small">
            *De keuze voor een hub hangt af van je wensen, budget en
            toekomstplannen.
          </p>

          {/* ✅ Structured data inject */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
