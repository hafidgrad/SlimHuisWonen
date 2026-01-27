import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Beste slimme camera: waar moet je op letten? (2026)",
  description:
    "Welke slimme camera past bij jouw huis? Lees waar je op moet letten: binnen of buiten, wifi vs PoE, opslag, privacy en beveiliging.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-slimme-camera",
  },
};

export default function BesteSlimmeCameraBlogPage() {
  const blogImg = "/images/blog/beste-slimme-camera.png";

  return (
    <>
      <Header />

      <main className="section">
        {/* Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner src={blogImg} alt="Beste slimme camera" />
        </div>

        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Beveiliging:{" "}
            <Link href="/tips/slim-huis-beveiligen">Slim huis beveiligen</Link> •{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid
            </Link>
          </p>

          <h1>Beste slimme camera: waar moet je op letten?</h1>

          <p className="section-intro">
            Slimme camera’s kunnen je huis veiliger maken, maar alleen als je de
            juiste kiest. In dit artikel leggen we uit waar je op moet letten,
            zodat je geen miskoop doet.
          </p>

          <h2>Binnen- of buitencamera?</h2>
          <p>
            Binnen­camera’s zijn compacter en goedkoper. Buitencamera’s zijn
            weerbestendig en hebben vaak beter nachtzicht. Kies altijd een camera
            die past bij de plek waar je hem wilt gebruiken.
          </p>

          <h2>Stroomvoorziening</h2>
          <ul>
            <li><strong>Netstroom:</strong> stabiel en onderhoudsvrij</li>
            <li><strong>Accu:</strong> flexibel plaatsen, maar opladen nodig</li>
            <li><strong>Zonnepaneel:</strong> handig buiten, afhankelijk van zon</li>
          </ul>

          <h2>Wifi of bekabeld (PoE)</h2>
          <p>
            Wifi-camera’s zijn eenvoudig te installeren, maar gevoelig voor
            bereikproblemen. PoE (Power over Ethernet) is betrouwbaarder, vooral
            bij buitencamera’s.
          </p>

          <p>
            Heb je wifi-problemen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home →
            </Link>
          </p>

          <h2>Opslag & privacy</h2>
          <p>
            Sommige camera’s slaan beelden lokaal op (bijv. SD-kaart of NVR),
            andere gebruiken cloudopslag. Lokale opslag is vaak
            privacyvriendelijker en goedkoper op de lange termijn.
          </p>

          <h2>Beveiliging & instellingen</h2>
          <ul>
            <li>Gebruik sterke wachtwoorden</li>
            <li>Activeer tweestapsverificatie</li>
            <li>Stel privacyzones in</li>
            <li>Houd firmware up-to-date</li>
          </ul>

          <p>
            Lees ook:{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              privacy & veiligheid in je smart home
            </Link>
            .
          </p>

          <h2>Klaar om te kiezen?</h2>
          <p>
            We hebben onze beste slimme camera’s overzichtelijk voor je op een
            rij gezet — per situatie en zonder verkooppraat.
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
              👉 Bekijk onze koopgids: beste slimme camera
            </h3>
            <p className="muted">
              Inclusief onze aanraders voor binnen, buiten, PoE en
              privacyvriendelijke camera’s.
            </p>
            <Link
              href="/aanraders/beste-slimme-camera"
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
              <Link href="/blog/beste-slimme-deurbel">
                Beste slimme deurbel
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-slimme-sensoren">
                Beste slimme sensoren
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
