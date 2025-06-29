import Link from "next/link";

import * as I from "./ContactItem.interface";

export const ContactItem = ({
  contact,
  label,
  className,
}: I.ContactItemProps) => {
  return (
    <li key={contact.id}>
      <Link
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex rounded-lg border border-gray-700 p-2 text-gray-100 transition-transform hover:scale-110 hover:border-blue-600 ${className ?? ""} `}
      >
        {contact.icon && <contact.icon />}
        {label && <p className="ml-2 text-sm font-medium">{contact.label}</p>}
      </Link>
    </li>
  );
};
