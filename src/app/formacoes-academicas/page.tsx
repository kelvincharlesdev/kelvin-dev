import { Metadata } from "next";
import { FormationsList, Hero } from "@/content/FormationAcademics";

export const metadata: Metadata = {
  title: "Formações Acadêmicas",
  description:
    "Aqui estão minhas formações acadêmicas e cursos que contribuíram para minha carreira.",
};

export default function FormacoesAcademicasPage() {
  return (
    <>
      <Hero />
      <FormationsList />
    </>
  );
}
