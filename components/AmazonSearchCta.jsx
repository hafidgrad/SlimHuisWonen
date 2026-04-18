import React from "react";

export default function AmazonSearchCta({ searchTerm }) {
  const affiliateTag = "slimhuiswonen-21";

  const amazonUrl = `https://www.amazon.nl/s?k=${encodeURIComponent(
    searchTerm
  )}&tag=${affiliateTag}`;

  const bolUrl = `https://www.bol.com/nl/s/?searchtext=${encodeURIComponent(searchTerm)}`;
  const coolblueUrl = `https://www.coolblue.nl/zoeken?query=${encodeURIComponent(searchTerm)}`;

  return (
    <div className="amazonCtaBox">
      <p className="muted">Niet gevonden wat je zoekt?</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "0.5rem" }}>
        <a
          href={amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="btn btn-amazon"
          style={{ fontSize: "0.9rem" }}
        >
          Bekijk op Amazon →
        </a>
        <a
          href={bolUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="btn btn-bol"
          style={{ fontSize: "0.9rem" }}
        >
          Bekijk op bol.com →
        </a>
        <a
          href={coolblueUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="btn btn-coolblue"
          style={{ fontSize: "0.9rem" }}
        >
          Bekijk op Coolblue →
        </a>
      </div>
    </div>
  );
}
