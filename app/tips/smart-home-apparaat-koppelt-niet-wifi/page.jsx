import TipBanner from "@/components/TipBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Smart home apparaat koppelt niet met Wi-Fi? (snelle fixes)",
  description:
    "Koppelen lukt niet? Check 2.4 GHz, WPA3-only, SSID, AP isolation en router-instellingen. Dit stappenplan lost het meestal direct op.",
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
          text: "Meestal komt het door de Wi-Fi instellingen: telefoon op 5 GHz terwijl apparaat 2.4 GHz nodig heeft, WPA3-only beveiliging, moeilijke SSID, AP isolation of router-optimalisaties.",
        },
      },
      {
        "@type": "Question",
        name: "Moet ik 2.4 GHz gebruiken om te koppelen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, veel IoT-apparaten ondersteunen alleen 2.4 GHz. Zorg dat je telefoon tijdens het koppelen ook op 2.4 GHz zit, of split je netwerken in 2.4 en 5 GHz.",
        },
      },
      {
        "@type": "Question",
        name: "Welke beveiliging werkt het best voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gebruik WPA2 of WPA2/WPA3 mixed. WPA3-only zorgt vaak voor koppelproblemen bij oudere smart home apparaten.",
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
            <Link href="/tips/2-4ghz-vs-5ghz-smart-home">2.4 vs 5 GHz</Link> •{" "}
            <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
              Wi-Fi bereik verbeteren
            </Link>
          </p>

          <h1>Smart home apparaat koppelt niet met Wi-Fi? (WPA3, 2.4 GHz en SSID fix)</h1>

          <p className="section-intro">
            Als koppelen faalt, ligt het zelden aan het apparaat. Meestal is het
            een Wi-Fi instelling. Dit is de snelle checklist die bijna altijd werkt.
          </p>

          <h2>De 5 meest voorkomende oorzaken</h2>
          <ol>
            <li>
              Je telefoon zit op <strong>5 GHz</strong> terwijl het apparaat{" "}
              <strong>2.4 GHz</strong> nodig heeft.
            </li>
            <li>
              Je router staat op <strong>WPA3-only</strong> (veel IoT kan dat niet).
            </li>
            <li>Je netwerknaam (SSID) bevat rare tekens/emoji/symbolen.</li>
            <li>
              <strong>AP isolation / client isolation</strong> staat aan.
            </li>
            <li>
              Multicast/mDNS wordt beperkt (komt soms voor bij “veiligheidsmodi”).
            </li>
          </ol>

          <h2>Snel stappenplan</h2>
          <ul>
            <li>
              Zet je telefoon tijdelijk op <strong>2.4 GHz</strong>.
            </li>
            <li>
              Zet beveiliging op <strong>WPA2</strong> of{" "}
              <strong>WPA2/WPA3 mixed</strong>.
            </li>
            <li>
              Gebruik een simpele SSID (alleen letters/cijfers, geen speciale
              tekens).
            </li>
            <li>
              Zet “AP/client isolation” <strong>uit</strong>.
            </li>
            <li>Herstart router + apparaat en probeer opnieuw.</li>
          </ul>

          <p>
            Tip: als het apparaat een reset-knop heeft, doe een volledige reset
            voordat je opnieuw koppelt. Veel apparaten “onthouden” een mislukte
            poging.
          </p>

          <h2>Conclusie</h2>
          <p>
            In 90% van de gevallen los je koppelproblemen op door{" "}
            <strong>2.4 GHz</strong> te gebruiken en je beveiliging op{" "}
            <strong>WPA2 of mixed</strong> te zetten. Daarna pas ga je kijken
            naar SSID en router-opties.
          </p>

          <p>
            Wil je je hele netwerk stabieler maken?{" "}
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
