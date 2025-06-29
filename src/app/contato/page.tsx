import { ContactLinks, Form, Hero } from "@/content/contact";

export default function ContatoPage() {
  return (
    <>
      <Hero />
      <div className="my-10 flex flex-col gap-x-10 lg:lg:flex-row">
        <Form />
        <ContactLinks />
      </div>
    </>
  );
}
