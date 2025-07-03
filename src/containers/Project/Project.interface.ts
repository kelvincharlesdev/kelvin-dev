import { Technology } from "@/models/projects";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
}
