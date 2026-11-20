import Link from "next/link";

export default function CtaBand({
  title = "Have a project in mind?",
  text = "Send us the scope and the right division will get back to you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-wrap">
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link href="/contact" className="btn btn-white">Send inquiry</Link>
        </div>
      </div>
    </section>
  );
}