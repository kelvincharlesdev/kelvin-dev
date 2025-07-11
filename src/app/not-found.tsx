import Link from "next/link";

import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-33px)] flex-col items-center justify-center gap-4 p-8 text-center">
      <Title as="h1">404 - Página não encontrada</Title>
      <p className="text-gray-400">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link href="/projetos">
        <Button>Voltar ao início</Button>
      </Link>
    </div>
  );
}
