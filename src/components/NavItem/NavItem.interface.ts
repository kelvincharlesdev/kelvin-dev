import { LinkNavigation } from "@/models/linksNavegacao";

export interface NavItemProps {
  link: LinkNavigation;
  pathName: string;
  close?: () => void;
}
