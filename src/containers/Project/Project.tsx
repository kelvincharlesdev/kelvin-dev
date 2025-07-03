import { Title } from "@/components/Title";
import { UsedTechnologies } from "./components/UsedTechnologies";
import Image from "next/image";

import * as I from "./Project.interface";

export const Project = ({
  title,
  description,
  image,
  technologies,
}: I.ProjectProps) => {
  return (
    <div className="my-10 flex flex-col gap-x-10 rounded-lg border-1 border-blue-600/50 p-4 xl:flex-row">
      <div className="flex w-full items-center justify-center xl:w-[40%]">
        <Image src={image} alt={title} width={500} height={300} />
      </div>
      <div className="mt-4 w-full xl:mt-0 xl:w-[60%]">
        <Title as="h3">{title}</Title>
        <p className="mt-2 text-sm text-gray-400">{description}</p>

        <div className="mt-4 flex flex-col gap-4">
          <Title as="h4">Tecnologias utilizadas</Title>
          <UsedTechnologies technologies={technologies} />
        </div>
      </div>
    </div>
  );
};
