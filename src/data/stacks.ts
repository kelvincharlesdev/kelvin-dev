import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandTailwind,
} from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";

export const stacks = [
  {
    id: 1,
    title: "HTML",
    label: "Linguagem de marcação",
    icon: FaHtml5,
    link: "https://www.w3schools.com/html/",
  },
  {
    id: 2,
    title: "CSS",
    label: "Linguagem de estilo",
    icon: FaCss3,
    link: "https://www.w3schools.com/css/",
  },
  {
    id: 3,
    title: "JavaScript",
    label: "Linguagem de script",
    icon: FaJsSquare,
    link: "https://www.w3schools.com/js/",
  },
  {
    id: 4,
    title: "TypeScript",
    label: "Superset do JavaScript com tipagem",
    icon: TbBrandTypescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 5,
    title: "React",
    label: "Biblioteca para construção de interfaces",
    icon: FaReact,
    link: "https://react.dev/",
  },
  {
    id: 6,
    title: "Next.js",
    label: "Framework para aplicações React",
    icon: TbBrandNextjs,
    link: "https://nextjs.org/",
  },
  {
    id: 7,
    title: "Styled Components",
    label: "Biblioteca para estilização de componentes",
    icon: SiStyledcomponents,
    link: "https://styled-components.com/",
  },
  {
    id: 8,
    title: "Tailwind CSS",
    label: "Framework CSS utilitário",
    icon: TbBrandTailwind,
    link: "https://tailwindcss.com/",
  },
];
