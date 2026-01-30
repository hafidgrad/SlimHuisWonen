import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste slimme deurbel (2026) – onze aanraders",
  description:
    "De beste slimme deurbellen van dit moment. Onze aanraders voor bedraad, accu, zonder abonnement en smart home integratie.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-slimme-deurbel",
  },
};

export default function BesteSlimmeDeurbelKoopgidsPage() {
  const guide = {
    title: "Beste slimme deurbel (2026)",
    image: "/images/blog/beste-slimme-deurbel.png",
    intro:
      "Een slimme deurbel laat je zien wie er voor de deur staat — waar je ook bent. In deze koopgids vind je onze beste keuzes per situatie, zonder marketingpraat.",
    picks: [
      {
        title: "Beste bedrade slimme deurbel",
        description:
          "Altijd online, stabiel en geen gedoe met opladen. Ideaal als je bestaande bedrading hebt.",
        image: "/images/products/google-nest-doorbell-wired.png",
        href: "/producten/google-nest-doorbell-wired",
        badges: ["Bedraad", "Meest stabiel"],
      },
      {
        title: "Beste slimme deurbel op accu",
        description:
          "Makkelijk te installeren zonder kabels. Populair en gebruiksvriendelijk, wel opladen nodig.",
        image: "/images/products/ring-battery-doorbell-plus.png",
        href: "/producten/ring-battery-doorbell-plus",
        badges: ["Accu", "Eenvoudig"],
      },
      {
        title: "Beste slimme deurbel zonder abonnement",
        description:
          "Lokale opslag, geen maandelijkse kosten en privacyvriendelijk.",
        image: "/images/products/eufy-video-doorbell.png",
        href: "/producten/eufy-video-doorbell",
        badges: ["Geen abonnement", "Privacy"],
      },
      {
        title: "Beste slimme deurbel voor smart home",
        description:
          "Betaalbaar en goed te integreren met Home Assistant en andere smart home systemen.",
        image: "/images/products/tapo-video-doorbell.png",
        href: "/producten/tapo-video-doorbell",
        badges: ["Smart home", "Wi-Fi"],
      },
      {
        title: "Beste premium slimme deurbel",
        description:
          "Bedraad, lokale opslag en sterke focus op privacy. Duurder, maar zonder abonnement.",
        image: "/images/products/netatmo-smart-video-doorbell.png",
        href: "/producten/netatmo-smart-video-doorbell",
        badges: ["Premium", "Geen abonnement"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">

          {/* ✅ CATEGORIE-BANNER (zelfde als categorieën & andere koopgidsen) */}
          <div className="categorie-banner" style={{ marginBottom: "1.25rem" }}>
            <img
              src={guide.image}
              alt={guide.title}
              className="banner-img"
            />
          </div>

          <h1>{guide.title}</h1>
          <p className="section-intro">{guide.intro}</p>

          <h2>Onze aanraders</h2>
          <p className="muted">
            Geselecteerd op betrouwbaarheid, gebruiksgemak en prijs-kwaliteit.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <p>
            Eerst vergelijken? Lees ook{" "}
            <Link href="/blog/beste-slimme-deurbel">
              waar je op moet letten bij slimme deurbellen
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
