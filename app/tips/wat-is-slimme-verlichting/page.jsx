import TipBanner from "@/components/TipBanner";

export default function WatIsSlimmeVerlichtingPage() {
  const tipImg =
    "/images/Tips%20%26%20uitleg/Wat%20is%20slimme%20verlichting.png";

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
      {/* Banner met blur zijkanten */}
      <TipBanner src={tipImg} alt="Wat is slimme verlichting?" />

      {/* Content */}
      <h1 style={{ fontSize: 40, marginBottom: 10 }}>
        Wat is slimme verlichting?
      </h1>

      <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: 22 }}>
        Slimme verlichting is verlichting die je niet alleen met een schakelaar
        bedient, maar ook via een app, schema’s, automatiseringen of spraak. Het
        is vaak de eerste stap richting een slim huis.
      </p>

      <h2 style={{ fontSize: 26, marginTop: 30, marginBottom: 10 }}>
        Wat maakt verlichting “slim”?
      </h2>

      <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
        Slimme verlichting is verbonden met internet of een hub. Daardoor kun je
        lampen bedienen wanneer je wilt, automatisch laten reageren of combineren
        met andere slimme apparaten.
      </p>

      <ul style={{ opacity: 0.85, lineHeight: 1.8, marginTop: 12 }}>
        <li>Aan- en uitzetten via een app</li>
        <li>Timers en schema’s instellen</li>
        <li>Dimmen of kleur aanpassen</li>
        <li>Automatisch reageren op beweging of tijdstip</li>
      </ul>

      <h2 style={{ fontSize: 26, marginTop: 30, marginBottom: 10 }}>
        Hoe werkt slimme verlichting?
      </h2>

      <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
        Er zijn verschillende manieren waarop slimme verlichting werkt. Dit
        bepaalt ook hoe uitgebreid je systeem kan worden.
      </p>

      <h3 style={{ fontSize: 20, marginTop: 18 }}>1. Wifi-verlichting</h3>
      <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
        Deze lampen verbinden direct met je wifi. Ze zijn goedkoop en eenvoudig,
        maar minder geschikt voor grote installaties.
      </p>

      <h3 style={{ fontSize: 20, marginTop: 18 }}>
        2. Verlichting met hub (Zigbee)
      </h3>
      <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
        Systemen zoals Philips Hue of Aqara gebruiken een hub. Dit is stabieler,
        sneller en beter geschikt voor automatiseringen.
      </p>

      <h2 style={{ fontSize: 26, marginTop: 30, marginBottom: 10 }}>
        Heb je altijd een hub nodig?
      </h2>
      <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
        Nee. Voor eenvoudige toepassingen is een hub niet nodig. Wil je meerdere
        merken combineren of automatiseringen maken met sensoren, dan is een hub
        wel aan te raden.
      </p>
    </main>
  );
}
