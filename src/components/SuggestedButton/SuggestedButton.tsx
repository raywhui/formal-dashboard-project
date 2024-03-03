import * as React from "react";

import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SuggestedButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      className={`rounded-full bg-command-bar-background font-medium text-base text-command-bar-foreground hover:bg-[hsl(211,30%,84%)] ${className}`}
      ref={ref}
      {...props}
    >
      <Sparkle className="mr-3" />
      {children}
    </Button>
  );
});

SuggestedButton.displayName = "SuggestedButton";
