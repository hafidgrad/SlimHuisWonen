import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: { absolute: "Philips Hue vs IKEA vs Innr | Vergelijking 2026" },
  description:
    "Welke slimme verlichting past bij jou? We vergelijken Philips Hue, IKEA Zigbee en Innr op prijs, kwaliteit en Homey-compatibiliteit. Inclusief keuzehulp.",
  alternates: {
    canonical: "https://www.slimhuiswonen.nl/vergelijking/philips-hue-vs-ikea-vs-innr",
  },
  openGraph: {
    title: "Philips Hue vs IKEA vs Innr 2026 | Eerlijke vergelijking",
    description:
      "Welke slimme verlichting past bij jou? We vergelijken Philips Hue, IKEA Zigbee en Innr op prijs, kwaliteit en Homey-compatibiliteit. Inclusief keuzehulp.",
    url: "https://www.slimhuiswonen.nl/vergelijking/philips-hue-vs-ikea-vs-innr",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kan ik IKEA-lampen koppelen aan de Philips Hue Bridge?",
      acceptedAnswer: { "@type": "Answer", text: "Ja, dat is mogelijk via Zigbee. Let op: IKEA KAJPLATS lampen zijn Matter-only en werken niet via Zigbee. Oudere TRÅDFRI lampen werken wel met de Hue Bridge, maar kunnen af en toe instabiel zijn. Voor de meest stabiele combinatie gebruik je een onafhankelijke Zigbee-hub zoals Homey Pro." },
    },
    {
      "@type": "Question",
      name: "Welk systeem werkt het beste met Homey Pro?",
      acceptedAnswer: { "@type": "Answer", text: "Alle drie de systemen werken goed met Homey Pro. Innr en Philips Hue hebben de meest stabiele Homey-integraties. IKEA werkt ook goed, maar bij meer dan 15-20 lampen kun je instabiliteit krijgen als je geen IKEA-router lampen hebt die het Zigbee-signaal versterken." },
    },
    {
      "@type": "Question",
      name: "Is Innr te koop bij Nederlandse winkels?",
      acceptedAnswer: { "@type": "Answer", text: "Innr is voornamelijk online verkrijgbaar via bol.com, Amazon.nl en de website van Innr zelf. Je vindt ze ook bij Coolblue. Ze zijn niet verkrijgbaar in fysieke winkels zoals Gamma of Praxis, in tegenstelling tot Philips Hue en IKEA." },
    },
    {
      "@type": "Question",
      name: "Wat is het goedkoopste Zigbee-systeem om mee te beginnen?",
      acceptedAnswer: { "@type": "Answer", text: "IKEA is het goedkoopste Zigbee-systeem. Een starterkit met 2 lampen en de DIRIGERA hub kost circa €60-70. Daarna zijn losse lampen verkrijgbaar vanaf €8. Als je al een Zigbee-hub hebt, zijn losse IKEA-lampen zelfs nog goedkoper dan een compleet pakket." },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen Zigbee en wifi slimme lampen?",
      acceptedAnswer: { "@type": "Answer", text: "Zigbee-lampen communiceren via een eigen draadloos netwerk en hebben een hub nodig. Voordelen: stabiel, zuinig, werkt ook als wifi uitvalt. Wifi-lampen verbinden direct op je thuisnetwerk zonder hub. Voordeel: eenvoudig te installeren. Nadeel: belast je wifi-netwerk en werkt niet bij router-problemen." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.slimhuiswonen.nl" },
    { "@type": "ListItem", position: 2, name: "Vergelijking", item: "https://www.slimhuiswonen.nl/vergelijking" },
    { "@type": "ListItem", position: 3, name: "Philips Hue vs IKEA vs Innr", item: "https://www.slimhuiswonen.nl/vergelijking/philips-hue-vs-ikea-vs-innr" },
  ],
};

