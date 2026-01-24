import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Beginnen met slimme verlichting – stap-voor-stap gids voor beginners",
  description:
    "Wil je beginnen met slimme verlichting? Volg deze stap-voor-stap gids: welke lampen kies je, wifi of Zigbee, heb je een hub nodig en hoe voorkom je beginnersfouten.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/beginnen-met-slimme-verlichting",
  },
};

export default function BeginnenMetSlimmeVerlichting() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Beginnen%20met%20slimme%20verlichting.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat heb je nodig om te starten met slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je hebt minimaal één slimme lamp of slimme stekker nodig plus een app. Sommige systemen werken via wifi, andere via een bridge of hub zoals de Philips Hue Bridge.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een hub nodig voor slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Wifi-lampen werken zonder hub. Een hub is wel aan te raden als je meerdere lampen gebruikt of wilt automatiseren.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: wifi of Zigbee verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wifi is eenvoudig om mee te starten. Zigbee is meestal stabieler, energiezuiniger en beter schaalbaar voor grotere smart home setups.",
        },
      },
      {
        "@type": "Question",
        name: "Wat zijn veelgemaakte beginnersfouten bij slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veelgemaakte fouten zijn alles tegelijk willen kopen, geen rekening houden met wifi-bereik, merken mixen zonder hub en te complexe automatiseringen instellen.",
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
          <TipBanner src={tipImg} alt="Beginnen met slimme verlichting" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster */}
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

          <h1>Beginnen met slimme verlichting – stap voor stap uitgelegd</h1>

          <p className="section-intro">
            Slimme verlichting is één van de makkelijkste manieren om je huis
            slimmer te maken. Toch gaat het bij beginners vaak mis door verkeerde
            keuzes, slechte wifi of lampen die niet meer reageren. In deze gids
            leer je stap voor stap hoe je goed begint — zonder frustratie.
          </p>

          <h2>Waarom kiezen voor slimme verlichting?</h2>
          <p>
            Slimme verlichting biedt veel meer dan alleen bediening via je
            telefoon. Het verhoogt comfort, verbetert de sfeer en is vaak de
            eerste stap richting een volledig smart home.
          </p>

          <ul>
            <li>💡 Verlichting automatisch aan en uit</li>
            <li>🌅 Licht dat meebeweegt met zonsopkomst en zonsondergang</li>
            <li>🎨 De juiste sfeer voor elk moment</li>
            <li>🏠 Ideale instap in smart home automatisering</li>
          </ul>

          <h2>Welke slimme verlichting past bij jou?</h2>
          <p>
            Niet iedereen heeft dezelfde wensen. Daarom is het belangrijk om
            vooraf te bepalen wat je verwacht van slimme verlichting.
          </p>

          <h3>Simpel gemak (aan/uit en timers)</h3>
          <p>
            Wil je vooral gemak? Dan zijn wifi-lampen of slimme stekkers een
            prima start. Ze werken zonder hub en zijn snel geïnstalleerd.
          </p>

          <h3>Sfeer en dimmen</h3>
          <p>
            Met dimbaar en instelbaar wit licht pas je de sfeer aan per moment
            van de dag. Ideaal voor woonkamers en slaapkamers.
          </p>

          <h3>Kleur en automatiseringen</h3>
          <p>
            Wil je meer mogelijkheden? Slimme lampen met kleur bieden extra
            beleving en werken perfect samen met scènes en automatiseringen.
          </p>

          <h2>Stap-voor-stap starten met slimme verlichting</h2>

          <h3>Stap 1: Begin met één ruimte</h3>
          <p>
            Start klein, bijvoorbeeld in de woonkamer of hal. Zo houd je
            overzicht en voorkom je onnodige kosten.
          </p>

          <h3>Stap 2: Kies wifi of Zigbee</h3>
          <p>
            Wifi is eenvoudig om mee te starten. Zigbee werkt via een hub, maar
            is stabieler als je meerdere lampen gebruikt.{" "}
            <Link href="/tips/wat-is-zigbee">Lees hier wat Zigbee is</Link>.
          </p>

          <h3>Stap 3: Installeer app of bridge</h3>
          <p>
            Volg de stappen in de app van de fabrikant. Gebruik je Philips Hue?
            Dan is de Hue Bridge sterk aan te raden voor stabiliteit.
          </p>

          <h3>Stap 4: Maak je eerste automatisering</h3>
          <p>
            Stel bijvoorbeeld in dat het licht automatisch aangaat bij
            zonsondergang. Dit is waar slimme verlichting echt handig wordt.
          </p>

          <h3>Stap 5: Breid rustig uit</h3>
          <p>
            Voeg later extra lampen, schakelaars of sensoren toe. Zo groeit je
            smart home mee met je ervaring.
          </p>

          <h2>Veelgemaakte beginnersfouten</h2>
          <ul>
            <li>❌ Alles tegelijk willen kopen</li>
            <li>❌ Wifi-bereik onderschatten</li>
            <li>❌ Merken combineren zonder centrale hub</li>
            <li>❌ Te complexe automatiseringen maken</li>
          </ul>

          <p>
            Zeker bij wifi-lampen is een stabiele 2.4 GHz verbinding cruciaal.{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je je wifi voor smart home
            </Link>
            .
          </p>

          <h2>Aanbevolen producten voor beginners</h2>
          <ul>
            <li>
              <Link href="/producten/philips-hue-white-ambiance-starterkit">
                Philips Hue White Ambiance Starterkit
              </Link>{" "}
              – stabiele en uitbreidbare start
            </li>
            <li>
              <Link href="/producten/tp-link-tapo-p110-slimme-stekker">
                TP-Link Tapo P110 slimme stekker
              </Link>{" "}
              – betaalbaar en eenvoudig
            </li>
          </ul>

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
                Slimme lamp werkt niet met schakelaar
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
                Slimme verlichting werkt niet na stroomuitval
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
          </ul>

          {/* ✅ Structured data */}
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
