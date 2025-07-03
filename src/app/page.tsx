import { Hero, ProjectsList, StacksList } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsList title={"Projetos"} />
      <StacksList />
    </>
  );
}
