import React from "react";
import { Spade, Heart, Diamond, Club } from "lucide-react";
import Reveal from "@/components/Reveal";

const TABLES = [
  {
    icon: Spade,
    title: "Beginners' Table",
    body: "For anyone new to poker. A friendly dealer walks you through the rules, hand rankings and basic strategy as you play. No buy-in, just turn up.",
  },
  {
    icon: Heart,
    title: "Casual Table",
    body: "Low-stakes social cash. £5 friendly buy-in, no pressure, plenty of conversation. The most popular table on a Wednesday night.",
  },
  {
    icon: Diamond,
    title: "Competitive Table",
    body: "For more experienced players who want a deeper cash game. £20 buy-in, deep stacks, and the occasional staked session.",
  },
  {
    icon: Club,
    title: "Flagship Nights",
    body: "Our two big termly events — the Knockout Night and the Card Room Trophy. Open to every member. Friendly format, engraved trophy on the line.",
  },
];

const HOUSE_RULES = [
  "We play No-Limit Texas Hold'em as the standard format.",
  "Dealers and committee members are happy to explain any rule mid-hand.",
  "One player to a hand. Verbal declarations are binding.",
  "Phones face-down at the table, please — it keeps the game friendly.",
  "Dress code is smart-casual; black tie only on the flagship night.",
];

export default function Format() {
  return (
    <section
      id="format"
      data-testid="format-section"
      className="relative py-24 lg:py-36 bg-[#0A0E17] overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#C8A662] mb-6">
              :02 — Format & Tables
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#F5EFDE] leading-[0.95] tracking-tight font-bold">
              A table for<br />
              <span className="italic font-normal text-[#C8A662]">every level.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={120} className="lg:col-span-7 lg:pt-6">
            <p className="font-body text-[#F5EFDE]/50 text-base md:text-lg leading-relaxed">
              Every members' night runs three tables side by side — so whether
              you've never played a hand or you've been at it for years,
              there's somewhere to sit.
            </p>
          </Reveal>
        </div>

        {/* Four cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F5EFDE]/5">
          {TABLES.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 80}>
                <div
                  data-testid={`format-card-${r.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="bg-[#0A0E17] p-8 lg:p-12 group hover:bg-[#0F1520] transition-colors duration-500 flex flex-col"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-12 h-12 border border-[#C8A662]/20 flex items-center justify-center group-hover:border-[#C8A662]/60 group-hover:bg-[#C8A662]/5 transition-all duration-500">
                      <Icon size={18} strokeWidth={1} className="text-[#C8A662]/50 group-hover:text-[#C8A662] transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl text-[#F5EFDE] mb-3 tracking-tight font-bold">
                        {r.title}
                      </h3>
                      <p className="font-body text-[#F5EFDE]/40 text-[15px] leading-relaxed">
                        {r.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* House rules */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal as="div" className="lg:col-span-4">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#C8A662]/60 mb-4">
              :House Rules
            </p>
            <h3 className="font-display text-3xl text-[#F5EFDE] leading-tight tracking-tight font-bold">
              Keep it friendly,<br />keep it fair.
            </h3>
          </Reveal>
          <Reveal as="div" delay={100} className="lg:col-span-8">
            <ul className="divide-y divide-[#F5EFDE]/5 border-y border-[#F5EFDE]/5">
              {HOUSE_RULES.map((e, i) => (
                <li
                  key={i}
                  data-testid={`etiquette-rule-${i}`}
                  className="py-6 flex items-start gap-6 group"
                >
                  <span className="font-display text-2xl text-[#C8A662]/30 group-hover:text-[#C8A662] transition-colors w-10 shrink-0 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-[#F5EFDE]/50 text-base leading-relaxed group-hover:text-[#F5EFDE]/80 transition-colors">
                    {e}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
