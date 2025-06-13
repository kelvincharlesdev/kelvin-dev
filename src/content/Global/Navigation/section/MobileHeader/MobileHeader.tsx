"use client";

import { MobileHeader as ContainerMobileHeader } from "@/containers/Navigation";

import { contacts } from "@/data/contatos";
import linksNavigation from "@/data/linksNavigation.json";

export const MobileHeader = () => {
  return <ContainerMobileHeader contatos={contacts} links={linksNavigation} />;
};
