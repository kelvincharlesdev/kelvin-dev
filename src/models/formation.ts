import { IconType } from "react-icons";

export interface FormationItem {
  id: number;
  icon: IconType;
  title: string;
  institution: string;
  period: string;
  description: string;
}
