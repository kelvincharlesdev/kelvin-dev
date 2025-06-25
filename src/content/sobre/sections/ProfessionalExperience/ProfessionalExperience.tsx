import { ExperienceList } from "@/containers/ExperienceList";
import { Title } from "@/components/Title";
import { professionalExperience } from "@/data/professionalExperience";

export const ProfessionalExperience = () => {
  return (
    <div className="mt-15">
      <Title as="h3">Experiência Profissional</Title>
      <div className="mt-2">
        <ExperienceList experiences={professionalExperience} />
      </div>
    </div>
  );
};
