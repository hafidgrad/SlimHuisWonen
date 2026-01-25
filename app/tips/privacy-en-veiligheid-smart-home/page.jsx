import Image from "next/image";

export const metadata = {
  title: "Privacy & veiligheid in je smart home | SlimHuisWonen",
  description:
    "Zo maak je je smart home veiliger. Praktische tips om slimme apparaten, camera’s en deurbellen beter te beveiligen tegen hackers.",
};

export default function PrivacyEnVeiligheidSmartHome() {
  return (
    <main className="section">
      <div className="container article">
        {/* Hero afbeelding */}
        <div className="article-hero">
          <Image
            src="/images/tips/privacy-en-veiligheid-smart-home.png"
            alt="Privacy en veiligheid in je smart home"
            width={1200}
            height={600}
            priority
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
        </div>

        {/* Artikel */}
        <article>
          <h1>Privacy & veiligheid in je smart home</h1>

          <p className="intro">
            Slimme apparaten maken je huis comfortabeler, maar brengen ook
            vragen met zich mee over privacy en veiligheid. Camera’s,
            deurbellen en sensoren zijn verbonden met het internet — en daarom
            is het belangrijk om ze goed te beveiligen.
          </p>

          <p>
            In deze tip leggen we uit hoe je jouw smart home minder gevoelig
            maakt voor hackers en hoe je slimme apparaten veilig gebruikt,
            zonder ingewikkelde technische instellingen.
          </p>

          <h2>Waarom privacy zo belangrijk is in een smart home</h2>
          <p>
            Slimme apparaten verzamelen vaak meer gegevens dan je denkt.
            Denk aan camerabeelden, bewegingsdata en informatie over wanneer
            je thuis bent. Als deze data niet goed beschermd is, kan dit
            leiden tot ongewenste meekijkers of misbruik.
          </p>

          <h2>De grootste risico’s bij slimme apparaten</h2>
          <ul>
            <li>Gebruik van standaard of zwakke wachtwoorden</li>
            <li>Apparaten die direct aan het internet hangen</li>
            <li>Geen of verouderde software-updates</li>
            <li>Te veel cloud-toegang zonder controle</li>
          </ul>

          <h2>Zo maak je je smart home veiliger</h2>

          <h3>1. Gebruik sterke en unieke wachtwoorden</h3>
          <p>
            Gebruik voor elk account een uniek wachtwoord van minimaal
            12 tekens. Vermijd hergebruik van wachtwoorden en overweeg een
            password manager.
          </p>

          <h3>2. Zet waar mogelijk 2-stapsverificatie aan</h3>
          <p>
            Met tweestapsverificatie is een account veel beter beschermd,
            zelfs als iemand je wachtwoord weet.
          </p>

          <h3>3. Gebruik een apart netwerk voor slimme apparaten</h3>
          <p>
            Veel routers bieden een gast- of IoT-netwerk. Zo kunnen slimme
            apparaten niet bij je laptop, telefoon of andere persoonlijke
            data.
          </p>

          <h2>Slimme camera’s en deurbellen veilig gebruiken</h2>

          <h3>Camera’s</h3>
          <ul>
            <li>Kies bij voorkeur bekende merken</li>
            <li>Beperk cloudopslag als dit mogelijk is</li>
            <li>Controleer regelmatig wie toegang heeft tot de beelden</li>
            <li>Plaats geen camera’s in privéruimtes</li>
          </ul>

          <h3>Deurbellen met camera</h3>
          <p>
            Slimme deurbellen hangen permanent buiten en zijn altijd online.
            Schakel functies die je niet gebruikt uit, zoals continu opnemen
            of de microfoon.
          </p>

          <h2>Zijn hubs veiliger dan losse wifi-apparaten?</h2>
          <p>
            In veel gevallen wel. Apparaten die via een hub werken, zijn
            minder direct verbonden met het internet en werken vaker lokaal.
            Dat geeft meer controle en minder afhankelijkheid van de cloud.
          </p>

          <h2>Conclusie</h2>
          <p>
            Een smart home hoeft geen risico te zijn voor je privacy.
            Door bewuste keuzes te maken en je apparaten goed in te stellen,
            woon je niet alleen slimmer, maar ook veiliger.
          </p>

          <p className="disclaimer">
            <em>
              Sommige links op deze site zijn affiliate links. Dat betekent
              dat wij een kleine commissie kunnen krijgen als jij iets koopt.
              Jij betaalt hiervoor niets extra.
            </em>
          </p>
        </article>
      </div>
    </main>
  );
}
