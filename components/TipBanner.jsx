import Image from "next/image";

export default function TipBanner({ src, alt }) {
  return (
    <div className="tipBanner">
      {/* Blur links */}
      <div
        className="tipBannerBlur tipBannerBlurLeft"
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* Blur rechts */}
      <div
        className="tipBannerBlur tipBannerBlurRight"
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Sharp center */}
      <div className="tipBannerInner">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={450}
          priority
          className="tipBannerImg"
        />
      </div>
    </div>
  );
}
