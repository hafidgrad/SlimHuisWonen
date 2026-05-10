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
        <Link href="/aanraders">Koopgidsen</Link>
        <Link href="/aanraders/beste-slimme-verlichting" style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", opacity: 0.85 }}>↳ Slimme verlichting</Link>
        <Link href="/blog/philips-hue-vs-ikea-tradfri" style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", opacity: 0.85 }}>↳ Philips Hue vs IKEA</Link>
        <Link href="/aanraders/beste-smart-home-hub" style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", opacity: 0.85 }}>↳ Smart home hubs</Link>
        <Link href="/aanraders/beste-slimme-thermostaat" style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", opacity: 0.85 }}>↳ Slimme thermostaat</Link>
        <Link href="/how-to">Installatie & uitleg</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/producten" className="nav-highlight">Producten</Link>
      </nav>
    </>
  );
}
