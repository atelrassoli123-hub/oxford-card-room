import React, { useEffect, useRef, useState } from "react";
import { Flourish } from "@/components/Ornaments";
import Reveal from "@/components/Reveal";

const OXFORD_IMG =
  "https://images.unsplash.com/photo-1543783207-ec64e4d95325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1200";
const POKER_IMG =
  "https://static.prod-images.emergentagent.com/jobs/9454c07a-f535-4f32-a0aa-3cceaeae12d8/images/201ebb1a9873ccb82a867556680071b29d94214c45bbbbbc02751e4ceba83bcf.png";

const STATS = [
  { v: "8", l: "Week Term" },
  { v: "3", l: "Cash Tables" },
  { v: "12+", l: "Termly Events" },
  { v: "1", l: "Confirmed Sponsor" },
];

function CountUp({ value }) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let start = null;
          const duration = 1400;
          const step = (ts) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * numeric));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Overview() {
  return (
    <section
      id="overview"
      data-testid="overview-section"
      className="relative bg-[#F5EFDE]"
    >
      {/* Split banner — Oxford left, poker table right, gold seam */}
      <div
        className="relative w-full h-[340px] md:h-[480px] overflow-hidden border-b border-[#1B2845]/20"
        data-testid="overview-banner"
      >
        <div className="absolute inset-0 grid grid-cols-2">
          {/* Left half — Oxford */}
          <div className="relative overflow-hidden" data-testid="overview-banner-oxford">
            <img
              src={OXFORD_IMG}
              alt="Oxford University — Radcliffe Camera"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B33]/30 via-[#0F1B33]/15 to-[#0F1B33]/30" />
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
              <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#C8A662]">
                Radcliffe Camera · Oxford
              </p>
            </div>
          </div>
          {/* Right half — poker table */}
          <div className="relative overflow-hidden" data-testid="overview-banner-poker">
            <img
              src={POKER_IMG}
              alt="Poker table at The Oxford Card Room"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0F1B33]/30 via-[#0F1B33]/15 to-[#0F1B33]/30" />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 text-right">
              <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#C8A662]">
                The Card Room · Michaelmas
              </p>
            </div>
          </div>
        </div>

        {/* Gold seam */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#C8A662]/70 -translate-x-1/2 z-10" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-[#C8A662] z-10" aria-hidden="true" />

        {/* Bottom gradient + centered quote */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F1B33]/50 to-[#0F1B33] pointer-events-none" />
        <div className="absolute inset-0 flex items-end z-20">
          <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 pb-10 md:pb-14 text-center">
            <Flourish className="w-40 h-4 mx-auto mb-4" color="#C8A662" />
            <p className="font-display italic text-[#F5EFDE] text-xl md:text-3xl lg:text-4xl leading-snug max-w-3xl mx-auto">
              "A good hand is half luck, half good company."
            </p>
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#C8A662] mt-4">
              House Saying
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal as="div" className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#9A1F2C] mb-4">
              01 — Overview
            </p>
            <Flourish className="w-32 h-4" color="#C8A662" />
            <h3 className="mt-8 font-display text-3xl md:text-4xl lg:text-5xl text-[#0F1B33] leading-[1.05] tracking-tight font-bold">
              A welcoming card room at Oxford.
            </h3>
          </Reveal>

          <Reveal as="div" delay={120} className="lg:col-span-8 space-y-6">
            <p className="font-body text-[#1B2845] text-lg md:text-xl leading-relaxed">
              The Oxford Card Room is a student-led society for anyone who
              enjoys a good evening of poker — whether you've never seen a flop
              or you grind cash games in your spare time.
            </p>
            <p className="font-body text-[#2a3550] text-base leading-relaxed">
              We run three cash tables side by side every week: a Beginners'
              Table where someone walks you through the rules, a Casual Table
              for the social player, and a Competitive Table for those who like
              the maths. Lectures and socials run alongside, and our flagship
              boxing-and-poker night each Michaelmas is open to everyone.
            </p>
            <p className="font-body text-[#2a3550] text-base leading-relaxed">
              Membership is open to all Oxford students. A confirmed
              partnership with Jump Trading underwrites our Michaelmas 2027
              programme — meaning better venues and proper educational support
              for new players.
            </p>

            {/* Pull quote with gold border */}
            <blockquote
              data-testid="overview-pullquote"
              className="mt-10 border-l-2 border-[#C8A662] pl-6 py-2"
            >
              <p className="font-display italic text-[#0F1B33] text-xl md:text-2xl leading-snug">
                "We wanted somewhere serious players and complete beginners
                could sit at adjacent tables on the same night — and both leave
                having had a brilliant evening."
              </p>
              <footer className="font-body text-[11px] uppercase tracking-[0.3em] text-[#9A1F2C] mt-4">
                Mirsaid Abdullaev · President
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>

      {/* Stats band */}
      <div className="relative bg-[#0F1B33] py-12 lg:py-16" data-testid="overview-stats-band">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C8A662]/25">
          {STATS.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 100}
              as="div"
              className="bg-[#0F1B33] py-10 px-6 flex flex-col items-center text-center"
              data-testid={`stats-${s.l.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="font-display text-6xl md:text-7xl text-[#C8A662] font-bold leading-none">
                <CountUp value={s.v} />
              </div>
              <div className="font-body text-[10px] uppercase tracking-[0.4em] text-[#F5EFDE]/85 mt-4">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
