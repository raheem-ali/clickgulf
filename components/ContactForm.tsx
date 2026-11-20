"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [data, setData] = useState({ name: "", email: "", company: "", service: defaultService, message: "" });

  const set = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h2>Message sent</h2>
        <p>Thank you, {data.name.split(" ")[0] || "there"}. Our team will review your request and reply to {data.email}.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" required value={data.name} onChange={set} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" required value={data.email} onChange={set} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" value={data.company} onChange={set} autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service" value={data.service} onChange={set}>
          <option value="">Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>
      <div className="field field-wide">
        <label htmlFor="message">Project details</label>
        <textarea id="message" name="message" rows={6} required value={data.message} onChange={set} />
      </div>
      {status === "error" && <p className="form-error" role="alert">{error} Check the fields and send again.</p>}
      <button className="btn btn-blue" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending message" : "Send message"}
      </button>
    </form>
  );
}
