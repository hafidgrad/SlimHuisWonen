import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is slimme verlichting? Uitleg & voorbeelden",
  description:
    "Wat is slimme verlichting en hoe werkt het? Ontdek de voordelen, nadelen en voorbeelden voor een slim huis.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-slimme-verlichting",
  },
};

export default function WatIsSlimmeVerlichting() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Wat is slimme verlichting?</h1>

          <p className="section-intro">
            Slimme verlichting is verlichting die je niet alleen met een
            schakelaar bedient, maar ook via een app, schema’s,
            automatiseringen of spraak. Het is vaak de eerste stap richting
            een slim huis.
          </p>

          <h2>Wat maakt verlichting “slim”?</h2>

          <p>
            Slimme verlichting is verbonden met internet of een hub. Daardoor
            kun je lampen bedienen wanneer je wilt, automatisch laten reageren
            of combineren met andere slimme apparaten.
          </p>

          <ul>
            <li>Aan- en uitzetten via een app</li>
            <li>Timers en schema’s instellen</li>
            <li>Dimmen of kleur aanpassen</li>
            <li>Automatisch reageren op beweging of tijdstip</li>
          </ul>

          <h2>Hoe werkt slimme verlichting?</h2>

          <p>
            Er zijn verschillende manieren waarop slimme verlichting werkt.
            Dit bepaalt ook hoe uitgebreid je systeem kan worden.
          </p>

          <h3>1. Wifi-verlichting</h3>
          <p>
            Deze lampen verbinden direct met je wifi. Ze zijn goedkoop en
            eenvoudig, maar minder geschikt voor grote installaties.
          </p>

          <h3>2. Verlichting met hub (Zigbee)</h3>
          <p>
            Systemen zoals Philips Hue of Aqara gebruiken een hub. Dit is
            stabieler, sneller en beter geschikt voor automatiseringen.
          </p>

          <h2>Heb je altijd een hub nodig?</h2>

          <p>
            Nee. Voor eenvoudige toepassingen is een hub niet nodig. Wil je
            meerdere merken combineren of automatiseringen maken met sensoren,
            dan is een hub sterk aan te raden.
          </p>

          <p>
            👉 Lees ook:{" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Slim huis zonder hub: kan dat?
            </Link>
          </p>

          <h2>Voordelen van slimme verlichting</h2>

          <ul>
            <li>Meer gemak en comfort</li>
            <li>Sfeerverlichting met één druk op de knop</li>
            <li>Energiebesparing door schema’s</li>
            <li>Automatisch licht bij thuiskomst</li>
          </ul>

          <h2>Nadelen om rekening mee te houden</h2>

          <ul>
            <li>Duurder dan standaard lampen</li>
            <li>Werkt minder goed als de stroom uit staat</li>
            <li>Even instellen kost tijd</li>
          </ul>

          <h2>Voor wie is slimme verlichting geschikt?</h2>

          <p>Slimme verlichting is ideaal voor:</p>

          <ul>
            <li>Mensen die meer sfeer willen in huis</li>
            <li>Beginners met smart home</li>
            <li>Gezinnen die verlichting willen automatiseren</li>
            <li>Mensen die energie willen besparen</li>
          </ul>

          <h2>Po
