export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div>
          <h1>Maak je huis slimmer, stap voor stap</h1>
          <p>
            Op SlimHuisWonen.nl vind je slimme verlichting, sensoren, speakers en andere smart home producten.
            Geen technische bla-bla, maar heldere uitleg en directe links naar webshops.
          </p>
          <div className="hero-buttons">
            <a href="#aanraders" className="btn btn-primary">
              Bekijk slimme aanraders
            </a>
            <a href="#categorie" className="btn btn-secondary">
              Ontdek categorieën
            </a>
          </div>
        </div>

        <div className="hero-highlight">
          <h2>Beginnen met smart home?</h2>
          <p>
            We laten zien welke hubs, lampen en sensoren goed samenwerken – zodat jij geen miskoop doet.
          </p>
          <ul>
            <li>✔ Eerlijke uitleg in gewoon Nederlands</li>
            <li>✔ Producten vergeleken &amp; geselecteerd</li>
            <li>✔ Affiliate links, zonder extra kosten voor jou</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