const faqs = [
  {
    question: "Kan ik IKEA-lampen koppelen aan de Philips Hue Bridge?",
    answer: "Ja, dat is mogelijk via Zigbee. Let op: IKEA KAJPLATS lampen zijn Matter-only en werken niet via Zigbee. Oudere TRÅDFRI lampen werken wel met de Hue Bridge, maar kunnen af en toe instabiel zijn. Voor de meest stabiele combinatie gebruik je een onafhankelijke Zigbee-hub zoals Homey Pro.",
  },
  {
    question: "Welk systeem werkt het beste met Homey Pro?",
    answer: "Alle drie de systemen werken goed met Homey Pro. Innr en Philips Hue hebben de meest stabiele Homey-integraties. IKEA werkt ook goed, maar bij meer dan 15-20 lampen kun je instabiliteit krijgen als je geen IKEA-router lampen hebt die het Zigbee-signaal versterken.",
  },
  {
    question: "Is Innr te koop bij Nederlandse winkels?",
    answer: "Innr is voornamelijk online verkrijgbaar via bol.com, Amazon.nl en de website van Innr zelf. Je vindt ze ook bij Coolblue. Ze zijn niet verkrijgbaar in fysieke winkels zoals Gamma of Praxis, in tegenstelling tot Philips Hue en IKEA.",
  },
  {
    question: "Wat is het goedkoopste Zigbee-systeem om mee te beginnen?",
    answer: "IKEA is het goedkoopste Zigbee-systeem. Een starterkit met 2 lampen en de DIRIGERA hub kost circa €60-70. Daarna zijn losse lampen verkrijgbaar vanaf €8. Als je al een Zigbee-hub hebt, zijn losse IKEA-lampen zelfs nog goedkoper dan een compleet pakket.",
  },
  {
    question: "Wat is het verschil tussen Zigbee en wifi slimme lampen?",
    answer: "Zigbee-lampen communiceren via een eigen draadloos netwerk en hebben een hub nodig. Voordelen: stabiel, zuinig, werkt ook als wifi uitvalt. Wifi-lampen verbinden direct op je thuisnetwerk zonder hub. Voordeel: eenvoudig te installeren. Nadeel: belast je wifi-netwerk en werkt niet bij router-problemen.",
  },
];

const tocItems = [
  { id: "uitgelegd", label: "De drie systemen kort uitgelegd" },
  { id: "vergelijking", label: "Vergelijkingstabel" },
  { id: "wanneer-hue", label: "Wanneer kies je voor Philips Hue?" },
  { id: "wanneer-ikea", label: "Wanneer kies je voor IKEA Zigbee?" },
  { id: "wanneer-innr", label: "Wanneer kies je voor Innr?" },
  { id: "aanbeveling", label: "Mijn aanbeveling" },
  { id: "faq", label: "Veelgestelde vragen" },
];

