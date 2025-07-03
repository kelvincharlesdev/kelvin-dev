import Card from "@/components/Card";

import * as I from "./UsedTechnologies.inetrafce";

export const UsedTechnologies = ({ technologies }: I.UsedTechnologiesProps) => {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <li key={tech.label}>
          <Card.Wrapper>
            <span className="flex items-center gap-2">
              <tech.icon size={30} /> {tech.label}
            </span>
          </Card.Wrapper>
        </li>
      ))}
    </ul>
  );
};
