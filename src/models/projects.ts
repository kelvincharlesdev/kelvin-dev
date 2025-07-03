import { IconType } from "react-icons";

export interface Technology {
  label: string;
  icon: IconType;
}

export interface ProjectProps {
  id: number;
  title: string;
  slug?: string;
  image: string;
  linkDeploy?: string;
  linkGithub: string;
  technologies?: Technology[];
  description?: string;
}
