import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Over Hafid – SlimHuisWonen.nl",
  description:
    "Hafid begon met één slimme lamp en bouwde een volledig smart home. Op SlimHuisWonen deelt hij praktische tips, koopgidsen en uitleg voor iedereen die wil beginnen.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/over",
  },
  openGraph: {
    title: "Over Hafid – SlimHuisWonen.nl",
    description:
      "Lees wie SlimHuisWonen runt en waarom Hafid deze site is gestart.",
    url: "https://slimhuiswonen.nl/over",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hafid",
  url: "https://slimhuiswonen.nl/over",
  sameAs: ["https://slimhuiswonen.nl"],
  jobTitle: "Oprichter SlimHuisWonen.nl",
  knowsAbout: [
    "Smart home",
    "Slimme verlichting",
    "Zigbee",
    "Matter",
    "Home Assistant",
    "Homey",
    "Domotica",
  ],
  worksFor: {
    "@type": "Organization",
    name: "SlimHuisWonen.nl",
    url: "https://slimhuiswonen.nl",
  },
};

export default function OverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Header />

      <main className="section">
        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            <Link href="/">Home</Link> / Over
          </p>

          <h1>Over SlimHuisWonen</h1>

          <p className="section-intro">
            SlimHuisWonen.nl is gestart door Hafid — iemand die zelf stap voor
            stap een slim huis heeft opgebouwd en onderweg veel heeft geleerd.
          </p>

          <hr />

          <h2>Hoe het begon</h2>
          <p>
            Het begon met één slimme lamp. Daarna groeide het snel door naar een
            compleet smart home met slimme verlichting, bewegingssensoren,
            automatiseringen en een smart home hub.
          </p>
          <p>
            Toen ik zelf begon, merkte ik hoe onduidelijk smart home soms kan
            zijn. Welke producten werken goed samen? Heb je een hub nodig? Kies
            je voor wifi, Zigbee of Matter? Op al die vragen vond ik zelden een
            eerlijk, praktisch antwoord — dus besloot ik die zelf te schrijven.
          </p>

          <h2>Wat je op deze site vindt</h2>
          <ul>
            <li>
              <strong>Koopgidsen</strong> — eerlijke vergelijkingen van slimme
              camera's, verlichting, stekkers, deurbellen en hubs
            </li>
            <li>
              <strong>Tips & uitleg</strong> — praktische uitleg over protocollen,
              netwerken en hoe je apparaten goed instelt
            </li>
            <li>
              <strong>How-to handleidingen</strong> — stap-voor-stap instructies
              zonder technisch jargon
            </li>
            <li>
              <strong>Blog</strong> — vergelijkingen en analyses van smart home
              systemen en protocollen
            </li>
          </ul>

          <h2>Mijn aanpak</h2>
          <p>
            Ik schrijf vanuit eigen ervaring. Producten die ik aanraad zijn
            producten die ik zelf heb gebruikt, getest of grondig onderzocht. Ik
            verdien een kleine commissie als je via een link op deze site iets
            koopt — dat kost jou niets extra en helpt mij de site draaiende te
            houden.
          </p>
          <p>
            Mijn doel is simpel: jou helpen een slim huis te bouwen dat gewoon
            werkt — zonder gedoe.
          </p>

          <hr />

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link href="/aanraders" className="btn btn-primary">
              Bekijk koopgidsen →
            </Link>
            <Link href="/tips" className="btn btn-secondary">
              Lees tips & uitleg →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
