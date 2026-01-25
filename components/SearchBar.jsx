"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

export default function SearchBar({ items, placeholder = "Zoek op SlimHuisWonen…" }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const fuse = useMemo(() => {
    return new Fuse(items || [], {
      keys: [
        { name: "title", weight: 0.75 },
        { name: "description", weight: 0.25 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, [items]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q || q.length < 2) return [];
    return fuse.search(q).slice(0, 8).map((r) => r.item);
  }, [query, fuse]);

  // Sluit dropdown bij klik buiten component
  useEffect(() => {
    function onClickOutside(e) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="shw-search">
      <input
        className="shw-search__input"
        type="search"
        value={query}
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        aria-label="Zoeken"
      />

      {open && results.length > 0 && (
        <div className="shw-search__dropdown" role="listbox" aria-label="Zoekresultaten">
          {results.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="shw-search__item"
              onClick={() => setOpen(false)}
            >
              <div className="shw-search__title">{item.title}</div>
              <div className="shw-search__meta">
                <span className="shw-search__type">{item.type}</span>
                {item.description ? (
                  <span className="shw-search__desc">• {item.description}</span>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
