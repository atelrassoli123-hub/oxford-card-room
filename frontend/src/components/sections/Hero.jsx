import React from "react";
import { ArrowDown } from "lucide-react";

const SPECS = [
  { label: "Format", value: "No-Limit Hold'em" },
  { label: "Term", value: "Michaelmas 2027" },
  { label: "Tables", value: "3 Levels" },
  { label: "Sponsor", value: "Jump Trading" },
];

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#080C14] overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(122,28,40,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(200,166,98,0.06),transparent_55%)]" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain opacity-20" />

      {/* Top bar */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-32 flex items-center justify-between">
        <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#F5EFDE]/30">
          University of Oxford
        </p>
        <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#F5EFDE]/30">
          Est. Michaelmas 2027
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 flex flex-col justify-center flex-1 py-12">
        <div className="reveal">
          <p className="font-body text-[11px] uppercase tracking-[0.6em] text-[#C8A662] mb-8">
            :The Oxford Card Room
          </p>

          <h1
            data-testid="hero-title"
            className="font-display font-bold text-[#F5EFDE] leading-[0.9] tracking-tight mb-8"
            style={{ fontSize: "clamp(64px, 12vw, 180px)" }}
          >
            Play<br />
            <span className="italic font-normal text-[#C8A662]">Seriously.</span>
          </h1>

          <p
            data-testid="hero-tagline"
            className="font-body text-[#F5EFDE]/50 text-base md:text-lg max-w-md leading-relaxed mb-12 tracking-wide"
          >
            Oxford's poker society — three tables, one season,
            every level welcome.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#events"
              data-testid="hero-cta-events"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-[#C8A662] hover:bg-[#b89554] text-[#080C14] font-body text-[11px] uppercase tracking-[0.35em] transition-all duration-300 font-bold"
            >
              View Events
              <span className="inline-block w-4 h-px bg-current group-hover:w-8 transition-all duration-300" />
            </a>
            <a
              href="#overview"
              data-testid="hero-cta-learn-more"
              className="inline-flex items-center gap-4 px-8 py-4 border border-[#F5EFDE]/15 hover:border-[#C8A662]/50 text-[#F5EFDE]/60 hover:text-[#C8A662] font-body text-[11px] uppercase tracking-[0.35em] transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Specs bar — SHAGA inspired */}
      <div className="relative z-10 border-t border-[#F5EFDE]/8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#F5EFDE]/8">
            {SPECS.map((s) => (
              <div key={s.label} className="px-6 py-6 first:pl-0">
                <p className="font-body text-[9px] uppercase tracking-[0.45em] text-[#F5EFDE]/30 mb-2">
                  :{s.label}
                </p>
                <p className="font-display text-[#F5EFDE]/80 text-base md:text-lg font-bold tracking-tight">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#overview"
        data-testid="hero-scroll-indicator"
        className="absolute right-8 bottom-8 z-10 flex flex-col items-center gap-3 text-[#F5EFDE]/30 hover:text-[#C8A662] transition-colors"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="font-body text-[9px] uppercase tracking-[0.45em]">Scroll</span>
        <ArrowDown size={14} strokeWidth={1} className="rotate-0 mt-2 animate-bounce" style={{ writingMode: "horizontal-tb" }} />
      </a>
    </section>
  );
}
