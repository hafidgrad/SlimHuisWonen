import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import MobileMenu from "@/components/MobileMenu";
import { getSearchItems } from "@/data/searchItems";

export default function Header() {
  const searchItems = getSearchItems();

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link href="/" className="logo-link">
          <Image
            src="/logo.png"
            alt="SlimHuisWonen logo"
            width={40}
            height={40}
            className="logo"
            priority
          />
          <span className="site-title">SlimHuisWonen.nl</span>
        </Link>

        {/* 🔍 Zoeken (desktop) */}
        <div className="nav-search">
          <SearchBar items={searchItems} placeholder="Zoek…" />
        </div>

        <nav className="main-nav">
          <Link href="/over">Over</Link>

          <div className="nav-dropdown-wrapper">
            <Link href="/aanraders">
              Koopgidsen <span className="nav-caret">▾</span>
            </Link>
            <div className="nav-dropdown">
              <Link href="/aanraders/beste-slimme-verlichting">Slimme verlichting</Link>
              <Link href="/vergelijking/philips-hue-vs-ikea-vs-innr">Hue vs IKEA vs Innr</Link>
              <Link href="/aanraders/slimme-verlichting-per-kamer">Verlichting per kamer</Link>
              <Link href="/aanraders/beste-slimme-stekkers">Slimme stekkers & dimmers</Link>
              <Link href="/aanraders/beste-smart-home-hub">Smart home hubs</Link>
              <Link href="/aanraders/beste-slimme-thermostaat">Slimme thermostaat</Link>
            </div>
          </div>

          <Link href="/how-to">Installatie & uitleg</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/producten" className="nav-highlight">
            Producten
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
