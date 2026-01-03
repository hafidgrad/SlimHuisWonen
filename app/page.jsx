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
              <article className="tip-card">
                <h3>Wat is slimme verlichting?</h3>
                <p>
                  We leggen uit wat slimme verlichting is, hoe het werkt en wat je ermee kunt.
                </p>
                <Link href="/tips/wat-is-slimme-verlichting">
                  Lees artikel →
                </Link>
              </article>

              <article className="tip-card">
                <h3>Beginnen met slimme verlichting</h3>
                <p>
                  Wil je starten? Volg deze eenvoudige stappen zonder technische kennis.
                </p>
                <Link href="/tips/beginnen-met-slimme-verlichting">
                  Lees artikel →
                </Link>
              </article>

              <article className="tip-card">
                <h3>Beginnen met smart home in 5 stappen</h3>
                <p>
                  Van eerste slimme lamp tot automatiseringen zonder gedoe.
                </p>
                <Link href="/tips/beginnen-met-smart-home">
                  Lees artikel →
                </Link>
              </article>

              <article className="tip-card">
                <h3>Merken combineren zonder gedoe</h3>
                <p>
                  Philips Hue, Ikea, Aqara, Nest en meer: zo laat je alles samenwerken.
                </p>
                <Link href="/tips/merken-combineren-zonder-gedoe">
                  Lees artikel →
                </Link>
              </article>

              <article className="tip-card">
                <h3>Wat is een smart home hub?</h3>
                <p>
                  We leggen uit wat een hub doet en wanneer je er eentje nodig hebt.
                </p>
                <span className="muted small">Artikel komt binnenkort</span>
              </article>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
