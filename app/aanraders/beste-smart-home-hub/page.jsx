import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Beste smart home hub (2026) – onze aanraders per type gebruiker",
  description:
    "De beste smart home hubs van dit moment. Bekijk onze aanraders voor beginners, power users en Samsung-gebruikers.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-smart-home-hub",
  },
};

export default function BesteSmartHomeHubKoopgidsPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* Hero */}
          <div
            className="blogBanner"
            style={{ "--blog-bg": "url(/images/aanraders/beste-smart-home-hub.png)" }}
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
                src="/images/aanraders/beste-smart-home-hub.png"
                alt="Beste smart home hub"
                width={1400}
                height={520}
                priority
                className="blogBannerImg"
              />
            </div>
          </div>

          {/* Context */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Keuzehulp:{" "}
            <Link href="/blog/beste-smart-home-hub">
              welke smart home hub past bij jou?
            </Link>
          </p>

          <h1>Beste smart home hub (2026)</h1>

          <p className="section-intro">
            Een smart home hub is het hart van je slimme huis. De juiste keuze
            hangt sterk af van hoeveel controle je wilt, hoeveel tijd je erin
            wilt steken en welke merken je gebruikt.
          </p>

          <h2>Onze aanraders</h2>

          {/* 1 */}
          <h3>Beste smart home hub voor de meeste mensen</h3>
          <p>
            <strong>Homey Pro</strong> is de beste allround keuze. Gebruiksvriendelijk,
            veel integraties (Zigbee, Z-Wave, Matter, Wi-Fi) en krachtige
            automatiseringen zonder technisch gedoe.
          </p>
          <p>
            <Link href="/producten/homey-pro-early-2023">
              Bekijk Homey Pro →
            </Link>
          </p>

          {/* 2 */}
          <h3>Beste smart home hub voor power users</h3>
          <p>
            <strong>Home Assistant</strong> is de meest flexibele oplossing. Alles
            draait lokaal, je kunt eindeloos tweaken en vrijwel elk apparaat
            integreren — mits je bereid bent tijd te investeren.
          </p>
          <p>
            <Link href="/producten/home-assistant-green">
              Bekijk Home Assistant →
            </Link>
          </p>

          {/* 3 */}
          <h3>Beste smart home hub voor Samsung-gebruikers</h3>
          <p>
            <strong>Samsung SmartThings Hub</strong> werkt het beste als je al
            Samsung-apparaten gebruikt. Makkelijk in gebruik, maar minder diep
            dan Homey of Home Assistant.
          </p>
          <p>
            <Link href="/producten/samsung-smartthings-hub">
              Bekijk SmartThings →
            </Link>
          </p>

          <h2>Welke hub moet jij kiezen?</h2>
          <ul>
            <li>
              <strong>Ik wil gemak & snel klaar:</strong> Homey
            </li>
            <li>
              <strong>Ik wil maximale controle:</strong> Home Assistant
            </li>
            <li>
              <strong>Ik gebruik veel Samsung:</strong> SmartThings
            </li>
          </ul>

          <p>
            Twijfel je nog? Lees eerst onze{" "}
            <Link href="/blog/beste-smart-home-hub">
              uitgebreide keuzehulp voor smart home hubs
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
