import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Hero, Project, ProjectsList } from "@/content/project";
import { projects } from "@/data/projects";

export async function generateMetadata(props: {
  params: { projectName: string };
}): Promise<Metadata> {
  const { projectName } = await Promise.resolve(props.params);
  const project = projects.find((proj) => proj.slug === projectName);

  return {
    title: project ? project.title : "Projeto não encontrado",
  };
}

export default async function ProjectIdPage({
  params,
}: {
  params: { projectName: string };
}) {
  const { projectName } = await Promise.resolve(params);
  const project = projects.find((proj) => proj.slug === projectName);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Hero
        title={project.title}
        linkDeploy={project.linkDeploy}
        linkGithub={project.linkGithub}
      />
      <Project
        id={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        linkGithub={project.linkGithub}
        linkDeploy={project.linkDeploy}
      />

      <ProjectsList title={"Ver mais projetos"} projectActual={projectName} />
    </>
  );
}
