import { InfoIcon } from "lucide-react";
import {
  Card as ShadcnCard,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from "@/components/ui/card";

type ICardProps = {
  title: string;
  description: string;
  updates?: string;
  stats?: React.ReactNode;
};

export const Card = ({ title, description, updates, stats }: ICardProps) => {
  return (
    <ShadcnCard className="flex gap-10">
      <div className="flex flex-col justify-between">
        <ShadcnCardHeader>
          <ShadcnCardTitle>{title}</ShadcnCardTitle>
          <ShadcnCardDescription>{description}</ShadcnCardDescription>
        </ShadcnCardHeader>
        <ShadcnCardFooter className="text-sm font-light">
          {updates && (
            <>
              <InfoIcon color="hsl(215 17 69%)" className="mr-2" />
              <p>{updates}</p>
            </>
          )}
        </ShadcnCardFooter>
      </div>
      <ShadcnCardContent>{stats}</ShadcnCardContent>
    </ShadcnCard>
  );
};
