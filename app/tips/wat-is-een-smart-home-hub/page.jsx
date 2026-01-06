import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is een smart home hub? Uitleg, voordelen & voorbeelden",
  description:
    "Wat is een smart home hub en heb je er eentje nodig? We leggen uit wat een hub doet, wanneer het handig is en welke alternatieven er zijn.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/wat-is-een-smart-home-hub",
  },
};

export default function WatIsEenSmartHomeHub() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Wat is een smart home hub?</h1>

          <p className="section-intro">
            Een smart home hub is het centrale brein van je slimme huis. Het
            zorgt ervoor dat verschillende slimme apparaten met elkaar kunnen
            samenwerken, ook als ze van verschillende merken zijn.
          </p>

          <p>
            Begin je net met slimme apparaten? Dan is het slim om eerst klein
            te starten, bijvoorbeeld met verlichting.{" "}
            <Link href="/tips/beginnen-met-slimme-verlichting">
              Slimme verlichting is vaak de makkelijkste eerste stap
            </Link>
          </p>

          <h2>Wat doet een smart home hub?</h2>

          <p>
            Een hub verbindt slimme apparaten en laat ze met elkaar praten.
            Hierdoor kun je automatiseringen maken die met losse apps vaak
            niet mogelijk zijn.
          </p>

          <ul>
            <li>Verbindt meerdere merken en apparaten</li>
            <li>Maakt geavanceerde automatiseringen mogelijk</li>
            <li>Zorgt voor meer stabiliteit</li>
            <li>Werkt vaak ook lokaal (sneller)</li>
          </ul>

          <h2>Wanneer heb je een hub nodig?</h2>

          <p>
            Niet iedereen heeft meteen een hub nodig. Het hangt af van wat je
            wilt bereiken met je smart home.
          </p>

          <ul>
            <li>Je wilt meerdere merken combineren</li>
            <li>Je gebruikt sensoren voor automatiseringen</li>
            <li>Betrouwbaarheid is belangrijk</li>
            <li>Je wilt minder afhankelijk zijn van wifi of cloud</li>
          </ul>

          <h2>Voorbeelden van smart home hubs</h2>

          <ul>
            <li>Philips Hue Bridge – speciaal voor Hue-verlichting</li>
            <li>Aqara Hub – ideaal voor sensoren</li>
            <li>Homey – alles-in-één oplossing</li>
            <li>Home Assistant – maximale controle (meer technisch)</li>
          </ul>

          <h2>Hub vs geen hub</h2>

          <h3>Zonder hub</h3>
          <p>
            Zonder hub gebruik je losse apps of Google Home / Alexa om apparaten
