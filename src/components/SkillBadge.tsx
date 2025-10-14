import { Badge } from "./ui/badge";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="px-4 py-2 flex items-center gap-2">
      {icon}
      {name}
    </Badge>
  );
}
