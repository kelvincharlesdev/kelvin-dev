import { ContactItem } from "@/components/ContactItem";

import * as I from "./ContactLinksPage.interface";

export const ContactLinksPage = ({ contacts }: I.ContactLinksPageProps) => {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-1">
      {contacts?.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          label
          className="max-w-64 p-4 transition-transform hover:scale-[1.02]"
        />
      ))}
    </ul>
  );
};
