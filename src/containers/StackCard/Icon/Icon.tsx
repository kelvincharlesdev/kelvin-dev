import * as I from "./Icon.interface";

export const Icon = ({ icon: Icon }: I.IconProps) => {
  return (
    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-lg border border-gray-700 p-2">
      {Icon && <Icon size={25} />}
    </div>
  );
};
