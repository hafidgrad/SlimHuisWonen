import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SlimmeLampSchakelaar() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Slimme lamp werkt niet met schakelaar</h1>

          <p className="section-intro">
            Werkt je slimme lamp niet meer zodra je de wandschakelaar gebruikt?
            Dit voelt als een fout, maar is in werkelijkheid normaal gedrag bij
            slimme verlichting — en gelukkig goed op te lossen.
          </p>

          <h2>Waarom gebeurt dit?</h2>

          <p>
            Slimme lampen hebben continu stroom nodig om bereikbaar te blijven
            via de app, automatiseringen of spraakbediening. Wanneer je de
            schakelaar uitzet, verliest de lamp stroom en kan deze niet meer
            communiceren.
          </p>

          <p>Gevolgen van het uitzetten van de schakelaar:</p>

          <ul>
            <li>De lamp is niet meer bereikbaar in de app</li>
            <li>Automatiseringen werken niet meer</li>
            <li>Spraakbediening reageert niet</li>
            <li>De lamp lijkt “kapot”, maar is dat niet</li>
          </ul>
