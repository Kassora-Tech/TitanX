"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type ProjectCategory } from "@/lib/data/projects";
import { ArrowUpRight } from "lucide-react";

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "electrical", label: "Electrical" },
  { value: "lighting", label: "LED Lighting" },
  { value: "solar", label: "Solar" },
  { value: "construction", label: "Construction" },
  { value: "roofing", label: "Roofing" },
  { value: "tiling", label: "Tiling" },
  { value: "maintenance", label: "Maintenance" },
];

export default function ProjectGallery() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="scroll-mt-20 section-cut-top section-cut-bottom"
      aria-labelledby="projects-heading"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="overline-label mb-4">Our Work</p>
          <h2
            id="projects-heading"
            className="h2-display max-w-xl"
            style={{ color: "var(--text-primary)" }}
          >
            Project Gallery
          </h2>
          <div
            className="mt-4 h-px w-16"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />
        </div>

        {/* Filter bar */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              aria-pressed={active === cat.value}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
              style={{
                fontFamily: "var(--font-barlow)",
                letterSpacing: "0.15em",
                backgroundColor:
                  active === cat.value ? "var(--accent)" : "transparent",
                borderColor:
                  active === cat.value ? "var(--accent)" : "var(--border)",
                color:
                  active === cat.value ? "#fff" : "var(--text-secondary)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--border)" }}
          role="list"
        >
          {filtered.map((project, i) => (
            <li
              key={project.id}
              className={`group relative overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-accent ${
                // Feature first and fifth items span 2 columns on large screens
                project.featured && (i === 0 || i === 4)
                  ? "lg:col-span-2"
                  : ""
              }`}
              style={{
                backgroundColor: "var(--bg-raised)",
                aspectRatio: project.featured && (i === 0 || i === 4) ? "16/7" : "4/3",
              }}
            >
              {/* Placeholder image — replace with real assets */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "var(--bg-raised)" }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ color: "var(--border)" }}
                >
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}
                  >
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.5) 60%, transparent 100%)",
                }}
              >
                <p className="overline-label mb-2">{project.categoryLabel}</p>
                <h3
                  className="h3-display mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs mb-3"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
                >
                  {project.location} · {project.year}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-barlow)" }}
                >
                  View Project <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>

              {/* Always-visible category chip */}
              <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-200">
                <span
                  className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
                  style={{
                    backgroundColor: "rgba(8,8,8,0.7)",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-barlow)",
                  }}
                >
                  {project.categoryLabel}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            className="py-20 text-center"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
          >
            No projects found in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
