import Link from "next/link";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section id="categorieen" className="section">
      <div className="container">
        {/* ✅ Banner */}
        <div className="banner-center">
          <div className="categorie-banner">
            <img
              src="/images/banner_categorieen_slimme_producten.png"
              alt="Categorieën slimme producten"
              className="banner-img"
            />
          </div>
        </div>

        <h2>Categorieën slimme producten</h2>
        <p className="section-intro">
          Bekijk per categorie welke slimme producten het beste bij jouw woning passen.
        </p>

        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.slug} className="card">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>

              <Link href={`/categorie/${cat.slug}`} className="card-link">
                Bekijk producten →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
