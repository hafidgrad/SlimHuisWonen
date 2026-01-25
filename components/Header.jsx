import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
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

          {/* ✅ Scroll naar categorieën sectie op homepage */}
          <Link href="/#categorieen">Categorieën</Link>

          <Link href="/aanraders">Aanraders</Link>
          <Link href="/tips">Tips & uitleg</Link>

          {/* ✅ Nieuw: Blog zichtbaar maken */}
          <Link href="/blog">Blog</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/producten" className="nav-highlight">
            Producten
          </Link>
        </nav>
      </div>
    </header>
  );
}
