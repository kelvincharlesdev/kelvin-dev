import { FormationItem } from "@/components/FormationItem";

import * as I from "./FormationsList.interface";

export const FormationsList = ({ formations }: I.FormationsListProps) => {
  return (
    <ul className="grid gap-y-6 py-10 lg:grid-cols-2 lg:space-x-14 xl:space-x-30">
      {formations.map((formation) => (
        <FormationItem
          key={formation.id}
          id={formation.id}
          icon={formation.icon}
          title={formation.title}
          institution={formation.institution}
          period={formation.period}
          description={formation.description}
        />
      ))}
    </ul>
  );
};
