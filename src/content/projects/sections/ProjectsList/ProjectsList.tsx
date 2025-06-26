"use client";

import { useState } from "react";
import { LuSearch } from "react-icons/lu";

import { useDebounce } from "@/hooks";

import { Input } from "@/components/Input";
import { ProjectsListPage } from "@/containers/ProjectsListPage";

import { projects } from "@/data/projects";

export const ProjectsList = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const debouncedValue = useDebounce(inputValue, 400);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    const inputText = debouncedValue.toLowerCase();

    const matchesTitle = project.title.toLowerCase().includes(inputText);

    const matchesTechnology = project.technologies?.some((tech) =>
      tech.toLowerCase().includes(inputText),
    );

    return matchesTitle || matchesTechnology;
  });

  return (
    <div className="mt-8">
      <Input
        label="Pesquisar projetos por nome ou tecnologia:"
        icon={<LuSearch className="text-gray-400" />}
        value={inputValue}
        onChange={onChange}
        placeholder="Pesquisar ..."
      />

      <div className="mt-4 min-h-[calc(100vh-385px)]">
        {filteredProjects.length === 0 ? (
          <p className="mt-4 text-gray-400">Nenhum projeto encontrado.</p>
        ) : (
          <ProjectsListPage projects={filteredProjects} />
        )}
      </div>
    </div>
  );
};
