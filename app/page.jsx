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

        {/* ✅ Tips & uitleg – centrale CTA */}
        <section className="section">
          <div className="container">
            <h2>Tips & uitleg</h2>

            <p className="section-intro">
              Stap-voor-stap uitleg en praktische tips om je huis slimmer te maken.
              Van slimme verlichting tot complete smart home automatiseringen.
            </p>

            <Link href="/tips" className="btn-primary">
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
