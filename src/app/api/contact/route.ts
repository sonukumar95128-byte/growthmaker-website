import { NextResponse } from "next/server";
import { addLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { fullName, email, phone, businessType, revenueRange, serviceInterested, message } = body;

  if (!fullName || !email || !phone || !businessType || !revenueRange || !serviceInterested) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const lead = await addLead({
    fullName: String(fullName).trim(),
    email: String(email).trim(),
    phone: String(phone).trim(),
    businessType: String(businessType).trim(),
    revenueRange: String(revenueRange).trim(),
    serviceInterested: String(serviceInterested).trim(),
    message: typeof message === "string" ? message.trim() : "",
  });

  return NextResponse.json({ success: true, lead }, { status: 201 });
}
