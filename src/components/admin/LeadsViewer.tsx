"use client";

import { useEffect, useState } from "react";
import { Loader2, Inbox } from "lucide-react";
import type { Lead } from "@/lib/types";

export default function LeadsViewer() {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch(() => setError("Could not load leads."));
  }, []);

  if (error) {
    return <p className="text-sm font-medium text-red-400">{error}</p>;
  }

  if (!leads) {
    return (
      <div className="flex items-center gap-2 text-bg-soft/60">
        <Loader2 size={16} className="animate-spin" /> Loading leads...
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="glass flex flex-col items-center gap-3 rounded-xl2 p-10 text-center">
        <Inbox size={32} className="text-bg-soft/30" />
        <p className="text-sm text-bg-soft/55">
          No contact form submissions yet. Leads will appear here automatically.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-bg-soft/55">{leads.length} total submissions</p>
      <div className="overflow-x-auto rounded-xl2 border border-white/8">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/8 bg-white/[0.03] text-xs uppercase tracking-wider text-bg-soft/50">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Business Type</th>
              <th className="px-4 py-3">Revenue Range</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-white/5 text-bg-soft/80">
                <td className="px-4 py-3 font-medium text-bg-soft">{lead.fullName}</td>
                <td className="px-4 py-3">{lead.email}</td>
                <td className="px-4 py-3">{lead.phone}</td>
                <td className="px-4 py-3">{lead.businessType}</td>
                <td className="px-4 py-3">{lead.revenueRange}</td>
                <td className="px-4 py-3">{lead.serviceInterested}</td>
                <td className="max-w-[220px] truncate px-4 py-3" title={lead.message}>
                  {lead.message || "—"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-bg-soft/50">
                  {new Date(lead.submittedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
