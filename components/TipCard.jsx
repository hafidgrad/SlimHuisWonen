import Link from "next/link";
import Image from "next/image";

export default function TipCard({ tip }) {
  return (
    <Link href={`/tips/${tip.slug}`} className="tip-card tip-card--media">
      {/* ✅ Image header zoals categorie kaart */}
      {tip.image && (
        <div className="tip-card__imageWrap">
          <Image
            src={tip.image}
            alt={tip.title}
            fill
            className="tip-card__image"
            sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
          />

          {/* ✅ gradient overlay */}
          <div className="tip-card__overlay" />

          {/* ✅ badge */}
          <div className="tip-card__badge">Tip</div>

          {/* ✅ titel op afbeelding (altijd zichtbaar) */}
          <div className="tip-card__imgTitle">{tip.title}</div>
        </div>
      )}

      <div className="tip-card__content">
        <h3 className="tip-card__title">{tip.title}</h3>
        {tip.desc && <p className="tip-card__desc">{tip.desc}</p>}

        <span className="tip-card__cta">
          Lees artikel <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
