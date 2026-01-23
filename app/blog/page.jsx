import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Blog – SlimHuisWonen.nl",
  description:
    "Smart home blog met handige uitleg, vergelijkingen en koopgidsen over slimme verlichting, hubs, Zigbee en meer.",
  alternates: {
    canonical: "https://slimhuiswonen.nl/blog",
  },
};

export default function BlogOverviewPage() {
  // 👉 Later kunnen we dit dynamisch maken, maar nu eerst stabiel en simpel
  const posts = [
    {
      title: "Aqara vs Tapo: wat past bij jou?",
      href: "/blog/aqara-vs-tapo",
      description:
        "Vergelijk Aqara en TP-Link Tapo: verschillen, voordelen en wat het beste past bij jouw smart home.",
    },
    {
      title: "Beste slimme stekkers (koopgids)",
      href: "/blog/beste-slimme-stekkers",
      description:
        "Welke slimme stekker moet je kiezen? Dit zijn de beste opties + waar je op moet letten.",
    },
    {
      title: "Wat is Zigbee?",
      href: "/blog/wat-is-zigbee",
      description:
        "Uitleg over Zigbee: wat het is, hoe het werkt en waarom het vaak beter is dan wifi voor smart home.",
    },
  ];

  return (
    <>
      <Header />

      <main className="section">
        <div className="container article">
          <h1>Blog</h1>
          <p className="section-intro">
            Hier delen we handige uitleg, vergelijkingen en koopgidsen over smart
            home. Praktisch, duidelijk en zonder marketingpraat.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
            {posts.map((post) => (
              <article
                key={post.href}
                style={{
                  padding: "1.25rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                }}
              >
                <h2 style={{ marginBottom: "0.35rem" }}>
                  <Link href={post.href}>{post.title}</Link>
                </h2>
                <p className="muted" style={{ margin: 0 }}>
                  {post.description}
                </p>

                <p style={{ marginTop: "0.75rem" }}>
                  <Link href={post.href}>Lees artikel →</Link>
                </p>
              </article>
            ))}
          </div>

          <hr style={{ marginTop: "2rem" }} />

          <p className="muted small">
            Tip: wil je starten met smart home?{" "}
            <Link href="/tips/beginnen-met-smart-home">
              Beginnen met smart home in 5 stappen
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
