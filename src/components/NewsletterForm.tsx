"use client";

import { useState } from "react";

export default function NewsletterForm({
  placeholder,
  buttonLabel,
}: {
  placeholder: string;
  buttonLabel: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <p className="mt-4 text-sm font-medium text-green-bright">
        Thanks! You are subscribed for growth insights.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-bg-soft placeholder:text-bg-soft/40 focus:border-green-bright focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-growth-gradient px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
