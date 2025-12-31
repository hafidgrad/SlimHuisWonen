"use client";

import { trackAffiliateClick } from "@/lib/trackAffiliate";

export default function AffiliateButton({ product }) {
  if (!product?.affiliateUrl || product.affiliateUrl === "#") return null;

  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary product-btn"
      onClick={() => trackAffiliateClick(product)}
    >
      Bekijk beste prijs bij Amazon
    </a>
  );
}
