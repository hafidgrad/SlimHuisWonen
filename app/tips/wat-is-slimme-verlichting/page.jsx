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

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme verlichting is verlichting die je bedient via een app, schema’s, automatiseringen of spraak. Je kunt lampen op afstand aan- en uitzetten, dimmen, kleuren aanpassen en routines instellen.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe werkt slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme verlichting werkt via wifi of via een hub/bridge (vaak Zigbee). Wifi-lampen verbinden direct met je router, terwijl Zigbee-lampen via een hub werken en meestal stabieler zijn.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig voor slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Voor eenvoudige wifi-verlichting is geen hub nodig. Bij meerdere lampen, automatiseringen of het combineren van merken is een hub meestal aan te raden.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: wifi of Zigbee verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wifi is makkelijk om mee te starten. Zigbee is vaak stabieler, schaalbaarder en beter geschikt voor grotere installaties en automatiseringen.",
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
          <TipBanner src={tipImg} alt="Wat is slimme verlichting?" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster */}
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
            Slimme verlichting is verlichting die je niet alleen met een
            wandschakelaar bedient, maar ook via een app, schema’s,
            automatiseringen of spraak. Voor veel mensen is dit de eerste stap
            richting een slim huis.
          </p>

          <h2>Wat maakt verlichting “slim”?</h2>
          <p>
            Slimme verlichting is verbonden met internet of een hub. Daardoor
            kun je lampen automatisch laten reageren op tijd, beweging of andere
            slimme apparaten.
          </p>

          <ul>
            <li>aan- en uitzetten via een app</li>
            <li>timers en schema’s instellen</li>
            <li>dimmen of kleuren aanpassen</li>
            <li>automatisch reageren op tijdstip of beweging</li>
          </ul>

          <h2>Hoe werkt slimme verlichting?</h2>
          <p>
            Er zijn twee veelgebruikte manieren waarop slimme verlichting werkt.
            De keuze bepaalt hoe stabiel en uitbreidbaar je systeem is.
          </p>

          <h3>1. Wifi-verlichting</h3>
          <p>
            Wifi-lampen verbinden direct met je router. Ze zijn goedkoop en
            eenvoudig om mee te beginnen, maar kunnen bij veel apparaten of
            zwakke wifi instabiel worden.
          </p>

          <p>
            Heb je vaak verbindingsproblemen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home
            </Link>
            .
          </p>

          <h3>2. Verlichting met hub (meestal Zigbee)</h3>
          <p>
            Systemen zoals Philips Hue en Aqara werken via een hub of bridge.
            Dit is meestal stabieler, sneller en beter geschikt voor
            automatiseringen en meerdere lampen.
          </p>

          <p>
            Zigbee is een veelgebruikt protocol voor verlichting en sensoren.{" "}
            <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
          </p>

          <h2>Heb je altijd een hub nodig?</h2>
          <p>
            Nee. Voor eenvoudige toepassingen kun je prima starten zonder hub.
            Wil je meerdere ruimtes automatiseren, sensoren gebruiken of merken
            combineren, dan is een hub sterk aan te raden.
          </p>

          <p>
            Meer hierover?{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat doet een smart home hub precies?
            </Link>
            .
          </p>

          {/* ✅ NIEUWE INTERNE LINK – veilig toegevoegd */}
          <p>
            Door verlichting te automatiseren kun je niet alleen comfort
            verhogen, maar ook onnodig energieverbruik voorkomen.{" "}
            <Link href="/tips/energie-besparen-met-smart-home">
              Zo bespaar je energie met een smart home
            </Link>
            .
          </p>

          <h2>Veelgemaakte beginnersfout: schakelaars gebruiken</h2>
          <p>
            Slimme lampen hebben vaak continu stroom nodig. Zet je ze uit via de
            fysieke schakelaar, dan lijken ze offline of kapot.{" "}
            <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
              Daarom werken slimme lampen niet goed met een schakelaar
            </Link>
            .
          </p>

          <h2>Conclusie</h2>
          <p>
            Slimme verlichting is een laagdrempelige manier om je huis slimmer
            te maken. Je kunt starten met wifi-lampen, maar als je later wilt
            uitbreiden met meerdere lampen, sensoren en automatiseringen, is
            Zigbee met een hub vaak de beste keuze.
          </p>

          <p>
            Klaar om te beginnen?{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Volg het stappenplan voor slimme verlichting →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting
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
