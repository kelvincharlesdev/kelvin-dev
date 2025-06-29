import { Title } from "@/components/Title";
import { ContactLinksPage } from "@/containers/ContactLinksPage";
import { contacts } from "@/data/contatos";

export const ContactLinks = () => {
  return (
    <section className="mt-10 lg:mt-0 lg:w-[40%]">
      <Title as="h3">Conecte-se comigo</Title>
      <ContactLinksPage contacts={contacts} />
    </section>
  );
};
