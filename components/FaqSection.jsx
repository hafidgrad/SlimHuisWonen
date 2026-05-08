export default function FaqSection({ faqs = [] }) {
  if (!faqs.length) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2>Veelgestelde vragen</h2>
      <div
        style={{
          display: "grid",
          gap: 0,
          marginTop: "0.75rem",
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {faqs.map((f, i) => (
          <details
            key={f.question}
            style={{
              borderBottom: i < faqs.length - 1 ? "1px solid #e2e8f0" : "none",
            }}
          >
            <summary
              style={{
                padding: "0.85rem 1rem",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.95rem",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                userSelect: "none",
              }}
            >
              {f.question}
              <span style={{ fontSize: "1rem", opacity: 0.5, marginLeft: "0.5rem" }}>▾</span>
            </summary>
            <p
              style={{
                margin: 0,
                padding: "0 1rem 0.85rem",
                fontSize: "0.9rem",
                color: "#4b5563",
                lineHeight: 1.65,
              }}
            >
              {f.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
