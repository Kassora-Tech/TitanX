import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "27600000000";

export default function CTABand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--accent)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Copy */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-barlow)" }}
            >
              Ready to Build?
            </p>
            <h2
              id="cta-heading"
              className="h2-display"
              style={{ color: "#fff" }}
            >
              Let&apos;s Talk About Your Project.
            </h2>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              style={{
                backgroundColor: "#fff",
                color: "var(--accent)",
                fontFamily: "var(--font-barlow)",
                letterSpacing: "0.15em",
              }}
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              WhatsApp Us
            </a>
            <Link
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-widest border-2 border-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              style={{
                color: "#fff",
                fontFamily: "var(--font-barlow)",
                letterSpacing: "0.15em",
              }}
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
