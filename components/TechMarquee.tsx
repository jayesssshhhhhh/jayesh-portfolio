"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function TechMarquee() {
  const items = portfolioData.technologies;
  // Duplicate for seamless infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-20 bg-[#121212] overflow-hidden relative border-t border-white/5">
      {/* Left gradient fade mask */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-10 pointer-events-none" />

      {/* Right gradient fade mask */}
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#121212] via-[#121212]/80 to-transparent z-10 pointer-events-none" />

      {/* Running ticker track */}
      <div className="flex w-full select-none">
        <div className="flex flex-nowrap items-center gap-10 md:gap-16 animate-marquee">
          {repeatedItems.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center justify-center whitespace-nowrap text-xl md:text-3xl font-bold text-neutral-600 hover:text-neutral-200 uppercase tracking-widest transition-colors duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
