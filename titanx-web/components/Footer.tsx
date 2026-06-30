"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "27824165331";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106327.27127437082!2d18.3649025!3d-33.9248685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa91!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1700000000000";

const serviceLinks = [
  { label: "Electrical Installations", href: "/services/electrical-installations" },
  { label: "LED Lighting", href: "/services/architectural-led-lighting" },
  { label: "Solar & Energy", href: "/services/solar-energy-solutions" },
  { label: "Building & Construction", href: "/services/building-construction" },
  { label: "Roofing & Waterproofing", href: "/services/roofing-waterproofing" },
  { label: "Tiling & Finishes", href: "/services/tiling-finishes" },
  { label: "Property Maintenance", href: "/services/property-maintenance" },
];

export default function Footer() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    // TODO: wire to backend/email service
    console.log("Quote request submitted:", formData);
    setTimeout(() => setFormState("sent"), 800);
  }

  return (
    <footer
      style={{ backgroundColor: "var(--bg-raised)", borderTop: "1px solid var(--border)" }}
    >
      {/* Quote form + contact + map */}
      <div
        id="contact"
        className="scroll-mt-20 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 py-20 md:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: quote form */}
          <div>
            <p className="overline-label mb-4">Get in Touch</p>
            <h2
              id="quote"
              className="h2-display mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              Request a Quote
            </h2>

            {formState === "sent" ? (
              <div
                className="p-8 border"
                style={{ borderColor: "var(--accent)", backgroundColor: "var(--bg-surface)" }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-barlow)" }}
                >
                  Message Received
                </p>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}>
                  Thank you — we&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4"
                aria-label="Quote request form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-widest font-semibold"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-barlow)" }}
                    >
                      Full Name <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-3 text-sm border bg-transparent transition-colors duration-150 focus:outline-none focus:border-accent"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-inter)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-widest font-semibold"
                      style={{ color: "var(--text-secondary)", fontFamily: "var(--font-barlow)" }}
                    >
                      Email <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-3 text-sm border bg-transparent transition-colors duration-150 focus:outline-none focus:border-accent"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-inter)",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-barlow)" }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 text-sm border bg-transparent transition-colors duration-150 focus:outline-none focus:border-accent"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-inter)",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-barlow)" }}
                  >
                    Project Details <span aria-hidden="true" style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 text-sm border bg-transparent transition-colors duration-150 focus:outline-none focus:border-accent resize-none"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-inter)",
                    }}
                    placeholder="Describe your project — location, scope, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "#fff",
                    fontFamily: "var(--font-barlow)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {formState === "submitting" ? "Sending…" : "Send Request"}
                  {formState !== "submitting" && (
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: contact info + map */}
          <div className="flex flex-col gap-8">
            {/* Contact details */}
            <div>
              <p className="overline-label mb-6">Contact</p>
              <ul className="flex flex-col gap-4" role="list">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)", fontSize: "0.9rem" }}>
                    Cape Town & Western Cape, South Africa
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+27600000000"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)", fontSize: "0.9rem" }}
                  >
                    +27 60 000 0000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@titanxgroup.co.za"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)", fontSize: "0.9rem" }}
                  >
                    info@titanxgroup.co.za
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)", fontSize: "0.9rem" }}
                  >
                    WhatsApp: +27 60 000 0000
                  </a>
                </li>
              </ul>
            </div>

            {/* Google Maps embed */}
            <div
              className="border overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <iframe
                src={MAPS_EMBED_SRC}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TitanX Group service area — Cape Town, South Africa"
                className="block"
                style={{ filter: "grayscale(100%) invert(90%) contrast(0.9)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
          >
            © {new Date().getFullYear()} TitanX Group. All rights reserved.
          </p>

          {/* Service links */}
          <nav aria-label="Footer service links">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {serviceLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors duration-150"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
