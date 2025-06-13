import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import { AnimateButton } from "@/components/AnimateButton";
import * as I from "./Navigation.interface";
import { usePathname } from "next/navigation";

export const MobileMenu = ({ links, contatos }: I.NavigationProps) => {
  const pathName = usePathname();

  return (
    <Popover className="">
      <div className="border border-gray-700">
        <PopoverButton className="cursor-pointer p-2">
          {({ open }) => <AnimateButton open={open} />}
        </PopoverButton>
      </div>

      <Transition>
        <TransitionChild
          enter="transition transform ease-out duration-300 origin-top"
          enterFrom="opacity-0 scale-y-0"
          enterTo="opacity-100 scale-y-100"
          leave="transition transform ease-in duration-200 origin-top"
          leaveFrom="opacity-100 scale-y-100"
          leaveTo="opacity-0 scale-y-0"
        >
          <PopoverPanel className="absolute top-[58px] right-[-1px] z-50 mt-2 flex min-w-[60vw] flex-col rounded-l-lg bg-gray-800 p-4 shadow-lg">
            {({ close }) => (
              <>
                <ul className="flex flex-1 flex-col gap-2">
                  {links?.map((link) => (
                    <li
                      key={link.id}
                      className={`rounded-lg border-b border-gray-600 p-2 text-sm text-gray-100 transition-colors last:border-b-0 hover:bg-gray-700 ${
                        pathName === link.href ? "bg-gray-700" : ""
                      }`}
                    >
                      <Link
                        href={link.href}
                        className="flex w-full text-gray-100"
                        onClick={() => close()}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-20">
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
                          {contato.icon && <contato.icon />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
};
