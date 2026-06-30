"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTABand() {
  return (
    <section
      aria-labelledby="services-cta-heading"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Background construction photo — right side, low opacity */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/services/cta-construction.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
          style={{ opacity: 0.12 }}
        />
        {/* Dark overlay so text is always readable */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--bg-surface) 40%, rgba(17,17,17,0.7) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Copy */}
          <div>
            <p className="overline-label mb-4">Ready to Get Started?</p>
            <h2
              id="services-cta-heading"
              className="h1-display"
              style={{ color: "var(--text-primary)", lineHeight: 1.05 }}
            >
              Let&apos;s Build
              <br />
              <span style={{ color: "var(--accent)" }}>Something Great.</span>
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
            >
              Whether it&apos;s a small repair or a large-scale project, TitanX is here to help.
            </p>
          </div>

          {/* CTA button */}
          <div className="flex-shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] border-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[6px]"
              style={{
                borderColor: "var(--accent)",
                color: "#fff",
                fontFamily: "var(--font-barlow)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
