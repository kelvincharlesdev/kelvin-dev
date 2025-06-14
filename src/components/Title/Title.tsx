import * as I from "./Title.interface";

const sizeMap = {
  h1: "text-3xl md:text-5xl", //30px-48px
  h2: "text-xl md:text-4xl", //20-36px
  h3: "text-lg md:text-2xl", //18-24px
};

export const Title = ({
  as = "h1",
  children,
  className = "",
}: I.TitleProps) => {
  const Heading = as;

  return (
    <Heading className={`font-bold text-gray-100 ${sizeMap[as]} ${className}`}>
      {children}
    </Heading>
  );
};
