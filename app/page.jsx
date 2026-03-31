import Header from "@/components/Header";
import TopKoopgidsen from "@/components/TopKoopgidsen";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section className="hero-banner">
          <div className="hero-banner-overlay" />

          <div className="hero-banner-content">
            <div className="container">
              <div className="hero-banner-inner hero-banner-inner--mobile">
                <h1>Maak je huis slim — zonder gedoe</h1>

                <p>
                  De beste smart home producten, tips en automatiseringen op één plek.
                </p>

                <div className="hero-banner-actions">
                  <Link
                    href="/aanraders"
                    className="btn hero-btn hero-primary"
                  >
                    Bekijk koopgidsen →
                  </Link>

                  <Link
                    href="/categorie"
                    className="btn hero-btn hero-secondary"
                  >
                    Ontdek categorieën
                  </Link>
                </div>

                <a href="#koopgidsen" className="scroll-indicator">
                  Ontdek meer <span className="scroll-arrow">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="hero-spacer" />

        {/* ================= PERSOONLIJK BLOK ================= */}
        <section className="section">
          <div className="container">
            <div className="about-founder__grid">
              <div className="about-founder__image-wrap">
                <img
                  src="/images/hafid-laptop.jpg"
                  className="about-founder__image"
                />
              </div>

              <div className="about-founder__content">
                <span className="about-founder__eyebrow">Over SlimHuisWonen</span>
                <h2>Waarom ik SlimHuisWonen ben gestart</h2>

                <p>
                  Zo is het bij mij begonnen. Met één slimme lamp.
                </p>

                <p>
                  Een paar jaar later is mijn hele huis slim en verbonden met een
                  smart home hub. Met automatiseringen, sensoren en slimme
                  oplossingen die het dagelijks leven makkelijker maken.
                </p>

                <p>
                  Toen ik begon, merkte ik al snel hoe onduidelijk het soms kan
                  zijn. Welke producten werken goed samen? Waar begin je? En wat
                  heb je echt nodig?
                </p>

                <p>
                  Daarom ben ik SlimHuisWonen.nl gestart. Op deze website deel ik
                  mijn ervaringen, tips en aanbevelingen zodat jij makkelijker kunt
                  starten met jouw eigen smart home.
                </p>

                <div className="about-founder__actions">
                  <Link href="/aanraders" className="about-founder__button">
                    Bekijk mijn aanraders
                  </Link>

                  <Link href="/tips" className="about-founder__link">
                    Lees praktische tips
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= KENNISCLUSTERS ================= */}
        <section className="section">
          <div className="container">
            <h2>Onze Kennisclusters</h2>

            <p className="section-intro">
              Ontdek onze complete kennisgebieden binnen smart home.
              Hier vind je handleidingen, tips en koopadvies per onderwerp.
            </p>

            <div className="grid-3">
              {/* Smart Home Basis */}
              <Link href="/topic/smart-home-basis" className="card">
                <h3>Smart Home Basis</h3>
                <p>
                  Beginnen met een smart home? Leer hoe je slim en zonder fouten start.
                </p>
                <span>Bekijk kenniscluster →</span>
              </Link>

              {/* Wifi */}
              <Link href="/topic/wifi-netwerk" className="card">
                <h3>Wifi & Netwerk</h3>
                <p>
                  Verbeter je wifi en zorg voor een stabiel smart home netwerk.
                </p>
                <span>Bekijk kenniscluster →</span>
              </Link>

              {/* Beveiliging */}
              <Link href="/topic/beveiliging" className="card">
                <h3>Beveiliging</h3>
                <p>
                  Houd je slimme huis veilig met camera’s, deurbellen en sensoren.
                </p>
                <span>Bekijk kenniscluster →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= KOOPGIDSEN ================= */}
        <span id="koopgidsen" />
        <TopKoopgidsen />

        {/* ================= CATEGORIEËN ================= */}
        <Categories />

        {/* ================= TIPS ================= */}
        <section className="section">
          <div className="container">
            <Link href="/tips" className="banner-center tips-banner-link">
              <div className="categorie-banner tips-banner">
                <img
                  src="/images/banner_tips_uitleg.png"
                  alt="Tips en uitleg voor je smart home"
                  className="banner-img"
                />
              </div>
            </Link>

            <h2>Tips & uitleg</h2>

            <p className="section-intro">
              Praktische uitleg over slimme verlichting, sensoren, hubs en
              netwerken. Begrijp hoe je smart home werkt.
            </p>

            <Link href="/tips" className="btn btn-primary">
              Bekijk alle tips →
            </Link>
          </div>
        </section>

        {/* ================= HOW TO ================= */}
        <section className="section">
          <div className="container">
            <Link href="/how-to" className="banner-center howto-banner-link">
              <div className="categorie-banner howto-banner">
                <img
                  src="/images/banner_how-to.png"
                  alt="How To Smart Home"
                  className="banner-img"
                />
              </div>
            </Link>

            <h2>How To Smart Home</h2>

            <p className="section-intro">
              Stap-voor-stap handleidingen om je smart home correct in te
              stellen — zonder technisch gedoe.
            </p>

            <Link href="/how-to" className="btn btn-primary">
              Bekijk alle How To handleidingen →
            </Link>
          </div>
        </section>

        {/* ================= BLOG ================= */}
        <section className="section">
          <div className="container">
            <Link href="/blog" className="banner-center blog-banner-link">
              <div className="categorie-banner blog-banner">
                <img
                  src="/images/blog/blog-header.png"
                  alt="SlimHuisWonen blog"
                  className="banner-img"
                />
              </div>
            </Link>

            <h2>Blog</h2>

            <p className="section-intro">
              Vergelijkingen en diepgaande uitleg over Zigbee, Matter,
              automatiseringen en slimme keuzes.
            </p>

            <Link href="/blog" className="btn btn-primary">
              Bekijk alle blogs →
            </Link>
          </div>
        </section>

        {/* ================= OVER ================= */}
        <About />

        {/* ================= CONTACT ================= */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}