import Link from "next/link";
import Image from "next/image";
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
          Bekijk per categorie welke slimme producten het beste bij jouw woning
          passen.
        </p>

        <div className="category-grid">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categorie/${cat.slug}`} className="cat-card">
              {/* ✅ Afbeelding (Tip/Uitleg stijl) */}
              <div className="cat-card__imageWrap">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="cat-card__image"
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  priority={false}
                />
                <div className="cat-card__overlay" />
                <div className="cat-card__badge">Categorie</div>
              </div>

              {/* ✅ Content */}
              <div className="cat-card__content">
                <h3 className="cat-card__title">{cat.name}</h3>
                <p className="cat-card__desc">{cat.description}</p>

                <span className="cat-card__cta">
                  Bekijk producten <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
