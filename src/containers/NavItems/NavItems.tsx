import { NavItem } from "@/components/NavItem";

import * as I from "./NavItems.interface";

export const NavItems = ({ links, pathName, close }: I.NavItemProps) => {
  return (
    <ul className="flex flex-1 flex-col gap-2">
      {links?.map((link) => (
        <NavItem key={link.id} link={link} pathName={pathName} close={close} />
      ))}
    </ul>
  );
};
