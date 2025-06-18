import * as I from "./Wrapper.interface";

export const Wrapper = ({ children }: I.Wrapper) => {
  return (
    <div className="relative flex h-full w-full flex-col-reverse rounded-lg border-1 border-blue-600/50 p-3 transition-transform duration-200 not-last:border-1 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-700/50">
      {children}
    </div>
  );
};
