import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { Hero as HeroSobre } from "@/containers/Hero";
import Link from "next/link";

export const Hero = () => {
  return (
    <HeroSobre>
      <Title>Sobre</Title>

      <div className="mt-10 flex gap-4">
        <Link href="/contato">
          <Button>Contatos</Button>
        </Link>
        <Link href="/formacoes-academicas">
          <Button>Formações Acadêmicas</Button>
        </Link>
      </div>
    </HeroSobre>
  );
};
