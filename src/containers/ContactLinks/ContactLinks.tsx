import { ContactItem } from "@/components/ContactItem";

import * as I from "./ContactLinks.interface";

export const ContactLinks = ({ contacts }: I.ContactItemProps) => {
  return (
    <div className="mt-20">
      <h1 className="flex border-b border-gray-600 pb-2 text-xs text-gray-300">
        Conecte-se comigo
      </h1>
      <ul className="mt-4 flex items-center gap-2">
        {contacts?.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
