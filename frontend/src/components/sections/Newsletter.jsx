import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Newsletter() {
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email: email.trim() });
      toast.success("You're on the list — we'll be in touch ahead of Michaelmas.");
      setEmail("");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg = Array.isArray(detail) ? detail[0]?.msg : detail || "Subscription failed. Try a valid email.";
      toast.error(typeof msg === "string" ? msg : "Subscription failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      data-testid="newsletter-section"
      className="relative py-28 lg:py-48 bg-white overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(198,167,106,0.045),transparent_70%)]" />
      <div className="absolute inset-0 grain opacity-25 pointer-events-none" />

      {/* Decorative suit */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[#C6A76A]/[0.018] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(280px, 35vw, 480px)" }}
      >
        ♠
      </div>

      <Reveal className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">

        <p className="font-body text-[9px] uppercase tracking-[0.6em] text-[#C6A76A]/70 mb-10">
          :07 — Membership
        </p>

        <h2
          className="font-display text-[#1C1814] leading-[0.92] tracking-tight font-bold mb-8"
          style={{ fontSize: "clamp(44px, 7vw, 96px)" }}
        >
          Reserved<br />
          <span className="italic font-normal text-[#C6A76A]">for those who ask.</span>
        </h2>

        <p className="font-body text-[#1C1814]/60 text-base md:text-lg leading-[1.85] max-w-xl mx-auto mb-16">
          Leave your email and we'll write to you ahead of Michaelmas Term with
          membership details, event reservations, and a considered note on what
          the coming season holds. We write rarely. We write well.
        </p>

        {/* Email form */}
        <form
          onSubmit={submit}
          data-testid="newsletter-form"
          className="max-w-lg mx-auto"
        >
          <div className="flex flex-col sm:flex-row border border-[#C6A76A]/35 hover:border-[#C6A76A]/60 focus-within:border-[#C6A76A]/85 transition-colors duration-300 rounded">
            <input
              type="email"
              required
              placeholder="your.name@ox.ac.uk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="newsletter-input-email"
              className="flex-1 bg-transparent outline-none px-6 py-5 text-[#1C1814] font-body text-base placeholder:text-[#1C1814]/18 min-w-0"
            />
            <button
              type="submit"
              disabled={loading}
              data-testid="newsletter-submit-button"
              className="inline-flex items-center justify-center gap-3 px-7 py-5 bg-[#C6A76A] hover:bg-[#d4b87a] disabled:opacity-50 text-[#050816] font-body text-[9px] uppercase tracking-[0.45em] transition-all duration-300 font-semibold shrink-0"
            >
              {loading ? "Sending…" : "Join the List"}
              <ArrowRight size={12} strokeWidth={2} />
            </button>
          </div>
          <p className="mt-5 font-body text-[9px] uppercase tracking-[0.45em] text-[#1C1814]/40">
            Open to all Oxford students · No spam · Unsubscribe any time
          </p>
        </form>

        {/* Divider */}
        <div className="mt-20 flex items-center gap-8">
          <div className="flex-1 h-px bg-[#F0EAD6]/[0.05]" />
          <p className="font-display italic text-[#C6A76A]/40 text-lg">
            "The finest table is the one you're invited to."
          </p>
          <div className="flex-1 h-px bg-[#F0EAD6]/[0.05]" />
        </div>

      </Reveal>
    </section>
  );
}
