import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Hero as HeroContainer } from "@/containers/Hero";
import { Title } from "@/components/Title";

export const Hero = () => {
  return (
    <HeroContainer>
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start">
        <div>
          <Title className="text-gray-400">Olá, sou Kelvin &#128075;</Title>
          <Title as="h2" className="mt-2">
            Sou Desenvolvedor Front End
          </Title>
          <p className="mt-4 text-gray-400">
            Atuo como desenvolvedor front-end desde 2024, criando experiências
            digitais modernas.
          </p>

          <div className="mt-6 flex gap-4">
            <Link href="/contatos">
              <Button>Contatos</Button>
            </Link>
            <Link href="/sobre">
              <Button>Sobre</Button>
            </Link>
          </div>
        </div>
        <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full shadow-md shadow-blue-700/50">
          <Image
            src="/images/kelvin-cartoon.png"
            alt="Imagem de Kelvin Charles"
            className="rounded-full"
            width={136}
            height={136}
          />
        </div>
      </div>
    </HeroContainer>
  );
};
