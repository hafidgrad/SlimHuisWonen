import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Beginnen met Smart Home – Complete gids voor beginners (2025)",
  description:
    "Wil je beginnen met een smart home? In deze gids leggen we stap voor stap uit welke slimme producten er zijn en waar je het beste mee kunt starten.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/gids/beginnen-met-smart-home",
  },
};

export default function SmartHomeGidsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container content-page">
            <h1>Beginnen met Smart Home</h1>

            <p>
              Een smart home maakt je huis slimmer, comfortabeler en energiezuiniger.
              In deze gids leggen we uit wat een smart home is, welke producten er zijn
              en waar je het beste mee kunt beginnen.
            </p>

            <h2>Wat is een smart home?</h2>
            <p>
              In een smart home zijn apparaten met elkaar verbonden en kun je ze bedienen
              via een app, automatiseringen of spraakassistenten zoals Google Assistant
              of Alexa.
            </p>

            <h2>Populaire smart home categorieën</h2>

            <h3>Slimme verlichting</h3>
            <p>
              Slimme verlichting is vaak de eerste stap. Je kunt lampen dimmen,
              automatiseren en bedienen met je telefoon.
            </p>
            <Link href="/producten/philips-hue-white-ambiance-starterkit">
              Bekijk slimme verlichting →
            </Link>

            <h3>Sensoren & beveiliging</h3>
            <p>
              Sensoren zorgen voor meldingen en automatiseringen, bijvoorbeeld wanneer
              een deur open gaat.
            </p>
            <Link href="/producten/aqara-deur-raamsensor">
              Bekijk slimme sensoren →
            </Link>

            <h3>Slimme thermostaten</h3>
            <p>
              Slimme thermostaten helpen energie besparen door je verwarmingsgedrag
              automatisch aan te passen.
            </p>
            <Link href="/producten/nest-learning-thermostaat">
              Bekijk slimme thermostaten →
            </Link>

            <h2>Waar begin je?</h2>
            <p>
              Begin klein. Slimme verlichting of een slimme stekker zijn ideaal om
              ervaring op te doen zonder grote investeringen.
            </p>

            <p>
              Op SlimHuisWonen.nl delen we alleen producten die betrouwbaar zijn en
              goed samenwerken met populaire smart home systemen.
            </p>

            <Link href="/producten" className="btn btn-primary">
              Bekijk alle slimme producten
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
