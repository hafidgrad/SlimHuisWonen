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
          {/* ✅ Blog banner met blur effect */}
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
            <Link href="/tips/wat-is-een-smart-home-hub">Wat is een hub?</Link> •{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">Merken combineren</Link>{" "}
            •{" "}
            <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
              Zigbee vs Z-Wave vs Matter vs Wi-Fi
            </Link>
          </p>

          <h1>Beste smart home hub (2026): Homey vs Home Assistant vs SmartThings</h1>

          <p className="section-intro">
            Wil je merken combineren (Hue + Aqara + Tapo) en automatiseringen maken
            zonder frustratie? Dan is een smart home hub vaak de beste keuze.
            In dit artikel vergelijken we de drie populairste opties:{" "}
            <strong>Homey</strong>, <strong>Home Assistant</strong> en{" "}
            <strong>SmartThings</strong>.
          </p>

          <h2>Snelle keuzehulp (kort)</h2>
          <ul>
            <li>
              ✅ <strong>Meest gebruiksvriendelijk:</strong> Homey
            </li>
            <li>
              ✅ <strong>Meest krachtig / flexibel:</strong> Home Assistant
            </li>
            <li>
              ✅ <strong>Fijn als je Samsung gebruikt:</strong> SmartThings
            </li>
          </ul>

          <h2>Waarom een hub gebruiken?</h2>
          <p>
            Zonder hub gebruik je vaak meerdere apps (Hue app, Aqara app, Tapo app…).
            Een hub brengt alles samen op één plek. Je krijgt:
          </p>
          <ul>
            <li>één app voor al je apparaten</li>
            <li>betere automatiseringen</li>
            <li>meer stabiliteit (vaak lokaal)</li>
            <li>merken combineren zonder omwegen</li>
          </ul>

          <p>
            Wil je exact weten wat een hub doet?{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Lees: wat is een smart home hub?
            </Link>
            .
          </p>

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
                  <th style={thStyle}>Hub</th>
                  <th style={thStyle}>Beste voor</th>
                  <th style={thStyle}>Pluspunten</th>
                  <th style={thStyle}>Minpunten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}><strong>Homey</strong></td>
                  <td style={tdStyle}>Gemak + merken combineren</td>
                  <td style={tdStyle}>Gebruiksvriendelijk, veel integraties, krachtige flows</td>
                  <td style={tdStyle}>Aanschafprijs, minder “diep” dan Home Assistant</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Home Assistant</strong></td>
                  <td style={tdStyle}>Maximale controle & flexibiliteit</td>
                  <td style={tdStyle}>Extreem krachtig, lokaal, uitbreidbaar</td>
                  <td style={tdStyle}>Technisch(er), kost tijd, setup/onderhoud</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>SmartThings</strong></td>
                  <td style={tdStyle}>Samsung ecosysteem</td>
                  <td style={tdStyle}>Makkelijk, goede integratie met Samsung apparaten</td>
                  <td style={tdStyle}>Minder flexibel dan HA, niet altijd volledig lokaal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>1) Homey: beste keuze voor gemak</h2>
          <p>
            Homey is ideaal als je een hub zoekt die gewoon werkt. Je kunt veel
            apparaten toevoegen en sterke automatiseringen maken zonder technisch gedoe.
          </p>

          <p>
            Vooral handig als je merken combineert: Hue + Aqara + Tapo + Ring, enz.
          </p>

          <p>
            Product tip:{" "}
            <Link href="/producten/homey-pro-early-2023">Homey Pro (Early 2023)</Link>
          </p>

          <h2>2) Home Assistant: beste keuze voor power users</h2>
          <p>
            Home Assistant is dé keuze als je maximale controle wilt. Alles kan:
            dashboards, complexe logica, lokale automatiseringen en eindeloze uitbreidingen.
          </p>

          <p>
            Maar eerlijk is eerlijk: je moet er wel zin in hebben. Het kost tijd om
            alles netjes te bouwen en te onderhouden.
          </p>

          <p>
            Product tip:{" "}
            <Link href="/producten/home-assistant-green">Home Assistant Green</Link>
          </p>

          <h2>3) SmartThings: vooral interessant bij Samsung</h2>
          <p>
            SmartThings is sterk als je al in Samsung zit. Denk aan Samsung TV’s,
            appliances en integraties. Het is relatief makkelijk en werkt goed voor
            standaard automatiseringen.
          </p>

          <h2>Welke hub is het beste voor jou?</h2>
          <ul>
            <li>
              <strong>Ik wil gewoon gemak:</strong> Homey
            </li>
            <li>
              <strong>Ik wil maximale controle:</strong> Home Assistant
            </li>
            <li>
              <strong>Ik heb veel Samsung:</strong> SmartThings
            </li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            De “beste” hub hangt af van jouw wensen. Voor de meeste mensen is Homey
            de beste mix van gemak en kracht. Voor power users is Home Assistant top.
            SmartThings is vooral interessant als je Samsung-heavy bent.
          </p>

          <p>
            Wil je merken slim combineren zonder frustratie?{" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren zonder gedoe →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/blog/home-assistant-vs-homey">
                Home Assistant vs Homey (uitgebreid)
              </Link>
            </li>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">Wat is een smart home hub?</Link>
            </li>
            <li>
              <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
                Zigbee vs Z-Wave vs Matter vs Wi-Fi
              </Link>
            </li>
          </ul>

          <h2>Veelgestelde vragen</h2>
          <h3>Heb ik een hub nodig?</h3>
          <p>
            Niet altijd. Maar als je meerdere merken wil combineren of betrouwbare
            automatiseringen wil, is een hub heel slim.
          </p>

          <h3>Wat is makkelijker: Homey of Home Assistant?</h3>
          <p>
            Homey is het makkelijkst. Home Assistant is krachtiger maar vraagt meer tijd
            en technische kennis.
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
