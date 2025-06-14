"use client";

import { usePathname } from "next/navigation";

import { MobileHeader as ContainerMobileHeader } from "@/containers/Navigation";

import { contacts } from "@/data/contatos";
import linksNavigation from "@/data/linksNavigation.json";

export const MobileHeader = () => {
  const pathName = usePathname();
  return (
    <ContainerMobileHeader
      contacts={contacts}
      links={linksNavigation}
      pathName={pathName}
    />
  );
};
