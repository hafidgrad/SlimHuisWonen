import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Beste slimme verlichting (2026): Hue vs IKEA vs Tapo vs Govee",
  description:
    "Welke slimme verlichting is het beste? Vergelijk Philips Hue, IKEA, Tapo en Govee op stabiliteit, prijs, sfeer, automatiseringen en uitbreiden.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-slimme-verlichting",
  },
};

export default function BesteSlimmeVerlichtingPage() {
  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is de beste slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De beste slimme verlichting voor de meeste mensen is Philips Hue: zeer stabiel, goed uitbreidbaar en sterk in automatiseringen. Wil je goedkoper starten, dan is Tapo of Govee vaak een goede keuze.",
        },
      },
      {
        "@type": "Question",
        name: "Is Philips Hue het geld waard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vooral als je betrouwbaarheid wilt en later wilt uitbreiden met sensoren, schakelaars en routines. Hue is stabieler dan veel wifi-verlichting.",
        },
      },
      {
        "@type": "Question",
        name: "Werkt slimme verlichting zonder hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, veel wifi-lampen werken zonder hub. Zigbee-systemen (zoals Hue of IKEA) werken meestal beter met een hub/bridge.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: Wi-Fi of Zigbee slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wi-Fi is makkelijk om mee te starten. Zigbee is vaak stabieler en beter schaalbaar bij meerdere lampen en sensoren.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Blog banner met blur effect */}
          <div
            className="blogBanner"
            style={{ "--blog-bg": "url(/images/blog/beste-slimme-verlichting.png)" }}
          >
            <div
              className="blogBannerBlur blogBannerBlurLeft"
              style={{ backgroundImage: "var(--blog-bg)" }}
            />
            <div
              className="blogBannerBlur blogBannerBlurRight"
              style={{ backgroundImage: "var(--blog-bg)" }}
            />

            <div className="blogBannerInner">
              <Image
                src="/images/blog/beste-slimme-verlichting.png"
                alt="Beste slimme verlichting"
                width={1400}
                height={520}
                priority
                className="blogBannerImg"
              />
            </div>
          </div>

          {/* ✅ Cluster navigatie */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Wat is slimme verlichting?
            </Link>{" "}
            •{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Beginnen met slimme verlichting
            </Link>{" "}
            •{" "}
            <Link href="/blog/beste-smart-home-hub">Beste smart home hub</Link>
          </p>

          <h1>Beste slimme verlichting (2026): Hue vs IKEA vs Tapo vs Govee</h1>

          <p className="section-intro">
            Wil je slimme verlichting kopen, maar zie je door de merken het bos niet meer?
            Je bent niet de enige. In deze koopgids vergelijken we de populairste keuzes
            voor beginners én gevorderden: <strong>Philips Hue</strong>, <strong>IKEA</strong>,
            <strong>Tapo</strong> en <strong>Govee</strong>.
          </p>

          <h2>Snelle keuzehulp</h2>
          <ul>
            <li>
              ✅ <strong>Beste totaalpakket / meest stabiel:</strong> Philips Hue
            </li>
            <li>
              ✅ <strong>Goedkoper Zigbee alternatief:</strong> IKEA (of Innr)
            </li>
            <li>
              ✅ <strong>Goedkoop starten zonder hub:</strong> Tapo (Wi-Fi)
            </li>
            <li>
              ✅ <strong>Beste LED strips / sfeer:</strong> Govee
            </li>
          </ul>

          <h2>Vergelijking in één tabel</h2>
          <div style={{ overflowX: "auto", marginTop: "1rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 760,
              }}
            >
              <thead>
                <tr>
                  <th style={thStyle}>Merk</th>
                  <th style={thStyle}>Type</th>
                  <th style={thStyle}>Pluspunten</th>
                  <th style={thStyle}>Minpunten</th>
                  <th style={thStyle}>Beste voor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}><strong>Philips Hue</strong></td>
                  <td style={tdStyle}>Zigbee + Bridge</td>
                  <td style={tdStyle}>Super stabiel, top automatiseringen, beste ecosysteem</td>
                  <td style={tdStyle}>Duurder</td>
                  <td style={tdStyle}>Kwaliteit + uitbreiden</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>IKEA</strong></td>
                  <td style={tdStyle}>Zigbee + hub</td>
                  <td style={tdStyle}>Betaalbaar, Zigbee, groeit als ecosysteem</td>
                  <td style={tdStyle}>Minder premium / minder uitgebreid dan Hue</td>
                  <td style={tdStyle}>Budget Zigbee</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Tapo</strong></td>
                  <td style={tdStyle}>Wi-Fi</td>
                  <td style={tdStyle}>Goedkoop, simpel, geen hub nodig</td>
                  <td style={tdStyle}>Afhankelijk van Wi-Fi kwaliteit</td>
                  <td style={tdStyle}>Beginners / klein systeem</td>
                </tr>

                <tr>
                  <td style={tdStyle}><strong>Govee</strong></td>
                  <td style={tdStyle}>Wi-Fi</td>
                  <td style={tdStyle}>Top sfeer, strips, effects, betaalbaar</td>
                  <td style={tdStyle}>Niet zo sterk in hub/automatiseringen</td>
                  <td style={tdStyle}>Sfeer + strips</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>1) Philips Hue – beste keuze als je stabiliteit wilt</h2>
          <p>
            Philips Hue is duurder, maar ook de meest stabiele slimme verlichting. Het werkt
            via Zigbee + bridge. Daardoor blijft het betrouwbaar, ook als je later uitbreidt
            met sensoren, schakelaars of routines.
          </p>

          <p>
            Aanrader om te starten:{" "}
            <Link href="/producten/philips-hue-white-ambiance-starterkit">
              Philips Hue White Ambiance Starterkit
            </Link>
            .
          </p>

          <h2>2) IKEA (Zigbee) – goede budget keuze als je toch Zigbee wilt</h2>
          <p>
            IKEA is interessant als je wel Zigbee wil, maar Hue te duur vindt. Het systeem is
            de laatste jaren veel beter geworden en werkt prima voor basis smart home.
          </p>

          <p>
            Tip: je kunt ook Zigbee lampen gebruiken die werken met Hue, zoals{" "}
            <Link href="/producten/innr-zigbee-e27">Innr Zigbee lampen</Link>.
          </p>

          <h2>3) Tapo – beste keuze om goedkoop te beginnen zonder hub</h2>
          <p>
            Tapo werkt via Wi-Fi en is super makkelijk. Ideaal als je één ruimte slim wilt maken.
            Let op: als je wifi slecht is of veel apparaten hebt, kan Wi-Fi verlichting instabieler worden.
          </p>

          <ul>
            <li>
              Budget aanrader:{" "}
              <Link href="/producten/tapo-l510e">Tapo L510E</Link>
            </li>
            <li>
              Kleur aanrader:{" "}
              <Link href="/producten/tapo-l530e">Tapo L530E (2-pack)</Link>
            </li>
          </ul>

          <p>
            Heb je wifi problemen?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Lees: Wi-Fi verbeteren voor smart home →
            </Link>
          </p>

          <h2>4) Govee – beste keuze voor LED strips & sfeer</h2>
          <p>
            Govee is perfect voor sfeer: LED strips achter je TV, onder je bed, langs het plafond.
            Veel effects, muzieksync en betaalbaar.
          </p>

          <p>
            Aanrader:{" "}
            <Link href="/producten/govee-rgbic-ledstrip">Govee RGBIC LED Strip</Link>
          </p>

          <h2>Beste keuze per budget</h2>
          <ul>
            <li>
              <strong>€ (goedkoop starten):</strong> Tapo
            </li>
            <li>
              <strong>€€ (stabiel + uitbreiden):</strong> Hue starterkit / Innr Zigbee
            </li>
            <li>
              <strong>€€€ (beste ecosysteem):</strong> Philips Hue (volledig)
            </li>
            <li>
              <strong>Sfeer / LED strips:</strong> Govee
            </li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Als je kwaliteit en stabiliteit wil: Hue is het beste. Wil je goedkoop starten zonder hub:
            kies Tapo. Wil je vooral LED strips en sfeer: Govee. En als je Zigbee wilt met kleiner budget:
            kijk naar IKEA of Innr.
          </p>

          <p>
            Wil je stap voor stap starten?{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Beginnen met slimme verlichting →
            </Link>
          </p>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/tips/wat-is-slimme-verlichting">Wat is slimme verlichting?</Link>
            </li>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting (stappenplan)
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">Beste smart home hub</Link>
            </li>
          </ul>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "0.75rem",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  opacity: 0.9,
};

const tdStyle = {
  verticalAlign: "top",
  padding: "0.75rem",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  opacity: 0.9,
};
