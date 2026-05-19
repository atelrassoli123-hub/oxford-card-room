import React, { useEffect, useRef, useState } from "react";

const SPECS = [
  { label: "Format", value: "No-Limit Hold'em" },
  { label: "Season", value: "Michaelmas 2027" },
  { label: "Tables",  value: "Three Levels" },
  { label: "Partner", value: "Jump Trading" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    // Tiny delay so first-paint is clean before animations begin
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#050816] overflow-hidden"
    >
      {/* ── Atmospheric background ───────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_70%,rgba(198,167,106,0.055),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_15%,rgba(90,50,140,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(198,167,106,0.04),transparent)]" />

      {/* ── Grain ────────────────────────────────────────── */}
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      {/* ── Decorative card suits — very faint ───────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span className="absolute top-[18%] right-[8%] font-display text-[160px] text-[#C6A76A]/[0.025] leading-none chip-toss-a">♠</span>
        <span className="absolute top-[55%] left-[4%]  font-display text-[120px] text-[#C6A76A]/[0.02]  leading-none chip-toss-b">♥</span>
        <span className="absolute bottom-[22%] right-[15%] font-display text-[90px] text-[#C6A76A]/[0.018] leading-none chip-toss-c">♦</span>
      </div>

      {/* ── Top eyebrow bar ──────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-14 pt-28 md:pt-32 flex items-center justify-between">
        <p
          className={`font-body text-[9px] uppercase tracking-[0.55em] text-[#F0EAD6]/25 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "800ms" }}
        >
          University of Oxford
        </p>
        <p
          className={`font-body text-[9px] uppercase tracking-[0.55em] text-[#F0EAD6]/25 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "900ms" }}
        >
          Est. Michaelmas 2027
        </p>
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-14 flex flex-col justify-center flex-1 py-12">

        {/* Label */}
        <div className="overflow-hidden mb-8">
          <p
            className={`font-body text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-[#C6A76A] ${loaded ? "mask-reveal delay-0" : "opacity-0"}`}
          >
            The Oxford Card Room
          </p>
        </div>

        {/* Main headline — staggered clip-path */}
        <div
          data-testid="hero-title"
          className="mb-8"
          style={{ fontSize: "clamp(66px, 13vw, 190px)", lineHeight: 0.88 }}
        >
          <div className="overflow-hidden">
            <h1
              className={`font-display font-bold text-[#F0EAD6] tracking-tight block ${loaded ? "mask-reveal delay-100" : "opacity-0"}`}
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Play
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className={`font-display font-normal italic text-[#C6A76A] tracking-tight block ${loaded ? "mask-reveal delay-300" : "opacity-0"}`}
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Seriously.
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mb-12">
          <p
            data-testid="hero-tagline"
            className={`font-body text-[#F0EAD6]/45 text-base md:text-lg max-w-[380px] leading-relaxed tracking-wide ${loaded ? "mask-reveal delay-500" : "opacity-0"}`}
          >
            Oxford's poker society — three tables, one season,<br className="hidden md:block" /> every level welcome.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 items-start transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "700ms" }}
        >
          <a
            href="#tables"
            data-testid="hero-cta-events"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-[#C6A76A] hover:bg-[#d4b87a] text-[#050816] font-body text-[10px] uppercase tracking-[0.4em] transition-all duration-300 font-semibold"
          >
            Discover the Society
            <span className="inline-block w-4 h-px bg-current group-hover:w-7 transition-all duration-300" />
          </a>
          <a
            href="#overview"
            data-testid="hero-cta-learn-more"
            className="inline-flex items-center gap-4 px-8 py-4 border border-[#F0EAD6]/12 hover:border-[#C6A76A]/45 text-[#F0EAD6]/50 hover:text-[#C6A76A] font-body text-[10px] uppercase tracking-[0.4em] transition-all duration-300"
          >
            Our Philosophy
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div
        className={`absolute right-8 md:right-12 bottom-32 z-10 flex flex-col items-center gap-3 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "1100ms" }}
      >
        <div
          ref={lineRef}
          className="w-px h-16 bg-[#C6A76A]/25 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[#C6A76A] scroll-line" />
        </div>
        <p
          className="font-body text-[8px] uppercase tracking-[0.5em] text-[#F0EAD6]/25"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </p>
      </div>

      {/* ── Specs bar ────────────────────────────────────── */}
      <div
        className={`relative z-10 border-t border-[#F0EAD6]/[0.06] transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: "900ms" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#F0EAD6]/[0.06]">
            {SPECS.map((s) => (
              <div key={s.label} className="px-6 py-5 first:pl-0 group">
                <p className="font-body text-[8px] uppercase tracking-[0.5em] text-[#F0EAD6]/25 mb-1.5 group-hover:text-[#C6A76A]/50 transition-colors">
                  {s.label}
                </p>
                <p className="font-display text-[#F0EAD6]/75 text-sm md:text-base font-semibold tracking-tight group-hover:text-[#F0EAD6] transition-colors">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
