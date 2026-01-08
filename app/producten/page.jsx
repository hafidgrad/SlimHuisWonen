import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export const metadata = {
  title: "Alle slimme producten voor een slim huis",
  description:
    "Overzicht van slimme producten voor verlichting, beveiliging, verwarming en energie. Geschikt voor Homey en Home Assistant.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/producten",
  },
};

export default function ProductenPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <h1>Alle slimme producten</h1>

            <p className="section-intro">
              Ontdek slimme producten voor verlichting, beveiliging, verwarming
              en energie. Klik op een product voor uitgebreide informatie,
              compatibiliteit en actuele prijzen via onze partners.
            </p>

            {/* ✅ Toon alle producten (geen limit) */}
            <Products />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
