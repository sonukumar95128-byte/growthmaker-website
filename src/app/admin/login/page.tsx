"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loader2, LockKeyhole } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed.");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Could not reach the server. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-radial-glow px-5">
      <div className="absolute inset-0 -z-10 bg-bg-dark" />
      <div className="absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-green/20 blur-3xl" />
      <div className="absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-navy/30 blur-3xl" />

      <div className="glass w-full max-w-sm rounded-xl2 p-8">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/logo/growth-maker-mark.png"
            alt="Growth Maker"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-growth-gradient">
            <LockKeyhole size={20} className="text-white" />
          </div>
          <h1 className="mt-4 font-heading text-xl font-bold text-bg-soft">Admin Login</h1>
          <p className="mt-1 text-center text-sm text-bg-soft/55">
            Sign in to manage your Growth Maker website content.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-bg-soft/50">
              Username
            </span>
            <input
              type="text"
              required
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field mt-2"
              placeholder="growthmaker"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-bg-soft/50">
              Password
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field mt-2"
              placeholder="••••••••"
            />
          </label>

          {error && <p className="text-sm font-medium text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-growth-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
