import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <div className="logo-wrapper">
          <Link href="/" className="logo-link">
            <img src="/logo.png" alt="SlimHuisWonen logo" className="logo" />
            <span className="site-title">SlimHuisWonen.nl</span>
          </Link>
        </div>

        <nav className="main-nav">
          <a href="#over">Over</a>
          <a href="#categorieen">Categorieën</a>
          <a href="#aanraders">Aanraders</a>
          <a href="#blog">Tips &amp; uitleg</a>
          <a href="#contact">Contact</a>
          <Link href="/producten" className="nav-highlight">
            Producten
          </Link>
        </nav>
      </div>
    </header>
  );
}
