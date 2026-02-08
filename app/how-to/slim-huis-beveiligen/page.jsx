import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipBanner from "@/components/TipBanner"; // ✅ toegevoegd
import Link from "next/link";

export const metadata = {
  title: "Hoe beveilig je je slimme huis? | SlimHuisWonen",
  description:
    "Leer hoe je je smart home beveiligt tegen hackers en ongewenste toegang. Praktische tips voor een veilig en stabiel slim huis.",
};

export default function SlimHuisBeveiligen() {

  const headerImg = "/images/how-to/slim-huis-beveiligen.png"; // ✅ toegevoegd

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">

          {/* ✅ Banner toegevoegd */}
          <TipBanner
            src={headerImg}
            alt="Hoe beveilig je je slimme huis?"
          />

          <h1>Hoe beveilig je je slimme huis?</h1>

          <p>
            Een smart home biedt comfort en gemak, maar brengt ook nieuwe
            veiligheidsrisico’s met zich mee. Slimme apparaten zijn verbonden
            met internet en kunnen kwetsbaar zijn als je ze niet goed instelt.
          </p>

          <p>
            In deze handleiding lees je hoe je je slimme huis veilig en
            betrouwbaar houdt.
          </p>

          <h2>Stap 1: Gebruik sterke wachtwoorden</h2>

          <p>
            Gebruik altijd unieke en sterke wachtwoorden voor je smart home
            accounts en wifi-netwerk.
          </p>

          <p>
            Vermijd standaardwachtwoorden en wijzig ze direct na installatie.
          </p>

          <h2>Stap 2: Update regelmatig je apparaten</h2>

          <p>
            Fabrikanten brengen updates uit om beveiligingslekken te dichten.
            Controleer regelmatig of er firmware-updates beschikbaar zijn.
          </p>

          <h2>Stap 3: Gebruik een apart netwerk (optioneel)</h2>

          <p>
            Veel routers bieden een gastnetwerk aan. Je kunt overwegen om je
            slimme apparaten op een apart netwerk te plaatsen.
          </p>

          <h2>Stap 4: Kies betrouwbare merken</h2>

          <p>
            Kies voor bekende en goed ondersteunde merken. Bekijk bijvoorbeeld
            onze{" "}
            <Link href="/aanraders/beste-slimme-camera">
              beste slimme camera’s
            </Link>{" "}
            of{" "}
            <Link href="/aanraders/beste-slimme-deurbel">
              beste slimme deurbellen
            </Link>{" "}
            voor veilige keuzes.
          </p>

          <h2>Stap 5: Beperk externe toegang</h2>

          <p>
            Geef alleen toegang aan mensen die het echt nodig hebben. Controleer
            in de app welke apparaten of personen toegang hebben.
          </p>

          <h2>Extra tip: Gebruik een smart home hub</h2>

          <p>
            Met een centrale hub kun je apparaten beter beheren en monitoren.
            Bekijk onze{" "}
            <Link href="/aanraders/beste-smart-home-hub">
              beste smart home hubs
            </Link>{" "}
            voor een veilige basis.
          </p>

          <h2>Conclusie</h2>

          <p>
            Een veilig smart home begint bij goede instellingen en bewuste
            keuzes. Met sterke wachtwoorden, updates en betrouwbare apparatuur
            voorkom je de meeste risico’s.
          </p>

          <p>
            Zo geniet je zorgeloos van alle voordelen van een slim huis.
          </p>

          <hr style={{ margin: "2rem 0" }} />

          <Link href="/how-to" className="btn btn-primary">
            ← Terug naar How To overzicht
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
