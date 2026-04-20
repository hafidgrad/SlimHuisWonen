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
          <Link href="/#categorieen">Categorieën</Link>
          <Link href="/aanraders">Koopgidsen</Link>
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
