import * as I from "./Container.interface";

export const Container = ({ children }: I.ContainerProps) => {
  return <div className="flex items-center gap-3">{children}</div>;
};
