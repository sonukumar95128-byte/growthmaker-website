import { NextResponse } from "next/server";
import { getSiteContent, saveSiteContent } from "@/lib/content";

export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid content payload." }, { status: 400 });
  }

  await saveSiteContent(body);
  return NextResponse.json({ success: true });
}
