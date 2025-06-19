import { CarouselProjects, ProjectsListDesktop } from "./components";

import * as I from "./ProjectsList.interface";

export const ProjectsList = ({ projects }: I.ProjectsListProps) => {
  return (
    <>
      <CarouselProjects projects={projects} />
      <ProjectsListDesktop projects={projects} />
    </>
  );
};
