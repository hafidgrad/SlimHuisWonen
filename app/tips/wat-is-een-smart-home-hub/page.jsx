import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is een smart home hub en heb je er één nodig?",
  description:
    "Wat doet een smart home hub precies? Ontdek wanneer je een hub nodig hebt, welke soorten er zijn en wanneer je zonder kunt.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-een-smart-home-hub",
  },
};

export default function WatIsEenSmartHomeHub() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Wat is een smart home hub?</h1>

          <p className="section-intro">
            Kom je termen tegen als hub, bridge of gateway? Dan vraag je je
            waarschijnlijk af: wat doet een smart home hub precies en heb ik
            er één nodig? In dit artikel leggen we het helder en praktisch uit.
          </p>

          <h2>Wat doet een smart home hub?</h2>

          <p>
            Een smart home hub is het centrale brein van je slimme huis. Het
            verbindt verschillende slimme apparaten en laat ze met elkaar
            samenwerken — ook als ze van verschillende merken zijn.
          </p>

          <p>
            Zonder hub werken apparaten vaak alleen binnen hun eigen app.
            Met een hub kun je alles centraal aansturen.
          </p>

          <h2>Voorbeelden van bekende hubs</h2>

          <ul>
            <li>Philips Hue Bridge</li>
            <li>Homey</li>
            <li>Home Assistant</li>
            <li>Samsung SmartThings</li>
          </ul>

          <h2>Wanneer heb je een hub nodig?</h2>

          <p>
            Een hub is vooral handig (of nodig) als je:
          </p>

          <ul>
            <li>Meerdere merken wilt combineren</li>
            <li>Geavanceerde automatiseringen wilt maken</li>
            <li>Sensoren wilt gebruiken (beweging, deur, temperatuur)</li>
            <li>Betrouwbare lokale automatiseringen wilt</li>
          </ul>

          <h2>Wanneer heb je géén hub nodig?</h2>

          <p>
            Voor eenvoudige toepassingen kun je prima zonder hub starten.
          </p>

          <ul>
            <li>Enkele wifi-lampen</li>
            <li>Een slimme stekker</li>
            <li>Bediening via Google Home of Alexa</li>
          </ul>

          <p>
            Dit is ideaal voor beginners.
            {" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Lees hier hoe een slim huis zonder hub werkt
            </Link>.
          </p>

          <h2>Hub vs. cloud (belangrijk verschil)</h2>

          <p>
            Veel goedkope slimme apparaten werken via de cloud. Dat betekent:
          </p>

          <ul>
            <li>Afhankelijk van internet</li>
            <li>Langzamere reacties</li>
            <li>Minder privacy</li>
          </ul>

          <p>
            Een lokale hub (zoals Homey of Home Assistant) werkt ook zonder
            internet en reageert sneller.
          </p>

          <h2>Welke hub past bij jou?</h2>

          <p>
            Dat hangt af van hoe ver je wilt gaan:
          </p>

          <ul>
            <li>
              <strong>Beginner:</strong> Google Home / Hue Bridge
            </li>
            <li>
              <strong>Gevorderd:</strong> Homey
            </li>
            <li>
              <strong>Technisch:</strong> Home Assistant
            </li>
          </ul>

          <h2>Conclusie</h2>

          <p>
            Een smart home hub is geen verplichting, maar wel een enorme
            verbetering zodra je meer wilt dan alleen lampen aan- en uitzetten.
          </p>

          <p>
            Wil je stap-voor-stap starten?
            {" "}
            <Link href="/tips/beginnen-met-smart-home">
              Bekijk onze 5-stappen gids voor smart home beginners
            </Link>.
          </p>

          <hr />

          <p className="muted small">
            *Compatibiliteit en functies verschillen per hub en merk.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
