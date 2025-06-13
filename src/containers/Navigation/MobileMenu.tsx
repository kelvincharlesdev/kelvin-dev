import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import { AnimateButton } from "@/components/AnimateButton";

import * as I from "./Navigation.interface";

export const MobileMenu = ({ links, contatos }: I.NavigationProps) => {
  const pathName = usePathname();

  return (
    <Popover>
      <div className="border border-gray-700">
        <PopoverButton className="cursor-pointer p-2">
          {({ open }) => <AnimateButton open={open} />}
        </PopoverButton>
      </div>
      <PopoverPanel
        transition
        anchor="bottom"
        className="flex h-screen min-w-[60%] flex-col rounded-l-lg bg-gray-800 p-4 transition duration-200 ease-in-out [--anchor-gap:--spacing(3)] data-closed:-translate-y-1 data-closed:opacity-0"
      >
        <ul className="flex flex-1 flex-col gap-2">
          {links?.map((link) => (
            <li
              key={link.id}
              className={`rounded-lg border-b border-gray-600 p-2 text-sm text-gray-100 transition-colors last:border-b-0 hover:bg-gray-700 ${pathName === link.href && "bg-gray-700"}`}
            >
              <Link href={link.href} className="text-gray-100">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <h1 className="flex border-b border-gray-600 pb-2 text-xs text-gray-300">
            Conecte-se comigo
          </h1>
          <ul className="mt-4 flex items-center gap-2">
            {contatos?.map((contato) => (
              <li key={contato.id}>
                <Link
                  href={contato.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex rounded-lg border border-gray-700 p-2 text-gray-100 transition-transform hover:scale-110 hover:border-blue-600"
                >
                  <contato.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PopoverPanel>
    </Popover>
  );
};
