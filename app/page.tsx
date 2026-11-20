import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCard from "@/components/ServiceCard";
import { IMG, services } from "@/lib/services";

const stats = [
  { n: "6", t: "Service divisions", d: "Skids to structural steel" },
  { n: "4", t: "Sectors served", d: "Oil, gas, petrochemical, utilities" },
  { n: "NDT", t: "Testing services", d: "Inspection before delivery" },
  { n: "1", t: "Team, start to finish", d: "Design through delivery" },
];

const icons: Record<string, string> = {
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  tool: "M14.5 6.5a4 4 0 0 0 4.9 4.9l-8.4 8.4a2.1 2.1 0 0 1-3-3l8.4-8.4a4 4 0 0 0-1.9-1.9z",
  pin: "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  check: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12l3 3 5-6",
};

const why = [
  { i: "layers", t: "Six divisions, one contractor", d: "Skids, tanks, overlay, equipment, steel and site work from one company means fewer interfaces to manage." },
  { i: "shield", t: "Tested before it ships", d: "Non-destructive testing and inspection checks confirm the work before delivery." },
  { i: "clock", t: "Design to delivery", d: "Design, detailing, fabrication, surface treatment and delivery follow one plan." },
  { i: "tool", t: "Built to your specification", d: "We fabricate to your drawings and standards on every project." },
  { i: "pin", t: "Ready for site", d: "Skids and modules arrive pre-assembled, and our site teams handle assembly and erection." },
  { i: "check", t: "One clear route in", d: "Send your scope through one form and the right division replies." },
];

const steps = [
  { t: "Design and detailing", d: "Drawings and detailing are prepared before any steel is cut." },
  { t: "Fabrication", d: "Equipment is built to the agreed specification." },
  { t: "Surface treatment and testing", d: "Finishing and NDT checks confirm the work." },
  { t: "Supply and delivery", d: "Finished items are delivered ready to install." },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">About Clicgulf</p>
            <h2>Manufacturing strength with hands-on delivery</h2>
            <p className="text">
              Clicgulf is a manufacturing company with six integrated divisions, serving the petrochemical, oil, gas and utilities sectors.
            </p>
            <p className="text">
              Clients can buy design, fabrication, testing and delivery from one team, instead of coordinating several suppliers.
            </p>
            <Link href="/about" className="btn btn-blue">Learn more</Link>
          </div>
          <div className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.home} alt="Welder at work in a fabrication workshop" loading="lazy" />
          </div>
        </div>
        <div className="wrap stats">
          {stats.map((s) => (
            <div key={s.t} className="stat">
              <strong>{s.n}</strong>
              <span>{s.t}</span>
              <small>{s.d}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt" aria-labelledby="svc-h">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Products and services</p>
            <h2 id="svc-h">What we build and deliver</h2>
            <p className="text">Choose a division to see what we offer.</p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Why Clicgulf</p>
            <h2>Why clients choose one team for the whole job</h2>
          </div>
          <div className="grid-3">
            {why.map((w) => (
              <div key={w.t} className="tile">
                <span className="ico">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={icons[w.i]} />
                  </svg>
                </span>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">How we work</p>
            <h2>From drawing to delivery</h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="step-n">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="pills" aria-label="Sectors we serve">
            <span>Petrochemical</span>
            <span>Oil</span>
            <span>Gas</span>
            <span>Utilities</span>
          </div>
        </div>
      </section>

      <CtaBand title="Planning a fabrication or site project?" text="Send us the scope and we will respond with a plan." />
    </>
  );
}