import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Onze slimme aanraders – SlimHuisWonen.nl",
  description:
    "Onze favoriete smart home producten en koopgidsen. Betrouwbaar, populair en makkelijk te installeren.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders",
  },
};

export default function AanradersPage() {
  return (
    <>
      <Header />

      <main className="section">
        {/* ✅ BANNER – zelfde als categorie-pagina’s (GEEN crop) */}
        <div className="banner-center">
          <div
            className="categorie-banner category-hero-banner"
            style={{
              "--category-bg": "url(/images/aanraders-banner.png)",
            }}
          >
            <div className="category-darken" />
            <img
              src="/images/aanraders-banner.png"
              alt="Onze koopgidsen en slimme aanraders"
              className="banner-img"
            />
          </div>
        </div>

        {/* ===== Koopgidsen ===== */}
        <div className="container" style={{ marginBottom: "3rem" }}>
          <h2>Onze koopgidsen</h2>
          <p className="section-intro">
            Twijfel je wat je moet kiezen? In onze koopgidsen vergelijken we de
            beste opties per categorie — helder, onafhankelijk en praktisch.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
              marginTop: "1.5rem",
            }}
          >
            <Link href="/aanraders/beste-slimme-verlichting" className="card">
              <h3>Beste slimme verlichting</h3>
              <p className="muted">Hue, IKEA, Tapo & Govee vergeleken</p>
            </Link>

            <Link href="/aanraders/beste-slimme-stekkers" className="card">
              <h3>Beste slimme stekkers</h3>
              <p className="muted">Met en zonder energiemeting</p>
            </Link>

            <Link href="/aanraders/beste-slimme-camera" className="card">
              <h3>Beste slimme camera</h3>
              <p className="muted">Binnen, buiten & privacy</p>
            </Link>

            <Link href="/aanraders/beste-slimme-deurbel" className="card">
              <h3>Beste slimme deurbel</h3>
              <p className="muted">Bedraad, accu & abonnementen</p>
            </Link>

            <Link href="/aanraders/beste-smart-home-hub" className="card">
              <h3>Beste smart home hub</h3>
              <p className="muted">
                Homey, Home Assistant & SmartThings
              </p>
            </Link>
          </div>
        </div>

        {/* ===== Producten ===== */}
        <div className="container article">
          <h2>Onze slimme aanraders</h2>
          <p className="muted">
            Onze favoriete smart home producten: betrouwbaar, populair en
            eenvoudig te installeren.
          </p>

          {/* 👉 Hier blijft jouw bestaande product-grid */}
        </div>
      </main>

      <Footer />
    </>
  );
}
