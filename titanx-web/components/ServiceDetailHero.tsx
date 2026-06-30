import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Service } from "@/lib/data/services";

export default function ServiceDetailHero({ service }: { service: Service }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label={`${service.title} hero`}
      style={{ backgroundColor: "var(--bg-deep)", minHeight: "420px" }}
    >
      <div className="relative flex flex-col lg:flex-row min-h-[420px]">
        {/* Left — text block */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-20 py-16 lg:py-24 lg:w-[48%]"
          style={{ backgroundColor: "var(--bg-deep)" }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-1.5 text-xs" style={{ fontFamily: "var(--font-inter)" }} role="list">
              <li>
                <Link href="/" className="transition-colors duration-150" style={{ color: "var(--text-secondary)" }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3" style={{ color: "var(--text-secondary)" }} />
              </li>
              <li>
                <Link href="/services" className="transition-colors duration-150" style={{ color: "var(--text-secondary)" }}>
                  Services
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3" style={{ color: "var(--text-secondary)" }} />
              </li>
              <li style={{ color: "var(--accent)" }} aria-current="page">
                {service.shortTitle}
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p className="overline-label mb-5">Service {service.number}</p>

          {/* H1 */}
          <h1
            className="h2-display mb-4 max-w-md"
            style={{ color: "var(--text-primary)" }}
          >
            {service.title}
          </h1>

          {/* Orange divider */}
          <div
            className="mb-6 h-[3px] w-12 scan-line"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />

          {/* Body */}
          <p
            className="text-sm md:text-base leading-relaxed max-w-sm"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
          >
            {service.description}
          </p>
        </div>

        {/* Right — hero photo */}
        <div className="relative flex-1 min-h-[300px] lg:min-h-0 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 z-10 w-24"
            style={{
              background: "linear-gradient(to right, var(--bg-deep) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          <Image
            src={service.img}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.1) 60%, transparent 100%)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
