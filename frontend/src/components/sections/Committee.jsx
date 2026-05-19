import React from "react";
import Reveal from "@/components/Reveal";

const COMMITTEE = [
  {
    role: "President",
    roleLabel: "Founder & President",
    name: "Mirsaid Abdullaev",
    bio: "Mirsaid founded The Oxford Card Room with a straightforward ambition: to create a student poker society that could hold its own against the best in the world. He leads on membership, partnerships, and event production.",
    initial: "MA",
    index: "01",
    img: "/oxford-card-room/committee/president.jpg",
  },
  {
    role: "Vice President",
    roleLabel: "Vice President",
    name: "Atel Rassoli",
    bio: "Atel runs the lecture programme, manages member onboarding, and handles all correspondence. He's also reliably the first person you'll meet at a Beginners' Table — and the most patient about explaining pot odds.",
    initial: "AR",
    index: "02",
    img: "/oxford-card-room/committee/vp.jpg",
  },
];

export default function Committee() {
  return (
    <section
      id="committee"
      data-testid="committee-section"
      className="relative py-24 lg:py-40 bg-[#050816] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_60%,rgba(198,167,106,0.025),transparent)]" />
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[9px] uppercase tracking-[0.55em] text-[#C6A76A] mb-8">
              :06 — The Committee
            </p>
            <h2
              className="font-display text-[#F0EAD6] leading-[0.95] tracking-tight font-bold"
              style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
            >
              The founding<br />
              <span className="italic font-normal text-[#C6A76A]">committee.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={130} className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="font-body text-[#F0EAD6]/35 text-base leading-relaxed">
              The society is run by two student officers. Applications for
              additional committee positions open in Trinity Term 2028.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F0EAD6]/[0.04]">
          {COMMITTEE.map((m, i) => (
            <Reveal key={m.name} delay={i * 120} as="div">
              <article
                data-testid={`committee-card-${m.role.toLowerCase()}`}
                className="group relative bg-[#050816] hover:bg-[#080b16] transition-all duration-500 overflow-hidden"
              >
                {/* Photo area */}
                <div className="relative h-80 bg-[#08090f] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "grayscale(1) contrast(1.08) brightness(0.85)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(198,167,106,0.06), transparent)" }} />

                  {/* Index label */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="font-body text-[8px] uppercase tracking-[0.5em] text-[#C6A76A]/50">
                      :{m.index}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <p className="font-body text-[8px] uppercase tracking-[0.55em] text-[#C6A76A]/50 mb-3">
                    :{m.roleLabel}
                  </p>
                  <h3
                    className="font-display text-[#F0EAD6] leading-tight tracking-tight mb-5 font-bold"
                    style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
                  >
                    {m.name}
                  </h3>
                  <p className="font-body text-[#F0EAD6]/38 text-[15px] leading-[1.8]">
                    {m.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Applications note */}
        <Reveal delay={200}>
          <div className="mt-14 p-8 border border-[#F0EAD6]/[0.05] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-body text-[9px] uppercase tracking-[0.5em] text-[#C6A76A]/40 mb-2">
                :Open Positions
              </p>
              <p className="font-body text-[#F0EAD6]/40 text-sm leading-relaxed">
                Treasury, Events, and Social Secretaries. Applications open Trinity Term 2028.
              </p>
            </div>
            <a
              href="#newsletter"
              className="shrink-0 inline-flex items-center gap-3 px-6 py-3 border border-[#C6A76A]/18 hover:border-[#C6A76A]/45 text-[#C6A76A]/45 hover:text-[#C6A76A] font-body text-[9px] uppercase tracking-[0.4em] transition-all duration-300"
            >
              Express Interest
              <span className="w-3 h-px bg-current" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
