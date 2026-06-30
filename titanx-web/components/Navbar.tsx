"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "27824165331";

interface NavbarProps {
  heroSentinelId?: string;
}

export default function Navbar({ heroSentinelId = "hero-sentinel" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById(heroSentinelId);
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [heroSentinelId]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-raised shadow-[0_1px_0_var(--border)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--bg-raised)" } : undefined}
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
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-150"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-barlow)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-barlow)",
              letterSpacing: "0.15em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent-dim)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent)")
            }
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{ color: "var(--text-primary)" }}
        >
          {menuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "var(--bg-raised)", borderColor: "var(--border)" }}
        >
          <ul className="flex flex-col py-4" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMenuOpen(false);
                  }}
                  className="block px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-150"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-3 pb-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  fontFamily: "var(--font-barlow)",
                }}
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
