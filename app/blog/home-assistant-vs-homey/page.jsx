import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home Assistant vs Homey: wat is beter? (2026 vergelijking)",
  description:
    "Home Assistant of Homey? Vergelijk gemak, automatiseringen, kosten, lokale werking en uitbreidbaarheid. Kies de beste hub voor jouw smart home.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/home-assistant-vs-homey",
  },
};

export default function HomeAssistantVsHomeyPage() {
  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is beter: Home Assistant of Homey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voor de meeste mensen is Homey makkelijker en sneller klaar. Home Assistant is krachtiger en flexibeler, maar vraagt meer tijd en technische kennis.",
        },
      },
      {
        "@type": "Question",
        name: "Is Home Assistant gratis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De software van Home Assistant is gratis. Je hebt wel hardware nodig om het te draaien, zoals Home Assistant Green of een mini-pc.",
        },
      },
      {
        "@type": "Question",
        name: "Werkt Homey zonder internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veel Homey automatiseringen werken lokaal. De exacte werking hangt af van de gebruikte apparaten en integraties.",
        },
      },
      {
        "@type": "Question",
        name: "Heb ik Zigbee of Z-Wave nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet verplicht, maar Zigbee en Z-Wave maken je smart home vaak stabieler en energiezuiniger, vooral bij sensoren. Beide hubs ondersteunen dit.",
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
            style={{ "--blog-bg": "url(/images/blog/home-assistant-vs-homey.png)" }}
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
                src="/images/blog/home-assistant-vs-homey.png"
                alt="Home Assistant vs Homey"
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
            <Link href="/blog/beste-smart-home-hub">
              Beste smart home hub
            </Link>{" "}
            •{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>{" "}
            •{" "}
            <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
              Smart home protocollen
            </Link>
          </p>

          <h1>Home Assistant vs Homey: wat is beter?</h1>

          <p className="section-intro">
            Dit is één van de meest gezochte smart-home-vragen. Zie deze pagina als
            de <strong>verdieping</strong> onder de keuze-gids{" "}
            <Link href="/blog/beste-smart-home-hub">
              beste smart home hub
            </Link>
            .
          </p>

          <h2>Snelle keuzehulp</h2>
          <ul>
            <li><strong>Ik wil gemak en snel klaar:</strong> Homey</li>
            <li><strong>Ik wil maximale controle:</strong> Home Assistant</li>
            <li><strong>Ik wil weinig onderhoud:</strong> Homey</li>
            <li><strong>Ik vind tweaken leuk:</strong> Home Assistant</li>
          </ul>

          <h2>Vergelijking in één tabel</h2>

          <div style={{ overflowX: "auto", marginTop: "1rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 760,
              }}
            >
              <thead>
                <tr>
                  <th style={thStyle}>Onderdeel</th>
                  <th style={thStyle}>Homey</th>
                  <th style={thStyle}>Home Assistant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}><strong>Installatie</strong></td>
                  <td style={tdStyle}>Supersnel</td>
                  <td style={tdStyle}>Meer stappen</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Gebruiksgemak</strong></td>
                  <td style={tdStyle}>Zeer hoog</td>
                  <td style={tdStyle}>Technischer</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Automatiseringen</strong></td>
                  <td style={tdStyle}>Flows (simpel + krachtig)</td>
                  <td style={tdStyle}>Extreem krachtig</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Lokaal</strong></td>
                  <td style={tdStyle}>Grotendeels lokaal</td>
                  <td style={tdStyle}>Volledig lokaal</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Flexibiliteit</strong></td>
                  <td style={tdStyle}>Groot</td>
                  <td style={tdStyle}>Onbeperkt</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Voor wie?</strong></td>
                  <td style={tdStyle}>Gemak & gezinnen</td>
                  <td style={tdStyle}>Tech-liefhebbers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Homey: gemak en snel resultaat</h2>
          <p>
            Homey is ideaal als je meerdere merken wilt combineren zonder gedoe.
            Het werkt uitstekend met protocollen zoals{" "}
            <Link href="/blog/wat-is-zigbee">Zigbee</Link> en steeds vaker ook{" "}
            <Link href="/blog/wat-is-matter">Matter</Link>.
          </p>

          <p>
            Product tip:{" "}
            <Link href="/producten/homey-pro-early-2023">
              Homey Pro (Early 2023)
            </Link>
          </p>

          <h2>Home Assistant: maximale controle</h2>
          <p>
            Home Assistant is perfect als je volledige vrijheid wilt. Je kunt
            alles lokaal draaien en complexe logica bouwen. Het vraagt wel meer
            kennis en onderhoud.
          </p>

          <p>
            Product tip:{" "}
            <Link href="/producten/home-assistant-green">
              Home Assistant Green
            </Link>
          </p>

          <h2>Conclusie</h2>
          <p>
            Zie Homey als de beste keuze voor de meeste mensen. Home Assistant is
            ideaal als je graag diep in je smart home duikt. Twijfel je nog?
            Begin bij de{" "}
            <Link href="/blog/beste-smart-home-hub">
              beste smart home hub-vergelijking
            </Link>
            .
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-matter">Wat is Matter?</Link>
            </li>
            <li>
              <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
                Zigbee vs Z-Wave vs Matter vs Wi-Fi
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
