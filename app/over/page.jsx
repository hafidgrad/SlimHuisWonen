import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
