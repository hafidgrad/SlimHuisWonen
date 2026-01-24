import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Wat is een smart home hub? (+ wanneer je er één nodig hebt) – 2026",
  description:
    "Wat is een smart home hub en heb je er één nodig? Lees wat een hub doet, het verschil met wifi en wanneer Homey, Home Assistant of Hue Bridge slim is.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-een-smart-home-hub",
  },
};

export default function WatIsEenSmartHomeHub() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wat%20is%20een%20smart%20home%20hub.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is een smart home hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een smart home hub is het centrale brein van een slim huis. Het verbindt apparaten van verschillende merken in één systeem, zodat ze samen kunnen automatiseren.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een smart home hub nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Met alleen wifi-producten of één merk kun je prima zonder hub starten. Een hub wordt vooral handig als je meerdere merken of sensoren wilt combineren.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom gebruiken veel smart home apparaten Zigbee of Z-Wave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zigbee en Z-Wave zijn energiezuinig en stabiel. Ze zijn ideaal voor sensoren en slimme schakelaars, maar vereisen meestal een hub om te werken.",
        },
      },
      {
        "@type": "Question",
        name: "Welke smart home hubs zijn populair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Populaire hubs zijn Homey, Home Assistant, Samsung SmartThings en de Philips Hue Bridge (specifiek voor Hue verlichting).",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* ✅ Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner src={tipImg} alt="Wat is een smart home hub" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster */}
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
            Een smart home hub wordt vaak het brein van een slim huis genoemd.
            Maar heb je zo’n hub echt nodig? In dit artikel leggen we het
            eenvoudig en praktisch uit — zonder technisch gedoe.
          </p>

          <h2>Wat doet een smart home hub?</h2>
          <p>
            Een smart home hub verbindt slimme apparaten met elkaar in één
            centraal systeem. In plaats van losse apps per merk, beheer je
            alles vanuit één plek.
          </p>

          <ul>
            <li>verbindt apparaten van verschillende merken</li>
            <li>maakt automatiseringen en routines mogelijk</li>
            <li>zorgt voor stabielere, vaak lokale communicatie</li>
          </ul>

          <p>
            Wil je merken combineren zoals Hue, Aqara en Tapo? Dan is een hub
            meestal de beste keuze.{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Zo combineer je smart home merken zonder gedoe
            </Link>
            .
          </p>

          <h2>Waarom gebruiken veel merken een hub?</h2>
          <p>
            Veel slimme apparaten werken niet via wifi, maar via{" "}
            <strong>Zigbee</strong> of <strong>Z-Wave</strong>. Deze protocollen
            zijn:
          </p>

          <ul>
            <li>energiezuinig (perfect voor sensoren op batterij)</li>
            <li>betrouwbaar en stabiel</li>
            <li>vaak sneller dan wifi</li>
          </ul>

          <p>
            Een hub is nodig om Zigbee- en Z-Wave-apparaten te koppelen aan je
            smart home systeem.{" "}
            <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
          </p>

          <h2>Voorbeelden van populaire smart home hubs</h2>
          <ul>
            <li>Philips Hue Bridge (specifiek voor Hue verlichting)</li>
            <li>Homey (breed ondersteund, gebruiksvriendelijk)</li>
            <li>Home Assistant (zeer krachtig, iets technischer)</li>
            <li>Samsung SmartThings</li>
          </ul>

          <h2>Wanneer heb je géén hub nodig?</h2>
          <p>
            Je hebt niet altijd een hub nodig. Veel mensen starten prima zonder.
          </p>

          <ul>
            <li>bij wifi-producten (zoals TP-Link Tapo)</li>
            <li>als je maar één merk gebruikt</li>
            <li>als je alleen basis aan/uit-functies wilt</li>
          </ul>

          <p>
            Twijfel je?{" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Zo werkt een slim huis zonder hub
            </Link>
            .
          </p>

          <h2>Wanneer is een hub wél aan te raden?</h2>
          <ul>
            <li>als je meerdere merken wilt combineren</li>
            <li>als je met sensoren wilt automatiseren</li>
            <li>als je een betrouwbaarder systeem wilt (minder cloud-afhankelijk)</li>
          </ul>

          <h2>Hub vs geen hub: wat past bij jou?</h2>
          <ul>
            <li>
              <strong>Zonder hub:</strong> simpel, goedkoop, snel starten
            </li>
            <li>
              <strong>Met hub:</strong> flexibel, krachtig en toekomstbestendig
            </li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Een smart home hub is geen verplichting, maar wel een sterke
            uitbreiding. Begin gerust zonder hub en stap later over wanneer je
            meer controle en automatisering wilt.
          </p>

          <p>
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home in 5 stappen →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
            <li>
              <Link href="/tips/slim-huis-zonder-hub">
                Slim huis zonder hub
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
