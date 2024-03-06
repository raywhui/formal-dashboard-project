import { InfoIcon } from "lucide-react";
import {
  Card as ShadcnCard,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from "@/components/ui/card";

type CardProps = {
  title: string;
  description: string;
  updates?: string;
  stats?: React.ReactNode;
};

export const Card = ({ title, description, updates, stats }: CardProps) => {
  return (
    <ShadcnCard className="block gap-10 sm:flex md:w-max">
      <div className="flex flex-col justify-between">
        <ShadcnCardHeader>
          <ShadcnCardTitle>{title}</ShadcnCardTitle>
          <ShadcnCardDescription>{description}</ShadcnCardDescription>
        </ShadcnCardHeader>
        <div className="pt-4 pb-1 block sm:hidden">
          <ShadcnCardContent>{stats}</ShadcnCardContent>
        </div>
        <ShadcnCardFooter className="text-sm font-light py-3">
          {updates && (
            <>
              <InfoIcon color="hsl(215 17 69%)" className="mr-2" />
              <p>{updates}</p>
            </>
          )}
        </ShadcnCardFooter>
      </div>
      <ShadcnCardContent className="hidden sm:block">{stats}</ShadcnCardContent>
    </ShadcnCard>
  );
};
