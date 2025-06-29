import * as I from "./Wrapper.interface";

export const Wrapper = ({ children }: I.WrapperProps) => {
  return <div className="mb-4 flex flex-col space-y-2">{children}</div>;
};
