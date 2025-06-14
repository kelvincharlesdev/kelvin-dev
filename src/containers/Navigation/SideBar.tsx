"use client";

import { NavItems } from "@/containers/NavItems/NavItems";
import { UserProfile } from "@/components/UserProfile";
import { contacts } from "@/data/contatos";
import linksNavigation from "@/data/linksNavigation.json";
import { usePathname } from "next/navigation";
import { ContactLinks } from "../ContactLinks";

export const SideBar = () => {
  const pathName = usePathname();
  return (
    <article className="sticky top-0 hidden h-screen max-w-72 flex-col border-r border-gray-700 bg-gray-800 p-6 md:flex">
      <UserProfile />
      <div className="mt-10 flex-1">
        <NavItems links={linksNavigation} pathName={pathName} />
      </div>
      <ContactLinks contacts={contacts} />
    </article>
  );
};
