import Link from "next/link";

import Card from "@/components/Card";
import * as I from "../../ProjectsList.interface";

export const ProjectsListDesktop = ({ projects }: I.ProjectsListProps) => {
  return (
    <ul className="hidden gap-8 rounded-lg border-1 border-gray-700 p-4 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      {projects.map((project) => (
        <li key={project.id} className="h-[280px]">
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
