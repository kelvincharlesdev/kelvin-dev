import { FormationsList as FormationsListContainer } from "@/containers/FormationsList";

import { formations } from "@/data/formations";

export const FormationsList = () => {
  return <FormationsListContainer formations={formations} />;
};
