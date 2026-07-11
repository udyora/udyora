import SectionHeader from "./common/section-header";

const teamMembers = [
  {
    image: "/satish-rawat.png",
    name: "Satish Rawat",
    designation: "Growth Director",
  },
  {
    image: "/soumyajit-mishra.png",
    name: "Soumyajit Mishra",
    designation: "Principal Architect",
  },
  {
    image: "/aaditya.png",
    name: "Aditya Fogat",
    designation: "Chartered Accountant",
  },
];
export default function Team() {
  return (
    <section id="team" className="container pt-16 lg:pt-24 scroll-mt-10">
      <SectionHeader
        title="Team"
        description="Meet the professionals behind Udyora who bring together regulatory expertise, technical knowledge, and coordinated execution to simplify complex approval journeys."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="group overflow-hidden rounded-md border border-white/10"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-fraunces text-2xl lg:text-3xl text-beige-100">
                {member.name}
              </h3>

              <p className="mt-2 text-subtitle">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
