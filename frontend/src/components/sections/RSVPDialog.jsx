import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { X } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function RSVPDialog({ open, setOpen, event }) {
  const [form, setForm] = useState({ name: "", email: "", college: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  if (!open || !event) return null;

  const close = () => {
    setOpen(false);
    setForm({ name: "", email: "", college: "", notes: "" });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Name and email are required.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/rsvp`, {
        name: form.name.trim(),
        email: form.email.trim(),
        college: form.college.trim() || null,
        event_id: event.id,
        notes: form.notes.trim() || null,
      });
      toast.success("Seat reserved — we'll be in touch shortly.");
      close();
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || "Could not reserve your seat. Try again.";
      toast.error(typeof msg === "string" ? msg : "Could not reserve your seat. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      data-testid="rsvp-dialog"
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
    >
      <div
        className="absolute inset-0 bg-[#020202]/85 backdrop-blur-md"
        onClick={close}
        data-testid="rsvp-dialog-backdrop"
      />
      <div className="relative w-full max-w-2xl bg-[#0A0A0C] border border-white/10 max-h-[95vh] overflow-y-auto">
        <button
          onClick={close}
          data-testid="rsvp-dialog-close"
          className="absolute top-5 right-5 text-neutral-400 hover:text-[#D4AF37] transition-colors"
          aria-label="Close"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="p-8 md:p-12">
          <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#D4AF37] mb-3">
            Reserve a Seat
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-neutral-50 leading-tight tracking-tight mb-2">
            {event.title}
          </h3>
          <p className="font-body text-neutral-400 text-sm uppercase tracking-[0.22em] mb-8">
            {event.date} · {event.venue}
          </p>

          <form onSubmit={submit} className="space-y-5" data-testid="rsvp-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full Name" required>
                <input
                  type="text"
                  required
                  data-testid="rsvp-input-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 focus:border-[#D4AF37] outline-none px-4 py-3 text-neutral-100 font-body text-base transition-colors"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  required
                  data-testid="rsvp-input-email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 focus:border-[#D4AF37] outline-none px-4 py-3 text-neutral-100 font-body text-base transition-colors"
                />
              </Field>
            </div>
            <Field label="College">
              <input
                type="text"
                placeholder="e.g. Magdalen, Christ Church"
                data-testid="rsvp-input-college"
                value={form.college}
                onChange={(e) => setForm({ ...form, college: e.target.value })}
                className="w-full bg-[#050505] border border-white/10 focus:border-[#D4AF37] outline-none px-4 py-3 text-neutral-100 font-body text-base transition-colors placeholder:text-neutral-600"
              />
            </Field>
            <Field label="Anything we should know">
              <textarea
                rows={3}
                placeholder="Dietary preferences, accessibility, etc."
                data-testid="rsvp-input-notes"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full bg-[#050505] border border-white/10 focus:border-[#D4AF37] outline-none px-4 py-3 text-neutral-100 font-body text-base transition-colors placeholder:text-neutral-600 resize-none"
              />
            </Field>

            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={close}
                data-testid="rsvp-cancel-button"
                className="px-6 py-3 border border-white/10 hover:border-white/30 text-neutral-300 font-body text-[11px] uppercase tracking-[0.3em] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                data-testid="rsvp-submit-button"
                className="px-7 py-3 bg-[#0F1B33] hover:bg-[#16264a] disabled:opacity-60 disabled:cursor-not-allowed text-[#C8A662] font-body text-[11px] uppercase tracking-[0.3em] transition-all active:scale-[0.98] font-bold"
              >
                {submitting ? "Reserving…" : "Confirm Reservation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="font-body text-[10px] uppercase tracking-[0.34em] text-neutral-400 mb-2 inline-block">
        {label} {required && <span className="text-[#D4AF37]">*</span>}
      </span>
      {children}
    </label>
  );
}
