import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllProducts } from "@/data/products";

export const metadata = {
  title: "Categorieën slimme producten",
  description:
    "Ontdek slimme producten per categorie zoals verlichting, sensoren, hubs, speakers en meer.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/categorieen",
  },
};

export default function CategorieenPage() {
  const products = getAllProducts();

  // unieke categorieën bouwen
  const categories = Array.from(
    new Set(products.map((p) => p.category))
  );

  // labels + vaste volgorde
  const categoryConfig = {
    "slimme-verlichting": {
      label: "Slimme verlichting",
      order: 1,
    },
    sensoren: {
      label: "Sensoren",
      order: 2,
    },
    "slimme-deurbellen": {
      label: "Slimme deurbellen",
      order: 3,
    },
    "slimme-thermostaten": {
      label: "Slimme thermostaten",
      order: 4,
    },
    "slimme-stekkers": {
      label: "Slimme stekkers",
      order: 5,
    },
    "slimme-hubs": {
      label: "Hubs & gateways",
      order: 6,
    },
    "slimme-speakers": {
      label: "Slimme speakers",
      order: 7,
    },
  };

  // sorteer categorieën netjes
  const sortedCategories = categories.sort(
    (a, b) =>
      (categoryConfig[a]?.order ?? 99) -
      (categoryConfig[b]?.order ?? 99)
  );

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1>Categorieën</h1>

          <p className="section-intro">
            Bekijk slimme producten per categorie en ontdek wat het beste past
            bij jouw slimme huis.
          </p>

          <div className="category-grid">
            {sortedCategories.map((cat) => (
              <Link
                key={cat}
                href={`/categorieen/${cat}`}
                className="category-card"
              >
                <h3>{categoryConfig[cat]?.label ?? cat}</h3>
                <p>Bekijk alle producten in deze categorie</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
