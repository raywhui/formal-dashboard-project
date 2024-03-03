"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  LayoutGrid,
} from "lucide-react";
import { commandListItems } from "@/lib/utils";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import SuggestedButton from "@/components/SuggestedButton";
import CommandTabs from "@/components/CommandTabs";
import { ActiveTabStrings } from "@/components/CommandTabs/CommandTabs";

export const CommandBar = () => {
  const [open, setOpen] = React.useState(false);
  // const [currentItems, setCurrentItems] = React.useState(commandListItems);
  const [activeTab, setActiveTab] = React.useState<ActiveTabStrings>("all");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "e" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        className={`w-full absolute ${
          open
            ? "animate-custom-command-bar-exit opacity-0"
            : "animate-custom-command-bar-enter"
        }`}
        onClick={() => setOpen((open) => !open)}
        tabIndex={1}
      >
        <div className="flex w-full rounded-md items-center justify-between px-16 py-4 bg-command-bar-background text-command-bar-foreground">
          <p className="text-2xl">Search for anything</p>
          <Button
            variant="outline"
            className="text-lg font-medium px-6 h-[58px] text-[rgb(100, 116, 139)]"
          >
            <LayoutGrid className="mr-3" />
            ⌘E
          </Button>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Find info, Ask questions or Run queries" />
        <div className="max-w-full">
          <div className="whitespace-nowrap overflow-x-auto">
            <div className="flex mx-4 gap-2">
              <SuggestedButton>
                How many times user X has made Y?
              </SuggestedButton>
              <SuggestedButton>
                How many times has user group X has made Y query?
              </SuggestedButton>
              <SuggestedButton>
                How many times user X has made Y?
              </SuggestedButton>
              <SuggestedButton>
                How many times user X has made Y?
              </SuggestedButton>
              <SuggestedButton>
                How many times user X has made Y?
              </SuggestedButton>
            </div>
          </div>
        </div>
        <div className="max-w-full">
          <div className="flex flex-nowrap gap-2 whitespace-nowrap overflow-x-auto my-2">
            <div className="mx-4">
              <CommandTabs
                activeTab={activeTab}
                tabOnClick={(tab) => setActiveTab(tab)}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            open
              ? "animate-custom-command-list-open"
              : "animate-custom-command-list-close"
          }`}
        >
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {commandListItems.map(({ heading, color, items }) => (
              <CommandGroup key={heading} heading={heading.toUpperCase()}>
                {items.map(({ title, Icon, command, description }) => (
                  <CommandItem key={title} className="flex justify-between">
                    <div className="flex items-center">
                      <div
                        className={`${color.background} rounded-lg p-3 mr-3`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-brand-text-primary font-medium text-2xl mr-3">
                        {title}
                      </span>
                      <span className="text-brand-text-tertiary text-lg">
                        {description}
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="text-command-keys-foreground bg-white text-lg font-medium shadow-sm px-3 rounded-xl hover:bg-white hover:text-command-keys-foreground"
                    >
                      <div>{command}</div>
                    </Button>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <div className="h-[72px]">
            <p>Some kind of footer</p>
          </div>
        </div>
      </CommandDialog>
    </>
  );
};
