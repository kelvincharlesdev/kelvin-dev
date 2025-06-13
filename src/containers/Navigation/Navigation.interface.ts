import { Contato } from "@/models/contatos";
import { LinkNavegacao } from "@/models/linksNavegacao";

export interface NavigationProps {
  links: LinkNavegacao[];
  contatos: Contato[];
}
