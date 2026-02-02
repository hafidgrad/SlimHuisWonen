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
      "Een slimme deurbel laat je zien wie er voor de deur staat — waar je ook bent. In deze koopgids vind je onze beste keuzes per situatie, gebaseerd op functies, privacy en smart home integratie.",
    picks: [
      {
        title: "Beste bedrade slimme deurbel",
        description:
          "Hoge beeldkwaliteit, stabiele verbinding en geen gedoe met opladen. Ideaal als je bestaande deurbelbedrading hebt.",
        image: "/images/products/aqara-doorbell-g410-grey.png",
        href: "/producten/aqara-doorbell-g410-grey",
        badges: ["Bedraad", "Matter", "HomeKit"],
      },
      {
        title: "Beste slimme deurbel op accu",
        description:
          "Eenvoudig te installeren zonder bekabeling, met lange batterijduur en scherpe 2K-beelden.",
        image: "/images/products/tapo-d205.png",
        href: "/producten/tapo-d205",
        badges: ["Accu", "2K"],
      },
      {
        title: "Beste slimme deurbel zonder abonnement",
        description:
          "Geen maandelijkse kosten en veel functies, inclusief kleurennachtzicht en brede kijkhoek.",
        image: "/images/products/tapo-d235.png",
        href: "/producten/tapo-d235",
        badges: ["Geen abonnement", "Accu/Bedraad"],
      },
      {
        title: "Beste slimme deurbel voor smart home",
        description:
          "Uitstekende integratie met Apple Home, Alexa, Google Home en Home Assistant dankzij ingebouwde Matter hub.",
        image: "/images/products/aqara-doorbell-g410-black.png",
        href: "/producten/aqara-doorbell-g410-black",
        badges: ["Smart home", "Matter"],
      },
      {
        title: "Beste premium slimme deurbel",
        description:
          "Hoogwaardige videokwaliteit, hoofd-tot-teen zicht en betrouwbare detectie zonder abonnement.",
        image: "/images/products/reolink-video-doorbell-wifi.png",
        href: "/producten/reolink-video-doorbell-wifi",
        badges: ["Premium", "Bedraad"],
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
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
            Geselecteerd op betrouwbaarheid, privacy en smart home-mogelijkheden.
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
