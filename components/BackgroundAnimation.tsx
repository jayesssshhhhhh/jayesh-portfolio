"use client";

import React from "react";

export function BackgroundAnimation() {
  // Generate concentric wave offsets matching the haar6 visual style
  const pathOffsets = Array.from({ length: 18 }, (_, i) => i * 6);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[-1] pointer-events-none flex items-center justify-center overflow-hidden bg-[#121212]"
    >
      {/* Central radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Pulsing generative ribbon mesh */}
      <svg
        viewBox="0 0 1200 1200"
        className="w-full h-full object-contain origin-center animate-[pulse_15s_infinite_ease-in-out] scale-125 lg:scale-150"
      >
        <g fill="none" stroke="#ffffff" strokeWidth="1.5" className="opacity-[0.06]">
          {pathOffsets.map((offset, idx) => (
            <path
              key={idx}
              d={`
                M 0 ${700 + offset} 
                C ${300} ${-300 + offset}, ${1000} ${-300 + offset}, ${1100} ${600 + offset} 
                C ${1200} ${1200 + offset}, ${300} ${1100 + offset}, ${400} ${500 + offset} 
                C ${450} ${150 + offset}, ${850} ${150 + offset}, ${800} ${600 + offset} 
                C ${750} ${950 + offset}, ${550} ${850 + offset}, ${600} ${600 + offset}
                C ${620} ${450 + offset}, ${720} ${500 + offset}, ${700} ${600 + offset}
              `}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
