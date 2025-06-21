import { Hero, ProjectsList } from "@/content/home";
import { StacksList } from "@/content/home/sections/StacksLink/StacksLink";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsList />
      <StacksList />
    </>
  );
}
