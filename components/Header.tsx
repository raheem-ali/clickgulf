"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/services";

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenu(false);
    setDrop(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDrop(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrop(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const is = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-row">
          <span>Manufacturing for oil, gas, petrochemical and utilities</span>
          <Link href="/contact">Request a quote</Link>
        </div>
      </div>

      <header className="header">
        <div className="wrap header-row">
          <Link href="/" className="wordmark" aria-label="Clicgulf home">
            <span>Clic</span>gulf
          </Link>

          <nav id="main-nav" className={`nav ${menu ? "is-open" : ""}`} aria-label="Main">
            <Link href="/" className={`nav-link ${is("/") ? "active" : ""}`}>Home</Link>
            <Link href="/about" className={`nav-link ${is("/about") ? "active" : ""}`}>About us</Link>

            <div
              className="nav-item"
              ref={dropRef}
              onMouseEnter={() => window.innerWidth > 900 && setDrop(true)}
              onMouseLeave={() => window.innerWidth > 900 && setDrop(false)}
            >
              <Link href="/services" className={`nav-link ${is("/services") ? "active" : ""}`}>Services</Link>
              <button
                type="button"
                className={`chev ${drop ? "open" : ""}`}
                aria-expanded={drop}
                aria-label="Show services menu"
                onClick={() => setDrop((v) => !v)}
              >
                <Chevron />
              </button>
              <div className={`dropdown ${drop ? "open" : ""}`}>
                <ul>
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`}>
                        <strong>{s.title}</strong>
                        <span>{s.scope}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="dropdown-all">View all services</Link>
              </div>
            </div>

            <Link href="/contact" className={`nav-link ${is("/contact") ? "active" : ""}`}>Contact us</Link>
            <Link href="/contact" className="btn btn-blue nav-cta-mobile">Send inquiry</Link>
          </nav>

          <Link href="/contact" className="btn btn-blue header-cta">Send inquiry</Link>

          <button className="menu-btn" aria-expanded={menu} aria-controls="main-nav" onClick={() => setMenu((v) => !v)}>
            <span className="sr-only">{menu ? "Close menu" : "Open menu"}</span>
            <span className="bars" aria-hidden="true" />
          </button>
        </div>
      </header>
    </>
  );
}