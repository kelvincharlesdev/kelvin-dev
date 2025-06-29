import * as I from "./Label.interface";

export const Label = ({ label, id }: I.LabelProps) => {
  return (
    <label htmlFor={id} className="text-sm font-medium text-gray-300">
      {label || "Pesquise por projeto por nome ou tecnologia:"}
    </label>
  );
};
