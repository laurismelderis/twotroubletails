"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Galvenā navigācija" onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}>
        <button className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? "×" : "☰"}</span><span className="sr-only">Izvēlne</span>
        </button>
        <div className={`navigation-content${open ? " is-open" : ""}`} id="navigation-links">
          <div className="navigation-links">
            {[["/", "Sākums"], ["/pakalpojumi", "Pakalpojumi"], ["/kontakti", "Kontakti"]].map(([href, label]) => (
              <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </div>
          <Link className="button" href="/kontakti" onClick={() => setOpen(false)}>Sazinies ar mani</Link>
        </div>
      </nav>
    </header>
  );
}
