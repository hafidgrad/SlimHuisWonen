import TipBanner from "@/components/TipBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Wi-Fi bereik verbeteren zonder nieuwe router (7 slimme oplossingen) – 2026",
  description:
    "Slechte Wi-Fi in huis of slimme apparaten die offline gaan? Verbeter je bereik zonder meteen een nieuwe router te kopen. 7 praktische tips voor stabiel smart home.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/tips/wifi-bereik-verbeteren-zonder-nieuwe-router",
  },
};

export default function Page() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wi-Fi%20bereik%20verbeteren%20zonder%20nieuwe%20router.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hoe verbeter ik Wi-Fi bereik zonder nieuwe router?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Begin met routerplaatsing (centraal en vrij), zet een vast 2.4 GHz kanaal (1/6/11), update firmware en zet ‘slimme’ functies uit als IoT instabiel is. De beste upgrade is een extra access point via kabel of een mesh systeem.",
        },
      },
      {
        "@type": "Question",
        name: "Is mesh beter dan een wifi extender?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meestal wel. Mesh is doorgaans stabieler, roamt beter door het huis en geeft minder gedoe dan een losse extender.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is de beste oplossing bij dode hoeken?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een extra access point via kabel is vaak de beste oplossing. Als kabel niet kan, kies dan voor mesh met goede plaatsing van de units.",
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
            alt="Wi-Fi bereik verbeteren zonder nieuwe router"
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
            <Link href="/tips/smart-home-apparaat-koppelt-niet-wifi">
              Koppelt niet met Wi-Fi
            </Link>
          </p>

          <h1>
            Wi-Fi bereik verbeteren zonder nieuwe router: 7 slimme oplossingen
          </h1>

          <p className="section-intro">
            Dode hoeken in huis of slimme apparaten die steeds offline gaan?
            Je hoeft niet meteen een nieuwe router te kopen. Met deze stappen
            haal je vaak al enorme winst — vooral voor smart home.
          </p>

          <h2>7 oplossingen die vaak direct helpen</h2>

          <h3>1) Plaats je router hoger en vrij</h3>
          <p>
            Niet in een kast, niet achter de tv, niet in de meterkast. Zet ‘m
            centraal en op hoogte voor betere verspreiding.
          </p>

          <h3>2) Zet 2.4 GHz kanaal vast (1, 6 of 11)</h3>
          <p>
            Automatisch kanaal wisselen kan instabiliteit geven, vooral bij
            slimme apparaten. Kies één vast kanaal.
          </p>

          <h3>3) Update je router firmware</h3>
          <p>
            Bugs en Wi-Fi problemen worden vaak opgelost met updates. Check het
            beheerpanel van je router.
          </p>

          <h3>4) Zet “te slimme” functies uit bij IoT-problemen</h3>
          <p>
            Band steering, fast roaming of Airtime Fairness kan IoT verstoren
            (vooral slimme lampen, stekkers en sensoren). Test of uitschakelen
            stabiliteit geeft.
          </p>

          <h3>5) Voeg een access point toe via kabel</h3>
          <p>
            Dit is vaak de beste upgrade: één extra access point op een slimme
            plek geeft topdekking zonder compleet nieuw systeem.
          </p>

          <h3>6) Gebruik mesh als kabel niet kan</h3>
          <p>
            Mesh is meestal stabieler dan een goedkope extender en roamt beter
            door het huis.
          </p>

          <h3>7) Zet hubs en vaste apparaten bekabeld</h3>
          <p>
            Hue Bridge, Homey, Home Assistant en tv’s: bekabeld waar mogelijk.
            Dat verlaagt Wi-Fi belasting en verhoogt stabiliteit.
          </p>

          <h2>Conclusie</h2>
          <p>
            Begin altijd met de simpele fixes (routerplaatsing, vast 2.4 GHz
            kanaal en firmware update). Heb je nog steeds dode hoeken? Dan is
            een extra access point of mesh meestal de beste upgrade.
          </p>

          <p>
            Wil je je hele netwerk smart-home-proof maken?{" "}
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
              <Link href="/tips/smart-home-apparaat-koppelt-niet-wifi">
                Smart home apparaat koppelt niet met Wi-Fi?
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
