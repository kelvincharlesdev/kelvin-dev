import * as I from "./Info.interface";

export const Info = ({ children }: I.InfoProps) => {
  return <div className="w-full overflow-hidden">{children}</div>;
};
