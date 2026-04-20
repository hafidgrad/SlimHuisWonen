"use client";

import { useState } from "react";
import Image from "next/image";

const FALLBACK = "/images/aanraders-banner.png";

export default function BannerImage({ src, alt, sizes = "100vw", priority = false }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority={priority}
      className="blogBannerImg"
      sizes={sizes}
      onError={() => setImgSrc(FALLBACK)}
    />
  );
}
