"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: wire this up to an email API (e.g. Resend, Nodemailer via a
    // /app/api/contact route) or a form service before going live.
    // For now this just confirms the enquiry was captured client-side.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-rig/40 bg-rig/5 p-6">
        <p className="font-display uppercase tracking-wide text-harbor">
          Enquiry received.
        </p>
        <p className="mt-2 text-sm text-harbor/70">
          Thanks — someone from our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-display text-xs uppercase tracking-widest text-harbor"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border border-steel/50 bg-white px-4 py-3 text-sm text-harbor outline-none focus:border-rig"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="font-display text-xs uppercase tracking-widest text-harbor"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="border border-steel/50 bg-white px-4 py-3 text-sm text-harbor outline-none focus:border-rig"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-display text-xs uppercase tracking-widest text-harbor"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border border-steel/50 bg-white px-4 py-3 text-sm text-harbor outline-none focus:border-rig"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="font-display text-xs uppercase tracking-widest text-harbor"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="border border-steel/50 bg-white px-4 py-3 text-sm text-harbor outline-none focus:border-rig"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-display text-xs uppercase tracking-widest text-harbor"
        >
          What do you need moved?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border border-steel/50 bg-white px-4 py-3 text-sm text-harbor outline-none focus:border-rig"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-fit bg-rig px-8 py-3 font-display text-sm uppercase tracking-widest text-harbor transition-transform hover:scale-[1.03]"
      >
        Send Enquiry
      </button>
    </form>
  );
}
