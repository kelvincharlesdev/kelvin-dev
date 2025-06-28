import { Title } from "../Title";

import * as I from "@/models/formation";

export const FormationItem = ({
  description,
  icon: Icon,
  institution,
  period,
  title,
}: I.FormationItem) => {
  return (
    <li className="flex space-x-6">
      <div className="flex h-auto flex-col items-center space-y-2">
        <div className="flex min-h-[60px] min-w-[60px] items-center justify-center overflow-hidden rounded-full border border-gray-700">
          {Icon && <Icon size={30} />}
        </div>
        <div className="dashed-custom h-full w-px" />
      </div>

      <div className="flex flex-col space-y-2 pt-4 text-sm text-gray-300 md:text-base">
        <Title as="h3">{title}</Title>
        <p>{institution}</p>
        <div className="flex w-fit items-center space-x-2 p-2 shadow-sm shadow-blue-700/50">
          <p>{period}</p>
        </div>
        <p>{description}</p>
      </div>
    </li>
  );
};
