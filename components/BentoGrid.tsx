"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Sparkles, Users, GitFork, Award, ArrowRight } from "lucide-react";

export function BentoGrid() {
  const { stats, personal } = portfolioData;

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 flex items-center relative overflow-hidden py-24 z-10">
      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-white drop-shadow-md">
          At a Glance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Generative AI & Web Apps (Span 2 cols) */}
          <div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] md:col-span-2 flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner backdrop-blur-md">
                <Sparkles className="w-7 h-7 text-indigo-300" />
              </div>
              <h4 className="text-3xl font-semibold text-white mb-4 tracking-tight">
                Generative AI & Modern Web Engineering
              </h4>
              <p className="text-neutral-300 text-lg leading-relaxed max-w-lg font-light">
                Developing intelligent adaptive learning systems and full-stack solutions utilizing Google Gemini API, FastAPI, React.js, and modern cloud technologies.
              </p>
            </div>
          </div>

          {/* Card 2: NSS Leadership & PR Lead (Span 1 col) */}
          <div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-1">Leadership & PR Lead</h4>
              <p className="text-neutral-400 font-light text-sm">
                NSS VIT Bhopal media & communications lead
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <div className="text-4xl font-bold text-white mb-1">{stats.leadershipRole}</div>
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-widest">
                Media Team Head (2023–2025)
              </div>
            </div>
          </div>

          {/* Card 3: Open Source / GitHub (Span 1 col) */}
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                <GitFork className="w-6 h-6 text-neutral-200" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-1">Open Source</h4>
              <p className="text-neutral-400 font-light text-sm mb-4">
                View projects and code repositories
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-neutral-300 text-xs font-bold tracking-widest">
              VISIT GITHUB{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Card 4: Education & Certifications (Span 2 cols) */}
          <Link
            href="/resume"
            className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] md:col-span-2 flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                  <Award className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">VIT Bhopal University</h4>
                <p className="text-neutral-300 font-light text-base md:text-lg mb-6 max-w-md">
                  B.Tech CSE with Specialization in Education Technology • Python Essentials & AI/ML Certified
                </p>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-widest">
                  VIEW FULL RESUME{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <div className="hidden md:flex w-24 h-24 rounded-full bg-emerald-500/5 border border-emerald-500/20 items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <ArrowRight className="w-8 h-8 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
