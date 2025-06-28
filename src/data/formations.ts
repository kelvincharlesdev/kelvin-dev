import { RiGraduationCapFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiJavascript,
} from "react-icons/si";

import { FormationItem } from "@/models/formation";

export const formations: FormationItem[] = [
  {
    id: 1,
    icon: RiGraduationCapFill,
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Cruzeiro do Sul Unifran",
    period: "Julho de 2023 – Julho de 2025",
    description:
      "Formação de nível superior com ênfase na prática e no uso de tecnologias atuais. O curso prepara profissionais para criar, manter e evoluir sistemas e aplicações com foco nas demandas reais do mercado.",
  },
  {
    id: 2,
    icon: SiNextdotjs,
    title: "Next.JS",
    institution: "Origamid",
    period: "2025 - 22 Horas",
    description:
      "Curso prático de 22 horas focado em Next.js, abordando conceitos de SSR, SSG, rotas dinâmicas e otimizações para aplicações React modernas.",
  },
  {
    id: 3,
    icon: SiNextdotjs,
    title: "Next.JS",
    institution: "B7Web Bonieky",
    period: "2025 - 30 Horas",
    description:
      "Curso prático de 30 horas focado em Next.js, abordando conceitos de SSR, SSG, rotas dinâmicas e otimizações para aplicações React modernas.",
  },
  {
    id: 4,
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    institution: "B7Web Bonieky",
    period: "2025 - 20 Horas",
    description:
      "Curso prático de 20 horas focado em Tailwind CSS, ensinando a criar layouts responsivos e estilizados com classes utilitárias, promovendo rapidez e eficiência no desenvolvimento front-end.",
  },
  {
    id: 5,
    icon: SiTypescript,
    title: "Typescript",
    institution: "B7Web Bonieky",
    period: "2025 - 20 Horas",
    description:
      "Curso de 20 horas que aborda os fundamentos do TypeScript, incluindo tipagem estática, interfaces, generics e integração com JavaScript para aumentar a segurança e a escalabilidade dos projetos.",
  },
  {
    id: 6,
    icon: SiReact,
    title: "Desenvolvimento Web Front End React",
    institution: "Raro Academy",
    period: "Agosto de 2023 – Novembro de 2023",
    description:
      "Curso imersivo focado em React, iniciando com fundamentos de lógica, HTML, Styled Components e JavaScript. O foco principal foi no desenvolvimento com React, com aulas ao vivo, exercícios semanais e um projeto final em equipe para simular o ambiente real de trabalho.",
  },
  {
    id: 7,
    icon: SiJavascript,
    title: "Desenvolvimento Web Front End",
    institution: "DevQuest - Dev Em Dobro",
    period: "Agosto de 2022 – Agosto de 2023",
    description:
      "Curso intensivo focado na base do desenvolvimento front-end. Abrange versionamento com Git, lógica de programação, HTML, CSS, JavaScript, TypeScript, programação orientada a objetos e construção de interfaces com React.",
  },
];
