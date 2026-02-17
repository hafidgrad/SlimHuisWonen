import Link from "next/link";
export const blogPosts = [
  // ✅ Protocollen & standaarden
  {
  slug: "wat-is-zigbee",
  title: "Wat is Zigbee?",
  description:
    "Wat is Zigbee en waarom gebruiken Philips Hue, IKEA en Aqara het? Lees hoe Zigbee werkt, de voordelen t.o.v. wifi en wanneer je een hub nodig hebt.",
  image: "/images/blog/wat-is-zigbee.png",
  category: "Protocollen",
  available: true,

  related: [
    "zigbee-vs-zwave-vs-matter-vs-wifi",
    "aqara-vs-tapo",
    "beste-smart-home-hub"
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zigbee is een draadloos protocol speciaal voor smart home apparaten zoals lampen, sensoren en schakelaars. Het is energiezuinig en betrouwbaar en werkt vaak via een hub of bridge.",
        },
      },
      {
        "@type": "Question",
        name: "Is Zigbee beter dan wifi voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vaak wel. Zigbee gebruikt weinig stroom en is stabieler bij veel apparaten. Wifi is eenvoudiger om mee te starten maar kan bij grotere setups instabiel worden.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je een hub nodig voor Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meestal wel. Zigbee apparaten verbinden via een hub of bridge zoals Philips Hue Bridge, Homey of Home Assistant. Die hub is de vertaler naar je netwerk en app.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="section-intro">
        Zigbee is een van de populairste verbindingen voor smart home.
        Apparaten zoals slimme lampen, sensoren en schakelaars maken vaak
        gebruik van Zigbee omdat het betrouwbaar en energiezuinig is.
      </p>

      <h2>Wat maakt Zigbee anders dan wifi?</h2>
      <p>
        Veel mensen starten met wifi-smart home producten. Dat werkt prima,
        maar Zigbee is speciaal gemaakt voor smart home en heeft een paar
        grote voordelen. In onze vergelijking{" "}
        <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
          Zigbee vs Z-Wave vs Matter vs Wi-Fi
        </Link>{" "}
        gaan we hier dieper op in.
      </p>

      <ul>
        <li><strong>Energiezuinig:</strong> ideaal voor sensoren op batterij</li>
        <li><strong>Betrouwbaar:</strong> minder gevoelig voor wifi-problemen</li>
        <li><strong>Schaalbaar:</strong> geschikt voor veel apparaten</li>
      </ul>

      <h2>Hoe werkt Zigbee? (simpel uitgelegd)</h2>
      <p>
        Zigbee-apparaten communiceren meestal via een hub of bridge. Zo’n hub
        vormt het hart van je smart home. Lees ook:{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          wat is een smart home hub?
        </Link>
        .
      </p>

      <p>Veelgebruikte hubs/bridges zijn:</p>
      <ul>
        <li>Philips Hue Bridge</li>
        <li>Homey</li>
        <li>Home Assistant (met Zigbee dongle)</li>
      </ul>

      <h2>Wat is een Zigbee mesh netwerk?</h2>
      <p>
        Een groot voordeel van Zigbee is het <strong>mesh netwerk</strong>.
        Apparaten geven signalen aan elkaar door, waardoor je bereik automatisch
        groter wordt.
      </p>

      <p className="muted">
        Tip: apparaten op stroom (zoals lampen en slimme stekkers)
        fungeren vaak als versterkers binnen het mesh netwerk.
      </p>

      <h2>Wanneer kies je Zigbee (en wanneer wifi)?</h2>

      <h3>Kies Zigbee als:</h3>
      <ul>
        <li>je veel slimme apparaten hebt</li>
        <li>je sensoren gebruikt</li>
        <li>je betrouwbaarheid belangrijk vindt</li>
        <li>je merken wilt combineren</li>
      </ul>

      <h3>Kies wifi als:</h3>
      <ul>
        <li>je klein en simpel begint</li>
        <li>je geen extra hub wilt</li>
        <li>je alles binnen één merk gebruikt</li>
      </ul>

      <p>
        Start je net? Bekijk dan ook{" "}
        <Link href="/tips/beginnen-met-smart-home">
          beginnen met smart home in 5 stappen
        </Link>
        .
      </p>

      <h2>Conclusie</h2>
      <p>
        Zigbee is een sterke basis voor een betrouwbaar en uitbreidbaar
        smart home. Zeker wanneer je meerdere merken wilt combineren of
        later wilt opschalen.
      </p>
    </>
  ),
},
  {
  slug: "wat-is-matter",
  title: "Wat is Matter?",
  description:
    "Matter is dé nieuwe smart home standaard. Ontdek wat Matter is, hoe het werkt, wat je eraan hebt en of je nieuwe apparaten nodig hebt.",
  image: "/images/blog/wat-is-matter.png",
  category: "Protocollen",
  available: true,

  related: [
    "wat-is-zigbee",
    "zigbee-vs-zwave-vs-matter-vs-wifi",
    "beste-smart-home-hub"
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is Matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Matter is een smart home standaard waarmee apparaten van verschillende merken beter met elkaar samenwerken. Het doel is: minder gedoe, makkelijker koppelen en meer compatibiliteit.",
        },
      },
      {
        "@type": "Question",
        name: "Heb ik een hub nodig voor Matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet altijd. Veel Matter apparaten werken via een ingebouwde controller zoals Google Home, Apple Home of een hub zoals Homey. Soms is een Thread border router nodig.",
        },
      },
      {
        "@type": "Question",
        name: "Is Matter hetzelfde als Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee. Zigbee is een draadloos protocol. Matter is een standaard die bepaalt hoe apparaten samenwerken en kan werken via Wi-Fi of Thread.",
        },
      },
      {
        "@type": "Question",
        name: "Werkt Matter met Philips Hue, Aqara en Tapo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Steeds meer merken ondersteunen Matter. Soms via een software-update of bridge, soms via nieuwe Matter-apparaten. Controleer altijd per product.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="section-intro">
        Matter is de nieuwe smart home standaard die ervoor moet zorgen dat
        apparaten van verschillende merken makkelijker samenwerken. Zie
        Matter als de <strong>verbindende laag</strong> bovenop technieken
        zoals Zigbee, Thread en Wi-Fi.
      </p>

      <h2>Waarom is Matter zo belangrijk?</h2>
      <p>
        In smart home zit je vaak vast aan één ecosysteem. Matter probeert
        dat te doorbreken. In onze vergelijking{" "}
        <Link href="/blog/zigbee-vs-zwave-vs-matter-vs-wifi">
          Zigbee vs Z-Wave vs Matter vs Wi-Fi
        </Link>{" "}
        zie je hoe Matter zich verhoudt tot andere technieken.
      </p>

      <ul>
        <li>✅ makkelijker koppelen</li>
        <li>✅ betere samenwerking tussen merken</li>
        <li>✅ minder afhankelijk van losse apps</li>
        <li>✅ toekomstbestendiger smart home</li>
      </ul>

      <h2>Hoe werkt Matter?</h2>
      <p>
        Matter is geen radiosignaal zoals{" "}
        <Link href="/blog/wat-is-zigbee">Zigbee</Link> of Z-Wave. Het is een{" "}
        <strong>standaard</strong> die bepaalt hoe apparaten met elkaar
        communiceren.
      </p>

      <ul>
        <li><strong>Wi-Fi</strong> – veel bestaande apparaten</li>
        <li><strong>Thread</strong> – modern, energiezuinig mesh netwerk</li>
      </ul>

      <h2>Thread, Matter en hubs</h2>
      <p>
        Veel Matter-apparaten werken via Thread. Daarvoor is een zogeheten
        <em> Thread border router</em> nodig. Die zit vaak al ingebouwd in:
      </p>

      <ul>
        <li>Apple HomePod / Apple TV</li>
        <li>Google Nest Hub / Nest Wifi</li>
        <li>Amazon Echo (selecte modellen)</li>
        <li>Homey Pro (nieuwere generatie)</li>
      </ul>

      <p>
        Wil je precies weten wat een hub doet?{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          Wat is een smart home hub?
        </Link>
      </p>

      <h2>Moet je al je apparaten vervangen?</h2>
      <p>
        Nee. Matter komt er vooral <em>naast</em>. Veel bestaande Zigbee- en
        Wi-Fi-apparaten blijven gewoon werken, soms via een bridge of update.
      </p>

      <h2>Voor wie is Matter interessant?</h2>
      <ul>
        <li><strong>Beginners</strong> die minder apps willen</li>
        <li><strong>Merken-mixers</strong> (Hue + Aqara + Tapo)</li>
        <li><strong>Toekomstgerichte bouwers</strong></li>
      </ul>

      <h2>Conclusie</h2>
      <p>
        Matter vervangt bestaande protocollen niet direct, maar maakt
        samenwerken eenvoudiger. Het is dé logische stap richting een smart
        home zonder merk-lock-in.
      </p>
    </>
  ),
},
  {
  slug: "zigbee-vs-zwave-vs-matter-vs-wifi",
  title: "Zigbee vs Z-Wave vs Matter vs Wi-Fi: wat moet je kiezen?",
  description:
    "Welke smart home techniek past bij jou? Vergelijk Zigbee, Z-Wave, Matter en Wi-Fi op bereik, stabiliteit, energieverbruik en compatibiliteit.",
  image: "/images/blog/zigbee-vs-zwave-vs-matter-vs-wifi.png",
  category: "Protocollen",
  available: true,

  related: [
    "wat-is-zigbee",
    "wat-is-matter",
    "beste-smart-home-hub"
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is beter: Zigbee of Wi-Fi voor smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voor veel smart home apparaten is Zigbee stabieler en energiezuiniger dan Wi-Fi. Wi-Fi is handig om mee te starten, maar kan bij veel apparaten instabieler worden.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is het verschil tussen Matter en Zigbee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zigbee is een draadloos protocol. Matter is een standaard die samenwerking tussen merken makkelijker maakt en werkt vaak via Wi-Fi of Thread.",
        },
      },
      {
        "@type": "Question",
        name: "Wanneer kies je Z-Wave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Z-Wave is interessant als je maximale betrouwbaarheid wilt, veel sensoren gebruikt en goede dekking door muren nodig hebt.",
        },
      },
      {
        "@type": "Question",
        name: "Heb je altijd een hub nodig voor Zigbee of Z-Wave?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meestal wel. Zigbee- en Z-Wave-apparaten verbinden via een hub zoals Homey of Home Assistant. Wi-Fi apparaten werken meestal direct met je router.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="section-intro">
        Als je een smart home bouwt, kom je al snel termen tegen zoals Zigbee,
        Z-Wave, Matter en Wi-Fi. Maar wat is nou echt het verschil — en wat is
        het beste voor jouw situatie? Deze vergelijking vormt het centrale
        overzicht binnen onze smart home protocollen.
      </p>

      <h2>Snelle keuzehulp</h2>
      <ul>
        <li><strong>Beginner / simpel:</strong> Wi-Fi of Matter-over-Wi-Fi</li>
        <li><strong>Veel apparaten / stabiliteit:</strong> Zigbee of Z-Wave</li>
        <li><strong>Toekomstbestendig combineren:</strong> Matter</li>
        <li><strong>Beste dekking door muren:</strong> Z-Wave</li>
      </ul>

      <h2>Vergelijking in één tabel</h2>

      <div style={{ overflowX: "auto", marginTop: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
          <thead>
            <tr>
              <th>Techniek</th>
              <th>Werkt via</th>
              <th>Sterktes</th>
              <th>Zwaktes</th>
              <th>Beste voor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Wi-Fi</strong></td>
              <td>Router</td>
              <td>Makkelijk starten, goedkoop</td>
              <td>Kan instabiel worden bij veel apparaten</td>
              <td>Beginners</td>
            </tr>
            <tr>
              <td><strong>Zigbee</strong></td>
              <td>Hub / bridge</td>
              <td>Mesh netwerk, energiezuinig</td>
              <td>Hub nodig</td>
              <td>Grotere setup + sensoren</td>
            </tr>
            <tr>
              <td><strong>Z-Wave</strong></td>
              <td>Hub</td>
              <td>Zeer betrouwbaar, goede muurpenetratie</td>
              <td>Duurder, minder keuze</td>
              <td>Serieuze installaties</td>
            </tr>
            <tr>
              <td><strong>Matter</strong></td>
              <td>Wi-Fi / Thread</td>
              <td>Merken samenwerken</td>
              <td>Nog in ontwikkeling</td>
              <td>Toekomstbestendig combineren</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Uitleg per techniek</h2>

      <h3>Wi-Fi</h3>
      <p>
        Wi-Fi is ideaal om te starten, maar bij grotere setups kan het
        instabieler worden. Overweeg dan Zigbee of Z-Wave.
      </p>

      <h3>Zigbee</h3>
      <p>
        Zigbee is energiezuinig en werkt via een mesh netwerk. Ideaal voor
        sensoren en grotere smart homes.{" "}
        <Link href="/blog/wat-is-zigbee">
          Lees hier de volledige uitleg
        </Link>.
      </p>

      <h3>Z-Wave</h3>
      <p>
        Z-Wave staat bekend om betrouwbaarheid en stabiele verbindingen,
        vooral in huizen met dikke muren.
      </p>

      <h3>Matter</h3>
      <p>
        Matter maakt het combineren van merken eenvoudiger.{" "}
        <Link href="/blog/wat-is-matter">
          Lees wat Matter precies is
        </Link>.
      </p>

      <h2>Conclusie</h2>
      <p>
        Zie deze pagina als je centrale keuzepunt. Vanuit hier kun je per
        techniek verdiepen of gericht producten kiezen.
      </p>
    </>
  ),
},

  // ✅ Hubs & ecosystemen
  {
  slug: "aqara-vs-tapo",
  title: "Aqara vs Tapo: wat is beter?",
  description:
    "Aqara of TP-Link Tapo? In deze vergelijking lees je de verschillen: Zigbee vs wifi, sensoren, automatiseringen, prijzen en welke keuze het beste past bij jouw situatie.",
  image: "/images/blog/aqara-vs-tapo.png",
  category: "Merken",
  available: true,

  related: [
    "wat-is-zigbee",
    "beste-smart-home-hub",
    "home-assistant-vs-homey"
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is beter: Aqara of Tapo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dat hangt af van je doel. Aqara is sterk in sensoren en automatiseringen (vaak Zigbee + hub). Tapo is goedkoop en simpel (meestal wifi, vaak zonder hub).",
        },
      },
      {
        "@type": "Question",
        name: "Werkt Aqara zonder hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meestal niet. Veel Aqara sensoren werken via Zigbee en hebben een hub nodig (Aqara hub, Homey of Home Assistant).",
        },
      },
      {
        "@type": "Question",
        name: "Is Tapo geschikt voor een groot smart home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voor een paar apparaten is Tapo prima. Maar bij veel wifi-apparaten kan stabiliteit een probleem worden. Dan is Zigbee vaak betrouwbaarder.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="section-intro">
        Aqara en TP-Link Tapo zijn allebei populair, maar ze zijn gemaakt
        voor een ander type smart home. In deze vergelijking ontdek je
        welke keuze het beste bij jou past.
      </p>

      <h2>Het grootste verschil: Zigbee vs wifi</h2>
      <p>
        Veel Aqara producten werken via <strong>Zigbee</strong> en zijn
        gericht op sensoren en automatiseringen. Tapo werkt meestal via{" "}
        <strong>wifi</strong> en is vooral gemaakt voor een simpele start.
      </p>

      <ul>
        <li>
          <strong>Aqara:</strong> sensoren + automatiseringen, vaak Zigbee
          (hub nodig)
        </li>
        <li>
          <strong>Tapo:</strong> goedkoop en simpel, meestal wifi (vaak geen
          hub nodig)
        </li>
      </ul>

      <h2>Wanneer kies je Aqara?</h2>
      <ul>
        <li>Je wilt sensoren (beweging, deurcontact, temperatuur)</li>
        <li>Je wilt betrouwbare automatiseringen</li>
        <li>Je hebt al een hub (of wilt uitbreiden)</li>
        <li>Je wilt een systeem dat schaalbaar is</li>
      </ul>

      <h2>Wanneer kies je Tapo?</h2>
      <ul>
        <li>Je wilt goedkoop beginnen</li>
        <li>Je wilt geen hub kopen</li>
        <li>Je gebruikt vooral simpele aan/uit functies</li>
        <li>Je hebt maar een paar apparaten</li>
      </ul>

      <h2>Wat is slimmer als je merken wilt combineren?</h2>
      <p>
        Wil je écht merken combineren en automatiseringen maken (bijv.{" "}
        <em>sensor → lamp aan</em>)? Dan is een hub vaak de beste keuze.
      </p>

      <h2>Conclusie</h2>
      <p>
        <strong>Aqara</strong> is ideaal als je met sensoren wilt werken en
        een betrouwbaar systeem wilt opbouwen. <strong>Tapo</strong> is
        perfect als je simpel en goedkoop wilt starten.
      </p>
    </>
  ),
},
  {
  slug: "beste-smart-home-hub",
  title: "Smart home hub kiezen: waar moet je op letten?",
  description:
    "Welke smart home hub past bij jou? Lees waar je op moet letten bij Homey, Home Assistant en SmartThings: gemak, controle, lokaal werken en uitbreiden.",
  image: "/images/blog/beste-smart-home-hub.png",
  category: "Hubs",
  available: true,

  related: [
    "home-assistant-vs-homey",
    "zigbee-vs-zwave-vs-matter-vs-wifi",
    "aqara-vs-tapo"
  ],

  content: (
    <>
      <p className="section-intro">
        Wil je meerdere smart home merken combineren en betrouwbare
        automatiseringen bouwen? Dan is een smart home hub vaak de juiste
        keuze. In deze gids leggen we uit waar je op moet letten, zodat je
        weet welk type hub bij jou past.
      </p>

      <h2>Wat doet een smart home hub?</h2>
      <p>
        Een smart home hub brengt al je slimme apparaten samen in één
        systeem. In plaats van losse apps per merk, krijg je één centrale
        plek voor bediening en automatiseringen.
      </p>

      <p>
        Meer uitleg nodig?{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          Wat is een smart home hub?
        </Link>
      </p>

      <h2>Wanneer heb je een hub nodig?</h2>
      <ul>
        <li>Je meerdere merken wilt combineren (Hue, Aqara, Tapo)</li>
        <li>Je werkt met Zigbee, Z-Wave of Matter</li>
        <li>Je stabiele automatiseringen wilt</li>
        <li>Je minder afhankelijk wilt zijn van cloud/apps</li>
      </ul>

      <h2>Waar moet je op letten bij het kiezen?</h2>
      <ul>
        <li>
          <strong>Gebruiksgemak:</strong> hoe snel ben je klaar?
        </li>
        <li>
          <strong>Flexibiliteit:</strong> hoeveel wil je aanpassen?
        </li>
        <li>
          <strong>Lokaal werken:</strong> blijft alles werken zonder internet?
        </li>
        <li>
          <strong>Ondersteuning:</strong> Zigbee, Z-Wave, Matter, Wi-Fi
        </li>
      </ul>

      <h2>Globaal verschil tussen de bekendste hubs</h2>
      <ul>
        <li>
          <strong>Homey:</strong> gebruiksvriendelijk, alles-in-één
        </li>
        <li>
          <strong>Home Assistant:</strong> maximale controle, technisch
        </li>
        <li>
          <strong>SmartThings:</strong> vooral interessant binnen Samsung
        </li>
      </ul>

      <p>
        Wil je precies weten wat de verschillen zijn? Bekijk ook{" "}
        <Link href="/blog/home-assistant-vs-homey">
          Home Assistant vs Homey
        </Link>
        .
      </p>

      <h2>Klaar om te kiezen?</h2>
      <p>
        We hebben onze aanraders per type gebruiker overzichtelijk voor je
        op een rij gezet — zonder verkooppraat.
      </p>

      <div className="blogCtaBox">
        <h3>👉 Bekijk onze koopgids: beste smart home hub</h3>
        <p className="muted">
          Inclusief onze aanraders voor beginners, power users en
          Samsung-gebruikers.
        </p>
        <Link href="/aanraders/beste-smart-home-hub">
          Naar de koopgids →
        </Link>
      </div>
    </>
  ),
},
  {
  slug: "home-assistant-vs-homey",
  title: "Home Assistant vs Homey: wat is beter?",
  description:
    "Home Assistant of Homey? Vergelijk gemak, automatiseringen, kosten, lokale werking en uitbreidbaarheid. Kies de beste hub voor jouw smart home.",
  image: "/images/blog/home-assistant-vs-homey.png",
  category: "Hubs",
  available: true,

  related: [
    "beste-smart-home-hub",
    "wat-is-matter",
    "zigbee-vs-zwave-vs-matter-vs-wifi"
  ],

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat is beter: Home Assistant of Homey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voor de meeste mensen is Homey makkelijker en sneller klaar. Home Assistant is krachtiger en flexibeler, maar vraagt meer tijd en technische kennis.",
        },
      },
      {
        "@type": "Question",
        name: "Is Home Assistant gratis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De software van Home Assistant is gratis. Je hebt wel hardware nodig om het te draaien, zoals Home Assistant Green of een mini-pc.",
        },
      },
      {
        "@type": "Question",
        name: "Werkt Homey zonder internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veel Homey automatiseringen werken lokaal. De exacte werking hangt af van de gebruikte apparaten en integraties.",
        },
      },
      {
        "@type": "Question",
        name: "Heb ik Zigbee of Z-Wave nodig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Niet verplicht, maar Zigbee en Z-Wave maken je smart home vaak stabieler en energiezuiniger, vooral bij sensoren. Beide hubs ondersteunen dit.",
        },
      },
    ],
  },

  content: (
    <>
      <p className="section-intro">
        Dit is één van de meest gezochte smart-home-vragen. Zie deze pagina als
        de <strong>verdieping</strong> onder de keuze-gids{" "}
        <Link href="/blog/beste-smart-home-hub">
          beste smart home hub
        </Link>.
      </p>

      <h2>Snelle keuzehulp</h2>
      <ul>
        <li><strong>Ik wil gemak en snel klaar:</strong> Homey</li>
        <li><strong>Ik wil maximale controle:</strong> Home Assistant</li>
        <li><strong>Ik wil weinig onderhoud:</strong> Homey</li>
        <li><strong>Ik vind tweaken leuk:</strong> Home Assistant</li>
      </ul>

      <h2>Vergelijking in één tabel</h2>

      <div style={{ overflowX: "auto", marginTop: "1rem" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: 760,
          }}
        >
          <thead>
            <tr>
              <th style={{
                textAlign: "left",
                padding: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                opacity: 0.9,
              }}>
                Onderdeel
              </th>
              <th style={{
                textAlign: "left",
                padding: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                opacity: 0.9,
              }}>
                Homey
              </th>
              <th style={{
                textAlign: "left",
                padding: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                opacity: 0.9,
              }}>
                Home Assistant
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Installatie", "Supersnel", "Meer stappen"],
              ["Gebruiksgemak", "Zeer hoog", "Technischer"],
              ["Automatiseringen", "Flows (simpel + krachtig)", "Extreem krachtig"],
              ["Lokaal", "Grotendeels lokaal", "Volledig lokaal"],
              ["Flexibiliteit", "Groot", "Onbeperkt"],
              ["Voor wie?", "Gemak & gezinnen", "Tech-liefhebbers"],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, index) => (
                  <td
                    key={index}
                    style={{
                      verticalAlign: "top",
                      padding: "0.75rem",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      opacity: 0.9,
                    }}
                  >
                    {index === 0 ? <strong>{cell}</strong> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Homey: gemak en snel resultaat</h2>
      <p>
        Homey is ideaal als je meerdere merken wilt combineren zonder gedoe.
        Het werkt uitstekend met protocollen zoals{" "}
        <Link href="/blog/wat-is-zigbee">Zigbee</Link> en steeds vaker ook{" "}
        <Link href="/blog/wat-is-matter">Matter</Link>.
      </p>

      <p>
        Product tip:{" "}
        <Link href="/producten/homey-pro-early-2023">
          Homey Pro (Early 2023)
        </Link>
      </p>

      <h2>Home Assistant: maximale controle</h2>
      <p>
        Home Assistant is perfect als je volledige vrijheid wilt. Je kunt
        alles lokaal draaien en complexe logica bouwen. Het vraagt wel meer
        kennis en onderhoud.
      </p>

      <p>
        Product tip:{" "}
        <Link href="/producten/home-assistant-green">
          Home Assistant Green
        </Link>
      </p>

      <h2>Conclusie</h2>
      <p>
        Zie Homey als de beste keuze voor de meeste mensen. Home Assistant is
        ideaal als je graag diep in je smart home duikt. Twijfel je nog?
        Begin bij de{" "}
        <Link href="/blog/beste-smart-home-hub">
          beste smart home hub-vergelijking
        </Link>.
      </p>
    </>
  ),
},

  // ✅ Koopgidsen
  {
  slug: "beste-slimme-stekkers",
  title: "Beste slimme stekkers: waar moet je op letten?",
  description:
    "Twijfel je over slimme stekkers? Lees waar je op moet letten (energiemeting, wifi vs Zigbee, veiligheid) en maak daarna de juiste keuze.",
  image: "/images/blog/beste-slimme-stekkers.png",
  category: "Koopgids",
  available: true,

  related: [
    "wat-is-zigbee",
    "beste-smart-home-hub",
    "beste-slimme-verlichting"
  ],

  content: (
    <>
      <p className="section-intro">
        Een slimme stekker is vaak de makkelijkste manier om apparaten slim
        te maken. Maar niet elke slimme stekker is hetzelfde. In dit artikel
        leggen we uit waar je op moet letten voordat je er één koopt.
      </p>

      <h2>1. Wil je energieverbruik meten?</h2>
      <p>
        Sommige slimme stekkers meten hoeveel stroom een apparaat verbruikt.
        Dat is handig om sluipverbruik te ontdekken of gericht te besparen.
        Niet elke stekker heeft deze functie.
      </p>

      <h2>2. Wi-Fi of Zigbee?</h2>
      <p>
        Slimme stekkers werken meestal via <strong>Wi-Fi</strong> of{" "}
        <strong>Zigbee</strong>.
      </p>

      <ul>
        <li>
          <strong>Wi-Fi:</strong> makkelijk om mee te starten, geen hub nodig
        </li>
        <li>
          <strong>Zigbee:</strong> vaak stabieler bij meerdere apparaten
        </li>
      </ul>

      <p>
        Meer uitleg?{" "}
        <Link href="/blog/wat-is-zigbee">
          Wat is Zigbee en wanneer kies je het?
        </Link>
      </p>

      <h2>3. Let op het maximale vermogen</h2>
      <p>
        Niet elke slimme stekker is geschikt voor zware apparaten zoals
        wasmachines, drogers of elektrische kachels. Check altijd het
        maximale wattage en gebruik alleen stekkers met CE-markering.
      </p>

      <h2>4. Integratie met je smart home</h2>
      <p>
        Gebruik je Homey, Home Assistant of een ander platform? Controleer
        dan of de slimme stekker hiermee samenwerkt. Dat maakt
        automatiseringen een stuk krachtiger.
      </p>

      <p>
        Lees ook:{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          wat is een smart home hub?
        </Link>
      </p>

      <h2>Klaar om te kiezen?</h2>
      <p>
        We hebben onze beste slimme stekkers overzichtelijk voor je op een
        rij gezet, inclusief verschillen tussen Wi-Fi en Zigbee en opties
        met energiemeting.
      </p>

      <div className="blogCtaBox">
        <h3>👉 Bekijk onze koopgids: beste slimme stekkers</h3>
        <p className="muted">
          Inclusief onze aanraders met en zonder energiemeting, voor Wi-Fi en
          Zigbee.
        </p>
        <Link href="/aanraders/beste-slimme-stekkers">
          Naar de koopgids →
        </Link>
      </div>
    </>
  ),
},
 {
  slug: "beste-slimme-verlichting",
  title: "Beste slimme verlichting: waar moet je op letten?",
  description:
    "Twijfel je over slimme verlichting? Lees waar je op moet letten bij Philips Hue, IKEA, Tapo en Govee en maak daarna de juiste keuze.",
  image: "/images/blog/beste-slimme-verlichting.png",
  category: "Koopgids",
  available: true,

  related: [
    "wat-is-zigbee",
    "beste-smart-home-hub",
    "home-assistant-vs-homey"
  ],

  content: (
    <>
      <p className="section-intro">
        Slimme verlichting is vaak de eerste stap in een smart home. Maar
        welk merk past bij jou? In dit artikel leggen we uit waar je op moet
        letten bij het kiezen van slimme verlichting, zodat je daarna een
        goede keuze kunt maken.
      </p>

      <h2>1. Wi-Fi of Zigbee?</h2>
      <p>
        Slimme verlichting werkt meestal via <strong>Wi-Fi</strong> of{" "}
        <strong>Zigbee</strong>. Wi-Fi lampen zijn makkelijk om mee te
        starten, maar Zigbee is vaak stabieler als je meerdere lampen of
        sensoren gebruikt.
      </p>

      <h2>2. Wil je uitbreiden met sensoren en schakelaars?</h2>
      <p>
        Denk vooruit. Wil je later bewegingssensoren, draadloze schakelaars
        of automatiseringen? Dan is een ecosysteem zoals Philips Hue of IKEA
        vaak een betere basis dan losse Wi-Fi lampen.
      </p>

      <h2>3. Sfeer of functioneel licht?</h2>
      <ul>
        <li><strong>Sfeer:</strong> kleur, LED-strips, effecten</li>
        <li><strong>Functioneel:</strong> stabiel wit licht, automatiseringen</li>
      </ul>

      <h2>4. Hub of geen hub?</h2>
      <p>
        Zigbee-verlichting werkt meestal via een hub of bridge. Dat klinkt
        als extra werk, maar levert vaak meer stabiliteit en betere
        automatiseringen op.
      </p>

      <h2>Welke merken kom je tegen?</h2>
      <ul>
        <li><strong>Philips Hue</strong> – premium, zeer stabiel</li>
        <li><strong>IKEA</strong> – betaalbaar Zigbee alternatief</li>
        <li><strong>Tapo</strong> – goedkoop starten via Wi-Fi</li>
        <li><strong>Govee</strong> – vooral sterk in LED-strips en sfeer</li>
      </ul>

       <div className="blogCtaBox">
        <h3>👉 Bekijk onze koopgids: beste slimme verlichting</h3>
        <p className="muted">
          Inclusief onze aanraders voor Philips Hue, IKEA, Tapo en Govee —
          per budget en gebruikssituatie.
        </p>
        <a href="/aanraders/beste-slimme-verlichting">
          Naar de koopgids →
        </a>
      </div>
    </>
  ),
},

  {
  slug: "beste-slimme-camera",
  title: "Beste slimme camera: waar moet je op letten?",
  description:
    "Welke slimme camera past bij jouw huis? Lees waar je op moet letten: binnen of buiten, wifi vs PoE, opslag, privacy en beveiliging.",
  image: "/images/blog/beste-slimme-camera.png",
  category: "Koopgids",
  available: true,

  related: [
    "beste-slimme-deurbel",
    "beste-slimme-sensoren",
    "aqara-vs-tapo"
  ],

  content: (
    <>
      <p className="section-intro">
        Slimme camera’s kunnen je huis veiliger maken, maar alleen als je de
        juiste kiest. In dit artikel leggen we uit waar je op moet letten,
        zodat je geen miskoop doet.
      </p>

      <h2>Binnen- of buitencamera?</h2>
      <p>
        Binnencamera’s zijn compacter en goedkoper. Buitencamera’s zijn
        weerbestendig en hebben vaak beter nachtzicht. Kies altijd een camera
        die past bij de plek waar je hem wilt gebruiken.
      </p>

      <h2>Stroomvoorziening</h2>
      <ul>
        <li><strong>Netstroom:</strong> stabiel en onderhoudsvrij</li>
        <li><strong>Accu:</strong> flexibel plaatsen, maar opladen nodig</li>
        <li><strong>Zonnepaneel:</strong> handig buiten, afhankelijk van zon</li>
      </ul>

      <h2>Wifi of bekabeld (PoE)</h2>
      <p>
        Wifi-camera’s zijn eenvoudig te installeren, maar gevoelig voor
        bereikproblemen. PoE (Power over Ethernet) is betrouwbaarder, vooral
        bij buitencamera’s.
      </p>

      <p>
        Heb je wifi-problemen?{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je wifi voor smart home →
        </Link>
      </p>

      <h2>Opslag & privacy</h2>
      <p>
        Sommige camera’s slaan beelden lokaal op (bijvoorbeeld via een
        SD-kaart of NVR), andere gebruiken cloudopslag. Lokale opslag is vaak
        privacyvriendelijker en goedkoper op de lange termijn.
      </p>

      <h2>Beveiliging & instellingen</h2>
      <ul>
        <li>Gebruik sterke wachtwoorden</li>
        <li>Activeer tweestapsverificatie</li>
        <li>Stel privacyzones in</li>
        <li>Houd firmware up-to-date</li>
      </ul>

      <p>
        Lees ook:{" "}
        <Link href="/tips/privacy-en-veiligheid-smart-home">
          privacy & veiligheid in je smart home
        </Link>
        .
      </p>

      <h2>Klaar om te kiezen?</h2>
      <p>
        We hebben onze beste slimme camera’s overzichtelijk voor je op een
        rij gezet — per situatie en zonder verkooppraat.
      </p>

      <div className="blogCtaBox">
        <h3>👉 Bekijk onze koopgids: beste slimme camera</h3>
        <p className="muted">
          Inclusief onze aanraders voor binnen, buiten, PoE en
          privacyvriendelijke camera’s.
        </p>
        <Link href="/aanraders/beste-slimme-camera">
          Naar de koopgids →
        </Link>
      </div>
    </>
  ),
},

  {
  slug: "beste-slimme-deurbel",
  title: "Slimme deurbel kiezen: waar moet je op letten?",
  description:
    "Waar moet je op letten bij het kiezen van een slimme deurbel? Lees alles over accu vs bedraad, wifi, abonnementen, privacy en integraties.",
  image: "/images/blog/beste-slimme-deurbel.png",
  category: "Koopgids",
  available: true,

  related: [
    "beste-slimme-camera",
    "beste-slimme-sensoren",
    "beste-slimme-stekkers"
  ],

  content: (
    <>
      <p className="section-intro">
        Een slimme deurbel laat je zien wie er aanbelt — waar je ook bent.
        Maar niet elke slimme deurbel past bij elke woning. In deze gids
        leggen we uit waar je op moet letten, zodat je een goede keuze maakt.
      </p>

      <h2>Accu of bedraad</h2>
      <ul>
        <li>
          <strong>Bedraad:</strong> altijd online, geen opladen, meest stabiel
        </li>
        <li>
          <strong>Accu:</strong> makkelijk te installeren, wel regelmatig opladen
        </li>
      </ul>

      <h2>Beeldkwaliteit & kijkhoek</h2>
      <ul>
        <li>Minimaal Full HD (liefst 2K)</li>
        <li>Brede kijkhoek voor bezoekers en pakketjes</li>
        <li>Goed nachtzicht</li>
      </ul>

      <h2>Wifi & betrouwbaarheid</h2>
      <p>
        Slimme deurbellen zijn gevoelig voor wifi-bereik. Slecht signaal kan
        zorgen voor vertraging of gemiste meldingen.
      </p>

      <p>
        Heb je bereikproblemen?{" "}
        <Link href="/tips/wifi-verbeteren-voor-smart-home">
          Zo verbeter je wifi voor smart home →
        </Link>
      </p>

      <h2>Abonnementen & opslag</h2>
      <p>
        Veel slimme deurbellen bieden extra functies via een abonnement,
        zoals videohistorie en slimme detectie. Zonder abonnement heb je
        meestal alleen live beeld.
      </p>

      <h2>Privacy & wetgeving</h2>
      <ul>
        <li>Stel privacyzones in (buren/openbare weg)</li>
        <li>Gebruik audio-opname bewust</li>
        <li>Kies bij voorkeur lokale opslag</li>
      </ul>

      <p>
        Meer hierover lees je in{" "}
        <Link href="/tips/privacy-en-veiligheid-smart-home">
          privacy & veiligheid in je smart home
        </Link>
        .
      </p>

      <h2>Integraties met smart home</h2>
      <p>
        Sommige slimme deurbellen werken beter binnen een bepaald ecosysteem,
        zoals Google Home, Alexa of Home Assistant. Dat kan belangrijk zijn
        als je al een smart home hebt.
      </p>

      <div className="blogCtaBox">
        <h3>👉 Bekijk onze koopgids: beste slimme deurbel</h3>
        <p className="muted">
          We hebben de beste slimme deurbellen per situatie voor je
          geselecteerd: bedraad, accu, zonder abonnement en smart home
          integraties.
        </p>
        <Link href="/aanraders/beste-slimme-deurbel">
          Naar de koopgids →
        </Link>
      </div>
    </>
  ),
},
  {
  slug: "beste-slimme-sensoren",
  title: "Beste slimme sensoren: welke heb je echt nodig?",
  description:
    "Welke slimme sensoren zijn nuttig in een smart home? Ontdek welke sensoren je nodig hebt voor automatiseringen, veiligheid en energiebesparing.",
  image: "/images/blog/beste-slimme-sensoren.png",
  category: "Koopgids",
  available: true,

  related: [
    "beste-smart-home-hub",
    "wat-is-matter",
    "beste-slimme-deurbel"
  ],

  content: (
    <>
      <p className="section-intro">
        Slimme sensoren vormen de basis van een écht slim huis. Ze zorgen
        ervoor dat verlichting, verwarming en beveiliging automatisch
        reageren — zonder dat jij steeds iets hoeft te doen. Maar welke
        sensoren zijn nu echt nuttig?
      </p>

      <h2>Wat doen slimme sensoren?</h2>
      <p>
        Slimme sensoren meten of detecteren wat er in je huis gebeurt:
        beweging, temperatuur, open ramen of zelfs waterlekkage. Die
        informatie gebruik je voor meldingen, automatiseringen en
        energiebesparing.
      </p>

      <h2>De belangrijkste soorten slimme sensoren</h2>

      <h3>1. Bewegings- en aanwezigheidssensoren</h3>
      <p>
        Deze sensoren detecteren of er iemand aanwezig is. Ze worden vaak
        gebruikt om verlichting automatisch aan te zetten, maar ook voor
        beveiliging en energiebesparing.
      </p>

      <h3>2. Deur- en raamsensoren</h3>
      <p>
        Ideaal voor beveiliging en comfort. Denk aan meldingen bij een open
        deur of het automatisch uitschakelen van verwarming bij een open
        raam.
      </p>

      <h3>3. Temperatuur- en luchtvochtigheidssensoren</h3>
      <p>
        Met deze sensoren krijg je inzicht in je binnenklimaat en kun je
        slimmer verwarmen en ventileren.
      </p>

      <h3>4. Water- en lekkagesensoren</h3>
      <p>
        Waterleksensoren waarschuwen direct bij lekkage. Vooral handig bij
        wasmachines, vaatwassers en cv-installaties.
      </p>

      <h2>Heb je een hub nodig?</h2>
      <p>
        In de meeste gevallen wel. Slimme sensoren werken vaak via{" "}
        <strong>Zigbee</strong>, <strong>Z-Wave</strong> of{" "}
        <strong>Matter/Thread</strong> en hebben een hub nodig om
        automatiseringen mogelijk te maken.
      </p>

      <p>
        Meer hierover lees je in:{" "}
        <Link href="/tips/wat-is-een-smart-home-hub">
          wat is een smart home hub?
        </Link>
      </p>

      <h2>Welke sensoren passen bij jou?</h2>
      <p>
        Dat hangt af van wat je wilt automatiseren. Sommige mensen beginnen
        met alleen bewegingssensoren, anderen kiezen meteen voor beveiliging
        en energiebesparing.
      </p>

      <div className="blogCtaBox">
        <h3>👉 Bekijk onze koopgids: beste slimme sensoren</h3>
        <p className="muted">
          Inclusief onze aanraders voor bewegings-, deur-, klimaat- en
          waterleksensoren — per situatie uitgelegd.
        </p>
        <Link href="/aanraders/beste-slimme-sensoren">
          Naar de koopgids →
        </Link>
      </div>
    </>
  ),
},
];
