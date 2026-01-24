import TipBanner from "@/components/TipBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Smart home apparaat koppelt niet met Wi-Fi? (snelle oplossingen)",
  description:
    "Koppelen lukt niet? Check 2.4 GHz, WPA3-only, SSID, AP isolation en router-instellingen. Dit stappenplan lost Wi-Fi koppelproblemen meestal direct op.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/smart-home-apparaat-koppelt-niet-wifi",
  },
};

export default function Page() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/smart%20home%20apparaat%20koppelt%20niet%20met%20wifi.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom koppelt mijn smart home apparaat niet met Wi-Fi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In de meeste gevallen ligt het aan de wifi-instellingen: het apparaat ondersteunt alleen 2.4 GHz, WPA3-only staat aan, de SSID bevat speciale tekens of AP isolation is ingeschakeld.",
        },
      },
      {
        "@type": "Question",
        name: "Moet ik 2.4 GHz gebruiken om te koppelen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Veel smart home apparaten werken alleen op 2.4 GHz. Zorg dat je telefoon tijdens het koppelen ook op 2.4 GHz zit of split je netwerken.",
        },
      },
      {
        "@type": "Question",
        name: "Welke beveiliging werkt het beste voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WPA2 of WPA2/WPA3 mixed werkt het meest betrouwbaar. WPA3-only veroorzaakt vaak koppelproblemen bij smart home apparaten.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* ✅ Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner
            src={tipImg}
            alt="Smart home apparaat koppelt niet met Wi-Fi"
          />
        </div>

        <div className="container article">
          {/* ✅ Cluster links */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Gerelateerd:{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Wi-Fi verbeteren
            </Link>{" "}
            •{" "}
            <Link href="/tips/2-4ghz-vs-5ghz-smart-home">
              2.4 vs 5 GHz
            </Link>{" "}
            •{" "}
            <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
              Wi-Fi bereik verbeteren
            </Link>
          </p>

          <h1>Smart home apparaat koppelt niet met Wi-Fi?</h1>

          <p className="section-intro">
            Blijft het koppelen mislukken, hoe vaak je het ook probeert? Dan is
            het apparaat zelden kapot. In bijna alle gevallen zit het probleem
            in je Wi-Fi instellingen. Met deze checklist los je het meestal
            binnen een paar minuten op.
          </p>

          <h2>De 5 meest voorkomende oorzaken</h2>
          <ol>
            <li>
              Je telefoon zit op <strong>5 GHz</strong> terwijl het apparaat{" "}
              <strong>2.4 GHz</strong> nodig heeft.
            </li>
            <li>
              Je router staat op <strong>WPA3-only</strong> (veel IoT-apparaten
              ondersteunen dit niet).
            </li>
            <li>De netwerknaam (SSID) bevat emoji of speciale tekens.</li>
            <li>
              <strong>AP isolation / client isolation</strong> staat aan.
            </li>
            <li>
              Multicast of mDNS wordt geblokkeerd door router-beveiliging.
            </li>
          </ol>

          <h2>Snel stappenplan (werkt in de meeste gevallen)</h2>
          <ul>
            <li>
              Zet je telefoon tijdelijk op <strong>2.4 GHz</strong>.
            </li>
            <li>
              Zet wifi-beveiliging op <strong>WPA2</strong> of{" "}
              <strong>WPA2/WPA3 mixed</strong>.
            </li>
            <li>
              Gebruik een eenvoudige SSID (alleen letters en cijfers).
            </li>
            <li>
              Zet <strong>AP/client isolation uit</strong>.
            </li>
            <li>Herstart router én apparaat en koppel opnieuw.</li>
          </ul>

          <p>
            Tip: voer eerst een <strong>volledige reset</strong> van het apparaat
            uit. Veel smart home producten onthouden een mislukte koppelpoging.
          </p>

          <h2>Conclusie</h2>
          <p>
            In meer dan <strong>90% van de gevallen</strong> los je Wi-Fi
            koppelproblemen op door 2.4 GHz te gebruiken en WPA3-only uit te
            schakelen. Pas daarna heeft het zin om router-instellingen verder
            te onderzoeken.
          </p>

          <p>
            Wil je je netwerk structureel stabieler maken?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Bekijk de 10 Wi-Fi tips →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/wifi-verbeteren-voor-smart-home">
                Wi-Fi verbeteren voor smart home
              </Link>
            </li>
            <li>
              <Link href="/tips/2-4ghz-vs-5ghz-smart-home">
                2.4 GHz vs 5 GHz voor smart home
              </Link>
            </li>
            <li>
              <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
                Wi-Fi bereik verbeteren zonder nieuwe router
              </Link>
            </li>
          </ul>

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
