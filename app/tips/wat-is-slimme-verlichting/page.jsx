import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is slimme verlichting?",
  description:
    "Wat is slimme verlichting en hoe werkt het? Ontdek de voordelen en voorbeelden.",
};

export default function WatIsSlimmeVerlichting() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Wat is slimme verlichting?</h1>

          <p className="section-intro">
            Slimme verlichting bedien je via een app, automatiseringen
            of spraak in plaats van alleen een schakelaar.
          </p>

          <h2>Voordelen</h2>

          <ul>
            <li>Meer comfort</li>
            <li>Energiebesparing</li>
            <li>Automatiseringen</li>
          </ul>

          <p>
            👉 Wil je beginnen?{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Zo start je met slimme verlichting
            </Link>
          </p>

          <hr />

          <p className="muted small">
            *Voorbeelden zijn indicatief.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
