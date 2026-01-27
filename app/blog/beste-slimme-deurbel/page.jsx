import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slimme deurbel kiezen: waar moet je op letten? (2026)",
  description:
    "Waar moet je op letten bij het kiezen van een slimme deurbel? Lees alles over accu vs bedraad, wifi, abonnementen, privacy en integraties.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-slimme-deurbel",
  },
};

export default function BesteSlimmeDeurbelBlogPage() {
  const blogImg = "/images/blog/beste-slimme-deurbel.png";

  return (
    <>
      <Header />

      <main className="section">
        {/* Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner src={blogImg} alt="Slimme deurbel kiezen" />
        </div>

        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Beveiliging:{" "}
            <Link href="/tips/slim-huis-beveiligen">Slim huis beveiligen</Link> •{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid
            </Link>
          </p>

          <h1>Slimme deurbel kiezen: waar moet je op letten?</h1>

          <p className="section-intro">
            Een slimme deurbel laat je zien wie er aanbelt — waar je ook bent.
            Maar niet elke slimme deurbel past bij elke woning. In deze gids
            leggen we uit waar je op moet letten, zodat je een goede keuze maakt.
          </p>

          <h2>Accu of bedraad</h2>
          <ul>
            <li>
              <strong>Bedraad:</strong> altijd online, geen opladen, meest stabiel
            </li>
            <li>
              <strong>Accu:</strong> makkelijk te installeren, wel regelmatig opladen
            </li>
          </ul>

          <h2>Beeldkwaliteit & kijkhoek</h2>
          <ul>
            <li>Minimaal Full HD (liefst 2K)</li>
            <li>Brede kijkhoek voor bezoekers en pakketjes</li>
            <li>Goed nachtzicht</li>
          </ul>

          <h2>Wifi & betrouwbaarheid</h2>
          <p>
            Slimme deurbellen zijn gevoelig voor wifi-bereik. Slecht signaal kan
            zorgen voor vertraging of gemiste meldingen.
          </p>

          <p>
            Heb je bereikproblemen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home →
            </Link>
          </p>

          <h2>Abonnementen & opslag</h2>
          <p>
            Veel slimme deurbellen bieden extra functies via een abonnement,
            zoals videohistorie en slimme detectie. Zonder abonnement heb je
            meestal alleen live beeld.
          </p>

          <h2>Privacy & wetgeving</h2>
          <ul>
            <li>stel privacyzones in (buren/openbare weg)</li>
            <li>gebruik audio-opname bewust</li>
            <li>kies bij voorkeur lokale opslag</li>
          </ul>

          <p>
            Meer hierover lees je in{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              privacy & veiligheid in je smart home
            </Link>
            .
          </p>

          <h2>Integraties met smart home</h2>
          <p>
            Sommige slimme deurbellen werken beter binnen een bepaald ecosysteem,
            zoals Google Home, Alexa of Home Assistant. Dat kan belangrijk zijn
            als je al een smart home hebt.
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
              👉 Bekijk onze koopgids: beste slimme deurbel
            </h3>
            <p className="muted">
              We hebben de beste slimme deurbellen per situatie voor je
              geselecteerd: bedraad, accu, zonder abonnement en smart home
              integraties.
            </p>
            <Link
              href="/aanraders/beste-slimme-deurbel"
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
              <Link href="/blog/beste-slimme-camera">
                Slimme camera kiezen
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-slimme-sensoren">
                Slimme sensoren kiezen
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
