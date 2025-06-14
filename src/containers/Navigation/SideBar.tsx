import { UserProfile } from "@/components/UserProfile";
import { NavItems } from "@/containers/NavItems/NavItems";
import { ContactLinks } from "../ContactLinks";

import * as I from "./Navigation.interface";

export const SideBar = ({ contacts, links, pathName }: I.NavigationProps) => {
  return (
    <aside className="sticky top-0 hidden h-screen max-w-72 flex-col border-r border-gray-700 bg-gray-800 p-6 md:flex">
      <UserProfile />
      <div className="mt-10 flex-1">
        <NavItems links={links} pathName={pathName} />
      </div>
      <ContactLinks contacts={contacts} />
    </aside>
  );
};
