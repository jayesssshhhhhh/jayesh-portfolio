import { HeroScrollytelling } from "@/components/HeroScrollytelling";
import { TechMarquee } from "@/components/TechMarquee";
import { BentoGrid } from "@/components/BentoGrid";
import { WorkCTA } from "@/components/WorkCTA";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* 500vh Interactive Canvas Scrollytelling Section */}
      <HeroScrollytelling />

      {/* Infinite Technology Marquee Ribbon */}
      <TechMarquee />

      {/* Glass Bento Grid Showcase */}
      <BentoGrid />

      {/* Call To Action Section */}
      <WorkCTA />
    </main>
  );
}
