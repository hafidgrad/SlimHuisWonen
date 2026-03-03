import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { howto } from "@/data/howto";
import { getAllTips } from "@/data/tips";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Smart Home Basis | SlimHuisWonen",
  description:
    "Alles wat je moet weten om te beginnen met een smart home. Uitleg, tips, handleidingen en koopadvies.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/topic/smart-home-basis",
  },
};

export default function SmartHomeBasisHub() {
  const basisHowTo = howto.filter(
    (item) =>
      item.categories?.includes("basis") ||
      item.categories?.includes("hub")
  );

  const basisTips = getAllTips().filter(
    (tip) =>
      tip.categories?.includes("basis") ||
      tip.categories?.includes("hub")
  );

  const basisBlogs = blogPosts.filter(
    (blog) =>
      blog.categories?.includes("basis") ||
      blog.categories?.includes("hub")
  );

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <h1>Smart Home Basis</h1>

          <p className="section-intro">
            Wil je beginnen met een smart home, maar weet je niet waar je moet starten?
            Op deze pagina vind je alles wat je nodig hebt om slim en zonder fouten te beginnen.
          </p>

          <p>
            Een smart home draait om comfort, automatisering en controle. Maar zonder
            de juiste basis kun je al snel tegen problemen aanlopen zoals incompatibele
            apparaten, instabiele wifi of verkeerde ecosysteemkeuzes.
          </p>

          <p>
            In dit kenniscluster bundelen we alle handleidingen, uitleg en tips
            rondom de fundamenten van een slim huis. Of je nu net begint of je
            huidige installatie wilt verbeteren — hier vind je de juiste start.
          </p>

          <ul>
            <li>Wat is een smart home hub?</li>
            <li>Kun je een slim huis bouwen zonder hub?</li>
            <li>Hoe combineer je verschillende merken?</li>
            <li>Waar moet je op letten bij je eerste aankoop?</li>
          </ul>

          <p>
            Bekijk daarnaast ook onze koopgids voor de{" "}
            <Link href="/aanraders/beste-smart-home-hub">
              beste smart home hubs
            </Link>{" "}
            als je direct een goede keuze wilt maken.
          </p>

          {/* HOW-TO */}
          {basisHowTo.length > 0 && (
            <>
              <h2>Handleidingen</h2>
              <div className="grid-3">
                {basisHowTo.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/how-to/${item.slug}`}
                    className="card"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={240}
                    />
                    <h3>{item.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* TIPS */}
          {basisTips.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Tips & Uitleg</h2>
              <div className="grid-3">
                {basisTips.map((tip) => (
                  <Link
                    key={tip.slug}
                    href={`/tips/${tip.slug}`}
                    className="card"
                  >
                    <Image
                      src={tip.image}
                      alt={tip.title}
                      width={400}
                      height={240}
                    />
                    <h3>{tip.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* BLOGS */}
          {basisBlogs.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Artikelen</h2>
              <div className="grid-3">
                {basisBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="card"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={240}
                    />
                    <h3>{blog.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}