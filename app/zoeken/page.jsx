import SearchBar from "@/components/SearchBar";
import { getSearchItems } from "@/data/searchItems";

export const metadata = {
  title: "Zoeken | SlimHuisWonen",
  description: "Zoek snel door blogs, tips en producten op SlimHuisWonen.",
};

export default function ZoekenPage() {
  const items = getSearchItems();

  return (
    <main className="section">
      <div className="container">
        <h1 style={{ marginBottom: "0.75rem" }}>Zoeken</h1>
        <p style={{ marginBottom: "1rem", opacity: 0.8 }}>
          Typ minimaal 2 tekens om resultaten te zien.
        </p>

        <SearchBar items={items} placeholder="Zoek blog, tips of producten…" />

        <div style={{ marginTop: "1rem", opacity: 0.7, fontSize: "0.95rem" }}>
          Tip: zoek bijvoorbeeld op <strong>Hue</strong>, <strong>Aqara</strong>, <strong>Matter</strong> of <strong>hub</strong>.
        </div>
      </div>
    </main>
  );
}
