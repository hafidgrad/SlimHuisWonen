import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { howto } from "@/data/howto";
import { getAllTips } from "@/data/tips";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Wifi & Netwerk | SlimHuisWonen",
  description:
    "Alles over wifi optimalisatie voor je smart home. Bereik verbeteren, 2.4GHz vs 5GHz en stabiele verbindingen.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/topic/wifi-netwerk",
  },
};

export default function WifiHub() {
  const wifiHowTo = howto.filter((item) =>
    item.categories?.includes("wifi")
  );

  const wifiTips = getAllTips().filter((tip) =>
    tip.categories?.includes("wifi")
  );

  const wifiBlogs = blogPosts.filter((blog) =>
    blog.categories?.includes("wifi")
  );

  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          
          <h1>Wifi & Netwerk</h1>

<p className="section-intro">
  Een stabiel wifi-netwerk is de basis van elk smart home. Op deze pagina vind je
  alle handleidingen, tips en uitleg om je wifi sneller, stabieler en betrouwbaarder te maken.
</p>

<p>
  Veel problemen met slimme lampen, stekkers, camera’s en deurbellen komen niet door
  het apparaat zelf, maar door het netwerk. Denk aan apparaten die offline gaan, traag reageren
  of niet willen koppelen. Met een paar slimme aanpassingen voorkom je frustratie én uitval.
</p>

<p>
  In dit kenniscluster leggen we uit hoe je je netwerk optimaliseert voor smart home gebruik.
  We behandelen onder andere het verschil tussen 2.4GHz en 5GHz, het verbeteren van wifi-bereik,
  en wanneer een mesh-systeem een goed idee is.
</p>

<ul>
  <li>2.4GHz vs 5GHz: wat is beter voor smart home?</li>
  <li>Wifi bereik verbeteren zonder nieuwe router</li>
  <li>Smart home apparaat koppelt niet: dit kun je doen</li>
  <li>Wanneer is mesh of een access point nodig?</li>
</ul>

<p>
  Wil je meer stabiliteit en minder afhankelijk zijn van losse apps? Bekijk dan ook onze koopgids
  voor de{" "}
  <Link href="/aanraders/beste-smart-home-hub">
    beste smart home hubs
  </Link>
  . Een hub kan je smart home vaak stabieler maken, vooral in combinatie met Zigbee of Matter.
</p>

          {wifiHowTo.length > 0 && (
            <>
              <h2>Handleidingen</h2>
              <div className="grid-3">
                {wifiHowTo.map((item) => (
                  <Link key={item.slug} href={`/how-to/${item.slug}`} className="card">
                    <Image src={item.image} alt={item.title} width={400} height={240} />
                    <h3>{item.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

          {wifiTips.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Tips & Uitleg</h2>
              <div className="grid-3">
                {wifiTips.map((tip) => (
                  <Link key={tip.slug} href={`/tips/${tip.slug}`} className="card">
                    <Image src={tip.image} alt={tip.title} width={400} height={240} />
                    <h3>{tip.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}

          {wifiBlogs.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Artikelen</h2>
              <div className="grid-3">
                {wifiBlogs.map((blog) => (
                  <Link key={blog.slug} href={`/blog/${blog.slug}`} className="card">
                    <Image src={blog.image} alt={blog.title} width={400} height={240} />
                    <h3>{blog.title}</h3>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}