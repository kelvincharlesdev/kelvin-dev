import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaBrain,
  FaConnectdevelop,
} from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandTailwind,
} from "react-icons/tb";
import { SiCssmodules, SiAngular } from "react-icons/si";

import { ProjectProps } from "@/models/projects";

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Dogs Next",
    slug: "dogs-next",
    image: "/images/projects/dogs-next.png",
    linkDeploy: "https://dogs-next-g4pa.vercel.app/",
    linkGithub: "https://github.com/kelvincharlesdev/dogs-next",
    description:
      "Rede social para cachorros com autenticação, upload de fotos e curtidas.  Acesse o deploy para navegar ou veja o código-fonte completo",
    technologies: [
      { label: "JavaScript", icon: FaJsSquare },
      { label: "TypeScript", icon: TbBrandTypescript },
      { label: "React", icon: FaReact },
      { label: "Next.js", icon: TbBrandNextjs },
      { label: "CSS Modules", icon: SiCssmodules },
    ],
  },
  {
    id: 2,
    title: "Finance AI",
    slug: "finance-ai",
    image: "/images/projects/finance-ai.png",
    linkDeploy: "https://finance-manager-q78m.vercel.app/login",
    linkGithub: "https://github.com/kelvincharlesdev/finance-manager",
    description:
      "Gerenciador financeiro com inteligência artificial para análise de gastos e sugestões inteligentes.  Acesse o deploy para navegar ou veja o código-fonte completo",
    technologies: [
      { label: "JavaScript", icon: FaJsSquare },
      { label: "React", icon: FaReact },
      { label: "Next.js", icon: TbBrandNextjs },
      { label: "TypeScript", icon: TbBrandTypescript },
      { label: "AI", icon: FaBrain },
      { label: "Prisma", icon: FaConnectdevelop },
      { label: "Tailwind", icon: TbBrandTailwind },
    ],
  },
  {
    id: 3,
    title: "Plenn-er",
    slug: "plenn-er",
    image: "/images/projects/plenner.png",
    linkDeploy: "https://plenn-er.vercel.app/",
    linkGithub: "https://github.com/kelvincharlesdev/plenn.er",
    description:
      "Aplicativo de planejamento semanal com foco em produtividade. Crie tarefas e organize sua semana. Acesse o deploy para navegar ou veja o código-fonte completo",
    technologies: [
      { label: "JavaScript", icon: FaJsSquare },
      { label: "TypeScript", icon: TbBrandTypescript },
      { label: "React", icon: FaReact },
      { label: "Next.js", icon: TbBrandNextjs },
      { label: "Axios", icon: SiAngular },
      { label: "Tailwind", icon: TbBrandTailwind },
    ],
  },
  {
    id: 4,
    title: "Twitter Clone",
    slug: "twitter-clone",
    image: "/images/projects/twitter-clone.png",
    linkDeploy: "https://twitter-clone-eosin-five.vercel.app/home",
    linkGithub: "#",
    description:
      "Clone do Twitter com interface moderna, autenticação e sistema de posts. Acesse o deploy para navegar ou veja o código-fonte completo",
    technologies: [
      { label: "JavaScript", icon: FaJsSquare },
      { label: "TypeScript", icon: TbBrandTypescript },
      { label: "React", icon: FaReact },
      { label: "Next.js", icon: TbBrandNextjs },
      { label: "Tailwind", icon: TbBrandTailwind },
    ],
  },
  {
    id: 5,
    title: "Poke Next",
    slug: "poke-next",
    image: "/images/projects/poke-next.png",
    linkDeploy: "https://poke-next-chi-ecru.vercel.app/",
    linkGithub: "https://github.com/kelvincharlesdev/twitter-clone",
    description:
      "Catálogo de Pokémons com páginas dinâmicas e dados da PokéAPI. Acesse o deploy para navegar ou veja o código-fonte completo.",
    technologies: [
      { label: "JavaScript", icon: FaJsSquare },
      { label: "TypeScript", icon: TbBrandTypescript },
      { label: "React", icon: FaReact },
      { label: "Next.js", icon: TbBrandNextjs },
      { label: "Css Modules", icon: SiCssmodules },
    ],
  },
  {
    id: 6,
    title: "GitHub API",
    slug: "github-api",
    image: "/images/projects/github-api.png",
    linkDeploy: "https://projeto-mundo-real-fetch-api-github.vercel.app/",
    linkGithub:
      "https://github.com/kelvincharlesdev/projeto-mundo-real-fetch-api-github",
    description:
      "Consome a API do GitHub para buscar usuários e repositórios. Acesse o deploy para navegar ou veja o código-fonte completo",
    technologies: [
      { label: "HTML", icon: FaHtml5 },
      { label: "JavaScript", icon: FaJsSquare },
      { label: "CSS", icon: FaCss3 },
    ],
  },
];
