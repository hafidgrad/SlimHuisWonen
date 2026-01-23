import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipBanner from "@/components/TipBanner";
import TipCard from "@/components/TipCard";
import { tips as tipsData } from "@/data/tips";

export const metadata = {
  title: "Tips & uitleg – SlimHuisWonen.nl",
  description:
    "Praktische smart home tips en uitleg: slimme verlichting, hubs, wifi, automatiseringen en meer. Stap-voor-stap en geschikt voor beginners.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips",
  },
};

export default function TipsPage() {
  const tips = (Array.isArray(tipsData) ? tipsData : []).filter((t) => t?.available);

  const headerImg = "/images/Tips%20%26%20uitleg/Tips%20%26%20uitleg.png";

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <TipBanner src={headerImg} alt="Tips & uitleg" />

          <h1 style={{ fontSize: 42, marginBottom: 8 }}>Tips & uitleg</h1>
          <p className="section-intro">
            Stap-voor-stap uitleg en praktische tips om je huis slimmer te maken.
            Geschikt voor beginners én gevorderden.
          </p>

          <div className="tips-grid">
            {tips.map((tip) => (
              <TipCard
                key={tip.slug}
                tip={{
                  title: tip.title,
                  slug: tip.slug,
                  desc: tip.description,
                  image: tip.image,
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
