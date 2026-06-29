import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ContactDetails } from "@/lib/types";

export default function ContactDetailsSection({ details }: { details: ContactDetails }) {
  const items = [
    { icon: Mail, label: "Email", value: details.email },
    { icon: Phone, label: "Phone", value: details.phone },
    { icon: MapPin, label: "Location", value: details.location },
    { icon: Clock, label: "Working Hours", value: details.workingHours },
  ];

  return (
    <div className="space-y-4">
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="glass flex items-start gap-3.5 rounded-xl2 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-growth-gradient">
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-bg-soft/40">
              {label}
            </p>
            <p className="mt-1 text-sm font-medium text-bg-soft/85">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
