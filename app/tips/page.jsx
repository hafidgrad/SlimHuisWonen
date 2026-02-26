import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getAllTips } from "@/data/tips";

export const metadata = {
  title: "Tips & Uitleg | SlimHuisWonen",
  description:
    "Handige smart home tips en uitleg: wifi, privacy, automatiseringen en meer.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips",
  },
};

export default function TipsPage() {
  const tips = getAllTips();

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          {/* ✅ Banner (zelfde stijl als blog) */}
          <div
            className="blogBanner"
            style={{ "--blog-bg": "url(/images/banner_tips_uitleg.png)" }}
          >
            <div
              className="blogBannerBlur blogBannerBlurLeft"
              style={{ backgroundImage: "var(--blog-bg)" }}
            />
            <div
              className="blogBannerBlur blogBannerBlurRight"
              style={{ backgroundImage: "var(--blog-bg)" }}
            />

            <div className="blogBannerInner compact">
              <Image
                src="/images/banner_tips_uitleg.png"
                alt="Tips & uitleg smart home"
                fill
                priority
                className="blogBannerImg"
                sizes="100vw"
              />
            </div>
          </div>

          <h1>Tips & Uitleg</h1>

          <p className="section-intro">
            Korte, praktische tips om je smart home stabieler, veiliger en
            slimmer te maken.
          </p>

          {/* ✅ Tips grid */}
          <div className="blogGrid">
            {tips.map((tip) => (
              <Link
                key={tip.slug}
                href={`/tips/${tip.slug}`}
                className="blogCard"
              >
                <div className="blogCardImage">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />

                  {/* ✅ Titel overlay op afbeelding */}
                  <h3 className="blogCardTitleOverlay">{tip.title}</h3>
                </div>

                {/* ✅ Beschrijving onder de afbeelding */}
                <div className="blogCardBody">
                  <p className="muted">{tip.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}