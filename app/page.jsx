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
        {/* ✅ ORIGINELE HERO BANNER (ongewijzigd) */}
        <section className="hero-banner">
          <img
            src="/images/hero-smarthome.png"
            alt="SlimHuisWonen.nl - Smart home producten"
            className="hero-banner-img"
          />

          <div className="hero-banner-overlay" />

          <div className="hero-banner-content">
            <div className="container">
              <div className="hero-banner-inner hero-banner-inner--mobile">
                <h1>Maak je huis slim — zonder gedoe</h1>

                <p>
                  De beste smart home producten, tips en automatiseringen op één
                  plek.
                </p>

                <div className="hero-banner-actions">
                  <Link
                    href="/producten"
                    className="btn hero-btn hero-secondary"
                  >
                    Ontdek producten
                  </Link>

                  <Link href="/tips" className="btn hero-btn hero-primary">
                    Start met tips →
                  </Link>
                </div>

                <a href="#koopgidsen" className="scroll-indicator">
                  Ontdek meer <span className="scroll-arrow">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Spacer zodat er NOOIT overlap is */}
        <div className="hero-spacer" />

        {/* ✅ Scroll target */}
        <span id="koopgidsen" />

        {/* ✅ KOOPGIDSEN */}
        <TopKoopgidsen />

        <About />
        <Categories />

        {/* ✅ Tips & uitleg (deze was al goed) */}
        <section className="section">
          <div className="container">
            <Link href="/tips" className="banner-center tips-banner-link">
              <div className="categorie-banner tips-banner">
                <img
                  src="/images/banner_tips_uitleg.png"
                  alt="Tips & uitleg"
                  className="banner-img"
                />
              </div>
            </Link>

            <h2>Tips & uitleg</h2>

            <p className="section-intro">
              Stap-voor-stap uitleg en praktische tips om je huis slimmer te
              maken. Van slimme verlichting tot complete smart home
              automatiseringen.
            </p>

            <Link href="/tips" className="btn btn-primary">
              Bekijk alle tips & uitleg →
            </Link>
          </div>
        </section>

        {/* ✅ Blog (deze was ook al goed) */}
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
              Uitleg, vergelijkingen en koopgidsen over Zigbee, Matter, slimme
              stekkers, hubs en verlichting. Praktisch, duidelijk en zonder
              marketingpraat.
            </p>

            <Link href="/blog" className="btn btn-primary">
              Bekijk alle blogs →
            </Link>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
