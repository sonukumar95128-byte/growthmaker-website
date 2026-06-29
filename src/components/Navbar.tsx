"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Brand, Nav } from "@/lib/types";

export default function Navbar({ brand, nav }: { brand: Brand; nav: Nav }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="glass border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/assets/logo/growth-maker-mark.png"
              alt={brand.name}
              width={160}
              height={118}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {nav.links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-green-bright ${
                    active ? "text-green-bright" : "text-bg-soft/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              href={nav.cta.href}
              className="rounded-full bg-growth-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              {nav.cta.label}
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="text-bg-soft lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass overflow-hidden border-b border-white/5 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-white/5 text-green-bright"
                      : "text-bg-soft/80 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={nav.cta.href}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-growth-gradient px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {nav.cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
