import Image from "next/image";

import { MobileMenu } from "./MobileMenu";
import * as I from "./Navigation.interface";

export const MobileHeader = ({ links, contatos }: I.NavigationProps) => {
  return (
    <header className="relative flex h-16 items-center border-b border-gray-700 px-2.5 md:hidden">
      <div className="flex flex-1 items-center gap-3">
        <Image
          src={"/images/foto-perfil.png"}
          alt="Logo Kelvin"
          width={38}
          height={38}
          className="rounded-full"
        />
        <div className="space-y-0 leading-tight">
          <h1 className="text-base text-gray-100">Kelvin Charles</h1>
          <span className="text-xs text-gray-300">Desenvolvedor Front-End</span>
        </div>
      </div>

      <MobileMenu contatos={contatos} links={links} />
    </header>
  );
};
