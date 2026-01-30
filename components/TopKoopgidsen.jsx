import Link from "next/link";
import Image from "next/image";

const koopgidsen = [
  {
    title: "Beste slimme verlichting",
    description: "Hue, IKEA, Tapo & Govee vergeleken",
    href: "/blog/beste-slimme-verlichting",
    image: "/images/blog/beste-slimme-verlichting.png",
  },
  {
    title: "Beste slimme stekkers",
    description: "Met en zonder energiemeting",
    href: "/blog/beste-slimme-stekkers",
    image: "/images/blog/beste-slimme-stekkers.png",
  },
  {
    title: "Beste slimme camera",
    description: "Binnen, buiten & privacy",
    href: "/blog/beste-slimme-camera",
    image: "/images/blog/beste-slimme-camera.png",
  },
  {
    title: "Beste slimme deurbel",
    description: "Bedraad, accu & abonnementen",
    href: "/blog/beste-slimme-deurbel",
    image: "/images/blog/beste-slimme-deurbel.png",
  },
  {
    title: "Beste smart home hub",
    description: "Homey, Home Assistant & SmartThings",
    href: "/blog/beste-smart-home-hub",
    image: "/images/blog/beste-smart-home-hub.png",
  },
];

export default function TopKoopgidsen() {
  return (
    <section className="section">
      <div className="container">
        <h2>Onze koopgidsen</h2>

        <p className="section-intro">
          Twijfel je wat je moet kiezen? In onze koopgidsen vergelijken we de
          beste opties per categorie — helder, onafhankelijk en praktisch.
        </p>

        {/* ✅ IDENTIEK aan Categories.jsx */}
        <div className="category-grid">
          {koopgidsen.map((gids) => (
            <Link
              key={gids.href}
              href={gids.href}
              className="cat-card"
            >
              {/* Afbeelding */}
              <div className="cat-card__imageWrap">
                <Image
                  src={gids.image}
                  alt={gids.title}
                  fill
                  className="cat-card__image"
                  sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                />

                <div className="cat-card__overlay" />
                <div className="cat-card__badge">Koopgids</div>
              </div>

              {/* Content */}
              <div className="cat-card__content">
                <h3 className="cat-card__title">{gids.title}</h3>
                <p className="cat-card__desc">{gids.description}</p>

                <span className="cat-card__cta">
                  Bekijk koopgids <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="btn btn-primary"
          style={{ marginTop: "1.5rem" }}
        >
          Bekijk alle koopgidsen →
        </Link>
      </div>
    </section>
  );
}
