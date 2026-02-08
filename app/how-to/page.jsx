import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipBanner from "@/components/TipBanner";
import TipCard from "@/components/TipCard";
import { howto as howtoData } from "@/data/howto";

export const metadata = {
  title: "How To Smart Home – SlimHuisWonen.nl",
  description:
    "Stap-voor-stap handleidingen voor je smart home. Van wifi verbeteren tot het installeren van een slimme hub.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/how-to",
  },
};

export default function HowToPage() {
  const howtos = (Array.isArray(howtoData) ? howtoData : []).filter(
    (h) => h?.available
  );

  const headerImg = "/images/banner_how-to.png";
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <TipBanner src={headerImg} alt="How To Smart Home" />

          <h1 style={{ fontSize: 42, marginBottom: 8 }}>
            How To Smart Home
          </h1>

          <p className="section-intro">
            Praktische handleidingen om je slimme huis stap voor stap in te
            stellen. Duidelijk uitgelegd, zonder technisch gedoe.
          </p>

          <div className="tips-grid">
            {howtos.map((item) => (
              <TipCard
                key={item.slug}
                tip={{
                  title: item.title,
                  slug: item.slug,
                  desc: item.description,
                  image: item.image,
                }}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
