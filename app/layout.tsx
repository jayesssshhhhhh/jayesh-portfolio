import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | Portfolio`,
  description: `${portfolioData.personal.role} - ${portfolioData.personal.tagline}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-transparent text-white selection:bg-white/20 selection:text-white">
        {/* Animated fixed wireframe ribbon background */}
        <BackgroundAnimation />

        {/* Global floating glass navigation */}
        <Navbar />

        {/* Main page content */}
        <div className="flex-1 relative z-10">{children}</div>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
