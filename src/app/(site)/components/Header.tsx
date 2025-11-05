"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-neutral-800">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-tight">AC</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="md:hidden border rounded px-2 py-1 text-sm" onClick={() => setOpen(o => !o)}>
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-800">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/insights" onClick={() => setOpen(false)}>Insights</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
