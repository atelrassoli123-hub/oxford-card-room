import React from "react";
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
      className="relative py-24 lg:py-36 bg-[#080C14] overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#C8A662] mb-6">
              :06 — Committee
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#F5EFDE] leading-[0.95] tracking-tight font-bold">
              The founding<br />
              <span className="italic font-normal text-[#C8A662]">committee.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={120} className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <p className="font-body text-[#F5EFDE]/40 text-base md:text-lg leading-relaxed">
              The society is run by two student officers, with a small voluntary
              committee. Applications for additional positions open in Trinity Term.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F5EFDE]/5">
          {COMMITTEE.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <article
                data-testid={`committee-card-${m.role.toLowerCase()}`}
                className="group relative bg-[#080C14] hover:bg-[#0A0E17] transition-all duration-500 overflow-hidden"
              >
                {/* Avatar area */}
                <div className="relative h-56 bg-[#0A0E17] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,166,98,0.05),transparent_70%)]" />
                  <div className="w-32 h-32 rounded-full border border-[#C8A662]/20 group-hover:border-[#C8A662]/50 flex items-center justify-center transition-colors duration-500">
                    <span className="font-display text-4xl text-[#C8A662]/60 group-hover:text-[#C8A662] transition-colors duration-500 tracking-tight">
                      {m.initial}
                    </span>
                  </div>
                  <div className="absolute top-6 left-6 font-body text-[9px] uppercase tracking-[0.45em] text-[#C8A662]/40">
                    :{String(i + 1).padStart(2, "0")} {m.role}
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="font-body text-[9px] uppercase tracking-[0.45em] text-[#C8A662]/50 mb-3">
                    :{m.role}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-[#F5EFDE] leading-tight tracking-tight mb-4 font-bold">
                    {m.name}
                  </h3>
                  <p className="font-body text-[#F5EFDE]/40 text-[15px] leading-relaxed">
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
