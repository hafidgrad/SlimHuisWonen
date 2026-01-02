import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
        <Hero />
        <TopAanraders />
        <About />
        <Categories />
        <Products />

        {/* ✅ Tips & uitleg */}
        <section className="section">
          <div className="container">
            <h2>Tips & uitleg</h2>
            <p className="section-intro">
              Stap-voor-stap uitleg en praktische tips om je huis slimmer te maken.
            </p>

            <div className="tips-grid">
              {tips.map((tip) => (
                <article key={tip.slug} className="tip-card">
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>

                  {tip.available ? (
                    <Link href={`/tips/${tip.slug}`} className="tip-link">
                      Lees artikel →
                    </Link>
                  ) : (
                    <span className="muted small">
                      Artikel komt binnenkort
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
