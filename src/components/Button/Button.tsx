import * as I from "./Button.inetrface";

export const Button = ({ children, ...props }: I.ButtonProps) => {
  return (
    <button
      className="cursor-pointer rounded border border-2 border-blue-500 px-4 py-2 text-gray-100 shadow-md transition-colors hover:border-blue-600 hover:shadow-blue-600/50"
      {...props}
    >
      {children}
    </button>
  );
};
