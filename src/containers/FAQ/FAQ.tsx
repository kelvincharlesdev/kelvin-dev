import { Accordion } from "@/components/Accordion";

import * as I from "./FAQ.interface";

export const FAQ = ({ faqs, activeIndex, toggleAccordion }: I.FAQProps) => {
  return (
    <ul className="flex w-full flex-col items-center justify-center space-y-4">
      {faqs.map((faq, index) => (
        <Accordion
          key={faq.title}
          title={faq.title}
          body={faq.body}
          isActive={activeIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </ul>
  );
};
