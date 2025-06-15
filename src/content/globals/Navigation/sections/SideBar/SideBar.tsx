"use client";

import { usePathname } from "next/navigation";

import { SideBar as SideBarContainer } from "@/containers/Navigation/SideBar";

import linksNavigation from "@/data/linksNavigation.json";
import { contacts } from "@/data/contatos";

export const SideBar = () => {
  const pathName = usePathname();
  return (
    <SideBarContainer
      contacts={contacts}
      links={linksNavigation}
      pathName={pathName}
    />
  );
};
