import Card from "@/components/Card";
import { Title } from "@/components/Title";
import { StackCardProps } from "@/models/stacks";

export const StackCard = ({ title, label, icon: Icon }: StackCardProps) => {
  return (
    <Card.Wrapper>
      <div className="flex items-center gap-3">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-lg border border-gray-700 p-2">
          {Icon && <Icon />}
        </div>
        <div className="w-full overflow-hidden">
          <Title as="h4">{title}</Title>
          <p className="truncate text-xs text-gray-300 md:text-sm">{label}</p>
        </div>
      </div>
    </Card.Wrapper>
  );
};
