export interface Service {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // lucide icon name (legacy)
  img: string;  // service illustration
  features: string[];
  slug: string;
}

export const services: Service[] = [
  {
    id: "electrical",
    number: "01",
    title: "Electrical Installations & Maintenance",
    shortTitle: "Electrical",
    description:
      "Full-scope electrical installations for residential, commercial, and industrial projects. From distribution boards and wiring to fault-finding and compliance certification.",
    icon: "Zap",
    img: "/images/electrical.png",
    features: [
      "DB board installations & upgrades",
      "Three-phase industrial wiring",
      "CoC compliance certification",
      "Emergency fault-finding",
      "Surge protection systems",
    ],
    slug: "electrical-installations",
  },
  {
    id: "lighting",
    number: "02",
    title: "Architectural LED Lighting",
    shortTitle: "LED Lighting",
    description:
      "Bespoke LED and architectural lighting solutions for luxury homes, wine estates, hospitality, and commercial spaces. We design, supply, and install.",
    icon: "Lightbulb",
    img: "/images/ledlighting.png",
    features: [
      "Façade & landscape lighting",
      "Interior architectural lighting",
      "Smart lighting control systems",
      "Wine estate & hospitality fit-outs",
      "Energy-efficiency audits",
    ],
    slug: "architectural-led-lighting",
  },
  {
    id: "solar",
    number: "03",
    title: "Solar & Energy Solutions",
    shortTitle: "Solar",
    description:
      "Grid-tied, hybrid, and off-grid solar systems. We handle the full project lifecycle — design, supply, installation, and ongoing monitoring.",
    icon: "Sun",
    img: "/images/solar.png",
    features: [
      "Residential & commercial PV systems",
      "Battery backup & load-shedding solutions",
      "Hybrid inverter installations",
      "System monitoring & maintenance",
      "Municipal grid feed-in compliance",
    ],
    slug: "solar-energy-solutions",
  },
  {
    id: "construction",
    number: "04",
    title: "Building & Construction",
    shortTitle: "Construction",
    description:
      "New builds, renovations, and structural alterations delivered to specification. We self-perform across all trades and manage subcontractors where needed.",
    icon: "Building2",
    img: "/images/construction.png",
    features: [
      "New residential & commercial builds",
      "Structural alterations & additions",
      "Shopfitting & commercial fit-outs",
      "Project management & coordination",
      "Municipal approval submissions",
    ],
    slug: "building-construction",
  },
  {
    id: "roofing",
    number: "05",
    title: "Roofing & Waterproofing",
    shortTitle: "Roofing",
    description:
      "Pitched and flat roofing installations, re-roofing, and waterproofing membranes. We stop leaks permanently and back our work with a written guarantee.",
    icon: "Home",
    img: "/images/roofing.png",
    features: [
      "IBR & corrugated steel roofing",
      "Flat roof torch-on membranes",
      "Liquid waterproofing systems",
      "Parapet & valley repairs",
      "Timber truss replacements",
    ],
    slug: "roofing-waterproofing",
  },
  {
    id: "tiling",
    number: "06",
    title: "Tiling & Finishes",
    shortTitle: "Tiling",
    description:
      "Large-format, mosaic, and stone tiling for high-end residential and commercial projects. Precision screeding, waterproofing beds, and flawless grout finishes.",
    icon: "Grid3x3",
    img: "/images/tiling.png",
    features: [
      "Large-format porcelain & natural stone",
      "Screeding & floor preparation",
      "Wet area waterproofing",
      "Swimming pool & spa tiling",
      "Feature walls & façade cladding",
    ],
    slug: "tiling-finishes",
  },
  {
    id: "maintenance",
    number: "07",
    title: "Property Maintenance",
    shortTitle: "Maintenance",
    description:
      "Scheduled and reactive maintenance for residential estates, commercial properties, and sectional title schemes. One call, every trade.",
    icon: "Wrench",
    img: "/images/maintenance.png",
    features: [
      "Planned preventative maintenance",
      "Plumbing repairs & leak detection",
      "Painting & surface preparation",
      "Property condition reports",
      "Body corporate & HOA contracts",
    ],
    slug: "property-maintenance",
  },
];
