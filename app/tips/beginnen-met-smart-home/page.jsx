import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Beginnen met smart home in 5 stappen (complete gids) – 2026",
  description:
    "Wil je beginnen met een smart home? Volg deze 5 simpele stappen en voorkom beginnersfouten. Inclusief tips over hub, wifi, Zigbee en slimme verlichting.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/beginnen-met-smart-home",
  },
};

export default function BeginnenMetSmartHome() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Beginnen%20met%20smart%20home%20in%205%20stappen.png";

  // ✅ FAQ schema (structured data) — helpt bij rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hoe begin je met smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Begin klein met één slim apparaat (bijv. slimme lamp of stekker). Kies daarna een ecosysteem, maak simpele automatiseringen en breid pas uit als je weet wat je mist.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig om te starten met smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Met wifi-producten kun je prima zonder hub starten. Een hub wordt vooral handig als je meerdere merken wilt combineren of met sensoren wilt automatiseren.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is de makkelijkste smart home start voor beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme verlichting is vaak de makkelijkste start. Je merkt direct verschil in comfort en je kunt later uitbreiden met sensoren, routines en een hub.",
        },
      },
      {
        "@type": "Question",
        name: "Wat kost een smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een smart home start kan al vanaf ongeveer €10–€30 met één product. Met meerdere apparaten zit je vaak rond €50–€150. Een uitgebreid systeem met hub en sensoren kost meestal €200+.",
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
          <TipBanner src={tipImg} alt="Beginnen met smart home" />
        </div>

        <div className="container article">
          {/* ✅ Pillar bovenaan (dit is al pillar-achtig, dus we linken naar belangrijke subtopics) */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Populaire onderwerpen:{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Slimme verlichting starten
            </Link>{" "}
            •{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">Smart home hub</Link>{" "}
            •{" "}
            <Link href="/blog/wat-is-zigbee">Zigbee uitleg</Link>
          </p>

          <h1>Beginnen met smart home in 5 stappen</h1>

          <p className="section-intro">
            Een smart home hoeft niet ingewikkeld of duur te zijn. In deze gids
            nemen we je stap voor stap mee: van je eerste slimme lamp tot een
            huis dat automatisch met je meedenkt.
          </p>

          {/* STAP 1 */}
          <h2>Stap 1: Begin klein</h2>

          <p>
            De grootste fout die beginners maken is alles tegelijk willen. Begin
            met één slim apparaat en ontdek wat je écht handig vindt.
          </p>

          <ul>
            <li>Een slimme lamp</li>
            <li>Een slimme stekker</li>
            <li>Een eenvoudige sensor</li>
          </ul>

          <p>
            Slimme verlichting is voor de meeste mensen de makkelijkste start.{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Bekijk hier hoe je begint met slimme verlichting
            </Link>
            .
          </p>

          {/* STAP 2 */}
          <h2>Stap 2: Kies één ecosysteem</h2>

          <p>
            Elk smart home werkt met een app of platform. Door in het begin één
            ecosysteem te kiezen, voorkom je frustratie en dubbele apps.
          </p>

          <ul>
            <li>Philips Hue – sterk in verlichting</li>
            <li>TP-Link Tapo – betaalbaar en werkt via wifi</li>
            <li>Aqara – ideaal voor sensoren en automatiseringen</li>
          </ul>

          <p>
            Vraag je je af of je meteen een hub nodig hebt?{" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Lees hier wanneer een hub wel of niet nodig is
            </Link>
            .
          </p>

          {/* STAP 3 */}
          <h2>Stap 3: Denk na over automatiseringen</h2>

          <p>
            Een smart home is pas écht slim als dingen automatisch gebeuren,
            zonder dat je erover hoeft na te denken.
          </p>

          <ul>
            <li>Licht automatisch aan bij zonsondergang</li>
            <li>Licht aan bij beweging</li>
            <li>Alles uit wanneer je het huis verlaat</li>
          </ul>

          <p>
            Automatiseringen werken het beste als merken goed samenwerken.{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Zo combineer je verschillende merken zonder gedoe
            </Link>
            .
          </p>

          {/* STAP 4 */}
          <h2>Stap 4: Breid rustig uit</h2>

          <p>
            Pas als je weet wat je mist, ga je uitbreiden. Denk bijvoorbeeld
            aan:
          </p>

          <ul>
            <li>Extra slimme lampen</li>
            <li>Bewegings- of contactsensoren</li>
            <li>Slimme stekkers voor bestaande apparaten</li>
          </ul>

          <p>
            Door stap voor stap uit te breiden blijft je smart home
            overzichtelijk én betaalbaar.
          </p>

          {/* STAP 5 */}
          <h2>Stap 5: Maak het gebruiksvriendelijk</h2>

          <p>
            Een smart home moet je leven makkelijker maken, niet ingewikkelder.
          </p>

          <ul>
            <li>Gebruik vaste schema’s</li>
            <li>Maak duidelijke scènes (zoals ‘thuis’ en ‘weg’)</li>
            <li>Zorg dat fysieke schakelaars blijven werken</li>
          </ul>

          <h3>Let op: je wifi bepaalt je ervaring</h3>
          <p>
            Zeker bij wifi-producten is je netwerk cruciaal. Heb je vaak
            verbindingsproblemen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Lees hoe je wifi verbetert voor smart home
            </Link>
            .
          </p>

          {/* KOSTEN */}
          <h2>Wat kost een smart home?</h2>

          <p>
            Je bepaalt zelf hoe uitgebreid je het maakt. Een start hoeft niet
            duur te zijn.
          </p>

          <ul>
            <li>Startproduct: €10 – €30</li>
            <li>Meerdere apparaten: €50 – €150</li>
            <li>Uitgebreid systeem: €200+</li>
          </ul>

          {/* PRODUCTEN */}
          <h2>Aanbevolen producten om te starten</h2>

          <ul>
            <li>
              <Link href="/producten/philips-hue-white-ambiance-starterkit">
                Philips Hue White Ambiance Starterkit
              </Link>{" "}
              – complete start met slimme verlichting
            </li>
            <li>
              <Link href="/producten/tp-link-tapo-p110-slimme-stekker">
                TP-Link Tapo P110 slimme stekker
              </Link>{" "}
              – goedkoop beginnen zonder hub
            </li>
          </ul>

          {/* CONCLUSIE */}
          <h2>Conclusie</h2>

          <p>
            Beginnen met een smart home hoeft niet moeilijk te zijn. Door klein
            te starten en stap voor stap uit te breiden, bouw je een systeem dat
            écht bij jou past.
          </p>

          <p>
            Meer uitleg nodig? <Link href="/tips">Bekijk alle tips & uitleg</Link>
          </p>

          <hr />

          {/* ✅ Gerelateerde tips / interne links */}
          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
              </Link>
            </li>
            <li>
              <Link href="/tips/slim-huis-zonder-hub">
                Slim huis zonder hub: kan dat?
              </Link>
            </li>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/tips/wifi-verbeteren-voor-smart-home">
                Wifi verbeteren voor smart home
              </Link>
            </li>
          </ul>

          {/* ✅ FAQ sectie (ook voor bezoekers) */}
          <h2>Veelgestelde vragen</h2>
          <h3>Hoe begin je met smart home?</h3>
          <p>
            Start met één product (lamp/stekker), kies daarna een ecosysteem,
            maak simpele automatiseringen en breid rustig uit.
          </p>

          <h3>Heb je een hub nodig?</h3>
          <p>
            Niet meteen. Zonder hub kun je prima starten met wifi-producten. Een
            hub wordt belangrijker als je meerdere merken of sensoren wilt.
          </p>

          <h3>Wat kost een smart home?</h3>
          <p>
            Vanaf €10–€30 kun je al starten. Met meerdere apparaten zit je vaak
            rond €50–€150, en met hub/sensoren eerder richting €200+.
          </p>

          <hr />

          <p className="muted small">
            *Voorbeelden en prijzen zijn indicatief en kunnen wijzigen.
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
