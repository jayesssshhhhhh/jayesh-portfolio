"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PROJECTS", href: "/projects" },
  { name: "RESUME", href: "/resume" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-black/20 backdrop-blur-md border-b border-white/5"
      }`}
    >
      {/* Brand Monogram */}
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-white z-50 relative group"
        >
          {portfolioData.personal.monogram}
          <span className="text-neutral-500 group-hover:text-white transition-colors">.</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-neutral-400">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition-colors duration-300 relative group py-1 ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center z-50 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col items-end justify-center gap-1.5">
            <span
              className={`bg-white h-0.5 rounded-full transition-all duration-300 ${
                isOpen ? "w-6 rotate-45 translate-y-2" : "w-full"
              }`}
            />
            <span
              className={`bg-white h-0.5 rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : "w-full"
              }`}
            />
            <span
              className={`bg-white h-0.5 rounded-full transition-all duration-300 ${
                isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-2/3"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-0 bg-[#121212]/95 backdrop-blur-2xl border-b border-white/10 pt-24 pb-8 px-6 flex flex-col gap-6 z-40 shadow-2xl"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium tracking-widest transition-colors ${
                      pathname === link.href ? "text-white font-semibold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
