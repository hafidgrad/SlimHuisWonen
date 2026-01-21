import Link from "next/link";

export default function TipCard({ tip }) {
  return (
    <Link href={`/tips/${tip.slug}`} className="tip-card">
      <h3 className="tip-card__title">{tip.title}</h3>

      {tip.desc && <p className="tip-card__desc">{tip.desc}</p>}

      <span className="tip-card__cta">
        Lees artikel <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
