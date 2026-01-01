import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Tips & uitleg – SlimHuisWonen",
  description:
    "Praktische tips en duidelijke uitleg om te starten met een slim huis.",
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
          <h1>Tips & uitleg</h1>

          <p className="section-intro">
            Stap-voor-stap uitleg en praktische tips om je huis slimmer te maken.
          </p>

          <div className="article-grid">
            <article className="article-card">
              <h2>Wat is slimme verlichting?</h2>
              <p>
                We leggen uit wat slimme verlichting is, hoe het werkt en
                wat je ermee kunt.
              </p>
              <Link href="/tips/wat-is-slimme-verlichting">
                Lees artikel →
              </Link>
            </article>

            <article className="article-card">
              <h2>Beginnen met slimme verlichting</h2>
              <p>
                Wil je starten? Volg deze eenvoudige stappen zonder technische
                kennis.
              </p>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Lees artikel →
              </Link>
            </article>

            <article className="tip-card">
  <h2>Beginnen met smart home in 5 stappen</h2>
  <p>
    We nemen je stap voor stap mee: van eerste slimme lamp tot
    automatiseringen zonder gedoe.
  </p>
  <Link href="/tips/beginnen-met-smart-home" className="tip-link">
    Lees artikel →
  </Link>
</article>

            <article className="article-card muted">
              <h2>Wat is een smart home hub?</h2>
              <p>Artikel komt binnenkort</p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
