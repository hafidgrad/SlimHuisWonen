import TipBanner from "@/components/TipBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "2.4 GHz vs 5 GHz voor smart home – voorkom offline apparaten",
  description:
    "Welke Wi-Fi band is het beste voor smart home? 2.4 GHz is vaak stabieler voor IoT-apparaten. Zo voorkom je offline meldingen en koppelproblemen.",
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
          text: "Ja, in de meeste gevallen wel. 2.4 GHz heeft meer bereik en gaat beter door muren, waardoor smart home apparaten stabieler verbonden blijven.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom koppelen sommige apparaten niet met 5 GHz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veel smart home apparaten ondersteunen alleen 2.4 GHz. Als je telefoon op 5 GHz zit tijdens het koppelen of je router band steering gebruikt, kan het koppelen mislukken.",
        },
      },
      {
        "@type": "Question",
        name: "Moet ik 2.4 GHz en 5 GHz splitsen in twee netwerken?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Als je vaak offline apparaten hebt of koppelen niet lukt, kan het helpen om twee aparte netwerken te maken: één voor 2.4 GHz en één voor 5 GHz.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is band steering en waarom kan dit problemen geven?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Band steering laat je router automatisch kiezen tussen 2.4 en 5 GHz. Voor smart home apparaten kan dit verwarrend zijn, waardoor ze slecht koppelen of offline gaan.",
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

          <h1>
            2.4 GHz vs 5 GHz voor smart home – zo voorkom je offline apparaten
          </h1>

          <p className="section-intro">
            Gaan je slimme lampen of stekkers regelmatig offline? Of lukt
            koppelen maar niet? In veel gevallen ligt dat niet aan het apparaat,
            maar aan de verkeerde Wi-Fi band.
          </p>

          <p>
            Voor smart home apparaten is <strong>2.4 GHz meestal de beste
            keuze</strong>. Niet omdat het sneller is, maar omdat het{" "}
            <strong>meer bereik heeft</strong> en beter door muren en vloeren
            gaat. 5 GHz is sneller, maar heeft een korter bereik en is daardoor
            minder betrouwbaar voor IoT-apparaten.
          </p>

          <h2>Gebruik 2.4 GHz voor</h2>
          <ul>
            <li>slimme stekkers</li>
            <li>Wi-Fi lampen</li>
            <li>slimme schakelaars</li>
            <li>thermostaten</li>
            <li>apparaten die soms offline gaan</li>
          </ul>

          <h2>Gebruik 5 GHz voor</h2>
          <ul>
            <li>telefoon en laptop</li>
            <li>tv en streaming</li>
            <li>gameconsole</li>
            <li>downloads en hoge bandbreedte</li>
          </ul>

          <h2>Wanneer gaat het vaak mis?</h2>
          <p>
            Problemen ontstaan vooral wanneer je router één netwerknaam (SSID)
            gebruikt voor zowel 2.4 als 5 GHz. Tijdens het koppelen kan je
            telefoon op 5 GHz zitten, terwijl het smart home apparaat alleen
            2.4 GHz ondersteunt.
          </p>

          <h2>Veelgemaakte fout: één netwerk voor alles</h2>
          <p>
            Routers met band steering schakelen automatisch tussen 2.4 en 5 GHz.
            Dat werkt prima voor telefoons, maar niet altijd voor slimme
            apparaten. De beste oplossing is om twee aparte netwerken aan te
            maken, bijvoorbeeld <em>thuis-2G</em> en <em>thuis-5G</em>.
          </p>

          <h2>Conclusie</h2>
          <p>
            Voor smart home toepassingen is{" "}
            <strong>2.4 GHz bijna altijd de juiste keuze</strong>. Alleen
            apparaten die veel snelheid nodig hebben profiteren echt van 5 GHz.
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
