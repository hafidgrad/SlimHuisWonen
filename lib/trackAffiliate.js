export function trackAffiliateClick(product) {
  if (typeof window === "undefined") return;

  // Google Analytics (als later toegevoegd)
  if (window.gtag) {
    window.gtag("event", "affiliate_click", {
      event_category: "Affiliate",
      event_label: product.title,
      value: 1,
    });
  }

  // Plausible (als later toegevoegd)
  if (window.plausible) {
    window.plausible("Affiliate Click", {
      props: { product: product.title },
    });
  }
}
