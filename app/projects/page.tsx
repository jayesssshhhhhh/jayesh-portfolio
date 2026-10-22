"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github, ArrowRight, Calendar } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Machine Learning", "Web Application", "Systems & Tools"];

  const filteredProjects =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section className="py-28 px-6 md:px-16 lg:px-24 min-h-screen relative z-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-2 block">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Selected Work</h1>
            <p className="text-neutral-400 text-sm mt-2 max-w-lg font-light">
              Full-stack web applications, AI-driven adaptive platforms, and software engineering systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  filter === cat
                    ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col justify-between"
            >
              <div>
                {/* 4:3 Image Container */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-black/40 relative border-b border-white/10 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-lg"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-black/80 border border-white/20 text-white hover:scale-110 transition-transform shadow-lg"
                          aria-label="Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-500" />
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-4 font-light">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  {project.bullets && project.bullets.length > 0 && (
                    <ul className="space-y-1.5 mb-6 text-xs text-neutral-400 font-light list-disc list-inside">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Banner */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Interested in collaborating?
            </h3>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto font-light">
              I am open to software developer roles, AI/MERN opportunities, and creative technical projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-base transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Let&apos;s Connect
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
