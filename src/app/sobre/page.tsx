import { Metadata } from "next";
import {
  Hero,
  ProfessionalExperience,
  StacksList,
  WhoIAm,
} from "@/content/sobre";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Saiba mais sobre mim, minha experiência profissional e as tecnologias que utilizo.",
};

export default function SobrePage() {
  return (
    <>
      <Hero />
      <WhoIAm />
      <ProfessionalExperience />
      <StacksList />
    </>
  );
}
