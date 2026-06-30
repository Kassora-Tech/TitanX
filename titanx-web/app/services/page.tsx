import type { Metadata } from "next";
import ServicesPageNav from "@/components/ServicesPageNav";
import ServicesHero from "@/components/ServicesHero";
import ServicesCardsSection from "@/components/ServicesCardsSection";
import ServicesCTABand from "@/components/ServicesCTABand";
import ServicesFooterBar from "@/components/ServicesFooterBar";

export const metadata: Metadata = {
  title: "Services | TitanX Group",
  description:
    "Expert electrical, LED lighting, solar, construction, roofing, tiling, and maintenance services from TitanX Group — Cape Town & Western Cape.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageNav />
      <main>
        <ServicesHero />
        <ServicesCardsSection />
        <ServicesCTABand />
      </main>
      <ServicesFooterBar />
    </>
  );
}
