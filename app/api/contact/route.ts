import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const message = String(body?.message ?? "").trim();

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 5) {
    return NextResponse.json({ error: "Name, a valid email and project details are required." }, { status: 400 });
  }

  // TODO: deliver the message. Plug in Resend, Nodemailer, SendGrid, or a CRM here.
  // The receiving email address stays on the server and is never shown on the website.
  console.log("New Clickgulf enquiry:", { name, email, company: body?.company, service: body?.service, message });

  return NextResponse.json({ ok: true });
}
