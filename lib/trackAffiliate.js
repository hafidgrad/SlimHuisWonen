export function trackAffiliateClick(product) {
  if (typeof window === "undefined") return;

  // Google Analytics (optioneel)
  if (window.gtag) {
    window.gtag("event", "affiliate_click", {
      event_category: "Affiliate",
      event_label: product.title,
      value: 1,
    });
  }

  // Plausible (optioneel)
  if (window.plausible) {
    window.plausible("Affiliate Click", {
      props: {
        product: product.title,
      },
    });
  }
}
