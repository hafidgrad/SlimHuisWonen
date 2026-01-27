import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Beste slimme sensoren: welke heb je echt nodig? (2026)",
  description:
    "Welke slimme sensoren zijn nuttig in een smart home? Ontdek welke sensoren je nodig hebt voor automatiseringen, veiligheid en energiebesparing.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-slimme-sensoren",
  },
};

export default function BesteSlimmeSensorenBlogPage() {
  const blogImg = "/images/blog/beste-slimme-sensoren.png";

  return (
    <>
      <Header />

      <main className="section">
        {/* Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner
            src={blogImg}
            alt="Beste slimme sensoren voor je smart home"
          />
        </div>

        <div className="container article">
          <h1>Beste slimme sensoren: welke heb je echt nodig?</h1>

          <p className="section-intro">
            Slimme sensoren vormen de basis van een écht slim huis. Ze zorgen
            ervoor dat verlichting, verwarming en beveiliging automatisch
            reageren — zonder dat jij steeds iets hoeft te doen. Maar welke
            sensoren zijn nu echt nuttig?
          </p>

          <h2>Wat doen slimme sensoren?</h2>
          <p>
            Slimme sensoren meten of detecteren wat er in je huis gebeurt:
            beweging, temperatuur, open ramen of zelfs waterlekkage. Die
            informatie gebruik je voor meldingen, automatiseringen en
            energiebesparing.
          </p>

          <h2>De belangrijkste soorten slimme sensoren</h2>

          <h3>1. Bewegings- en aanwezigheidssensoren</h3>
          <p>
            Deze sensoren detecteren of er iemand aanwezig is. Ze worden vaak
            gebruikt om verlichting automatisch aan te zetten, maar ook voor
            beveiliging en energiebesparing.
          </p>

          <h3>2. Deur- en raamsensoren</h3>
          <p>
            Ideaal voor beveiliging en comfort. Denk aan meldingen bij een open
            deur of het automatisch uitschakelen van verwarming bij een open
            raam.
          </p>

          <h3>3. Temperatuur- en luchtvochtigheidssensoren</h3>
          <p>
            Met deze sensoren krijg je inzicht in je binnenklimaat en kun je
            slimmer verwarmen en ventileren.
          </p>

          <h3>4. Water- en lekkagesensoren</h3>
          <p>
            Waterleksensoren waarschuwen direct bij lekkage. Vooral handig bij
            wasmachines, vaatwassers en cv-installaties.
          </p>

          <h2>Heb je een hub nodig?</h2>
          <p>
            In de meeste gevallen wel. Slimme sensoren werken vaak via{" "}
            <strong>Zigbee</strong>, <strong>Z-Wave</strong> of{" "}
            <strong>Matter/Thread</strong> en hebben een hub nodig om
            automatiseringen mogelijk te maken.
          </p>

          <p>
            Meer hierover lees je in:{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              wat is een smart home hub?
            </Link>
          </p>

          <h2>Welke sensoren passen bij jou?</h2>
          <p>
            Dat hangt af van wat je wilt automatiseren. Sommige mensen beginnen
            met alleen bewegingssensoren, anderen kiezen meteen voor beveiliging
            en energiebesparing.
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.25rem",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              👉 Bekijk onze koopgids: beste slimme sensoren
            </h3>
            <p className="muted">
              Inclusief onze aanraders voor bewegings-, deur-, klimaat- en
              waterleksensoren — per situatie uitgelegd.
            </p>
            <Link
              href="/aanraders/beste-slimme-sensoren"
              style={{
                display: "inline-block",
                marginTop: "0.5rem",
                padding: "0.6rem 1rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.16)",
                textDecoration: "none",
              }}
            >
              Naar de koopgids →
            </Link>
          </div>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/tips/slim-huis-beveiligen">
                Slim huis beveiligen
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub
              </Link>
            </li>
            <li>
              <Link href="/blog/wat-is-matter">
                Wat is Matter?
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
