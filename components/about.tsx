import { ArrowUp, Star } from "lucide-react";
import SectionHeader from "./common/section-header";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="container pt-16 lg:pt-24 scroll-mt-10">
      <SectionHeader
        title="About"
        description="Discover how Udyora simplifies complex approval journeys through regulatory expertise, technical precision, and coordinated execution."
      />
      <div className="rounded-md border border-white/10 overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative w-full h-full aspect-4/4 md:aspect-4/3 overflow-hidden">
            <Image
              src="/about-udyora.webp"
              alt="About Udyora"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover w-full object-center"
            />
          </div>
          <div className="flex flex-col justify-center py-4 sm:py-6 pr-4 pl-4 max-lg:pt-0! lg:pl-0 lg:pr-6">
            <span className="mb-3 w-fit flex items-center gap-2 rounded-sm bg-[#2c2c2cb3] max-sm:text-sm px-2 sm:px-3 py-2 text-beige-100">
              <Star className="size-4 sm:size-5.5" size={22} /> Regulatory
              Excellence
            </span>

            <h3 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl leading-tight text-beige-100">
              Your Trusted Partner for Seamless Project Execution
            </h3>

            <p className="mt-3 sm:mt-4 md:mt-6 sm:text-lg sm:leading-relaxed text-subtitle">
              Udyora Ventures Pvt Ltd is a project advisory and single-window
              solutions company, providing integrated support to businesses and
              development projects throughout the project lifecycle.
            </p>

            <p className="mt-2 sm:text-lg sm:leading-relaxed text-subtitle">
              Our multidisciplinary expertise covers Land Due Diligence, Change
              of Land Use, Building Plan Approval, Environmental Clearance, Fire
              Safety Approval, Occupancy Certification, Aerial Surveillance &
              Survey, 3D Rendering & Walkthroughs, and Business Development
              Support.
            </p>
            <p className="mt-2 sm:text-lg sm:leading-relaxed text-subtitle">
              By bringing diverse expertise under one roof, we streamline
              complex requirements, coordinate critical processes, and enable
              our clients to move from planning to execution with greater
              efficiency, clarity, and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
