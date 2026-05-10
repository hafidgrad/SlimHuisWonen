import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";
import AmazonSearchCta from "@/components/AmazonSearchCta";
import { getBolUrl, getCoolblueUrl } from "@/lib/bol-api";
import PrijsDisclaimer from "@/components/PrijsDisclaimer";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";

const CATEGORY_FAQS = {
  "slimme-verlichting": {
    toc: [
      { id: "beste-keuzes", label: "Beste keuzes" },
      { id: "meer-producten", label: "Meer producten" },
      { id: "faq", label: "Veelgestelde vragen" },
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen wifi- en Zigbee-lampen?",
        answer:
          "Wifi-lampen verbinden direct met je router zonder extra hub — eenvoudig te installeren maar belast je wifi-netwerk. Zigbee-lampen werken via een eigen mesh-netwerk en hebben een hub nodig (zoals Homey Pro of de Philips Hue Bridge). Zigbee is stabieler bij grotere installaties en zuiniger in stroomverbruik.",
      },
      {
        question: "Heb ik een hub nodig voor slimme verlichting?",
        answer:
          "Niet per se. Wifi-lampen van Tapo, WiZ of Govee werken zonder hub via de bijbehorende app. Wil je Zigbee-lampen (Philips Hue, Innr, IKEA) of wil je lampen van meerdere merken combineren, dan is een hub zoals Homey Pro of de Philips Hue Bridge nodig.",
      },
      {
        question: "Welke slimme lamp is het beste voor beginners?",
        answer:
          "Voor beginners zijn wifi-lampen het eenvoudigst: geen hub, gewoon de app downloaden en de lamp erin draaien. De Tapo L530E (kleur, €15) of Tapo L510E (wit, €12) zijn populaire instapkeuzes. Wil je later uitbreiden met een hub, kijk dan naar Innr of Philips Hue als Zigbee-alternatief.",
      },
    ],
  },
};

export const dynamic = "force-dynamic";

/* ---------- Helpers ---------- */
const CATEGORY_ALIASES = {
  verlichting: "slimme-verlichting",
  beveiliging: "sensoren",
  cameras: "slimme-cameras",
  energie: "energie-monitors",
  hubs: "smart-home-hubs",
  sloten: "slimme-sloten",
  wifi: "mesh-wifi",
};

function normalizeCategorySlug(slug) {
  return CATEGORY_ALIASES[slug] ?? slug;
}

function getCategory(slug) {
  const normalized = normalizeCategorySlug(slug);
  return categories.find((c) => c.slug === normalized);
}

/* ---------- Amazon zoekterm mapping ---------- */
const AMAZON_SEARCH_TERMS = {
  "slimme-verlichting": "slimme verlichting",
  "slimme-stekkers": "slimme stekker wifi",
  "slimme-deurbellen": "slimme deurbel met camera",
  "slimme-cameras": "slimme beveiligingscamera wifi",
  "sensoren": "bewegingssensor zigbee",
  "slimme-thermostaten": "slimme thermostaat",
  "slimme-sloten": "slim deurslot",
  "smart-home-hubs": "smart home hub homey",
  "mesh-wifi": "mesh wifi systeem",
  "energie-monitors": "slimme energiemeter p1",
};

function getAmazonSearchTerm(slug) {
  return AMAZON_SEARCH_TERMS[slug] ?? slug.replace("-", " ");
}

/* ---------- Metadata ---------- */
export function generateMetadata({ params }) {
  const category = getCategory(params.slug);

  if (!category) {
    return {
      title: "Categorie niet gevonden",
      description: "Deze categorie bestaat niet.",
    };
  }

  const url = `https://www.slimhuiswonen.nl/categorie/${category.slug}`;

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      title: category.name,
      description: category.description,
      url,
      type: "website",
    },
  };
}

