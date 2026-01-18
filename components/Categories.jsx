import Link from "next/link";

export default function Categories() {
  return (
    <section className="section">
      <div className="container">

        {/* ✅ Banner */}
        <div className="banner-center">
          <div className="categorie-banner">
            <img
              src="/images/categorieen-banner.png"
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
            <Link href="/categorie/verlichting" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Sensoren & beveiliging</h3>
            <p>Deur-, raam-, bewegings- en temperatuursensoren voor automatisering en veiligheid.</p>
            <Link href="/categorie/beveiliging" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Camera’s & deurbel</h3>
            <p>Altijd zien wie er aanbelt, zelfs als je niet thuis bent.</p>
            <Link href="/categorie/cameras" className="card-link">
              Bekijk producten →
            </Link>
          </div>

          <div className="card">
            <h3>Klimaat & energie</h3>
            <p>Bespaar energie met een thermostaat die met je meedenkt.</p>
            <Link href="/categorie/energie" className="card-link">
              Bekijk producten →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
