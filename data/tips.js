import Link from "next/link";

/**
 * Tips data (zoals blog): je kunt per tip later content/related/category toevoegen.
 * Zolang content ontbreekt, blijft de tip gewoon bestaan in het overzicht.
 */
export const tips = [
 {
  slug: "privacy-en-veiligheid-smart-home",
  title: "Privacy & veiligheid in je smart home – zo bescherm je je huis",
  description:
    "Praktische tips om je smart home veiliger te maken. Zo bescherm je slimme apparaten, camera’s en deurbellen tegen hackers.",
  image: "/images/tips/privacy-en-veiligheid-smart-home.png",
  category: "Privacy & veiligheid",
  available: true,

  related: [
    "wifi-verbeteren-voor-smart-home",
    "merken-combineren-zonder-gedoe",
    "wat-is-een-smart-home-hub",
    "beginnen-met-smart-home",
    "energie-besparen-met-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is een smart home veilig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een smart home kan veilig zijn mits je sterke wachtwoorden gebruikt, apparaten up-to-date houdt en onnodige cloud- en internettoegang beperkt.",
        },
      },
      {
        "@type": "Question",
        name: "Kunnen slimme camera’s gehackt worden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vooral bij zwakke wachtwoorden of verouderde software. Door tweestapsverificatie, updates en beperkte toegang verklein je dit risico sterk.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn hubs veiliger dan wifi-apparaten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In veel gevallen wel. Apparaten via een hub zijn minder direct verbonden met internet en werken vaker lokaal, wat de veiligheid vergroot.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Wifi & netwerk
        </Link>{" "}
        •{" "}
        <Link href="/tips/merken-combineren-zonder-gedoe">
          Merken combineren zonder gedoe
        </Link>
      </p>

      <p className="section-intro">
        Slimme apparaten maken je huis comfortabeler, maar brengen ook vragen
        met zich mee over privacy en veiligheid. Camera’s, deurbellen en
        sensoren zijn verbonden met het internet — en daarom is het belangrijk
        om ze goed te beveiligen.
      </p>

      <h2>Waarom privacy belangrijk is in een smart home</h2>
      <p>
        Slimme apparaten verzamelen vaak meer gegevens dan je denkt. Denk aan
        camerabeelden, bewegingsdata en informatie over wanneer je thuis bent.
        Als deze data niet goed beschermd is, kan dit leiden tot ongewenste
        meekijkers of misbruik.
      </p>

      <h2>De grootste risico’s bij slimme apparaten</h2>
      <ul>
        <li>zwakke of hergebruikte wachtwoorden</li>
        <li>apparaten die direct aan internet hangen</li>
        <li>geen of verouderde software-updates</li>
        <li>te veel cloudtoegang zonder controle</li>
      </ul>

      <h2>Zo maak je je smart home veiliger</h2>

      <h3>1. Gebruik sterke, unieke wachtwoorden</h3>
      <p>
        Gebruik voor elk account een uniek wachtwoord van minimaal 12 tekens.
        Vermijd hergebruik en gebruik bij voorkeur een password manager.
      </p>

      <h3>2. Zet tweestapsverificatie aan</h3>
      <p>
        Waar mogelijk is tweestapsverificatie een van de effectiefste manieren
        om ongewenste toegang te voorkomen.
      </p>

      <h3>3. Gebruik een apart netwerk voor slimme apparaten</h3>
      <p>
        Veel routers bieden een gast- of IoT-netwerk. Zo kunnen slimme apparaten
        niet bij je laptop of persoonlijke data.
      </p>

      <p>
        Heb je last van instabiele verbindingen?{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je wifi voor smart home
        </Link>.
      </p>

      <h2>Slimme camera’s en deurbellen veilig gebruiken</h2>

      <h3>Camera’s</h3>
      <ul>
        <li>kies bij voorkeur bekende merken</li>
        <li>beperk cloudopslag als dat mogelijk is</li>
        <li>controleer regelmatig wie toegang heeft</li>
        <li>plaats geen camera’s in privéruimtes</li>
      </ul>

      <h3>Deurbellen met camera</h3>
      <p>
        Slimme deurbellen hangen permanent buiten en zijn altijd online.
        Schakel functies uit die je niet nodig hebt, zoals continu opnemen
        of de microfoon.
      </p>

      <h2>Zijn hubs veiliger dan losse wifi-apparaten?</h2>
      <p>
        In veel gevallen wel. Apparaten die via een hub werken, zijn minder
        direct verbonden met internet en werken vaker lokaal.
      </p>

      <p>
        <Link href="/tips/wat-is-een-smart-home-hub">
          Wat is een smart home hub?
        </Link>
      </p>

      <h2>Conclusie</h2>
      <p>
        Een smart home hoeft geen risico te zijn voor je privacy. Door bewuste
        keuzes te maken en je apparaten goed in te stellen, woon je niet alleen
        slimmer, maar ook veiliger.
      </p>
    </>
  ),
},
  {
  slug: "energie-besparen-met-smart-home",
  title: "Energie besparen met smart home – slimme thermostaten & stekkers",
  description:
    "Energie besparen met een smart home? Ontdek hoe slimme thermostaten, radiatorknoppen en slimme stekkers helpen om je energieverbruik te verlagen.",
  image: "/images/tips/energie-besparen-met-smart-home.png",
  category: "Energie & besparen",
  available: true,

  related: [
    "wat-is-een-smart-home-hub",
    "wifi-verbeteren-voor-smart-home",
    "merken-combineren-zonder-gedoe",
    "beginnen-met-smart-home",
    "beginnen-met-slimme-verlichting",
  ],

  faqSchema: {
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
  },

  content: (
    <>
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

      <p className="section-intro">
        Een smart home is niet alleen handig, maar kan ook helpen om flink te
        besparen op energie. Slimme thermostaten, radiatorknoppen en slimme
        stekkers zorgen voor inzicht én automatische besparing — zonder dat je
        er steeds aan hoeft te denken.
      </p>

      <h2>Hoe helpt een smart home bij energiebesparing?</h2>
      <p>
        De grootste winst zit in inzicht en automatisering. Slimme apparaten
        meten verbruik en passen verwarming of apparaten automatisch aan op
        jouw gedrag en aanwezigheid.
      </p>

      <h2>Slimme thermostaten</h2>
      <p>
        Een slimme thermostaat regelt de temperatuur automatisch op basis van
        schema’s, aanwezigheid of locatie. Hierdoor wordt je huis niet onnodig
        verwarmd wanneer je weg bent of slaapt.
      </p>

      <p>
        Vooral in combinatie met automatiseringen kan dit een merkbaar verschil
        maken in gasverbruik.
      </p>

      <h2>Slimme radiatorknoppen</h2>
      <p>
        Met slimme radiatorknoppen regel je de temperatuur per kamer. Zo verwarm
        je alleen de ruimtes die je gebruikt en zet je ongebruikte kamers
        automatisch lager.
      </p>

      <p>
        Dit is ideaal voor thuiswerken, slaapkamers of zelden gebruikte ruimtes.
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
        Meer slimme apparaten betekent niet automatisch meer besparing. Begin
        bij verwarming en inzicht, en breid daarna pas uit.
      </p>

      <h2>Waar begin je het beste?</h2>
      <p>Start met één onderdeel dat het meeste oplevert:</p>

      <ul>
        <li>verwarming automatiseren</li>
        <li>per kamer regelen</li>
        <li>sluipverbruik meten</li>
      </ul>

      <h2>Conclusie</h2>
      <p>
        Met een slim ingerichte woning kun je comfortabel wonen én energie
        besparen. Door te automatiseren en inzicht te krijgen in je verbruik,
        maak je bewuste keuzes zonder gedoe.
      </p>
    </>
  ),
},

  // ✅ Beveiliging (nieuw cluster)
  {
  slug: "slim-huis-beveiligen",
  title: "Slim huis beveiligen: slimme camera’s, deurbellen & sensoren – 2026",
  description:
    "Hoe beveilig je je huis slim? Complete uitleg over slimme camera’s, videodeurbellen, sensoren en privacy. Praktische tips voor een veilig smart home.",
  image: "/images/tips/slim-huis-beveiligen.png",
  category: "Beveiliging",
  available: true,

  related: [
    "privacy-en-veiligheid-smart-home",
    "beginnen-met-smart-home",
    "slimme-camera-uitleg",
    "slimme-deurbel-uitleg",
    "slimme-sensoren-uitleg",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is een slim beveiligingssysteem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een slim beveiligingssysteem bestaat uit slimme camera’s, sensoren en deurbellen die meldingen geven en automatisch kunnen reageren op gebeurtenissen.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een abonnement nodig voor slimme beveiliging?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Sommige merken werken zonder abonnement, maar functies zoals cloudopslag of gezichtsherkenning vereisen vaak wel een abonnement.",
        },
      },
      {
        "@type": "Question",
        name: "Is slimme beveiliging privacygevoelig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme beveiliging kan privacygevoelig zijn. Het is belangrijk om zones goed in te stellen, meldingen te beperken en rekening te houden met buren en bezoekers.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home
        </Link>
      </p>

      <p className="section-intro">
        Met slimme beveiliging maak je je huis veiliger én overzichtelijker.
        Denk aan camera’s, videodeurbellen en sensoren die samenwerken en je
        direct waarschuwen bij verdachte situaties.
      </p>

      <h2>Wat valt onder slimme huisbeveiliging?</h2>
      <p>
        Slimme huisbeveiliging bestaat uit meerdere onderdelen die elkaar
        versterken:
      </p>

      <ul>
        <li>slimme camera’s (binnen en buiten)</li>
        <li>slimme videodeurbellen</li>
        <li>bewegings-, deur- en raamsensoren</li>
        <li>meldingen en automatiseringen</li>
      </ul>

      <h2>Slimme camera’s</h2>
      <p>
        Slimme camera’s geven live beeld, meldingen bij beweging en soms
        nachtzicht of AI-detectie.
      </p>

      <p>
        Meer weten?{" "}
        <Link href="/tips/slimme-camera-uitleg">
          Slimme camera’s: uitleg & aandachtspunten
        </Link>
      </p>

      <h2>Slimme deurbellen</h2>
      <p>
        Met een slimme deurbel zie je wie er aanbelt, ook als je niet thuis
        bent. Veel modellen bieden bewegingsdetectie en tweeweg-audio.
      </p>

      <p>
        Lees verder:{" "}
        <Link href="/tips/slimme-deurbel-uitleg">
          Slimme deurbellen uitgelegd
        </Link>
      </p>

      <h2>Slimme sensoren</h2>
      <p>
        Sensoren detecteren beweging, openen van deuren of ramen en zelfs
        waterlekkages. Ze vormen vaak de basis van automatiseringen.
      </p>

      <p>
        Uitleg:{" "}
        <Link href="/tips/slimme-sensoren-uitleg">
          Slimme sensoren: wat kun je ermee?
        </Link>
      </p>

      <h2>Automatiseringen voor extra veiligheid</h2>
      <ul>
        <li>licht automatisch aan bij beweging</li>
        <li>melding bij open deur als je weg bent</li>
        <li>camera activeren bij alarm</li>
      </ul>

      <h2>Privacy & wetgeving</h2>
      <p>
        Bij slimme beveiliging hoort verantwoordelijkheid. Let op zichtlijnen,
        privacyzones en meldingen voor bezoekers.
      </p>

      <p>
        Meer hierover lees je in{" "}
        <Link href="/tips/privacy-en-veiligheid-smart-home">
          privacy & veiligheid in een smart home
        </Link>.
      </p>

      <h2>Conclusie</h2>
      <p>
        Een slim beveiligd huis bestaat niet uit één apparaat, maar uit een
        slimme combinatie van camera’s, sensoren en automatiseringen. Begin
        klein en breid uit waar nodig.
      </p>
    </>
  ),
},
  {
  slug: "slimme-camera-uitleg",
  title: "Slimme camera’s uitgelegd – waar moet je op letten? (2026)",
  description:
    "Alles wat je moet weten over slimme camera’s voor binnen en buiten. Uitleg, privacytips, opslagmogelijkheden en waar je op moet letten.",
  image: "/images/tips/slimme-camera-uitleg.png",
  category: "Beveiliging",
  available: true,

  related: [
    "slim-huis-beveiligen",
    "privacy-en-veiligheid-smart-home",
    "wifi-verbeteren-voor-smart-home",
    "beginnen-met-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Zijn slimme camera’s veilig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, mits je sterke wachtwoorden gebruikt, tweestapsverificatie inschakelt en updates uitvoert. Ook een goed beveiligd wifi-netwerk is belangrijk.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een abonnement nodig voor slimme camera’s?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Veel camera’s bieden live beeld zonder abonnement. Cloudopslag en slimme detectie vereisen soms wel een abonnement.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: lokale opslag of cloudopslag?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lokale opslag geeft meer privacy en geen maandkosten. Cloudopslag biedt vaak extra functies zoals AI-detectie en externe toegang.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Gerelateerd:{" "}
        <Link href="/tips/slim-huis-beveiligen">
          Slim huis beveiligen
        </Link>{" "}
        •{" "}
        <Link href="/tips/privacy-en-veiligheid-smart-home">
          Privacy & veiligheid
        </Link>{" "}
        •{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Wi-Fi verbeteren
        </Link>
      </p>

      <p className="section-intro">
        Slimme camera’s zijn één van de populairste smart home apparaten.
        Ze zorgen voor extra veiligheid en geven je altijd inzicht in wat er
        thuis gebeurt — zelfs wanneer je niet aanwezig bent.
      </p>

      <h2>Waarom kiezen voor een slimme camera?</h2>
      <p>
        Slimme camera’s combineren beveiliging met gemak. Je ontvangt
        meldingen bij beweging en kunt live meekijken via je smartphone.
      </p>

      <ul>
        <li>live beeld via app</li>
        <li>meldingen bij beweging</li>
        <li>nachtzicht</li>
        <li>opnames terugkijken</li>
      </ul>

      <h2>Binnen- vs buitencamera’s</h2>

      <h3>Binnencamera’s</h3>
      <ul>
        <li>compact en eenvoudig te plaatsen</li>
        <li>ideaal voor huisdieren of toezicht</li>
        <li>vaak goedkoper</li>
      </ul>

      <h3>Buitencamera’s</h3>
      <ul>
        <li>weerbestendig (IP65/IP67)</li>
        <li>groter bereik</li>
        <li>afschrikkende werking</li>
      </ul>

      <h2>Opslag: cloud of lokaal?</h2>

      <h3>Cloudopslag</h3>
      <ul>
        <li>opnames overal bekijken</li>
        <li>vaak AI-detectie</li>
        <li>soms abonnement nodig</li>
      </ul>

      <h3>Lokale opslag</h3>
      <ul>
        <li>geen maandkosten</li>
        <li>meer privacy</li>
        <li>microSD of NAS mogelijk</li>
      </ul>

      <h2>Privacy tips</h2>
      <ul>
        <li>gebruik sterke wachtwoorden</li>
        <li>zet tweestapsverificatie aan</li>
        <li>plaats geen camera’s in privéruimtes</li>
        <li>controleer toegangsrechten regelmatig</li>
      </ul>

      <p>
        Lees ook:{" "}
        <Link href="/tips/privacy-en-veiligheid-smart-home">
          privacy & veiligheid in je smart home
        </Link>
        .
      </p>

      <h2>Wifi is cruciaal</h2>
      <p>
        Camera’s gebruiken continu data. Een stabiele verbinding voorkomt
        haperingen en offline meldingen.
      </p>

      <p>
        👉{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je wifi voor smart home
        </Link>
      </p>

      <h2>Conclusie</h2>
      <p>
        Slimme camera’s zijn een sterke eerste stap richting slimme
        huisbeveiliging. Kies het juiste type camera, let op privacy en zorg
        voor een stabiel netwerk voor de beste ervaring.
      </p>
    </>
  ),
},
  {
  slug: "slimme-deurbel-uitleg",
  title: "Slimme deurbel uitgelegd: werking, privacy & abonnementen – 2026",
  description:
    "Wat is een slimme deurbel en waar moet je op letten? Uitleg over werking, wifi, privacy, abonnementen en integratie met je smart home.",
  image: "/images/tips/slimme-deurbel-uitleg.png",
  category: "Beveiliging",
  available: true,

  related: [
    "slim-huis-beveiligen",
    "slimme-camera-uitleg",
    "slimme-sensoren-uitleg",
    "privacy-en-veiligheid-smart-home",
    "wifi-verbeteren-voor-smart-home",
  ],

  faqSchema: {
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
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/slim-huis-beveiligen">
          Slim huis beveiligen
        </Link>
      </p>

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
        </Link>.
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
        </Link>.
      </p>

      <h2>Abonnementen: nodig of niet?</h2>
      <p>Veel merken bieden extra functies via een abonnement:</p>

      <ul>
        <li>video-opslag in de cloud</li>
        <li>terugkijken van meldingen</li>
        <li>AI-detectie (personen, pakketten)</li>
      </ul>

      <p>
        Zonder abonnement kun je meestal wel live meekijken en praten.
      </p>

      <h2>Integratie met smart home</h2>
      <p>Slimme deurbellen werken vaak samen met andere apparaten:</p>

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
    </>
  ),
},
  {
  slug: "slimme-sensoren-uitleg",
  title: "Slimme sensoren uitgelegd: soorten, toepassingen & tips – 2026",
  description:
    "Wat zijn slimme sensoren en wat kun je ermee? Uitleg over bewegings-, deur-, temperatuur- en andere sensoren voor beveiliging, comfort en energiebesparing.",
  image: "/images/tips/slimme-sensoren-uitleg.png",
  category: "Beveiliging & sensoren",
  available: true,

  related: [
    "slim-huis-beveiligen",
    "beginnen-met-smart-home",
    "slimme-camera-uitleg",
    "slimme-deurbel-uitleg",
    "privacy-en-veiligheid-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat zijn slimme sensoren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme sensoren meten beweging, temperatuur, contact of andere gebeurtenissen en sturen deze informatie automatisch naar je smart home systeem.",
        },
      },
      {
        "@type": "Question",
        name: "Waarvoor gebruik je slimme sensoren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme sensoren worden gebruikt voor beveiliging, automatiseringen, energiebesparing en extra comfort in huis.",
        },
      },
      {
        "@type": "Question",
        name: "Werken slimme sensoren op wifi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sommige wel, maar de meeste slimme sensoren werken via Zigbee, Z-Wave of Thread omdat dit energiezuiniger en stabieler is.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/slim-huis-beveiligen">
          Slim huis beveiligen
        </Link>{" "}
        •{" "}
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home
        </Link>
      </p>

      <p className="section-intro">
        Slimme sensoren maken een smart home écht slim. Ze zorgen ervoor dat
        apparaten automatisch reageren op wat er gebeurt in huis. In dit
        artikel lees je welke soorten sensoren er zijn en hoe je ze gebruikt.
      </p>

      <h2>Wat doen slimme sensoren?</h2>
      <p>
        Slimme sensoren meten gebeurtenissen en sturen die informatie door
        naar je smart home systeem.
      </p>

      <ul>
        <li>detecteren beweging of aanwezigheid</li>
        <li>meten temperatuur en luchtvochtigheid</li>
        <li>zien of een deur of raam open staat</li>
        <li>signaleren trillingen of waterlekken</li>
      </ul>

      <h2>Veelgebruikte soorten slimme sensoren</h2>

      <h3>Bewegings- & aanwezigheidssensoren</h3>
      <p>
        Deze sensoren detecteren beweging of aanwezigheid en worden vaak
        gebruikt voor verlichting en beveiliging.
      </p>

      <ul>
        <li>licht automatisch aan bij beweging</li>
        <li>melding bij onverwachte beweging</li>
        <li>energie besparen door licht automatisch uit</li>
      </ul>

      <h3>Deur- & raamsensoren</h3>
      <p>
        Contactsensoren laten weten of een deur of raam open of dicht is.
      </p>

      <ul>
        <li>melding bij openen van deur of raam</li>
        <li>alarm bij ongewenste toegang</li>
        <li>verwarming uit bij open raam</li>
      </ul>

      <h3>Temperatuur- & luchtvochtigheidssensoren</h3>
      <p>
        Deze sensoren meten het binnenklimaat en helpen bij comfort en
        energiebesparing.
      </p>

      <ul>
        <li>slimme thermostaat aansturen</li>
        <li>ventilatie automatisch inschakelen</li>
        <li>schimmelvorming voorkomen</li>
      </ul>

      <h3>Waterlek- & trillingssensoren</h3>
      <p>
        Minder bekend, maar erg waardevol voor schadepreventie.
      </p>

      <ul>
        <li>melding bij lekkage</li>
        <li>detectie van trillingen of sabotage</li>
        <li>extra beveiliging voor ramen en deuren</li>
      </ul>

      <h2>Wifi vs Zigbee sensoren</h2>
      <p>
        De meeste sensoren werken niet via wifi, maar via energiezuinige
        protocollen zoals Zigbee.
      </p>

      <ul>
        <li>langere batterijduur (vaak 1–2 jaar)</li>
        <li>betere stabiliteit</li>
        <li>snellere reacties</li>
      </ul>

      <p>
        Hiervoor heb je meestal een hub nodig.{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          Wat doet een smart home hub?
        </Link>
      </p>

      <h2>Automatiseringen met sensoren</h2>
      <ul>
        <li>licht aan bij beweging na zonsondergang</li>
        <li>verwarming lager als niemand thuis is</li>
        <li>melding bij open raam tijdens regen</li>
      </ul>

      <h2>Conclusie</h2>
      <p>
        Slimme sensoren zijn de basis van een goed smart home. Ze zorgen voor
        comfort, veiligheid en energiebesparing — zonder dat je er continu
        over hoeft na te denken.
      </p>
    </>
  ),
},

  // ✅ Verlichting
  {
  slug: "wat-is-slimme-verlichting",
  title: "Wat is slimme verlichting? (uitleg + wifi vs Zigbee) – 2026",
  description:
    "Wat is slimme verlichting en hoe werkt het? Leer het verschil tussen wifi en Zigbee, wanneer je een hub nodig hebt en hoe je slim start met automatiseringen.",
  image:
    "/images/Tips%20%26%20uitleg/Wat%20is%20slimme%20verlichting.png",
  category: "Slimme verlichting",
  available: true,

  related: [
    "beginnen-met-slimme-verlichting",
    "slimme-verlichting-werkt-niet-na-stroomuitval",
    "slimme-lamp-werkt-niet-met-schakelaar",
    "wat-is-een-smart-home-hub",
    "energie-besparen-met-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme verlichting is verlichting die je bedient via een app, schema’s, automatiseringen of spraak. Je kunt lampen op afstand aan- en uitzetten, dimmen, kleuren aanpassen en routines instellen.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe werkt slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme verlichting werkt via wifi of via een hub/bridge (vaak Zigbee). Wifi-lampen verbinden direct met je router, terwijl Zigbee-lampen via een hub werken en meestal stabieler zijn.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig voor slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Voor eenvoudige wifi-verlichting is geen hub nodig. Bij meerdere lampen, automatiseringen of het combineren van merken is een hub meestal aan te raden.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: wifi of Zigbee verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wifi is makkelijk om mee te starten. Zigbee is vaak stabieler, schaalbaarder en beter geschikt voor grotere installaties en automatiseringen.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/beginnen-met-slimme-verlichting">
          Beginnen met slimme verlichting
        </Link>{" "}
        •{" "}
        <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
          Problemen na stroomuitval
        </Link>
      </p>

      <p className="section-intro">
        Slimme verlichting is verlichting die je niet alleen met een
        wandschakelaar bedient, maar ook via een app, schema’s,
        automatiseringen of spraak. Voor veel mensen is dit de eerste stap
        richting een slim huis.
      </p>

      <h2>Wat maakt verlichting “slim”?</h2>
      <p>
        Slimme verlichting is verbonden met internet of een hub. Daardoor
        kun je lampen automatisch laten reageren op tijd, beweging of andere
        slimme apparaten.
      </p>

      <ul>
        <li>aan- en uitzetten via een app</li>
        <li>timers en schema’s instellen</li>
        <li>dimmen of kleuren aanpassen</li>
        <li>automatisch reageren op tijdstip of beweging</li>
      </ul>

      <h2>Hoe werkt slimme verlichting?</h2>
      <p>
        Er zijn twee veelgebruikte manieren waarop slimme verlichting werkt.
      </p>

      <h3>Wifi-verlichting</h3>
      <p>
        Wifi-lampen verbinden direct met je router. Ze zijn eenvoudig om mee
        te beginnen, maar kunnen bij veel apparaten instabiel worden.
      </p>

      <p>
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je wifi voor smart home
        </Link>.
      </p>

      <h3>Verlichting met hub (Zigbee)</h3>
      <p>
        Systemen zoals Philips Hue en Aqara werken via een hub of bridge.
        Dit is meestal stabieler en beter geschikt voor automatiseringen.
      </p>

      <p>
        <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
      </p>

      <h2>Heb je altijd een hub nodig?</h2>
      <p>
        Nee. Voor eenvoudige toepassingen kun je zonder hub starten.
        Voor uitbreidingen en automatiseringen is een hub vaak slimmer.
      </p>

      <p>
        <Link href="/tips/wat-is-een-smart-home-hub">
          Wat doet een smart home hub precies?
        </Link>
      </p>

      <p>
        <Link href="/tips/energie-besparen-met-smart-home">
          Zo bespaar je energie met een smart home
        </Link>.
      </p>

      <h2>Veelgemaakte beginnersfout</h2>
      <p>
        Slimme lampen hebben continu stroom nodig. Zet je ze uit via de
        schakelaar, dan lijken ze offline.
      </p>

      <p>
        <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
          Daarom werken slimme lampen niet goed met een schakelaar
        </Link>.
      </p>

      <h2>Conclusie</h2>
      <p>
        Slimme verlichting is een laagdrempelige manier om je huis slimmer
        te maken. Wifi is ideaal om te starten, Zigbee met hub is beter voor
        uitbreiden en automatiseren.
      </p>

      <p>
        <Link href="/tips/beginnen-met-slimme-verlichting">
          Volg het stappenplan voor slimme verlichting →
        </Link>
      </p>
    </>
  ),
},
  {
  slug: "beginnen-met-slimme-verlichting",
  title: "Beginnen met slimme verlichting – stap voor stap uitgelegd",
  description:
    "Wil je beginnen met slimme verlichting? Volg deze stap-voor-stap gids: welke lampen kies je, wifi of Zigbee, heb je een hub nodig en hoe voorkom je beginnersfouten.",
  image: "/images/tips/beginnen-met-slimme-verlichting.png",
  category: "Slimme verlichting",
  available: true,

  related: [
    "wat-is-slimme-verlichting",
    "slimme-verlichting-werkt-niet-na-stroomuitval",
    "slimme-lamp-werkt-niet-met-schakelaar",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat heb je nodig om te starten met slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je hebt minimaal één slimme lamp of slimme stekker nodig plus een app. Sommige systemen werken via wifi, andere via een bridge of hub zoals de Philips Hue Bridge.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een hub nodig voor slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Wifi-lampen werken zonder hub. Een hub is wel aan te raden als je meerdere lampen gebruikt of wilt automatiseren.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is beter: wifi of Zigbee verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wifi is eenvoudig om mee te starten. Zigbee is meestal stabieler, energiezuiniger en beter schaalbaar voor grotere smart home setups.",
        },
      },
      {
        "@type": "Question",
        name: "Wat zijn veelgemaakte beginnersfouten bij slimme verlichting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veelgemaakte fouten zijn alles tegelijk willen kopen, geen rekening houden met wifi-bereik, merken mixen zonder hub en te complexe automatiseringen instellen.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="section-intro">
        Slimme verlichting is één van de makkelijkste manieren om je huis
        slimmer te maken. Toch gaat het bij beginners vaak mis door verkeerde
        keuzes, slechte wifi of lampen die niet meer reageren. In deze gids
        leer je stap voor stap hoe je goed begint — zonder frustratie.
      </p>

      <h2>Waarom kiezen voor slimme verlichting?</h2>
      <p>
        Slimme verlichting biedt veel meer dan alleen bediening via je
        telefoon. Het verhoogt comfort, verbetert de sfeer en is vaak de
        eerste stap richting een volledig smart home.
      </p>

      <ul>
        <li>Verlichting automatisch aan en uit</li>
        <li>Licht dat meebeweegt met zonsopkomst en zonsondergang</li>
        <li>De juiste sfeer voor elk moment</li>
        <li>Ideale instap in smart home automatisering</li>
      </ul>

      <h2>Welke slimme verlichting past bij jou?</h2>
      <p>
        Niet iedereen heeft dezelfde wensen. Daarom is het belangrijk om
        vooraf te bepalen wat je verwacht van slimme verlichting.
      </p>

      <h3>Simpel gemak (aan/uit en timers)</h3>
      <p>
        Wil je vooral gemak? Dan zijn wifi-lampen of slimme stekkers een
        prima start. Ze werken zonder hub en zijn snel geïnstalleerd.
      </p>

      <h3>Sfeer en dimmen</h3>
      <p>
        Met dimbaar en instelbaar wit licht pas je de sfeer aan per moment
        van de dag. Ideaal voor woonkamers en slaapkamers.
      </p>

      <h3>Kleur en automatiseringen</h3>
      <p>
        Wil je meer mogelijkheden? Slimme lampen met kleur bieden extra
        beleving en werken perfect samen met scènes en automatiseringen.
      </p>

      <h2>Stap-voor-stap starten met slimme verlichting</h2>

      <h3>Stap 1: Begin met één ruimte</h3>
      <p>
        Start klein, bijvoorbeeld in de woonkamer of hal. Zo houd je
        overzicht en voorkom je onnodige kosten.
      </p>

      <h3>Stap 2: Kies wifi of Zigbee</h3>
      <p>
        Wifi is eenvoudig om mee te starten. Zigbee werkt via een hub,
        maar is stabieler als je meerdere lampen gebruikt.{" "}
        <Link href="/tips/wat-is-zigbee">Lees hier wat Zigbee is</Link>.
      </p>

      <h3>Stap 3: Installeer app of bridge</h3>
      <p>
        Volg de stappen in de app van de fabrikant. Gebruik je Philips Hue?
        Dan is de Hue Bridge sterk aan te raden voor stabiliteit.
      </p>

      <h3>Stap 4: Maak je eerste automatisering</h3>
      <p>
        Stel bijvoorbeeld in dat het licht automatisch aangaat bij
        zonsondergang. Dit is waar slimme verlichting echt handig wordt.
      </p>

      <h3>Stap 5: Breid rustig uit</h3>
      <p>
        Voeg later extra lampen, schakelaars of sensoren toe. Zo groeit je
        smart home mee met je ervaring.
      </p>

      <h2>Veelgemaakte beginnersfouten</h2>
      <ul>
        <li>Alles tegelijk willen kopen</li>
        <li>Wifi-bereik onderschatten</li>
        <li>Merken combineren zonder centrale hub</li>
        <li>Te complexe automatiseringen maken</li>
      </ul>

      <p>
        Zeker bij wifi-lampen is een stabiele 2.4 GHz verbinding cruciaal.{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je je wifi voor smart home
        </Link>.
      </p>

      <h2>Aanbevolen producten voor beginners</h2>
      <ul>
        <li>
          <Link href="/producten/philips-hue-white-ambiance-starterkit">
            Philips Hue White Ambiance Starterkit
          </Link>{" "}
          – stabiele en uitbreidbare start
        </li>
        <li>
          <Link href="/producten/tp-link-tapo-p110-slimme-stekker">
            TP-Link Tapo P110 slimme stekker
          </Link>{" "}
          – betaalbaar en eenvoudig
        </li>
      </ul>
    </>
  ),
},

  // ✅ Starten
  {
  slug: "beginnen-met-smart-home",
  title: "Beginnen met smart home – 5 stappen voor beginners (2026)",
  description:
    "Wil je beginnen met een smart home? Volg deze 5 duidelijke stappen en voorkom beginnersfouten. Inclusief tips over hubs, wifi, Zigbee en slimme verlichting.",
  image:
    "/images/tips/Beginnen%20met%20smart%20home%20in%205%20stappen.png",
  category: "Beginnen",
  available: true,

  related: [
    "beginnen-met-slimme-verlichting",
    "wat-is-een-smart-home-hub",
    "slim-huis-zonder-hub",
    "wifi-verbeteren-voor-smart-home",
    "energie-besparen-met-smart-home",
    "merken-combineren-zonder-gedoe",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hoe begin je met een smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Begin met één slim apparaat, zoals een slimme lamp of stekker. Kies daarna een ecosysteem, maak eenvoudige automatiseringen en breid pas uit als je weet wat je mist.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig om te starten met smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Met wifi-producten kun je zonder hub starten. Een hub wordt vooral handig als je meerdere merken wilt combineren of met sensoren werkt.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is de makkelijkste start voor beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Slimme verlichting is voor veel mensen de makkelijkste start. Het is eenvoudig te installeren en laat direct het voordeel van een smart home zien.",
        },
      },
      {
        "@type": "Question",
        name: "Wat kost een smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je kunt al starten vanaf €10–€30 met één apparaat. Met meerdere producten zit je vaak rond €50–€150. Een uitgebreid systeem met hub en sensoren kost meestal €200 of meer.",
        },
      },
    ],
  },

  content: (
    <>
      {/* ✅ Pillar links (zelfde patroon als je pagina’s) */}
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Populaire onderwerpen:{" "}
        <Link href="/tips/beginnen-met-slimme-verlichting">
          Slimme verlichting
        </Link>{" "}
        • <Link href="/tips/wat-is-een-smart-home-hub">Smart home hub</Link> •{" "}
        <Link href="/blog/wat-is-zigbee">Zigbee uitleg</Link>
      </p>

      <p className="section-intro">
        Een smart home hoeft niet ingewikkeld of duur te zijn. Toch lopen veel
        beginners vast door verkeerde keuzes. In deze gids leer je stap voor
        stap hoe je slim begint — zonder frustratie.
      </p>

      <h2>Stap 1: Begin klein</h2>
      <p>
        De grootste beginnersfout is alles tegelijk willen. Begin met één slim
        apparaat en ontdek wat je écht handig vindt.
      </p>

      <ul>
        <li>een slimme lamp</li>
        <li>een slimme stekker</li>
        <li>een eenvoudige sensor</li>
      </ul>

      <p>
        Slimme verlichting is voor de meeste mensen de makkelijkste start.{" "}
        <Link href="/tips/beginnen-met-slimme-verlichting">
          Zo begin je met slimme verlichting
        </Link>
        .
      </p>

      <h2>Stap 2: Kies één ecosysteem</h2>
      <p>
        Elk smart home werkt met een app of platform. Door één ecosysteem te
        kiezen, voorkom je dubbele apps en verwarring.
      </p>

      <ul>
        <li>Philips Hue – sterk in verlichting</li>
        <li>TP-Link Tapo – betaalbaar en werkt via wifi</li>
        <li>Aqara – ideaal voor sensoren en automatiseringen</li>
      </ul>

      <p>
        Twijfel je over een hub?{" "}
        <Link href="/tips/slim-huis-zonder-hub">
          Wanneer heb je wel of geen hub nodig?
        </Link>
      </p>

      <h2>Stap 3: Denk na over automatiseringen</h2>
      <p>Een smart home is pas écht slim als dingen automatisch gebeuren.</p>

      <ul>
        <li>licht automatisch aan bij zonsondergang</li>
        <li>licht aan bij beweging</li>
        <li>alles uit wanneer je het huis verlaat</li>
      </ul>

      <p>
        Automatiseringen werken het beste als merken goed samenwerken.{" "}
        <Link href="/tips/merken-combineren-zonder-gedoe">
          Zo combineer je merken zonder gedoe
        </Link>
        .
      </p>

      <p>
        Door automatiseringen slim in te zetten kun je niet alleen comfort
        verhogen, maar ook energie besparen. Denk aan verwarming die automatisch
        lager gaat of apparaten die vanzelf uitschakelen.{" "}
        <Link href="/tips/energie-besparen-met-smart-home">
          Zo bespaar je energie met een smart home
        </Link>
        .
      </p>

      <h2>Stap 4: Breid rustig uit</h2>
      <p>Pas als je weet wat je mist, ga je uitbreiden.</p>

      <ul>
        <li>extra slimme lampen</li>
        <li>bewegings- of contactsensoren</li>
        <li>slimme stekkers voor bestaande apparaten</li>
      </ul>

      <h2>Stap 5: Maak het gebruiksvriendelijk</h2>
      <p>
        Een smart home moet je leven makkelijker maken — niet ingewikkelder.
      </p>

      <ul>
        <li>gebruik vaste schema’s</li>
        <li>maak duidelijke scènes (zoals ‘thuis’ en ‘weg’)</li>
        <li>zorg dat fysieke schakelaars blijven werken</li>
      </ul>

      <h3>Let op: je wifi bepaalt je ervaring</h3>
      <p>
        Zeker bij wifi-producten is je netwerk cruciaal.{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je wifi voor smart home
        </Link>
        .
      </p>

      <h2>Wat kost een smart home?</h2>
      <ul>
        <li>startproduct: €10 – €30</li>
        <li>meerdere apparaten: €50 – €150</li>
        <li>uitgebreid systeem: €200+</li>
      </ul>

      <h2>Aanbevolen producten om te starten</h2>
      <ul>
        <li>
          <Link href="/producten/philips-hue-white-ambiance-starterkit">
            Philips Hue White Ambiance Starterkit
          </Link>{" "}
          – complete start met slimme verlichting
        </li>
        <li>
          <Link href="/producten/tp-link-tapo-p110-slimme-stekker">
            TP-Link Tapo P110 slimme stekker
          </Link>{" "}
          – goedkoop starten zonder hub
        </li>
      </ul>

      <h2>Conclusie</h2>
      <p>
        Door klein te beginnen en stap voor stap uit te breiden, bouw je een
        smart home dat écht bij je past.
      </p>
    </>
  ),
},
  {
  slug: "merken-combineren-zonder-gedoe",
  title: "Smart home merken combineren zonder gedoe (Hue, Aqara, Tapo) – 2026",
  description:
    "Verschillende smart home merken combineren zoals Philips Hue, Aqara, IKEA Tradfri en TP-Link Tapo? Zo laat je alles samenwerken via één app, met of zonder hub.",
  image: "/images/tips/merken-combineren.png",
  category: "Smart home basis",
  available: true,

  related: [
    "beginnen-met-smart-home",
    "wat-is-een-smart-home-hub",
    "slim-huis-zonder-hub",
    "energie-besparen-met-smart-home",
    "beginnen-met-slimme-verlichting",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kun je smart home merken combineren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, je kunt smart home merken prima combineren. De beste manier is om alles samen te brengen via één centrale hub zodat apparaten van verschillende merken samenwerken.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een hub nodig om merken te combineren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Met alleen wifi-producten kun je zonder hub werken, maar voor echte merk-combinaties met gezamenlijke automatiseringen is een hub meestal de beste keuze.",
        },
      },
      {
        "@type": "Question",
        name: "Welke smart home merken werken goed samen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Merken zoals Philips Hue, Aqara, IKEA Tradfri en TP-Link Tapo zijn goed te combineren, vooral via een centrale hub of platform.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom is Zigbee handig bij merken combineren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zigbee is een stabiel smart home protocol dat apparaten laat samenwerken in een mesh-netwerk en vaak betrouwbaarder is dan wifi bij meerdere apparaten.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home
        </Link>{" "}
        •{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          Smart home hubs
        </Link>
      </p>

      <p className="section-intro">
        Veel mensen denken dat je vastzit aan één smart home merk. In de
        praktijk werkt dat vaak juist beperkend. In deze gids laten we zien hoe
        je verschillende merken slim combineert — zonder frustratie, dubbele
        apps of instabiele automatiseringen.
      </p>

      <h2>Waarom meerdere smart home merken combineren?</h2>
      <p>
        Elk merk blinkt uit in iets anders. Door slim te combineren haal je het
        beste uit meerdere ecosystemen.
      </p>

      <ul>
        <li>Philips Hue → uitstekende slimme verlichting</li>
        <li>Aqara → sterke sensoren en automatiseringen</li>
        <li>TP-Link Tapo → betaalbaar en eenvoudig via wifi</li>
        <li>IKEA Tradfri → goede prijs-kwaliteit via Zigbee</li>
      </ul>

      <h2>De grootste valkuil: alles los gebruiken</h2>
      <p>
        Problemen ontstaan wanneer elk merk in zijn eigen app blijft draaien.
      </p>

      <ul>
        <li>te veel apps</li>
        <li>geen gezamenlijke automatiseringen</li>
        <li>meer onderhoud en verwarring</li>
      </ul>

      <p>
        De oplossing is simpel: zorg voor één centrale plek waar alles
        samenkomt.
      </p>

      <h2>Oplossing 1: Merken combineren zonder hub</h2>
      <p>
        Voor een eenvoudige setup kun je prima zonder hub werken zolang je het
        beperkt houdt.
      </p>

      <ul>
        <li>wifi-producten (zoals Tapo)</li>
        <li>automatiseringen binnen één merk</li>
        <li>bediening via Google Assistant of Alexa</li>
      </ul>

      <p>
        <Link href="/tips/slim-huis-zonder-hub">
          Wanneer heb je geen hub nodig?
        </Link>
      </p>

      <h2>Oplossing 2: Alles samenbrengen met een smart home hub</h2>
      <p>
        Wil je merken écht laten samenwerken? Dan is een hub de beste keuze.
      </p>

      <ul>
        <li>licht aan bij beweging</li>
        <li>alles uit bij vertrek</li>
        <li>meerdere merken in één automatisering</li>
      </ul>

      <p>
        <Link href="/tips/wat-is-een-smart-home-hub">
          Wat is een smart home hub?
        </Link>
      </p>

      <h3>Waarom Zigbee combineren makkelijker maakt</h3>
      <p>
        Veel apparaten van Hue, IKEA en Aqara werken via Zigbee.{" "}
        <Link href="/blog/wat-is-zigbee">
          Lees hier wat Zigbee is
        </Link>.
      </p>

      <h2>Voorbeeld: slim combineren in de praktijk</h2>
      <ul>
        <li>Philips Hue lampen in de woonkamer</li>
        <li>Aqara bewegingssensor in de gang</li>
        <li>TP-Link Tapo stekker voor een staande lamp</li>
      </ul>

      <p>Met een hub kun je instellen:</p>
      <ul>
        <li>beweging → Hue lampen aan</li>
        <li>geen beweging → alles uit</li>
        <li>avond → warme lichtkleur</li>
      </ul>

      <h2>Wanneer merken combineren geen goed idee is</h2>
      <ul>
        <li>als je alleen verlichting gebruikt</li>
        <li>als je geen automatiseringen wilt</li>
        <li>als eenvoud belangrijker is dan flexibiliteit</li>
      </ul>

      <h2>Conclusie</h2>
      <p>
        Smart home merken combineren hoeft geen gedoe te zijn. Begin eenvoudig,
        kies een duidelijke basis en breid alleen uit wanneer je weet wat je
        mist.
      </p>

      <p>
        <Link href="/tips/beginnen-met-smart-home">
          Bekijk onze 5 stappen om met smart home te starten
        </Link>.
      </p>
    </>
  ),
},
 {
  slug: "slim-huis-zonder-hub",
  title: "Slim huis zonder hub: kan dat? (voor- en nadelen) – 2026",
  description:
    "Een slim huis zonder hub is mogelijk met wifi-apparaten zoals slimme stekkers en lampen. Ontdek wanneer dit goed werkt, wat de nadelen zijn en wanneer een hub slimmer is.",
  image: "/images/tips/slim-huis-zonder-hub.png",
  category: "Smart home basis",
  available: true,

  related: [
    "beginnen-met-smart-home",
    "wat-is-een-smart-home-hub",
    "merken-combineren-zonder-gedoe",
    "wifi-verbeteren-voor-smart-home",
    "energie-besparen-met-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kun je een slim huis maken zonder hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Veel smart home apparaten werken direct via wifi en hebben geen aparte hub nodig. Dit is vooral geschikt als je klein begint met een paar apparaten.",
        },
      },
      {
        "@type": "Question",
        name: "Wat zijn de nadelen van een slim huis zonder hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zonder hub ben je afhankelijk van wifi en cloud. Bij veel apparaten kan het minder stabiel worden en zijn automatiseringen vaak beperkter.",
        },
      },
      {
        "@type": "Question",
        name: "Wanneer is een hub wél aan te raden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een hub is handig als je meerdere merken wilt combineren, met sensoren wilt automatiseren of een stabieler systeem wilt dat lokaal werkt.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van{" "}
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home
        </Link>{" "}
        •{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          Smart home hubs
        </Link>
      </p>

      <p className="section-intro">
        Twijfel je of je meteen een smart home hub nodig hebt? Goed nieuws:
        een slim huis zonder hub is zeker mogelijk. Vooral voor beginners
        kan dit een eenvoudige en betaalbare start zijn.
      </p>

      <h2>Hoe werkt een slim huis zonder hub?</h2>
      <p>
        In een smart home zonder hub verbindt elk apparaat rechtstreeks met
        je wifi-netwerk. Je bedient ze via een losse app of via platforms
        zoals Google Home of Alexa.
      </p>

      <p>Voorbeelden van apparaten die vaak zonder hub werken:</p>
      <ul>
        <li>wifi-lampen (zoals TP-Link Tapo)</li>
        <li>slimme stekkers</li>
        <li>slimme camera’s</li>
        <li>deurbellen met eigen app</li>
      </ul>

      <h3>Let op: wifi is dan extra belangrijk</h3>
      <p>
        Omdat alles via wifi werkt, is een stabiel netwerk cruciaal. Heb je
        vaak offline apparaten of verbindingsproblemen?{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je wifi voor smart home
        </Link>.
      </p>

      <h2>Wanneer werkt een slim huis zonder hub goed?</h2>
      <ul>
        <li>je gebruikt maar een paar slimme apparaten</li>
        <li>je wilt eenvoudige aan/uit-functies</li>
        <li>je gebruikt één merk of één app</li>
        <li>je wilt goedkoop en snel starten</li>
      </ul>

      <h2>Voordelen van een slim huis zonder hub</h2>
      <ul>
        <li>lage instapkosten</li>
        <li>geen extra hardware nodig</li>
        <li>eenvoudige installatie</li>
        <li>ideaal voor beginners</li>
      </ul>

      <h2>Nadelen van een slim huis zonder hub</h2>
      <ul>
        <li>minder stabiel bij veel apparaten</li>
        <li>beperkte automatiseringen</li>
        <li>meerdere apps nodig bij verschillende merken</li>
        <li>afhankelijk van wifi en cloud</li>
      </ul>

      <h2>Wanneer is een hub wél slim?</h2>
      <p>
        Zodra je meer wilt dan alleen losse apparaten, wordt een hub
        interessant.
      </p>

      <p>
        👉{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          Wat doet een smart home hub precies?
        </Link>
      </p>

      <p>
        <Link href="/tips/merken-combineren-zonder-gedoe">
          Merken combineren zonder gedoe
        </Link>.
      </p>

      <h2>Conclusie</h2>
      <p>
        Een slim huis zonder hub is een prima startpunt. Het is betaalbaar,
        eenvoudig en laagdrempelig.
      </p>

      <p>
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home in 5 stappen →
        </Link>
      </p>
    </>
  )
},

  // ✅ Problemen
  {
  slug: "slimme-verlichting-werkt-niet-na-stroomuitval",
  title:
    "Slimme verlichting werkt niet na stroomuitval? Oplossing in 5 stappen – 2026",
  description:
    "Werkt je slimme verlichting niet meer na stroomuitval? Lampen offline of automatiseringen weg? Volg deze 5 stappen om het direct op te lossen en problemen te voorkomen.",
  image:
    "/images/Tips%20%26%20uitleg/Slimme%20verlichting%20werkt%20niet%20na%20stroomuitval.png",
  category: "Slimme verlichting",
  available: true,

  related: [
    "beginnen-met-slimme-verlichting",
    "wat-is-slimme-verlichting",
    "slimme-lamp-werkt-niet-met-schakelaar",
    "wifi-verbeteren-voor-smart-home",
    "wifi-bereik-verbeteren-zonder-nieuwe-router",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom werkt slimme verlichting niet meer na stroomuitval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Na een stroomuitval starten slimme lampen vaak sneller op dan je router of hub. Daardoor raken ze tijdelijk de verbinding kwijt en reageren ze niet meer via app of automatiseringen.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe krijg ik slimme lampen weer online na stroomuitval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wacht tot modem, router en hub volledig zijn opgestart. Zet daarna de lamp één keer uit en aan, ververs de app en herstart als laatste stap de hub.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe voorkom je problemen met slimme verlichting na stroomstoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gebruik bij voorkeur een hub, laat wandschakelaars aan staan, zorg voor stabiele wifi en werk met scènes en automatiseringen.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/wat-is-slimme-verlichting">
          Slimme verlichting
        </Link>{" "}
        •{" "}
        <Link href="/tips/beginnen-met-slimme-verlichting">
          Beginnen met slimme verlichting
        </Link>
      </p>

      <p className="section-intro">
        Na een stroomuitval kan slimme verlichting ineens offline zijn.
        Lampen reageren niet meer, automatiseringen stoppen en de app lijkt
        niets meer te doen. Gelukkig is dit meestal snel en eenvoudig op te
        lossen.
      </p>

      <h2>Waarom gebeurt dit?</h2>
      <ul>
        <li>lampen starten sneller op dan modem en router</li>
        <li>wifi- of Zigbee-verbinding raakt tijdelijk kwijt</li>
        <li>de hub heeft tijd nodig om opnieuw te verbinden</li>
        <li>het netwerk is nog niet volledig beschikbaar</li>
      </ul>

      <h2>Oplossing: zo los je het stap voor stap op</h2>
      <ol>
        <li>
          <strong>Wacht 2–5 minuten</strong> tot modem en router volledig
          zijn opgestart.
        </li>
        <li>
          <strong>Controleer of je hub online is</strong> (zoals Hue Bridge
          of Homey).
        </li>
        <li>
          <strong>Zet de lamp één keer uit en aan</strong> via app of stekker.
        </li>
        <li>
          <strong>Ververs de app</strong> en laat apparaten opnieuw verbinden.
        </li>
        <li>
          <strong>Herstart de hub als laatste stap</strong>.
        </li>
      </ol>

      <p>
        In de meeste gevallen werkt je verlichting hierna weer normaal.
        Stonden lampen uit via een wandschakelaar? Zorg dan dat deze{" "}
        <strong>permanent aan</strong> blijft.
      </p>

      <h3>Problemen met schakelaars?</h3>
      <p>
        Slimme lampen hebben continu stroom nodig.{" "}
        <Link href="/tips/slimme-lamp-werkt-niet-met-schakelaar">
          Daarom werken slimme lampen niet goed met een schakelaar
        </Link>
        .
      </p>

      <h2>Zo voorkom je problemen bij een volgende stroomstoring</h2>
      <ul>
        <li>gebruik een <strong>hub-gebaseerd systeem</strong> (stabieler)</li>
        <li>laat wandschakelaars altijd aan</li>
        <li>werk met scènes en automatiseringen</li>
        <li>zorg voor stabiele 2.4 GHz wifi of mesh</li>
      </ul>

      <h3>Gebruik je wifi-lampen?</h3>
      <p>
        Dan is je netwerk extra belangrijk.{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je wifi voor smart home
        </Link>{" "}
        of{" "}
        <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
          verbeter je bereik zonder nieuwe router
        </Link>
        .
      </p>

      <p>
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home in 5 stappen →
        </Link>
      </p>
    </>
  ),
},
  {
  slug: "slimme-lamp-werkt-niet-met-schakelaar",
  title:
    "Slimme lamp werkt niet met schakelaar? Dit is waarom (+ oplossingen) – 2026",
  description:
    "Werkt je slimme lamp niet meer na gebruik van de wandschakelaar? Dat is normaal. Slimme lampen hebben continu stroom nodig. Dit zijn de beste oplossingen.",
  image:
    "/images/Tips%20%26%20uitleg/Slimme%20lamp%20werkt%20niet%20met%20schakelaar.png",
  category: "Slimme verlichting",
  available: true,

  related: [
    "beginnen-met-slimme-verlichting",
    "wat-is-slimme-verlichting",
    "slimme-verlichting-werkt-niet-na-stroomuitval",
    "wifi-verbeteren-voor-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom werkt een slimme lamp niet met de wandschakelaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Omdat een slimme lamp continu stroom nodig heeft om bereikbaar te blijven via app, spraakbediening en automatiseringen. Als je de schakelaar uitzet, krijgt de lamp geen stroom en lijkt hij offline.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is de beste oplossing voor slimme lampen met schakelaars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Laat de schakelaar altijd aan en gebruik een slimme schakelaar, draadloze knop of dimmer. Zo blijft de lamp online en heb je toch fysieke bediening.",
        },
      },
      {
        "@type": "Question",
        name: "Kan een slimme lamp kapot gaan door de schakelaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. De lamp lijkt kapot omdat hij geen stroom krijgt en daardoor offline is. Zodra de schakelaar weer aan staat, werkt de lamp meestal weer normaal.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/beginnen-met-slimme-verlichting">
          Slimme verlichting starten
        </Link>{" "}
        •{" "}
        <Link href="/tips/wat-is-slimme-verlichting">
          Wat is slimme verlichting?
        </Link>
      </p>

      <p className="section-intro">
        Reageert je slimme lamp niet meer nadat iemand de wandschakelaar
        heeft gebruikt? Geen paniek — dit is normaal gedrag bij slimme
        verlichting en gelukkig eenvoudig op te lossen.
      </p>

      <h2>Kort antwoord: dit is de reden</h2>
      <p>
        <strong>Slimme lampen hebben continu stroom nodig</strong> om online
        te blijven. Zodra je de wandschakelaar uitzet, krijgt de lamp geen
        stroom meer en is hij niet bereikbaar via app, spraak of
        automatiseringen.
      </p>

      <h2>Waarom gebeurt dit?</h2>
      <p>
        Een slimme lamp is in feite een klein smart apparaat met een
        wifi- of Zigbee-verbinding. Zonder stroom kan hij geen verbinding
        houden met je netwerk of hub.
      </p>

      <p>Als de schakelaar uit staat:</p>
      <ul>
        <li>verdwijnt de lamp uit de app</li>
        <li>werken automatiseringen niet meer</li>
        <li>reageert spraakbediening niet</li>
        <li>lijkt de lamp kapot (maar dat is hij niet)</li>
      </ul>

      <h3>Extra verwarrend: na stroomuitval</h3>
      <p>
        Na een stroomstoring kunnen slimme lampen ook tijdelijk offline
        zijn.{" "}
        <Link href="/tips/slimme-verlichting-werkt-niet-na-stroomuitval">
          Zo los je problemen na stroomuitval op
        </Link>.
      </p>

      <h2>De beste oplossingen</h2>
      <ul>
        <li>
          <strong>Laat de wandschakelaar altijd aan</strong>
        </li>
        <li>
          <strong>Gebruik een slimme schakelaar</strong> die de lamp slim
          bedient zonder de stroom te onderbreken
        </li>
        <li>
          <strong>Draadloze knoppen of dimmers gebruiken</strong>
        </li>
        <li>
          <strong>Werk met scènes en automatiseringen</strong>
        </li>
      </ul>

      <h2>Wat werkt in de praktijk het beste?</h2>
      <p>
        Voor de meeste huishoudens werkt deze combinatie het fijnst:
        slimme lampen + vaste stroom + een draadloze knop of slimme
        schakelaar.
      </p>

      <p>
        Twijfel je nog?{" "}
        <Link href="/tips/beginnen-met-slimme-verlichting">
          Bekijk onze stap-voor-stap gids voor slimme verlichting
        </Link>.
      </p>
    </>
  ),
},

  // ✅ Hubs
  {
  slug: "wat-is-een-smart-home-hub",
  title: "Wat is een smart home hub? (+ wanneer je er één nodig hebt) – 2026",
  description:
    "Wat is een smart home hub en heb je er één nodig? Lees wat een hub doet, het verschil met wifi en wanneer Homey, Home Assistant of Hue Bridge slim is.",
  image:
    "/images/Tips%20%26%20uitleg/Wat%20is%20een%20smart%20home%20hub.png",
  category: "Smart home basis",
  available: true,

  related: [
    "beginnen-met-smart-home",
    "merken-combineren-zonder-gedoe",
    "slim-huis-zonder-hub",
    "energie-besparen-met-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is een smart home hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een smart home hub is het centrale brein van een slim huis. Het verbindt apparaten van verschillende merken in één systeem, zodat ze samen kunnen automatiseren.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een smart home hub nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Met alleen wifi-producten of één merk kun je prima zonder hub starten. Een hub wordt vooral handig als je meerdere merken of sensoren wilt combineren.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom gebruiken veel smart home apparaten Zigbee of Z-Wave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zigbee en Z-Wave zijn energiezuinig en stabiel. Ze zijn ideaal voor sensoren en slimme schakelaars, maar vereisen meestal een hub om te werken.",
        },
      },
      {
        "@type": "Question",
        name: "Welke smart home hubs zijn populair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Populaire hubs zijn Homey, Home Assistant, Samsung SmartThings en de Philips Hue Bridge.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Onderdeel van:{" "}
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home
        </Link>{" "}
        •{" "}
        <Link href="/tips/merken-combineren-zonder-gedoe">
          Merken combineren
        </Link>
      </p>

      <p className="section-intro">
        Een smart home hub wordt vaak het brein van een slim huis genoemd.
        Maar heb je zo’n hub echt nodig? In dit artikel leggen we het
        eenvoudig en praktisch uit — zonder technisch gedoe.
      </p>

      <h2>Wat doet een smart home hub?</h2>
      <p>
        Een smart home hub verbindt slimme apparaten met elkaar in één
        centraal systeem. In plaats van losse apps per merk, beheer je
        alles vanuit één plek.
      </p>

      <ul>
        <li>verbindt apparaten van verschillende merken</li>
        <li>maakt automatiseringen en routines mogelijk</li>
        <li>zorgt voor stabielere, vaak lokale communicatie</li>
      </ul>

      <p>
        Wil je merken combineren zoals Hue, Aqara en Tapo?{" "}
        <Link href="/tips/merken-combineren-zonder-gedoe">
          Zo combineer je smart home merken zonder gedoe
        </Link>.
      </p>

      <h2>Waarom gebruiken veel merken een hub?</h2>
      <p>
        Veel slimme apparaten werken niet via wifi, maar via{" "}
        <strong>Zigbee</strong> of <strong>Z-Wave</strong>.
      </p>

      <ul>
        <li>energiezuinig (perfect voor sensoren op batterij)</li>
        <li>betrouwbaar en stabiel</li>
        <li>vaak sneller dan wifi</li>
      </ul>

      <p>
        Een hub is nodig om deze apparaten te koppelen.{" "}
        <Link href="/blog/wat-is-zigbee">Wat is Zigbee?</Link>
      </p>

      <h2>Voorbeelden van populaire smart home hubs</h2>
      <ul>
        <li>Philips Hue Bridge</li>
        <li>Homey</li>
        <li>Home Assistant</li>
        <li>Samsung SmartThings</li>
      </ul>

      <h2>Wanneer heb je géén hub nodig?</h2>
      <ul>
        <li>bij wifi-producten</li>
        <li>als je één merk gebruikt</li>
        <li>voor basis aan/uit functies</li>
      </ul>

      <p>
        Twijfel je?{" "}
        <Link href="/tips/slim-huis-zonder-hub">
          Zo werkt een slim huis zonder hub
        </Link>.
      </p>

      <h2>Wanneer is een hub wél aan te raden?</h2>
      <ul>
        <li>meerdere merken combineren</li>
        <li>werken met sensoren</li>
        <li>automatiseringen en energiebesparing</li>
      </ul>

      <p>
        Vooral bij automatiseren van verwarming en apparaten speelt een hub
        een grote rol.{" "}
        <Link href="/tips/energie-besparen-met-smart-home">
          Zo bespaar je energie met een smart home
        </Link>.
      </p>

      <h2>Hub vs geen hub</h2>
      <ul>
        <li>
          <strong>Zonder hub:</strong> simpel en goedkoop starten
        </li>
        <li>
          <strong>Met hub:</strong> flexibel en toekomstbestendig
        </li>
      </ul>

      <h2>Conclusie</h2>
      <p>
        Een smart home hub is geen verplichting, maar wel een sterke
        uitbreiding. Begin zonder hub en breid later uit wanneer je meer
        automatisering wilt.
      </p>

      <p>
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home in 5 stappen →
        </Link>
      </p>
    </>
  ),
},
  // ✅ Wifi / netwerk
 {
  slug: "wifi-verbeteren-voor-smart-home",
  title: "Wi-Fi verbeteren voor smart home (10 tips voor stabiel slim huis) – 2026",
  description:
    "Smart home valt offline of reageert traag? Verbeter je Wi-Fi met 10 praktische tips: 2.4GHz vs 5GHz, mesh, kanaalkeuze, router-instellingen en vaste IP’s.",
  image:
    "/images/Tips%20%26%20uitleg/Wi-Fi%20verbeteren%20voor%20smart%20home.png",
  category: "Wifi & netwerk",
  available: true,

  related: [
    "wifi-bereik-verbeteren-zonder-nieuwe-router",
    "2-4ghz-vs-5ghz-smart-home",
    "smart-home-apparaat-koppelt-niet-wifi",
    "beginnen-met-smart-home",
    "energie-besparen-met-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom gaan smart home apparaten vaak offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vaak komt dit door wifi-bereik, band steering (2.4/5 GHz), WPA3-only beveiliging of een router die te ver weg staat. Begin met 2.4 GHz, routerplaatsing en WPA2/mixed modus.",
        },
      },
      {
        "@type": "Question",
        name: "Is 2.4 GHz beter dan 5 GHz voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voor veel smart home apparaten wel: 2.4 GHz heeft meer bereik en gaat beter door muren. 5 GHz is sneller, maar heeft minder bereik en is beter voor telefoons, laptops en tv’s.",
        },
      },
      {
        "@type": "Question",
        name: "Helpt mesh wifi bij smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vooral bij dode hoeken. Mesh is meestal stabieler dan een losse wifi extender en geeft betere dekking door het hele huis.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Gerelateerd:{" "}
        <Link href="/tips/smart-home-apparaat-koppelt-niet-wifi">
          Apparaat koppelt niet met Wi-Fi
        </Link>{" "}
        •{" "}
        <Link href="/tips/2-4ghz-vs-5ghz-smart-home">
          2.4 vs 5 GHz
        </Link>{" "}
        •{" "}
        <Link href="/tips/beginnen-met-smart-home">
          Beginnen met smart home
        </Link>
      </p>

      <p className="section-intro">
        Lampen die offline gaan, camera’s die haperen of apps die blijven
        laden? In veel gevallen is je Wi-Fi de echte boosdoener.
        Met deze gids maak je jouw netwerk smart-home-proof.
      </p>

      <h2>10 tips om je Wi-Fi smart-home-proof te maken</h2>

      <h3>1) Zet smart home apparaten zoveel mogelijk op 2.4 GHz</h3>
      <p>
        2.4 GHz reikt verder en gaat beter door muren.
        Gebruik 5 GHz vooral voor telefoons, laptops en tv’s.
      </p>

      <h3>2) Plaats je router slimmer</h3>
      <p>
        Zet je router centraal, vrij en op hoogte.
        Vermijd kasten, metaal en plekken achter de tv.
      </p>

      <h3>3) Split 2.4 GHz en 5 GHz bij problemen</h3>
      <p>
        Sommige IoT-apparaten raken in de war van één gecombineerde SSID.
        Maak desnoods twee netwerken: …-2G en …-5G.
      </p>

      <h3>4) Gebruik WPA2 of WPA2/WPA3 mixed</h3>
      <p>
        Veel smart home apparatuur ondersteunt geen WPA3-only.
      </p>

      <h3>5) Kies een vast 2.4 GHz kanaal (1, 6 of 11)</h3>
      <p>
        Dit voorkomt overlap en instabiliteit.
      </p>

      <h3>6) Schakel agressieve optimalisaties uit</h3>
      <p>
        Denk aan Band Steering, Airtime Fairness, 802.11r fast roaming of AX-only.
        Test of uitschakelen stabiliteit verbetert.
      </p>

      <h3>7) Geef hubs en camera’s een vast IP</h3>
      <p>
        DHCP-reservering voorkomt verbindingsproblemen en maakt troubleshooting makkelijker.
      </p>

      <h3>8) Overweeg mesh bij dode hoeken</h3>
      <p>
        Mesh is meestal stabieler dan een losse extender.
      </p>

      <h3>9) Gebruik kabel waar mogelijk</h3>
      <p>
        Bekabel hubs en vaste apparaten om Wi-Fi belasting te verlagen.
      </p>

      <h3>10) Maak eventueel een apart IoT-netwerk</h3>
      <p>
        Dat geeft overzicht en vaak extra stabiliteit.
      </p>

      <p>
        <Link href="/tips/energie-besparen-met-smart-home">
          Zo bespaar je energie met een smart home
        </Link>.
      </p>

      <h2>Conclusie</h2>
      <p>
        In de meeste gevallen los je smart home Wi-Fi problemen op met:
        beter bereik, 2.4 GHz correct instellen en juiste beveiliging.
        Mesh of extra access points zijn de volgende stap als dat nodig is.
      </p>
    </>
  ),
},
  {
  slug: "2-4ghz-vs-5ghz-smart-home",
  title: "2.4 GHz vs 5 GHz voor smart home – zo voorkom je offline apparaten",
  description:
    "Welke Wi-Fi band is het beste voor smart home? 2.4 GHz is vaak stabieler voor IoT-apparaten en voorkomt offline meldingen en koppelproblemen.",
  image: "/images/tips/2-4-vs-5ghz.png",
  category: "Wifi & Netwerk",
  available: true,

  related: [
    "wifi-verbeteren-voor-smart-home",
    "smart-home-apparaat-koppelt-niet-wifi",
    "wifi-bereik-verbeteren-zonder-nieuwe-router",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is 2.4 GHz beter dan 5 GHz voor smart home apparaten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, in de meeste gevallen wel. 2.4 GHz heeft meer bereik en gaat beter door muren, waardoor smart home apparaten stabieler verbonden blijven.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom koppelen sommige apparaten niet met 5 GHz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veel smart home apparaten ondersteunen alleen 2.4 GHz. Als je telefoon op 5 GHz zit tijdens het koppelen of je router band steering gebruikt, kan het koppelen mislukken.",
        },
      },
      {
        "@type": "Question",
        name: "Moet ik 2.4 GHz en 5 GHz splitsen in twee netwerken?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Als je vaak offline apparaten hebt of koppelen niet lukt, kan het helpen om twee aparte netwerken te maken: één voor 2.4 GHz en één voor 5 GHz.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is band steering en waarom kan dit problemen geven?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Band steering laat je router automatisch kiezen tussen 2.4 en 5 GHz. Voor smart home apparaten kan dit verwarrend zijn, waardoor ze slecht koppelen of offline gaan.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="section-intro">
        Gaan je slimme lampen of stekkers regelmatig offline? Of lukt koppelen
        maar niet? In veel gevallen ligt dat niet aan het apparaat, maar aan de
        verkeerde Wi-Fi band.
      </p>

      <p>
        Voor smart home apparaten is <strong>2.4 GHz meestal de beste keuze</strong>.
        Niet omdat het sneller is, maar omdat het <strong>meer bereik heeft</strong>
        en beter door muren en vloeren gaat. 5 GHz is sneller, maar heeft een
        korter bereik en is daardoor minder betrouwbaar voor IoT-apparaten.
      </p>

      <h2>Gebruik 2.4 GHz voor</h2>
      <ul>
        <li>slimme stekkers</li>
        <li>Wi-Fi lampen</li>
        <li>slimme schakelaars</li>
        <li>thermostaten</li>
        <li>apparaten die soms offline gaan</li>
      </ul>

      <h2>Gebruik 5 GHz voor</h2>
      <ul>
        <li>telefoon en laptop</li>
        <li>tv en streaming</li>
        <li>gameconsole</li>
        <li>downloads en hoge bandbreedte</li>
      </ul>

      <h2>Wanneer gaat het vaak mis?</h2>
      <p>
        Problemen ontstaan vooral wanneer je router één netwerknaam (SSID)
        gebruikt voor zowel 2.4 als 5 GHz. Tijdens het koppelen kan je telefoon
        op 5 GHz zitten, terwijl het smart home apparaat alleen 2.4 GHz ondersteunt.
      </p>

      <h2>Veelgemaakte fout: één netwerk voor alles</h2>
      <p>
        Routers met band steering schakelen automatisch tussen 2.4 en 5 GHz.
        Dat werkt prima voor telefoons, maar niet altijd voor slimme apparaten.
        De beste oplossing is om twee aparte netwerken aan te maken,
        bijvoorbeeld <em>thuis-2G</em> en <em>thuis-5G</em>.
      </p>

      <h2>Conclusie</h2>
      <p>
        Voor smart home toepassingen is <strong>2.4 GHz bijna altijd de juiste keuze</strong>.
        Alleen apparaten die veel snelheid nodig hebben profiteren echt van 5 GHz.
      </p>

      <p>
        Wil je je wifi stabieler maken?{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Bekijk de 10 Wi-Fi tips →
        </Link>
      </p>
    </>
  ),
},
  {
  slug: "smart-home-apparaat-koppelt-niet-wifi",
  title: "Smart home apparaat koppelt niet met Wi-Fi? (snelle oplossingen)",
  description:
    "Koppelen lukt niet? Check 2.4 GHz, WPA3-only, SSID, AP isolation en router-instellingen. Dit stappenplan lost Wi-Fi koppelproblemen meestal direct op.",
  image:
    "/images/Tips%20%26%20uitleg/smart%20home%20apparaat%20koppelt%20niet%20met%20wifi.png",
  category: "Wifi & netwerk",
  available: true,

  related: [
    "wifi-verbeteren-voor-smart-home",
    "2-4ghz-vs-5ghz-smart-home",
    "wifi-bereik-verbeteren-zonder-nieuwe-router",
    "beginnen-met-smart-home",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Waarom koppelt mijn smart home apparaat niet met Wi-Fi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In de meeste gevallen ligt het aan de wifi-instellingen: het apparaat ondersteunt alleen 2.4 GHz, WPA3-only staat aan, de SSID bevat speciale tekens of AP isolation is ingeschakeld.",
        },
      },
      {
        "@type": "Question",
        name: "Moet ik 2.4 GHz gebruiken om te koppelen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Veel smart home apparaten werken alleen op 2.4 GHz. Zorg dat je telefoon tijdens het koppelen ook op 2.4 GHz zit of split je netwerken.",
        },
      },
      {
        "@type": "Question",
        name: "Welke beveiliging werkt het beste voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WPA2 of WPA2/WPA3 mixed werkt het meest betrouwbaar. WPA3-only veroorzaakt vaak koppelproblemen bij smart home apparaten.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Gerelateerd:{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Wi-Fi verbeteren
        </Link>{" "}
        •{" "}
        <Link href="/tips/2-4ghz-vs-5ghz-smart-home">
          2.4 vs 5 GHz
        </Link>{" "}
        •{" "}
        <Link href="/tips/wifi-bereik-verbeteren-zonder-nieuwe-router">
          Wi-Fi bereik verbeteren
        </Link>
      </p>

      <p className="section-intro">
        Blijft het koppelen mislukken, hoe vaak je het ook probeert? Dan is
        het apparaat zelden kapot. In bijna alle gevallen zit het probleem
        in je Wi-Fi instellingen. Met deze checklist los je het meestal
        binnen een paar minuten op.
      </p>

      <h2>De 5 meest voorkomende oorzaken</h2>
      <ol>
        <li>
          Je telefoon zit op <strong>5 GHz</strong> terwijl het apparaat{" "}
          <strong>2.4 GHz</strong> nodig heeft.
        </li>
        <li>
          Je router staat op <strong>WPA3-only</strong>.
        </li>
        <li>De netwerknaam (SSID) bevat speciale tekens.</li>
        <li>
          <strong>AP isolation / client isolation</strong> staat aan.
        </li>
        <li>
          Multicast of mDNS wordt geblokkeerd door router-beveiliging.
        </li>
      </ol>

      <h2>Snel stappenplan (werkt in de meeste gevallen)</h2>
      <ul>
        <li>Zet je telefoon tijdelijk op <strong>2.4 GHz</strong>.</li>
        <li>
          Zet wifi-beveiliging op <strong>WPA2</strong> of{" "}
          <strong>WPA2/WPA3 mixed</strong>.
        </li>
        <li>Gebruik een eenvoudige SSID (letters + cijfers).</li>
        <li>Zet <strong>AP/client isolation uit</strong>.</li>
        <li>Herstart router én apparaat en koppel opnieuw.</li>
      </ul>

      <p>
        Tip: voer eerst een <strong>volledige reset</strong> van het apparaat
        uit. Veel smart home producten onthouden een mislukte koppelpoging.
      </p>

      <h2>Conclusie</h2>
      <p>
        In meer dan <strong>90% van de gevallen</strong> los je Wi-Fi
        koppelproblemen op door 2.4 GHz te gebruiken en WPA3-only uit te
        schakelen.
      </p>

      <p>
        Wil je je netwerk structureel stabieler maken?{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Bekijk de 10 Wi-Fi tips →
        </Link>
      </p>
    </>
  ),
},
  {
  slug: "wifi-bereik-verbeteren-zonder-nieuwe-router",
  title: "Wi-Fi bereik verbeteren zonder nieuwe router (7 slimme oplossingen) – 2026",
  description:
    "Slechte Wi-Fi in huis of slimme apparaten die offline gaan? Verbeter je bereik zonder meteen een nieuwe router te kopen. 7 praktische tips voor stabiel smart home.",
  image:
    "/images/Tips%20%26%20uitleg/Wi-Fi%20bereik%20verbeteren%20zonder%20nieuwe%20router.png",
  category: "Wifi & netwerk",
  available: true,

  related: [
    "wifi-verbeteren-voor-smart-home",
    "2-4ghz-vs-5ghz-smart-home",
    "smart-home-apparaat-koppelt-niet-wifi",
    "privacy-en-veiligheid-smart-home",
    "wat-is-een-smart-home-hub",
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hoe verbeter ik Wi-Fi bereik zonder nieuwe router?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Begin met routerplaatsing (centraal en vrij), zet een vast 2.4 GHz kanaal (1/6/11), update firmware en zet ‘slimme’ functies uit als IoT instabiel is. De beste upgrade is een extra access point via kabel of een mesh systeem.",
        },
      },
      {
        "@type": "Question",
        name: "Is mesh beter dan een wifi extender?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meestal wel. Mesh is doorgaans stabieler, roamt beter door het huis en geeft minder gedoe dan een losse extender.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is de beste oplossing bij dode hoeken?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een extra access point via kabel is vaak de beste oplossing. Als kabel niet kan, kies dan voor mesh met goede plaatsing van de units.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="muted small" style={{ marginBottom: "0.75rem" }}>
        Gerelateerd:{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">Wi-Fi verbeteren</Link>{" "}
        • <Link href="/tips/2-4ghz-vs-5ghz-smart-home">2.4 vs 5 GHz</Link> •{" "}
        <Link href="/tips/smart-home-apparaat-koppelt-niet-wifi">
          Koppelt niet met Wi-Fi
        </Link>
      </p>

      <p className="section-intro">
        Dode hoeken in huis of slimme apparaten die steeds offline gaan? Je
        hoeft niet meteen een nieuwe router te kopen. Met deze stappen haal je
        vaak al enorme winst — vooral voor smart home.
      </p>

      <h2>7 oplossingen die vaak direct helpen</h2>

      <h3>1) Plaats je router hoger en vrij</h3>
      <p>
        Niet in een kast, niet achter de tv, niet in de meterkast. Zet ‘m
        centraal en op hoogte voor betere verspreiding.
      </p>

      <h3>2) Zet 2.4 GHz kanaal vast (1, 6 of 11)</h3>
      <p>
        Automatisch kanaal wisselen kan instabiliteit geven, vooral bij slimme
        apparaten. Kies één vast kanaal.
      </p>

      <h3>3) Update je router firmware</h3>
      <p>
        Bugs en Wi-Fi problemen worden vaak opgelost met updates. Check het
        beheerpanel van je router.
      </p>

      <h3>4) Zet “te slimme” functies uit bij IoT-problemen</h3>
      <p>
        Band steering, fast roaming of Airtime Fairness kan IoT verstoren
        (vooral slimme lampen, stekkers en sensoren). Test of uitschakelen
        stabiliteit geeft.
      </p>

      <h3>5) Voeg een access point toe via kabel</h3>
      <p>
        Dit is vaak de beste upgrade: één extra access point op een slimme plek
        geeft topdekking zonder compleet nieuw systeem.
      </p>

      <h3>6) Gebruik mesh als kabel niet kan</h3>
      <p>
        Mesh is meestal stabieler dan een goedkope extender en roamt beter door
        het huis.
      </p>

      <h3>7) Zet hubs en vaste apparaten bekabeld</h3>
      <p>
        Hue Bridge, Homey, Home Assistant en tv’s: bekabeld waar mogelijk. Dat
        verlaagt Wi-Fi belasting en verhoogt stabiliteit.
      </p>

      <h2>Conclusie</h2>
      <p>
        Begin altijd met de simpele fixes (routerplaatsing, vast 2.4 GHz kanaal
        en firmware update). Heb je nog steeds dode hoeken? Dan is een extra
        access point of mesh meestal de beste upgrade.
      </p>

      <p>
        Wil je je hele netwerk smart-home-proof maken?{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Bekijk de 10 Wi-Fi tips →
        </Link>
      </p>
    </>
  ),
},
];

/* Helpers (zoals blog) */
export function getAllTips() {
  return tips.filter((t) => t && t.available);
}

export function getTipBySlug(slug) {
  return tips.find((t) => t && t.slug === slug && t.available);
}