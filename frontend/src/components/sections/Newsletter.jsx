import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
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
      className="relative py-24 lg:py-40 bg-[#080C14] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,166,98,0.04),transparent_70%)]" />

      <Reveal className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#C8A662] mb-8">
          :07 — Get In Touch
        </p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-[#F5EFDE] leading-[0.95] tracking-tight font-bold mb-6">
          Join the<br />
          <span className="italic font-normal text-[#C8A662]">mailing list.</span>
        </h2>
        <p className="font-body text-[#F5EFDE]/40 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-14">
          Leave your email and we'll write to you ahead of Michaelmas with
          membership details, event reservations, and a friendly heads-up on
          our flagship nights.
        </p>

        <form
          onSubmit={submit}
          data-testid="newsletter-form"
          className="max-w-xl mx-auto flex flex-col sm:flex-row gap-0 border border-[#F5EFDE]/10 hover:border-[#C8A662]/30 focus-within:border-[#C8A662]/50 transition-colors"
        >
          <input
            type="email"
            required
            placeholder="your.name@ox.ac.uk"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="newsletter-input-email"
            className="flex-1 bg-transparent outline-none px-6 py-5 text-[#F5EFDE] font-body text-base placeholder:text-[#F5EFDE]/20"
          />
          <button
            type="submit"
            disabled={loading}
            data-testid="newsletter-submit-button"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#C8A662] hover:bg-[#b89554] disabled:opacity-60 text-[#080C14] font-body text-[10px] uppercase tracking-[0.35em] transition-all font-bold shrink-0"
          >
            {loading ? "Sending…" : "Subscribe"}
            <ArrowRight size={13} strokeWidth={1.5} />
          </button>
        </form>
        <p className="mt-5 font-body text-[10px] uppercase tracking-[0.35em] text-[#F5EFDE]/20">
          We write rarely. Never spam.
        </p>
      </Reveal>
    </section>
  );
}
