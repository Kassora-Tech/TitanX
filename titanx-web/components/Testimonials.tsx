"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }
  function next() {
    setIndex((i) => (i + 1) % total);
  }

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="overline-label mb-4">Client Feedback</p>
          <h2
            id="testimonials-heading"
            className="h2-display max-w-lg"
            style={{ color: "var(--text-primary)" }}
          >
            What Our Clients Say
          </h2>
          <div
            className="mt-4 h-px w-16"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />
        </div>

        {/* Carousel */}
        <div
          role="region"
          aria-label="Client testimonials carousel"
          aria-live="polite"
        >
          <div
            className="relative border p-8 md:p-12"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-surface)",
            }}
          >
            {/* Quote icon */}
            <Quote
              className="w-10 h-10 mb-8"
              style={{ color: "var(--accent)" }}
              aria-hidden="true"
            />

            {/* Quote text */}
            <blockquote>
              <p
                className="text-lg md:text-xl leading-relaxed mb-8"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer>
                <p
                  className="font-semibold uppercase tracking-widest text-sm"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-barlow)",
                  }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {t.role} — {t.company}
                </p>
              </footer>
            </blockquote>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 flex items-center justify-center border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                }}
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2" role="tablist" aria-label="Testimonial indicators">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className="w-2 h-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                    style={{
                      backgroundColor: i === index ? "var(--accent)" : "var(--border)",
                      transform: i === index ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 flex items-center justify-center border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                }}
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <span
                className="ml-auto text-xs"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 600,
                }}
                aria-live="polite"
                aria-atomic="true"
              >
                {index + 1} / {total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
