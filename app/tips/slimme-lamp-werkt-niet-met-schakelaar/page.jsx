import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SlimmeLampSchakelaar() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Slimme lamp werkt niet met schakelaar</h1>

          <p className="section-intro">
            Dit is normaal gedrag bij slimme verlichting en gelukkig makkelijk
            op te lossen.
          </p>

          <h2>Waarom gebeurt dit?</h2>
          <p>
            Slimme lampen hebben continu stroom nodig om bereikbaar te blijven.
          </p>

          <h2>Oplossingen</h2>
          <ul>
            <li>Laat de schakelaar altijd aan</li>
            <li>Gebruik een slimme schakelaar</li>
            <li>Gebruik scènes of automatiseringen</li>
          </ul>

          <p>
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Zo begin je goed met slimme verlichting
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
