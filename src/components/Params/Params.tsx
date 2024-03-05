import { cn } from "@/lib/utils";

type Variant = keyof typeof paramVariantClassNames;

type Params = {
  children: React.ReactNode;
  variant: Variant;
};

const paramVariantClassNames = {
  brand: "text-brand-color-600 bg-brand-color-100",
  blue: "text-brand-blue-600 bg-brand-blue-100",
  green: "text-brand-teal-600 bg-brand-teal-50",
};

export const Params = ({ children, variant = "brand" }: Params) => {
  return (
    <div
      className={cn(
        "px-3 text-lg rounded-sm font-semibold",
        paramVariantClassNames[variant]
      )}
    >
      {children}
    </div>
  );
};
