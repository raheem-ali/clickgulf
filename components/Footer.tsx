import Link from "next/link";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="wordmark wordmark-light"><span>Click</span>gulf</p>
          <p className="footer-note">Skids, storage tanks, weld overlay, process equipment, structural steel and plant maintenance.</p>
        </div>
        <nav aria-label="Quick links">
          <h2>Quick links</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </nav>
        <nav aria-label="Services">
          <h2>Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap footer-base">© {new Date().getFullYear()} Clickgulf. All rights reserved.</div>
    </footer>
  );
}