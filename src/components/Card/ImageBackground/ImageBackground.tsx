import * as I from "./ImageBackground.interface";

export const ImageBackground = ({ imageUrl }: I.ImageBackgroundProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`absolute inset-0 z-0 h-full w-full rounded-lg bg-cover bg-center`}
    />
  );
};
