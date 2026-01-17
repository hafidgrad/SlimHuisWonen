import Link from "next/link";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section id="categorie" className="section section-alt">
      <div className="container">
        {/* ✅ Banner titel: breder + overlay */}
        <div className="categorie-banner">
          <img
            src="/images/categorieen-slimme-producten.png"
            alt="Categorieën slimme producten"
          />
        </div>

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
