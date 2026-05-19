import React from "react";
import PlayingCard from "@/components/PlayingCard";
import PokerChip from "@/components/PokerChip";
import { Flourish } from "@/components/Ornaments";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#F2EBDA]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFDE] via-[#F0E8D2] to-[#E9DFC2]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,166,98,0.18),transparent_60%)]" />

      {/* Flying black chips — sparser, more refined */}
      <PokerChip className="absolute top-[16%] right-[7%] w-14 h-14 chip-toss-a opacity-90 hidden md:block" />
      <PokerChip className="absolute top-[10%] right-[26%] w-9 h-9 chip-toss-b opacity-70 hidden md:block" />
      <PokerChip className="absolute bottom-[26%] right-[5%] w-12 h-12 chip-toss-b opacity-85 hidden md:block" />
      <PokerChip className="absolute bottom-[14%] right-[30%] w-7 h-7 chip-toss-a opacity-55 hidden md:block" />
      <PokerChip className="absolute bottom-[20%] left-[14%] w-9 h-9 chip-toss-c opacity-50 hidden lg:block" />
      <PokerChip className="absolute top-[32%] left-[7%] w-6 h-6 chip-toss-b opacity-45 hidden lg:block" />

      {/* Side rail */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-10">
        <div className="h-24 w-px bg-gradient-to-b from-transparent to-[#1B2845]/70" />
        <span
          className="rotate-180 text-[10px] tracking-[0.4em] text-[#1B2845]/80 font-body uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          University of Oxford
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-28 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 reveal lg:pr-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block w-12 h-px bg-[#1B2845]" />
            <p
              data-testid="hero-overline"
              className="font-body text-[11px] md:text-xs uppercase tracking-[0.5em] text-[#1B2845]"
            >
              Michaelmas Term · 2027
            </p>
          </div>

          <h1
            data-testid="hero-title"
            className="font-display font-bold tracking-tight text-[#0F1B33] text-5xl md:text-6xl lg:text-[88px] leading-[0.95] mb-6"
          >
            The Oxford
            <br />
            <span className="italic font-normal text-[#C8A662]">Card Room</span>
          </h1>

          <Flourish className="w-48 h-5 mb-8" color="#C8A662" />

          <p
            data-testid="hero-tagline"
            className="font-display text-xl md:text-2xl lg:text-[28px] text-[#1B2845] italic font-light max-w-xl mb-6 leading-snug"
          >
            Poker night, the Oxford way.
          </p>

          <p
            data-testid="hero-description"
            className="font-body text-[#2a3550] max-w-lg text-base md:text-lg leading-relaxed mb-12"
          >
            A friendly Oxford society for anyone who enjoys a good evening of
            cards. Beginners, casual players and experienced regulars all
            welcome.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#events"
              data-testid="hero-cta-events"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0F1B33] hover:bg-[#16264a] text-[#C8A662] font-body text-[12px] uppercase tracking-[0.3em] transition-all duration-300 active:scale-[0.98] shadow-[0_10px_28px_-10px_rgba(15,27,51,0.5)] font-bold"
            >
              View Upcoming Events
              <span className="inline-block w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            </a>
            <a
              href="#overview"
              data-testid="hero-cta-learn-more"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#C8A662] hover:bg-[#C8A662] hover:text-[#0F1B33] text-[#1B2845] font-body text-[12px] uppercase tracking-[0.3em] transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-[440px] h-[540px]" data-testid="hero-cards-graphic">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_50%,rgba(200,166,98,0.28),transparent_65%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <PlayingCard variant="king-heart" rotate={-22} className="absolute -left-[160px] -top-[40px] w-[210px] h-[294px]" />
              <PlayingCard variant="queen-diamond" rotate={-8} className="absolute -left-[70px] -top-[100px] w-[210px] h-[294px]" />
              <PlayingCard variant="ace-spade" rotate={8} className="absolute left-[40px] -top-[100px] w-[220px] h-[308px] z-10" />
              <PlayingCard variant="jack-club" rotate={22} className="absolute left-[150px] -top-[40px] w-[210px] h-[294px]" />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#overview"
        data-testid="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#1B2845] hover:text-[#C8A662] transition-colors"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ArrowDown size={16} strokeWidth={1.2} className="animate-bounce" />
      </a>
    </section>
  );
}
