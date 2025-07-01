export interface AccordionProps {
  title: string;
  body: React.ReactNode;
  isActive: boolean;
  toggleAccordion: () => void;
}
