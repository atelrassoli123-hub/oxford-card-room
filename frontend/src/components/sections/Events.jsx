import React, { useEffect, useState } from "react";
import axios from "axios";
import RSVPDialog from "@/components/sections/RSVPDialog";
import { Flourish } from "@/components/Ornaments";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Trophy, Calendar, BookOpen } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const META = {
  "boxing-night-2027": {
    img: "https://static.prod-images.emergentagent.com/jobs/9454c07a-f535-4f32-a0aa-3cceaeae12d8/images/76b791f8523c92bf33df9b02aca55ea8d53e54b217c8265e55250bfefbde2a79.png",
    icon: Trophy,
    accent: "flagship",
  },
  "regular-poker-night": {
    img: "https://static.prod-images.emergentagent.com/jobs/9454c07a-f535-4f32-a0aa-3cceaeae12d8/images/201ebb1a9873ccb82a867556680071b29d94214c45bbbbbc02751e4ceba83bcf.png",
    icon: Calendar,
    accent: "recurring",
  },
  "poker-lecture-series": {
    img: "https://static.prod-images.emergentagent.com/jobs/9454c07a-f535-4f32-a0aa-3cceaeae12d8/images/b127d9f54e9f0145300db8662c6b3dddafcc0a0ab752a65ead6372468ba601e6.png",
    icon: BookOpen,
    accent: "educational",
  },
};

const ACCENT_STYLES = {
  flagship: {
    badge: "bg-[#0E0E10] text-[#C9A14A] border-[#C9A14A]",
    border: "border-[#C9A14A]",
    iconBg: "bg-[#9A1F2C]/10 border-[#9A1F2C]/40 text-[#9A1F2C]",
    cardBg: "bg-[#FBF6E3]",
  },
  recurring: {
    badge: "bg-[#FBF6E3] text-[#9A1F2C] border-[#9A1F2C]",
    border: "border-[#1a0e0e]/15",
    iconBg: "bg-[#C9A14A]/15 border-[#C9A14A]/50 text-[#C9A14A]",
    cardBg: "bg-[#FBF6E3]",
  },
  educational: {
    badge: "bg-[#FBF6E3] text-[#0E0E10] border-[#1a0e0e]/30",
    border: "border-[#1a0e0e]/15",
    iconBg: "bg-[#0E0E10]/5 border-[#0E0E10]/30 text-[#0E0E10]",
    cardBg: "bg-[#FBF6E3]",
  },
};

export default function Events() {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${API}/events`)
      .then((res) => mounted && setEvents(res.data))
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const handleRSVP = (event) => {
    setSelected(event);
    setOpen(true);
  };

  return (
    <section
      id="events"
      data-testid="events-section"
      className="relative py-24 lg:py-32 bg-[#F2EBDA] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14 items-end">
          <Reveal as="div" className="lg:col-span-7">
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#9A1F2C] mb-4">
              04 — Upcoming Events
            </p>
            <Flourish className="w-32 h-4" color="#C8A662" />
            <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl text-[#0F1B33] leading-[0.98] tracking-tight font-bold">
              Three kinds of
              <br />
              <span className="italic text-[#C8A662] font-normal">evening.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={120} className="lg:col-span-5">
            <p className="font-body text-[#2a3550] text-base leading-relaxed">
              Sign-ups open four weeks before each event. Members get first
              pick, and there's almost always room for a guest. New players
              especially welcome — the Members' Night is the easiest way in.
            </p>
          </Reveal>
        </div>

        {/* Three equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {events.map((e, idx) => {
            const meta = META[e.id] || META["regular-poker-night"];
            const styles = ACCENT_STYLES[meta.accent] || ACCENT_STYLES.recurring;
            const Icon = meta.icon;
            return (
              <Reveal key={e.id} delay={idx * 100}>
              <article
                data-testid={`event-card-${e.id}`}
                className={`relative group flex flex-col border ${styles.border} ${styles.cardBg} overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={meta.img}
                    alt={e.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B33]/75 via-[#0F1B33]/30 to-transparent" />
                  <div
                    className={`absolute top-5 left-5 px-3 py-1 border text-[9px] uppercase tracking-[0.32em] font-body ${styles.badge}`}
                  >
                    {e.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7 lg:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`shrink-0 w-12 h-12 border flex items-center justify-center ${styles.iconBg}`}>
                      <Icon size={18} strokeWidth={1.4} />
                    </div>
                    <div className="font-body text-[10px] uppercase tracking-[0.32em] text-[#1B2845]/70 pt-1 leading-snug">
                      {e.date}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-[26px] text-[#0F1B33] leading-[1.1] tracking-tight mb-3 font-bold">
                    {e.title}
                  </h3>
                  <p className="font-body text-[#2a3550] text-[14px] leading-relaxed mb-6 flex-1">
                    {e.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-[#1B2845]/15">
                    <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#1B2845]/60">
                      {e.venue}
                    </span>
                    <button
                      onClick={() => handleRSVP(e)}
                      data-testid={`event-rsvp-button-${e.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0F1B33] hover:bg-[#16264a] text-[#C8A662] font-body text-[10px] uppercase tracking-[0.3em] transition-all active:scale-[0.98] font-bold"
                    >
                      Reserve
                      <ArrowUpRight size={12} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <RSVPDialog open={open} setOpen={setOpen} event={selected} />
    </section>
  );
}
