import { Contact } from "@/models/contatos";

export interface ContactItemProps {
  contact: Contact;
  label?: boolean;
  className?: string;
}
