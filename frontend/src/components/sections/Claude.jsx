import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Claude() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setResult("");

    try {
      const response = await axios.post(`${API}/claude`, { text: prompt.trim() });
      setResult(response.data.output ?? "");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg = Array.isArray(detail) ? detail[0]?.msg : detail || "Unable to reach Claude.";
      toast.error(typeof msg === "string" ? msg : "Unable to reach Claude.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="claude"
      className="relative py-28 lg:py-40 bg-[#050816] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,167,106,0.08),transparent_40%)]" />
      <div className="absolute inset-0 grain opacity-25 pointer-events-none" />

      <Reveal className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-[9px] uppercase tracking-[0.6em] text-[#C6A76A]/70 mb-6">
            :08 — Counsel
          </p>
          <h2 className="font-display text-[#F0EAD6] leading-[0.92] tracking-tight font-bold mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
            Query the house AI and receive a swift response.
          </h2>
          <p className="font-body text-[#F0EAD6]/38 text-base md:text-lg leading-[1.85] mx-auto max-w-2xl">
            Ask Claude for a short event summary, table slogan, or a membership note. The answer returns directly from the backend so your API key stays secret.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Ask Claude something like: "Summarise The Knockout Night in one sentence."'
            rows={5}
            className="w-full resize-none rounded-xl border border-[#F0EAD6]/[0.09] bg-[#0B0C10] px-6 py-5 text-[#F0EAD6] placeholder:text-[#F0EAD6]/35 outline-none transition focus:border-[#C6A76A] focus:ring-2 focus:ring-[#C6A76A]/20"
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A76A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.45em] text-[#050816] transition hover:bg-[#d4b87a] disabled:opacity-50"
            >
              {loading ? "Querying…" : "Query Claude"}
              <ArrowRight size={14} strokeWidth={2} />
            </button>
            <p className="text-sm text-[#F0EAD6]/50 max-w-xl">
              Claude responses are rate-limited by your backend usage and are intended for short, safe prompts.
            </p>
          </div>
        </form>

        {result ? (
          <div className="mt-10 rounded-3xl border border-[#F0EAD6]/10 bg-[#090A0F]/[0.85] p-8 text-[#F0EAD6] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <p className="font-body text-sm uppercase tracking-[0.45em] text-[#C6A76A]/70 mb-4">Claude says</p>
            <p className="whitespace-pre-wrap text-base leading-7">{result}</p>
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}
