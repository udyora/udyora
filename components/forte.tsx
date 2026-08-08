import SectionHeader from "./common/section-header";
import Image from "next/image";

const servicesOne = [
  {
    title: "Land Due Diligence",
    description:
      "Ownership verification, zoning assessment, feasibility analysis, and comprehensive regulatory review before project initiation.",
  },
  {
    title: "Change of Land Use",
    description:
      "End-to-end documentation, application preparation, and coordination for seamless land use conversion approvals.",
  },
  {
    title: "Building Plan Approval",
    description:
      "Preparation and submission of compliant architectural and engineering plans for statutory approvals.",
  },
  {
    title: "Environmental Clearance",
    description:
      "Regulatory support, statutory documentation, and environmental compliance management for project approvals.",
  },
  {
    title: "Fire Safety Approval",
    description:
      "Comprehensive fire compliance planning, documentation, and coordination with relevant authorities.",
  },
];

const servicesTwo = [
  {
    title: "Occupancy Certification",
    description:
      "Final inspections, authority liaison, and certification support to ensure operational readiness.",
  },
  {
    title: "Tool And Prototype Design",
    description:
      "Concept design, precision engineering, and rapid prototyping to validate ideas and accelerate product development.",
  },
  {
    title: "Aerial Surveillance & Survey",
    description:
      "Delivering high-precision aerial inspections, mapping, monitoring, and data intelligence for safer, faster, and smarter project execution.",
  },
  {
    title: "3D Rendering & Walkthroughs",
    description:
      "Transforming concepts into immersive visual experiences with realistic 3D renderings and interactive project walkthroughs.",
  },
  {
    title: "Business Development Support",
    description:
      "Empowering business growth through strategic advisory, market expansion, partnerships, and end-to-end project development support.",
  },
];

export default function Forte() {
  return (
    <section id="forte" className="container scroll-mt-10 pt-16 lg:pt-24">
      <SectionHeader
        title="Forte"
        description="Complete approval lifecycle under one roof. We simplify complex regulatory processes and accelerate project execution through integrated approval solutions."
      />

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-12 lg:gap-12">
        {/* Services */}
        <div className="lg:col-span-6">
          {servicesOne.map((service, index) => (
            <div
              key={service.title}
              className={`group border-b border-white/10 py-3 border-t`}
            >
              <h3 className="text-lg font-medium text-beige-80 transition-transform duration-300 group-hover:translate-x-2 max-lg:text-center">
                {service.title}
              </h3>

              <p className="mt-1 max-w-2xl text-subtitle max-lg:mx-auto max-lg:text-center max-sm:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="lg:col-span-6">
          {/* <div className="relative h-full max-lg:aspect-4/4 lg:min-h-105 overflow-hidden rounded-md border border-[#fff9f333]">
            <Image
              src="/services.webp"
              alt="Core Services"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover max-lg:object-bottom"
            />
          </div> */}
          {servicesTwo.map((service, index) => (
            <div
              key={service.title}
              className={`group border-b border-t pt-3! border-white/10 py-3`}
            >
              <h3 className="text-lg font-medium text-beige-80 transition-transform duration-300 group-hover:translate-x-2 max-lg:text-center">
                {service.title}
              </h3>

              <p className="mt-1 max-w-2xl text-subtitle max-lg:mx-auto max-lg:text-center max-sm:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
