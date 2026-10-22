import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 text-center text-neutral-500 text-sm border-t border-white/5 bg-[#121212] relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {currentYear} By {portfolioData.personal.name}. All rights reserved.</p>
        <div className="flex items-center gap-6 text-neutral-400 text-xs">
          {portfolioData.personal.social.github && (
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
          {portfolioData.personal.social.linkedin && (
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          )}
          {portfolioData.personal.social.twitter && (
            <a
              href={portfolioData.personal.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter / X
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
