export type ProjectCategory =
  | "electrical"
  | "lighting"
  | "solar"
  | "construction"
  | "roofing"
  | "tiling"
  | "maintenance";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  year: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "constantia-villa",
    title: "Constantia Villa Electrical & Lighting",
    location: "Constantia, Cape Town",
    category: "lighting",
    categoryLabel: "LED Lighting",
    description:
      "Full electrical installation and bespoke architectural LED lighting for a 650m² luxury residence. Landscape uplighting, dimmable interior circuits, and a Lutron smart control system.",
    imageSrc: "/images/projects/constantia-villa.jpg",
    imageAlt: "Luxury villa exterior at dusk with architectural lighting",
    year: 2024,
    featured: true,
  },
  {
    id: "stellenbosch-estate",
    title: "Wine Estate Solar & Electrical",
    location: "Stellenbosch, Western Cape",
    category: "solar",
    categoryLabel: "Solar",
    description:
      "120kW hybrid solar system with 180kWh battery bank for a working wine estate. Eliminated load-shedding impact across cellar, tasting room, and staff accommodation.",
    imageSrc: "/images/projects/stellenbosch-solar.jpg",
    imageAlt: "Solar panels on wine estate with mountain backdrop",
    year: 2024,
    featured: true,
  },
  {
    id: "atlantic-seaboard-apartment",
    title: "Atlantic Seaboard Penthouse Tiling",
    location: "Sea Point, Cape Town",
    category: "tiling",
    categoryLabel: "Tiling",
    description:
      "900×900mm large-format porcelain throughout a full penthouse renovation. Feature marble-effect wall in the main bathroom and seamless pool-surround detail.",
    imageSrc: "/images/projects/seapoint-penthouse.jpg",
    imageAlt: "Luxury penthouse bathroom with large-format porcelain tiling",
    year: 2023,
    featured: true,
  },
  {
    id: "bellville-warehouse",
    title: "Bellville Warehouse Roof Replacement",
    location: "Bellville, Cape Town",
    category: "roofing",
    categoryLabel: "Roofing",
    description:
      "Complete re-roofing of a 3 200m² light-industrial warehouse. IBR sheeting, insulation blanket, new fascias, and torch-on waterproofing to all parapet flashings.",
    imageSrc: "/images/projects/bellville-roof.jpg",
    imageAlt: "Industrial warehouse with new IBR steel roof",
    year: 2023,
    featured: false,
  },
  {
    id: "newlands-extension",
    title: "Newlands Residential Extension",
    location: "Newlands, Cape Town",
    category: "construction",
    categoryLabel: "Construction",
    description:
      "110m² ground-floor addition and full interior remodel of a 1960s Cape Dutch property. Structural steel, new slab, and full finishes package self-performed by TitanX.",
    imageSrc: "/images/projects/newlands-extension.jpg",
    imageAlt: "Contemporary residential extension to Cape Dutch property",
    year: 2024,
    featured: true,
  },
  {
    id: "cbd-office-electrical",
    title: "Cape Town CBD Office Fit-Out",
    location: "Cape Town CBD",
    category: "electrical",
    categoryLabel: "Electrical",
    description:
      "Three-phase electrical installation for a 1 400m² open-plan office across two floors. Structured cabling co-ordination, emergency lighting, and SANS 10142 compliance.",
    imageSrc: "/images/projects/cbd-office.jpg",
    imageAlt: "Modern open-plan office with recessed LED panel lighting",
    year: 2023,
    featured: false,
  },
  {
    id: "hout-bay-villa-maintenance",
    title: "Hout Bay Villa Maintenance Contract",
    location: "Hout Bay, Cape Town",
    category: "maintenance",
    categoryLabel: "Maintenance",
    description:
      "Annual maintenance contract covering electrical, plumbing, painting, and roof inspections for a 5-villa coastal estate. Quarterly condition reports provided to the HOA.",
    imageSrc: "/images/projects/houtbay-maintenance.jpg",
    imageAlt: "Coastal villa estate in Hout Bay",
    year: 2024,
    featured: false,
  },
  {
    id: "franschhoek-guesthouse",
    title: "Franschhoek Guesthouse Lighting Design",
    location: "Franschhoek, Western Cape",
    category: "lighting",
    categoryLabel: "LED Lighting",
    description:
      "Lighting design and installation for a 12-room boutique guesthouse and outdoor garden restaurant. Warm-white DALI-controlled LED with heritage-lantern feature pieces.",
    imageSrc: "/images/projects/franschhoek-guesthouse.jpg",
    imageAlt: "Boutique guesthouse garden terrace with warm architectural lighting",
    year: 2023,
    featured: false,
  },
];
