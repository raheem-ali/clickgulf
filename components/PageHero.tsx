import Link from "next/link";

export default function PageHero({
  title,
  lede,
  image,
  crumbs = [],
}: {
  title: string;
  lede?: string;
  image: string;
  crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="page-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="page-hero-img" />
      <div className="page-hero-shade" />
      <div className="wrap page-hero-copy">
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <Link key={c.href} href={c.href}>{c.label}</Link>
          ))}
          <span aria-current="page">{title}</span>
        </nav>
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
      </div>
    </section>
  );
}