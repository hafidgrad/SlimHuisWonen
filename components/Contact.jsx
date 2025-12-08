"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bedankt voor je bericht! Dit is een voorbeeldformulier.");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Heb je een vraag over slimme producten of een suggestie voor de site? Laat gerust een bericht achter.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Naam</label>
            <input id="name" type="text" placeholder="Je naam" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">E-mailadres</label>
            <input id="email" type="email" placeholder="jou@example.com" required />
          </div>
          <div className="form-row">
            <label htmlFor="message">Bericht</label>
            <textarea id="message" rows={5} placeholder="Je vraag of bericht..." />
          </div>
          <button className="btn btn-primary" type="submit">
            Verstuur bericht
          </button>
        </form>
      </div>
    </section>
  );
}
