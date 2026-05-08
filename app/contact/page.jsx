import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact – Smart Home Advies",
  description:
    "Heb je vragen of suggesties over smart home? Neem contact op met SlimHuisWonen via info@slimhuiswonen.nl.",
  alternates: {
    canonical: "https://www.slimhuiswonen.nl/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact | SlimHuisWonen",
  url: "https://www.slimhuiswonen.nl/contact",
  description: "Neem contact op met SlimHuisWonen voor vragen over smart home producten en koopgidsen.",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <main className="section">
        <div className="container article">
          <h1>Contact</h1>
          <p className="section-intro">
            Heb je een vraag, tip of samenwerking in gedachten? Stuur me een bericht via het formulier of mail naar <strong>info@slimhuiswonen.nl</strong>.
          </p>

          <form
            action="https://formspree.io/f/xwpovqag"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "540px", marginTop: "1.5rem" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="name" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Naam</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Jouw naam"
                style={{ padding: "0.65rem 0.9rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)", color: "inherit", fontSize: "0.95rem" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="email" style={{ fontSize: "0.9rem", fontWeight: 600 }}>E-mailadres</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="jouw@email.nl"
                style={{ padding: "0.65rem 0.9rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)", color: "inherit", fontSize: "0.95rem" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="message" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Bericht</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Stel je vraag of beschrijf je verzoek..."
                style={{ padding: "0.65rem 0.9rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)", color: "inherit", fontSize: "0.95rem", resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "fit-content" }}
            >
              Verstuur bericht →
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
