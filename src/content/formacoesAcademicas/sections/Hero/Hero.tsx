import Link from "next/link";

import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { Hero as HeroContainer } from "@/containers/Hero";

export const Hero = () => {
  return (
    <HeroContainer>
      <Title className="text-gray-400">Formações Acadêmicas</Title>

      <div className="mt-6 flex gap-4">
        <Link href="/contato">
          <Button>Contatos</Button>
        </Link>
        <Link href="/projetos">
          <Button>Projetos</Button>
        </Link>
      </div>
    </HeroContainer>
  );
};
