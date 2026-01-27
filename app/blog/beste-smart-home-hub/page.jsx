import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Beste smart home hub (2026): Homey vs Home Assistant vs SmartThings",
  description:
    "Welke smart home hub is het beste? Vergelijk Homey, Home Assistant en SmartThings op gemak, stabiliteit, kosten en mogelijkheden.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-smart-home-hub",
  },
};

export default function BesteSmartHomeHubPage() {
  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is de beste smart home hub voor beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voor beginners is Homey vaak de makkelijkste keuze: alles in één app, veel integraties en krachtige automatiseringen zonder technisch gedoe.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: Homey of Home Assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Homey is makkelijker en sneller klaar. Home Assistant is krachtiger en flexibeler, maar vraagt meer tijd en technische kennis.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een hub nodig voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Met Wi-Fi apparaten kun je zonder hub starten. Maar als je meerdere merken wilt combineren of betrouwbare automatiseringen wilt, is een hub sterk aan te raden.",
        },
      },
      {
        "@type": "Question",
        name: "Werkt een hub ook zonder internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sommige hubs werken (deels) lokaal en blijven functioneren bij internetproblemen. Dat hangt af van het platform en de apparaten die je gebruikt.",
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
            style={{ "--blog-bg": "url(/images/blog/beste-smart-home-hub.png)" }}
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
                src="/images/blog/beste-smart-home-hub.png"
                alt="Beste smart home hub"
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
            <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
              Smart home protocollen
            </Link>{" "}
            •{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren
            </Link>{" "}
            •{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>
          </p>

          <h1>Beste smart home hub (2026): Homey vs Home Assistant vs SmartThings</h1>

          <p className="section-intro">
            Wil je merken combineren (Hue, Aqara, Tapo) en betrouwbare
            automatiseringen bouwen? Dan is een smart home hub bijna onmisbaar.
            Deze pagina is het <strong>keuzepunt</strong> voor de juiste hub.
          </p>

          <h2>Snelle keuzehulp</h2>
          <ul>
            <li><strong>Meest gebruiksvriendelijk:</strong> Homey</li>
            <li><strong>Meest krachtig / flexibel:</strong> Home Assistant</li>
            <li><strong>Samsung ecosysteem:</strong> SmartThings</li>
          </ul>

          <h2>Waarom een hub gebruiken?</h2>
          <p>
            Zonder hub gebruik je losse apps per merk. Met een hub breng je alles
            samen en kun je protocollen zoals{" "}
            <Link href="/blog/wat-is-zigbee">Zigbee</Link> en{" "}
            <Link href="/blog/wat-is-matter">Matter</Link> slim combineren.
          </p>

          <p>
            Uitleg nodig?{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>
          </p>

          <h2>Vergelijking in één tabel</h2>
          <div style={{ overflowX: "auto", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
              <thead>
                <tr>
                  <th style={thStyle}>Hub</th>
                  <th style={thStyle}>Beste voor</th>
                  <th style={thStyle}>Pluspunten</th>
                  <th style={thStyle}>Minpunten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}><strong>Homey</strong></td>
                  <td style={tdStyle}>Gemak + combineren</td>
                  <td style={tdStyle}>Gebruiksvriendelijk, veel integraties</td>
                  <td style={tdStyle}>Aanschafprijs</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Home Assistant</strong></td>
                  <td style={tdStyle}>Power users</td>
                  <td style={tdStyle}>Extreem flexibel, lokaal</td>
                  <td style={tdStyle}>Technisch, kost tijd</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>SmartThings</strong></td>
                  <td style={tdStyle}>Samsung gebruikers</td>
                  <td style={tdStyle}>Makkelijk, Samsung integratie</td>
                  <td style={tdStyle}>Minder diep</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Welke hub past bij jou?</h2>
          <ul>
            <li><strong>Ik wil gemak:</strong> Homey</li>
            <li><strong>Ik wil maximale controle:</strong> Home Assistant</li>
            <li><strong>Ik zit in Samsung:</strong> SmartThings</li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Zie deze pagina als je startpunt. Daarna kun je verdiepen per platform
            of direct producten vergelijken.
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/home-assistant-vs-homey">
                Home Assistant vs Homey
              </Link>
            </li>
            <li>
              <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
                Zigbee vs Z-Wave vs Matter vs Wi-Fi
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
