import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Smart home hub kiezen: waar moet je op letten? (2026)",
  description:
    "Welke smart home hub past bij jou? Lees waar je op moet letten bij Homey, Home Assistant en SmartThings: gemak, controle, lokaal werken en uitbreiden.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-smart-home-hub",
  },
};

export default function BesteSmartHomeHubBlogPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* Banner */}
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
                alt="Smart home hub kiezen"
                width={1400}
                height={520}
                priority
                className="blogBannerImg"
              />
            </div>
          </div>

          {/* Cluster navigatie */}
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

          <h1>Smart home hub kiezen: waar moet je op letten?</h1>

          <p className="section-intro">
            Wil je meerdere smart home merken combineren en betrouwbare
            automatiseringen bouwen? Dan is een smart home hub vaak de juiste
            keuze. In deze gids leggen we uit waar je op moet letten, zodat je
            weet welk type hub bij jou past.
          </p>

          <h2>Wat doet een smart home hub?</h2>
          <p>
            Een smart home hub brengt al je slimme apparaten samen in één
            systeem. In plaats van losse apps per merk, krijg je één centrale
            plek voor bediening en automatiseringen.
          </p>

          <p>
            Meer uitleg nodig?{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>
          </p>

          <h2>Wanneer heb je een hub nodig?</h2>
          <ul>
            <li>je meerdere merken wilt combineren (Hue, Aqara, Tapo)</li>
            <li>je werkt met Zigbee, Z-Wave of Matter</li>
            <li>je stabiele automatiseringen wilt</li>
            <li>je minder afhankelijk wilt zijn van cloud/apps</li>
          </ul>

          <h2>Waar moet je op letten bij het kiezen?</h2>
          <ul>
            <li>
              <strong>Gebruiksgemak:</strong> hoe snel ben je klaar?
            </li>
            <li>
              <strong>Flexibiliteit:</strong> hoeveel wil je aanpassen?
            </li>
            <li>
              <strong>Lokaal werken:</strong> blijft alles werken zonder internet?
            </li>
            <li>
              <strong>Ondersteuning:</strong> Zigbee, Z-Wave, Matter, Wi-Fi
            </li>
          </ul>

          <h2>Globaal verschil tussen de bekendste hubs</h2>
          <ul>
            <li>
              <strong>Homey:</strong> gebruiksvriendelijk, alles-in-één
            </li>
            <li>
              <strong>Home Assistant:</strong> maximale controle, technisch
            </li>
            <li>
              <strong>SmartThings:</strong> vooral interessant binnen Samsung
            </li>
          </ul>

          <p>
            Wil je precies weten wat de verschillen zijn? Bekijk ook{" "}
            <Link href="/blog/home-assistant-vs-homey">
              Home Assistant vs Homey
            </Link>
            .
          </p>

          <h2>Klaar om te kiezen?</h2>
          <p>
            We hebben onze aanraders per type gebruiker overzichtelijk voor je
            op een rij gezet — zonder verkooppraat.
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
              👉 Bekijk onze koopgids: beste smart home hub
            </h3>
            <p className="muted">
              Inclusief onze aanraders voor beginners, power users en
              Samsung-gebruikers.
            </p>
            <Link
              href="/aanraders/beste-smart-home-hub"
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
        </div>
      </main>

      <Footer />
    </>
  );
}
