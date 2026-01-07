import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Tips & uitleg voor een slim huis | SlimHuisWonen",
  description:
    "Stap-voor-stap uitleg en praktische tips om je huis slimmer te maken. Van slimme verlichting tot smart home automatiseringen.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips",
  },
};

export default function TipsPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1>Tips &amp; uitleg</h1>

          <p className="section-intro">
            Stap-voor-stap uitleg en praktische tips om je huis slimmer te maken.
            Geschikt voor beginners én gevorderden.
          </p>

          <div className="tips-grid">
            {/* Artikel 1 */}
            <article className="tip-card">
              <h2>Wat is slimme verlichting?</h2>
              <p>
                We leggen uit wat slimme verlichting is, hoe het werkt en wat je
                ermee kunt.
              </p>
              <Link href="/tips/wat-is-slimme-verlichting">
                Lees artikel →
              </Link>
            </article>

            {/* Artikel 2 */}
            <article className="tip-card">
              <h2>Beginnen met slimme verlichting</h2>
              <p>
                Wil je starten? Volg deze eenvoudige stappen zonder technische
                kennis.
              </p>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Lees artikel →
              </Link>
            </article>

            {/* Artikel 3 */}
            <article className="tip-card">
              <h2>Beginnen met smart home in 5 stappen</h2>
              <p>
                We nemen je stap voor stap mee: van eerste slimme lamp tot
                automatiseringen zonder gedoe.
              </p>
              <Link href="/tips/beginnen-met-smart-home">
                Lees artikel →
              </Link>
            </article>

            {/* Artikel 4 */}
            <article className="tip-card">
              <h2>Merken combineren zonder gedoe</h2>
              <p>
                Philips Hue, Ikea, Aqara, Nest en meer: zo laat je alles netjes
                samenwerken.
              </p>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Lees artikel →
              </Link>
            </article>

            {/* Artikel 5 */}
            <article className="tip-card">
              <h2>Slim huis zonder hub</h2>
              <p>
                Kan een slim huis ook zonder hub werken? Dit zijn de voor- en
                nadelen.
              </p>
              <Link href="/tips/slim-huis-zonder-hub">
                Lees artikel →
              </Link>
            </article>

            {/* Artikel 6 */}
            <article className="tip-card">
              <h2>Slimme verlichting werkt niet na stroomuitval</h2>
              <p>
                Na een stroomstoring werkt je slimme verlichting niet meer?
                Zo los je het op.
              </p>
              <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
                Lees artikel →
              </Link>
            </article>

            {/* Artikel 7 */}
            <article className="tip-card">
              <h2>Slimme lamp werkt niet met schakelaar</h2>
              <p>
                Werkt je slimme lamp niet meer via de wandschakelaar?
                Dit is de oorzaak.
              </p>
              <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
                Lees artikel →
              </Link>
            </article>

            {/* Artikel 8 */}
            <article className="tip-card">
              <h2>Wat is een smart home hub?</h2>
              <p>
                We leggen uit wat een hub doet en wanneer je er één nodig hebt.
              </p>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Lees artikel →
              </Link>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
