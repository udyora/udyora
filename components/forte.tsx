import { ArrowUp } from "lucide-react";
import SectionHeader from "./common/section-header";

const services = [
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
];

export default function Forte() {
  return (
    <section id="forte" className="container pt-16 lg:pt-24 scroll-mt-10">
      <SectionHeader
        title="Forte"
        description="Complete approval lifecycle under one roof. We simplify complex regulatory processes and accelerate project execution through integrated approval solutions."
      />

      <div className="grid gap-8 border-t border-white/10 pt-4 lg:pt-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${index === services.length - 1 && "border-b-0!"} group border-b border-white/10 py-2 lg:py-3`}
            >
              <div className="flex items-start justify-center lg:justify-between gap-3 sm:gap-4 md:gap-6">
                <div>
                  <h3 className="text-lg font-medium max-lg:text-center text-beige-80 transition-all duration-300 group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <p className="mt-1 max-w-2xl max-lg:text-center max-sm:text-sm text-subtitle">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="sticky max-md:aspect-4/3 max-lg:aspect-4/2 top-24 h-full overflow-hidden rounded-md border border-[#fff9f333]">
            <img
              src="/services.webp"
              alt="Core Services"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
