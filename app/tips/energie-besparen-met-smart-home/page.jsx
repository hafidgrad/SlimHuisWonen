import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Energie besparen met smart home – slimme thermostaten & stekkers",
  description:
    "Energie besparen met een smart home? Ontdek hoe slimme thermostaten, radiatorknoppen en slimme stekkers helpen om je energieverbruik te verlagen.",
  alternates: {
    canonical:
      "https://slimhuiswonen.nl/tips/energie-besparen-met-smart-home",
  },
};

export default function EnergieBesparenMetSmartHomePage() {
  const tipImg =
    "/images/tips/energie-besparen-met-smart-home.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kun je echt energie besparen met een smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Slimme thermostaten, radiatorknoppen en slimme stekkers geven inzicht en automatiseren verwarming en apparaten, waardoor onnodig energieverbruik wordt voorkomen.",
        },
      },
      {
        "@type": "Question",
        name: "Wat bespaart het meest: slimme thermostaat of slimme stekkers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Verwarming bespaart meestal het meest. Slimme thermostaten en radiatorknoppen leveren vaak meer besparing op dan slimme stekkers, die vooral helpen bij inzicht en sluipverbruik.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn slimme radiatorknoppen zinvol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vooral als je kamers afzonderlijk wilt verwarmen. Zo verwarm je alleen ruimtes die je gebruikt en bespaar je energie.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* ✅ Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner
            src={tipImg}
            alt="Energie besparen met smart home"
          />
        </div>

        <div className="container article">
          {/* ✅ Topic cluster */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Stabiel smart home netwerk
            </Link>{" "}
            •{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Slimme automatiseringen
            </Link>
          </p>

          <h1>Energie besparen met smart home</h1>

          <p className="section-intro">
            Een smart home is niet alleen handig, maar kan ook helpen om flink
            te besparen op energie. Slimme thermostaten, radiatorknoppen en
            slimme stekkers zorgen voor inzicht én automatische besparing —
            zonder dat je er steeds aan hoeft te denken.
          </p>

          <h2>Hoe helpt een smart home bij energiebesparing?</h2>
          <p>
            De grootste winst zit in inzicht en automatisering. Slimme
            apparaten meten verbruik en passen verwarming of apparaten
            automatisch aan op jouw gedrag en aanwezigheid.
          </p>

          <h2>Slimme thermostaten</h2>
          <p>
            Een slimme thermostaat regelt de temperatuur automatisch op basis
            van schema’s, aanwezigheid of locatie. Hierdoor wordt je huis niet
            onnodig verwarmd wanneer je weg bent of slaapt.
          </p>

          <p>
            Vooral in combinatie met automatiseringen kan dit een merkbaar
            verschil maken in gasverbruik.
          </p>

          <h2>Slimme radiatorknoppen</h2>
          <p>
            Met slimme radiatorknoppen regel je de temperatuur per kamer. Zo
            verwarm je alleen de ruimtes die je gebruikt en zet je ongebruikte
            kamers automatisch lager.
          </p>

          <p>
            Dit is ideaal voor thuiswerken, slaapkamers of zelden gebruikte
            ruimtes.
          </p>

          <h2>Slimme stekkers met energiemeting</h2>
          <p>
            Slimme stekkers met energiemeting laten precies zien hoeveel stroom
            apparaten verbruiken. Hierdoor ontdek je sluipverbruik en kun je
            apparaten automatisch uitschakelen.
          </p>

          <ul>
            <li>inzicht in energieverbruik per apparaat</li>
            <li>automatisch uitschakelen bij standby</li>
            <li>bewuster omgaan met stroom</li>
          </ul>

          <h2>Veelgemaakte fout: alles tegelijk slim maken</h2>
          <p>
            Meer slimme apparaten betekent niet automatisch meer besparing.
            Begin bij verwarming en inzicht, en breid daarna pas uit.
          </p>

          <h2>Waar begin je het beste?</h2>
          <p>
            Start met één onderdeel dat het meeste oplevert:
          </p>

          <ul>
            <li>verwarming automatiseren</li>
            <li>per kamer regelen</li>
            <li>sluipverbruik meten</li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Met een slim ingerichte woning kun je comfortabel wonen én energie
            besparen. Door te automatiseren en inzicht te krijgen in je
            verbruik, maak je bewuste keuzes zonder gedoe.
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/wat-is-een-smart-home-hub">
                Wat is een smart home hub?
              </Link>
            </li>
            <li>
              <Link href="/tips/wifi-verbeteren-voor-smart-home">
                Wifi verbeteren voor smart home
              </Link>
            </li>
            <li>
              <Link href="/tips/merken-combineren-zonder-gedoe">
                Merken combineren zonder gedoe
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-slimme-stekkers">
                Beste slimme stekkers
              </Link>
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
