import Link from "next/link";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section id="categorie" className="section section-alt">
      <div className="container">
        {/* ✅ Banner (gecentreerd) */}
        <div className="banner-center">
          <div className="categorie-banner">
            <img
              src="/images/banner_categorieen_slimme_producten.png"
              alt="Categorieën slimme producten"
            />
          </div>
        </div>

        {/* ✅ Titel + korte tekst los (niet in de afbeelding) */}
        <h2 className="section-title">Categorieën slimme producten</h2>
        <p className="section-intro">
          Bekijk per categorie welke slimme producten het beste bij jouw woning passen.
        </p>

        <div className="category-grid">
          {categories.map((cat) => (
            <article key={cat.slug} className="card">
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>

              <Link href={`/categorie/${cat.slug}`} className="card-link">
                Bekijk producten →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
