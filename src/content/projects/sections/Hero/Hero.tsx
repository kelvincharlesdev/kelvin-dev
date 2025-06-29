import { Hero as HeroProjects } from "@/containers/Hero";
import { Title } from "@/components/Title";
import Link from "next/link";
import { Button } from "@/components/Button";

export const Hero = () => {
  return (
    <div>
      <HeroProjects>
        <Title>Projetos</Title>

        <div className="mt-10 flex gap-4">
          <Link href="/contato">
            <Button>Contatos</Button>
          </Link>
          <Link href="/curiosidades">
            <Button>Curiosidades</Button>
          </Link>
        </div>
      </HeroProjects>
    </div>
  );
};
