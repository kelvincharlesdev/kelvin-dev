"use client";

import Link from "next/link";

import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { ProjectsList as ProjectListContainer } from "@/containers/ProjectsList";

import { projects } from "@/data/projects";

export const ProjectsList = () => {
  const recentProjects = projects.slice(0, 3);
  return (
    <div className="mt-6 flex flex-col md:mt-8 md:space-y-6">
      <div className="flex items-center justify-between">
        <Title as="h3">Projetos</Title>
        <Link href="/projetos">
          <Button>Ver todos os projetos</Button>
        </Link>
      </div>

      <ProjectListContainer projects={recentProjects} />
    </div>
  );
};
