"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

const PHONE = "082 416 5331";

export default function Hero() {
  return (
    <section
      className="relative w-full h-dvh flex flex-col"
      aria-label="Hero — TitanX Group"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      {/* ── Hero sentinel for Navbar ───────────────────────────── */}
      <div id="hero-sentinel" className="absolute top-24 left-0 w-px h-px" aria-hidden="true" />

      {/* ── Three-panel hero body ──────────────────────────────── */}
      <div className="relative flex-1 flex flex-col lg:flex-row min-h-[560px] pt-16 md:pt-20 lg:pt-0">

        {/* Panel 1 — Left: Blueprint overlay + headline + CTA */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 lg:py-0 lg:w-[38%] xl:w-[36%]"
          style={{ backgroundColor: "var(--bg-deep)" }}
        >
          {/* Blueprint / technical line art background */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <svg
              className="absolute top-0 right-0 w-[80%] h-full opacity-[0.07]"
              viewBox="0 0 300 500"
              fill="none"
              stroke="#E8732C"
              strokeWidth="0.5"
            >
              {/* Isometric box / blueprint motif */}
              <polygon points="150,30 260,90 260,210 150,270 40,210 40,90" />
              <polygon points="150,70 230,110 230,190 150,230 70,190 70,110" />
              <line x1="150" y1="30" x2="150" y2="70" />
              <line x1="260" y1="90" x2="230" y2="110" />
              <line x1="260" y1="210" x2="230" y2="190" />
              <line x1="150" y1="270" x2="150" y2="230" />
              <line x1="40" y1="210" x2="70" y2="190" />
              <line x1="40" y1="90" x2="70" y2="110" />
              {/* Grid lines */}
              <line x1="0" y1="320" x2="300" y2="320" strokeDasharray="4 6" />
              <line x1="0" y1="360" x2="300" y2="360" strokeDasharray="4 6" />
              <line x1="0" y1="400" x2="300" y2="400" strokeDasharray="4 6" />
              <line x1="60" y1="300" x2="60" y2="500" strokeDasharray="4 6" />
              <line x1="120" y1="300" x2="120" y2="500" strokeDasharray="4 6" />
              <line x1="180" y1="300" x2="180" y2="500" strokeDasharray="4 6" />
              <line x1="240" y1="300" x2="240" y2="500" strokeDasharray="4 6" />
              {/* Corner marks */}
              <polyline points="0,0 20,0 20,20" />
              <polyline points="300,0 280,0 280,20" />
              <polyline points="0,500 20,500 20,480" />
              <polyline points="300,500 280,500 280,480" />
            </svg>
            {/* Diagonal accent line */}
            <div
              className="absolute right-0 top-0 h-full w-[2px] origin-top-right"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, var(--accent) 30%, var(--accent) 70%, transparent 100%)",
                transform: "rotate(0deg)",
              }}
            />
          </div>

          {/* Headline */}
          <div className="relative z-10">
            <h1
              className="mb-6 font-bold uppercase whitespace-nowrap"
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(1.6rem, 2.8vw, 3.5rem)",
                letterSpacing: "0.06em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              <span style={{ display: "block" }}>One Team.</span>
              <span style={{ display: "block", color: "var(--accent)" }}>Every Project.</span>
              <span style={{ display: "block" }}>Built to Last.</span>
            </h1>

            {/* Scan line */}
            <div className="mb-6" aria-hidden="true">
              <div
                className="scan-line h-[2px] w-48"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </div>

            <p
              className="text-sm leading-relaxed mb-8 max-w-sm"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
            >
              From concept to completion, we deliver expert solutions in electrical,
              construction, roofing, tiling, and maintenance.
            </p>

            <Link
              href="#quote"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                fontFamily: "var(--font-barlow)",
                letterSpacing: "0.18em",
              }}
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Panel 2 — Centre: Architectural hero photo */}
        <div className="relative flex-1 min-h-[300px] lg:min-h-0 overflow-hidden">
          {/* Dark gradient overlays on left and right edges to blend into panels */}
          <div
            className="absolute inset-y-0 left-0 w-16 z-10"
            style={{ background: "linear-gradient(to right, rgba(8,8,8,0.9), transparent)" }}
            aria-hidden="true"
          />
          {/* Top gradient */}
          <div
            className="absolute inset-x-0 top-0 h-24 z-10"
            style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.7), transparent)" }}
            aria-hidden="true"
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 z-10"
            style={{ background: "linear-gradient(to top, rgba(8,8,8,0.8), transparent)" }}
            aria-hidden="true"
          />

          {/* Hero image — replace src with actual photo */}
          <Image
            src="/images/heronew.png"
            alt="Luxury architectural home at dusk with dramatic lighting — TitanX Group project"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
            style={{ opacity: 1 }}
          />

          {/* Subtle vignette to help text edges blend — not a photo replacement */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(8,8,8,0.35) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

      </div>

      {/* ── Bottom contact strip ───────────────────────────────── */}
      <div
        className="relative z-20 w-full flex flex-wrap items-center gap-x-8 gap-y-3 px-8 md:px-12 lg:px-16 py-4"
        style={{
          backgroundColor: "rgba(8,8,8,0.95)",
          borderTop: "1px solid var(--border)",
        }}
      >
        {/* Phone */}
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="flex items-center gap-2.5 transition-colors duration-150"
          style={{ color: "var(--text-secondary)" }}
        >
          <Phone
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--accent)" }}
            aria-hidden="true"
          />
          <span
            className="text-sm font-semibold tracking-wider"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            {PHONE}
          </span>
        </a>

        {/* Separator */}
        <span className="hidden sm:block w-px h-4" style={{ backgroundColor: "var(--border)" }} aria-hidden="true" />

        {/* Location */}
        <div className="flex items-center gap-2.5" style={{ color: "var(--text-secondary)" }}>
          <MapPin
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--accent)" }}
            aria-hidden="true"
          />
          <span
            className="text-sm font-semibold tracking-wider uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Cape Town
          </span>
        </div>

        {/* Separator */}
        <span className="hidden md:block w-px h-4 ml-auto" style={{ backgroundColor: "var(--border)" }} aria-hidden="true" />

        {/* Market segments */}
        <div className="flex items-center gap-6">
          {["Residential", "Commercial", "Industrial"].map((seg, i) => (
            <span key={seg} className="flex items-center gap-6">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)", fontFamily: "var(--font-barlow)" }}
              >
                {seg}
              </span>
              {i < 2 && (
                <span
                  className="w-px h-3"
                  style={{ backgroundColor: "var(--border)" }}
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
