"use client";

import Link from "next/link";

import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { ProjectsList as ProjectListContainer } from "@/containers/ProjectsList";

import { projects } from "@/data/projects";

import * as I from "./ProjectsList.interface";

export const ProjectsList = ({ title, projectActual }: I.ProjectsListProps) => {
  const projectFilter = projects.filter(
    (project) => project.slug !== projectActual,
  );
  const recentProjects = projectFilter.slice(0, 3);
  return (
    <section className="mt-6 flex flex-col md:mt-8 md:space-y-6">
      <div className="flex items-center justify-between">
        <Title as="h3">{title}</Title>
        <Link href="/projetos">
          <Button>Ver todos os projetos</Button>
        </Link>
      </div>

      <ProjectListContainer projects={recentProjects} />
    </section>
  );
};
