import { Swiper } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

import * as I from "./Carousel.interface";

export const Carousel = ({ children, settings }: I.CarouselProps) => {
  return (
    <Swiper
      className="flex w-full max-w-[375px] items-center sm:max-w-[600px]"
      modules={[Navigation, Pagination, A11y]}
      {...settings}
    >
      {children}
    </Swiper>
  );
};
