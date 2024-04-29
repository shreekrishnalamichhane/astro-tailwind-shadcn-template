import { Badge } from "@/components/ui/badge";

type Props = {
  value: string;
};

export function BadgeBox(props: Props) {
  return (
    <Badge variant="default" className="mx-2">
      {props.value}
    </Badge>
  );
}
