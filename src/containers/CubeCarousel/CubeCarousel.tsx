import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Swiper } from "swiper/react";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

import * as I from "./CubeCarousel.interface";
import "./CubeCarousel.css";

export const CubeCarousel = ({ children }: I.CubeCarouselProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 40,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="h-[300px] w-[300px]"
      >
        {children}
      </Swiper>
    </div>
  );
};
