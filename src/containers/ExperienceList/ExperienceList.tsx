import { ExperienceItem } from "@/components/ExperienceItem";

import * as I from "./ExperienceList.interface";

export const ExperienceList = ({ experiences }: I.ExperienceListProps) => {
  return (
    <ul>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} {...experience} />
      ))}
    </ul>
  );
};
