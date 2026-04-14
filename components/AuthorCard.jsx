import Image from "next/image";
import Link from "next/link";

export default function AuthorCard() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.25rem",
        alignItems: "flex-start",
        padding: "1.25rem",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        marginTop: "2.5rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 64,
          height: 64,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          border: "2px solid rgba(255,255,255,0.1)",
        }}
      >
        <Image
          src="/profielfoto.jpeg"
          alt="Hafid — oprichter SlimHuisWonen"
          fill
          sizes="64px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div>
        <p style={{ margin: "0 0 0.2rem", fontWeight: 700, fontSize: "0.95rem" }}>
          Hafid
        </p>
        <p style={{ margin: "0 0 0.5rem", fontSize: "0.82rem", opacity: 0.6 }}>
          Oprichter SlimHuisWonen.nl
        </p>
        <p style={{ margin: "0 0 0.6rem", fontSize: "0.88rem", lineHeight: 1.5 }}>
          Ik bouw al jaren aan mijn eigen slimme huis en deel alles wat ik
          leer — koopgidsen, tips en how-to's zonder technisch gedoe.
        </p>
        <Link
          href="/over"
          style={{ fontSize: "0.85rem", color: "#818cf8", textDecoration: "none" }}
        >
          Lees meer over mij →
        </Link>
      </div>
    </div>
  );
}
