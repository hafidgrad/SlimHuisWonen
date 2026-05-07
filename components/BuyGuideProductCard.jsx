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
}) {
  return (
    <article className="buyGuideCard">
      {/* Image */}
      <div className="buyGuideCard__imgWrap">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
          onError={(e) => { e.target.src = "/images/product-placeholder.png"; }}
        />
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

        {/* Price — prominent, above buttons */}
        {priceHint && (
          <p className="buyGuideCard__price">{priceHint}</p>
        )}

        {/* Buttons — above description */}
        <div className="buyGuideCard__buttons">
          {actionUrl && (
            <a
              href={actionUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="buyGuideCard__btn buyGuideCard__btn--action"
            >
              Bekijk prijs bij Action →
            </a>
          )}
          {bolUrl && (
            <a
              href={bolUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="buyGuideCard__btn buyGuideCard__btn--bol"
            >
              Bekijk prijs bij bol.com →
            </a>
          )}
          {coolblueUrl && (
            <a
              href={coolblueUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="buyGuideCard__btn buyGuideCard__btn--coolblue"
            >
              Bekijk prijs bij Coolblue →
            </a>
          )}
          {amazonUrl && (
            <a
              href={amazonUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="buyGuideCard__btn buyGuideCard__btn--amazon"
            >
              Bekijk prijs bij Amazon →
            </a>
          )}
          {!actionUrl && href && (
            <Link href={href} className="buyGuideCard__btn buyGuideCard__btn--info">
              Meer info →
            </Link>
          )}
        </div>

        <p className="buyGuideCard__desc">{description}</p>

        <p className="buyGuideCard__priceNote">Laatste prijs check: april 2026</p>
      </div>
    </article>
  );
}
