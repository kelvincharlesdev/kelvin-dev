import Link from "next/link";

import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { Hero as HeroContainer } from "@/containers/Hero";
import { RiGithubFill, RiVercelFill } from "react-icons/ri";

import * as I from "./Hero.interface";

export const Hero = ({ title, linkDeploy, linkGithub }: I.HeroProps) => {
  return (
    <HeroContainer>
      <Title>{title}</Title>

      <div className="mt-6 flex gap-4">
        <Link href={linkGithub} target="_blank" rel="noopener noreferrer">
          <Button>
            {
              <span className="flex items-center gap-2">
                <RiGithubFill />
                GitHub
              </span>
            }
          </Button>
        </Link>
        {linkDeploy && (
          <Link href={linkDeploy} target="_blank" rel="noopener noreferrer">
            <Button>
              <span className="flex items-center gap-2">
                <RiVercelFill />
                Deploy
              </span>
            </Button>
          </Link>
        )}
      </div>
    </HeroContainer>
  );
};
