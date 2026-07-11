import SectionHeader from "./common/section-header";

const reasons = [
  {
    icon: "/window.svg",
    title: "Single-Window Coordination",
    description:
      "A centralized approach for managing approvals across multiple authorities.",
  },
  {
    icon: "/shield-check.svg",
    title: "Regulatory Expertise",
    description:
      "Deep understanding of statutory frameworks and end-to-end approval processes.",
  },
  {
    icon: "/document-line.svg",
    title: "Technical Documentation",
    description:
      "Accurate, comprehensive and compliant documentation prepared by multidisciplinary experts.",
  },
  {
    icon: "/clipboard-check.svg",
    title: "Compliance-Driven Execution",
    description:
      "Every stage is executed with strict regulatory compliance and quality assurance.",
  },
  {
    icon: "/clock-arrow.svg",
    title: "Reduced Approval Timelines",
    description:
      "Optimized workflows and proactive follow-ups to minimize delays and accelerate execution.",
  },
  {
    icon: "/precision-tool-engineering.svg",
    title: "Precision Tool Engineering",
    description:
      "Custom tooling and prototype development for faster innovation and product readiness.",
  },
];

export default function WhyUdyora() {
  return (
    <section id="why" className="container pt-16 lg:pt-24 scroll-mt-10">
      <SectionHeader
        title="Value"
        description="At Udyora, we transform complex challenges into practical solutions through engineering excellence, regulatory expertise, and strategic consulting-delivering projects with precision, efficiency, and confidence."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group rounded-md flex flex-col items-center border border-white/10 bg-white/2 p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-beige-100/30"
          >
            <div className="flex size-20 items-center justify-center rounded-full border border-beige-100/20 bg-white">
              <img
                src={reason.icon}
                alt={reason.title}
                className="size-10 opacity-90 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-4 lg:mt-6 text-center text-2xl lg:text-3xl font-fraunces leading-tight text-beige-100">
              {reason.title}
            </h3>

            <p className="mt-4 leading-relaxed text-center text-subtitle">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
