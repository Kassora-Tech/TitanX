"use client";

import Link from "next/link";
import {
  Zap,
  Lightbulb,
  Sun,
  Building2,
  Home,
  Grid3x3,
  Wrench,
  Check,
  ArrowRight,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/lib/data/services";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Lightbulb,
  Sun,
  Building2,
  Home,
  Grid3x3,
  Wrench,
};

const WHATSAPP_NUMBER = "27824165331";

export default function ServiceDetailContent({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Zap;
  const whatsappMessage = encodeURIComponent(
    `Hi TitanX, I'd like a quote for ${service.title}.`
  );
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <section
      aria-labelledby="service-detail-heading"
      style={{ backgroundColor: "var(--bg-surface)" }}
      className="section-cut-top section-cut-bottom"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
          {/* Left — what's included */}
          <div>
            <div
              className="inline-flex items-center justify-center rounded-full border-2 w-14 h-14 mb-6"
              style={{ borderColor: "var(--accent)", backgroundColor: "var(--bg-deep)" }}
              aria-hidden="true"
            >
              <Icon className="w-6 h-6" style={{ color: "var(--accent)", strokeWidth: 1.5 }} />
            </div>

            <p className="overline-label mb-4">What's Included</p>
            <h2
              id="service-detail-heading"
              className="h2-display mb-8 max-w-lg"
              style={{ color: "var(--text-primary)" }}
            >
              Everything covered under {service.shortTitle.toLowerCase()}
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-[6px] border"
                  style={{ backgroundColor: "var(--bg-deep)", borderColor: "var(--border)" }}
                >
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full mt-0.5"
                    style={{ backgroundColor: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    <Check className="w-3 h-3" style={{ color: "#fff" }} strokeWidth={3} />
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Other services */}
            <div className="mt-16 pt-12 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="overline-label mb-6">Explore Other Services</p>
              <ul className="flex flex-wrap gap-3" role="list">
                {otherServices.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-[6px] border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-barlow)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — sticky CTA card */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div
              className="rounded-[8px] border p-7"
              style={{ backgroundColor: "var(--bg-deep)", borderColor: "var(--border)" }}
            >
              <p className="overline-label mb-3">Get Started</p>
              <h3 className="h3-display mb-3" style={{ color: "var(--text-primary)" }}>
                Request a Quote for {service.shortTitle}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
              >
                Tell us about your project and we&apos;ll get back to you with a
                no-obligation quote, usually within 24 hours.
              </p>

              <Link
                href="/#contact"
                className="flex items-center justify-center gap-2 w-full mb-3 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[6px]"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  fontFamily: "var(--font-barlow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                }}
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold uppercase tracking-widest border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[6px]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-barlow)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
                >
                  Serving Cape Town &amp; the Western Cape — residential,
                  commercial &amp; industrial projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
