import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesPageNav from "@/components/ServicesPageNav";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import ServicesCTABand from "@/components/ServicesCTABand";
import ServicesFooterBar from "@/components/ServicesFooterBar";
import { services } from "@/lib/data/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | TitanX Group`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <ServicesPageNav />
      <main>
        <ServiceDetailHero service={service} />
        <ServiceDetailContent service={service} />
        <ServicesCTABand />
      </main>
      <ServicesFooterBar />
    </>
  );
}
