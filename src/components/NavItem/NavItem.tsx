import Link from "next/link";

import * as I from "./NavItem.interface";

export const NavItem = ({ link, pathName, close }: I.NavItemProps) => {
  return (
    <li
      key={link.id}
      className={`rounded-lg border-b border-gray-600 p-2 text-sm text-gray-100 transition-colors last:border-b-0 hover:bg-gray-700 ${
        pathName === link.href ? "bg-gray-700" : ""
      }`}
    >
      <Link
        href={link.href}
        className="flex w-full text-gray-100"
        onClick={() => close && close()}
      >
        {link.label}
      </Link>
    </li>
  );
};
