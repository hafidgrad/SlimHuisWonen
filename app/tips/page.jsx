import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Tips & Uitleg voor een Slim Huis",
  description:
    "Praktische tips, uitleg en handleidingen om je huis slimmer te maken met verlichting, sensoren en automatiseringen.",
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
            Duidelijke uitleg en praktische tips om je huis slimmer te maken.
            Geschikt voor beginners én gevorderden.
          </p>

          <ul className="tips-list">
            <li>
              <Link href="/tips/wat-is-slimme-verlichting">
                Wat is slimme verlichting en hoe werkt het?
              </Link>
            </li>
            <li>
              <Link href="/tips/beste-sensoren-voor-beveiliging">
                Welke sensoren zijn het beste voor beveiliging?
              </Link>
            </li>
            <li>
              <Link href="/tips/smart-home-beginnen">
                Beginnen met een slim huis: dit heb je nodig
              </Link>
            </li>
          </ul>

          <p className="muted small">
            Meer artikelen volgen binnenkort.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
