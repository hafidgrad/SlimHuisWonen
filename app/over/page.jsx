import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Over SlimHuisWonen | Onze missie",
  description:
    "SlimHuisWonen helpt je bij het kiezen en gebruiken van slimme producten voor een comfortabel en veilig huis. Lees meer over wie we zijn.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/over",
  },
};

export default function OverPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>Over SlimHuisWonen</h1>
          <p>
            SlimHuisWonen helpt je bij het kiezen en gebruiken van slimme
            producten voor een comfortabel en veilig huis.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
