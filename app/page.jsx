import Header from "@/components/Header";
import TopAanraders from "@/components/TopAanraders";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* ✅ HERO BANNER */}
        <section className="relative w-full overflow-hidden z-0">
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
            <Image
              src="/images/hero-smarthome.png"
              alt="SlimHuisWonen.nl - Smart home producten"
              fill
              priority
              className="object-cover"
            />

            {/* ✅ Gradient overlay (mooier + betere leesbaarheid) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />

            {/* ✅ Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    Slim wonen begint bij de juiste smart home keuzes
                  </h1>

                  <p className="mt-4 text-base sm:text-lg opacity-95">
                    Vergelijk slimme producten, ontdek handige automatiseringen en bouw jouw smart home stap voor stap — zonder gedoe.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/categorieen"
                      className="inline-flex items-center justify-center rounded-xl bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
                    >
                      Bekijk categorieën
                    </Link>

                    <Link
                      href="/tips"
                      className="inline-flex items-center justify-center rounded-xl bg-white/15 text-white px-6 py-3 font-semibold border border-white/40 hover:bg-white/25 transition"
                    >
                      Lees tips & uitleg →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ TopAanraders netjes onder hero (met gecontroleerde overlap) */}
        <div className="relative z-10 -mt-12 sm:-mt-16">
          <TopAanraders />
        </div>

        <About />
        <Categories />

        {/* ✅ Toon slechts 6 producten op de homepage */}
        <Products limit={6} />

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
