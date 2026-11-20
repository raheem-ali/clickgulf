import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return { title: s?.title ?? "Service", description: s?.short };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={s.title}
        lede={s.short}
        image={s.image}
        crumbs={[{ href: "/services", label: "Services" }]}
      />

      <section className="section">
        <div className="wrap detail">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>{s.scope}</h2>
            <p className="text">{s.intro}</p>

            <div className="photo photo-wide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt={s.imageAlt} loading="lazy" />
            </div>

            <h3 className="sub">What we offer</h3>
            <ul className="checks">
              {s.offers.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>

          <aside className="side">
            <h3>Request a quote</h3>
            <p>Tell us about your {s.title.toLowerCase()} requirement and we will reply with next steps.</p>
            <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn btn-blue">Send inquiry</Link>
            <hr />
            <p className="side-label">Sectors</p>
            <p>Petrochemical, oil, gas and utilities</p>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">More services</p>
            <h2>Other divisions</h2>
          </div>
          <div className="grid-3">
            {others.map((o) => (
              <ServiceCard key={o.slug} s={o} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}