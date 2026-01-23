import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Zigbee vs Z-Wave vs Matter vs Wi-Fi: wat moet je kiezen? (2026)",
  description:
    "Welke smart home techniek past bij jou? Vergelijk Zigbee, Z-Wave, Matter en Wi-Fi op bereik, stabiliteit, snelheid, energieverbruik en compatibiliteit.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/blog/zigbee-vs-zwave-vs-matter-vs-wifi",
  },
};

export default function VergelijkingSmartHomeProtocollenPage() {
  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is beter: Zigbee of Wi-Fi voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voor veel smart home apparaten is Zigbee stabieler en energiezuiniger dan Wi-Fi. Wi-Fi is handig om mee te starten, maar kan bij veel apparaten instabieler worden.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is het verschil tussen Matter en Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zigbee is een draadloos protocol. Matter is een standaard die samenwerking tussen merken makkelijker maakt en werkt vaak via Wi-Fi of Thread.",
        },
      },
      {
        "@type": "Question",
        name: "Wanneer kies je Z-Wave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Z-Wave is interessant als je maximale betrouwbaarheid wilt, veel sensoren gebruikt en goede dekking door muren nodig hebt. Het is vooral populair bij serieuze smart home setups met een hub.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een hub nodig voor Zigbee of Z-Wave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meestal wel. Zigbee/Z-Wave apparaten verbinden via een hub/bridge zoals Homey, Home Assistant (met dongle) of SmartThings. Wi-Fi apparaten werken meestal direct met je router.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Blog banner met blur effect */}
          <div
            className="blogBanner"
            style={{
              "--blog-bg":
                "url(/images/blog/zigbee-vs-zwave-vs-matter-vs-wifi.png)",
            }}
          >
            <div
              className="blogBannerBlur blogBannerBlurLeft"
              style={{ backgroundImage: "var(--blog-bg)" }}
            />
            <div
              className="blogBannerBlur blogBannerBlurRight"
              style={{ backgroundImage: "var(--blog-bg)" }}
            />

            <div className="blogBannerInner">
              <Image
                src="/images/blog/zigbee-vs-zwave-vs-matter-vs-wifi.png"
                alt="Zigbee vs Z-Wave vs Matter vs Wi-Fi"
                width={1400}
                height={520}
                priority
                className="blogBannerImg"
              />
            </div>
          </div>

          {/* ✅ Cluster navigatie */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link> •{" "}
            <Link href="/blog/wat-is-matter">Wat is Matter?</Link> •{" "}
            <Link href="/blog/beste-smart-home-hub">Beste smart home hub</Link>
          </p>

          <h1>Zigbee vs Z-Wave vs Matter vs Wi-Fi: wat moet je kiezen?</h1>

          <p className="section-intro">
            Als je een smart home bouwt, kom je al snel termen tegen zoals Zigbee,
            Z-Wave, Matter en Wi-Fi. Maar wat is nou echt het verschil — en wat is
            het beste voor jouw situatie? In dit artikel leggen we het helder uit
            (zonder marketingpraat).
          </p>

          <h2>Snelle keuzehulp (kort)</h2>
          <ul>
            <li>
              ✅ <strong>Beginner / simpel:</strong> Wi-Fi of Matter-over-Wi-Fi
            </li>
            <li>
              ✅ <strong>Veel apparaten / stabiliteit:</strong> Zigbee of Z-Wave
            </li>
            <li>
              ✅ <strong>Toekomstbestendig combineren:</strong> Matter (met Thread/Wi-Fi)
            </li>
            <li>
              ✅ <strong>Beste dekking door muren:</strong> Z-Wave (vaak sterke penetratie)
            </li>
          </ul>

          <h2>Vergelijking in één tabel</h2>

          <div style={{ overflowX: "auto", marginTop: "1rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 720,
              }}
            >
              <thead>
                <tr>
                  <th style={thStyle}>Techniek</th>
                  <th style={thStyle}>Werkt via</th>
                  <th style={thStyle}>Sterktes</th>
                  <th style={thStyle}>Zwaktes</th>
                  <th style={thStyle}>Beste voor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}><strong>Wi-Fi</strong></td>
                  <td style={tdStyle}>Router</td>
                  <td style={tdStyle}>Makkelijk starten, goedkoop, veel keuze</td>
                  <td style={tdStyle}>Kan instabiel worden bij veel apparaten, afhankelijk van wifi</td>
                  <td style={tdStyle}>Beginners / kleine setup</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Zigbee</strong></td>
                  <td style={tdStyle}>Hub/bridge</td>
                  <td style={tdStyle}>Stabiel mesh netwerk, energiezuinig, ideaal voor sensoren</td>
                  <td style={tdStyle}>Hub nodig, compatibiliteit per hub verschilt</td>
                  <td style={tdStyle}>Grote setup + sensoren</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Z-Wave</strong></td>
                  <td style={tdStyle}>Hub (Z-Wave)</td>
                  <td style={tdStyle}>Betrouwbaar, vaak goed door muren, minder interferentie</td>
                  <td style={tdStyle}>Minder productkeuze, vaak duurder</td>
                  <td style={tdStyle}>Serieuze smart home installatie</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Matter</strong></td>
                  <td style={tdStyle}>Wi-Fi / Thread</td>
                  <td style={tdStyle}>Merken samenwerken, toekomstbestendig, minder gedoe</td>
                  <td style={tdStyle}>Nog groeiend, niet elk product ondersteunt Matter</td>
                  <td style={tdStyle}>Merken combineren / toekomstvast</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Uitleg per techniek</h2>

          <h3>1) Wi-Fi (de makkelijke start)</h3>
          <p>
            Wi-Fi smart home apparaten verbinden direct met je router. Dit is makkelijk
            en goedkoop. Maar als je veel apparaten hebt (20+), kan wifi instabieler
            worden. Zeker bij dode hoeken of drukke kanalen.
          </p>

          <p>
            👉 Heb je wifi issues?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Wi-Fi verbeteren voor smart home (10 tips)
            </Link>
            .
          </p>

          <h3>2) Zigbee (ideaal voor sensoren)</h3>
          <p>
            Zigbee is super populair in smart home. Waarom? Omdat het energiezuinig
            is en als mesh werkt: apparaten versterken het signaal. Daardoor is het
            vaak stabieler dan wifi.
          </p>

          <p>
            Meer uitleg? <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
          </p>

          <h3>3) Z-Wave (betrouwbaarheid)</h3>
          <p>
            Z-Wave lijkt op Zigbee (mesh), maar draait op andere frequenties en heeft
            vaak een sterke reputatie op betrouwbaarheid. Vooral populair bij
            domotica setups met veel sensoren, schakelaars en automatiseringen.
          </p>

          <h3>4) Matter (merken combineren zonder gedoe)</h3>
          <p>
            Matter is de nieuwe standaard. Het doel: smart home apparaten van
            verschillende merken makkelijker laten samenwerken. Matter werkt vaak
            via Wi-Fi of Thread (modern mesh protocol).
          </p>

          <p>
            Lees ook: <Link href="/blog/wat-is-matter">Wat is Matter?</Link>
          </p>

          <h2>Wat moet jij kiezen? (beste keuze per situatie)</h2>
          <ul>
            <li>
              <strong>Ik wil simpel starten:</strong> Wi-Fi / Matter apparaten
            </li>
            <li>
              <strong>Ik wil uitbreiden met sensoren:</strong> Zigbee
            </li>
            <li>
              <strong>Ik wil maximale betrouwbaarheid:</strong> Z-Wave of Zigbee met sterke hub
            </li>
            <li>
              <strong>Ik wil Hue + Aqara + Tapo combineren:</strong> Matter (of hub zoals Homey)
            </li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Voor de meeste mensen is Zigbee de “sweet spot”: stabiel, energiezuinig,
            veel aanbod. Wi-Fi is ideaal om te starten. Matter wordt dé standaard
            voor merken combineren. Z-Wave is vooral interessant voor setups waar
            betrouwbaarheid boven alles staat.
          </p>

          <p>
            Wil je écht merken combineren zonder frustratie?{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren zonder gedoe →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
            </li>
            <li>
              <Link href="/blog/wat-is-matter">Wat is Matter?</Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub (vergelijking)
              </Link>
            </li>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">Wat is een smart home hub?</Link>
            </li>
          </ul>

          <h2>Veelgestelde vragen</h2>
          <h3>Is Zigbee beter dan Wi-Fi?</h3>
          <p>
            Vaak wel, vooral als je veel apparaten of sensoren gebruikt. Zigbee is
            energiezuinig en stabieler doordat het een mesh netwerk bouwt.
          </p>

          <h3>Is Matter een protocol?</h3>
          <p>Nee, Matter is een standaard. Het werkt vaak via Wi-Fi of Thread.</p>

          <h3>Moet ik alles vervangen voor Matter?</h3>
          <p>
            Nee. Matter komt er bij. Je huidige Zigbee/Wi-Fi apparaten blijven vaak
            gewoon werken.
          </p>

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

const thStyle = {
  textAlign: "left",
  padding: "0.75rem",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  opacity: 0.9,
};

const tdStyle = {
  verticalAlign: "top",
  padding: "0.75rem",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  opacity: 0.9,
};
