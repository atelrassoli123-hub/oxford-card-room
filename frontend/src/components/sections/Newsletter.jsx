import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Flourish } from "@/components/Ornaments";
import Reveal from "@/components/Reveal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Newsletter() {
  const [email, setEmail] = useState("");
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
      className="relative py-24 lg:py-36 bg-[#0F1B33] overflow-hidden"
    >
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#C8A662]/15 blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#9A1F2C]/15 blur-[120px] -translate-y-1/2" />

      <Reveal className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#C8A662] mb-6">
          07 — Get In Touch
        </p>
        <Flourish className="w-48 h-5 mx-auto mb-8" color="#C8A662" />
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F5EFDE] leading-[1] tracking-tight font-bold">
          Join the
          <br />
          <span className="italic text-[#C8A662] font-normal">mailing list.</span>        </h2>
        <p className="mt-8 font-body text-[#F5EFDE]/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Leave your email and we'll write to you ahead of Michaelmas with
          membership details, event reservations, and a friendly heads-up on
          our flagship nights. Open to all Oxford students.
        </p>

        <form
          onSubmit={submit}
          data-testid="newsletter-form"
          className="mt-12 max-w-xl mx-auto flex flex-col sm:flex-row gap-3 border-b border-[#C8A662]/40 focus-within:border-[#C8A662] transition-colors pb-2"
        >
          <input
            type="email"
            required
            placeholder="your.name@ox.ac.uk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="newsletter-input-email"
            className="flex-1 bg-transparent border-0 outline-none px-2 py-4 text-[#F5EFDE] font-body text-lg placeholder:text-[#F5EFDE]/40"
          />
          <button
            type="submit"
            disabled={loading}
            data-testid="newsletter-submit-button"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#C8A662] hover:bg-[#b89554] disabled:opacity-60 text-[#0F1B33] font-body text-[11px] uppercase tracking-[0.3em] transition-all active:scale-[0.98] rounded-sm font-bold"
          >
            {loading ? "Sending…" : "Subscribe"}
            <ArrowRight size={14} strokeWidth={1.5} />
          </button>
        </form>
        <p className="mt-4 font-body text-[11px] uppercase tracking-[0.3em] text-[#F5EFDE]/50">
          We write rarely. Never spam.
        </p>
      </Reveal>
    </section>
  );
}
