"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Download, GraduationCap, Code, Award, Trophy, ArrowUpRight, FolderGit2 } from "lucide-react";

export default function ResumePage() {
  const { personal, education, skills, certifications, achievements, projects } = portfolioData;

  const handleDownload = () => {
    window.print();
  };

  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 min-h-screen relative z-20 text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Glass Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-[40px] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-1 block">
              Curriculum Vitae
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">Resume.</h1>
            <h2 className="text-xl md:text-2xl text-neutral-200 font-medium mb-3">
              {personal.name}
            </h2>
            <p className="text-neutral-400 font-light max-w-xl text-sm leading-relaxed">
              {personal.role} pursuing B.Tech in Computer Science Engineering at VIT Bhopal University.
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="self-start md:self-center inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm transition-all hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.15)] shrink-0"
          >
            <Download className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>

        {/* Education */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Education</h3>
          </div>

          <div className="space-y-8">
            {education.map((item, idx) => (
              <div key={idx} className="border-l-2 border-indigo-400/40 pl-6 ml-2 space-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <h4 className="text-xl font-semibold text-white">{item.institution}</h4>
                  <span className="text-neutral-400 text-xs font-mono">{item.period}</span>
                </div>
                <div className="text-indigo-300 text-sm font-medium">
                  {item.degree} • <span className="text-neutral-300">{item.location}</span>
                </div>
                <div className="text-neutral-400 text-xs font-medium pt-1">
                  {item.specialization} • <span className="text-indigo-400 font-semibold">{item.gpa}</span>
                </div>
                <ul className="list-disc list-inside text-neutral-300 text-sm space-y-1.5 pt-3 font-light">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Code className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section in Resume */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <FolderGit2 className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Key Projects</h3>
          </div>

          <div className="space-y-8">
            {projects.map((proj) => (
              <div key={proj.id} className="border-l-2 border-cyan-400/30 pl-6 ml-2 space-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <h4 className="text-lg font-semibold text-white">{proj.title}</h4>
                  <span className="text-neutral-500 text-xs font-mono">{proj.period}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {proj.bullets && (
                  <ul className="list-disc list-inside text-neutral-300 text-xs md:text-sm space-y-1.5 pt-2 font-light">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all flex items-start justify-between"
              >
                <div>
                  <h4 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="text-neutral-400 text-xs mt-1">
                    {cert.issuer} • <span className="font-mono text-emerald-400/80">{cert.date}</span>
                  </div>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-neutral-500 hover:text-emerald-400 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Leadership */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Achievements & Leadership</h3>
          </div>

          <div className="space-y-4">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-neutral-300 text-sm leading-relaxed font-light flex items-start gap-4"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400/80 mt-2 shrink-0" />
                <span>{ach}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
