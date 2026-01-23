import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slim huis zonder hub: kan dat? (voor- en nadelen + tips) – 2026",
  description:
    "Een slim huis zonder hub is mogelijk met wifi-apparaten zoals slimme stekkers en lampen. Ontdek wanneer dit goed werkt, wat de nadelen zijn en wanneer je beter een hub neemt.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/slim-huis-zonder-hub",
  },
};

export default function SlimHuisZonderHub() {
  const tipImg = "/images/Tips%20%26%20uitleg/Slim%20huis%20zonder%20hub.png";

  // ✅ FAQ schema (structured data) — helpt bij rich results in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kun je een slim huis maken zonder hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Veel smart home apparaten werken direct via wifi en hebben geen aparte hub nodig. Je bedient ze via een app of via Google Home/Alexa. Dit werkt vooral goed als je klein begint met een paar apparaten.",
        },
      },
      {
        "@type": "Question",
        name: "Wat zijn de nadelen van smart home zonder hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zonder hub ben je vaak afhankelijk van wifi en cloud. Bij veel apparaten kan het minder stabiel worden en heb je sneller meerdere apps nodig. Ook zijn automatiseringen meestal beperkter.",
        },
      },
      {
        "@type": "Question",
        name: "Wanneer heb je wél een hub nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een hub is vooral handig als je meerdere merken wilt combineren, met sensoren wilt automatiseren, of een betrouwbaarder systeem wilt dat lokaal werkt. Denk aan hubs zoals Homey, Home Assistant of een Hue Bridge voor verlichting.",
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
          <TipBanner src={tipImg} alt="Slim huis zonder hub" />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster / smart home basis */}
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
            Ja, een slim huis zonder hub is zeker mogelijk — vooral als je net
            begint met smart home. Veel slimme apparaten werken direct via wifi
            en een app op je telefoon.
          </p>

          <h2>Hoe werkt een slim huis zonder hub?</h2>

          <p>
            In een slim huis zonder hub verbindt elk apparaat rechtstreeks met
            je wifi-netwerk. Je bedient deze apparaten via losse apps of via een
            platform zoals Google Home of Alexa.
          </p>

          <p>Voorbeelden van apparaten die vaak zonder hub werken:</p>

          <ul>
            <li>Wifi-lampen (zoals TP-Link Tapo)</li>
            <li>Slimme stekkers</li>
            <li>Slimme camera’s</li>
            <li>Deurbellen met app</li>
          </ul>

          <h3>Tip: wifi is dan extra belangrijk</h3>
          <p>
            Omdat alles via wifi werkt, is een stabiel netwerk super belangrijk.
            Heb je vaak verbindingsproblemen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Lees hoe je wifi verbetert voor smart home
            </Link>
            .
          </p>

          <h2>Wanneer werkt een slim huis zonder hub goed?</h2>

          <ul>
            <li>Je gebruikt maar een paar slimme apparaten</li>
            <li>Je wilt eenvoudige aan/uit-functies</li>
            <li>Je gebruikt één merk of één app</li>
            <li>Je wilt goedkoop en snel starten</li>
          </ul>

          <h2>Voordelen</h2>

          <ul>
            <li>Lage instapkosten</li>
            <li>Geen extra hardware nodig</li>
            <li>Eenvoudige installatie</li>
            <li>Ideaal voor beginners</li>
          </ul>

          <h2>Nadelen</h2>

          <ul>
            <li>Minder stabiel bij veel apparaten</li>
            <li>Beperkte automatiseringen</li>
            <li>Meerdere apps nodig bij verschillende merken</li>
            <li>Afhankelijk van wifi en cloud</li>
          </ul>

          <h2>Wanneer is een hub wél slim?</h2>

          <p>
            Een hub wordt interessant zodra je meerdere merken wilt combineren
            of betrouwbaardere automatiseringen wilt gebruiken.
          </p>

          <p>
            👉{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Lees wat een smart home hub precies doet
            </Link>
          </p>

          <p>
            Wil je merken combineren (Hue + Aqara + Tapo)? Dan is dit artikel ook
            handig:{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              merken combineren zonder gedoe
            </Link>
            .
          </p>

          <h2>Conclusie</h2>

          <p>
            Een slim huis zonder hub is een prima startpunt. Het is betaalbaar
            en eenvoudig. Wil je later meer automatiseren of merken combineren,
            dan kun je altijd alsnog een hub toevoegen.
          </p>

          <p>
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home in 5 stappen →
            </Link>
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

          {/* ✅ FAQ sectie (ook voor bezoekers) */}
          <h2>Veelgestelde vragen</h2>
          <h3>Kun je een slim huis maken zonder hub?</h3>
          <p>
            Ja, zeker. Met wifi-apparaten (zoals slimme lampen en stekkers) kun
            je prima starten zonder extra hub.
          </p>

          <h3>Wat zijn de nadelen van geen hub?</h3>
          <p>
            Je bent afhankelijk van wifi en vaak ook cloud. Bij veel apparaten
            kan het instabiel worden en automatiseringen zijn meestal beperkter.
          </p>

          <h3>Wanneer is een hub wél handig?</h3>
          <p>
            Als je meerdere merken wilt combineren, sensoren wilt gebruiken of
            een betrouwbaarder systeem wilt dat lokaal draait.
          </p>

          <hr />

          <p className="muted small">
            *De mogelijkheden verschillen per merk en type apparaat.
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
