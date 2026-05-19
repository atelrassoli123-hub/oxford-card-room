import React, { useEffect, useState } from "react";
import axios from "axios";
import RSVPDialog from "@/components/sections/RSVPDialog";
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

export default function Events() {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    axios.get(`${API}/events`).then((res) => mounted && setEvents(res.data)).catch(() => {});
    return () => { mounted = false; };
  }, []);

  const handleRSVP = (event) => { setSelected(event); setOpen(true); };

  return (
    <section
      id="events"
      data-testid="events-section"
      className="relative py-24 lg:py-36 bg-[#080C14] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          <Reveal as="div" className="lg:col-span-7">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#C8A662] mb-6">
              :04 — Upcoming Events
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#F5EFDE] leading-[0.95] tracking-tight font-bold">
              Three kinds of<br />
              <span className="italic font-normal text-[#C8A662]">evening.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={120} className="lg:col-span-5">
            <p className="font-body text-[#F5EFDE]/40 text-base leading-relaxed">
              Sign-ups open four weeks before each event. Members get first
              pick, and there's almost always room for a guest.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F5EFDE]/5">
          {events.map((e, idx) => {
            const meta = META[e.id] || META["regular-poker-night"];
            const Icon = meta.icon;
            return (
              <Reveal key={e.id} delay={idx * 100}>
                <article
                  data-testid={`event-card-${e.id}`}
                  className="relative group flex flex-col bg-[#080C14] hover:bg-[#0A0E17] overflow-hidden transition-all duration-500"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={meta.img}
                      alt={e.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/60 to-transparent" />
                    <div className="absolute top-5 left-5 px-3 py-1 border border-[#C8A662]/30 text-[9px] uppercase tracking-[0.35em] font-body text-[#C8A662]/70">
                      :{e.category}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-7 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={14} strokeWidth={1.2} className="text-[#C8A662]/50" />
                      <div className="font-body text-[9px] uppercase tracking-[0.35em] text-[#F5EFDE]/30">
                        {e.date}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl text-[#F5EFDE] leading-tight tracking-tight mb-3 font-bold">
                      {e.title}
                    </h3>
                    <p className="font-body text-[#F5EFDE]/40 text-[14px] leading-relaxed mb-6 flex-1">
                      {e.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-[#F5EFDE]/5">
                      <span className="font-body text-[9px] uppercase tracking-[0.3em] text-[#F5EFDE]/25">
                        {e.venue}
                      </span>
                      <button
                        onClick={() => handleRSVP(e)}
                        data-testid={`event-rsvp-button-${e.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#C8A662]/30 hover:border-[#C8A662] hover:bg-[#C8A662]/5 text-[#C8A662] font-body text-[9px] uppercase tracking-[0.35em] transition-all"
                      >
                        Reserve
                        <ArrowUpRight size={11} strokeWidth={1.5} />
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
