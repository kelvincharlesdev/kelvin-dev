import * as I from "./Field.interface";

export const Field = ({
  icon,
  iconPosition = "right",
  ...props
}: I.FieldProps) => {
  return (
    <div className="flex w-full items-center space-x-2 rounded-md border border-gray-700 p-2 focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none">
      {iconPosition === "left" && icon}
      <input
        type={props.type || "text"}
        id={props.id}
        className="w-full bg-transparent text-gray-300 outline-none"
        placeholder={props.placeholder}
        {...props}
      />
      {iconPosition === "right" && icon}
    </div>
  );
};
