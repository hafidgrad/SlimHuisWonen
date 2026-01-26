import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Beste slimme camera (2026) – keuzehulp & aandachtspunten",
  description:
    "Wat is de beste slimme camera voor jouw huis? Ontdek waar je op moet letten: binnen of buiten, wifi vs PoE, opslag, abonnementen en privacy.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog/beste-slimme-camera",
  },
};

export default function BesteSlimmeCameraPage() {
  const blogImg = "/images/blog/beste-slimme-camera.png";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is de beste slimme camera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De beste slimme camera hangt af van jouw situatie. Let vooral op of je een camera voor binnen of buiten nodig hebt, hoe stabiel je wifi is, en of je lokale opslag of cloudopslag wilt gebruiken.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een abonnement nodig voor een slimme camera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Sommige camera’s werken met lokale opslag via SD-kaart of hub. Cloudopslag en geavanceerde detectie vereisen vaak een abonnement.",
        },
      },
      {
        "@type": "Question",
        name: "Is wifi of PoE beter voor slimme camera’s?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PoE is het meest stabiel omdat stroom en data via één kabel lopen. Wifi is makkelijker te installeren, maar gevoeliger voor storingen en bereikproblemen.",
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="section">
        {/* Banner */}
        <div className="container" style={{ marginBottom: "1.25rem" }}>
          <TipBanner src={blogImg} alt="Beste slimme camera" />
        </div>

        <div className="container article">
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Beveiliging:{" "}
            <Link href="/tips/slim-huis-beveiligen">Slim huis beveiligen</Link> •{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid
            </Link>
          </p>

          <h1>Beste slimme camera: waar moet je op letten?</h1>

          <p className="section-intro">
            Slimme camera’s verhogen je veiligheid, maar alleen als je de juiste
            kiest. In deze gids leggen we uit waar je écht op moet letten zodat
            je geen miskoop doet.
          </p>

          <h2>Binnen of buiten camera?</h2>
          <p>
            De eerste keuze is simpel maar belangrijk. Binnen-camera’s zijn
            compacter en goedkoper. Buitencamera’s zijn weerbestendig en hebben
            vaak beter nachtzicht.
          </p>

          <h2>Stroomvoorziening</h2>
          <ul>
            <li>Netstroom: stabiel en onderhoudsvrij</li>
            <li>Accu: flexibel plaatsen, maar opladen nodig</li>
            <li>Zonnepaneel: handig buiten, afhankelijk van zonlicht</li>
          </ul>

          <h2>Wifi of bekabeld (PoE)</h2>
          <p>
            Wifi is eenvoudig, maar PoE (Power over Ethernet) is betrouwbaarder.
            Vooral bij buitencamera’s is een kabel vaak de beste keuze.
          </p>

          <p>
            Problemen met bereik?{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home →
            </Link>
          </p>

          <h2>Beeldkwaliteit & nachtzicht</h2>
          <ul>
            <li>Minimaal 2K resolutie</li>
            <li>Goed nachtzicht (IR of kleur)</li>
            <li>HDR voor situaties met tegenlicht</li>
          </ul>

          <h2>Opslag: lokaal of cloud</h2>
          <p>
            Cloud is makkelijk maar vaak betaald. Lokale opslag is goedkoper en
            privacyvriendelijker, zeker met een hub of NVR.
          </p>

          <h2>Privacy & beveiliging</h2>
          <ul>
            <li>Gebruik sterke wachtwoorden</li>
            <li>Activeer tweestapsverificatie</li>
            <li>Gebruik privacyzones</li>
            <li>Houd firmware automatisch up-to-date</li>
          </ul>

          <p>
            Meer hierover lees je in{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              Privacy & veiligheid in je smart home
            </Link>
            .
          </p>

          <h2>Conclusie</h2>
          <p>
            De beste slimme camera is betrouwbaar, past bij jouw woning en
            respecteert je privacy. Kies liever voor stabiliteit en goede
            instellingen dan alleen voor hoge resolutie.
          </p>

          <hr />

          <h2>Gerelateerde blogs</h2>
          <ul>
            <li>
              <Link href="/blog/beste-slimme-deurbel">
                Beste slimme deurbel
              </Link>
            </li>
            <li>
              <Link href="/blog/beste-slimme-sensoren">
                Beste slimme sensoren
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
