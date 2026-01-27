import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Beste slimme deurbel (2026) – onze aanraders per situatie",
  description:
    "De beste slimme deurbellen van dit moment. Bekijk onze aanraders voor bedraad, accu, zonder abonnement en smart home integraties.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-deurbel",
  },
};

export default function BesteSlimmeDeurbelKoopgidsPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* Hero */}
          <div
            className="blogBanner"
            style={{ "--blog-bg": "url(/images/aanraders/beste-slimme-deurbel.png)" }}
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
                src="/images/aanraders/beste-slimme-deurbel.png"
                alt="Beste slimme deurbel"
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
            <Link href="/blog/beste-slimme-deurbel">
              waar moet je op letten bij een slimme deurbel?
            </Link>
          </p>

          <h1>Beste slimme deurbel (2026)</h1>

          <p className="section-intro">
            Niet elke slimme deurbel past bij elke woning. Daarom hebben we onze
            aanraders opgesplitst per situatie: bedraad, accu, zonder abonnement
            en smart home integratie.
          </p>

          <h2>Onze aanraders</h2>

          {/* 1 */}
          <h3>Beste slimme deurbel (bedraad & stabiel)</h3>
          <p>
            <strong>Google Nest Doorbell (bedraad)</strong> is een sterke keuze
            als je maximale betrouwbaarheid wilt. Altijd online, scherpe beelden
            en goede persoonsdetectie.
          </p>
          <p>
            <Link href="/producten/google-nest-doorbell-wired">
              Bekijk product →
            </Link>
          </p>

          {/* 2 */}
          <h3>Beste slimme deurbel op accu</h3>
          <p>
            <strong>Ring Battery Doorbell Plus</strong> is populair door de
            eenvoudige installatie en goede app. Wel rekening houden met
            opladen en abonnement.
          </p>
          <p>
            <Link href="/producten/ring-battery-doorbell-plus">
              Bekijk product →
            </Link>
          </p>

          {/* 3 */}
          <h3>Beste slimme deurbel zonder abonnement</h3>
          <p>
            <strong>Eufy Video Doorbell</strong> slaat beelden lokaal op en werkt
            zonder maandelijkse kosten. Interessant als privacy belangrijk is.
          </p>
          <p>
            <Link href="/producten/eufy-video-doorbell">
              Bekijk product →
            </Link>
          </p>

          {/* 4 */}
          <h3>Beste slimme deurbel voor smart home integratie</h3>
          <p>
            <strong>TP-Link Tapo Video Doorbell</strong> werkt goed samen met
            Home Assistant en is betaalbaar. Ideaal als je al Tapo gebruikt.
          </p>
          <p>
            <Link href="/producten/tapo-video-doorbell">
              Bekijk product →
            </Link>
          </p>

          {/* 5 */}
          <h3>Beste premium slimme deurbel</h3>
          <p>
            <strong>Netatmo Smart Video Doorbell</strong> is bedraad, lokaal
            opgeslagen en gericht op privacy. Geen abonnement, wel premium prijs.
          </p>
          <p>
            <Link href="/producten/netatmo-smart-video-doorbell">
              Bekijk product →
            </Link>
          </p>

          <h2>Welke moet jij kiezen?</h2>
          <ul>
            <li>
              <strong>Maximale stabiliteit:</strong> bedrade deurbel
            </li>
            <li>
              <strong>Makkelijk installeren:</strong> accu-deurbel
            </li>
            <li>
              <strong>Geen abonnement:</strong> lokale opslag (Eufy / Netatmo)
            </li>
            <li>
              <strong>Smart home bouwen:</strong> Tapo / integratie via hub
            </li>
          </ul>

          <p>
            Twijfel je nog? Lees eerst onze{" "}
            <Link href="/blog/beste-slimme-deurbel">
              keuzehulp voor slimme deurbellen
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
