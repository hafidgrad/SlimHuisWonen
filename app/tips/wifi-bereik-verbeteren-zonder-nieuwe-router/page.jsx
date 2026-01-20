import TipBanner from "@/components/TipBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wi-Fi bereik verbeteren zonder nieuwe router: 7 slimme oplossingen",
  description:
    "Slechte Wi-Fi in huis? Verbeter je bereik zonder meteen een nieuwe router te kopen. 7 praktische tips voor meer dekking en stabiel smart home.",
  alternates: {
    canonical: "/tips/wifi-bereik-verbeteren-zonder-nieuwe-router",
  },
};

export default function Page() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wi-Fi%20bereik%20verbeteren%20zonder%20nieuwe%20router.png";

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          {/* ✅ Banner zoals andere tips */}
          <TipBanner
            src={tipImg}
            alt="Wi-Fi bereik verbeteren zonder nieuwe router"
          />

          <h1 style={{ marginTop: 18 }}>
            Wi-Fi bereik verbeteren zonder nieuwe router: 7 slimme oplossingen
          </h1>

          <p className="section-intro">
            Dode hoeken in huis? Je hoeft niet meteen een nieuwe router te kopen.
            Met deze stappen haal je vaak al enorme winst — vooral voor smart home.
          </p>

          <h2>7 oplossingen die vaak direct helpen</h2>

          <h3>1) Plaats je router hoger en vrij</h3>
          <p>
            Niet in een kast, niet achter de tv, niet in de meterkast. Zet ‘m
            centraal en op hoogte.
          </p>

          <h3>2) Zet 2.4 GHz kanaal vast (1, 6 of 11)</h3>
          <p>
            Automatisch kanaal wisselen kan instabiliteit geven. Kies één vast
            kanaal.
          </p>

          <h3>3) Update je router firmware</h3>
          <p>
            Bugs en Wi-Fi problemen worden vaak opgelost met updates. Check het
            beheerpanel van je router.
          </p>

          <h3>4) Zet “te slimme” functies uit bij IoT-problemen</h3>
          <p>
            Band steering, fast roaming of Airtime Fairness kan IoT verstoren.
            Test of uitschakelen stabiliteit geeft.
          </p>

          <h3>5) Voeg een access point toe via kabel</h3>
          <p>
            Dit is vaak de beste upgrade: één extra access point op een slimme
            plek geeft topdekking zonder compleet nieuw systeem.
          </p>

          <h3>6) Gebruik mesh als kabel niet kan</h3>
          <p>
            Mesh is meestal stabieler dan een goedkope extender en roamt beter
            door het huis.
          </p>

          <h3>7) Zet hubs en vaste apparaten bekabeld</h3>
          <p>
            Hue Bridge, Homey, Home Assistant, tv’s: bekabeld waar mogelijk. Dat
            verlaagt de Wi-Fi druk en verhoogt stabiliteit.
          </p>

          <p>
            Als je na deze stappen nog steeds dode hoeken hebt, is de kans groot
            dat je woning (beton/vloerverwarming/verdiepingen) een mesh of access
            points echt nodig heeft.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
