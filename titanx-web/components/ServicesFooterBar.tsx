import { Phone, MapPin } from "lucide-react";

const PHONE = "082 416 5331";

export default function ServicesFooterBar() {
  return (
    <footer
      className="w-full py-5"
      style={{
        backgroundColor: "var(--bg-raised)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 flex flex-wrap items-center justify-between gap-4">
        {/* Left: phone + location */}
        <div className="flex flex-wrap items-center gap-6">
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

          <span
            className="hidden sm:block w-px h-4"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />

          <div
            className="flex items-center gap-2.5"
            style={{ color: "var(--text-secondary)" }}
          >
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
        </div>

        {/* Right: market segments */}
        <div className="flex items-center gap-5">
          {["Residential", "Commercial", "Industrial"].map((seg, i) => (
            <span key={seg} className="flex items-center gap-5">
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
    </footer>
  );
}
