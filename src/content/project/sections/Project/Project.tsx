import { Project as ProjectContainer } from "@/containers/Project";
import { ProjectProps } from "@/models/projects";

export const Project = ({
  image,
  technologies,
  title,
  description,
}: ProjectProps) => {
  return (
    <section className="mt-10">
      <ProjectContainer
        description={description ?? ""}
        title={title}
        image={image}
        technologies={technologies ?? []}
      />
    </section>
  );
};
