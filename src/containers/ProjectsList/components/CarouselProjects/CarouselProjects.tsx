import Link from "next/link";
import { SwiperProps, SwiperSlide } from "swiper/react";

import { Carousel } from "@/components/Carousel";
import Card from "@/components/Card";

import * as I from "../../ProjectsList.interface";

export const CarouselProjects = ({ projects }: I.ProjectsListProps) => {
  const settings: SwiperProps = {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: false,
    pagination: {
      clickable: true,
    },
  };
  return (
    <div className="mt-6 w-full lg:hidden">
      <Carousel settings={settings}>
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="flex justify-center rounded-lg bg-blue-500"
          >
            <div key={project.id} className="h-[280px]">
              <Link href={project.link}>
                <Card.Wrapper>
                  <Card.ImageBackground imageUrl={project.image} />
                  <Card.Footer>
                    <h2 className="text-sm font-bold text-gray-100">
                      {project.title}
                    </h2>
                    <p className="text-sm font-bold text-gray-100">
                      Saiba mais!
                    </p>
                  </Card.Footer>
                </Card.Wrapper>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};
