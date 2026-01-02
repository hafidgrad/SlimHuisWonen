import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopAanraders from "@/components/TopAanraders";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ✅ Tips data (lokaal, bewust simpel) */
const tips = [
  {
    slug: "beginnen-met-smart-home",
    title: "Beginnen met smart home in 5 stappen",
    description:
      "We nemen je stap voor stap mee: van eerste lamp tot slimme scènes en automatiseringen.",
    available: true,
  },
  {
    slug: "merken-combineren-zonder-gedoe",
    title: "Merken combineren zonder gedoe",
    description:
      "Philips Hue, Ikea, Aqara, Nest en meer: zo laat je alles netjes samenwerken.",
    available: true,
  },
  {
    slug: "wat-is-een-smart-home-hub",
    title: "Wat is een smart home hub?",
    description:
      "We leggen uit wat een hub doet, welke merken er zijn en waar je op moet letten.",
    available: false,
  },
];

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
