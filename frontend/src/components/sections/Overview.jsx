import React, { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const POKER_IMG = "https://images.unsplash.com/photo-1511193311914-0346f16efe90?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1200";

const STATS = [
  { v: "8",   l: "Week Term",       sub: "Michaelmas 2027" },
  { v: "3",   l: "Cash Tables",     sub: "Running nightly" },
  { v: "12+", l: "Termly Events",   sub: "Lectures & socials" },
  { v: "1",   l: "Lead Sponsor",    sub: "Jump Trading" },
];

function CountUp({ value }) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix  = value.replace(/[0-9]/g, "");
  const [count, setCount]   = useState(0);
  const animatedRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        let start = null;
        const duration = 1600;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const e = 1 - Math.pow(1 - p, 4);
          setCount(Math.round(e * numeric));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Overview() {
  return (
    <section id="overview" data-testid="overview-section" className="relative bg-[#050816]">

      {/* ── Full-width poker image banner ────────────────────── */}
      <div className="relative w-full h-[55vh] md:h-[72vh] overflow-hidden" data-testid="overview-banner">
        <img
          src={POKER_IMG}
          alt="Player flicking cards"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: "grayscale(1) contrast(1.1)" }}
        />
        {/* Dark vignette */}
        <div className="absolute inset-0 bg-[#050816]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/60 via-transparent to-[#050816]/60" />
        {/* Bottom fade into content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816] pointer-events-none" />
        {/* Label */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <p className="font-body text-[8px] uppercase tracking-[0.5em] text-[#C6A76A]/50">:The Card Room</p>
        </div>
      </div>

      {/* ── Body copy ────────────────────────────────────── */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-14 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          <Reveal as="div" className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="font-body text-[9px] uppercase tracking-[0.55em] text-[#C6A76A] mb-8">
              :01 — The Society
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F0EAD6] leading-[1.0] tracking-tight font-bold">
              A card room<br />
              <span className="italic font-normal text-[#C6A76A]">at Oxford.</span>
            </h2>
          </Reveal>

          <Reveal as="div" delay={140} className="lg:col-span-7 lg:col-start-6 space-y-7">
            <p className="font-body text-[#F0EAD6]/55 text-lg md:text-xl leading-[1.85] tracking-wide">
              The Oxford Card Room is a student-led society for anyone who
              enjoys a serious evening of poker — whether you've never seen
              a flop or you grind cash games in your spare time.
            </p>
            <p className="font-body text-[#F0EAD6]/35 text-base leading-[1.85]">
              Three cash tables run side by side every week: a Beginners'
              Table for those finding their feet, a Casual Table for social
              players, and a Competitive Table for those who want to push
              further. Lectures, socials, and our flagship Knockout Night
              complete the term.
            </p>
            <p className="font-body text-[#F0EAD6]/30 text-base leading-[1.85]">
              Membership is open to all Oxford students. Our confirmed
              partnership with Jump Trading underwrites the Michaelmas 2027
              programme in full — keeping buy-ins accessible and the
              evenings well-appointed.
            </p>

            <div className="pt-4">
              <div className="w-full h-px bg-[#F0EAD6]/[0.07] mb-8" />
              <blockquote data-testid="overview-pullquote">
                <p className="font-display italic text-[#F0EAD6]/60 text-xl md:text-2xl leading-snug mb-4">
                  "We wanted somewhere that serious players and complete
                  beginners could sit at adjacent tables on the same night —
                  and both feel entirely at home."
                </p>
                <footer className="font-body text-[9px] uppercase tracking-[0.45em] text-[#C6A76A]/50">
                  :Mirsaid Abdullaev, President
                </footer>
              </blockquote>
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── Stats band ───────────────────────────────────── */}
      <div className="relative border-t border-[#F0EAD6]/[0.05]" data-testid="overview-stats-band">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#F0EAD6]/[0.05]">
            {STATS.map((s, i) => (
              <Reveal
                key={s.l}
                delay={i * 80}
                as="div"
                className="py-14 px-6 first:pl-0 flex flex-col gap-2 group"
                data-testid={`stats-${s.l.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div
                  className="font-display text-[#C6A76A] font-bold leading-none tracking-tight group-hover:text-[#d4b87a] transition-colors"
                  style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
                >
                  <CountUp value={s.v} />
                </div>
                <div className="font-body text-[9px] uppercase tracking-[0.5em] text-[#F0EAD6]/35 mt-1">
                  :{s.l}
                </div>
                <div className="font-body text-[10px] text-[#F0EAD6]/20 tracking-wide">
                  {s.sub}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
