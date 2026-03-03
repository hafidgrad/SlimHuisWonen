import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { howto } from "@/data/howto";
import { getAllTips } from "@/data/tips";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Beveiliging | SlimHuisWonen",
  description:
    "Beveilig je slimme huis met camera’s, deurbellen en sensoren. Handleidingen, uitleg en koopadvies.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/topic/beveiliging",
  },
};

export default function BeveiligingHub() {
  const beveiligingHowTo = howto.filter((item) =>
    item.categories?.includes("veiligheid")
  );

  const beveiligingTips = getAllTips().filter((tip) =>
    tip.categories?.includes("veiligheid")
  );

  const beveiligingBlogs = blogPosts.filter((blog) =>
    blog.categories?.includes("veiligheid")
  );

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1>Beveiliging</h1>

<p className="section-intro">
  Een slim huis moet niet alleen comfortabel zijn, maar ook veilig.
  Op deze pagina vind je alle uitleg, handleidingen en adviezen om je smart home goed te beveiligen.
</p>

<p>
  Slimme camera’s, deurbellen en sensoren zijn verbonden met internet.
  Dat biedt gemak, maar vraagt ook om de juiste instellingen.
  Met sterke wachtwoorden, updates en een stabiel netwerk verklein je risico’s aanzienlijk.
</p>

<p>
  In dit kenniscluster behandelen we alles rondom smart home beveiliging.
  Van het kiezen van betrouwbare merken tot het correct instellen van
  privacy-instellingen en netwerkbeveiliging.
</p>

<ul>
  <li>Hoe beveilig je je slimme huis tegen hackers?</li>
  <li>Zijn slimme camera’s veilig?</li>
  <li>Wat is de beste slimme deurbel?</li>
  <li>Hoe stel je tweestapsverificatie in?</li>
</ul>

<p>
  Bekijk ook onze koopgidsen voor de{" "}
  <Link href="/aanraders/beste-slimme-camera">
    beste slimme camera’s
  </Link>{" "}
  en{" "}
  <Link href="/aanraders/beste-slimme-deurbel">
    beste slimme deurbellen
  </Link>{" "}
  als je direct een veilige keuze wilt maken.
</p>

          {beveiligingHowTo.length > 0 && (
            <>
              <h2>Handleidingen</h2>
              <div className="grid-3">
                {beveiligingHowTo.map((item) => (
                  <Link key={item.slug} href={`/how-to/${item.slug}`} className="card">
                    <Image src={item.image} alt={item.title} width={400} height={240} />
                    <h3>{item.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

          {beveiligingTips.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Tips & Uitleg</h2>
              <div className="grid-3">
                {beveiligingTips.map((tip) => (
                  <Link key={tip.slug} href={`/tips/${tip.slug}`} className="card">
                    <Image src={tip.image} alt={tip.title} width={400} height={240} />
                    <h3>{tip.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}
          <hr style={{ margin: "3rem 0" }} />

<h2>Veelgestelde vragen over smart home beveiliging</h2>

<div style={{ marginBottom: "1.5rem" }}>
  <h3>Is een smart home veilig?</h3>
  <p>
    Ja, mits je sterke wachtwoorden gebruikt, apparaten up-to-date houdt
    en onnodige internettoegang beperkt. Een goed ingesteld netwerk is cruciaal.
  </p>
</div>

<div style={{ marginBottom: "1.5rem" }}>
  <h3>Kunnen slimme camera’s gehackt worden?</h3>
  <p>
    In theorie wel, vooral bij zwakke wachtwoorden of verouderde software.
    Door tweestapsverificatie en regelmatige updates verklein je dit risico sterk.
  </p>
</div>

<div style={{ marginBottom: "1.5rem" }}>
  <h3>Is een hub veiliger dan losse wifi-apparaten?</h3>
  <p>
    Vaak wel. Apparaten die via een hub werken, communiceren minder direct
    met internet en werken vaker lokaal.
  </p>
</div>

          {beveiligingBlogs.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Artikelen</h2>
              <div className="grid-3">
                {beveiligingBlogs.map((blog) => (
                  <Link key={blog.slug} href={`/blog/${blog.slug}`} className="card">
                    <Image src={blog.image} alt={blog.title} width={400} height={240} />
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