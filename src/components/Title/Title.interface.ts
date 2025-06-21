import { HTMLAttributes } from "react";

type TitleElement = "h1" | "h2" | "h3" | "h4";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TitleElement;
  className?: string;
  children: React.ReactNode;
}
