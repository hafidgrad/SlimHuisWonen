import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Beste slimme verlichting (2026): waar moet je op letten?",
  description:
    "Twijfel je over slimme verlichting? Lees waar je op moet letten bij Philips Hue, IKEA, Tapo en Govee en maak daarna de juiste keuze.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-slimme-verlichting",
  },
};

export default function BesteSlimmeVerlichtingBlogPage() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* Banner */}
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

          {/* Cluster navigatie */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Gerelateerd:{" "}
            <Link href="/tips/wat-is-slimme-verlichting">
              Wat is slimme verlichting?
            </Link>{" "}
            •{" "}
            <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link> •{" "}
            <Link href="/blog/beste-smart-home-hub">
              Beste smart home hub
            </Link>
          </p>

          <h1>Beste slimme verlichting: waar moet je op letten?</h1>

          <p className="section-intro">
            Slimme verlichting is vaak de eerste stap in een smart home. Maar
            welk merk past bij jou? In dit artikel leggen we uit waar je op moet
            letten bij het kiezen van slimme verlichting, zodat je daarna een
            goede keuze kunt maken.
          </p>

          <h2>1. Wi-Fi of Zigbee?</h2>
          <p>
            Slimme verlichting werkt meestal via <strong>Wi-Fi</strong> of{" "}
            <strong>Zigbee</strong>. Wi-Fi lampen zijn makkelijk om mee te
            starten, maar Zigbee is vaak stabieler als je meerdere lampen of
            sensoren gebruikt.
          </p>

          <p>
            Meer uitleg?{" "}
            <Link href="/blog/wat-is-zigbee">
              Wat is Zigbee en waarom is het zo populair?
            </Link>
          </p>

          <h2>2. Wil je uitbreiden met sensoren en schakelaars?</h2>
          <p>
            Denk vooruit. Wil je later bewegingssensoren, draadloze schakelaars
            of automatiseringen? Dan is een ecosysteem zoals Philips Hue of IKEA
            vaak een betere basis dan losse Wi-Fi lampen.
          </p>

          <h2>3. Sfeer of functioneel licht?</h2>
          <p>
            Niet iedereen zoekt hetzelfde. Sommige mensen willen vooral sfeer
            (kleur, LED-strips, effecten), anderen vooral betrouwbaar licht dat
            automatisch aan- en uitgaat.
          </p>

          <ul>
            <li><strong>Sfeer:</strong> kleur, LED-strips, effecten</li>
            <li><strong>Functioneel:</strong> stabiel wit licht, automatiseringen</li>
          </ul>

          <h2>4. Hub of geen hub?</h2>
          <p>
            Zigbee-verlichting werkt meestal via een hub of bridge. Dat klinkt
            als extra werk, maar levert vaak meer stabiliteit en betere
            automatiseringen op.
          </p>

          <p>
            Lees ook:{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              wat is een smart home hub?
            </Link>
          </p>

          <h2>Welke merken kom je tegen?</h2>
          <p>
            De meest voorkomende merken zijn:
          </p>
          <ul>
            <li><strong>Philips Hue</strong> – premium, zeer stabiel</li>
            <li><strong>IKEA</strong> – betaalbaar Zigbee alternatief</li>
            <li><strong>Tapo</strong> – goedkoop starten via Wi-Fi</li>
            <li><strong>Govee</strong> – vooral sterk in LED-strips en sfeer</li>
          </ul>

          <h2>Klaar om te kiezen?</h2>
          <p>
            We hebben al het uitzoekwerk voor je gedaan en onze beste keuzes
            overzichtelijk op een rij gezet.
          </p>

          {/* CTA naar koopgids */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.25rem",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              👉 Bekijk onze koopgids: beste slimme verlichting
            </h3>
            <p className="muted">
              Inclusief onze aanraders voor Philips Hue, IKEA, Tapo en Govee —
              per budget en gebruikssituatie.
            </p>
            <Link
              href="/aanraders/beste-slimme-verlichting"
              style={{
                display: "inline-block",
                marginTop: "0.5rem",
                padding: "0.6rem 1rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.16)",
                textDecoration: "none",
              }}
            >
              Naar de koopgids →
            </Link>
          </div>

          <hr />

          <h2>Gerelateerde artikelen</h2>
          <ul>
            <li>
              <Link href="/tips/beginnen-met-slimme-verlichting">
                Beginnen met slimme verlichting
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-smart-home-hub">
                Beste smart home hub
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
