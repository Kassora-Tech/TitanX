"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services", active: true },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function ServicesPageNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full"
      style={{ backgroundColor: "var(--bg-deep)", borderBottom: "1px solid var(--border)" }}
    >
      <nav
        className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="TitanX Group home">
          <Image
            src="/images/logo.png"
            alt="TitanX Group"
            width={140}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative pb-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-barlow)",
                  color: link.active ? "var(--accent)" : "var(--text-secondary)",
                }}
              >
                {link.label}
                {link.active && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px]"
                    style={{ backgroundColor: "var(--accent)" }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* GET A QUOTE button */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[6px]"
            style={{
              borderColor: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-barlow)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Get a Quote
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{ color: "var(--text-primary)" }}
        >
          {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "var(--bg-deep)", borderColor: "var(--border)" }}
        >
          <ul className="flex flex-col py-3" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-150"
                  style={{
                    color: link.active ? "var(--accent)" : "var(--text-secondary)",
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-3 pb-2">
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-widest border rounded-[6px]"
                style={{
                  borderColor: "var(--accent)",
                  color: "#fff",
                  fontFamily: "var(--font-barlow)",
                  backgroundColor: "transparent",
                }}
              >
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
