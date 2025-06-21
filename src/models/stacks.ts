export interface StackCardProps {
  id?: number;
  title: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link?: string;
}
