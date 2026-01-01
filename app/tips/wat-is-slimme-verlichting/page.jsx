import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is slimme verlichting? Uitleg voor beginners",
  description:
    "Wat is slimme verlichting en wat kun je ermee? Ontdek hoe het werkt, wat je nodig hebt en of het iets voor jou is.",
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
            Slimme verlichting zijn lampen die je kunt bedienen via een app,
            automatiseringen of spraakassistent. In dit artikel leggen we
            duidelijk uit wat het is, hoe het werkt en of het iets voor jou is.
          </p>

          <h2>Wat maakt verlichting ‘slim’?</h2>
          <p>
            Een slimme lamp is verbonden met wifi of een hub. Hierdoor kun je
            de lamp bedienen zonder fysieke schakelaar.
          </p>

          <ul>
            <li>Aan- en uitzetten via app</li>
            <li>Dimmen en kleuren aanpassen</li>
            <li>Schema’s en timers instellen</li>
            <li>Automatiseren met sensoren</li>
          </ul>

          <h2>Heb je een hub nodig?</h2>
          <p>
            Dat hangt af van het systeem dat je kiest. Sommige slimme lampen
            werken direct via wifi, andere gebruiken een hub.
          </p>

          <ul>
            <li>
              <strong>Zonder hub:</strong> eenvoudiger, ideaal voor beginners
            </li>
            <li>
              <strong>Met hub:</strong> stabieler en beter voor automatiseringen
            </li>
          </ul>

          <p>
            Twijfel je? Lees dan ook:
            {" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Slim huis zonder hub – kan dat?
            </Link>
          </p>

          <h2>Wat kun je ermee in huis?</h2>
          <p>
            Slimme verlichting wordt vaak gebruikt voor comfort en sfeer, maar
            ook voor veiligheid.
          </p>

          <ul>
            <li>Automatisch licht bij thuiskomen</li>
            <li>Sfeerverlichting in de avond</li>
            <li>Lampen laten aangaan bij beweging</li>
            <li>Simulatie van aanwezigheid</li>
          </ul>

          <h2>Voor wie is slimme verlichting geschikt?</h2>
          <p>
            Slimme verlichting is geschikt voor vrijwel iedereen. Je kunt klein
            beginnen en later uitbreiden.
          </p>

          <p>
            Wil je weten hoe je het beste start? Lees dan:
            {" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Beginnen met slimme verlichting (stap-voor-stap)
            </Link>
          </p>

          <h2>Conclusie</h2>
          <p>
            Slimme verlichting is één van de makkelijkste en meest zichtbare
            manieren om je huis slimmer te maken.
          </p>

          <p>
            Het werkt intuïtief, is betaalbaar en direct merkbaar in dagelijks
            gebruik.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
