"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { services } from "@/lib/services";

const DURATION = 6500;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = services.length;
  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Our services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {services.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.slug}
            className={`slide ${active ? "is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={!active}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="slide-img" src={s.image} alt="" loading={i === 0 ? "eager" : "lazy"} />
            <div className="slide-shade" />
            <div className="wrap slide-copy">
              <span className="slide-tag">{s.title}</span>
              <h1>{s.headline}</h1>
              <p>{s.short}</p>
              <div className="slide-actions">
                <Link href={`/services/${s.slug}`} className="btn btn-white" tabIndex={active ? 0 : -1}>Explore {s.title}</Link>
                <Link href="/contact" className="btn btn-outline" tabIndex={active ? 0 : -1}>Send inquiry</Link>
              </div>
            </div>
          </div>
        );
      })}

      <div className="wrap hero-controls">
        <ol className="hero-bars" aria-label="Choose slide">
          {services.map((s, i) => (
            <li key={s.slug}>
              <button
                className={`bar ${i === index ? "is-active" : ""} ${paused ? "is-paused" : ""}`}
                onClick={() => go(i)}
                aria-label={`Show ${s.title}`}
                aria-current={i === index}
              >
                <span />
              </button>
            </li>
          ))}
        </ol>
        <div className="hero-arrows">
          <button onClick={() => go(index - 1)} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button onClick={() => go(index + 1)} aria-label="Next slide">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}