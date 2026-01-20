import Image from "next/image";

export default function TipBanner({ src, alt }) {
  return (
    <div className="tipBanner">
      {/* Blur zijkanten */}
      <div
        className="tipBannerBlur tipBannerBlurLeft"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div
        className="tipBannerBlur tipBannerBlurRight"
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Center scherpe afbeelding */}
      <div className="tipBannerInner">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          priority
          className="tipBannerImg"
        />
      </div>
    </div>
  );
}
