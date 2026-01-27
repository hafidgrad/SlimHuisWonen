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
          {/* ✅ Blog banner */}
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
            het beste voor jouw situatie? Deze vergelijking vormt het
            **overzichtspunt** binnen onze smart home protocollen.
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
              ✅ <strong>Toekomstbestendig combineren:</strong> Matter
            </li>
            <li>
              ✅ <strong>Beste dekking door muren:</strong> Z-Wave
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
                  <td style={tdStyle}>Makkelijk starten, goedkoop</td>
                  <td style={tdStyle}>Kan instabiel worden bij veel apparaten</td>
                  <td style={tdStyle}>Beginners</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Zigbee</strong></td>
                  <td style={tdStyle}>Hub/bridge</td>
                  <td style={tdStyle}>Mesh netwerk, energiezuinig</td>
                  <td style={tdStyle}>Hub nodig</td>
                  <td style={tdStyle}>Grotere setup + sensoren</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Z-Wave</strong></td>
                  <td style={tdStyle}>Hub</td>
                  <td style={tdStyle}>Zeer betrouwbaar, goede muurpenetratie</td>
                  <td style={tdStyle}>Duurder, minder keuze</td>
                  <td style={tdStyle}>Serieuze installaties</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Matter</strong></td>
                  <td style={tdStyle}>Wi-Fi / Thread</td>
                  <td style={tdStyle}>Merken samenwerken</td>
                  <td style={tdStyle}>Nog in ontwikkeling</td>
                  <td style={tdStyle}>Toekomstbestendig combineren</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Uitleg per techniek</h2>

          <h3>Wi-Fi</h3>
          <p>
            Wi-Fi is ideaal om te starten, maar bij grotere setups kan het
            instabieler worden. Overweeg dan Zigbee of Z-Wave.
          </p>

          <h3>Zigbee</h3>
          <p>
            Zigbee is energiezuinig en werkt via een mesh netwerk. Ideaal voor
            sensoren en grote smart homes.{" "}
            <Link href="/blog/wat-is-zigbee">Lees hier de volledige uitleg</Link>.
          </p>

          <h3>Z-Wave</h3>
          <p>
            Z-Wave staat bekend om betrouwbaarheid en stabiele verbindingen,
            vooral in huizen met dikke muren.
          </p>

          <h3>Matter</h3>
          <p>
            Matter maakt het combineren van merken eenvoudiger.{" "}
            <Link href="/blog/wat-is-matter">Lees wat Matter precies is</Link>.
          </p>

          <h2>Conclusie</h2>
          <p>
            Zie deze pagina als je **keuzepunt**. Daarna kun je per techniek
            verdiepen of gericht producten kiezen.
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li><Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link></li>
            <li><Link href="/blog/wat-is-matter">Wat is Matter?</Link></li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
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
