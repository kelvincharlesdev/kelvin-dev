import { FaqItem } from "@/models/faq";

export interface FAQProps {
  faqs: FaqItem[];
  activeIndex: number | null;
  toggleAccordion: (index: number) => void;
}
