import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-20 section-cut-top section-cut-bottom"
      aria-labelledby="services-heading"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="overline-label mb-4">What We Do</p>
          <h2
            id="services-heading"
            className="h2-display max-w-xl"
            style={{ color: "var(--text-primary)" }}
          >
            Our Services
          </h2>
          <div
            className="mt-4 h-px w-16"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />
        </div>

        {/* Cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--bg-surface)" }}
          role="list"
        >
          {services.map((service) => (
            <li key={service.id} style={{ backgroundColor: "var(--bg-surface)" }}>
              <Link
                href={`/services/${service.slug}`}
                className="service-card group flex flex-col h-full p-8 focus-visible:outline-none"
                style={{ display: "flex" }}
              >
                {/* Full-bleed photo header */}
                <div className="relative -mx-8 -mt-8 mb-7 h-48 overflow-hidden" aria-hidden="true">
                  <Image
                    src={service.img}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark fade at bottom so card content flows in cleanly */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, var(--bg-surface) 0%, rgba(17,17,17,0.4) 50%, transparent 100%)" }}
                  />
                  {/* Number badge */}
                  <span
                    className="absolute top-4 left-4 text-xs font-semibold tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-barlow)", color: "rgba(255,255,255,0.5)" }}
                  >
                    {service.number}
                  </span>
                  {/* Accent line that grows on hover */}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                </div>

                {/* Title */}
                <h3 className="h3-display mb-3" style={{ color: "var(--text-primary)" }}>
                  {service.shortTitle}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
                >
                  {service.description}
                </p>

                {/* CTA row */}
                <span
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 group-hover:text-accent"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-barlow)", letterSpacing: "0.15em" }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
