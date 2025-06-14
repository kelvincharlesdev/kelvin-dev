import { HTMLAttributes } from "react";

type TitleElement = "h1" | "h2" | "h3";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TitleElement;
  className?: string;
  children: React.ReactNode;
}
