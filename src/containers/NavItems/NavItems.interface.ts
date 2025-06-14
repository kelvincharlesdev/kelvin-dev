import { LinkNavigation } from "@/models/linksNavegacao";

export interface NavItemProps {
  links: LinkNavigation[];
  pathName: string;
  close?: () => void;
}
