import * as I from "./Input.interface";

export const Input = ({ label, icon, ...props }: I.InputProps) => {
  return (
    <div className="mb-4 flex flex-col space-y-4">
      <label htmlFor={props.id} className="text-sm font-medium text-gray-300">
        {label || "Pesquise por projeto por nome ou tecnologia:"}
      </label>
      <div className="flex max-w-[300px] items-center space-x-1 rounded-md border border-gray-400 p-2 focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none">
        <input
          type={props.type || "text"}
          id={props.id}
          className="w-full bg-transparent outline-none"
          placeholder={props.placeholder}
          {...props}
        />
        {icon}
      </div>
    </div>
  );
};
