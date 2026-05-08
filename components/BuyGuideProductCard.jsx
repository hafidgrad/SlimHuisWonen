"use client";
import Link from "next/link";
import Image from "next/image";

export default function BuyGuideProductCard({
  title,
  description,
  image,
  href,
  badges = [],
  amazonUrl,
  bolUrl,
  coolblueUrl,
  actionUrl,
  priceHint,
  pros = [],
  cons = [],
  isTopPick = false,
}) {
  return (
    <article className="buyGuideCard">
      {/* Image */}
      <div className="buyGuideCard__imgWrap" style={{ position: "relative" }}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
          onError={(e) => { e.target.src = "/images/product-placeholder.png"; }}
        />
        {isTopPick && (
          <span
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              background: "#15803d",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 500,
              padding: "3px 8px",
              borderRadius: "5px",
              zIndex: 1,
              whiteSpace: "nowrap",
            }}
          >
            ⭐ Redactie keuze 2026
          </span>
        )}
      </div>

      {/* Content */}
      <div className="buyGuideCard__content">
        {/* Badges */}
        {badges.length > 0 && (
          <div className="buyGuideCard__badges">
            {badges.map((b) => (
              <span key={b} className="buyGuideCard__badge">{b}</span>
            ))}
          </div>
        )}

        <h3 className="buyGuideCard__title">{title}</h3>

        {/* Price */}
        {priceHint && (
          <p className="buyGuideCard__price">{priceHint}</p>
        )}

        {/* Primary buy button (bol.com / action) */}
        <div style={{ marginBottom: "0.5rem" }}>
          {actionUrl ? (
            <a
              href={actionUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="buyGuideCard__btn buyGuideCard__btn--action"
            >
              Bekijk prijs bij Action →
            </a>
          ) : bolUrl ? (
            <a
              href={bolUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="buyGuideCard__btn buyGuideCard__btn--bol"
            >
              Bekijk prijs bij bol.com →
            </a>
          ) : null}

          {/* Trust signal under primary button */}
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0.3rem 0 0", lineHeight: 1.4 }}>
            ✓ Onafhankelijk · ✓ Niet gesponsord · ✓ Bijgewerkt 2026
          </p>
        </div>

        {/* Secondary links */}
        {!actionUrl && (coolblueUrl || amazonUrl) && (
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
            {coolblueUrl && (
              <a
                href={coolblueUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                style={{ fontSize: "0.8rem", color: "#6b7280", textDecoration: "underline" }}
              >
                Ook bij Coolblue
              </a>
            )}
            {amazonUrl && (
              <a
                href={amazonUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                style={{ fontSize: "0.8rem", color: "#6b7280", textDecoration: "underline" }}
              >
                Ook bij Amazon
              </a>
            )}
          </div>
        )}

        {/* Meer info link if no buy buttons */}
        {!actionUrl && !bolUrl && href && (
          <Link href={href} className="buyGuideCard__btn buyGuideCard__btn--info">
            Meer info →
          </Link>
        )}

        <p className="buyGuideCard__desc">{description}</p>

        {/* Pros / Cons */}
        {(pros.length > 0 || cons.length > 0) && (
          <div style={{ marginTop: "0.5rem", fontSize: "13px", lineHeight: 1.7 }}>
            {pros.map((p) => (
              <div key={p} style={{ color: "#16a34a" }}>✓ {p}</div>
            ))}
            {cons.map((c) => (
              <div key={c} style={{ color: "#dc2626" }}>✗ {c}</div>
            ))}
          </div>
        )}

        <p className="buyGuideCard__priceNote">Laatste prijs check: april 2026</p>
      </div>
    </article>
  );
}
