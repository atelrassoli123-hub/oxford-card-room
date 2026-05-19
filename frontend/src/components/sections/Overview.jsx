import React, { useEffect, useRef, useState } from "react";
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
      className="relative bg-[#080C14]"
    >
      {/* Split banner */}
      <div
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
        data-testid="overview-banner"
      >
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative overflow-hidden" data-testid="overview-banner-oxford">
            <img src={OXFORD_IMG} alt="Oxford University" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#080C14]/50" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <p className="font-body text-[9px] uppercase tracking-[0.45em] text-[#C8A662]/70">:Radcliffe Camera</p>
            </div>
          </div>
          <div className="relative overflow-hidden" data-testid="overview-banner-poker">
            <img src={POKER_IMG} alt="Poker table" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#080C14]/50" />
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right">
              <p className="font-body text-[9px] uppercase tracking-[0.45em] text-[#C8A662]/70">:The Card Room</p>
            </div>
          </div>
        </div>
        {/* Gold seam */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#C8A662]/30 -translate-x-1/2 z-10" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080C14] pointer-events-none" />
      </div>

      {/* Body */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal as="div" className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#C8A662] mb-6">
              :01 — Overview
            </p>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F5EFDE] leading-[1.0] tracking-tight font-bold">
              A card room<br />
              <span className="italic font-normal text-[#C8A662]">at Oxford.</span>
            </h3>
          </Reveal>

          <Reveal as="div" delay={120} className="lg:col-span-8 space-y-8">
            <p className="font-body text-[#F5EFDE]/60 text-lg md:text-xl leading-relaxed">
              The Oxford Card Room is a student-led society for anyone who
              enjoys a good evening of poker — whether you've never seen a flop
              or you grind cash games in your spare time.
            </p>
            <p className="font-body text-[#F5EFDE]/40 text-base leading-relaxed">
              We run three cash tables side by side every week: a Beginners'
              Table, a Casual Table, and a Competitive Table. Lectures and
              socials run alongside, and our flagship boxing-and-poker night
              each Michaelmas is open to everyone.
            </p>
            <p className="font-body text-[#F5EFDE]/40 text-base leading-relaxed">
              Membership is open to all Oxford students. A confirmed
              partnership with Jump Trading underwrites our Michaelmas 2027
              programme.
            </p>

            <blockquote
              data-testid="overview-pullquote"
              className="mt-10 border-l border-[#C8A662]/40 pl-8 py-2"
            >
              <p className="font-display italic text-[#F5EFDE]/70 text-xl md:text-2xl leading-snug">
                "We wanted somewhere serious players and complete beginners
                could sit at adjacent tables on the same night."
              </p>
              <footer className="font-body text-[10px] uppercase tracking-[0.35em] text-[#C8A662]/60 mt-4">
                :Mirsaid Abdullaev · President
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>

      {/* Stats band */}
      <div className="relative border-t border-[#F5EFDE]/5" data-testid="overview-stats-band">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#F5EFDE]/5">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 100} as="div" className="py-16 px-6 first:pl-0 flex flex-col"
                data-testid={`stats-${s.l.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="font-display text-[80px] md:text-[100px] text-[#C8A662] font-bold leading-none tracking-tight">
                  <CountUp value={s.v} />
                </div>
                <div className="font-body text-[9px] uppercase tracking-[0.5em] text-[#F5EFDE]/30 mt-4">
                  :{s.l}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
