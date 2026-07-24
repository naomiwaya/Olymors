import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Olymors Investment Limited's portfolio of engineering and construction projects across Nigeria.",
  alternates: { canonical: "https://olymors.com/projects" },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
