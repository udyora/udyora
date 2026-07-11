import About from "@/components/about";
import Footer from "@/components/common/footer";
import Connect from "@/components/connect";
import Forte from "@/components/forte";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Team from "@/components/team";
import WhyUdyora from "@/components/why-udyora";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Forte />
      <WhyUdyora />
      <Team />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
}
