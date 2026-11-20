import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { IMG } from "@/lib/services";

export const metadata: Metadata = { title: "Contact us" };

export default async function Contact({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return (
    <>
      <PageHero
        title="Contact us"
        lede="Describe your project and the right division will get back to you."
        image={IMG.contact}
      />
      <section className="section">
        <div className="wrap contact">
          <div>
            <p className="eyebrow">Send an inquiry</p>
            <h2>Tell us what you need built, repaired or supplied</h2>
            <p className="text">Include quantities, materials, standards and timing if you have them. A short description is enough to start.</p>
            <ul className="checks">
              <li>Skids, tanks and process equipment</li>
              <li>Weld overlay and structural steel</li>
              <li>On-site plant and maintenance work</li>
            </ul>
          </div>
          <ContactForm defaultService={service ?? ""} />
        </div>
      </section>
    </>
  );
}