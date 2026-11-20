import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-main", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Clicgulf | Skids, tanks, weld overlay and steel", template: "%s | Clicgulf" },
  description:
    "Clicgulf delivers skids, storage tanks, weld overlay, process equipment, structural steel and plant maintenance for the petrochemical, oil, gas and utilities sectors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}