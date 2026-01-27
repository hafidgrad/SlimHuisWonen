import Link from "next/link";
import Image from "next/image";

export default function BuyGuideProductCard({
  title,
  description,
  image,
  href,
  badges = [],
}) {
  return (
    <article
      className="buyGuideCard"
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          background: "#0b0f1a",
          aspectRatio: "1 / 1",
          position: "relative",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="120px"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          {badges.map((b) => (
            <span
              key={b}
              style={{
                fontSize: "0.8rem",
                padding: "0.25rem 0.5rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                opacity: 0.9,
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <h3 style={{ margin: 0, marginBottom: "0.35rem" }}>{title}</h3>

        <p className="muted" style={{ margin: 0, marginBottom: "0.75rem" }}>
          {description}
        </p>

        <Link
          href={href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.6rem 0.9rem",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.14)",
            textDecoration: "none",
          }}
        >
          Bekijk product →
        </Link>
      </div>
    </article>
  );
}
