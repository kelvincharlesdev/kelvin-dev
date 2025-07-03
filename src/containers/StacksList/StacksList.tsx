import Link from "next/link";

import { Title } from "@/components/Title";
import Card from "@/components/Card";
import StackCard from "@/containers/StackCard";

import * as I from "./StacksList.interface";

export const StacksList = ({ stacks }: I.StacksListProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))]">
      {stacks.map(
        (stack) =>
          stack.link && (
            <Link key={stack.id} href={stack.link} target="_blank">
              <Card.Wrapper>
                <StackCard.Container>
                  <StackCard.Icon icon={stack.icon} />
                  <StackCard.Info>
                    <Title as="h4">{stack.title}</Title>
                    <p className="truncate text-xs text-gray-300 md:text-sm">
                      {stack.label}
                    </p>
                  </StackCard.Info>
                </StackCard.Container>
              </Card.Wrapper>
            </Link>
          ),
      )}
    </div>
  );
};
