import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Beginnen met slimme verlichting (stap-voor-stap gids) – 2026",
  description:
    "Beginnen met slimme verlichting? Volg dit stappenplan voor beginners: welke lampen kies je, heb je een hub nodig, en hoe maak je je eerste automatiseringen? Inclusief tips & aanraders.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/beginnen-met-slimme-verlichting",
  },
};

export default function BeginnenMetSlimmeVerlichting() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Beginnen%20met%20slimme%20verlichting.png";

  // ✅ FAQ schema (structured data) — helpt bij rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat heb je nodig om te starten met slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Om te starten heb je minimaal één slimme lamp of slimme stekker nodig plus de bijbehorende app. Sommige systemen werken via wifi, andere via een bridge/hub (zoals Philips Hue Bridge).",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig voor slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Wifi-lampen werken zonder hub. Maar een hub/bridge is vaak stabieler, vooral als je uitbreidt met meerdere lampen en automatiseringen. Hue werkt bijvoorbeeld het beste met Hue Bridge.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: wifi verlichting of Zigbee verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wifi is eenvoudig om mee te starten, maar kan bij veel apparaten instabiel worden. Zigbee is energiezuinig, sneller en vaak betrouwbaarder, vooral in combinatie met een hub/bridge.",
        },
      },
      {
        "@type": "Question",
        name: "Wat zijn beginnersfouten bij slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De grootste fouten zijn alles tegelijk kopen, het wifi-bereik vergeten, merken kiezen die slecht samenwerken en direct complexe automatiseringen instellen.",
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
          <TipBanner src={tipImg} alt="Beginnen met slimme verlichting" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster / slimme verlichting */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/wat-is-slimme-verlichting">Slimme verlichting</Link>{" "}
            •{" "}
            <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
              Stroomuitval problemen
            </Link>{" "}
            •{" "}
            <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
              Lamp + schakelaar
            </Link>
          </p>

          <h1>Beginnen met slimme verlichting (stap-voor-stap)</h1>

          <p className="section-intro">
            Slimme verlichting is één van de makkelijkste en betaalbaarste
            manieren om je huis slimmer te maken. Je hebt geen technische kennis
            nodig en vaak kun je al binnen enkele minuten aan de slag. In dit
            artikel leer je stap voor stap hoe je begint — van je eerste slimme
            lamp tot eenvoudige automatiseringen.
          </p>

          <h2>Waarom kiezen voor slimme verlichting?</h2>

          <p>
            Slimme verlichting biedt veel meer dan alleen een lamp die je met je
            telefoon aan- en uitzet. Het verhoogt het comfort, verbetert de
            sfeer in huis en kan helpen energie te besparen.
          </p>

          <ul>
            <li>💡 Nooit meer vergeten het licht uit te doen</li>
            <li>🌅 Automatisch licht bij zonsondergang</li>
            <li>🎨 De juiste sfeer voor elk moment</li>
            <li>🔋 Inzicht in energieverbruik (bij sommige systemen)</li>
            <li>🏠 Een ideale eerste stap richting een smart home</li>
          </ul>

          <h2>Welke slimme verlichting past bij jou?</h2>

          <p>
            Slimme verlichting is verkrijgbaar in verschillende soorten. De
            juiste keuze hangt af van jouw wensen en hoe ver je wilt gaan met
            automatiseren.
          </p>

          <h3>1. Simpel aan/uit en timers</h3>
          <p>
            Wil je vooral gemak? Dan zijn wifi-lampen of slimme stekkers een
            uitstekende keuze. Hiermee zet je verlichting op afstand aan of uit
            en stel je eenvoudige tijdschema’s in.
          </p>

          <h3>2. Sfeer en dimmen</h3>
          <p>
            Met slimme lampen met instelbaar wit licht (van warm tot koel) pas
            je de sfeer aan per moment van de dag. Ideaal voor de woonkamer,
            keuken of slaapkamer.
          </p>

          <h3>3. Kleur en automatisering</h3>
          <p>
            Wil je meer beleving? Dan zijn slimme lampen met kleur een mooie
            toevoeging. Denk aan filmavonden, feestverlichting of rustgevend
            licht in de avond.
          </p>

          <h2>Stap-voor-stap starten met slimme verlichting</h2>

          <h3>Stap 1: Kies één ruimte</h3>
          <p>
            Begin klein en kies één ruimte, zoals de woonkamer of hal. Zo houd
            je overzicht en leer je hoe slimme verlichting werkt.
          </p>

          <h3>Stap 2: Bepaal wat je wilt bereiken</h3>
          <ul>
            <li>Automatisch licht bij thuiskomst</li>
            <li>Dimbaar licht in de avond</li>
            <li>Licht dat meebeweegt met je dagritme</li>
          </ul>

          <h3>Stap 3: Begin met één product</h3>
          <p>
            Start met één slimme lamp of stekker. Dit voorkomt onnodige kosten
            en maakt het makkelijker om ervaring op te doen.
          </p>

          <h3>Stap 4: Installeer de app (of bridge)</h3>
          <p>
            Elke fabrikant gebruikt een eigen app. Volg de stappen in de app om
            de verlichting te koppelen aan je wifi of bridge. Gebruik je Hue? Dan
            werkt het meestal het beste via de Hue Bridge.
          </p>

          <h3>Stap 5: Maak je eerste automatisering</h3>
          <p>
            Stel bijvoorbeeld in dat het licht automatisch aangaat bij
            zonsondergang of op vaste tijden. Hier merk je het gemak van slimme
            verlichting.
          </p>

          <h3>Stap 6: Breid later uit</h3>
          <p>
            Ben je tevreden? Dan kun je uitbreiden met extra lampen, dimmers,
            bewegingssensoren of een smart home hub.
          </p>

          <h2>Veelgemaakte beginnersfouten</h2>

          <ul>
            <li>❌ Alles tegelijk willen kopen</li>
            <li>❌ Geen rekening houden met wifi-bereik</li>
            <li>❌ Merken kiezen die slecht samenwerken</li>
            <li>❌ Direct complexe automatiseringen instellen</li>
          </ul>

          <h3>Let op: wifi bereik kan je start maken of breken</h3>
          <p>
            Zeker bij wifi-lampen (zoals Tapo of Wiz) heb je goede 2.4 GHz wifi
            nodig.{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Lees hier hoe je wifi verbetert voor smart home
            </Link>
            .
          </p>

          <h2>Aanbevolen producten voor beginners</h2>

          <ul>
            <li>
              <Link href="/producten/philips-hue-white-ambiance-starterkit">
                Philips Hue White Ambiance Starterkit
              </Link>{" "}
              – complete en stabiele start voor beginners
            </li>
            <li>
              <Link href="/producten/tp-link-tapo-p110-slimme-stekker">
                TP-Link Tapo P110 slimme stekker
              </Link>{" "}
              – betaalbaar en eenvoudig te installeren
            </li>
          </ul>

          <p>
            Wil je eerst goed begrijpen wat slimme verlichting is?{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Lees hier wat slimme verlichting precies inhoudt
            </Link>
            .
          </p>

          <hr />

          {/* ✅ Gerelateerde tips / interne links */}
          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/wat-is-slimme-verlichting">
                Wat is slimme verlichting?
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
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
          </ul>

          {/* ✅ FAQ sectie (ook voor bezoekers) */}
          <h2>Veelgestelde vragen</h2>
          <h3>Wat heb je nodig om te starten met slimme verlichting?</h3>
          <p>
            Minimaal één slimme lamp of slimme stekker + app. Sommige systemen
            werken via wifi, andere via een bridge/hub.
          </p>

          <h3>Heb je een hub nodig?</h3>
          <p>
            Niet altijd. Wifi kan zonder hub. Maar een bridge/hub is vaak
            betrouwbaarder als je uitbreidt.
          </p>

          <h3>Wifi of Zigbee: wat is beter?</h3>
          <p>
            Wifi is makkelijk om mee te beginnen. Zigbee is meestal stabieler en
            schaalbaarder, zeker met meerdere lampen.
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
            <li>
              <Link href="/tips/wifi-verbeteren-voor-smart-home">
                Wifi verbeteren voor smart home
              </Link>
            </li>
          </ul>

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