/* ---------- Page ---------- */
export default function CategoryPage({ params }) {
  const { slug } = params;

  const normalizedSlug = normalizeCategorySlug(slug);
  const category = getCategory(normalizedSlug);

  if (!category) {
    return (
      <>
        <Header />
        <main className="section">
          <div className="container">
            <h1>Categorie niet gevonden</h1>
            <p>Deze categorie bestaat niet.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const products = getProductsByCategory(normalizedSlug).sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
  );

  const topThree = products.slice(0, 3);
  const rest = products.slice(3);

  const amazonSearchTerm = getAmazonSearchTerm(normalizedSlug);
  const categoryExtra = CATEGORY_FAQS[normalizedSlug] ?? null;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: `https://www.slimhuiswonen.nl/categorie/${normalizedSlug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Header />

      <main className="section">
        <div className="container">
          {/* Banner */}
          {category.image && (
            <div className="banner-center">
              <div
                className="categorie-banner category-hero-banner"
                style={{ "--category-bg": `url(${category.image})` }}
              >
                <div className="category-darken" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="banner-img"
                />
              </div>
            </div>
          )}

          <h1>{category.name}</h1>
          <p className="section-intro">{category.description}</p>

          {categoryExtra?.toc && (
            <TableOfContents items={categoryExtra.toc} />
          )}

          {products.length === 0 && (
            <p>Er zijn nog geen producten in deze categorie.</p>
          )}

          {topThree.length > 0 && (
            <section className="top-products">
              <h2>Beste keuzes</h2>

              <div className="product-grid">
                {topThree.map((p, index) => {
                  const bolUrl = getBolUrl(p);
                  const coolblueUrl = getCoolblueUrl(p);
                  return (
                    <article key={p.slug} className="product-card highlight" style={{ position: "relative" }}>
                      {/* Stretched link — hele kaart klikbaar */}
                      <Link
                        href={`/producten/${p.slug}`}
                        aria-label={p.name}
                        style={{ position: "absolute", inset: 0, zIndex: 0 }}
                        tabIndex={-1}
                      />

                      {index === 0 && (
                        <div className="best-choice">Beste keuze</div>
                      )}

                      {p.image && (
                        <div style={{ position: "relative", width: "100%", height: "160px", background: "#fff", borderRadius: "8px", overflow: "hidden", marginBottom: "0.75rem" }}>
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            style={{ objectFit: "contain", padding: "8px" }}
                            sizes="(max-width: 640px) 100vw, 360px"
                          />
                        </div>
                      )}

                      <div className="product-tag">{p.brand}</div>
                      <h3>{p.name}</h3>
                      <p className="product-desc">{p.description}</p>

                      {p.features?.length > 0 && (
                        <ul className="product-bullets">
                          {p.features.slice(0, 3).map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      )}

                      {p.priceHint && (
                        <p style={{ fontSize: "0.9rem", opacity: 0.7, margin: "0.25rem 0 0.5rem" }}>
                          {p.priceHint}
                        </p>
                      )}

                      <div className="product-actions" style={{ position: "relative", zIndex: 1 }}>
                        {bolUrl && (
                          <a
                            href={bolUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-bol product-btn"
                          >
                            Bekijk op bol.com
                          </a>
                        )}

                        {coolblueUrl && (
                          <a
                            href={coolblueUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-coolblue product-btn"
                          >
                            Bekijk op Coolblue
                          </a>
                        )}

                        {p.affiliateUrl && (
                          <a
                            href={p.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-amazon product-btn"
                          >
                            Bekijk op Amazon
                          </a>
                        )}

                        <Link
                          href={`/producten/${p.slug}`}
                          className="product-details-link"
                          style={{ position: "relative", zIndex: 1 }}
                        >
                          Meer info
                        </Link>
                      </div>
                      <div style={{ position: "relative", zIndex: 1 }}>
                        {[bolUrl, coolblueUrl, p.affiliateUrl].filter(Boolean).length >= 2 && <PrijsDisclaimer />}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {rest.length > 0 && (
            <>
              <h2>Meer producten</h2>

              <div className="product-grid">
                {rest.map((p) => {
                  const bolUrl = getBolUrl(p);
                  const coolblueUrl = getCoolblueUrl(p);
                  return (
                    <article key={p.slug} className="product-card" style={{ position: "relative" }}>
                      {/* Stretched link — hele kaart klikbaar */}
                      <Link
                        href={`/producten/${p.slug}`}
                        aria-label={p.name}
                        style={{ position: "absolute", inset: 0, zIndex: 0 }}
                        tabIndex={-1}
                      />

                      {p.image && (
                        <div style={{ position: "relative", width: "100%", height: "160px", background: "#fff", borderRadius: "8px", overflow: "hidden", marginBottom: "0.75rem" }}>
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            style={{ objectFit: "contain", padding: "8px" }}
                            sizes="(max-width: 640px) 100vw, 360px"
                          />
                        </div>
                      )}

                      <div className="product-tag">{p.brand}</div>
                      <h3>{p.name}</h3>
                      <p className="product-desc">{p.description}</p>

                      {p.features?.length > 0 && (
                        <ul className="product-bullets">
                          {p.features.slice(0, 3).map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      )}

                      {p.priceHint && (
                        <p style={{ fontSize: "0.9rem", opacity: 0.7, margin: "0.25rem 0 0.5rem" }}>
                          {p.priceHint}
                        </p>
                      )}

                      <div className="product-actions" style={{ position: "relative", zIndex: 1 }}>
                        {bolUrl && (
                          <a
                            href={bolUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-bol product-btn"
                          >
                            Bekijk op bol.com
                          </a>
                        )}

                        {coolblueUrl && (
                          <a
                            href={coolblueUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-coolblue product-btn"
                          >
                            Bekijk op Coolblue
                          </a>
                        )}

                        {p.affiliateUrl && (
                          <a
                            href={p.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="btn btn-amazon product-btn"
                          >
                            Bekijk op Amazon
                          </a>
                        )}

                        <Link
                          href={`/producten/${p.slug}`}
                          className="product-details-link"
                          style={{ position: "relative", zIndex: 1 }}
                        >
                          Meer info
                        </Link>
                      </div>
                      <div style={{ position: "relative", zIndex: 1 }}>
                        {[bolUrl, coolblueUrl, p.affiliateUrl].filter(Boolean).length >= 2 && <PrijsDisclaimer />}
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}

          {/* ✅ Subtiele Amazon zoek CTA */}
          {products.length > 0 && (
            <AmazonSearchCta searchTerm={amazonSearchTerm} />
          )}

          {categoryExtra?.faqs && (
            <>
              <hr style={{ marginTop: "2rem" }} />
              <FaqSection faqs={categoryExtra.faqs} />
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}