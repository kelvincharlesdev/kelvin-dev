import { IconType } from "react-icons";

export interface StackCardProps {
  id?: number;
  title: string;
  label: string;
  icon: IconType;
  link?: string;
}
