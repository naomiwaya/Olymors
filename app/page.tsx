import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Olymors Investment Limited | Engineering Value. Delivering Excellence.",
  description:
    "Olymors Investment Limited delivers reliable engineering, construction, contract execution, and commercial solutions for infrastructure development and long-term value creation in Nigeria.",
  alternates: {
    canonical: "https://olymors.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <ProjectsSection limit={6} />
      <ContactSection />
    </>
  );
}
