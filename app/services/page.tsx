import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import { px, services } from "@/lib/services";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageHero
        title="Products & services"
        lede="Six divisions covering skids, tanks, weld overlay, process equipment, structural steel and plant maintenance."
        image={px(30556821)}
      />
      <section className="section">
        <div className="wrap grid-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}