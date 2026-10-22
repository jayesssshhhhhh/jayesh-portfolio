import React from "react";
import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";
import { ArrowRight, GraduationCap, Award, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  const { personal, stats, education } = portfolioData;
  const edu = education[0];

  return (
    <section className="py-32 px-6 md:px-16 min-h-screen relative z-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Glass Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-white/[0.02] to-transparent opacity-70 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                Available for internships & software roles
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter text-white">
              About Me.
            </h1>

            {/* Bio paragraphs */}
            <div className="space-y-6 text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              <p>
                I am <span className="font-medium text-white">{personal.name}</span>, a passionate MERN Stack Developer and tech enthusiast driven by building dynamic, high-performance web applications and intelligent software solutions.
              </p>
              <p>
                Currently pursuing my Bachelor of Technology in Computer Science Engineering with a specialization in{" "}
                <span className="font-medium text-indigo-300">Education Technology</span> at{" "}
                <span className="font-medium text-white">{edu.institution}</span> (CGPA: 6.78 / 10.00).
              </p>
              <p>
                My technical foundation blends full-stack web engineering (<span className="text-neutral-200">React.js, FastAPI, Tailwind CSS, Python, C++</span>) with modern applied AI (<span className="text-neutral-200">Google Gemini API, Prompt Engineering, Generative AI</span>).
              </p>
              <p>
                Beyond code, I have served as the <span className="text-orange-300 font-medium">Social Media, Photography, PR & Outreach Lead</span> at NSS VIT Bhopal, leading media teams of 20+ members and orchestrating communications for campus-wide technical and cultural initiatives.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stats.projectsCompleted}</div>
                <div className="text-xs text-orange-400 uppercase tracking-widest font-medium">
                  Projects Built
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stats.cgpa}</div>
                <div className="text-xs text-indigo-400 uppercase tracking-widest font-medium">
                  VIT Bhopal CGPA
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">NSS Lead</div>
                <div className="text-xs text-emerald-400 uppercase tracking-widest font-medium">
                  PR & Outreach
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stats.coreTechnologies}</div>
                <div className="text-xs text-neutral-400 uppercase tracking-widest font-medium">
                  Tech Mastered
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                View Full Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
