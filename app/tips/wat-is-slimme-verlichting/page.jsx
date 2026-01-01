import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is slimme verlichting? (uitleg voor beginners)",
  description:
    "Wat is slimme verlichting en wat kun je ermee? We leggen het eenvoudig uit en helpen je bepalen of het iets voor jou is.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-slimme-verlichting",
  },
};

export default function WatIsSlimmeVerlichting() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Wat is slimme verlichting?</h1>

          <p className="section-intro">
            Slimme verlichting zijn lampen of stekkers die je kunt bedienen via
            een app, afstandsbediening of automatiseringen. Je hebt geen
            technische kennis nodig om te starten.
          </p>

          <h2>Wat maakt verlichting “slim”?</h2>

          <p>
            Slimme verlichting werkt niet alleen met een schakelaar, maar ook
            via software. Hierdoor kun je:
          </p>

          <ul>
            <li>Lampen aan- en uitzetten via je telefoon</li>
            <li>Tijdschema’s instellen</li>
            <li>Automatisch reageren op beweging</li>
            <li>Sfeer aanpassen met dimmen of kleuren</li>
          </ul>

          <h2>Wat is het verschil met gewone verlichting?</h2>

          <p>
            Bij gewone verlichting gebruik je alleen een schakelaar. Slimme
            verlichting geeft je extra mogelijkheden:
          </p>

          <ul>
            <li>Bediening op afstand</li>
            <li>Automatische routines</li>
            <li>Koppeling met andere slimme apparaten</li>
          </ul>

          <h2>Slimme lamp of slimme stekker?</h2>

          <p>
            Je kunt verlichting op twee manieren slim maken:
          </p>

          <ul>
            <li>
              <strong>Slimme lamp</strong> – de lamp zelf is slim (bijvoorbeeld
              Philips Hue)
            </li>
            <li>
              <strong>Slimme stekker</strong> – maakt een gewone lamp slim
            </li>
          </ul>

          <p>
            Een slimme stekker is vaak goedkoper en ideaal om mee te beginnen.
          </p>

          <h2>Heb je een hub nodig?</h2>

          <p>
            Sommige systemen werken met een hub, andere niet.
          </p>

          <ul>
            <li>
              <strong>Zonder hub</strong> – werkt direct via wifi (bijv.
              TP-Link Tapo)
            </li>
            <li>
              <strong>Met hub</strong> – stabieler en beter voor uitbreiding
              (bijv. Philips Hue, Aqara)
            </li>
          </ul>

          <p>
            Wil je hier meer over weten?{" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Lees ons artikel over een slim huis zonder hub
            </Link>
            .
          </p>

          <h2>Voor wie is slimme verlichting geschikt?</h2>

          <p>Slimme verlichting is ideaal als je:</p>

          <ul>
            <li>Meer comfort wilt</li>
            <li>Energie wilt besparen</li>
            <li>Sfeer belangrijk vindt</li>
            <li>Langzaam wilt uitbreiden naar een slim huis</li>
          </ul>

          <h2>Hoe begin je met slimme verlichting?</h2>

          <p>
            Als je nu weet wat slimme verlichting is, is de volgende stap
            eenvoudig starten.
          </p>

          <p>
            👉{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Bekijk ons stappenplan voor beginners
            </Link>
          </p>

          <hr />

          <p className="muted small">
            Slimme verlichting is vaak de eerste stap naar een compleet slim
            huis.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
