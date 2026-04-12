import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          © {year} SlimHuisWonen.nl – Slimme spullen voor een slimmer huis.
        </p>

        <p className="muted small">
          SlimHuisWonen.nl is deelnemer aan het Amazon Partnerprogramma.
          Als Amazon Associate verdienen wij aan in aanmerking komende aankopen.
          Voor jou verandert de prijs niet.
        </p>

        <nav className="footer-nav" aria-label="Juridisch">
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/disclaimer">Disclaimer</Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookies">Cookies</Link>
          <span aria-hidden="true">·</span>
          <Link href="/sitemap.xml">Sitemap</Link>
          <span aria-hidden="true">·</span>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
