import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ContactDetails } from "@/lib/types";

export default function ContactDetailsSection({ details }: { details: ContactDetails }) {
  const wa =
    (details as { whatsappUrl?: string }).whatsappUrl ||
    "https://wa.me/918511452042?text=Hi%20Growth%20Maker%2C%20I%20want%20a%20free%20strategy%20call.";

  const items = [
    {
      icon: Mail,
      label: "Email",
      value: details.email,
      href: `mailto:${details.email}`,
    },
    {
      icon: Phone,
      label: "WhatsApp / Phone",
      value: details.phone,
      href: wa,
    },
    {
      icon: MapPin,
      label: "Location",
      value: details.location,
      href: "https://maps.google.com/?q=216+Avadh+Kontina+VIP+Road+Vesu+Surat",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: details.workingHours,
    },
  ];

  return (
    <div className="space-y-4">
      {items.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="glass flex items-start gap-3.5 rounded-xl2 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-growth-gradient">
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-bg-soft/40">
              {label}
            </p>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="mt-1 block text-sm font-medium text-bg-soft/85 hover:text-green-bright"
              >
                {value}
              </a>
            ) : (
              <p className="mt-1 text-sm font-medium text-bg-soft/85">{value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
