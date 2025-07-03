import Link from "next/link";

import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-33px)] flex-col items-center justify-center gap-4 p-8 text-center">
      <Title as="h1">Projeto não encontrado!</Title>
      <p className="text-gray-400">
        O projeto que você está tentando acessar não existe ou foi removido.
      </p>
      <Link href="/projetos">
        <Button>Voltar para projetos</Button>
      </Link>
    </div>
  );
}
