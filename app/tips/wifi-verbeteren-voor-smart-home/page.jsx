import TipBanner from "@/components/TipBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title:
    "Wi-Fi verbeteren voor smart home (10 tips voor stabiel slim huis) – 2026",
  description:
    "Smart home valt offline of reageert traag? Verbeter je Wi-Fi met 10 praktische tips: 2.4GHz vs 5GHz, mesh, kanaalkeuze, router-instellingen en vaste IP’s.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wifi-verbeteren-voor-smart-home",
  },
};

export default function Page() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wi-Fi%20verbeteren%20voor%20smart%20home.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom gaan smart home apparaten vaak offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vaak komt dit door wifi-bereik, band steering (2.4/5 GHz), WPA3-only beveiliging of een router die te ver weg staat. Begin met 2.4 GHz, routerplaatsing en WPA2/mixed modus.",
        },
      },
      {
        "@type": "Question",
        name: "Is 2.4 GHz beter dan 5 GHz voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voor veel smart home apparaten wel: 2.4 GHz heeft meer bereik en gaat beter door muren. 5 GHz is sneller, maar heeft minder bereik en is beter voor telefoons, laptops en tv’s.",
        },
      },
      {
        "@type": "Question",
        name: "Helpt mesh wifi bij smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vooral bij dode hoeken. Mesh is meestal stabieler dan een losse wifi extender en geeft betere dekking door het hele huis.",
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
          <TipBanner src={tipImg} alt="Wi-Fi verbeteren voor smart home" />
        </div>

        <div className="container article">
          {/* ✅ Cluster links */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Gerelateerd:{" "}
            <Link href="/tips/smart-home-apparaat-koppelt-niet-wifi">
              Apparaat koppelt niet met Wi-Fi
            </Link>{" "}
            •{" "}
            <Link href="/tips/2-4ghz-vs-5ghz-smart-home">2.4 vs 5 GHz</Link> •{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home
            </Link>
          </p>

          <h1>Wi-Fi verbeteren voor smart home: 10 tips voor een stabiel slim huis</h1>

          <p className="section-intro">
            Lampen die offline gaan, camera’s die haperen of apps die blijven
            laden? In veel gevallen is je Wi-Fi de echte boosdoener. Met deze
            gids maak je jouw netwerk echt smart-home-proof.
          </p>

          <p>
            Veel smart home “problemen” zijn eigenlijk Wi-Fi problemen. Lampen
            die offline gaan, speakers met vertraging en deurbellen die soms niet
            reageren komen vaak door instabiel bereik of router-instellingen die
            niet goed werken met IoT-apparaten.
          </p>

          <h2>10 tips om je Wi-Fi smart-home-proof te maken</h2>

          <h3>1) Zet smart home apparaten zoveel mogelijk op 2.4 GHz</h3>
          <p>
            2.4 GHz reikt verder en gaat beter door muren. Gebruik 5 GHz vooral
            voor telefoons, laptops en tv’s.
          </p>

          <h3>2) Plaats je router slimmer</h3>
          <p>
            Zet je router centraal, vrij en op hoogte. Vermijd kasten, metaal en
            plekken achter de tv.
          </p>

          <h3>3) Split 2.4 GHz en 5 GHz als apparaten vaak offline gaan</h3>
          <p>
            Eén SSID voor beide banden is handig, maar sommige IoT-apparaten raken
            in de war. Maak desnoods twee netwerken: <em>…-2G</em> en{" "}
            <em>…-5G</em>.
          </p>

          <h3>4) Gebruik WPA2 (of WPA2/WPA3 mixed)</h3>
          <p>
            Veel smart home apparatuur ondersteunt geen WPA3-only. Kies WPA2 of
            een mixed modus op je IoT-netwerk.
          </p>

          <h3>5) Kies een vast 2.4 GHz kanaal (1, 6 of 11)</h3>
          <p>
            Zet kanaalkeuze liever vast op 1, 6 of 11 om overlap en instabiliteit
            te voorkomen.
          </p>

          <h3>6) Schakel agressieve “optimalisaties” uit bij IoT-problemen</h3>
          <p>
            Denk aan Airtime Fairness, Smart Connect/Band Steering, 802.11r fast
            roaming of “AX only”. Deze kunnen vooral slimme lampen, stekkers en
            sensoren verstoren.
          </p>

          <h3>7) Geef belangrijke apparaten een vast IP (DHCP-reservering)</h3>
          <p>
            Geef vaste IP’s aan hubs (Homey, Hue Bridge, Home Assistant),
            camera’s en deurbellen. Dat voorkomt verbindingsproblemen en maakt
            troubleshooting makkelijker.
          </p>

          <h3>8) Overweeg mesh als je dode hoeken hebt</h3>
          <p>
            Mesh is meestal beter dan een losse extender: stabieler roaming,
            minder gedoe en betere dekking.
          </p>

          <h3>9) Gebruik kabel waar het kan (backhaul)</h3>
          <p>
            Bekabel je hubs, tv’s en mesh-backhaul waar mogelijk. Dat verlaagt
            Wi-Fi belasting en verhoogt stabiliteit.
          </p>

          <h3>10) Maak een apart IoT-netwerk (optioneel)</h3>
          <p>
            Zet IoT-apparaten op één 2.4 GHz netwerk en je “normale” apparaten op
            een ander netwerk. Dat geeft overzicht en vaak extra stabiliteit.
          </p>

          {/* ✅ NIEUWE INTERNE LINK – veilig toegevoegd */}
          <p>
            Een stabiel netwerk is extra belangrijk als je slimme apparaten
            gebruikt om energie te besparen. Slimme thermostaten,
            radiatorknoppen en stekkers werken alleen goed als ze betrouwbaar
            verbonden zijn.{" "}
            <Link href="/tips/energie-besparen-met-smart-home">
              Zo bespaar je energie met een smart home
            </Link>
            .
          </p>

          <h2>Snelle checklist</h2>
          <ul>
            <li>Smart home op 2.4 GHz</li>
            <li>Router centraal en vrij geplaatst</li>
            <li>2.4/5 GHz gesplitst bij koppelproblemen</li>
            <li>WPA2 of WPA2/WPA3 mixed</li>
            <li>Kanaal 1/6/11 vast op 2.4 GHz</li>
            <li>Band steering/fast roaming getest of uit</li>
            <li>Vaste IP’s voor hubs en camera’s</li>
            <li>Mesh of access points bij dode hoeken</li>
            <li>Kabel/backhaul waar mogelijk</li>
            <li>Optioneel: apart IoT-netwerk</li>
          </ul>

          <p>
            Blijven apparaten offline? Dan is het bijna altijd één van deze drie:
            <strong> bereik</strong>, <strong>2.4/5 GHz</strong> of{" "}
            <strong>beveiliging (WPA3)</strong>. Begin met de simpele fixes en
            breid daarna uit met mesh of access points.
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
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
