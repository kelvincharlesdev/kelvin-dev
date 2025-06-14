import Link from "next/link";

import * as I from "./ContactItem.interface";

export const ContactItem = ({ contact }: I.ContactItemProps) => {
  return (
    <li key={contact.id}>
      <Link
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex rounded-lg border border-gray-700 p-2 text-gray-100 transition-transform hover:scale-110 hover:border-blue-600"
      >
        {contact.icon && <contact.icon />}
      </Link>
    </li>
  );
};
