import * as I from "./Button.interface";

export const Button = ({ children, ...props }: I.ButtonProps) => {
  return (
    <button
      className="h-10 min-w-[100px] cursor-pointer rounded-lg border border-2 border-blue-600 px-4 py-2 text-sm text-gray-100 shadow-md transition-colors hover:border-blue-700 hover:shadow-blue-700/50"
      {...props}
    >
      {children}
    </button>
  );
};
