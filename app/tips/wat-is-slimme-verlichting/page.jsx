import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Wat is slimme verlichting? (uitleg + wifi vs Zigbee) – 2026",
  description:
    "Wat is slimme verlichting en hoe werkt het? Leer het verschil tussen wifi en Zigbee, wanneer je een hub nodig hebt en hoe je slim start met automatiseringen.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-slimme-verlichting",
  },
};

export default function WatIsSlimmeVerlichtingPage() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wat%20is%20slimme%20verlichting.png";

  // ✅ FAQ schema (structured data) — helpt bij rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme verlichting is verlichting die je bedient via een app, schema’s, automatiseringen of spraak. Je kunt lampen op afstand aan/uit zetten, dimmen, kleuren aanpassen en routines maken voor extra comfort.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe werkt slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme verlichting werkt via wifi of via een hub/bridge (vaak Zigbee). Wifi-lampen verbinden direct met je router, terwijl Zigbee-lampen via een bridge/hub werken, wat vaak stabieler is voor grotere installaties.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig voor slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Voor simpele wifi-verlichting heb je geen hub nodig. Maar als je meerdere lampen hebt, betrouwbare automatiseringen wilt of merken wilt combineren, is een hub/bridge meestal aan te raden.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: wifi of Zigbee verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wifi is makkelijk om mee te beginnen, maar kan bij veel apparaten instabiel worden. Zigbee is vaak stabieler, sneller en schaalbaarder—vooral als je later uitbreidt met sensoren en automatiseringen.",
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
          <TipBanner src={tipImg} alt="Wat is slimme verlichting?" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster / slimme verlichting */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Beginnen met slimme verlichting
            </Link>{" "}
            •{" "}
            <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
              Problemen na stroomuitval
            </Link>
          </p>

          <h1>Wat is slimme verlichting?</h1>

          <p className="section-intro">
            Slimme verlichting is verlichting die je niet alleen met een schakelaar
            bedient, maar ook via een app, schema’s, automatiseringen of spraak.
            Het is vaak de eerste stap richting een slim huis.
          </p>

          <h2>Wat maakt verlichting “slim”?</h2>

          <p>
            Slimme verlichting is verbonden met internet of een hub. Daardoor kun je
            lampen bedienen wanneer je wilt, automatisch laten reageren of combineren
            met andere slimme apparaten.
          </p>

          <ul>
            <li>Aan- en uitzetten via een app</li>
            <li>Timers en schema’s instellen</li>
            <li>Dimmen of kleur aanpassen</li>
            <li>Automatisch reageren op beweging of tijdstip</li>
          </ul>

          <h2>Hoe werkt slimme verlichting?</h2>

          <p>
            Er zijn verschillende manieren waarop slimme verlichting werkt. Dit bepaalt
            ook hoe uitgebreid je systeem kan worden.
          </p>

          <h3>1. Wifi-verlichting</h3>
          <p>
            Deze lampen verbinden direct met je wifi. Ze zijn goedkoop en eenvoudig,
            maar minder geschikt voor grote installaties of huizen met zwakke wifi.
          </p>

          <p>
            👉 Heb je wifi-problemen met smart home?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Lees hoe je wifi verbetert voor smart home
            </Link>
            .
          </p>

          <h3>2. Verlichting met hub (vaak Zigbee)</h3>
          <p>
            Systemen zoals Philips Hue of Aqara gebruiken een hub/bridge. Dit is vaak
            stabieler, sneller en beter geschikt voor automatiseringen.
          </p>

          <p>
            Zigbee is een populair protocol voor verlichting en sensoren.{" "}
            <Link href="/blog/wat-is-zigbee">Lees hier wat Zigbee is</Link>.
          </p>

          <h2>Heb je altijd een hub nodig?</h2>
          <p>
            Nee. Voor eenvoudige toepassingen is een hub niet nodig. Wil je meerdere
            merken combineren of automatiseringen maken met sensoren, dan is een hub
            wel aan te raden.
          </p>

          <p>
            Wil je precies weten wanneer je een hub nodig hebt?{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Lees wat een smart home hub is
            </Link>
            .
          </p>

          <h2>Veelgemaakte beginnersfout: lampen via schakelaar uitzetten</h2>
          <p>
            Slimme lampen hebben vaak continu stroom nodig. Als je ze via de fysieke
            schakelaar uitzet, kunnen ze “offline” lijken.{" "}
            <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
              Lees waarom slimme lampen niet goed werken met een schakelaar
            </Link>
            .
          </p>

          <h2>Conclusie</h2>
          <p>
            Slimme verlichting is een eenvoudige en betaalbare manier om je huis slimmer
            te maken. Je kunt starten met wifi-lampen, maar als je later wilt uitbreiden
            (meerdere ruimtes, sensoren, routines) is Zigbee met een hub vaak de beste
            keuze.
          </p>

          <p>
            Wil je meteen starten?{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Volg ons stappenplan voor beginners →
            </Link>
          </p>

          <hr />

          {/* ✅ Gerelateerde tips / interne links */}
          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting (stappenplan)
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
                Slimme verlichting werkt niet na stroomuitval
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
                Slimme lamp werkt niet met schakelaar
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
              </Link>
            </li>
          </ul>

          {/* ✅ FAQ sectie (ook voor bezoekers) */}
          <h2>Veelgestelde vragen</h2>
          <h3>Wat is slimme verlichting?</h3>
          <p>
            Slimme verlichting is verlichting die je via een app, schema’s of spraak
            kunt bedienen. Je kunt ook automatiseringen instellen zoals licht bij
            zonsondergang.
          </p>

          <h3>Wifi of Zigbee: wat is beter?</h3>
          <p>
            Wifi is makkelijk om mee te beginnen. Zigbee is meestal stabieler en beter
            als je later wilt uitbreiden met sensoren en routines.
          </p>

          <h3>Heb ik een hub nodig?</h3>
          <p>
            Niet altijd, maar het is vaak wel aan te raden als je meerdere lampen hebt
            of merken wilt combineren.
          </p>

          <hr />

          <p className="muted small">
            *Let op: de beste keuze hangt af van je woning, wifi-kwaliteit en hoeveel
            lampen je wilt gebruiken.
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
