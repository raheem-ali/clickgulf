import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link href={`/services/${s.slug}`} className="card">
      <span className="card-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={s.image} alt={s.imageAlt} loading="lazy" />
      </span>
      <span className="card-body">
        <strong>{s.title}</strong>
        <span>{s.short}</span>
        <span className="card-link">
          View service
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </span>
      </span>
    </Link>
  );
}