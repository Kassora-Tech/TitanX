"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Lightbulb,
  Sun,
  Building2,
  Home,
  Grid3x3,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data/services";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Lightbulb,
  Sun,
  Building2,
  Home,
  Grid3x3,
  Wrench,
};

export default function ServicesCardsSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-section-heading"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      {/* Intro block */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 pt-20 pb-14 text-center">
        <p className="overline-label mb-4">What We Do</p>
        <h2
          id="services-section-heading"
          className="h2-display inline-block"
          style={{ color: "var(--text-primary)" }}
        >
          Comprehensive Services
        </h2>
        {/* Orange underline accent */}
        <div
          className="mx-auto mt-3 mb-6 h-[3px] w-10"
          style={{ backgroundColor: "var(--accent)" }}
          aria-hidden="true"
        />
        <p
          className="mx-auto max-w-lg text-sm md:text-base leading-relaxed"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
        >
          We provide end-to-end solutions across a wide range of industries,
          delivering excellence in every project.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 pb-20">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          role="list"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Zap;
            return (
              <li key={service.id} className="flex">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col w-full overflow-hidden rounded-xl border transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,115,44,0.35)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px -4px rgba(232,115,44,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Photo */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Bottom fade so icon badge reads cleanly */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, var(--bg-surface) 0%, rgba(17,17,17,0) 45%)",
                      }}
                      aria-hidden="true"
                    />
                    {/* Circular icon badge — sits on the bottom edge of the photo */}
                    <div
                      className="absolute bottom-0 left-5 translate-y-1/2 flex items-center justify-center rounded-full border-2 w-12 h-12"
                      style={{
                        borderColor: "var(--accent)",
                        backgroundColor: "var(--bg-deep)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: "var(--accent)", strokeWidth: 1.5 }}
                      />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 px-5 pt-10 pb-5">
                    <h3
                      className="h3-display mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {service.shortTitle}
                    </h3>
                    <p
                      className="text-sm leading-relaxed flex-1 mb-5"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
                    >
                      {service.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 group-hover:opacity-80"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-barlow)" }}
                    >
                      Learn More
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
