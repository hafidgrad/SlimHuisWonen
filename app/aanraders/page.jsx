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

const koopgidsen = [
  {
    title: "Beste slimme verlichting",
    description: "Hue, IKEA, Tapo & Govee vergeleken",
    image: "/images/blog/beste-slimme-verlichting.png",
    href: "/aanraders/beste-slimme-verlichting",
  },
  {
    title: "Beste slimme stekkers",
    description: "Met en zonder energiemeting",
    image: "/images/blog/beste-slimme-stekkers.png",
    href: "/aanraders/beste-slimme-stekkers",
  },
  {
    title: "Beste slimme camera",
    description: "Binnen, buiten & privacy",
    image: "/images/blog/beste-slimme-camera.png",
    href: "/aanraders/beste-slimme-camera",
  },
  {
    title: "Beste slimme deurbel",
    description: "Bedraad, accu & abonnementen",
    image: "/images/blog/beste-slimme-deurbel.png",
    href: "/aanraders/beste-slimme-deurbel",
  },
  {
    title: "Beste smart home hub",
    description: "Homey, Home Assistant & SmartThings",
    image: "/images/blog/beste-smart-home-hub.png",
    href: "/aanraders/beste-smart-home-hub",
  },
];

export default function AanradersPage() {
  return (
    <>
      <Header />

      <main className="section">
        {/* Banner */}
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

          <div className="tips-grid">
            {koopgidsen.map((item) => (
              <Link key={item.href} href={item.href} className="tip-card">
                <div className="tip-card__image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="tip-card__image"
                  />
                  <span className="tip-badge">Koopgids</span>
                </div>

                <div className="tip-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="read-more">Bekijk koopgids →</span>
                </div>
              </Link>
            ))}
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
