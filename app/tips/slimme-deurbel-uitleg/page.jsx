import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Slimme deurbel uitgelegd: werking, privacy & abonnementen – 2026",
  description:
    "Wat is een slimme deurbel en waar moet je op letten? Uitleg over werking, wifi, privacy, abonnementen en integratie met je smart home.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/tips/slimme-deurbel-uitleg",
  },
};

export default function SlimmeDeurbelUitleg() {
  const tipImg =
    "/images/tips/slimme-deurbel-uitleg.png";

  // ✅ FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is een slimme deurbel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een slimme deurbel is een deurbel met camera, microfoon en internetverbinding waarmee je via je smartphone ziet en hoort wie er aanbelt.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je wifi nodig voor een slimme deurbel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vrijwel alle slimme deurbellen werken via wifi om meldingen, live beeld en opnames naar je telefoon te sturen.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een abonnement nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Zonder abonnement kun je meestal live meekijken. Voor video-opslag, AI-detectie of terugkijken is vaak wel een abonnement nodig.",
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
          <TipBanner src={tipImg} alt="Slimme deurbel uitleg" />
        </div>

        <div className="container article">
          {/* ✅ Cluster link */}
          <p className="muted small" style={{ marginBottom: "0.75rem" }}>
            Onderdeel van:{" "}
            <Link href="/tips/slim-huis-beveiligen">
              Slim huis beveiligen
            </Link>
          </p>

          <h1>Slimme deurbel: uitleg & aandachtspunten</h1>

          <p className="section-intro">
            Met een slimme deurbel zie je altijd wie er aanbelt — ook als je niet
            thuis bent. In dit artikel leggen we uit hoe slimme deurbellen werken,
            wat de voor- en nadelen zijn en waar je op moet letten.
          </p>

          <h2>Wat doet een slimme deurbel?</h2>
          <p>
            Een slimme deurbel combineert een camera, microfoon en luidspreker
            met een app op je telefoon.
          </p>

          <ul>
            <li>live beeld op je smartphone</li>
            <li>melding bij aanbellen of beweging</li>
            <li>tweeweg-audio (praten met bezoeker)</li>
            <li>video-opnames (afhankelijk van model)</li>
          </ul>

          <h2>Hoe werkt een slimme deurbel?</h2>
          <p>
            De deurbel maakt verbinding met je wifi-netwerk en stuurt beelden en
            meldingen via de cloud of lokaal naar je app.
          </p>

          <p>
            Een stabiele wifi-verbinding is cruciaal.{" "}
            <Link href="/tips/wifi-verbeteren-voor-smart-home">
              Zo verbeter je wifi voor smart home
            </Link>
            .
          </p>

          <h2>Bekabeld of op batterij?</h2>
          <h3>Bekabelde slimme deurbel</h3>
          <ul>
            <li>altijd stroom, geen opladen</li>
            <li>vaak stabieler</li>
            <li>installatie kan lastiger zijn</li>
          </ul>

          <h3>Slimme deurbel op batterij</h3>
          <ul>
            <li>eenvoudige installatie</li>
            <li>flexibel te plaatsen</li>
            <li>batterij regelmatig opladen</li>
          </ul>

          <h2>Privacy & wetgeving</h2>
          <p>
            Slimme deurbellen filmen vaak openbare ruimte. Houd rekening met:
          </p>

          <ul>
            <li>privacyzones instellen</li>
            <li>geen buren of straat onnodig filmen</li>
            <li>duidelijke zichtbaarheid van de camera</li>
          </ul>

          <p>
            Meer hierover lees je in{" "}
            <Link href="/tips/privacy-en-veiligheid-smart-home">
              privacy & veiligheid in een smart home
            </Link>
            .
          </p>

          <h2>Abonnementen: nodig of niet?</h2>
          <p>
            Veel merken bieden extra functies via een abonnement:
          </p>

          <ul>
            <li>video-opslag in de cloud</li>
            <li>terugkijken van meldingen</li>
            <li>AI-detectie (personen, pakketten)</li>
          </ul>

          <p>
            Zonder abonnement kun je meestal wel live meekijken en praten.
          </p>

          <h2>Integratie met smart home</h2>
          <p>
            Slimme deurbellen werken vaak samen met andere apparaten:
          </p>

          <ul>
            <li>melding op slimme speakers</li>
            <li>licht aan bij aanbellen</li>
            <li>camera activeren bij beweging</li>
          </ul>

          <p>
            Dit werkt het beste met een hub.{" "}
            <Link href="/tips/wat-is-een-smart-home-hub">
              Wat is een smart home hub?
            </Link>
          </p>

          <h2>Conclusie</h2>
          <p>
            Een slimme deurbel verhoogt je veiligheid en gemak. Let vooral op
            wifi, privacy-instellingen en eventuele abonnementskosten voordat je
            kiest.
          </p>

          <hr />

          <h2>Gerelateerde tips</h2>
          <ul>
            <li>
              <Link href="/tips/slim-huis-beveiligen">
                Slim huis beveiligen
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-camera-uitleg">
                Slimme camera’s uitleg
              </Link>
            </li>
            <li>
              <Link href="/tips/slimme-sensoren-uitleg">
                Slimme sensoren uitleg
              </Link>
            </li>
            <li>
              <Link href="/tips/privacy-en-veiligheid-smart-home">
                Privacy & veiligheid
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
