import Link from "next/link";

export const howto = [
  {
    slug: "beginnen-met-smart-home",
    title: "Hoe begin je met een smart home?",
    categories: ["basis", "hub"],
    shortAnswer:
      "Begin met één wifi-apparaat dat je dagelijks gebruikt: een slimme lamp (€8-15) of stekker (€10-15). Download de app, koppel aan 2.4GHz wifi en stel een timer in. Geen hub nodig.",
    description:
      "Stap-voor-stap uitleg om zonder fouten te beginnen met een smart home. Praktisch, duidelijk en zonder technisch gedoe. Klaar in een middag.",
    image: "/images/how-to/beginnen-met-smart-home.png",
    available: true,
    dateModified: "2026-04-19",
    kortAntwoord:
      "Kies één doel — verlichting, gemak of veiligheid — en start met één wifi-apparaat dat geen hub nodig heeft. De meest gemaakte fout is te veel tegelijk kopen. Begin klein, leer hoe het werkt en voeg daarna stap voor stap meer toe.",
    relatedProductSlugs: [
      "philips-hue-white-ambiance-starterkit",
      "tapo-l530e",
      "aqara-deur-raamsensor-p2",
      "tapo-p115",
    ],

    content: (
      <>
        <p>
          Een smart home klinkt ingewikkeld. Veel mensen denken dat je meteen
          een compleet systeem nodig hebt met dure hubs, sensoren en
          automatiseringen. Dat is niet zo.
        </p>

        <p>
          Je kunt klein beginnen. En slim opbouwen. In deze handleiding leg ik
          stap voor stap uit hoe je zonder stress start met een smart home — en
          welke keuzes belangrijk zijn om later geen spijt te krijgen.
        </p>

        <h2>Stap 1: Bepaal wat je wilt automatiseren</h2>

        <p>
          Begin niet met technologie. Begin met een probleem. Wil je energie
          besparen? Meer comfort? Meer veiligheid? Of gewoon gemak?
        </p>

        <p>De meeste mensen starten met:</p>

        <ul>
          <li>Slimme verlichting</li>
          <li>Slimme stekkers</li>
          <li>Een slimme deurbel</li>
        </ul>

        <h2>Stap 2: Kies je ecosysteem</h2>

        <p>
          Dit is de fout die veel beginners maken: losse apparaten kopen zonder
          te kijken of ze samenwerken.
        </p>

        <p>
          Wil je flexibiliteit en uitbreidingsmogelijkheden? Dan is een smart
          home hub een goede keuze.
        </p>

        <p>
          Bekijk bijvoorbeeld onze{" "}
          <a href="/aanraders/beste-smart-home-hub">beste smart home hubs</a>{" "}
          om te zien welke het meest geschikt zijn.
        </p>

        <h2>Stap 3: Begin met slimme verlichting</h2>

        <p>
          Slimme verlichting is de perfecte start omdat installatie simpel is
          en je direct resultaat ziet.
        </p>

        <p>
          Binnen 10 minuten kun je lampen dimmen, tijdschema’s instellen en ze
          automatisch laten inschakelen bij zonsondergang.
        </p>

        <p>
          Bekijk ook onze{" "}
          <a href="/aanraders/beste-slimme-verlichting">
            beste slimme verlichting
          </a>{" "}
          als je direct goed wilt beginnen.
        </p>

        <h2>Stap 4: Voeg slimme stekkers toe</h2>

        <p>
          Met slimme stekkers maak je bestaande apparaten slim. Denk aan een
          staande lamp, koffiezetapparaat of ventilator.
        </p>

        <p>
          Bekijk hier de{" "}
          <a href="/aanraders/beste-slimme-stekkers">beste slimme stekkers</a>{" "}
          om eenvoudig te starten.
        </p>

        <h2>Stap 5: Zorg voor stabiele wifi</h2>

        <p>
          Veel smart home problemen ontstaan door slechte wifi. Plaats je router
          centraal en gebruik bij voorkeur 2.4GHz voor smart home apparaten.
        </p>

        <p>Heb je een groter huis? Dan kan een mesh-systeem uitkomst bieden.</p>

        <h2>Conclusie</h2>

        <p>
          Een smart home hoeft niet duur of ingewikkeld te zijn. Begin klein,
          bouw logisch uit en kies apparaten die goed samenwerken.
        </p>

        <p>Zo bouw je stap voor stap een slim huis — zonder gedoe.</p>
      </>
    ),

    faq: [
      {
        question: "Wat heb je minimaal nodig om te beginnen met een smart home?",
        answer:
          "Je kunt beginnen met één wifi-apparaat, zoals een slimme lamp of stekker. Je hebt alleen een smartphone en een stabiele wifi-verbinding nodig. Een hub is handig maar niet verplicht voor een eerste stap.",
      },
      {
        question: "Is een smart home hub verplicht?",
        answer:
          "Nee. Met wifi-apparaten van Tapo, Govee of IKEA kun je beginnen zonder hub. Een hub zoals Homey of Home Assistant is pas echt handig als je meerdere merken wilt combineren of geavanceerde automatiseringen wilt maken.",
      },
      {
        question: "Wat is een goede eerste aankoop?",
        answer:
          "Slimme verlichting of een slimme stekker zijn de beste startpunten. Ze zijn goedkoop, eenvoudig te installeren en je ziet direct resultaat zonder ingewikkelde instellingen.",
      },
      {
        question: "Welke merken zijn het meest betrouwbaar voor beginners?",
        answer:
          "TP-Link Tapo is de meest aanbevolen keuze voor beginners: betaalbaar, makkelijk te koppelen en een goede app. Philips Hue is stabieler en uitgebreider zodra je later wilt uitbreiden met een volledig ecosysteem.",
      },
    ],
  },
  {
    slug: "slimme-verlichting-installeren",
    title: "Hoe installeer je slimme verlichting?",
    categories: ["verlichting", "basis"],
    toc: [
      { id: "stap-1", label: "Stap 1: Kies het juiste type lamp" },
      { id: "stap-2", label: "Stap 2: Lamp installeren" },
      { id: "stap-3", label: "Stap 3: App en koppeling" },
      { id: "stap-4", label: "Stap 4: Automatisering instellen" },
      { id: "fouten", label: "Veelgemaakte fouten" },
    ],
    shortAnswer:
      "Draai de slimme lamp in de fitting, download de bijbehorende app en koppel de lamp via 2.4 GHz wifi of een Zigbee hub. Stel daarna een schema of automatisering in via de app.",
    description:
      "Stap-voor-stap uitleg voor het installeren van slimme verlichting. Inclusief tips om fouten te voorkomen — van lamp kiezen tot automatisering.",
    image: "/images/how-to/slimme-verlichting-installeren.png",
    available: true,
    dateModified: "2026-04-19",
    kortAntwoord:
      "Draai de slimme lamp in de fitting, installeer de app van het merk en volg de koppelingsstappen. Zorg dat je wifi op 2.4 GHz staat. Belangrijk: de wandschakelaar moet altijd aan blijven — zet de lamp uit via de app, nooit via de schakelaar.",
    relatedProductSlugs: ["philips-hue-white-ambiance-starterkit", "tapo-l530e", "innr-zigbee-e27"],

    content: (
      <>
        <p>
          Slimme verlichting is voor veel mensen de eerste stap naar een smart
          home. Het is relatief goedkoop, eenvoudig te installeren en je ziet
          direct resultaat.
        </p>

        <p>
          In deze handleiding leggen we stap voor stap uit hoe je slimme
          verlichting installeert en waar je op moet letten.
        </p>

        <h2>Stap 1: Controleer je fitting</h2>

        <p>Kijk eerst welke fitting je lamp heeft. De meest voorkomende zijn:</p>

        <ul>
          <li>E27 (grote fitting)</li>
          <li>E14 (kleine fitting)</li>
          <li>GU10 (spotjes)</li>
        </ul>

        <p>Koop altijd een slimme lamp die past bij jouw huidige armatuur.</p>

        <h2>Stap 2: Kies het juiste systeem</h2>

        <p>Sommige slimme lampen werken via wifi, andere via Zigbee met een hub.</p>

        <p>
          Wil je meerdere lampen combineren en automatiseren? Dan is een hub
          vaak stabieler.
        </p>

        <p>
          Bekijk onze{" "}
          <Link href="/aanraders/beste-slimme-verlichting">
            beste slimme verlichting
          </Link>{" "}
          om een goede keuze te maken.
        </p>

        <h2>Stap 3: Draai de oude lamp eruit</h2>

        <p>
          Zet eerst de schakelaar uit. Draai daarna de oude lamp eruit en plaats
          de slimme lamp in dezelfde fitting.
        </p>

        <h2>Stap 4: Installeer de app</h2>

        <p>
          Download de bijbehorende app van de fabrikant en volg de
          installatiestappen.
        </p>

        <p>
          Meestal moet je de lamp een paar seconden aan en uit zetten om hem in
          koppelmodus te zetten.
        </p>

        <h2>Stap 5: Stel automatiseringen in</h2>

        <p>Zodra de lamp is gekoppeld, kun je schema’s instellen zoals:</p>

        <ul>
          <li>Lampen aan bij zonsondergang</li>
          <li>Lampen uit om 23:00 uur</li>
          <li>Dimbaar licht in de avond</li>
        </ul>

        <p>
          Wil je meerdere apparaten combineren? Dan kun je later uitbreiden met
          een{" "}
          <Link href="/aanraders/beste-smart-home-hub">smart home hub</Link>.
        </p>

        <h2>Veelgemaakte fouten</h2>

        <ul>
          <li>De wandschakelaar uitzetten (lamp moet altijd stroom hebben)</li>
          <li>Wifi signaal te zwak</li>
          <li>Te veel verschillende merken combineren</li>
        </ul>

        <h2>Conclusie</h2>

        <p>
          Slimme verlichting installeren is eenvoudig en een perfecte eerste
          stap richting een slim huis.
        </p>

        <p>Begin met één ruimte, test wat voor jou werkt en breid daarna uit.</p>
      </>
    ),

    faq: [
      {
        question: "Moet de wandschakelaar altijd aan blijven?",
        answer:
          "Ja. Een slimme lamp heeft altijd stroom nodig. Als je de wandschakelaar uitzet, verliest de lamp zijn verbinding en kan hij niet meer gestuurd worden via de app of automatiseringen.",
      },
      {
        question: "Werkt elke slimme lamp in elke fitting?",
        answer:
          "Nee, let op de fitting: E27 (grote fitting), E14 (kleine fitting) of GU10 (spotjes). Koop altijd een lamp die past bij jouw armatuur en controleer dit voordat je bestelt.",
      },
      {
        question: "Kan ik meerdere merken slimme lampen combineren?",
        answer:
          "Dat kan, maar het werkt het best binnen één ecosysteem. Met een hub zoals Homey kun je wel verschillende merken samen aansturen en automatiseringen maken over merken heen.",
      },
      {
        question: "Hoe koppel ik een slimme lamp die al aan iemand anders account is?",
        answer:
          "Reset de lamp eerst (bij de meeste merken: 6× snel aan en uit). Daarna kun je hem als nieuw apparaat toevoegen aan jouw account via de app.",
      },
    ],
  },
  {
  slug: "wifi-verbeteren-voor-smart-home",
  title: "Hoe verbeter je wifi voor je smart home?",
  categories: ["wifi", "basis"],
  shortAnswer:
    "Smart home apparaten werken op 2.4GHz wifi, niet 5GHz. Controleer dit als eerste. Heb je meer dan 15 apparaten? Overweeg een mesh-systeem zoals TP-Link Deco.",
  description:
    "Verbeter je wifi voor een stabiel smart home. Praktische tips om verbindingsproblemen en uitval te voorkomen.",
  image: "/images/how-to/wifi-verbeteren-voor-smart-home.png",
  relatedProductSlugs: ["tp-link-deco-xe75", "tp-link-deco-xe75-2pack", "google-nest-wifi-pro"],
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Zet je router centraal in huis, controleer of 2.4 GHz is ingeschakeld en schakel smart home apparaten van 5 GHz over naar 2.4 GHz. In een groter huis of bij veel apparaten geeft een mesh-systeem de meeste verbetering.",

  content: (
    <>
      <p>
        Veel smart home problemen worden niet veroorzaakt door het apparaat,
        maar door een slechte wifi-verbinding. Lampen die niet reageren,
        stekkers die offline gaan of camera’s die haperen — vaak ligt het
        aan je netwerk.
      </p>

      <p>
        In deze handleiding lees je hoe je je wifi optimaliseert voor een
        stabiel en betrouwbaar smart home.
      </p>

      <h2>Stap 1: Plaats je router op de juiste plek</h2>

      <p>
        Zet je router centraal in huis en niet in een meterkast of achter
        dikke muren. Hoe minder obstakels, hoe beter het signaal.
      </p>

      <h2>Stap 2: Gebruik 2.4GHz voor smart home apparaten</h2>

      <p>
        De meeste slimme apparaten werken beter op 2.4GHz dan op 5GHz.
        2.4GHz heeft een groter bereik en gaat beter door muren heen.
      </p>

      <p>
        Controleer in je routerinstellingen of 2.4GHz is ingeschakeld.
      </p>

      <h2>Stap 3: Overweeg een mesh-systeem</h2>

      <p>
        Heb je een groter huis of meerdere verdiepingen? Dan kan een
        mesh-systeem zorgen voor volledige dekking zonder dode zones.
      </p>

      <p>
        Dit is vooral belangrijk als je meerdere slimme apparaten gebruikt,
        zoals verlichting, camera’s en stekkers.
      </p>

      <h2>Stap 4: Beperk het aantal verschillende merken</h2>

      <p>
        Apparaten van verschillende merken kunnen meer netwerkverkeer
        veroorzaken. Kies bij voorkeur één ecosysteem om stabiliteit te
        behouden.
      </p>

      <p>
        Bekijk bijvoorbeeld onze{" "}
        <Link href="/aanraders/beste-smart-home-hub">
          beste smart home hubs
        </Link>{" "}
        als je apparaten centraal wilt beheren.
      </p>

      <h2>Stap 5: Controleer je internetsnelheid</h2>

      <p>
        Voor de meeste smart home apparaten is geen extreem hoge snelheid
        nodig, maar stabiliteit is cruciaal.
      </p>

      <p>
        Een stabiele verbinding voorkomt vertraging en uitval van apparaten
        zoals slimme verlichting of stekkers.
      </p>

      <h2>Veelgemaakte fouten</h2>

      <ul>
        <li>Router in de meterkast plaatsen</li>
        <li>Alleen 5GHz gebruiken</li>
        <li>Geen firmware-updates uitvoeren</li>
        <li>Te veel apparaten op een zwak netwerk aansluiten</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Een stabiel wifi-netwerk is de basis van elk smart home. Zonder
        goede verbinding werkt zelfs het beste apparaat niet goed.
      </p>

      <p>
        Optimaliseer je netwerk voordat je nieuwe slimme apparaten koopt —
        dat bespaart frustratie én geld.
      </p>
    </>
  ),

  faq: [
    {
      question: "Waarom werken slimme apparaten beter op 2.4 GHz?",
      answer:
        "2.4 GHz heeft een groter bereik en gaat beter door muren dan 5 GHz. De meeste smart home apparaten zijn specifiek ontworpen voor 2.4 GHz en kunnen niet eens verbinden op het 5 GHz netwerk.",
    },
    {
      question: "Wat is een mesh wifi systeem?",
      answer:
        "Een mesh-systeem bestaat uit meerdere wifi-punten die samenwerken als één netwerk. Apparaten schakelen automatisch over naar het dichtste punt. Dat geeft betere dekking zonder dode hoeken in grote woningen.",
    },
    {
      question: "Kan ik een apart netwerk maken voor smart home apparaten?",
      answer:
        "Ja. De meeste moderne routers bieden een gastnetwerk aan. Je kunt smart home apparaten hierop zetten, zodat ze gescheiden zijn van je computers en telefoons — dat is ook iets veiliger.",
    },
    {
      question: "Hoeveel apparaten kan mijn router tegelijk aan?",
      answer:
        "Een gewone thuisrouter kan 20–50 apparaten aan, maar bij meer apparaten merk je snelheidsvermindering. Een mesh-systeem of router met MU-MIMO technologie is beter als je tientallen slimme apparaten hebt.",
    },
  ],
},
{
  slug: "smart-home-hub-installeren",
  title: "Hoe installeer je een smart home hub?",
  categories: ["hub", "basis"],
  shortAnswer:
    "Sluit de hub aan op je router via een netwerkkabel, download de bijbehorende app en voeg vervolgens je slimme apparaten één voor één toe. De eerste koppeling duurt even, maar daarna gaat uitbreiden snel.",
  description:
    "Stap-voor-stap uitleg voor het installeren en instellen van een smart home hub. Leer hoe je apparaten koppelt en automatiseringen maakt.",
  image: "/images/how-to/smart-home-hub-installeren.png",
  relatedProductSlugs: ["homey-pro-early-2023", "home-assistant-green", "aqara-hub-m3"],
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Sluit de hub aan op je router via een netwerkkabel, install de bijbehorende app en voeg je eerste apparaat toe. Controleer vooraf of je hub het protocol van je apparaten ondersteunt — Zigbee, Z-Wave, Matter of wifi.",

  content: (
    <>
      <p>
        Een smart home hub is het brein van je slimme huis. Hiermee verbind
        je verschillende apparaten met elkaar en kun je automatiseringen
        maken die verder gaan dan losse apps.
      </p>

      <p>
        In deze handleiding lees je stap voor stap hoe je een smart home hub
        installeert en optimaal instelt.
      </p>

      <h2>Stap 1: Kies de juiste hub</h2>

      <p>
        Niet elke hub ondersteunt dezelfde protocollen. Controleer of jouw
        apparaten werken met Zigbee, Z-Wave, WiFi of Matter.
      </p>

      <p>
        Bekijk onze{" "}
        <Link href="/aanraders/beste-smart-home-hub">
          beste smart home hubs
        </Link>{" "}
        om een geschikte keuze te maken.
      </p>

      <h2>Stap 2: Sluit de hub aan</h2>

      <p>
        Sluit de hub aan op stroom en verbind hem met je router via een
        netwerkkabel of wifi (afhankelijk van het model).
      </p>

      <p>
        Wacht tot het apparaat volledig is opgestart voordat je verder
        gaat.
      </p>

      <h2>Stap 3: Installeer de bijbehorende app</h2>

      <p>
        Download de officiële app van de fabrikant en volg de
        installatiestappen om de hub toe te voegen aan je account.
      </p>

      <h2>Stap 4: Voeg apparaten toe</h2>

      <p>
        Zet je slimme apparaten in koppelmodus en voeg ze via de app toe
        aan je hub.
      </p>

      <p>
        Begin met verlichting of stekkers. Bekijk bijvoorbeeld onze{" "}
        <Link href="/aanraders/beste-slimme-verlichting">
          beste slimme verlichting
        </Link>{" "}
        om direct goed te starten.
      </p>

      <h2>Stap 5: Maak je eerste automatisering</h2>

      <p>
        Zodra apparaten zijn gekoppeld, kun je automatiseringen maken zoals:
      </p>

      <ul>
        <li>Lichten aan bij zonsondergang</li>
        <li>Apparaten uitschakelen als je het huis verlaat</li>
        <li>Bewegingssensor → lamp aan</li>
      </ul>

      <h2>Veelgemaakte fouten</h2>

      <ul>
        <li>Hub te ver van router plaatsen</li>
        <li>Te veel apparaten tegelijk koppelen</li>
        <li>Vergeten firmware-updates uit te voeren</li>
        <li>Apparaten kopen die niet compatibel zijn</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Een smart home hub geeft je maximale controle en flexibiliteit.
        Door apparaten centraal te beheren, maak je je slimme huis stabieler
        en toekomstbestendiger.
      </p>
    </>
  ),

  faq: [
    {
      question: "Welke hub past bij mij?",
      answer:
        "Homey Pro is de beste keuze voor de meeste mensen: gebruiksvriendelijk en ondersteunt Zigbee, Z-Wave, Matter en wifi. Home Assistant is beter voor wie maximale controle en lokale werking wil. Bekijk onze koopgids voor een compleet overzicht.",
    },
    {
      question: "Hoe ver mag de hub van de router staan?",
      answer:
        "Het liefst zo dicht mogelijk. Gebruik een netwerkkabel voor de meeste stabiliteit — draadloze verbinding werkt ook, maar een bekabelde verbinding is betrouwbaarder voor een hub die 24/7 online moet zijn.",
    },
    {
      question: "Moet ik de hub 24/7 aan laten staan?",
      answer:
        "Ja, dat is het meest praktisch. Je hub is het centrum van alle automatiseringen. Als hij uit staat, werken flows en schema's niet meer. De meeste hubs verbruiken heel weinig stroom — gemiddeld 2 tot 5 watt.",
    },
    {
      question: "Kan ik bestaande wifi-apparaten toevoegen aan een hub?",
      answer:
        "Dat hangt af van de hub en het merk. Homey en Home Assistant ondersteunen veel wifi-apparaten, maar niet allemaal. Zigbee-apparaten werken het best met hubs die Zigbee ingebouwd hebben.",
    },
  ],
},
  {
  slug: "slim-huis-beveiligen",
  title: "Hoe beveilig je je slimme huis?",
  categories: ["veiligheid", "basis"],
  shortAnswer:
    "Gebruik sterke, unieke wachtwoorden voor je smart home apps en je wifi-netwerk. Zet twee-factor-authenticatie aan waar mogelijk en houd firmware van hubs en camera's altijd up-to-date.",
  description:
    "Leer hoe je je smart home beveiligt tegen hackers en ongewenste toegang. Praktische tips voor een veilig en stabiel slim huis.",
  relatedProductSlugs: ["eufy-indoor-cam", "ring-video-deurbel", "aqara-rookmelder"],
  image: "/images/how-to/slim-huis-beveiligen.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Gebruik unieke wachtwoorden voor alle accounts, houd firmware up-to-date en kies betrouwbare merken. Een apart wifi-netwerk voor smart home apparaten verkleint het risico als er ooit één apparaat gecompromitteerd wordt.",

  content: (
    <>
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
        Kies voor bekende en goed ondersteunde merken. Bekijk bijvoorbeeld{" "}
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
    </>
  ),

  faq: [
    {
      question: "Zijn slimme apparaten veilig?",
      answer:
        "Ja, mits correct ingesteld. Gebruik sterke wachtwoorden, kies betrouwbare merken en houd firmware up-to-date. Vermijd goedkope no-name apparaten die vaak geen beveiligingsupdates ontvangen.",
    },
    {
      question: "Hoe weet ik of mijn smart home gehackt is?",
      answer:
        "Let op onverwacht gedrag: apparaten die zonder aanleiding schakelen, vreemde verbindingen in je router of onbekende logins in je apps. Bekijk de toegangslogboeken in je hub-app als je iets vreemds vermoedt.",
    },
    {
      question: "Welke camera's zijn het veiligst voor thuis?",
      answer:
        "Camera's van Eufy, Aqara en Reolink met lokale opslag en end-to-end encryptie zijn de veiligste keuzes. Vermijd goedkope cameras van onbekende merken zonder duidelijk privacybeleid.",
    },
    {
      question: "Is een VPN nodig voor een smart home?",
      answer:
        "Voor de meeste thuisgebruikers niet noodzakelijk. Sterke wachtwoorden en firmware-updates zijn effectiever. Een VPN is nuttig als je via externe toegang je thuisnetwerk wilt bereiken.",
    },
  ],
},
{
  slug: "lamp-automatisch-aan-bij-beweging",
  title: "Lamp automatisch aan bij beweging: zo stel je het in (stap voor stap)",
  seoTitle: "Lamp automatisch aan bij beweging instellen",
  categories: ["verlichting", "sensor", "automatisering"],
  shortAnswer:
    "Koppel een bewegingssensor en slimme lamp aan dezelfde app of hub. Maak een automatisering: sensor detecteert beweging → lamp gaat aan. Voeg een tijdslot toe zodat het alleen 's avonds werkt. Klaar in ~10 minuten.",
  description:
    "Wil je dat je lamp automatisch aangaat bij beweging? Ontdek stap voor stap hoe je een bewegingssensor koppelt aan slimme verlichting.",
  relatedProductSlugs: ["aqara-motion-sensor", "philips-hue-motion-sensor", "tapo-l530e"],
  image: "/images/how-to/lamp-automatisch-aan-bij-beweging.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Je hebt een slimme lamp en een bewegingssensor nodig die in hetzelfde systeem werken — verbind ze via een hub of app en stel in: als beweging → lamp aan. Voeg daarna een tijdvoorwaarde toe zodat de lamp alleen 's avonds reageert, en stel een uitschakelvertraging van 2–5 minuten in.",

  content: (
    <>
      <p>
        Wil je dat een lamp automatisch aangaat zodra je een ruimte binnenkomt?
        Dit is een van de meest gebruikte smart home automatiseringen. Vooral
        handig in de hal, op de trap of in het toilet.
      </p>

      <p>
        Je hebt hiervoor een <strong>bewegingssensor</strong> en{" "}
        <a href="/blog/wat-is-slimme-verlichting">
          slimme verlichting
        </a>{" "}
        nodig. Samen zorgen ze ervoor dat licht automatisch reageert op jouw
        beweging.
      </p>

      <p>
        Weet je nog niet precies hoe een sensor werkt? Lees dan eerst{" "}
        <a href="/blog/wat-is-een-bewegingssensor">
          wat een bewegingssensor is en hoe het werkt
        </a>
        .
      </p>

      <h2>Wat heb je nodig?</h2>

      <ul>
        <li>Slimme lamp of slimme schakelaar</li>
        <li>Bewegingssensor</li>
        <li>Eventueel een smart home hub</li>
        <li>Een app zoals Homey of Home Assistant</li>
      </ul>

      <h2>Stap 1: Installeer je slimme verlichting</h2>

      <p>
        Zorg dat je lamp werkt via de app en dat je deze handmatig kunt bedienen.
        Dit is de basis voordat je automatiseringen toevoegt.
      </p>

      <p>
        Werk je met meerdere apparaten of wil je later uitbreiden? Dan is een{" "}
        <a href="/aanraders/beste-smart-home-hub">
          smart home hub
        </a>{" "}
        vaak een slimme keuze.
      </p>

      <h2>Stap 2: Koppel de bewegingssensor</h2>

      <p>
        Voeg de bewegingssensor toe aan je app of hub. Controleer of de sensor
        beweging detecteert en meldingen geeft.
      </p>

      <p>
        Veel sensoren werken via{" "}
        <a href="/blog/wat-is-zigbee">Zigbee</a>, wat stabieler is dan wifi
        bij meerdere apparaten.
      </p>

      <h2>Stap 3: Maak een automatisering</h2>

      <p>
        Stel een eenvoudige regel in:
      </p>

      <ul>
        <li><strong>Als:</strong> beweging gedetecteerd</li>
        <li><strong>Dan:</strong> lamp aan</li>
      </ul>

      <p>
        Gebruik je Homey? Bekijk dan ook{" "}
        <a href="/how-to/homey-automatisering-maken">
          hoe je een automatisering maakt in Homey
        </a>
        .
      </p>

      <h2>Stap 4: Stel slimme voorwaarden in</h2>

      <p>
        Voor een betere ervaring voeg je extra voorwaarden toe:
      </p>

      <ul>
        <li>Alleen als het donker is</li>
        <li>Alleen in de avond of nacht</li>
        <li>Automatisch uit na 1–5 minuten</li>
      </ul>

      <h2>Veelgemaakte fouten</h2>

      <ul>
        <li>Sensor verkeerd geplaatst (detectiehoek)</li>
        <li>Lamp en sensor niet in hetzelfde systeem</li>
        <li>Geen uitschakelvertraging ingesteld</li>
      </ul>

      <h2>Waar is dit het handigst?</h2>

      <ul>
        <li>Hal en gang</li>
        <li>Trap of overloop</li>
        <li>Toilet</li>
        <li>Buiten bij de voordeur</li>
      </ul>

      <h2>Beste setup kiezen</h2>

      <p>
        Wil je een stabiel systeem dat goed werkt met sensoren en
        automatiseringen? Bekijk dan onze{" "}
        <a href="/aanraders/beste-smart-home-hub">
          beste smart home hubs
        </a>
        .
      </p>

      <h2>Conclusie</h2>

      <p>
        Een lamp automatisch laten aangaan bij beweging is een eenvoudige maar
        krachtige automatisering. Met de juiste sensor en slimme verlichting
        maak je je huis direct comfortabeler en slimmer.
      </p>
    </>
  ),

  faq: [
    {
      question: "Werkt dit ook zonder hub?",
      answer:
        "Ja, sommige systemen werken zonder hub. Tapo-sensoren en -lampen kun je direct via de Tapo app combineren. Voor Zigbee-sensoren heb je wel een hub nodig zoals Homey of Home Assistant.",
    },
    {
      question: "Welke bewegingssensor werkt met Philips Hue?",
      answer:
        "Philips heeft een eigen bewegingssensor die direct werkt via de Hue Bridge. Andere Zigbee 3.0-sensoren zoals Aqara werken ook goed met de Hue Bridge.",
    },
    {
      question: "Hoe stel ik in dat de lamp na 5 minuten vanzelf uitgaat?",
      answer:
        "In Homey gebruik je een timer in de flow: 'Dan: lamp aan, na 5 minuten: lamp uit'. In de Tapo app stel je dit in via automatiseringen met een tijdvertraging.",
    },
    {
      question: "Wat is het verschil tussen een bewegingssensor en aanwezigheidssensor?",
      answer:
        "Een bewegingssensor detecteert alleen beweging — als je stilzit, ziet hij je niet meer. Een aanwezigheidssensor zoals de Aqara FP2 gebruikt radar en detecteert ook of iemand aanwezig is terwijl die stilzit.",
    },
    {
      question: "Kan ik instellen dat de lamp alleen 's avonds aangaat?",
      answer:
        "Ja. Voeg een voorwaarde toe in je automatisering: 'Alleen tussen 22:00 en 07:00' of 'Alleen als het buiten donker is'. Zo reageert de sensor overdag niet op beweging.",
    },
  ],
},
{
  slug: "slimme-verlichting-koppelen-lukt-niet",
  title: "Slimme verlichting koppelen lukt niet? Zo los je het op (stap voor stap)",
  seoTitle: "Slimme verlichting koppelen lukt niet",
  categories: ["wifi", "verlichting"],
  shortAnswer:
    "Controleer of je lamp op 2.4 GHz wifi zit en niet op 5 GHz. Reset de lamp door hem 5 keer kort aan en uit te zetten. Bij Zigbee-lampen: houd de lamp dicht bij de hub tijdens de eerste koppeling.",
  description:
    "Lukt het niet om slimme verlichting te koppelen? Ontdek de meest voorkomende problemen en oplossingen voor wifi en Zigbee lampen.",
  image: "/images/how-to/slimme-verlichting-koppelen-lukt-niet.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Controleer of je telefoon op 2.4 GHz wifi zit (niet 5 GHz), reset de lamp door hem 6× snel aan en uit te zetten en voeg hem opnieuw toe via de app. Dit lost het probleem in de meeste gevallen direct op.",
  relatedProductSlugs: ["philips-hue-white-ambiance-starterkit", "tapo-l530e", "homey-bridge"],

  content: (
    <>
      <p>
        Lukt het niet om je <strong>slimme verlichting</strong> te koppelen?
        Dit is een van de meest voorkomende problemen bij smart home.
      </p>

      <p>
        Gelukkig ligt het probleem bijna altijd aan een paar simpele dingen,
        zoals wifi, instellingen of de manier waarop je de lamp probeert toe te voegen.
      </p>

      <p>
        Weet je nog niet precies hoe slimme lampen werken? Lees dan eerst{" "}
        <a href="/blog/wat-is-slimme-verlichting">
          wat slimme verlichting is
        </a>
        .
      </p>

      <h2>Controleer of je wifi geschikt is</h2>

      <p>
        Veel slimme lampen werken alleen op 2.4 GHz wifi. Zit je telefoon op
        5 GHz? Dan kan koppelen mislukken.
      </p>

      <p>
        Heb je vaker problemen? Bekijk dan ook{" "}
        <a href="/tips/hoe-verbeter-je-wifi-voor-je-smart-home">
          hoe je wifi verbetert voor je smart home
        </a>
        .
      </p>

      <h2>Reset de slimme lamp</h2>

      <p>
        In veel gevallen helpt het om de lamp te resetten. Dit doe je meestal
        door de lamp meerdere keren snel aan en uit te zetten.
      </p>

      <p>
        Daarna verschijnt de lamp weer als nieuw apparaat in de app.
      </p>

      <h2>Gebruik de juiste app</h2>

      <p>
        Controleer of je de juiste app gebruikt. Sommige lampen werken alleen
        met hun eigen app en niet direct met bijvoorbeeld Homey of Google Home.
      </p>

      <h2>Gebruik je Zigbee? Controleer je hub</h2>

      <p>
        Werkt je lamp via{" "}
        <a href="/blog/wat-is-zigbee">Zigbee</a>? Dan heb je een hub nodig.
      </p>

      <p>
        Zorg dat:
      </p>

      <ul>
        <li>Je hub aan staat</li>
        <li>De lamp dichtbij de hub is tijdens koppelen</li>
        <li>De lamp niet al gekoppeld is aan een ander systeem</li>
      </ul>

      <p>
        Heb je nog geen hub? Bekijk dan onze{" "}
        <a href="/aanraders/beste-smart-home-hub">
          beste smart home hubs
        </a>
        .
      </p>

      <h2>Veelvoorkomende problemen</h2>

      <ul>
        <li>Verkeerd wifi netwerk</li>
        <li>Te ver van router of hub</li>
        <li>App niet up-to-date</li>
        <li>Lamp al gekoppeld aan ander account</li>
      </ul>

      <h2>Werkt het nog steeds niet?</h2>

      <p>
        Probeer de lamp opnieuw toe te voegen en zorg dat je stap voor stap
        werkt. In de meeste gevallen werkt het daarna direct.
      </p>

      <h2>Beste slimme verlichting kiezen</h2>

      <p>
        Heb je vaker problemen of wil je betrouwbaardere lampen? Bekijk dan onze{" "}
        <a href="/aanraders/beste-slimme-verlichting">
          beste slimme verlichting
        </a>
        .
      </p>

      <h2>Conclusie</h2>

      <p>
        Problemen met koppelen komen meestal door wifi, instellingen of de app.
        Door deze stappen te volgen los je het probleem in de meeste gevallen
        snel op.
      </p>
    </>
  ),

  faq: [
    {
      question: "Waarom herkent de app mijn lamp niet?",
      answer:
        "Controleer of je op 2.4 GHz wifi zit, de lamp is gereset en de lamp is ingeschakeld. Sommige apps vereisen Bluetooth aan tijdens het koppelen. Kijk ook of je app-versie up-to-date is.",
    },
    {
      question: "Hoe reset ik een slimme lamp?",
      answer:
        "Bij de meeste wifi-lampen: zet de lamp 6× snel aan en uit (elke halve seconde). Bij Philips Hue: gebruik de Hue Bridge of doe een factory reset via de app. Raadpleeg de handleiding voor je specifieke model.",
    },
    {
      question: "Mijn lamp koppelt maar gaat daarna meteen offline — wat doe ik?",
      answer:
        "Dit is bijna altijd een wifi-signaalprobleem. Zorg dat het signaal sterk genoeg is op de plek van de lamp. Controleer ook of je router het maximale aantal gekoppelde apparaten heeft bereikt.",
    },
    {
      question: "Kan ik een lamp van merk A koppelen aan de app van merk B?",
      answer:
        "In de meeste gevallen niet direct. Elke fabrikant heeft zijn eigen app. Met een hub zoals Homey kun je merken combineren. Matter-lampen kunnen worden toegevoegd aan elke Matter-controller.",
    },
  ],
},
{
  slug: "bewegingssensor-instellen",
  title: "Bewegingssensor instellen: zo werkt het stap voor stap",
  seoTitle: "Bewegingssensor instellen: stap voor stap",
  categories: ["sensor", "automatisering", "verlichting"],
  relatedProductSlugs: ["aqara-motion-sensor", "eve-motion-matter-bewegingssensor", "tapo-t100"],
  shortAnswer:
    "Voeg de sensor toe aan je app of hub en controleer of hij beweging detecteert. Stel daarna in de automatisering in wanneer hij moet reageren — alleen 's avonds is meestal het handigst.",
  description:
    "Een bewegingssensor instellen? Ontdek stap voor stap hoe je een sensor koppelt en gebruikt voor slimme verlichting en automatiseringen.",
  image: "/images/how-to/bewegingssensor-instellen.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Plaats de sensor op hoofdhoogte bij een doorgang, voeg hem toe in je app of hub en stel de automatisering in. Stel daarna een uitschakelvertraging in van 1–5 minuten zodat het licht niet meteen uitgaat als je stilstaat.",

  content: (
    <>
      <p>
        Een <strong>bewegingssensor instellen</strong> is een van de beste
        manieren om je huis slimmer te maken. Je kunt verlichting automatisch
        laten reageren zodra iemand een ruimte binnenkomt.
      </p>

      <p>
        Vooral in combinatie met{" "}
        <a href="/blog/wat-is-slimme-verlichting">
          slimme verlichting
        </a>{" "}
        zorgt dit voor meer gemak, veiligheid en energiebesparing.
      </p>

      <p>
        Weet je nog niet precies hoe een sensor werkt? Lees dan eerst{" "}
        <a href="/blog/wat-is-een-bewegingssensor">
          wat een bewegingssensor is
        </a>
        .
      </p>

      <h2>Stap 1: Kies de juiste plek voor je bewegingssensor</h2>

      <p>
        Plaats de sensor op een plek waar beweging goed wordt gedetecteerd,
        zoals bij een doorgang, deur of ingang van een ruimte.
      </p>

      <p>
        Vermijd plekken direct tegenover ramen of warmtebronnen, omdat dit de
        detectie kan verstoren.
      </p>

      <h2>Stap 2: Koppel de sensor aan je systeem</h2>

      <p>
        Voeg de sensor toe aan je app of smart home hub. Controleer daarna of
        beweging correct wordt geregistreerd.
      </p>

      <p>
        Veel sensoren werken via{" "}
        <a href="/blog/wat-is-zigbee">Zigbee</a>, wat zorgt voor een stabiele
        verbinding en laag energieverbruik.
      </p>

      <p>
        Heb je nog geen hub? Bekijk dan onze{" "}
        <a href="/aanraders/beste-smart-home-hub">
          beste smart home hubs
        </a>
        .
      </p>

      <h2>Stap 3: Maak een automatisering</h2>

      <p>
        Stel in wat er moet gebeuren bij beweging:
      </p>

      <ul>
        <li>Lamp automatisch aanzetten</li>
        <li>Melding sturen naar je telefoon</li>
        <li>Alarm of beveiliging activeren</li>
      </ul>

      <p>
        Wil je dit stap voor stap instellen? Bekijk dan{" "}
        <a href="/how-to/lamp-automatisch-aan-bij-beweging">
          lamp automatisch aan bij beweging instellen
        </a>
        .
      </p>

      <h2>Stap 4: Stel een vertraging in</h2>

      <p>
        Zorg dat de sensor niet te snel uitschakelt. Stel bijvoorbeeld in dat
        verlichting pas na 1 tot 5 minuten zonder beweging uitgaat.
      </p>

      <h2>Tips voor betere werking</h2>

      <ul>
        <li>Plaats de sensor op de juiste hoogte</li>
        <li>Vermijd direct zonlicht</li>
        <li>Let op huisdieren (kunnen beweging triggeren)</li>
        <li>Gebruik meerdere sensoren voor grotere ruimtes</li>
      </ul>

      <h2>Waar gebruik je een bewegingssensor voor?</h2>

      <ul>
        <li>Automatische verlichting in hal of gang</li>
        <li>Nachtverlichting op trap of overloop</li>
        <li>Beveiliging en meldingen</li>
        <li>Energiebesparing door automatisch uitschakelen</li>
      </ul>

      <h2>Beste bewegingssensor kiezen</h2>

      <p>
        Wil je een betrouwbare sensor die goed werkt met automatiseringen?
        Kies dan een model dat compatibel is met jouw systeem.
      </p>

      <p>
        Combineer dit met een{" "}
        <a href="/aanraders/beste-smart-home-hub">
          smart home hub
        </a>{" "}
        voor de beste resultaten.
      </p>

      <h2>Conclusie</h2>

      <p>
        Een bewegingssensor maakt je smart home direct slimmer. Door hem goed
        te plaatsen en te combineren met verlichting en automatiseringen,
        krijg je een systeem dat automatisch werkt zonder dat je erover hoeft
        na te denken.
      </p>
    </>
  ),

  faq: [
    {
      question: "Hoe hoog moet ik een bewegingssensor plaatsen?",
      answer:
        "De meeste sensoren werken het best op een hoogte van 1,5 tot 2,5 meter. Hoger geeft een groter bereik maar minder nauwkeurigheid dicht bij de vloer. Volg de aanbevelingen van de fabrikant.",
    },
    {
      question: "Reageert mijn sensor ook op huisdieren?",
      answer:
        "PIR-sensoren reageren op warmte en beweging, dus ook op huisdieren. Sommige sensoren hebben een 'huisdier-modus' waarbij kleinere objecten worden genegeerd. Check dit in de instellingen van je sensor.",
    },
    {
      question: "Mijn sensor triggert te snel — wat doe ik?",
      answer:
        "Verhoog de gevoeligheidsdrempel of verplaats de sensor weg van warmtebronnen en ramen. Stel ook een minimale tijd in tussen opeenvolgende triggers als je app dit ondersteunt.",
    },
    {
      question: "Heb ik altijd een hub nodig voor een bewegingssensor?",
      answer:
        "Nee. Wifi-sensoren zoals de Tapo T100 werken direct via de app zonder hub. Zigbee-sensoren hebben wel een hub nodig voor gebruik in automatiseringen.",
    },
  ],
},
{
  slug: "smart-home-zonder-hub-instellen",
  title: "Smart home zonder hub instellen: zo werkt het stap voor stap",
  seoTitle: "Smart home zonder hub instellen",
  categories: ["basis", "wifi"],
  shortAnswer:
    "Wifi-apparaten zoals Tapo-lampen en slimme stekkers werken direct via de app zonder hub. Koppel ze aan je 2.4 GHz netwerk en stel schema's en automatiseringen in via de fabrieksapp.",
  description:
    "Wil je een smart home zonder hub instellen? Ontdek hoe je slimme apparaten via wifi koppelt en automatiseringen maakt zonder bridge.",
  image: "/images/how-to/smart-home-zonder-hub-instellen.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Kies wifi-apparaten die direct via een app werken — zoals Tapo of Govee — en koppel ze via 2.4 GHz. Eenvoudige automatiseringen zoals tijdschema's zijn mogelijk via de app. Voor meerdere merken combineren of geavanceerde flows is een hub later de logische stap.",
  relatedProductSlugs: ["tapo-l530e", "tapo-p115", "tapo-c200"],

  content: (
    <>
      <p>
        Een <strong>smart home zonder hub instellen</strong> is voor veel mensen
        de makkelijkste manier om te beginnen. Je gebruikt slimme apparaten die
        direct via wifi werken en bedient alles via een app op je telefoon.
      </p>

      <p>
        Dit is ideaal als je klein wilt starten zonder meteen een compleet
        systeem op te bouwen.
      </p>

      <p>
        Twijfel je of dit de juiste keuze is? Lees dan ook{" "}
        <a href="/blog/smart-home-zonder-hub">
          smart home zonder hub: kan dat en is het slim?
        </a>
        .
      </p>

      <h2>Stap 1: Kies apparaten die zonder hub werken</h2>

      <p>
        Begin met apparaten die direct via wifi werken, zoals{" "}
        <a href="/blog/wat-is-slimme-verlichting">
          slimme verlichting
        </a>{" "}
        of slimme stekkers.
      </p>

      <p>
        Deze kun je meestal direct koppelen aan de app van het merk zonder extra
        hardware.
      </p>

      <h2>Stap 2: Zorg voor stabiele wifi</h2>

      <p>
        Een goede wifi verbinding is essentieel. De meeste smart home apparaten
        werken op 2.4 GHz.
      </p>

      <p>
        Heb je problemen met bereik of verbinding? Bekijk dan{" "}
        <a href="/tips/hoe-verbeter-je-wifi-voor-je-smart-home">
          hoe je je wifi verbetert voor je smart home
        </a>
        .
      </p>

      <h2>Stap 3: Koppel je eerste apparaat</h2>

      <p>
        Voeg een apparaat toe via de app en controleer of het goed werkt.
        Begin klein zodat je het systeem leert begrijpen.
      </p>

      <h2>Stap 4: Voeg automatiseringen toe</h2>

      <p>
        Veel apps bieden eenvoudige automatiseringen, zoals:
      </p>

      <ul>
        <li>Lamp aan bij zonsondergang</li>
        <li>Stekker uit op vaste tijden</li>
        <li>Melding bij beweging</li>
      </ul>

      <h2>Stap 5: Begrijp de beperkingen</h2>

      <p>
        Een smart home zonder hub werkt prima, maar heeft ook nadelen:
      </p>

      <ul>
        <li>Meerdere apps nodig</li>
        <li>Minder geavanceerde automatiseringen</li>
        <li>Moeilijker combineren van merken</li>
      </ul>

      <h2>Wanneer is een hub beter?</h2>

      <p>
        Wil je later uitbreiden met sensoren en automatiseringen? Dan is een
        hub vaak een betere keuze.
      </p>

      <p>
        Bekijk bijvoorbeeld onze{" "}
        <a href="/aanraders/beste-smart-home-hub">
          beste smart home hubs
        </a>
        .
      </p>

      <h2>Alternatief: werken met Zigbee</h2>

      <p>
        Wil je een stabieler systeem? Dan kun je kijken naar{" "}
        <a href="/blog/wat-is-zigbee">Zigbee</a>, waarbij apparaten via een hub
        met elkaar communiceren.
      </p>

      <h2>Conclusie</h2>

      <p>
        Een smart home zonder hub is ideaal om te beginnen. Je kunt snel en
        goedkoop starten. Maar wil je meer automatisering en stabiliteit, dan
        is een hub vaak de volgende stap.
      </p>
    </>
  ),

  faq: [
    {
      question: "Welke apparaten werken zonder hub?",
      answer:
        "Wifi-apparaten van TP-Link Tapo, Govee en Eufy werken zonder extra hub. Je koppelt ze direct via de app van het merk op je 2.4 GHz wifi-netwerk.",
    },
    {
      question: "Kan ik spraakopdrachten gebruiken zonder hub?",
      answer:
        "Ja. Wifi-apparaten werken vaak direct met Google Home of Amazon Alexa via hun eigen app. Je hoeft geen aparte hub in te stellen — alleen de app van het merk koppelen aan je spraakassistent.",
    },
    {
      question: "Wanneer heb je toch een hub nodig?",
      answer:
        "Als je Zigbee-apparaten wilt gebruiken, merken wilt combineren of geavanceerde automatiseringen wilt maken die meerdere apparaten aansturen. Dan is Homey of Home Assistant de logische stap.",
    },
    {
      question: "Is een smart home zonder hub minder stabiel?",
      answer:
        "Niet per se. Wifi-apparaten kunnen heel stabiel zijn bij een goede verbinding. Ze zijn alleen meer afhankelijk van je internetverbinding — als internet uitvalt, werken automatiseringen niet meer.",
    },
  ],
},
{
  slug: "slimme-stekker-instellen",
  title: "Slimme stekker instellen: zo werkt het stap voor stap",
  seoTitle: "Slimme stekker instellen: stap voor stap",
  categories: ["basis", "energie"],
  relatedProductSlugs: ["tapo-p115", "tapo-p110", "eve-energy"],
  shortAnswer:
    "Steek de slimme stekker in het stopcontact en download de bijbehorende app. Koppel via 2.4 GHz wifi en stel daarna tijdschema's of energiemeting in via de app.",
  description:
    "Een slimme stekker instellen? Ontdek hoe je een smart plug koppelt, gebruikt en automatiseert voor meer gemak en energiebesparing.",
  image: "/images/how-to/slimme-stekker-instellen.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Plug de stekker in, open de app van het merk en volg de koppelingsstappen — zorg dat je wifi op 2.4 GHz staat. Na koppelen stel je tijdschema's in of koppel je de stekker aan een spraakassistent. Kies een model met energiemeting als je ook verbruik wilt bijhouden.",

  content: (
    <>
      <p>
        Een slimme stekker instellen is een van de makkelijkste manieren om je
        huis slimmer te maken. Je kunt apparaten op afstand bedienen en simpele
        automatiseringen toevoegen zonder ingewikkelde installatie.
      </p>

      <p>
        Daardoor is een slimme stekker vaak een van de beste eerste smart home
        producten voor beginners.
      </p>

      <h2>Stap 1: Sluit de slimme stekker aan</h2>

      <p>
        Steek de slimme stekker in het stopcontact en sluit een apparaat aan,
        zoals een lamp, ventilator of koffiezetapparaat.
      </p>

      <p>
        Wil je eerst weten wat je er allemaal mee kunt? Lees dan ook{" "}
        <a href="/blog/wat-is-een-slimme-stekker">
          wat een slimme stekker is en hoe het werkt
        </a>
        .
      </p>

      <h2>Stap 2: Koppel de stekker met de app</h2>

      <p>
        Open de app van het merk en voeg de stekker toe. Tijdens het koppelen is
        het belangrijk dat je wifi stabiel is en meestal op 2.4 GHz werkt.
      </p>

      <p>
        Heb je problemen met verbinden? Dan is ook{" "}
        <a href="/tips/hoe-verbeter-je-wifi-voor-je-smart-home">
          je wifi verbeteren voor smart home
        </a>{" "}
        vaak een slimme stap.
      </p>

      <h2>Stap 3: Test of de stekker werkt</h2>

      <p>
        Controleer in de app of je het aangesloten apparaat aan en uit kunt
        zetten. Werkt dat goed, dan is de basis klaar.
      </p>

      <h2>Stap 4: Maak eenvoudige automatiseringen</h2>

      <p>
        Een slimme stekker wordt pas echt handig als je automatiseringen
        toevoegt, zoals:
      </p>

      <ul>
        <li>Automatisch inschakelen bij zonsondergang</li>
        <li>Automatisch uitschakelen op vaste tijden</li>
        <li>Bediening via spraak of routine</li>
      </ul>

      <h2>Waar gebruik je een slimme stekker voor?</h2>

      <ul>
        <li>Staande lampen en sfeerverlichting</li>
        <li>Koffiezetapparaat</li>
        <li>Ventilator</li>
        <li>Opladers en apparaten met sluipverbruik</li>
      </ul>

      <h2>Kies je een slimme stekker met energiemeting?</h2>

      <p>
        Sommige slimme stekkers laten ook stroomverbruik zien. Dat is handig als
        je wilt weten welke apparaten veel energie gebruiken.
      </p>

      <p>
        Meer hierover lees je in{" "}
        <a href="/blog/slimme-stekker-verbruik-meten">
          slimme stekker verbruik meten
        </a>
        .
      </p>

      <p>
        Ben je nog aan het vergelijken? Bekijk dan onze{" "}
        <a href="/aanraders/beste-slimme-stekkers">
          beste slimme stekkers
        </a>
        .
      </p>

      <h2>Conclusie</h2>

      <p>
        Een slimme stekker is snel ingesteld en meteen nuttig. Je krijgt meer
        controle over apparaten, kunt automatiseren en in sommige gevallen zelfs
        je energieverbruik beter volgen.
      </p>
    </>
  ),

  faq: [
    {
      question: "Kan ik een slimme stekker ook buiten gebruiken?",
      answer:
        "Dat kan, maar alleen als de stekker waterdicht is (IP65+). Tapo P410M is een voorbeeld van een geschikte buitenstekker. Controleer altijd de IP-rating voordat je hem buiten plaatst.",
    },
    {
      question: "Wat is sluipverbruik en hoe bespaar ik daarop?",
      answer:
        "Sluipverbruik is het energieverbruik van apparaten in standby-modus. Met een slimme stekker schakel je ze volledig uit. Televisies, spelcomputers en opladers zijn veelgebruikers — automatisch uitschakelen 's nachts scheelt euro's per maand.",
    },
    {
      question: "Hoe koppel ik een slimme stekker aan Google Home?",
      answer:
        "Koppel eerst de stekker aan de eigen app (bijv. Tapo). Open daarna Google Home, ga naar Instellingen > Apparaten toevoegen > Compatibele apps, zoek de Tapo app op en log in. Je stekkers verschijnen automatisch.",
    },
    {
      question: "Werkt energiemeting bij alle slimme stekkers?",
      answer:
        "Nee. Controleer de productspecificaties. Modellen zoals Tapo P110 en P115 hebben energiemeting ingebouwd. Goedkopere modellen zonder energiemeting kunnen apparaten alleen aan/uit schakelen.",
    },
  ],
},
{
  slug: "homey-automatisering-maken",
  title: "Hoe maak je een automatisering in Homey? (flows stap voor stap)",
  seoTitle: "Homey automatisering maken",
  categories: ["hub", "automatisering"],
  shortAnswer:
    "Open de Homey-app, ga naar Flows en tik op de plusknop. Kies een trigger (bijv. beweging), voeg optioneel een voorwaarde toe (bijv. alleen 's avonds) en stel de actie in (bijv. lamp aan).",
  description:
    "Automatisering maken in Homey? Ontdek stap voor stap hoe je flows instelt en slimme apparaten automatisch laat samenwerken.",
  image: "/images/how-to/homey-automatisering-maken.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Ga naar Flows in de Homey app, kies een trigger (bijv. beweging gedetecteerd), voeg eventueel een voorwaarde toe (bijv. alleen 's avonds) en kies een actie (bijv. lamp aan). Sla op en test direct — je eerste flow is in 5 minuten klaar.",
  relatedProductSlugs: ["homey-pro-early-2023", "aqara-motion-sensor", "tapo-l530e"],

  content: (
    <>
      <p>
        Met een <strong>automatisering in Homey</strong> (ook wel een flow)
        kun je slimme apparaten automatisch laten samenwerken. Dit is waar een
        smart home echt slim wordt.
      </p>

      <p>
        Denk aan een lamp die aangaat bij beweging, maar alleen als het donker
        is. Of een melding wanneer een deur opent.
      </p>

      <p>
        Twijfel je nog tussen systemen? Lees dan eerst{" "}
        <a href="/blog/home-assistant-vs-homey">
          Home Assistant vs Homey
        </a>
        .
      </p>

      <h2>Wat is een Homey flow?</h2>

      <p>
        Een flow bestaat uit drie onderdelen:
      </p>

      <ul>
        <li><strong>Als:</strong> trigger (bijvoorbeeld beweging)</li>
        <li><strong>En:</strong> voorwaarden (bijvoorbeeld alleen 's avonds)</li>
        <li><strong>Dan:</strong> actie (bijvoorbeeld lamp aan)</li>
      </ul>

      <h2>Stap 1: Open de Homey app</h2>

      <p>
        Ga naar flows en maak een nieuwe automatisering aan.
      </p>

      <h2>Stap 2: Kies een trigger</h2>

      <p>
        De trigger bepaalt wanneer de flow start:
      </p>

      <ul>
        <li>Beweging gedetecteerd</li>
        <li>Deur open</li>
        <li>Een tijdstip bereikt</li>
      </ul>

      <h2>Stap 3: Voeg voorwaarden toe</h2>

      <p>
        Met voorwaarden voorkom je dat een flow altijd afgaat.
      </p>

      <ul>
        <li>Alleen in de avond</li>
        <li>Alleen als iemand thuis is</li>
      </ul>

      <h2>Stap 4: Kies de actie</h2>

      <p>
        Daarna bepaal je wat er gebeurt:
      </p>

      <ul>
        <li>Lamp aanzetten</li>
        <li>Melding sturen</li>
        <li>Slimme stekker uitschakelen</li>
      </ul>

      <h2>Voorbeeld van een slimme Homey flow</h2>

      <ul>
        <li>Als: beweging in de hal</li>
        <li>En: het is donker</li>
        <li>Dan: lamp aan</li>
      </ul>

      <p>
        Wil je dit zelf instellen? Bekijk dan ook{" "}
        <a href="/how-to/lamp-automatisch-aan-bij-beweging">
          lamp automatisch aan bij beweging
        </a>
        .
      </p>

      <h2>Welke apparaten werken het beste met Homey?</h2>

      <p>
        Homey werkt met veel protocollen zoals{" "}
        <a href="/blog/wat-is-zigbee">Zigbee</a>, Z-Wave en wifi.
      </p>

      <p>
        Vooral Zigbee apparaten zijn populair omdat ze stabiel en energiezuinig
        zijn.
      </p>

      <h2>Beste Homey setup kiezen</h2>

      <p>
        Wil je een goede basis? Bekijk dan onze{" "}
        <a href="/aanraders/beste-smart-home-hub">
          beste smart home hubs
        </a>
        .
      </p>

      <h2>Tips voor betere automatiseringen</h2>

      <ul>
        <li>Houd flows simpel in het begin</li>
        <li>Gebruik duidelijke namen</li>
        <li>Test altijd je automatiseringen</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Met Homey flows maak je van losse apparaten een slim systeem. Door
        triggers, voorwaarden en acties te combineren krijg je automatiseringen
        die je dagelijks echt gebruikt.
      </p>
    </>
  ),

  faq: [
    {
      question: "Wat is het verschil tussen een flow en een geavanceerde flow in Homey?",
      answer:
        "Een gewone flow heeft één trigger, eventuele voorwaarden en acties. Een geavanceerde flow (Advanced Flow) geeft meer vrijheid: je kunt logica, vertraging en vertakkingen toevoegen. Handig voor complexere automatiseringen.",
    },
    {
      question: "Hoe test ik een Homey flow zonder te wachten op de trigger?",
      answer:
        "In de Homey app kun je een flow handmatig starten via de drie stippen naast de flow. Zo test je direct of de actie correct uitvoert zonder te hoeven wachten op de echte trigger.",
    },
    {
      question: "Kan Homey communiceren met Apple HomeKit?",
      answer:
        "Ja. Homey ondersteunt HomeKit via een integratie. Zo kun je Homey-apparaten bedienen via de Woning-app op je iPhone of via Siri.",
    },
    {
      question: "Werkt Homey ook met Z-Wave apparaten?",
      answer:
        "Ja, Homey Pro heeft ingebouwde Z-Wave ondersteuning. Homey Bridge ondersteunt alleen Zigbee en wifi. Z-Wave is een stabiel protocol voor slimme sloten, sensoren en thermostaten.",
    },
    {
      question: "Hoeveel flows kan ik aanmaken in Homey?",
      answer:
        "Homey Pro heeft geen limiet op het aantal flows. Homey Bridge heeft een beperking in de gratis versie. Met een Homey Cloud abonnement zijn meer flows en mogelijkheden beschikbaar.",
    },
  ],
},

// ─── NIEUWE HOW-TO ARTIKELEN ───────────────────────────────────────────────────

{
  slug: "hoe-installeer-je-een-slimme-deurbel",
  title: "Hoe installeer je een slimme deurbel? (stap voor stap)",
  seoTitle: "Slimme deurbel installeren: stappenplan",
  categories: ["veiligheid", "basis"],
  description:
    "Stap-voor-stap uitleg voor het installeren van een slimme deurbel. Leer het verschil tussen bedraad en accu en welke deurbel bij jou past.",
  image: "/images/how-to/hoe-installeer-je-een-slimme-deurbel.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Kies een accu-deurbel als je geen bestaande bedrading hebt — boor twee schroefgaatjes en hang hem op. Heb je wel bedrading van 8–24V? Dan geeft een bedrade deurbel meer stabiliteit en hoef je nooit op te laden.",
  relatedProductSlugs: ["tapo-d235", "tapo-d205", "hue-secure-bedrade-videodeurbel-chime"],

  content: (
    <>
      <p>
        Een slimme deurbel laat je altijd zien wie er voor de deur staat,
        ook als je niet thuis bent. Via je smartphone zie je live beeld,
        spreek je met bezoekers en ontvang je een melding bij elke aanbel.
      </p>

      <p>
        Installatie is eenvoudiger dan je denkt — zeker bij accu-modellen.
        In deze handleiding leg ik stap voor stap uit hoe je een slimme
        deurbel installeert.
      </p>

      <h2>Stap 1: Kies bedraad of op accu</h2>

      <p>
        Dit is de belangrijkste keuze voordat je begint. Check of er een
        beldraadje loopt naar je huidige deurbel:
      </p>

      <ul>
        <li>
          <strong>Bestaande bedrading (8–24V wisselstroom):</strong> Je kunt
          een bedrade slimme deurbel aansluiten. Stabieler, nooit opladen.
        </li>
        <li>
          <strong>Geen bedrading:</strong> Kies een accu-deurbel. Werkt
          volledig draadloos en is makkelijker te installeren.
        </li>
      </ul>

      <p>
        Bekijk onze{" "}
        <a href="/aanraders/beste-slimme-deurbel">beste slimme deurbellen</a>{" "}
        voor een overzicht per type.
      </p>

      <h2>Stap 2: Download de app en maak een account</h2>

      <p>
        Download de bijbehorende app nog voor je begint met installeren. Log
        in of maak een account aan. Zorg dat je wifi-wachtwoord bij de hand
        hebt.
      </p>

      <h2>Stap 3: Installeer de deurbel</h2>

      <p><strong>Accu-deurbel (bijv. Tapo D235 of D210):</strong></p>

      <ul>
        <li>Laad de accu eerst volledig op</li>
        <li>Bevestig de montageplaat op de muur of deurpost</li>
        <li>Klik de deurbel op de plaat</li>
        <li>Sluit de meegeleverde chime aan op een stopcontact</li>
      </ul>

      <p><strong>Bedrade deurbel (bijv. Hue Secure Bedrade Videodeurbel):</strong></p>

      <ul>
        <li>Zet de stroom naar de bestaande deurbel uit via de meterkast</li>
        <li>Haal de oude deurbel los en bewaar de draadjes</li>
        <li>Sluit de draadjes aan op de klemmen van de slimme deurbel</li>
        <li>Bevestig de deurbel aan de muur</li>
        <li>Zet de stroom terug aan</li>
      </ul>

      <h2>Stap 4: Koppel de deurbel in de app</h2>

      <p>
        Open de app en volg de koppelingsstappen. Bij de meeste deurbellen
        druk je kort op de knop om hem in koppelmodus te zetten. De app
        leidt je daarna stap voor stap door de rest.
      </p>

      <p>
        Zorg dat je op 2.4 GHz wifi zit tijdens het koppelen — de meeste
        deurbellen ondersteunen geen 5 GHz.
      </p>

      <h2>Stap 5: Stel meldingen in</h2>

      <p>
        Na koppelen stel je in wanneer je meldingen wilt ontvangen:
      </p>

      <ul>
        <li>Melding bij aanbellen</li>
        <li>Melding bij bewegingsdetectie</li>
        <li>Tijden waarop meldingen gepauzeerd worden (bijv. 's nachts)</li>
      </ul>

      <h2>Stap 6: Stel opslag in</h2>

      <p>
        Meerdere deurbellen ondersteunen een SD-kaart voor lokale opslag —
        zo heb je geen abonnement nodig. Controleer in de app welke opslagopties beschikbaar zijn.
      </p>

      <h2>Tips voor de beste plaatsing</h2>

      <ul>
        <li>Monteer de deurbel op ooghoogte (1,4–1,6 meter)</li>
        <li>Zorg voor een vrij schootsveld richting de stoep</li>
        <li>Vermijd direct tegenlicht — de camera filmt dan slecht</li>
        <li>Test de detectiezone in de app na installatie</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Een slimme deurbel installeren is eenvoudiger dan het klinkt. Met
        een accu-model ben je in 15 minuten klaar. Met een bedrade deurbel
        kost het iets meer tijd, maar daarna heb je nooit meer omkijken.
      </p>
    </>
  ),

  faq: [
    {
      question: "Heb ik een hub nodig voor een slimme deurbel?",
      answer:
        "Nee. De meeste slimme deurbellen werken via wifi en hun eigen app — zonder extra hub. Wil je de deurbel integreren met andere smart home apparaten, dan kan een hub handig zijn.",
    },
    {
      question: "Welke spanning heeft mijn bestaande deurbel?",
      answer:
        "Gebruik een multimeter om de spanning te meten. De meeste Nederlandse huisdeurbellen werken op 8–12V wisselstroom. Controleer ook de minimale en maximale spanning die de slimme deurbel ondersteunt.",
    },
    {
      question: "Kan ik de oude bel chime behouden?",
      answer:
        "Dat hangt af van het model. Sommige slimme deurbellen kunnen worden aangesloten op een bestaande mechanische bel. Andere deurbellen werken alleen met de meegeleverde digitale chime. Check dit in de specificaties.",
    },
    {
      question: "Hoe lang gaat de accu van een draadloze deurbel mee?",
      answer:
        "Bij normaal gebruik 1 tot 6 maanden, afhankelijk van het aantal activaties en het model. Bij veel beweging gaat de accu sneller leeg. Modellen met een kleinere sensor-zone gaan langer mee.",
    },
  ],
},

{
  slug: "hoe-stel-je-een-slimme-thermostaat-in",
  title: "Hoe stel je een slimme thermostaat in? (stap voor stap)",
  seoTitle: "Slimme thermostaat instellen: stappenplan",
  categories: ["basis", "energie"],
  description:
    "Stap-voor-stap uitleg voor het installeren en instellen van een slimme thermostaat. Leer hoe je geofencing, schema's en energiebesparing instelt.",
  image: "/images/how-to/hoe-stel-je-een-slimme-thermostaat-in.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Vervang de bestaande thermostaat door de slimme versie, verbind hem met je wifi en volg de app-stappen. Stel daarna een weekschema in en activeer geofencing zodat de verwarming automatisch daalt als je het huis verlaat.",
  relatedProductSlugs: ["tado-smart-thermostat-v3", "netatmo-slimme-thermostaat", "google-nest-thermostaat"],

  content: (
    <>
      <p>
        Een slimme thermostaat vervangt je gewone thermostaat op de muur en
        geeft je volledige controle via je smartphone. Je stelt schema's in,
        bespaar op verwarming en houdt het huis altijd op de juiste temperatuur
        — ook als je niet thuis bent.
      </p>

      <p>
        In deze handleiding lees je stap voor stap hoe je een slimme
        thermostaat installeert en optimaal instelt.
      </p>

      <h2>Stap 1: Controleer compatibiliteit</h2>

      <p>
        Controleer voordat je begint of je cv-ketel compatible is. De meeste
        slimme thermostaten werken met gangbare cv-ketels via:
      </p>

      <ul>
        <li><strong>OpenTherm:</strong> Meest efficiënte verbinding, moduleert de ketel</li>
        <li><strong>Aan/uit:</strong> Werkt met vrijwel elke ketel, maar minder efficiënt</li>
      </ul>

      <p>
        Raadpleeg de compatibiliteitslijst op de website van de fabrikant
        (Tado, Netatmo of Google) voor jouw specifiek keteltype.
      </p>

      <h2>Stap 2: Installeer de thermostaatondersteuning (optioneel)</h2>

      <p>
        Sommige thermostaten zoals Tado worden geleverd met een kleine ontvanger
        die je op de ketel aansluit. Dit is nodig bij ketels zonder directe
        thermostaataansluiting.
      </p>

      <h2>Stap 3: Vervang de bestaande thermostaat</h2>

      <ul>
        <li>Zet de ketel uit via de stroomschakelaar</li>
        <li>Fotografeer de bedrading van je huidige thermostaat</li>
        <li>Koppel de draden los en verwijder de oude thermostaat</li>
        <li>Sluit de draden aan op de nieuwe slimme thermostaat</li>
        <li>Bevestig de thermostaat aan de wand</li>
        <li>Zet de stroom terug aan</li>
      </ul>

      <h2>Stap 4: Koppel de thermostaat via de app</h2>

      <p>
        Download de app (Tado°, Netatmo of Google Home) en volg de
        installatiestappen. Je kiest je keteltype en koppelt de thermostaat
        aan je wifi-netwerk.
      </p>

      <h2>Stap 5: Stel een schema in</h2>

      <p>
        Maak een weekschema op basis van wanneer je thuis bent:
      </p>

      <ul>
        <li>Werkdagen: 's morgens warm, overdag lager, 's avonds warm</li>
        <li>Weekend: eigen schema op basis van je gewoonten</li>
        <li>Nacht: temperatuur lager (bijv. 16–17°C)</li>
      </ul>

      <h2>Stap 6: Activeer geofencing</h2>

      <p>
        Geofencing is de krachtigste functie van een slimme thermostaat. De
        app detecteert wanneer je het huis verlaat en verlaagt de verwarming
        automatisch. Als je thuiskomt, is het huis al warm.
      </p>

      <p>
        Bij Tado heet dit 'Locatiebeheer'. Schakel het in via de app en geef
        toestemming voor locatietoegang.
      </p>

      <h2>Veelgemaakte fouten</h2>

      <ul>
        <li>Verkeerde bedrading aansluiten — maak altijd een foto vooraf</li>
        <li>Thermostaat op een koude plek plaatsen (bijv. bij een tochtige deur)</li>
        <li>Geen schema instellen en op handmatige bediening vertrouwen</li>
      </ul>

      <h2>Hoeveel bespaar je?</h2>

      <p>
        Gemiddeld 15–25% op stookkosten. De besparing is het grootst bij
        geofencing en een goed ingesteld schema. De thermostaat verdient
        zichzelf terug in 1 tot 2 verwarmingsseizoenen.
      </p>

      <h2>Conclusie</h2>

      <p>
        Een slimme thermostaat installeren is in de meeste gevallen een
        klusje van 30 minuten. Daarna bespaar je automatisch energie zonder
        erover na te denken.
      </p>
    </>
  ),

  faq: [
    {
      question: "Werkt een slimme thermostaat met mijn cv-ketel?",
      answer:
        "De meeste slimme thermostaten werken met gangbare cv-ketels via OpenTherm of een aan/uit-verbinding. Controleer de compatibiliteitslijst van de fabrikant voor jouw keteltype.",
    },
    {
      question: "Heb ik een installateur nodig?",
      answer:
        "Nee, in de meeste gevallen niet. Als je de bedrading fotografeert voordat je de oude thermostaat verwijdert en de stroom uitzet, is installatie voor de meeste mensen zelf te doen. Bij twijfel kun je altijd een installateur raadplegen.",
    },
    {
      question: "Hoeveel bespaar je met een slimme thermostaat?",
      answer:
        "Gemiddeld 15–25% op stookkosten, afhankelijk van je woningtype en hoe actief je gebruik maakt van geofencing en schema's.",
    },
    {
      question: "Hoe werkt geofencing bij een slimme thermostaat?",
      answer:
        "De app gebruikt de GPS van je telefoon om te detecteren of je thuis of weg bent. Als je vertrekt, verlaagt de thermostaat de temperatuur automatisch. Als je terugkeert, begint hij tijdig te verwarmen zodat het huis warm is bij aankomst.",
    },
  ],
},

{
  slug: "hoe-koppel-je-philips-hue-aan-google-home",
  title: "Hoe koppel je Philips Hue aan Google Home? (stap voor stap)",
  seoTitle: "Philips Hue koppelen aan Google Home",
  categories: ["verlichting", "basis"],
  description:
    "Koppel Philips Hue aan Google Home en bedien je lampen via spraak. Stap-voor-stap uitleg inclusief tips voor automatiseringen en routines.",
  image: "/images/how-to/hoe-koppel-je-philips-hue-aan-google-home.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Open Google Home, tik op '+' > Apparaat instellen > Werkt met Google, zoek 'Philips Hue' en log in met je Hue-account. Je lampen zijn binnen 2 minuten beschikbaar via Google Home en de Google Assistent.",
  relatedProductSlugs: ["philips-hue-white-ambiance-starterkit", "philips-hue-color-ambiance-e27", "philips-hue-bridge"],

  content: (
    <>
      <p>
        Als je Philips Hue lampen hebt, kun je ze eenvoudig koppelen aan
        Google Home. Daarna bedien je ze via spraak ('Ok Google, lampen aan'),
        via de Google Home app en kun je ze opnemen in routines.
      </p>

      <p>
        Je hebt hiervoor een Philips Hue Bridge nodig — zonder Bridge is
        koppeling met Google Home niet mogelijk.
      </p>

      <h2>Wat heb je nodig?</h2>

      <ul>
        <li>Philips Hue Bridge (aangesloten op je router)</li>
        <li>Minimaal één Hue lamp gekoppeld aan de Bridge</li>
        <li>De Google Home app (Android of iOS)</li>
        <li>Een Google account</li>
      </ul>

      <h2>Stap 1: Zorg dat je Hue Bridge werkt</h2>

      <p>
        Controleer in de Philips Hue app of je Bridge online is en al je
        lampen bereikbaar zijn. Pas dan heeft koppeling met Google Home zin.
      </p>

      <h2>Stap 2: Open Google Home en voeg een apparaat toe</h2>

      <ol>
        <li>Open de Google Home app</li>
        <li>Tik op het '+' icoon linksboven</li>
        <li>Kies 'Apparaat instellen'</li>
        <li>Tik op 'Werkt met Google'</li>
      </ol>

      <h2>Stap 3: Zoek en koppel Philips Hue</h2>

      <ol>
        <li>Zoek naar 'Philips Hue' in de zoekbalk</li>
        <li>Tik op het resultaat</li>
        <li>Log in met je Philips Hue account-gegevens</li>
        <li>Geef toestemming om Google toegang te geven tot je lampen</li>
      </ol>

      <h2>Stap 4: Wijs kamers toe</h2>

      <p>
        Google Home vraagt je om de lampen toe te wijzen aan kamers. Dit is
        belangrijk voor spraakcommando's zoals 'Ok Google, woonkamer lampen aan'.
      </p>

      <p>
        Gebruik dezelfde kamernamen als in de Philips Hue app om verwarring
        te voorkomen.
      </p>

      <h2>Stap 5: Test de koppeling</h2>

      <p>Probeer deze spraakcommando's:</p>

      <ul>
        <li>'Ok Google, zet de woonkamer lampen aan'</li>
        <li>'Ok Google, dim de slaapkamer naar 30 procent'</li>
        <li>'Ok Google, zet de lampen op warme kleur'</li>
      </ul>

      <h2>Routines instellen in Google Home</h2>

      <p>
        Via Google Home kun je routines maken die Hue lampen gebruiken:
      </p>

      <ul>
        <li>
          <strong>Goedemorgen routine:</strong> lampen langzaam helderder
          bij het wekker afgaan
        </li>
        <li>
          <strong>Goedenacht routine:</strong> alle lampen uit bij 'Ok Google,
          slaap lekker'
        </li>
        <li>
          <strong>Vertrek routine:</strong> alles uit als je het huis verlaat
        </li>
      </ul>

      <h2>Veelgemaakte fouten</h2>

      <ul>
        <li>Bridge niet verbonden met internet</li>
        <li>Verkeerde Hue-accountgegevens</li>
        <li>Lampen niet aan toegewezen kamers in Google Home</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Philips Hue koppelen aan Google Home duurt minder dan 5 minuten.
        Daarna bedien je al je Hue lampen comfortabel via spraak of de
        Google Home app.
      </p>
    </>
  ),

  faq: [
    {
      question: "Heb ik de Hue Bridge nodig voor Google Home?",
      answer:
        "Ja. Zonder Hue Bridge kun je Philips Hue niet koppelen aan Google Home. Bluetooth-alleen lampen werken niet met de Google Home integratie.",
    },
    {
      question: "Waarom worden mijn Hue lampen niet gevonden in Google Home?",
      answer:
        "Controleer of je Bridge online is in de Hue app, of je de juiste Hue-accountgegevens gebruikt en of je internet actief is. Probeer de koppeling ook te verwijderen en opnieuw in te stellen.",
    },
    {
      question: "Kan ik Hue ook koppelen aan Alexa?",
      answer:
        "Ja. Open de Alexa app, ga naar Skills & Games, zoek 'Philips Hue' en activeer de skill. Log daarna in met je Hue-account. De werking is vergelijkbaar met Google Home.",
    },
    {
      question: "Wat zijn handige Google Assistent commando's voor Hue?",
      answer:
        "Probeer: 'Ok Google, zet de woonkamer op 50 procent', 'Ok Google, maak de lampen blauw', of 'Ok Google, stel de sfeer in op ontspannen'. Hue ondersteunt vrijwel alle dimmer- en kleuropdrachten via Google.",
    },
  ],
},

{
  slug: "hoe-installeer-je-een-tapo-camera",
  title: "Hoe installeer je een Tapo camera? (stap voor stap)",
  seoTitle: "Tapo camera installeren: handleiding",
  categories: ["veiligheid", "basis"],
  description:
    "Stap-voor-stap uitleg voor het installeren van een TP-Link Tapo beveiligingscamera. Van koppelen tot bewegingsdetectie en opslag instellen.",
  image: "/images/how-to/hoe-installeer-je-een-tapo-camera.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Sluit de Tapo camera aan op stroom, open de Tapo app, tik op '+' en scan de QR-code op de camera. Zorg dat je op 2.4 GHz wifi zit. Na koppelen stel je bewegingsdetectie en opslag in — SD-kaart of cloud.",
  relatedProductSlugs: ["tapo-c225", "tapo-c200", "tapo-c500"],

  content: (
    <>
      <p>
        TP-Link Tapo camera's zijn populair door hun goede beeldkwaliteit,
        lage prijs en eenvoudige installatie. Met de Tapo app heb je binnen
        10 minuten live beeld en bewegingsmeldingen.
      </p>

      <p>
        In deze handleiding leg ik stap voor stap uit hoe je een Tapo camera
        installeert en optimaal instelt.
      </p>

      <h2>Stap 1: Kies de juiste plek</h2>

      <p>
        Denk goed na over de plaatsing voordat je begint:
      </p>

      <ul>
        <li>Binnencamera (C200, C220, C225): bij de voordeur, babykamer of woonkamer</li>
        <li>Buitencamera (C500, C530WS): bij de oprit, garage of achtertuin</li>
      </ul>

      <p>
        Zorg dat er een stopcontact in de buurt is en dat het wifi-signaal
        sterk genoeg is op die plek.
      </p>

      <h2>Stap 2: Download de Tapo app</h2>

      <p>
        Download de gratis Tapo app voor iOS of Android en maak een TP-Link
        account aan. Dit account gebruik je voor alle Tapo apparaten.
      </p>

      <h2>Stap 3: Koppel de camera</h2>

      <ol>
        <li>Sluit de camera aan op stroom</li>
        <li>Wacht tot het statuslampje oranje knippert</li>
        <li>Open de Tapo app en tik op '+' rechtsboven</li>
        <li>Kies 'Voeg apparaat toe' en selecteer je camera-model</li>
        <li>Scan de QR-code op de camera of het verpakkingsdoos</li>
        <li>Voer je wifi-naam en wachtwoord in (gebruik 2.4 GHz)</li>
      </ol>

      <h2>Stap 4: Stel bewegingsdetectie in</h2>

      <p>
        Na koppelen ga je naar de camera-instellingen en activeer je
        bewegingsdetectie:
      </p>

      <ul>
        <li>Stel de gevoeligheid in (laag, middel, hoog)</li>
        <li>Teken een detectiezone zodat de camera alleen relevante beweging registreert</li>
        <li>Stel in wanneer je meldingen wilt ontvangen</li>
      </ul>

      <h2>Stap 5: Stel opslag in</h2>

      <p>
        Tapo cameras ondersteunen twee opslagopties:
      </p>

      <ul>
        <li>
          <strong>SD-kaart (aanbevolen):</strong> Geen abonnement nodig.
          Gebruik een Class 10 / U1 kaart van minimaal 16 GB.
        </li>
        <li>
          <strong>Tapo Care cloud:</strong> Abonnement nodig, maar je kunt
          beelden overal terugkijken.
        </li>
      </ul>

      <h2>Stap 6: Privacy-instellingen</h2>

      <p>
        Veel Tapo cameras hebben een privacymodus waarbij de lens fysiek
        wordt geblokkeerd. Stel in wanneer privacymodus automatisch inschakelt
        (bijv. als je thuis bent).
      </p>

      <h2>Tips voor buitencamera's</h2>

      <ul>
        <li>Gebruik een buitencamera die IP65 of hoger is gecertificeerd</li>
        <li>Controleer het wifi-bereik buiten met je telefoon voordat je boort</li>
        <li>Monteert de camera iets schuin naar beneden voor de beste kijkhoek</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Een Tapo camera installeren is snel en eenvoudig. Met de juiste
        instellingen voor bewegingsdetectie en opslag heb je meteen een
        volwaardige bewakingscamera zonder dure abonnementen.
      </p>
    </>
  ),

  faq: [
    {
      question: "Welke SD-kaart heb ik nodig voor een Tapo camera?",
      answer:
        "Gebruik een microSD-kaart van minimaal 16 GB met Class 10 of U1 snelheid. De meeste Tapo cameras ondersteunen kaarten tot 256 GB. Kies bij voorkeur een merknaam zoals SanDisk of Samsung voor betrouwbaarheid.",
    },
    {
      question: "Kan ik live meekijken als ik niet thuis ben?",
      answer:
        "Ja. De Tapo app toont live beeld vanuit overal ter wereld zolang je camera en smartphone verbonden zijn met internet. Je kunt ook opgenomen beelden terugkijken als je een SD-kaart of Tapo Care abonnement hebt.",
    },
    {
      question: "Werken Tapo cameras met Alexa of Google Home?",
      answer:
        "Ja. Je kunt Tapo cameras koppelen aan Amazon Alexa of Google Home voor Live View op een smart display. Zeg dan: 'Ok Google, toon de voordeur camera'. Automatiseringen met sensoren zijn ook mogelijk.",
    },
    {
      question: "Mijn Tapo camera gaat steeds offline — wat doe ik?",
      answer:
        "Dit is bijna altijd een wifi-signaalprobleem. Controleer de signaalsterkte in de Tapo app. Gebruik een wifi-extender of mesh-punt als het signaal te zwak is op de locatie van de camera.",
    },
  ],
},

{
  slug: "hoe-maak-je-automatisering-home-assistant",
  title: "Hoe maak je een automatisering in Home Assistant? (stap voor stap)",
  seoTitle: "Home Assistant automatisering maken",
  categories: ["hub", "automatisering"],
  description:
    "Stap-voor-stap uitleg voor het maken van automatiseringen in Home Assistant. Van eenvoudige triggers tot geavanceerde condities.",
  image: "/images/how-to/hoe-maak-je-automatisering-home-assistant.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Ga in Home Assistant naar Instellingen > Automatiseringen, klik op 'Automatisering aanmaken' en kies een trigger, eventueel een voorwaarde en een actie. Je eerste automatisering is in 5 minuten klaar — en alles draait lokaal.",
  relatedProductSlugs: ["home-assistant-green", "aqara-motion-sensor", "tapo-p115"],

  content: (
    <>
      <p>
        Home Assistant is krachtig en flexibel — maar ook technischer dan
        Homey. De automatiseringen (automations) zijn een van de sterkste
        functies: ze draaien volledig lokaal, zelfs zonder internet.
      </p>

      <p>
        In deze handleiding leer je stap voor stap hoe je een automatisering
        aanmaakt in de grafische interface van Home Assistant.
      </p>

      <h2>Wat heb je nodig?</h2>

      <ul>
        <li>Home Assistant Green, Yellow of een eigen installatie</li>
        <li>Minimaal één gekoppeld apparaat (lamp, sensor of stekker)</li>
        <li>Een webbrowser of de Home Assistant app</li>
      </ul>

      <h2>Stap 1: Ga naar Automatiseringen</h2>

      <ol>
        <li>Open de Home Assistant interface via je browser of app</li>
        <li>Ga naar Instellingen (tandwiel linksboven)</li>
        <li>Klik op 'Automatiseringen & Scènes'</li>
        <li>Klik op 'Automatisering aanmaken' (rechtsboven)</li>
      </ol>

      <h2>Stap 2: Kies een trigger</h2>

      <p>
        De trigger bepaalt wanneer de automatisering start. Voorbeelden:
      </p>

      <ul>
        <li><strong>Staat trigger:</strong> sensor detecteert beweging</li>
        <li><strong>Tijd trigger:</strong> elke dag om 22:00</li>
        <li><strong>Zon trigger:</strong> bij zonsondergang</li>
        <li><strong>Apparaat trigger:</strong> deurbel ingedrukt</li>
      </ul>

      <h2>Stap 3: Voeg een voorwaarde toe (optioneel)</h2>

      <p>
        Voorwaarden zorgen dat de automatisering alleen uitvoert als aan
        bepaalde eisen is voldaan:
      </p>

      <ul>
        <li>Alleen als het donker is buiten</li>
        <li>Alleen als persoon X thuis is</li>
        <li>Alleen als de temperatuur onder 20°C is</li>
      </ul>

      <h2>Stap 4: Kies een actie</h2>

      <p>
        De actie bepaalt wat er gebeurt:
      </p>

      <ul>
        <li>Apparaat aansturen (lamp aan, stekker uit)</li>
        <li>Scène activeren</li>
        <li>Melding sturen naar je telefoon</li>
        <li>Wachten (vertraging) en daarna uitvoeren</li>
      </ul>

      <h2>Voorbeeld: lamp aan bij beweging, alleen 's avonds</h2>

      <ul>
        <li><strong>Trigger:</strong> Bewegingssensor detecteert beweging</li>
        <li><strong>Voorwaarde:</strong> Zon staat onder horizon</li>
        <li><strong>Actie:</strong> Lamp aanzetten op 80% helderheid</li>
        <li><strong>Actie (na 5 min):</strong> Lamp uitschakelen</li>
      </ul>

      <h2>Stap 5: Sla op en test</h2>

      <p>
        Geef de automatisering een duidelijke naam en klik op 'Opslaan'.
        Test hem via de drie stippen {'>'} 'Uitvoeren' om te controleren of alles
        correct werkt.
      </p>

      <h2>Tips voor betere automatiseringen</h2>

      <ul>
        <li>Gebruik beschrijvende namen: 'Hal lamp aan bij beweging 's avonds'</li>
        <li>Schakel automatiseringen tijdelijk uit via de toggle — verwijder ze niet</li>
        <li>Gebruik 'trace' (automatiseringen &gt; drie stippen &gt; trace) om problemen op te sporen</li>
        <li>Begin simpel en voeg complexiteit toe als het werkt</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Automatiseringen in Home Assistant zijn krachtig en volledig lokaal.
        Zodra je de basisstructuur (trigger / voorwaarde / actie) begrijpt,
        kun je vrijwel alles automatiseren in je slimme huis.
      </p>
    </>
  ),

  faq: [
    {
      question: "Wat is het verschil tussen een automatisering en een scène in Home Assistant?",
      answer:
        "Een scène legt een vaste toestand vast (lamp op 50%, kleur blauw). Een automatisering activeert een scène of actie op basis van een trigger. Je gebruikt ze vaak samen: de automatisering activeert de scène.",
    },
    {
      question: "Werken automatiseringen ook als internet uitvalt?",
      answer:
        "Ja. Dat is juist een van de grote voordelen van Home Assistant: automatiseringen draaien volledig lokaal op je eigen server. Ook zonder internet werkt alles door.",
    },
    {
      question: "Wat is YAML in Home Assistant en heb ik dat nodig?",
      answer:
        "YAML is de configuratietaal van Home Assistant. Voor eenvoudige automatiseringen via de grafische interface heb je geen YAML kennis nodig. Voor geavanceerde configuraties is YAML wel nuttig.",
    },
    {
      question: "Hoe debug ik een automatisering die niet werkt?",
      answer:
        "Ga naar de automatisering > drie stippen > Trace. Hier zie je per stap wat er is gebeurd en of de trigger/voorwaarden zijn geëvalueerd. Zo vind je snel waar het mis gaat.",
    },
  ],
},

{
  slug: "hoe-verbind-je-zigbee-apparaten",
  title: "Hoe verbind je Zigbee apparaten? (stap voor stap)",
  seoTitle: "Zigbee apparaten verbinden: stappenplan",
  categories: ["hub", "basis"],
  description:
    "Hoe werkt Zigbee en hoe koppel je Zigbee apparaten aan een hub? Stap-voor-stap uitleg voor Homey, Home Assistant en Aqara.",
  image: "/images/how-to/hoe-verbind-je-zigbee-apparaten.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Zet je Zigbee apparaat in koppelmodus (meestal door het lang in te drukken of snel aan/uit te zetten) en voeg het toe via de hub-app. De hub en het apparaat moeten dicht bij elkaar staan tijdens het koppelen.",
  relatedProductSlugs: ["homey-pro-early-2023", "aqara-motion-sensor", "aqara-deur-raamsensor-p2"],

  content: (
    <>
      <p>
        Zigbee is een draadloos protocol dat veel slimme apparaten gebruiken:
        lampen, sensoren, stekkers en sloten. Het is zuiniger dan wifi en
        bouwt een eigen mesh-netwerk op.
      </p>

      <p>
        Maar Zigbee werkt niet op zichzelf — je hebt een hub nodig als
        centrale controller. In deze handleiding leer je stap voor stap hoe
        je Zigbee apparaten koppelt.
      </p>

      <h2>Wat heb je nodig?</h2>

      <ul>
        <li>Een hub met Zigbee-ondersteuning (Homey Pro, Home Assistant, Aqara hub)</li>
        <li>Een of meer Zigbee-apparaten (lampen, sensoren, stekkers)</li>
        <li>De bijbehorende app</li>
      </ul>

      <p>
        Bekijk onze{" "}
        <a href="/aanraders/beste-smart-home-hub">beste smart home hubs</a>{" "}
        voor een overzicht met Zigbee-ondersteuning.
      </p>

      <h2>Stap 1: Zorg dat je hub Zigbee ondersteunt</h2>

      <p>
        Niet elke hub heeft Zigbee ingebouwd. Controleer dit vooraf:
      </p>

      <ul>
        <li><strong>Homey Pro:</strong> Zigbee ingebouwd</li>
        <li><strong>Home Assistant Green:</strong> vereist een Zigbee-adapter (bijv. SONOFF Zigbee USB)</li>
        <li><strong>Aqara hub:</strong> werkt alleen met Aqara Zigbee apparaten</li>
      </ul>

      <h2>Stap 2: Zet het apparaat in koppelmodus</h2>

      <p>
        Elk apparaat heeft een eigen koppelingsprocedure. De meest voorkomende methoden:
      </p>

      <ul>
        <li><strong>Sensoren:</strong> druk lang op de koppelknop (5-10 sec) tot het lampje knippert</li>
        <li><strong>Lampen:</strong> 6× snel aan en uit zetten</li>
        <li><strong>Stekkers:</strong> druk de knop in en houd vast</li>
      </ul>

      <p>
        Raadpleeg de handleiding van je apparaat als je niet zeker bent.
      </p>

      <h2>Stap 3: Voeg het apparaat toe via de hub</h2>

      <p><strong>In Homey:</strong></p>
      <ol>
        <li>Ga naar 'Apparaten' en tik op '+' toevoegen</li>
        <li>Zoek je merk (bijv. Aqara, IKEA, Philips Hue)</li>
        <li>Volg de instructies op het scherm</li>
        <li>Zet het apparaat in koppelmodus als gevraagd</li>
      </ol>

      <p><strong>In Home Assistant (via Zigbee2MQTT of ZHA):</strong></p>
      <ol>
        <li>Ga naar de Zigbee integratie (Zigbee2MQTT of ZHA)</li>
        <li>Klik op 'Toestaan koppelen'</li>
        <li>Zet het apparaat in koppelmodus</li>
        <li>Wacht tot het apparaat verschijnt in de lijst</li>
      </ol>

      <h2>Stap 4: Geef het apparaat een naam en kamer</h2>

      <p>
        Na koppelen geef je het apparaat een duidelijke naam ('Hal bewegingssensor')
        en wijs je het toe aan de juiste kamer. Dit maakt automatiseringen
        veel overzichtelijker.
      </p>

      <h2>Zigbee mesh-netwerk begrijpen</h2>

      <p>
        Zigbee apparaten die op netstroom werken (lampen, stekkers) fungeren
        als routers in het netwerk. Ze geven het signaal door naar verder
        gelegen apparaten. Sensoren op batterij zijn altijd eindpunten.
      </p>

      <p>
        Meer netstroom-apparaten = sterker mesh-netwerk = betere dekking voor
        alle sensoren.
      </p>

      <h2>Veelgemaakte fouten</h2>

      <ul>
        <li>Apparaat te ver van de hub koppelen (koppel altijd dicht bij de hub)</li>
        <li>Verkeerde koppelmodus gebruiken</li>
        <li>Hub-app niet up-to-date</li>
        <li>Apparaat al gekoppeld aan een ander systeem — reset eerst</li>
      </ul>

      <h2>Conclusie</h2>

      <p>
        Zigbee apparaten koppelen is eenvoudiger dan het klinkt. Met de
        juiste hub en een beetje geduld bouw je een stabiel en energiezuinig
        smart home zonder afhankelijkheid van wifi voor elk apparaat.
      </p>
    </>
  ),

  faq: [
    {
      question: "Wat is het verschil tussen Zigbee en wifi voor smart home?",
      answer:
        "Wifi-apparaten verbinden direct met je router en werken ook zonder hub. Zigbee apparaten zijn zuiniger, bouwen een mesh-netwerk op en zijn stabieler bij veel apparaten — maar hebben altijd een hub nodig.",
    },
    {
      question: "Kan ik Zigbee apparaten van verschillende merken combineren?",
      answer:
        "Ja, mits ze Zigbee 3.0 ondersteunen. Met een hub zoals Homey Pro of Home Assistant kun je apparaten van Aqara, IKEA, Philips Hue en Sonoff combineren in één systeem.",
    },
    {
      question: "Waarom verschijnt mijn Zigbee apparaat niet in de hub?",
      answer:
        "Controleer of het apparaat in koppelmodus staat (lampje moet knipperen), of de hub-app in koppelmodus staat en of het apparaat dicht bij de hub is. Reset het apparaat als het al eerder was gekoppeld.",
    },
    {
      question: "Hoe ver kunnen Zigbee apparaten van de hub staan?",
      answer:
        "Direct van de hub: 10–30 meter afhankelijk van obstakels. Via andere netstroom-apparaten (mesh): meerdere apparaten die signaal doorgeven, zodat het netwerk veel groter kan zijn.",
    },
  ],
},

{
  slug: "hoe-stel-je-een-slimme-stekker-in-met-schema",
  title: "Slimme stekker instellen met tijdschema: zo werkt het",
  seoTitle: "Slimme stekker schema instellen",
  categories: ["basis", "energie"],
  description:
    "Leer hoe je een tijdschema instelt op een slimme stekker. Automatisch aan bij zonsondergang, uit om 23:00 — stap voor stap uitgelegd.",
  image: "/images/how-to/hoe-stel-je-een-slimme-stekker-in-met-schema.png",
  available: true,
  dateModified: "2026-04-19",
  kortAntwoord:
    "Open de app van je slimme stekker, ga naar 'Schema' of 'Automatisering' en maak een nieuwe regel aan. Stel de tijd in waarop de stekker aan en uit gaat. Bij de Tapo app heet dit 'Agenda' — in 2 minuten ingesteld.",
  relatedProductSlugs: ["tapo-p115", "tapo-p110", "switchbot-matter-plug-mini"],

  content: (
    <>
      <p>
        Een slimme stekker op tijdschema zetten is een van de makkelijkste
        manieren om energie te besparen en je huis slimmer te maken. Je
        beschrijft precies wanneer een apparaat stroom krijgt — en wanneer niet.
      </p>

      <p>
        Dit werkt goed voor: sfeerverlichting, de koffiezetapparaat, opladers
        en ventilators.
      </p>

      <h2>Stap 1: Zorg dat de stekker is gekoppeld</h2>

      <p>
        Je slimme stekker moet eerst zijn gekoppeld aan de app. Heb je dat
        nog niet gedaan? Lees dan eerst{" "}
        <a href="/how-to/slimme-stekker-instellen">
          hoe je een slimme stekker instelt
        </a>
        .
      </p>

      <h2>Stap 2: Open de schema-instellingen (Tapo app)</h2>

      <ol>
        <li>Open de Tapo app en tik op je stekker</li>
        <li>Tik op 'Agenda' in het menu onderaan</li>
        <li>Tik op '+' om een nieuw schema toe te voegen</li>
      </ol>

      <h2>Stap 3: Stel aan- en uittijden in</h2>

      <p>Kies voor elke actie:</p>

      <ul>
        <li><strong>Type:</strong> Aan of Uit</li>
        <li><strong>Tijd:</strong> Vaste tijd (bijv. 21:00) of bij zonsondergang/zonsopgang</li>
        <li><strong>Dag:</strong> Elke dag, werkdagen of weekenden</li>
      </ul>

      <p>
        Voorbeeld: Sfeerverlichting aan bij zonsondergang, uit om 23:30.
      </p>

      <h2>Stap 4: Herhaal voor meerdere regels</h2>

      <p>
        Je kunt meerdere regels toevoegen. Zo maak je verschillende schema's
        voor werkdagen en weekend:
      </p>

      <ul>
        <li>Maandag–vrijdag: aan om 18:00, uit om 22:30</li>
        <li>Zaterdag–zondag: aan bij zonsondergang, uit om 23:30</li>
      </ul>

      <h2>Zonsondergang als slimme trigger</h2>

      <p>
        De Tapo app past de zonsondergangstijd automatisch aan op basis van
        je locatie. Dit is handig voor sfeerverlichting die altijd aanspringt
        als het donker wordt — ook als dat in de winter vroeg is.
      </p>

      <h2>Schema instellen zonder hub (alternatief: Google Home)</h2>

      <p>
        Heb je de stekker gekoppeld aan Google Home? Dan kun je ook via
        Google Home schema's en routines instellen:
      </p>

      <ol>
        <li>Open Google Home</li>
        <li>Ga naar Automatisering (links onderin)</li>
        <li>Maak een nieuwe automatisering en kies 'Tijdstip' als trigger</li>
        <li>Kies de stekker als actie en stel in op 'Aan' of 'Uit'</li>
      </ol>

      <h2>Energiebesparing meten</h2>

      <p>
        Gebruik je een stekker met energiemeting (zoals de Tapo P110 of P115)?
        Dan zie je in de app hoeveel stroom je bespaart door het schema.
        Televisies en spelcomputers in standby verbruiken vaak 5–20 watt
        onnodig — dat telt op over een jaar.
      </p>

      <h2>Conclusie</h2>

      <p>
        Een tijdschema instellen op een slimme stekker duurt minder dan
        5 minuten en geeft je directe controle over wanneer apparaten stroom
        krijgen. Ideaal voor energiebesparing en gemak.
      </p>
    </>
  ),

  faq: [
    {
      question: "Werkt het schema ook als internet uitvalt?",
      answer:
        "Bij sommige merken blijft het schema werken op de stekker zelf (lokaal opgeslagen). Bij andere merken is een actieve internetverbinding vereist. Check dit in de specificaties of test het zelf.",
    },
    {
      question: "Kan ik meerdere schema's instellen voor dezelfde stekker?",
      answer:
        "Ja. Je kunt meerdere regels toevoegen, zoals één voor werkdagen en één voor weekend. Elk schema werkt onafhankelijk.",
    },
    {
      question: "Hoe stel ik een vakantie-schema in?",
      answer:
        "Gebruik de 'vakantie-modus' of willekeurige inschakeltijden als je app dit ondersteunt. In de Tapo app heet dit 'Timer'. Zo zien je lampen en apparaten er actief uit terwijl je weg bent.",
    },
    {
      question: "Wat is het verschil tussen een schema en een automatisering?",
      answer:
        "Een schema loopt op een vaste tijd. Een automatisering reageert op een gebeurtenis (beweging, temperatuur, je locatie). Schema's zijn simpeler; automatiseringen zijn flexibeler en slimmer.",
    },
  ],
},

{
  slug: "ikea-zigbee-koppelen-homey-pro",
  title: "IKEA Zigbee-lamp koppelen aan Homey Pro",
  seoTitle: "IKEA Zigbee lamp koppelen aan Homey Pro",
  categories: ["verlichting", "hub"],
  toc: [
    { id: "wat-je-nodig-hebt", label: "Wat je nodig hebt" },
    { id: "stap-1-zigbee-of-matter", label: "Stap 1: Zigbee of Matter?" },
    { id: "stap-2-reset", label: "Stap 2: Reset de lamp" },
    { id: "stap-3-toevoegen", label: "Stap 3: Toevoegen in Homey" },
    { id: "niet-gevonden", label: "Lamp niet gevonden?" },
    { id: "meerdere-lampen", label: "Meerdere lampen" },
    { id: "automatisering", label: "Automatisering instellen" },
    { id: "kaku", label: "Combineren met KAKU" },
  ],
  shortAnswer:
    "Open de Homey-app, ga naar Apparaten → + → zoek op IKEA, selecteer het lamptype en zet de lamp aan als Homey daarom vraagt. Nieuwe lampen hoef je niet eerst te resetten. Werkt ook met KAKU en andere Zigbee-apparaten in dezelfde setup.",
  description:
    "Zo koppel je IKEA TRÅDFRI Zigbee-lampen aan je Homey Pro. Stap voor stap, inclusief tips als het niet lukt. Werkt ook met KAKU.",
  image: "/images/how-to/beginnen-met-smart-home.png",
  available: true,
  dateModified: "2026-05-01",
  relatedProductSlugs: [
    "philips-hue-white-ambiance-starterkit",
    "innr-zigbee-e27",
    "homey-pro-early-2023",
  ],

  content: (
    <>
      <p>
        Je hebt een IKEA TRÅDFRI lamp gekocht en wil hem koppelen aan je Homey Pro.
        Dat is eenvoudiger dan je denkt, maar er zijn een paar dingen waar je op
        moet letten. Ik heb dit zelf gedaan met mijn eigen setup en deel hier de
        exacte stappen — inclusief wat je moet doen als het fout gaat.
      </p>

      <h2 id="wat-je-nodig-hebt">Wat je nodig hebt</h2>
      <ul>
        <li>Homey Pro (elk model werkt — ook de 2019 versie)</li>
        <li>IKEA TRÅDFRI lamp (Zigbee — niet KAJPLATS, die is Matter-only)</li>
        <li>De Homey app op je telefoon</li>
        <li>De lamp in een werkende fitting</li>
      </ul>

      <h2 id="stap-1-zigbee-of-matter">Stap 1: Controleer of je lamp Zigbee of Matter is</h2>
      <p>
        TRÅDFRI lampen zijn Zigbee. KAJPLATS lampen zijn Matter. Je herkent het
        aan de verpakking: op Zigbee-lampen staat het Zigbee-logo, Matter-lampen
        hebben een Matter-logo en verwijzen naar de DIRIGERA hub.
      </p>
      <p>
        Zigbee-lampen werken direct met Homey Pro zonder extra stappen. Matter-lampen
        vereisen de IKEA DIRIGERA hub als tussenschakel — je kunt ze dan via de
        DIRIGERA integratie in Homey toevoegen.
      </p>

      <h2 id="stap-2-reset">Stap 2: Reset de lamp (alleen bij eerder gebruikte lampen)</h2>
      <p>
        Voor een <strong>nieuwe lamp</strong> uit de doos is dit niet nodig — sla
        deze stap over. Voor een lamp die al ergens aan gekoppeld was: zet hem
        6 keer aan en uit met een interval van ongeveer 1 seconde. De lamp
        knippert kort als hij gereset is en klaar is om opnieuw te koppelen.
      </p>

      <h2 id="stap-3-toevoegen">Stap 3: Voeg de lamp toe in Homey</h2>
      <ol>
        <li>Open de Homey app op je telefoon</li>
        <li>Ga naar <strong>Apparaten</strong> → tik op het <strong>+</strong> icoon</li>
        <li>Zoek op &quot;IKEA&quot; en selecteer het juiste lamptype (E27, GU10, strip, etc.)</li>
        <li>Zet de lamp aan als Homey daarom vraagt</li>
        <li>Homey zoekt automatisch naar de lamp via Zigbee — dit duurt 10–30 seconden</li>
        <li>Geef de lamp een naam en wijs een kamer toe</li>
      </ol>
      <p>
        Tip: zorg dat je telefoon en de lamp allebei dicht bij de Homey Pro staan
        tijdens het koppelen. Daarna kun je de lamp verplaatsen.
      </p>

      <h2 id="niet-gevonden">Wat als de lamp niet gevonden wordt?</h2>
      <ul>
        <li>Zorg dat de lamp minder dan 10 meter van de Homey staat bij koppeling</li>
        <li>Reset de lamp opnieuw (6× aan/uit)</li>
        <li>Verwijder eventuele andere Zigbee-koppelingen (IKEA-hub) eerst — een lamp kan maar aan één hub tegelijk gekoppeld zijn</li>
        <li>Controleer of je Homey Pro firmware up-to-date is (Homey app → Instellingen → Over Homey)</li>
        <li>Probeer het nog een keer: Zigbee-koppeling kan soms twee pogingen nodig hebben</li>
      </ul>

      <h2 id="meerdere-lampen">Meerdere lampen toevoegen</h2>
      <p>
        Voeg lampen één voor één toe, niet tegelijk. Na koppeling kun je ze
        samenvoegen in een <strong>Zone</strong> (kamer) voor gelijktijdig schakelen.
        In Homey kun je ook een groep aanmaken zodat je ze als één apparaat kunt
        aansturen.
      </p>
      <p>
        Let op: boven de 15–20 IKEA-lampen op één Zigbee-netwerk kun je instabiliteit
        krijgen. IKEA verkoopt smart plugs die als Zigbee-router fungeren en het
        netwerk versterken — gebruik die als je meer dan 10 lampen hebt.
      </p>

      <h2 id="automatisering">Automatisering: lamp aan bij zonsondergang</h2>
      <p>
        Nu de lamp gekoppeld is, kun je hem automatiseren. Een simpel voorbeeld
        in Homey:
      </p>
      <ul>
        <li><strong>Trigger:</strong> zonsondergang (Homey weet dit automatisch op basis van je locatie)</li>
        <li><strong>Actie:</strong> zet IKEA-lamp aan op 50% helderheid</li>
        <li><strong>Extra:</strong> voeg een tweede actie toe om de lamp om 23:00 uit te zetten</li>
      </ul>
      <p>
        Gebruik de <strong>Geavanceerde Flow</strong> als je meerdere lampen tegelijk
        wil aansturen of condities wil toevoegen (bijv. alleen als niemand thuis is).
      </p>

      <h2 id="kaku">Combineren met KAKU-apparaten</h2>
      <p>
        Ik gebruik zelf IKEA Zigbee-lampen in combinatie met KAKU-schakelaars op
        de Homey Pro. Dat werkt prima — Homey ondersteunt meerdere protocollen
        tegelijk. Je kunt een KAKU-schakelaar als trigger gebruiken om je
        IKEA-lampen aan en uit te zetten, zelfs als ze aan verschillende protocols
        hangen.
      </p>
    </>
  ),

  faq: [
    {
      question: "Werkt IKEA KAJPLATS ook met Homey Pro?",
      answer:
        "Ja, maar niet via Zigbee. KAJPLATS is een Matter-apparaat. Je kunt het koppelen via de IKEA DIRIGERA hub die als Matter-controller fungeert, en deze vervolgens integreren met Homey. Directe Zigbee-koppeling werkt niet voor KAJPLATS.",
    },
    {
      question: "Kan ik IKEA-lampen en KAKU-apparaten in dezelfde Homey-setup gebruiken?",
      answer:
        "Ja. Homey Pro ondersteunt meerdere protocollen tegelijk, waaronder Zigbee (voor IKEA) en Z-Wave of 433MHz (voor KAKU). Je beheert ze allemaal vanuit dezelfde Homey-app en kunt ze combineren in automatiseringen.",
    },
    {
      question: "Hoeveel IKEA-lampen kan ik koppelen aan één Homey Pro?",
      answer:
        "Technisch gezien zijn er geen harde limieten in Homey. Maar het Zigbee-netwerk wordt instabiel boven de 15-20 lampen zonder tussenliggende Zigbee-routers. IKEA verkoopt router-apparaten (zoals de smart plug) die het Zigbee-bereik verlengen. Gebruik die als je meer dan 10 lampen hebt.",
    },
    {
      question: "Verlies ik mijn IKEA-app als ik naar Homey overstap?",
      answer:
        "Je kunt de IKEA Home Smart-app niet meer gebruiken voor lampen die je via Homey hebt gekoppeld. Kies dus één systeem: óf IKEA-hub met IKEA-app, óf Homey Pro. De meeste mensen kiezen voor Homey zodra ze meer dan 5 lampen hebben of andere merken willen combineren.",
    },
  ],
},

];