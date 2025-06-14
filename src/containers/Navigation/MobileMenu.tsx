import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { AnimateButton } from "@/components/AnimateButton";
import { NavItems } from "@/containers/NavItems/NavItems";

import { ContactLinks } from "../ContactLinks";
import * as I from "./Navigation.interface";

export const MobileMenu = ({
  links,
  contacts,
  pathName,
}: I.NavigationProps) => {
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
                <NavItems links={links} pathName={pathName} close={close} />

                <ContactLinks contacts={contacts} />
              </>
            )}
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
};