export default function VergelijkingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      <main className="section">
        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/aanraders">Koopgidsen</Link> / Vergelijking
          </p>

          <h1>Philips Hue vs IKEA vs Innr: welke slimme verlichting past bij jou?</h1>

          <p className="section-intro">
            Je wil slimme verlichting, maar welk systeem kies je? Philips Hue is de duurste,
            IKEA de goedkoopste, en Innr zit er tussenin. Hieronder leg ik uit wat het verschil
            is — als iemand die zelf IKEA Zigbee-lampen gebruikt op een Homey Pro uit 2019.
          </p>

          <TableOfContents items={tocItems} />

          <h2 id="uitgelegd">De drie systemen kort uitgelegd</h2>

          <p>
            <strong>Philips Hue</strong> is de marktleider in slimme verlichting. Ze gebruiken
            Zigbee als protocol, hebben een eigen hub (de Hue Bridge) en bieden de meest
            uitgebreide app van de drie. Duur, maar stabiel en breed compatibel.
          </p>

          <p>
            <strong>IKEA Zigbee</strong> (TRÅDFRI- en DIRIGERA-lijn) is het budgetalternatief.
            Lampen koop je al vanaf €8 per stuk. Ze werken via Zigbee en zijn prima te koppelen
            aan een Homey Pro of Home Assistant. Het nadeel: bij grote installaties (20+ lampen)
            kan de stabiliteit tegenvallen als je geen IKEA-router lampen hebt.
          </p>
          <p style={{ fontSize: "0.88rem", color: "#6b7280", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "0.65rem 1rem", margin: "0.5rem 0" }}>
            <strong>Let op:</strong> IKEA is verkrijgbaar in IKEA-winkels en online op ikea.com,
            maar niet via de gebruikelijke affiliate shops zoals bol.com of Coolblue.
            Als je een Zigbee-alternatief zoekt dat wél online via bol.com te bestellen is,
            kijk dan naar <strong>Innr</strong>.
          </p>

          <p>
            <strong>Innr</strong> is het verborgen pareltje in dit segment. Zigbee, goedkoper dan
            Hue, betere kwaliteit dan IKEA, en compatibel met vrijwel elke Zigbee-hub inclusief
            de Philips Hue Bridge zelf. Nadeel: minder merkbekendheid en geen eigen hub.
          </p>

          <h2 id="vergelijking">Vergelijkingstabel</h2>

          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  {["Eigenschap", "Philips Hue", "IKEA Zigbee", "Innr"].map((h) => (
                    <th key={h} style={{ padding: "0.55rem 0.75rem", textAlign: "left", borderBottom: "2px solid #e2e8f0", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Prijs per lamp (E27 wit)", "€20–25", "€8–12", "€15–18"],
                  ["Protocol", "Zigbee + Matter", "Zigbee + Matter", "Zigbee"],
                  ["Hub nodig", "Ja (Bridge €60)", "Ja (DIRIGERA €40) of nee", "Nee (werkt met bestaande hub)"],
                  ["Werkt met Homey Pro", "✓ Uitstekend", "✓ Goed", "✓ Uitstekend"],
                  ["Werkt met Home Assistant", "✓ Uitstekend", "✓ Goed", "✓ Uitstekend"],
                  ["App kwaliteit", "Beste in de markt", "Voldoende", "Geen eigen app (via hub)"],
                  ["Lichtkleur kwaliteit", "Uitstekend", "Goed", "Uitstekend"],
                  ["Betrouwbaarheid", "Hoogste", "Goed", "Hoog"],
                  ["Verkrijgbaarheid NL", "Overal", "Elke IKEA + online", "Online"],
                ].map(([prop, hue, ikea, innr], i) => (
                  <tr key={i} style={{ background: i % 2 === 1 ? "#f8fafc" : "white" }}>
                    <td style={{ padding: "0.45rem 0.75rem", borderBottom: "1px solid #e2e8f0", fontWeight: 600 }}>{prop}</td>
                    <td style={{ padding: "0.45rem 0.75rem", borderBottom: "1px solid #e2e8f0" }}>{hue}</td>
                    <td style={{ padding: "0.45rem 0.75rem", borderBottom: "1px solid #e2e8f0" }}>{ikea}</td>
                    <td style={{ padding: "0.45rem 0.75rem", borderBottom: "1px solid #e2e8f0" }}>{innr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="wanneer-hue">Wanneer kies je voor Philips Hue?</h2>

          <p>Philips Hue is de beste keuze als:</p>
          <ul>
            <li>Je het beste wilt en prijs is geen bezwaar</li>
            <li>Je veel lampen hebt of wil (20+) — Hue is op grote schaal het stabielst</li>
            <li>Je de Hue app wil gebruiken voor kleurscènes en timers</li>
            <li>Je ook andere Hue-accessoires wil (schakelaars, bewegingssensoren)</li>
          </ul>
          <p>
            <strong>Minpunt:</strong> het duurste systeem van de drie. De Hue Bridge is een
            verplichte investering van €60 voordat je ook maar één lamp hebt gekocht. Daarna
            zijn losse lampen €20–25 per stuk.
          </p>

          <h2 id="wanneer-ikea">Wanneer kies je voor IKEA Zigbee?</h2>

          <p>IKEA is de beste keuze als:</p>
          <ul>
            <li>Je wil beginnen voor zo weinig mogelijk geld</li>
            <li>Je bij een IKEA in de buurt woont (gemakkelijk bijkopen)</li>
            <li>Je al een Zigbee-hub hebt (Homey Pro, Home Assistant) — dan heb je de DIRIGERA niet nodig</li>
            <li>Je 2–10 lampen wil, niet een groot netwerk</li>
          </ul>
          <p>
            <strong>Minpunt:</strong> minder stabiel bij grote installaties. Boven de 15–20 lampen
            zonder router-apparaten kun je onverwachte uitval krijgen. De DIRIGERA hub is vereist
            voor Matter-ondersteuning — zonder hub werken TRÅDFRI-lampen alleen via Zigbee.
          </p>

          <h2 id="wanneer-innr">Wanneer kies je voor Innr?</h2>

          <p>Innr is de beste keuze als:</p>
          <ul>
            <li>Je al een Zigbee-hub hebt en goedkoper dan Hue wil uitbreiden</li>
            <li>Je Philips Hue-kwaliteit wil voor minder geld</li>
            <li>Je lampen zoekt die direct werken met je bestaande Hue Bridge</li>
          </ul>
          <p>
            <strong>Minpunt:</strong> Innr heeft geen eigen hub, geen eigen app en minder naamsbekendheid.
            Je bent afhankelijk van een derde hub (Homey, HA of Hue Bridge) om Innr-lampen te beheren.
            Dat is voor de meeste Homey-gebruikers geen probleem, maar voor beginners zonder hub kan dit
            verwarrend zijn.
          </p>

          <h2 id="aanbeveling">Mijn aanbeveling</h2>

          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderLeft: "3px solid #6366f1", borderRadius: "0 8px 8px 0", padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Als je al een Zigbee-hub hebt zoals de Homey Pro, dan is <strong>Innr mijn eerste keuze
              voor uitbreiding</strong>. Je betaalt minder dan Hue, maar krijgt vergelijkbare kwaliteit.
              Heb je nog geen hub? Koop dan het <strong>IKEA DIRIGERA starterpakket</strong> — goedkoper
              dan de Hue Bridge en meer toekomstbestendig dankzij Matter. Wil je echt het allerbeste en
              heb je budget? Dan is <strong>Philips Hue</strong> nog steeds de standaard.
            </p>
          </div>

          <p>
            <Link href="/aanraders/beste-slimme-verlichting">→ Bekijk de volledige verlichtingskoopgids</Link>
          </p>
          <p>
            <Link href="/how-to/ikea-zigbee-koppelen-homey-pro">→ IKEA Zigbee koppelen aan Homey Pro: stap voor stap</Link>
          </p>

          <hr />

          <FaqSection faqs={faqs} />
        </div>
      </main>

      <Footer />
    </>
  );
}
