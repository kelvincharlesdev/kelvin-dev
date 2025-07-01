import { useRef, useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

import * as I from "./Accordion.interface";

export const Accordion = ({
  title,
  body,
  isActive,
  toggleAccordion,
}: I.AccordionProps) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? contentRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  return (
    <li className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 shadow-lg lg:p-4">
      <button
        className="flex w-full items-center justify-between text-gray-100"
        onClick={toggleAccordion}
      >
        <span className="text-left text-sm font-bold lg:text-lg">{title}</span>
        <HiChevronDown
          className={`h-6 w-6 transform transition-transform duration-700 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-all duration-700 ease-in-out"
      >
        <div ref={contentRef} className="py-2 text-sm text-gray-300">
          {body}
        </div>
      </div>
    </li>
  );
};
