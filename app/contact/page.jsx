import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Heb je vragen of suggesties?  
            Mail ons via <strong>info@slimhuiswonen.nl</strong>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
