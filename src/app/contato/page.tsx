import { Metadata } from "next";
import { ContactLinks, FAQ, Form, Hero } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato comigo para discutir projetos, colaborações ou qualquer outra questão.",
};

export default function ContatoPage() {
  return (
    <>
      <Hero />
      <div className="my-10 flex flex-col gap-x-10 lg:lg:flex-row">
        <Form />
        <ContactLinks />
      </div>
      <FAQ />
    </>
  );
}
