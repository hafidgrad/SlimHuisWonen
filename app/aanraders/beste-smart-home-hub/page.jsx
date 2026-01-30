import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import BuyGuideProductCard from "@/components/BuyGuideProductCard";

export const metadata = {
  title: "Beste smart home hub (2026) – onze aanraders",
  description:
    "De beste smart home hubs van dit moment. Onze aanraders voor beginners, power users en Samsung-gebruikers.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/aanraders/beste-smart-home-hub",
  },
};

export default function BesteSmartHomeHubKoopgidsPage() {
  const guide = {
    title: "Beste smart home hub (2026)",
    image: "/images/blog/beste-smart-home-hub.png",
    intro:
      "Een smart home hub is het hart van je slimme huis. In deze koopgids vind je onze beste keuzes, afhankelijk van hoeveel controle en gemak je wilt.",
    picks: [
      {
        title: "Beste smart home hub voor de meeste mensen",
        description:
          "Gebruiksvriendelijk, veel integraties (Zigbee, Z-Wave, Matter, Wi-Fi) en krachtige automatiseringen zonder technisch gedoe.",
        image: "/images/products/homey-pro-early-2023.png",
        href: "/producten/homey-pro-early-2023",
        badges: ["Beste keuze", "All-in-one"],
      },
      {
        title: "Beste smart home hub voor power users",
        description:
          "Maximale controle, volledig lokaal en eindeloos uitbreidbaar. Kost meer tijd, maar biedt de meeste vrijheid.",
        image: "/images/products/home-assistant-green.png",
        href: "/producten/home-assistant-green",
        badges: ["Power users", "Lokaal"],
      },
      {
        title: "Beste smart home hub voor Samsung-gebruikers",
        description:
          "Makkelijk in gebruik en ideaal als je al veel Samsung-apparaten gebruikt.",
        image: "/images/products/samsung-smartthings-hub.png",
        href: "/producten/samsung-smartthings-hub",
        badges: ["Samsung", "Eenvoudig"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">

          {/* ✅ CATEGORIE-BANNER (zelfde als andere koopgidsen & categorieën) */}
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
            Gekozen op gebruiksgemak, stabiliteit en toekomstbestendigheid.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {guide.picks.map((p) => (
              <BuyGuideProductCard key={p.title} {...p} />
            ))}
          </div>

          <hr />

          <p>
            Meer achtergrond nodig? Lees ook{" "}
            <Link href="/blog/beste-smart-home-hub">
              onze uitgebreide vergelijking van smart home hubs
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
