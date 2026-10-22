"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, Send, CheckCircle2, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission or integrate with Formspree / Resend / EmailJS
    setSubmitted(true);
  };

  return (
    <section className="py-32 px-6 md:px-16 min-h-screen relative z-20 flex flex-col items-center justify-center text-white">
      <div className="max-w-2xl text-center w-full">
        {/* Title */}
        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3 block">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">Let&apos;s Connect.</h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-10 font-light leading-relaxed">
          I&apos;m currently open to new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out and I&apos;ll get back to you as soon as possible.
        </p>

        {/* Quick Contact Pills */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 text-neutral-300">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3.5 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>{personal.email}</span>
          </a>

          {personal.phone && (
            <a
              href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3.5 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{personal.phone}</span>
            </a>
          )}
        </div>

        {/* Contact Form Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-2xl text-left mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
              <p className="text-neutral-400 max-w-sm mb-6 font-light">
                Thank you for reaching out. I will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, opportunity, or say hi..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm transition-all hover:scale-[1.02] shadow-[0_0_25px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400 text-sm font-medium">
          {personal.social.github && (
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {personal.social.linkedin && (
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          )}
          {personal.social.twitter && (
            <a
              href={personal.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter / X</span>
            </a>
          )}
          {personal.social.instagram && (
            <a
              href={personal.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
