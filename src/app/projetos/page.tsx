import { Metadata } from "next";
import { Hero, ProjectsList } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Aqui estão alguns dos projetos em que trabalhei, demonstrando minhas habilidades e experiências.",
};

export default function ProjetosPage() {
  return (
    <>
      <Hero />
      <ProjectsList />
    </>
  );
}
