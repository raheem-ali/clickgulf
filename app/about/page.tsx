import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { IMG, services } from "@/lib/services";

export const metadata: Metadata = { title: "About us" };

export default function About() {
  return (
    <>
      <PageHero
        title="About us"
        lede="A leading innovator of manufacturing solutions for the petrochemical, oil, gas and utilities sectors."
        image={IMG.about}
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Engineering strength with hands-on execution</h2>
            <p className="text">
              Clicgulf brings six integrated divisions together: skids, weld overlay and cladding, structural steel, storage tanks, process equipment, and plant and maintenance.
            </p>
            <p className="text">
              Together they let a client buy design, fabrication, testing and delivery from one company. Each division works to the client’s specification and to the standards of the industries we serve.
            </p>
            <p className="text">
              We offer a wide range of specialised products and services to companies in the petrochemical, oil, gas and utilities sectors.
            </p>
          </div>
          <div className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.home} alt="Welder working in a fabrication workshop" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Our divisions</p>
            <h2>Six divisions, one team</h2>
          </div>
          <ul className="list-links">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <strong>{s.title}</strong>
                  <span>{s.scope}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}