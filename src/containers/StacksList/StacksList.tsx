import Link from "next/link";

import { StackCard } from "@/containers/StackCard";
import * as I from "./StacksList.interface";

export const StacksList = ({ stacks }: I.StacksListProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))]">
      {stacks.map(
        (stack) =>
          stack.link && (
            <Link key={stack.id} href={stack.link} target="_blank">
              <StackCard
                id={stack.id}
                icon={stack.icon}
                label={stack.label}
                title={stack.title}
                link={stack.link}
              />
            </Link>
          ),
      )}
    </div>
  );
};
