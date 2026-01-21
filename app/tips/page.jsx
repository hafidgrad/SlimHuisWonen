import TipBanner from "@/components/TipBanner";
import TipCard from "@/components/TipCard";

export default function TipsPage() {
  const tips = [
    {
      title: "Wat is slimme verlichting?",
      slug: "wat-is-slimme-verlichting",
      desc: "We leggen uit wat slimme verlichting is, hoe het werkt en wat je ermee kunt.",
    },
    {
      title: "Beginnen met slimme verlichting",
      slug: "beginnen-met-slimme-verlichting",
      desc: "Wil je starten? Volg deze eenvoudige stappen zonder technische kennis.",
    },
    {
      title: "Beginnen met smart home in 5 stappen",
      slug: "beginnen-met-smart-home",
      desc: "Van eerste slimme lamp tot automatiseringen zonder gedoe.",
    },
    {
      title: "Merken combineren zonder gedoe",
      slug: "merken-combineren-zonder-gedoe",
      desc: "Philips Hue, Ikea, Aqara, Nest en meer: zo laat je alles samenwerken.",
    },
    {
      title: "Slim huis zonder hub",
      slug: "slim-huis-zonder-hub",
      desc: "Kan een slim huis ook zonder hub werken? Dit zijn de voor- en nadelen.",
    },
    {
      title: "Slimme verlichting werkt niet na stroomuitval",
      slug: "slimme-verlichting-werkt-niet-na-stroomuitval",
      desc: "Na een stroomstoring werkt je slimme verlichting niet meer? Zo los je het op.",
    },
    {
      title: "Slimme lamp werkt niet met schakelaar",
      slug: "slimme-lamp-werkt-niet-met-schakelaar",
      desc: "Waarom reageert je slimme lamp niet meer als je de schakelaar gebruikt?",
    },
    {
      title: "Wat is een smart home hub?",
      slug: "wat-is-een-smart-home-hub",
      desc: "Wat doet een hub precies en wanneer heb je die echt nodig?",
    },
    {
      title: "Wi-Fi verbeteren voor smart home",
      slug: "wifi-verbeteren-voor-smart-home",
      desc: "Praktische tips om je wifi stabieler te maken voor slimme apparaten.",
    },
    {
      title: "2.4 GHz vs 5 GHz voor smart home",
      slug: "2-4ghz-vs-5ghz-smart-home",
      desc: "Welke wifi-band is beter voor smart home apparaten? Dit moet je weten.",
    },
    {
      title: "Smart home apparaat koppelt niet met Wi-Fi?",
      slug: "smart-home-apparaat-koppelt-niet-wifi",
      desc: "Apparaat wil niet verbinden? Zo los je de meest voorkomende oorzaken op.",
    },
    {
      title: "Wi-Fi bereik verbeteren zonder nieuwe router",
      slug: "wifi-bereik-verbeteren-zonder-nieuwe-router",
      desc: "Je wifi uitbreiden zonder direct een nieuwe router te kopen.",
    },
  ];

  const headerImg = "/images/Tips%20%26%20uitleg/Tips%20%26%20uitleg.png";

  return (
    <main className="section">
      <div className="container">
        {/* ✅ Header banner met blur zijkanten */}
        <TipBanner src={headerImg} alt="Tips & uitleg" />

        {/* Titel + intro */}
        <h1 style={{ fontSize: 42, marginBottom: 8 }}>Tips & uitleg</h1>
        <p className="section-intro">
          Stap-voor-stap uitleg en praktische tips om je huis slimmer te maken.
          Geschikt voor beginners én gevorderden.
        </p>

        {/* Cards */}
        <div className="tips-grid">
          {tips.map((tip) => (
            <TipCard key={tip.slug} tip={tip} />
          ))}
        </div>
      </div>
    </main>
  );
}
