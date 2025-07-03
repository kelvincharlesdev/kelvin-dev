import Link from "next/link";

import Card from "@/components/Card";

import * as I from "./ProjectsListPage.interface";

export const ProjectsListPage = ({ projects }: I.ProjectsListPageProps) => {
  return (
    <ul className="grid gap-8 rounded-lg border-1 border-gray-700 p-4 lg:grid-cols-2">
      {projects.map((project) => (
        <li key={project.id} className="h-[300px] xl:h-[400px]">
          <Link href={`/projetos/projeto/${project.slug}`}>
            <Card.Wrapper>
              <Card.ImageBackground imageUrl={project.image} />
              <Card.Footer>
                <h2 className="text-sm font-bold text-gray-100">
                  {project.title}
                </h2>
                <p className="text-sm font-bold text-gray-100">Saiba mais!</p>
              </Card.Footer>
            </Card.Wrapper>
          </Link>
        </li>
      ))}
    </ul>
  );
};
