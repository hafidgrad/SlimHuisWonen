import Link from "next/link";
import Image from "next/image";
import { aanraders } from "@/data/aanraders";

export default function TopKoopgidsen() {
  const topGuides = aanraders.slice(0, 4);

  return (
    <section className="section">
      <div className="container">
        <h2>🔥 Beste slimme producten van 2026</h2>

        <p className="section-intro">
          Wij hebben de beste smart home producten per categorie voor je
          geselecteerd — getest op betrouwbaarheid, uitbreidbaarheid en
          prijs-kwaliteit. Geen marketingpraat, alleen slimme keuzes.
        </p>

        {/* Vertrouwen versterken */}
        <div style={{ marginBottom: "1.5rem" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>✓ Onafhankelijk geselecteerd</li>
            <li>✓ Praktisch getest & vergeleken</li>
            <li>✓ Geschikt voor Homey & Home Assistant</li>
          </ul>
        </div>

        <div className="category-grid">
          {topGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/aanraders/${guide.slug}`}
              className="cat-card"
            >
              <div className="cat-card__imageWrap">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="cat-card__image"
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
                <div className="cat-card__overlay" />
                <div className="cat-card__badge">Aanrader</div>
              </div>

              <div className="cat-card__content">
                <h3 className="cat-card__title">{guide.title}</h3>
                <p className="cat-card__desc">{guide.description}</p>

                <span className="cat-card__cta">
                  Bekijk aanbeveling →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/aanraders"
          className="btn btn-primary"
          style={{ marginTop: "1.5rem" }}
        >
          Bekijk alle aanraders →
        </Link>
      </div>
    </section>
  );
}
