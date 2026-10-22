"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WorkCTA() {
  return (
    <section className="py-32 flex flex-col items-center justify-center text-center px-6 relative z-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white">
        Ready to see my work?
      </h2>
      <p className="text-xl text-neutral-400 mb-10 max-w-2xl font-light">
        Discover my latest case studies, intelligent models, and digital experiences.
      </p>
      <Link
        href="/projects"
        className="relative group overflow-hidden rounded-full bg-white text-black px-10 py-5 font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.12)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
      >
        <span className="relative z-10 flex items-center gap-3">
          Continue to Projects
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
        </span>
      </Link>
    </section>
  );
}
