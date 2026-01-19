import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Wi-Fi verbeteren voor smart home: 10 tips voor een stabiel slim huis",
  description:
    "Smart home valt offline of reageert traag? Verbeter je Wi-Fi met 10 praktische tips: 2.4GHz vs 5GHz, mesh, kanaalkeuze, router-instellingen en vaste IP’s.",
  alternates: {
    canonical: "/tips/wifi-verbeteren-voor-smart-home",
  },
};

export default function Page() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wi-Fi%20verbeteren%20voor%20smart%20home.png";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* Banner met blur zijkanten */}
      <TipBanner src={tipImg} alt="Wi-Fi verbeteren voor smart home" />

      <header className="mb-8">
        <p className="text-sm opacity-70">Tips • Netwerk</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">
          Wi-Fi verbeteren voor smart home: 10 tips voor een stabiel slim huis
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Lampen offline, camera’s die haperen, apps die blijven laden? In veel
          gevallen is je Wi-Fi de echte boosdoener. Met deze gids maak je jouw
          netwerk smart-home-proof.
        </p>
      </header>

      <article className="prose prose-zinc max-w-none">
        <p>
          Veel smart home “problemen” zijn eigenlijk Wi-Fi-problemen. Lampen die
          offline gaan, speakers met vertraging, deurbellen die soms niet
          reageren… het komt vaak door instabiel bereik of router-instellingen
          die niet lekker werken met IoT.
        </p>

        <h2>10 tips om je Wi-Fi smart-home-proof te maken</h2>

        <h3>1) Zet smart home apparaten zoveel mogelijk op 2.4 GHz</h3>
        <p>
          2.4 GHz reikt verder en gaat beter door muren. Gebruik 5 GHz vooral
          voor telefoons, laptops en tv’s.
        </p>

        <h3>2) Plaats je router slimmer</h3>
        <p>
          Zet je router centraal, vrij en op hoogte. Vermijd kasten, metaal en
          plekken achter de tv.
        </p>

        <h3>3) Split 2.4 GHz en 5 GHz als apparaten vaak offline gaan</h3>
        <p>
          Eén SSID voor beide banden is handig, maar sommige IoT-apparaten raken
          in de war. Maak desnoods twee netwerken: <em>…-2G</em> en <em>…-5G</em>.
        </p>

        <h3>4) Gebruik WPA2 (of WPA2/WPA3 mixed)</h3>
        <p>
          Veel smart home apparatuur ondersteunt geen WPA3-only. Kies WPA2 of een
          mixed modus op je IoT-netwerk.
        </p>

        <h3>5) Kies een vast 2.4 GHz kanaal (1, 6 of 11)</h3>
        <p>
          Zet kanaalkeuze liever vast op 1/6/11 om overlap en rare wissels te
          voorkomen.
        </p>

        <h3>6) Schakel agressieve “optimalisaties” uit als het instabiel is</h3>
        <p>
          Denk aan Airtime Fairness, Smart Connect/Band Steering, 802.11r fast
          roaming of “AX only”. Test of zet uit als IoT wegvalt.
        </p>

        <h3>7) Geef belangrijke apparaten een vast IP (DHCP reservation)</h3>
        <p>
          Geef vaste IP’s aan je hubs (Homey/Hue/Home Assistant), camera’s en
          deurbellen. Dat voorkomt “zoek raken” en maakt troubleshooten
          makkelijker.
        </p>

        <h3>8) Overweeg mesh als je dode hoeken hebt</h3>
        <p>
          Mesh is meestal beter dan een losse extender: minder gedoe, stabieler
          roaming, betere dekking.
        </p>

        <h3>9) Gebruik kabel waar het kan (backhaul)</h3>
        <p>
          Kabel voor hubs/TV/mesh-backhaul vermindert Wi-Fi druk en verhoogt
          stabiliteit voor IoT.
        </p>

        <h3>10) Maak een apart IoT-netwerk (optioneel)</h3>
        <p>
          Zet IoT op één 2.4 GHz netwerk en je “normale” apparaten op een ander.
          Overzichtelijker en vaak stabieler.
        </p>

        <h2>Snelle checklist</h2>
        <ul>
          <li>Smart home op 2.4 GHz</li>
          <li>Router centraal en vrij geplaatst</li>
          <li>2.4/5 GHz gesplitst als koppelen lastig is</li>
          <li>WPA2 of WPA2/WPA3 mixed</li>
          <li>Kanaal 1/6/11 vast op 2.4 GHz</li>
          <li>Band steering/fast roaming getest of uit</li>
          <li>Vaste IP’s voor hubs/camera’s</li>
          <li>Mesh/AP’s voor dode hoeken</li>
          <li>Kabel/backhaul waar mogelijk</li>
          <li>Optioneel: apart IoT-netwerk</li>
        </ul>

        <p>
          Krijg je alsnog “offline” apparaten? Dan is het bijna altijd één van
          deze drie: <strong>bereik</strong>, <strong>2.4/5 GHz</strong> of{" "}
          <strong>beveiliging (WPA3)</strong>. Begin met de simpele fixes en
          breid daarna uit met mesh of access points.
        </p>
      </article>
    </main>
  );
}
