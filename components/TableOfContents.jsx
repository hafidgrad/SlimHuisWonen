export default function TableOfContents({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Inhoudsopgave"
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "1rem 1.25rem",
        maxWidth: "380px",
        margin: "1.25rem 0",
      }}
    >
      <p
        style={{
          fontSize: "0.78rem",
          color: "#6b7280",
          margin: "0 0 0.5rem",
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        In dit artikel:
      </p>
      <ol style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.8 }}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              style={{ color: "#1d4ed8", textDecoration: "none", fontSize: "0.9rem" }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
