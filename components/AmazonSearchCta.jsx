import React from "react";

export default function AmazonSearchCta({ searchTerm }) {
  const affiliateTag = "slimhuiswonen-21";

  const amazonUrl = `https://www.amazon.nl/s?k=${encodeURIComponent(
    searchTerm
  )}&tag=${affiliateTag}`;

  return (
    <div className="amazonCtaBox">
      <p className="muted">
        Niet gevonden wat je zoekt?
      </p>
      <a
        href={amazonUrl}
        target="_blank"
        rel="nofollow sponsored noopener"
      >
        Bekijk alle opties op Amazon →
      </a>
    </div>
  );
}