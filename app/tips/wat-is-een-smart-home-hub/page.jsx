import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is een smart home hub?",
  description:
    "Wat is een smart home hub en heb je er een nodig? Lees wanneer een hub handig is en wanneer niet.",
};

export default function WatIsEenSmartHomeHub() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Wat is een smart home hub?</h1>

          <p className="section-intro">
            Een smart home hub verbindt al je slimme apparaten zodat ze
            samen kunnen werken.
          </p>

          <h2>Wat doet een hub?</h2>

          <ul>
            <li>Verbindt meerdere merken</li>
            <li>Maakt automatiseringen mogelijk</li>
            <li>Zorgt voor stabiliteit</li>
          </ul>

          <p>
            👉 Lees ook:{" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Slim huis zonder hub
            </Link>
          </p>

          <h2>Conclusie</h2>

          <p>
            Een hub is niet verplicht, maar wel handig bij grotere
            smart-home-installaties.
          </p>

          <hr />

          <p className="muted small">
            *Functionaliteit verschilt per hub.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
