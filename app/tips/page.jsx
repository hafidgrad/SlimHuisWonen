import TipBanner from "@/components/TipBanner";
import TipCard from "@/components/TipCard";

export default function TipsPage() {
  const tips = [
    {
      title: "Wat is slimme verlichting?",
      slug: "wat-is-slimme-verlichting",
      desc: "We leggen uit wat slimme verlichting is, hoe het werkt en wat je ermee kunt.",
      image: "/images/tips/wat-is-slimme-verlichting.png",
    },
    {
      title: "Beginnen met slimme verlichting",
      slug: "beginnen-met-slimme-verlichting",
      desc: "Wil je starten? Volg deze eenvoudige stappen zonder technische kennis.",
      image: "/images/tips/beginnen-met-slimme-verlichting.png",
    },
    {
      title: "Beginnen met smart home in 5 stappen",
      slug: "beginnen-met-smart-home",
      desc: "Van eerste slimme lamp tot automatiseringen zonder gedoe.",
      image: "/images/tips/beginnen-met-smart-home.png",
    },
    {
      title: "Merken combineren zonder gedoe",
      slug: "merken-combineren-zonder-gedoe",
      desc: "Philips Hue, Ikea, Aqara, Nest en meer: zo laat je alles samenwerken.",
      image: "/images/tips/merken-combineren.png",
    },
    {
      title: "Slim huis zonder hub",
      slug: "slim-huis-zonder-hub",
      desc: "Kan een slim huis ook zonder hub werken? Dit zijn de voor- en nadelen.",
      image: "/images/tips/slim-huis-zonder-hub.png",
    },
    {
      title: "Slimme verlichting werkt niet na stroomuitval",
      slug: "slimme-verlichting-werkt-niet-na-stroomuitval",
      desc: "Na een stroomstoring werkt je slimme verlichting niet meer? Zo los je het op.",
      image: "/images/tips/stroomuitval.png",
    },
    {
      title: "Slimme lamp werkt niet met schakelaar",
      slug: "slimme-lamp-werkt-niet-met-schakelaar",
      desc: "Waarom reageert je slimme lamp niet meer als je de schakelaar gebruikt?",
      image: "/images/tips/schakelaar.png",
    },
    {
      title: "Wat is een smart home hub?",
      slug: "wat-is-een-smart-home-hub",
      desc: "Wat doet een hub precies en wanneer heb je die echt nodig?",
      image: "/images/tips/wat-is-een-hub.png",
    },
    {
      title: "Wi-Fi verbeteren voor smart home",
      slug: "wifi-verbeteren-voor-smart-home",
      desc: "Praktische tips om je wifi stabieler te maken voor slimme apparaten.",
      image: "/images/tips/wifi-verbeteren.png",
    },
    {
      title: "2.4 GHz vs 5 GHz voor smart home",
      slug: "2-4ghz-vs-5ghz-smart-home",
      desc: "Welke wifi-band is beter voor smart home apparaten? Dit moet je weten.",
      image: "/images/tips/2-4-vs-5ghz.png",
    },
    {
      title: "Smart home apparaat koppelt niet met Wi-Fi?",
      slug: "smart-home-apparaat-koppelt-niet-wifi",
      desc: "Apparaat wil niet verbinden? Zo los je de meest voorkomende oorzaken op.",
      image: "/images/tips/koppelt-niet.png",
    },
    {
      title: "Wi-Fi bereik verbeteren zonder nieuwe router",
      slug: "wifi-bereik-verbeteren-zonder-nieuwe-router",
      desc: "Je wifi uitbreiden zonder direct een nieuwe router te kopen.",
      image: "/images/tips/wifi-bereik.png",
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
