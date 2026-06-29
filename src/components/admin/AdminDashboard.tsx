"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  Home,
  Info,
  TrendingUp,
  Briefcase,
  Newspaper,
  Mail,
  HelpCircle,
  PanelBottom,
  Inbox,
  LogOut,
  ExternalLink,
  Loader2,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import type { SiteContent } from "@/lib/types";
import BrandEditor from "@/components/admin/sections/BrandEditor";
import HomeEditor from "@/components/admin/sections/HomeEditor";
import AboutEditor from "@/components/admin/sections/AboutEditor";
import ClientResultsEditor from "@/components/admin/sections/ClientResultsEditor";
import ServicesEditor from "@/components/admin/sections/ServicesEditor";
import BlogEditor from "@/components/admin/sections/BlogEditor";
import ContactEditor from "@/components/admin/sections/ContactEditor";
import FaqEditor from "@/components/admin/sections/FaqEditor";
import FooterEditor from "@/components/admin/sections/FooterEditor";
import LeadsViewer from "@/components/admin/LeadsViewer";

const sections = [
  { id: "brand", label: "Brand & Nav", icon: LayoutDashboard },
  { id: "home", label: "Home Page", icon: Home },
  { id: "about", label: "About Page", icon: Info },
  { id: "clientResults", label: "Client Results", icon: TrendingUp },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "blog", label: "Blog", icon: Newspaper },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
  { id: "footer", label: "Footer", icon: PanelBottom },
  { id: "leads", label: "Leads", icon: Inbox },
] as const;

type SectionId = (typeof sections)[number]["id"];

export default function AdminDashboard({ initialContent }: { initialContent: SiteContent }) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  async function handleSave() {
    setSaveStatus("saving");
    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!response.ok) throw new Error("Save failed");
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2500);
    } catch {
      setSaveStatus("error");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen bg-bg-dark">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 border-r border-white/8 bg-bg-deepest transition-transform lg:static lg:translate-x-0 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Image
            src="/assets/logo/growth-maker-mark.png"
            alt="Growth Maker"
            width={150}
            height={45}
            className="h-9 w-auto"
          />
          <button
            type="button"
            onClick={() => setMobileNavOpen(false)}
            className="text-bg-soft/60 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="mt-2 space-y-1 px-3">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setActiveSection(id);
                setMobileNavOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                activeSection === id
                  ? "bg-growth-gradient text-white"
                  : "text-bg-soft/65 hover:bg-white/5 hover:text-bg-soft"
              }`}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 w-full space-y-2 border-t border-white/8 p-3">
          <Link
            href="/"
            target="_blank"
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-bg-soft/65 transition-colors hover:bg-white/5 hover:text-bg-soft"
          >
            <ExternalLink size={17} /> Preview Website
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-bg-soft/65 transition-colors hover:bg-white/5 hover:text-red-400"
          >
            <LogOut size={17} /> Logout
          </button>
        </div>
      </aside>

      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <div className="flex-1 lg:ml-0">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-white/8 bg-bg-dark/95 px-5 py-4 backdrop-blur lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="text-bg-soft/70 lg:hidden"
            >
              <Menu size={22} />
            </button>
            <h1 className="font-heading text-lg font-bold text-bg-soft">
              {sections.find((s) => s.id === activeSection)?.label}
            </h1>
          </div>

          {activeSection !== "leads" && (
            <button
              type="button"
              onClick={handleSave}
              disabled={saveStatus === "saving"}
              className="inline-flex items-center gap-2 rounded-full bg-growth-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {saveStatus === "saving" && <Loader2 size={15} className="animate-spin" />}
              {saveStatus === "saved" && <CheckCircle2 size={15} />}
              {saveStatus === "saving"
                ? "Saving..."
                : saveStatus === "saved"
                  ? "Saved!"
                  : saveStatus === "error"
                    ? "Retry Save"
                    : "Save Changes"}
            </button>
          )}
        </header>

        <main className="mx-auto max-w-4xl px-5 py-8 lg:px-8">
          {saveStatus === "error" && (
            <p className="mb-6 text-sm font-medium text-red-400">
              Could not save changes. Please try again.
            </p>
          )}

          {activeSection === "brand" && (
            <BrandEditor
              brand={content.brand}
              nav={content.nav}
              onChangeBrand={(brand) => setContent({ ...content, brand })}
              onChangeNav={(nav) => setContent({ ...content, nav })}
            />
          )}
          {activeSection === "home" && (
            <HomeEditor home={content.home} onChange={(home) => setContent({ ...content, home })} />
          )}
          {activeSection === "about" && (
            <AboutEditor about={content.about} onChange={(about) => setContent({ ...content, about })} />
          )}
          {activeSection === "clientResults" && (
            <ClientResultsEditor
              clientResults={content.clientResults}
              onChange={(clientResults) => setContent({ ...content, clientResults })}
            />
          )}
          {activeSection === "services" && (
            <ServicesEditor
              services={content.services}
              onChange={(services) => setContent({ ...content, services })}
            />
          )}
          {activeSection === "blog" && (
            <BlogEditor blog={content.blog} onChange={(blog) => setContent({ ...content, blog })} />
          )}
          {activeSection === "contact" && (
            <ContactEditor
              contact={content.contact}
              onChange={(contact) => setContent({ ...content, contact })}
            />
          )}
          {activeSection === "faqs" && (
            <FaqEditor faqs={content.faqs} onChange={(faqs) => setContent({ ...content, faqs })} />
          )}
          {activeSection === "footer" && (
            <FooterEditor
              footer={content.footer}
              onChange={(footer) => setContent({ ...content, footer })}
            />
          )}
          {activeSection === "leads" && <LeadsViewer />}
        </main>
      </div>
    </div>
  );
}
