import TipBanner from "@/components/TipBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "2.4 GHz vs 5 GHz voor smart home: zo kies je de juiste band",
  description:
    "Welke Wi-Fi band is het beste voor smart home? 2.4 GHz is vaak stabieler voor IoT. Zo voorkom je offline apparaten en koppelproblemen.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/2-4ghz-vs-5ghz-smart-home",
  },
};

export default function Page() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/2.4%20GHz%20vs%205%20GHz%20voor%20smart%20home.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is 2.4 GHz beter dan 5 GHz voor smart home apparaten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In de meeste gevallen wel. 2.4 GHz heeft meer bereik en gaat beter door muren, waardoor smart home apparaten stabieler verbonden blijven.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom koppelen sommige apparaten niet met 5 GHz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veel IoT-apparaten ondersteunen alleen 2.4 GHz. Als je telefoon op 5 GHz zit tijdens het koppelen (of je router band steering gebruikt), kan het koppelen mislukken.",
        },
      },
      {
        "@type": "Question",
        name: "Moet ik 2.4 GHz en 5 GHz splitsen in twee netwerken?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Als je vaak offline apparaten hebt of koppelen niet lukt, kan splitsen helpen. Maak een apart 2.4 GHz netwerk (bijv. ...-2G) en 5 GHz netwerk (...-5G).",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* ✅ Banner netjes in dezelfde breedte als site */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner src={tipImg} alt="2.4 GHz vs 5 GHz voor smart home" />
        </div>

        <div className="container article">
          {/* ✅ Cluster links */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Gerelateerd:{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Wi-Fi verbeteren
            </Link>{" "}
            •{" "}
            <Link href="/tips/smart-home-apparaat-koppelt-niet-wifi">
              Koppelt niet met Wi-Fi
            </Link>{" "}
            •{" "}
            <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
              Wi-Fi bereik verbeteren
            </Link>
          </p>

          <h1>2.4 GHz vs 5 GHz voor smart home: zo kies je de juiste band</h1>

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

          <h2>Conclusie</h2>
          <p>
            Voor smart home is <strong>2.4 GHz bijna altijd de beste keuze</strong>.
            Alleen apparaten met hoge snelheid (zoals streaming en gaming) hebben
            echt voordeel van 5 GHz.
          </p>

          <p>
            Wil je je wifi stabieler maken?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Bekijk de 10 Wi-Fi tips →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/wifi-verbeteren-voor-smart-home">
                Wi-Fi verbeteren voor smart home (10 tips)
              </Link>
            </li>
            <li>
              <Link href="/tips/smart-home-apparaat-koppelt-niet-wifi">
                Smart home apparaat koppelt niet met Wi-Fi?
              </Link>
            </li>
            <li>
              <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
                Wi-Fi bereik verbeteren zonder nieuwe router
              </Link>
            </li>
          </ul>

          {/* ✅ Structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
