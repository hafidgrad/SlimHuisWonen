import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slim huis zonder hub: kan dat? (voor- en nadelen) – 2026",
  description:
    "Een slim huis zonder hub is mogelijk met wifi-apparaten zoals slimme stekkers en lampen. Ontdek wanneer dit goed werkt, wat de nadelen zijn en wanneer een hub slimmer is.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/slim-huis-zonder-hub",
  },
};

export default function SlimHuisZonderHub() {
  const tipImg = "/images/Tips%20%26%20uitleg/Slim%20huis%20zonder%20hub.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kun je een slim huis maken zonder hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Veel smart home apparaten werken direct via wifi en hebben geen aparte hub nodig. Dit is vooral geschikt als je klein begint met een paar apparaten.",
        },
      },
      {
        "@type": "Question",
        name: "Wat zijn de nadelen van een slim huis zonder hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zonder hub ben je afhankelijk van wifi en cloud. Bij veel apparaten kan het minder stabiel worden en zijn automatiseringen vaak beperkter.",
        },
      },
      {
        "@type": "Question",
        name: "Wanneer is een hub wél aan te raden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een hub is handig als je meerdere merken wilt combineren, met sensoren wilt automatiseren of een stabieler systeem wilt dat lokaal werkt.",
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
          <TipBanner src={tipImg} alt="Slim huis zonder hub" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home
            </Link>{" "}
            •{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Smart home hubs
            </Link>
          </p>

          <h1>Slim huis zonder hub: kan dat?</h1>

          <p className="section-intro">
            Twijfel je of je meteen een smart home hub nodig hebt? Goed nieuws:
            een slim huis zonder hub is zeker mogelijk. Vooral voor beginners
            kan dit een eenvoudige en betaalbare start zijn.
          </p>

          <h2>Hoe werkt een slim huis zonder hub?</h2>
          <p>
            In een smart home zonder hub verbindt elk apparaat rechtstreeks met
            je wifi-netwerk. Je bedient ze via een losse app of via platforms
            zoals Google Home of Alexa.
          </p>

          <p>Voorbeelden van apparaten die vaak zonder hub werken:</p>
          <ul>
            <li>wifi-lampen (zoals TP-Link Tapo)</li>
            <li>slimme stekkers</li>
            <li>slimme camera’s</li>
            <li>deurbellen met eigen app</li>
          </ul>

          <h3>Let op: wifi is dan extra belangrijk</h3>
          <p>
            Omdat alles via wifi werkt, is een stabiel netwerk cruciaal. Heb je
            vaak offline apparaten of verbindingsproblemen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home
            </Link>
            .
          </p>

          <h2>Wanneer werkt een slim huis zonder hub goed?</h2>
          <ul>
            <li>je gebruikt maar een paar slimme apparaten</li>
            <li>je wilt eenvoudige aan/uit-functies</li>
            <li>je gebruikt één merk of één app</li>
            <li>je wilt goedkoop en snel starten</li>
          </ul>

          <h2>Voordelen van een slim huis zonder hub</h2>
          <ul>
            <li>lage instapkosten</li>
            <li>geen extra hardware nodig</li>
            <li>eenvoudige installatie</li>
            <li>ideaal voor beginners</li>
          </ul>

          <h2>Nadelen van een slim huis zonder hub</h2>
          <ul>
            <li>minder stabiel bij veel apparaten</li>
            <li>beperkte automatiseringen</li>
            <li>meerdere apps nodig bij verschillende merken</li>
            <li>afhankelijk van wifi en cloud</li>
          </ul>

          <h2>Wanneer is een hub wél slim?</h2>
          <p>
            Zodra je meer wilt dan alleen losse apparaten, wordt een hub
            interessant. Denk aan merken combineren, sensoren gebruiken of
            betrouwbaardere automatiseringen.
          </p>

          <p>
            👉{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat doet een smart home hub precies?
            </Link>
          </p>

          <p>
            Wil je merken combineren zoals Hue, Aqara en Tapo? Dan is dit artikel
            ook handig:{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              merken combineren zonder gedoe
            </Link>
            .
          </p>

          <h2>Conclusie</h2>
          <p>
            Een slim huis zonder hub is een prima startpunt. Het is betaalbaar,
            eenvoudig en laagdrempelig. Wil je later meer automatiseren of
            verschillende merken combineren, dan kun je altijd alsnog een hub
            toevoegen.
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
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
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
