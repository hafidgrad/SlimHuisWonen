"use client";

import { trackAffiliateClick } from "@/lib/trackAffiliate";

export default function AffiliateButton({ product }) {
  if (!product?.affiliateUrl || product.affiliateUrl === "#") {
    return null;
  }

  function handleClick() {
    trackAffiliateClick({
      slug: product.slug,
      title: product.title,
      brand: product.brand,
      category: product.category,
    });
  }

  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary product-btn"
      onClick={handleClick}
    >
      Bekijk beste prijs bij Amazon
    </a>
  );
}
