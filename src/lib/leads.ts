import { promises as fs } from "fs";
import path from "path";
import type { Lead } from "./types";

const LEADS_PATH = path.join(process.cwd(), "data", "leads.json");

export async function getLeads(): Promise<Lead[]> {
  const raw = await fs.readFile(LEADS_PATH, "utf-8");
  return JSON.parse(raw) as Lead[];
}

export async function addLead(lead: Omit<Lead, "id" | "submittedAt">): Promise<Lead> {
  const leads = await getLeads();
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };
  leads.unshift(newLead);
  await fs.writeFile(LEADS_PATH, JSON.stringify(leads, null, 2), "utf-8");
  return newLead;
}
