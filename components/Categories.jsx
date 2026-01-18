import Link from "next/link";

export default function Categories() {
  return (
    <section className="section">
      <div className="container">
        {/* ✅ Banner */}
        <div className="banner-center">
          <div className="categorie-banner">
            <img
              src="/images/banner_categorieen_slimme_producten.png"
              alt="Categorieën slimme producten"
              className="banner-img"
            />
          </div>
        </div>

        <h2>Categorieën slimme producten</h2>
        <p className="section-intro">
          Bekijk per categorie welke slimme producten het beste bij jouw woning passen.
        </p>

        <div className="category-grid">
          <div className="card">
            <h3>Slimme verlichting</h3>
            <p>Lampjes, spots en LED-strips die je bedient met app, sensor of spraak.</p>
            <Link href="/categorie/slimme-verlichting" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Sensoren</h3>
            <p>Deur-, raam-, bewegings- en temperatuursensoren voor automatisering en veiligheid.</p>
            <Link href="/categorie/sensoren" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Slimme deurbellen</h3>
            <p>Altijd zien wie er aanbelt, zelfs als je niet thuis bent.</p>
            <Link href="/categorie/slimme-deurbellen" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Slimme thermostaten</h3>
            <p>Bespaar energie met een thermostaat die met je meedenkt.</p>
            <Link href="/categorie/slimme-thermostaten" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Slimme stekkers</h3>
            <p>Maak bestaande apparaten slim met een slimme stekker.</p>
            <Link href="/categorie/slimme-stekkers" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Hubs & gateways</h3>
            <p>Homey, Home Assistant, Zigbee en meer – de hersenen van je slimme huis.</p>
            <Link href="/categorie/slimme-hubs" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Slimme speakers</h3>
            <p>Slimme speakers met Google Assistant of Amazon Alexa.</p>
            <Link href="/categorie/slimme-speakers" className="card-link">
              Bekijk producten →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
