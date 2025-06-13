"use client";

import { MobileHeader as ContainerMobileHeader } from "@/containers/Navigation";

import { contatos } from "@/data/contatos";
import linksNavigation from "@/data/linksNavigation.json";

export const MobileHeader = () => {
  return <ContainerMobileHeader contatos={contatos} links={linksNavigation} />;
};
