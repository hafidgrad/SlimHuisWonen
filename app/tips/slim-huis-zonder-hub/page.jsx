import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export default function SlimHuisZonderHub() {
  const tipImg = "/images/Tips%20%26%20uitleg/Slim%20huis%20zonder%20hub.png";

  return (
    <>
      <Header />

      <main className="section">
  {/* ✅ Banner netjes in dezelfde breedte als site */}
  <div className="container" style={{ marginBottom: "1.25rem" }}>
    <TipBanner src={tipImg} alt="Slim huis zonder hub" />
  </div>

  <div className="container article">

          <h1>Slim huis zonder hub: kan dat?</h1>

          <p className="section-intro">
            Ja, een slim huis zonder hub is zeker mogelijk — vooral als je net
            begint met smart home. Veel slimme apparaten werken direct via wifi
            en een app op je telefoon.
          </p>

          <h2>Hoe werkt een slim huis zonder hub?</h2>

          <p>
            In een slim huis zonder hub verbindt elk apparaat rechtstreeks met
            je wifi-netwerk. Je bedient deze apparaten via losse apps of via een
            platform zoals Google Home of Alexa.
          </p>

          <p>Voorbeelden van apparaten die vaak zonder hub werken:</p>

          <ul>
            <li>Wifi-lampen (zoals TP-Link Tapo)</li>
            <li>Slimme stekkers</li>
            <li>Slimme camera’s</li>
            <li>Deurbellen met app</li>
          </ul>

          <h2>Wanneer werkt een slim huis zonder hub goed?</h2>

          <ul>
            <li>Je gebruikt maar een paar slimme apparaten</li>
            <li>Je wilt eenvoudige aan/uit-functies</li>
            <li>Je gebruikt één merk of één app</li>
            <li>Je wilt goedkoop en snel starten</li>
          </ul>

          <h2>Voordelen</h2>

          <ul>
            <li>Lage instapkosten</li>
            <li>Geen extra hardware nodig</li>
            <li>Eenvoudige installatie</li>
            <li>Ideaal voor beginners</li>
          </ul>

          <h2>Nadelen</h2>

          <ul>
            <li>Minder stabiel bij veel apparaten</li>
            <li>Beperkte automatiseringen</li>
            <li>Meerdere apps nodig bij verschillende merken</li>
            <li>Afhankelijk van wifi en cloud</li>
          </ul>

          <h2>Wanneer is een hub wél slim?</h2>

          <p>
            Een hub wordt interessant zodra je meerdere merken wilt combineren
            of betrouwbaardere automatiseringen wilt gebruiken.
          </p>

          <p>
            👉{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Lees wat een smart home hub precies doet
            </Link>
          </p>

          <h2>Conclusie</h2>

          <p>
            Een slim huis zonder hub is een prima startpunt. Het is betaalbaar
            en eenvoudig. Wil je later meer automatiseren of merken combineren,
            dan kun je altijd alsnog een hub toevoegen.
          </p>

          <p>
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home in 5 stappen →
            </Link>
          </p>

          <hr />

          <p className="muted small">
            *De mogelijkheden verschillen per merk en type apparaat.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
