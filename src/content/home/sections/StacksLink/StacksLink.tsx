import { Title } from "@/components/Title";
import { StacksList as StacksListContainer } from "@/containers/StacksList";

import { stacks } from "@/data/stacks";

export const StacksList = () => {
  return (
    <div className="mt-8 flex flex-col space-y-6 pb-8">
      <Title as="h3">Stacks</Title>
      <StacksListContainer stacks={stacks} />
    </div>
  );
};
