import Link from "next/link";

const categories = [
  {
    id: "slimme-verlichting",
    title: "Slimme verlichting",
    text: "Lampjes, spots en LED strips die je bedient met app, sensors of spraak.",
  },
  {
    id: "sensoren",
    title: "Sensoren",
    text: "Deur-, raam-, bewegings- en temperatuur sensoren voor automatisering en veiligheid.",
  },
  {
    id: "slimme-deurbellen",
    title: "Slimme deurbellen",
    text: "Altijd zien wie er aanbelt, zelfs als je niet thuis bent.",
  },
  {
    id: "slimme-thermostaten",
    title: "Slimme thermostaten",
    text: "Bespaar energie met een thermostaat die met je meedenkt.",
  },
  {
    id: "slimme-stekkers",
    title: "Slimme stekkers",
    text: "Maak bestaande apparaten slim met een slimme stekker.",
  },
  {
    id: "hubs-en-gateways",
    title: "Hubs & gateways",
    text: "Homey, Home Assistant, Matter, Zigbee en meer – de hersenen van je slimme huis.",
  },
];

export default function Categories() {
  return (
    <section id="categorieen" className="section section-alt">
      <div className="container">
        <h2>Categorieën slimme producten</h2>

        <div className="category-grid">
          {categories.map((cat) => (
            <article key={cat.id} className="card">
              <h3>{cat.title}</h3>
              <p>{cat.text}</p>

              {/* ✅ JUISTE LINK */}
              <Link
                href={`/categorieen/${cat.id}`}
                className="card-link"
              >
                Bekijk producten →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
