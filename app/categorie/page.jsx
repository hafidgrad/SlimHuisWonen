import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { categories } from "@/data/categories";

export const metadata = {
  title: "Categorieën slimme producten",
  description:
    "Ontdek slimme producten per categorie zoals verlichting, sensoren, hubs en speakers.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/categorie",
  },
};

export default function CategoriePage() {
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
                key={cat.slug}
                href={`/categorie/${cat.slug}`}
                className="category-card"
              >
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
