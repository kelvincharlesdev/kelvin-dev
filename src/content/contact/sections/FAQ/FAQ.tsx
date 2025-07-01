"use client";

import { useState } from "react";

import { Title } from "@/components/Title";
import { FAQ as FAQContainer } from "@/containers/FAQ";
import { faqData } from "@/data/faq";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col space-y-4 pb-10">
      <Title as="h3">Ainda com dúvidas?</Title>

      <FAQContainer
        faqs={faqData}
        activeIndex={activeIndex}
        toggleAccordion={toggleAccordion}
      />
    </div>
  );
};
