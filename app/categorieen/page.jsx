import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllProducts } from "@/data/products";

export const metadata = {
  title: "Categorieën slimme producten",
  description:
    "Ontdek slimme producten per categorie zoals verlichting, sensoren, deurbellen en thermostaten.",
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

  const categoryLabels = {
    "slimme-verlichting": "Slimme verlichting",
    sensoren: "Sensoren",
    "slimme-deurbellen": "Slimme deurbellen",
    "slimme-thermostaten": "Slimme thermostaten",
    "slimme-stekkers": "Slimme stekkers",
  };

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
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/categorieen/${cat}`}
                className="category-card"
              >
                <h3>{categoryLabels[cat] ?? cat}</h3>
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
