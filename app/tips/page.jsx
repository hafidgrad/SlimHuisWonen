import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Tips & uitleg | SlimHuisWonen",
  description:
    "Praktische tips en uitleg over slimme verlichting, smart home en automatiseringen.",
};

export default function TipsPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1>Tips & uitleg</h1>

          <p className="section-intro">
            Praktische gidsen om slim te starten met smart home — duidelijk,
            onafhankelijk en stap voor stap.
          </p>

          <div className="article-grid">
            {/* Artikel 1 */}
            <article className="article-card">
              <h2>Beginnen met slimme verlichting (stap-voor-stap)</h2>
              <p>
                Van je eerste slimme lamp tot automatiseringen. Perfect voor
                beginners zonder technische kennis.
              </p>
              <Link
                href="/tips/beginnen-met-slimme-verlichting"
                className="article-link"
              >
                Lees artikel →
              </Link>
            </article>

            {/* Artikel 2 */}
            <article className="article-card">
              <h2>Wat is slimme verlichting?</h2>
              <p>
                Wat maakt verlichting ‘slim’, wat heb je nodig en wat kun je
                ermee?
              </p>
              <Link
                href="/tips/wat-is-slimme-verlichting"
                className="article-link"
              >
                Lees artikel →
              </Link>
            </article>

            {/* Placeholder */}
            <article className="article-card muted">
              <h2>Wat is een smart home hub?</h2>
              <p>Artikel komt binnenkort.</p>
            </article>

            <article className="article-card muted">
              <h2>Merken combineren zonder gedoe</h2>
              <p>Artikel komt binnenkort.</p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
