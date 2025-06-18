import * as I from "./Footer.interface";

export const Footer = ({ children }: I.FooterProps) => {
  return (
    <footer className="relative flex h-10 w-full items-center justify-between rounded-lg bg-blue-600 p-2">
      {children}
    </footer>
  );
};
