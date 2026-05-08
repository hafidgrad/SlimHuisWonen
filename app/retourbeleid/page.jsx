import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Retourbeleid | SlimHuisWonen",
  description:
    "Lees het retourbeleid van SlimHuisWonen. Informatie over retourneren, omruilen en verzendkosten.",
  alternates: {
    canonical: "https://www.slimhuiswonen.nl/retourbeleid",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Retourbeleid",
  url: "https://www.slimhuiswonen.nl/retourbeleid",
  description: "Retourbeleid van SlimHuisWonen",
};

const stores = [
  {
    name: "bol.com",
    termijn: "30 dagen na ontvangst",
    kosten: "Gratis",
    methode: "Via pakketpunt of brievenbus",
    omruilen: "Ja (nieuw bestellen na retour)",
    url: "https://www.bol.com/nl/nl/klantenservice/",
    urlLabel: "bol.com/retourneren",
  },
  {
    name: "Coolblue",
    termijn: "30 dagen na ontvangst",
    kosten: "Gratis",
    methode: "Via PostNL-punt of Coolblue winkel",
    omruilen: "Ja",
    url: "https://www.coolblue.nl/klantenservice/retourneren",
    urlLabel: "coolblue.nl/klantenservice/retourneren",
  },
  {
    name: "Amazon.nl",
    termijn: "30 dagen na ontvangst",
    kosten: "Gratis (Fulfilled by Amazon)",
    methode: "Via pakketpunt",
    omruilen: "Ja",
    url: "https://www.amazon.nl/gp/help/customer/display.html?nodeId=GKM69DUUYKQWKWX7",
    urlLabel: "amazon.nl/returns",
  },
  {
    name: "Action (shop.action.com)",
    termijn: "14 dagen na ontvangst",
    kosten: "Gratis (online bestellingen)",
    methode: "Via DHL/PostNL punt",
    omruilen: "Nee (retour + nieuwe bestelling)",
    url: "https://shop.action.com/nl-nl/klantenservice",
    urlLabel: "shop.action.com/klantenservice",
  },
];

export default function RetourbeleidPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Header />

      <main className="section">
        <div className="container article">
          <h1>Retourbeleid</h1>

          <p>
            SlimHuisWonen is een affiliate website. Wij verkopen zelf geen
            producten — wij verwijzen je door naar webshops zoals bol.com,
            Coolblue, Amazon en Action. Het retourbeleid van de winkel waar je
            het product koopt is van toepassing.
          </p>

          <h2>Retourbeleid per winkel</h2>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginTop: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {stores.map((store) => (
              <div
                key={store.name}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  padding: "1rem 1.25rem",
                  background: "#f8fafc",
                }}
              >
                <h3 style={{ marginBottom: "0.6rem" }}>{store.name}</h3>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.8 }}>
                  <li>
                    <strong>Retourtermijn:</strong> {store.termijn}
                  </li>
                  <li>
                    <strong>Retourkosten:</strong> {store.kosten}
                  </li>
                  <li>
                    <strong>Methode:</strong> {store.methode}
                  </li>
                  <li>
                    <strong>Omruilen:</strong> {store.omruilen}
                  </li>
                  <li>
                    <strong>Meer info:</strong>{" "}
                    <a
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {store.urlLabel}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <h2>Defecte producten</h2>
          <p>
            Heb je een defect product ontvangen? Neem dan direct contact op met
            de winkel waar je het hebt gekocht. Bij defecten geldt de wettelijke
            garantie van 2 jaar. De winkel is verplicht het product te
            repareren, vervangen of het aankoopbedrag terug te storten.
          </p>

          <h2>Herroepingsrecht</h2>
          <p>
            Als consument heb je op grond van de Europese wet het recht om een
            online aankoop binnen 14 dagen zonder opgave van reden te annuleren
            (herroepingsrecht). Alle winkels waarnaar wij verwijzen respecteren
            dit recht en bieden zelfs een langere bedenktijd van 30 dagen.
          </p>

          <h2>Vragen?</h2>
          <p>
            Heb je vragen over een retour? Neem dan contact op via onze{" "}
            <Link href="/contact">contactpagina</Link> of neem rechtstreeks
            contact op met de winkel waar je het product hebt besteld.
          </p>

          <p className="muted small" style={{ marginTop: "2rem" }}>
            Laatste update: april 2026
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
