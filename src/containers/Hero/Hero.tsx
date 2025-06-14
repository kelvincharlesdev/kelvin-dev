import * as I from "./Hero.interface";
export const Hero = ({ children }: I.HeroProps) => {
  return (
    <section className="border-b border-gray-700 py-10 md:py-12">
      {children}
    </section>
  );
};
