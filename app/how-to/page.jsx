import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How To Smart Home | SlimHuisWonen",
  description:
    "Praktische stap-voor-stap handleidingen om je slimme huis in te stellen.",
};

export default function HowToPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1>How To Smart Home</h1>

          <p className="section-intro">
            Praktische handleidingen om je slimme huis stap voor stap in te
            stellen. Duidelijk uitgelegd, zonder technisch gedoe.
          </p>

          <div className="grid">
            <Link href="/how-to/beginnen-met-smart-home">
              <div className="card">
                <h2>Hoe begin je met een smart home?</h2>
                <p>
                  Complete startersgids om zonder fouten te beginnen met je
                  slimme huis.
                </p>
              </div>
            </Link>

            <Link href="/how-to/slimme-verlichting-installeren">
              <div className="card">
                <h2>Hoe installeer je slimme verlichting?</h2>
                <p>
                  Stap-voor-stap uitleg voor het installeren en instellen van
                  slimme lampen.
                </p>
              </div>
            </Link>

            <Link href="/how-to/wifi-verbeteren-voor-smart-home">
              <div className="card">
                <h2>Hoe verbeter je wifi voor je smart home?</h2>
                <p>
                  Voorkom verbindingsproblemen en optimaliseer je netwerk.
                </p>
              </div>
            </Link>

            <Link href="/how-to/smart-home-hub-installeren">
              <div className="card">
                <h2>Hoe installeer je een smart home hub?</h2>
                <p>
                  Leer hoe je een hub aansluit en al je apparaten koppelt.
                </p>
              </div>
            </Link>

            <Link href="/how-to/slim-huis-beveiligen">
              <div className="card">
                <h2>Hoe beveilig je je slimme huis?</h2>
                <p>
                  Bescherm je smart home tegen ongewenste toegang en hackers.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
