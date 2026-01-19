import TipBanner from "@/components/TipBanner";

export const metadata = {
  title: "Smart home apparaat koppelt niet met Wi-Fi? (snelle fixes)",
  description:
    "Koppelen lukt niet? Check 2.4 GHz, WPA3-only, SSID, AP isolation en router-instellingen. Dit stappenplan lost het meestal direct op.",
  alternates: {
    canonical: "/tips/smart-home-koppelt-niet-wifi",
  },
};

export default function Page() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Smart%20home%20apparaat%20koppelt%20niet%20met%20Wi-Fi.png";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      {/* Banner met blur zijkanten */}
      <TipBanner src={tipImg} alt="Smart home apparaat koppelt niet met Wi-Fi" />

      <header className="mb-8">
        <p className="text-sm opacity-70">Tips • Wi-Fi</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">
          Smart home apparaat koppelt niet met Wi-Fi? (WPA3, 2.4 GHz en SSID fix)
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Als koppelen faalt, ligt het zelden aan het apparaat. Meestal is het
          een Wi-Fi instelling. Dit is de snelle checklist die bijna altijd
          werkt.
        </p>
      </header>

      <article className="prose prose-zinc max-w-none">
        <h2>De 5 meest voorkomende oorzaken</h2>
        <ol>
          <li>
            Je telefoon zit op <strong>5 GHz</strong> terwijl het apparaat{" "}
            <strong>2.4 GHz</strong> nodig heeft.
          </li>
          <li>
            Je router staat op <strong>WPA3-only</strong> (veel IoT kan dat niet).
          </li>
          <li>Je netwerknaam (SSID) bevat rare tekens/emoji/symbolen.</li>
          <li>
            <strong>AP isolation / client isolation</strong> staat aan.
          </li>
          <li>
            Multicast/mDNS wordt beperkt (komt soms voor bij “veiligheidsmodi”).
          </li>
        </ol>

        <h2>Snel stappenplan</h2>
        <ul>
          <li>
            Zet je telefoon tijdelijk op <strong>2.4 GHz</strong>.
          </li>
          <li>
            Zet beveiliging op <strong>WPA2</strong> of{" "}
            <strong>WPA2/WPA3 mixed</strong>.
          </li>
          <li>
            Gebruik een simpele SSID (alleen letters/cijfers, geen speciale tekens).
          </li>
          <li>
            Zet “AP/client isolation” <strong>uit</strong>.
          </li>
          <li>Herstart router + apparaat en probeer opnieuw.</li>
        </ul>

        <p>
          Tip: als het apparaat een reset-knop heeft, doe een volledige reset
          voordat je opnieuw koppelt. Veel apparaten “onthouden” een mislukte
          poging.
        </p>
      </article>
    </main>
  );
}
