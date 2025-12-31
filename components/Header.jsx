import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <import Link from href="/" className="logo-link">
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

        <nav className="main-nav">
          <import Link from href="/over">Over</Link>
          <import Link from href="/categorieen">Categorieën</Link>
          <import Link from href="/aanraders">Aanraders</Link>
          <import Link from="/tips">Tips & uitleg</Link>
          <import Link from="/contact">Contact</Link>
          <import Link from="/producten" className="nav-highlight">
            Producten
          </Link>
        </nav>
      </div>
    </header>
  );
}
