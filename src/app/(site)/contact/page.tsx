"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<null | string>(null);

  // Set page title on client side
  useEffect(() => {
    document.title = "Contact — Andrew Cleverly";
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      // Replace with your Formspree endpoint or API route
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data
      });
      if (res.ok) {
        setStatus("Thanks — I'll get back to you shortly.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("Network error. Please email me directly.");
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="container py-12 flex-grow">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <form onSubmit={onSubmit} className="mt-6 max-w-xl space-y-4">
          <input name="name" placeholder="Your name" className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2" required />
          <input type="email" name="email" placeholder="Your email" className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2" required />
          <textarea name="message" placeholder="What would you like to discuss?" className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 h-32" required />
          <button className="border rounded px-4 py-2 text-sm">Send</button>
          {status && <p className="text-sm text-neutral-300">{status}</p>}
        </form>
      </section>
      <Footer />
    </main>
  );
}
