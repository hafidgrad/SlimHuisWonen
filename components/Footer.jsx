export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>&copy; {year} SlimHuisWonen.nl – Slimme spullen voor een slimmer huis.</p>
        <p className="muted">Sommige links zijn affiliate links. Jij betaalt niets extra.</p>
      </div>
    </footer>
  );
}<p className="affiliate-disclaimer">
  SlimHuisWonen.nl is deelnemer aan het Amazon Partnerprogramma.
  Als Amazon Associate verdienen wij aan in aanmerking komende aankopen.
</p>

