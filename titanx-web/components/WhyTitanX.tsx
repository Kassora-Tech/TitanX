"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 350, suffix: "+", label: "Projects Completed" },
  { value: 7, suffix: "", label: "Service Disciplines" },
  { value: 100, suffix: "%", label: "Written Guarantee" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);
  const duration = 1800;

  useEffect(() => {
    if (!active) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    function step(timestamp: number) {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [active, target]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left py-8 px-6">
      <span
        className="h1-display tabular-nums"
        style={{ color: "var(--accent)", lineHeight: 1 }}
        aria-live="polite"
        aria-atomic="true"
      >
        {count}
        {suffix}
      </span>
      <span
        className="mt-2 text-xs uppercase tracking-[0.2em] font-semibold"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-barlow)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function WhyTitanX() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      style={{ backgroundColor: "var(--bg-deep)" }}
      className="scroll-mt-20 py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — brand statement */}
          <div>
            <p className="overline-label mb-4">Why TitanX</p>
            <h2
              id="about-heading"
              className="h2-display mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Engineering Firms Demand More.{" "}
              <span style={{ color: "var(--silver)" }}>So Do We.</span>
            </h2>
            <div
              className="h-[2px] w-16 mb-8"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden="true"
            />
            <p
              className="text-base leading-relaxed mb-6"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-inter)",
              }}
            >
              TitanX Group was founded on a single conviction: that construction and
              engineering clients deserve a contractor who reads drawings properly, keeps
              programme, and stands behind their work in writing. We operate across all
              major trades under one QMS — no hand-off delays, no accountability gaps.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Our clients include property developers, architects, wine estates, body
              corporates, and luxury homeowners throughout Cape Town and the Western Cape.
              Every project, regardless of size, receives the same level of management
              attention and finish quality.
            </p>
          </div>

          {/* Right — stat grid */}
          <div>
            <div
              className="grid grid-cols-2 border"
              style={{ borderColor: "var(--border)" }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`border-b border-r last:border-r-0 ${
                    i >= stats.length - 2 ? "border-b-0" : ""
                  }`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <StatItem
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    active={active}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
