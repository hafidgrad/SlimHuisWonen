"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger-btn"
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav
        className={`mobile-nav${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <Link href="/over">Over</Link>
        <Link href="/#categorieen">Categorieën</Link>
        <Link href="/aanraders">Koopgidsen</Link>
        <Link href="/aanraders/beste-slimme-stekkers-2026" style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", opacity: 0.85 }}>↳ Slimme stekkers</Link>
        <Link href="/aanraders/beste-robotstofzuigers-2026" style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", opacity: 0.85 }}>↳ Robotstofzuigers</Link>
        <Link href="/tips">Tips & uitleg</Link>
        <Link href="/how-to">How To</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/producten" className="nav-highlight">Producten</Link>
      </nav>
    </>
  );
}
