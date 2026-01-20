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
        <img src={src} alt={alt} className="tipBannerImg" />
      </div>
    </div>
  );
}
