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
        </p>
      </div>
    </footer>
  );
}
