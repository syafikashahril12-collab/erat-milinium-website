"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-midnight">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ERAT MILINIUM (M) Sdn Bhd logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="font-display text-lg uppercase tracking-wide text-mist">
            Erat Milinium
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase tracking-widest text-steel transition-colors hover:text-rig"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-mist" />
          <span className="h-0.5 w-6 bg-mist" />
          <span className="h-0.5 w-6 bg-mist" />
        </button>
      </div>

      <div className="horizon-rule-thin" />

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-midnight px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-display text-sm uppercase tracking-widest text-steel hover:text-rig"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
