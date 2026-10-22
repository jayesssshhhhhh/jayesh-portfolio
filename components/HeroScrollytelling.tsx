"use client";

import React, { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ChevronDown } from "lucide-react";

export function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);

  // Monitor scroll progress across the 450vh container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const p = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic 3D Geometric Torus / Particle Wireframe rendered on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate 3D Torus Knot Points
    const numPoints = 850;
    const points: { x: number; y: number; z: number; origZ: number; u: number; v: number }[] = [];
    for (let i = 0; i < numPoints; i++) {
      const u = (i / numPoints) * Math.PI * 4;
      const v = (i / numPoints) * Math.PI * 8;
      points.push({ x: 0, y: 0, z: 0, origZ: 0, u, v });
    }

    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const scale = Math.min(width, height) * 0.38;

      // Scroll influences rotation angles & camera zoom
      const angleX = time * 0.3 + progress * Math.PI * 2.2;
      const angleY = time * 0.45 + progress * Math.PI * 3.5;
      const angleZ = time * 0.2 + progress * Math.PI;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      // Render 3D geometric ribbon/torus knot
      ctx.lineWidth = 1.2;

      for (let i = 0; i < numPoints; i++) {
        const p = points[i];
        // Torus knot equations (p=2, q=3)
        const r = 0.8 + 0.35 * Math.sin(p.v + time + progress * 8);
        const x0 = r * Math.cos(p.u) * scale;
        const y0 = r * Math.sin(p.u) * scale;
        const z0 = 0.5 * Math.sin(p.u * 3) * scale;

        // 3D rotations
        // Rotate Y
        const x1 = x0 * cosY + z0 * sinY;
        const y1 = y0;
        const z1 = -x0 * sinY + z0 * cosY;

        // Rotate X
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Rotate Z
        const x3 = x2 * cosZ - y2 * sinZ;
        const y3 = x2 * sinZ + y2 * cosZ;
        const z3 = z2;

        // Perspective projection
        const fov = 700;
        const f = fov / (fov + z3 + 300);
        const screenX = centerX + x3 * f;
        const screenY = centerY + y3 * f;

        // Color and alpha based on depth and scroll progress
        const depthAlpha = Math.max(0.08, Math.min(0.85, (z3 + scale) / (scale * 2)));
        const pointSize = Math.max(1, f * 2.5);

        // Dynamic cyber glow
        const rCol = Math.floor(180 + 75 * Math.sin(time + i * 0.05));
        const gCol = Math.floor(200 + 55 * Math.cos(time + i * 0.05));
        const bCol = 255;

        ctx.fillStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${depthAlpha * 0.75})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, pointSize, 0, Math.PI * 2);
        ctx.fill();

        // Connect near neighbors with faint constellation lines
        if (i % 2 === 0 && i < numPoints - 1) {
          const nextP = points[i + 1];
          const nextR = 0.8 + 0.35 * Math.sin(nextP.v + time + progress * 8);
          const nx0 = nextR * Math.cos(nextP.u) * scale;
          const ny0 = nextR * Math.sin(nextP.u) * scale;
          const nz0 = 0.5 * Math.sin(nextP.u * 3) * scale;

          const nx1 = nx0 * cosY + nz0 * sinY;
          const nz1 = -nx0 * sinY + nz0 * cosY;
          const nx2 = nx1;
          const ny2 = ny0 * cosX - nz1 * sinX;
          const nz2 = ny0 * sinX + nz1 * cosX;
          const nx3 = nx2 * cosZ - ny2 * sinZ;
          const ny3 = nx2 * sinZ + ny2 * cosZ;
          const nf = fov / (fov + nz2 + 300);

          ctx.strokeStyle = `rgba(255, 255, 255, ${depthAlpha * 0.15})`;
          ctx.beginPath();
          ctx.moveTo(screenX, screenY);
          ctx.lineTo(centerX + nx3 * nf, centerY + ny3 * nf);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [progress]);

  // Phase opacity & transform helper
  // Phase 1: 0.00 to 0.28
  const p1Opacity = progress < 0.28 ? Math.max(0, 1 - progress / 0.24) : 0;
  const p1Translate = progress * -80;

  // Phase 2: 0.32 to 0.62 (peaks around 0.47)
  let p2Opacity = 0;
  let p2Translate = 50;
  if (progress >= 0.28 && progress <= 0.65) {
    if (progress < 0.44) {
      p2Opacity = (progress - 0.28) / 0.14;
      p2Translate = 50 * (1 - p2Opacity);
    } else {
      p2Opacity = Math.max(0, 1 - (progress - 0.48) / 0.15);
      p2Translate = -50 * (1 - p2Opacity);
    }
  }

  // Phase 3: 0.65 to 1.00 (peaks around 0.82)
  let p3Opacity = 0;
  let p3Translate = 50;
  if (progress >= 0.65) {
    if (progress < 0.82) {
      p3Opacity = (progress - 0.65) / 0.15;
      p3Translate = 50 * (1 - p3Opacity);
    } else {
      p3Opacity = Math.max(0, 1 - (progress - 0.86) / 0.14);
      p3Translate = -50 * (1 - p3Opacity);
    }
  }

  return (
    <div ref={containerRef} id="home" className="relative h-[450vh] bg-[#121212]">
      {/* Sticky Fullscreen Scrollytelling Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {/* Interactive 3D Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full scale-[1.08] origin-center pointer-events-none"
        />

        {/* Ambient bottom-right blur fade */}
        <div className="absolute -bottom-4 -right-4 w-72 h-32 bg-[#121212] blur-[40px] z-10 pointer-events-none" />

        {/* Scrollytelling Text Layers */}
        <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-center">
          {/* Phase 1: Main Hero Welcome */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-150 ease-out"
            style={{
              opacity: p1Opacity,
              transform: `translateY(${p1Translate}px)`,
              pointerEvents: p1Opacity > 0.5 ? "auto" : "none",
            }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest text-neutral-400 uppercase mb-6">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400">
              {portfolioData.personal.name.toUpperCase()} 🧑‍💻
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-xl">
              {portfolioData.personal.tagline}
            </p>
          </div>

          {/* Phase 2: Left-aligned Mission Statement */}
          <div
            className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:pl-28 lg:pl-36 transition-all duration-150 ease-out"
            style={{
              opacity: p2Opacity,
              transform: `translateY(${p2Translate}px)`,
              pointerEvents: p2Opacity > 0.5 ? "auto" : "none",
            }}
          >
            <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-3">
              Vision & Focus
            </span>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-2xl drop-shadow-xl leading-tight">
              {portfolioData.personal.heroHeadline1}
            </h2>
          </div>

          {/* Phase 3: Right-aligned Value Proposition */}
          <div
            className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:pr-28 lg:pr-36 transition-all duration-150 ease-out"
            style={{
              opacity: p3Opacity,
              transform: `translateY(${p3Translate}px)`,
              pointerEvents: p3Opacity > 0.5 ? "auto" : "none",
            }}
          >
            <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-3">
              Core Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-2xl drop-shadow-xl leading-tight">
              {portfolioData.personal.heroHeadline2}
            </h2>
          </div>
        </div>

        {/* Scroll Helper Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-500 ${
            progress > 0.08 ? "opacity-0" : "opacity-75"
          }`}
        >
          <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-mono">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-neutral-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
