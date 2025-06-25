"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import { Title } from "@/components/Title";
import { CubeCarousel } from "@/containers/CubeCarousel";
import { family } from "@/data/family";

export const WhoIAm = () => {
  return (
    <div className="mt-8 grid grid-cols-1 xl:grid-cols-2">
      <div className="space-y-4">
        <Title as="h3">Olá! Meu nome é Kelvin</Title>

        <div className="space-y-4 text-sm text-gray-400 md:text-base">
          <p>
            Sou desenvolvedor front-end e apaixonado por tecnologia desde
            criança. Sempre fui muito curioso e gostava de entender como as
            coisas funcionam, especialmente computadores e videogames. Apesar do
            meu interesse pela área, minha trajetória não foi linear. Aos 17
            anos, me tornei pai de uma menina incrível e precisei focar no
            trabalho para dar suporte à minha nova família. A vida seguiu e, aos
            poucos, fui me estruturando. Foi então que, anos depois, me deparei
            com um anúncio de um bootcamp de programação no Instagram, e aquilo
            reacendeu em mim a paixão pela tecnologia.
          </p>

          <p>
            Desde então, não parei mais. Fiz cursos, mergulhei de cabeça no
            desenvolvimento front-end e me formei recentemente em Análise e
            Desenvolvimento de Sistemas. Em abril de 2024, conquistei minha
            primeira oportunidade profissional como dev front-end júnior em uma
            grande empresa, onde sigo aprendendo e crescendo a cada dia. Hoje,
            com 32 anos, uma filha de 14 e casado desde os 18, sigo motivado
            pela curiosidade e pela vontade de entender como tudo funciona,
            sempre em busca de evoluir como profissional e como pessoa.
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center xl:mt-0">
        <CubeCarousel>
          {family.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-[300px]overflow-hidden h-[300px] rounded-xl bg-neutral-900 shadow-lg">
                <Image
                  src={src}
                  alt={`Foto ${index + 1}`}
                  width={300}
                  height={300}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </CubeCarousel>
      </div>
    </div>
  );
};
