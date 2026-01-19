import Image from "next/image";

export default function TipBanner({ src, alt }) {
  return (
    <div className="tipBanner">
      {/* Blurred background */}
      <div className="tipBannerBlur">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1100px"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Sharp centered image */}
      <div className="tipBannerInner">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
