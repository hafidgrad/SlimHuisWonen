import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SlimHuisZonderHub() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Slim huis zonder hub: kan dat?</h1>

          <p className="section-intro">
            Ja, een slim huis zonder hub is mogelijk — vooral voor beginners.
          </p>

          <h2>Wanneer werkt dit goed?</h2>
          <ul>
            <li>Weinig apparaten</li>
            <li>Wifi-producten</li>
            <li>Eenvoudige schema’s</li>
          </ul>

          <h2>Wanneer toch een hub?</h2>
          <p>
            Als je meerdere merken wilt combineren of automatiseren.
          </p>

          <p>
            <Link href="/tips/wat-is-een-smart-home-hub">
              Lees wat een smart home hub doet
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
