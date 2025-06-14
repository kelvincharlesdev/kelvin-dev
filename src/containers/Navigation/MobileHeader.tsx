import { UserProfile } from "@/components/UserProfile";
import { MobileMenu } from "./MobileMenu";

import * as I from "./Navigation.interface";

export const MobileHeader = ({
  links,
  contacts,
  pathName,
}: I.NavigationProps) => {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-gray-700 px-2.5 md:hidden">
      <UserProfile />
      <MobileMenu contacts={contacts} links={links} pathName={pathName} />
    </header>
  );
};
