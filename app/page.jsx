import Header from "@/components/Header";
import TopAanraders from "@/components/TopAanraders";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* ✅ HERO BANNER */}
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

                {/* ✅ Knoppen */}
                <div className="hero-banner-actions">
                  <Link href="/producten" className="btn hero-btn hero-secondary">
                    Ontdek producten
                  </Link>

                  <Link href="/tips" className="btn hero-btn hero-primary">
                    Start met tips →
                  </Link>
                </div>

                {/* ✅ Scroll indicator */}
                <a href="#top-aanraders" className="scroll-indicator">
                  Ontdek meer <span className="scroll-arrow">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Spacer zodat er NOOIT overlap is */}
        <div className="hero-spacer" />

        {/* ✅ Scroll target */}
        <div id="top-aanraders" />

        <TopAanraders />

        <About />
        <Categories />

        {/* ✅ Tips & uitleg – centrale CTA */}
        <section className="section">
          <div className="container">
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

        <Contact />
      </main>

      <Footer />
    </>
  );
}
