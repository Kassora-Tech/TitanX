import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Services hero"
      style={{ backgroundColor: "var(--bg-deep)", minHeight: "420px" }}
    >
      <div className="relative flex flex-col lg:flex-row min-h-[420px]">
        {/* Left — text block */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-20 py-16 lg:py-24 lg:w-[48%]"
          style={{ backgroundColor: "var(--bg-deep)" }}
        >
          {/* Eyebrow */}
          <p className="overline-label mb-5">Our Services</p>

          {/* H1 */}
          <h1
            className="h1-display mb-4"
            style={{ color: "var(--text-primary)", lineHeight: 1.05 }}
          >
            Expert Solutions.
            <br />
            <span style={{ color: "var(--accent)" }}>Built to Last.</span>
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
            From installations to construction and maintenance,
            we deliver quality services you can rely on.
          </p>

          {/* Diagonal accent line on the right edge of text panel (desktop) */}
          <div
            className="hidden lg:block absolute right-0 top-0 h-full pointer-events-none"
            aria-hidden="true"
            style={{ width: "60px", overflow: "hidden" }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: "28px",
                width: "2px",
                height: "140%",
                backgroundColor: "var(--accent)",
                transform: "rotate(6deg)",
                transformOrigin: "top center",
                opacity: 0.9,
              }}
            />
          </div>
        </div>

        {/* Right — hero photo */}
        <div className="relative flex-1 min-h-[300px] lg:min-h-0 overflow-hidden">
          {/* Left gradient blending into text panel */}
          <div
            className="absolute inset-y-0 left-0 z-10 w-24"
            style={{
              background: "linear-gradient(to right, var(--bg-deep) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          <Image
            src="/images/services/hero-house.jpg"
            alt="Modern luxury home at night — TitanX Group"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover object-center"
          />
          {/* Subtle dark overlay */}
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
