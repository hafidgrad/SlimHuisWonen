import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Wat is een smart home hub? Uitleg & voorbeelden",
  description:
    "Wat is een smart home hub en heb je er één nodig? We leggen uit wat een hub doet, wanneer je hem nodig hebt en welke alternatieven er zijn.",
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
            Een smart home hub is het centrale punt van je slimme huis.
            Het zorgt ervoor dat slimme apparaten met elkaar kunnen samenwerken,
            ook als ze van verschillende merken zijn.
          </p>

          <h2>Wat doet een smart home hub precies?</h2>

          <p>
            Zonder hub werkt elk slim apparaat meestal in zijn eigen app.
            Met een hub kun je alles vanuit één systeem aansturen.
          </p>

          <ul>
            <li>Verbindt apparaten van verschillende merken</li>
            <li>Maakt automatiseringen mogelijk</li>
            <li>Werkt vaak sneller en stabieler dan wifi</li>
            <li>Vermindert afhankelijkheid van cloud-diensten</li>
          </ul>

          <h2>Wanneer heb je een hub nodig?</h2>

          <p>
            Je hebt niet altijd een hub nodig. Het hangt af van wat je wilt.
          </p>

          <ul>
            <li>❌ Alleen één slimme lamp → geen hub nodig</li>
            <li>❌ Een paar wifi-apparaten → meestal geen hub</li>
            <li>✅ Meerdere merken combineren → hub sterk aan te raden</li>
            <li>✅ Automatiseringen met sensoren → hub bijna onmisbaar</li>
          </ul>

          <h2>Welke soorten hubs zijn er?</h2>

          <h3>1. Merkgebonden hubs</h3>
          <p>
            Sommige merken hebben hun eigen hub, zoals Philips Hue.
            Deze werken perfect binnen het eigen ecosysteem, maar minder goed
            met andere merken.
          </p>

          <h3>2. Universele hubs</h3>
          <p>
            Universele hubs ondersteunen meerdere merken en protocollen.
            Ze zijn ideaal als je wilt combineren zonder gedoe.
          </p>

          <ul>
            <li>Homey</li>
            <li>Home Assistant</li>
            <li>Apple HomeKit (beperkter)</li>
          </ul>

          <h2>Welke technieken gebruikt een hub?</h2>

          <p>
            Veel hubs werken met speciale protocollen die beter zijn dan wifi
            voor smart home.
          </p>

          <ul>
            <li>Zigbee – stabiel en energiezuinig</li>
            <li>Z-Wave – betrouwbaar, maar minder merken</li>
            <li>Thread – nieuw en veelbelovend</li>
          </ul>

          <h2>Hub vs. geen hub: wat is beter?</h2>

          <p>
            Er is geen goed of fout. Het hangt af van je wensen.
          </p>

          <p>
            👉 Lees ook:{" "}
            <Link href="/tips/slim-huis-zonder-hub">
              Slim huis zonder hub: kan dat?
            </Link>
          </p>

          <h2>Praktisch voorbeeld</h2>

          <p>
            Je combineert:
          </p>

          <ul>
            <li>Philips Hue lampen</li>
            <li>Aqara bewegingssensor</li>
            <li>Eén centrale hub</li>
          </ul>

          <p>
            Resultaat: bij beweging gaat automatisch het licht aan,
            zonder vertraging en zonder meerdere apps.
          </p>

          <h2>Conclusie</h2>

          <p>
            Een smart home hub is niet verplicht, maar maakt je slimme huis
            overzichtelijker, stabieler en krachtiger.
          </p>

          <p>
            Wil je weten hoe je slim begint?
            {" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home in 5 stappen
            </Link>
          </p>

          <p>
            Of lees:
            {" "}
            <Link href="/tips/merken-combineren-zonder-gedoe">
              Merken combineren zonder gedoe
            </Link>
          </p>

          <hr />

          <p className="muted small">
            *Ondersteuning verschilt per merk en hub.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
