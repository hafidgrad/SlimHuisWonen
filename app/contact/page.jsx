import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact",
  description:
    "Neem contact op met SlimHuisWonen voor vragen, samenwerkingen of suggesties.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1>Contact</h1>

          <p>
            Heb je een vraag, suggestie of wil je samenwerken?
            Neem gerust contact met ons op.
          </p>

          <p>
            📧 E-mail:{" "}
            <a href="mailto:info@slimhuiswonen.nl">
              info@slimhuiswonen.nl
            </a>
          </p>

          <p className="muted small">
            We reageren meestal binnen 24 uur.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
