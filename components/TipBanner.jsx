import Image from "next/image";

export default function TipBanner({ src, alt }) {
  return (
    <div className="tipBanner">
      <div
        className="tipBannerBlur tipBannerBlurLeft"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div
        className="tipBannerBlur tipBannerBlurRight"
        style={{ backgroundImage: `url(${src})` }}
      />

      <div className="tipBannerInner">
        
        <Image
  src={src}
  alt={alt}
  width={1200}
  height={600}
  priority
  className="tipBannerImg"
/>
      </div>
    </div>
  );
}
