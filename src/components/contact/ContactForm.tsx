"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { ContactForm as ContactFormType } from "@/lib/types";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  businessType: "",
  revenueRange: "",
  serviceInterested: "",
  message: "",
};

export default function ContactForm({ form }: { form: ContactFormType }) {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update<K extends keyof typeof initialState>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialState);
    } catch {
      setErrorMessage("Could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass flex flex-col items-center justify-center rounded-xl2 p-10 text-center"
      >
        <CheckCircle2 size={40} className="text-green-bright" />
        <h3 className="mt-4 font-heading text-xl font-bold text-bg-soft">Thank You!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-bg-soft/65">
          We have received your details. Our team will reach out to you shortly to discuss your
          growth system.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-bg-soft transition-colors hover:border-green-bright/50 hover:text-green-bright"
        >
          Submit Another Response
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-5 rounded-xl2 p-7 lg:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            type="text"
            required
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="input-field"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className="input-field"
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone Number" required>
          <input
            type="tel"
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input-field"
            placeholder="+91 98765 43210"
          />
        </Field>
        <Field label="Business Type" required>
          <select
            required
            value={values.businessType}
            onChange={(e) => update("businessType", e.target.value)}
            className="input-field"
          >
            <option value="" disabled>
              Select business type
            </option>
            {form.businessTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Monthly Revenue Range" required>
          <select
            required
            value={values.revenueRange}
            onChange={(e) => update("revenueRange", e.target.value)}
            className="input-field"
          >
            <option value="" disabled>
              Select revenue range
            </option>
            {form.revenueRangeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Service Interested In" required>
          <select
            required
            value={values.serviceInterested}
            onChange={(e) => update("serviceInterested", e.target.value)}
            className="input-field"
          >
            <option value="" disabled>
              Select a service
            </option>
            {form.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell Us About Your Business">
        <textarea
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className="input-field resize-none"
          placeholder="Share a bit about your goals, audience, or challenges..."
        />
      </Field>

      {status === "error" && <p className="text-sm font-medium text-red-400">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-growth-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {form.submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-bg-soft/50">
        {label} {required && <span className="text-green-bright">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
