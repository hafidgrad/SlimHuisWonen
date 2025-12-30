"use client";

export default function AffiliateButton({ href, label = "Bekijk bij Amazon" }) {
  const handleClick = () => {
    if (window.gtag) {
      window.gtag("event", "affiliate_click", {
        event_category: "Affiliate",
        event_label: href,
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer sponsored"
      className="btn btn-primary product-btn"
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
