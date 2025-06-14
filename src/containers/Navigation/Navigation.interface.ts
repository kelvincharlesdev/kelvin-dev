import { Contact } from "@/models/contatos";
import { LinkNavigation } from "@/models/linksNavegacao";

export interface NavigationProps {
  links: LinkNavigation[];
  contacts: Contact[];
  pathName: string;
}
