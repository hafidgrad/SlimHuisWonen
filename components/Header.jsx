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
              <Link href="/aanraders/beste-slimme-verlichting">Verlichting</Link>
              <Link href="/aanraders/beste-smart-home-hub">Hubs</Link>
              <Link href="/aanraders/beste-slimme-bewegingssensor">Sensoren</Link>
              <Link href="/aanraders/beste-slimme-camera">Beveiliging</Link>
              <Link href="/aanraders/beste-slimme-deurbel">Deurbellen</Link>
              <Link href="/aanraders/beste-slimme-stekkers-2026">Slimme stekkers</Link>
              <Link href="/aanraders/beste-robotstofzuigers-2026">Robotstofzuigers</Link>
            </div>
          </div>

          <Link href="/tips">Tips & uitleg</Link>
          <Link href="/how-to">How To</Link>
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
