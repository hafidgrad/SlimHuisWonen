import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Merken combineren zonder gedoe",
  description:
    "Philips Hue, Ikea, Aqara en meer combineren? Zo laat je alles samenwerken zonder frustratie.",
};

export default function MerkenCombinerenZonderGedoe() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Merken combineren zonder gedoe</h1>

          <p className="section-intro">
            Je zit niet vast aan één merk. Met de juiste aanpak werken
            verschillende smart-home-merken prima samen.
          </p>

          <p>
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>
          </p>

          <h2>De sleutel: één centrale plek</h2>
          <p>Gebruik een hub of platform als verbindende schakel.</p>

          <h2>Goede combinaties</h2>
          <ul>
            <li>Philips Hue + Aqara</li>
            <li>Ikea + Homey</li>
            <li>Tapo + Google Home</li>
          </ul>

          <hr />

          <p className="muted small">
            Start je net?{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}