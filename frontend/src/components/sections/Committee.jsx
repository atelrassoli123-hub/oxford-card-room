import React from "react";
import { Flourish } from "@/components/Ornaments";
import Reveal from "@/components/Reveal";

const COMMITTEE = [
  {
    role: "President",
    name: "Mirsaid Abdullaev",
    bio: "Mirsaid founded The Oxford Card Room as a friendly place for Oxford students to get into poker. He runs membership, events, and partnerships.",
    initial: "MA",
  },
  {
    role: "Secretary",
    name: "Atel Rassoli",
    bio: "Atel manages the lecture programme, member onboarding, and all general correspondence. He's also usually the first person you'll meet at a Beginners' Table.",
    initial: "AR",
  },
];

export default function Committee() {
  return (
    <section
      id="committee"
      data-testid="committee-section"
      className="relative py-24 lg:py-36 bg-[#FBF6E3] overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#9A1F2C] mb-4">
              06 — Committee
            </p>
            <Flourish className="w-32 h-4" color="#C9A14A" />
            <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl text-[#0E0E10] leading-[0.98] tracking-tight">
              The founding
              <br />
              <span className="italic text-[#9A1F2C]">committee.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={120} className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="font-body text-[#3a2a2e] text-base md:text-lg leading-relaxed">
              The society is run by two student officers, with a small
              voluntary committee. We're always happy to hear from anyone who'd
              like to help out — applications for additional positions open in
              Trinity Term.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {COMMITTEE.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
            <article
              data-testid={`committee-card-${m.role.toLowerCase()}`}
              className="group relative bg-[#F4ECD2] border border-[#C9A14A]/40 hover:border-[#9A1F2C] transition-all duration-500 overflow-hidden shadow-sm"
            >
              <div className="relative aspect-[5/3] bg-gradient-to-br from-[#FBF6E3] via-[#F4ECD2] to-[#EEE3C2] flex items-center justify-center overflow-hidden">
                <div className="absolute top-6 left-6 font-body text-[10px] uppercase tracking-[0.4em] text-[#9A1F2C]">
                  {String(i + 1).padStart(2, "0")} · {m.role}
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-[#C9A14A]/60 bg-[#FBF6E3] flex items-center justify-center group-hover:border-[#9A1F2C] transition-colors duration-500 shadow-inner">
                    <span className="font-display text-5xl md:text-6xl text-[#9A1F2C] tracking-tight">
                      {m.initial}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-10 bg-[#FBF6E3]">
                <div className="font-body text-[10px] uppercase tracking-[0.4em] text-[#9A1F2C] mb-3">
                  {m.role}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-[#0E0E10] leading-tight tracking-tight mb-4">
                  {m.name}
                </h3>
                <p className="font-body text-[#3a2a2e] text-[15px] leading-relaxed">
                  {m.bio}
                </p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
