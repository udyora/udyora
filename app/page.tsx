import About from "@/components/about";
import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import ProfileBadge from "@/components/common/profile-badge";
import { ScrollTextHighlight } from "@/components/common/scroll-text-highlighter";
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
      <ScrollTextHighlight text="We simplify complex project processes by providing end-to-end business and regulatory services for industrial, commercial, institutional, and infrastructure projects. From land due diligence and statutory approvals to aerial surveys, 3D visualization, and business development support, Udyora brings every critical requirement together through a single, coordinated point of contact." />
      <About />
      <Forte />
      <Projects />
      <WhyUdyora />
      <Team />
      <Connect />
      <Footer />
      <ProfileBadge />
    </>
  );
}
