import TipBanner from "@/components/TipBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "2.4 GHz vs 5 GHz voor smart home: zo kies je de juiste band",
  description:
    "Welke Wi-Fi band is het beste voor smart home? 2.4 GHz is vaak stabieler voor IoT. Zo voorkom je offline apparaten en koppelproblemen.",
  alternates: {
    canonical: "/tips/2-4ghz-vs-5ghz-smart-home",
  },
};

export default function Page() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/2.4%20GHz%20vs%205%20GHz%20voor%20smart%20home.png";

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Banner zoals andere tips */}
          <TipBanner src={tipImg} alt="2.4 GHz vs 5 GHz voor smart home" />

          <h1 style={{ marginTop: 18 }}>
            2.4 GHz vs 5 GHz voor smart home: zo kies je de juiste band
          </h1>

          <p className="section-intro">
            Offline apparaten of koppelen dat niet lukt? Vaak zit het ‘m in de
            verkeerde Wi-Fi band. Dit is de simpele keuzehulp.
          </p>

          <p>
            2.4 GHz is meestal de beste keuze voor smart home apparaten. Niet
            omdat het sneller is, maar omdat het <strong>verder reikt</strong>{" "}
            en beter door muren gaat. 5 GHz is sneller, maar heeft minder bereik
            en kan instabiel zijn in huizen met meerdere kamers of verdiepingen.
          </p>

          <h2>Gebruik 2.4 GHz voor</h2>
          <ul>
            <li>slimme stekkers</li>
            <li>Wi-Fi lampen</li>
            <li>slimme schakelaars</li>
            <li>thermostaten (vaak)</li>
            <li>apparaten die “soms offline” gaan</li>
          </ul>

          <h2>Gebruik 5 GHz voor</h2>
          <ul>
            <li>telefoon en laptop</li>
            <li>tv/streaming</li>
            <li>gameconsole</li>
            <li>downloads en hoge bandbreedte</li>
          </ul>

          <h2>Veelgemaakte fout: één netwerknaam voor alles</h2>
          <p>
            Als je router één SSID gebruikt met band steering, kunnen sommige
            IoT-apparaten verkeerd koppelen of de verbinding verliezen. De beste
            workaround: maak twee SSID’s (<em>…-2G</em> en <em>…-5G</em>) of zorg
            dat je telefoon tijdens koppelen op 2.4 GHz zit.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
