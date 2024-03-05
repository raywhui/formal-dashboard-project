"use client";

import * as React from "react";
import { LayoutGrid } from "lucide-react";
import { DataTransferBoth, LongArrowDownLeft } from "iconoir-react";
import { commandListItems, commandSuggestions } from "@/lib/utils";

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
import CommandListItems from "@/components/CommandListItems";
import { ActiveTabStrings } from "@/components/CommandTabs/CommandTabs";

export const CommandBar = () => {
  const [open, setOpen] = React.useState(false);
  const [commandsMode, setCommandsMode] = React.useState(false);
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
        <div className="flex w-full rounded-md items-center justify-between px-16 py-4 bg-command-bar-background text-command-bar-foreground cursor-text">
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
        <div
          className="flex items-center border-b px-6 bg-command-bar-background rounded-2xl h-[70px] m-1 mb-2"
          cmdk-input-wrapper=""
        >
          <CommandInput
            placeholder="Find info, Ask questions or Run queries"
            onValueChange={(search) => {
              if (search[0] !== "/" && !commandsMode) return;
              if (search === "" && commandsMode) {
                setCommandsMode(false);
                return;
              }
              setCommandsMode(true);
            }}
          />
          <Button
            variant="outline"
            className="text-command-keys-foreground bg-card text-lg font-medium shadow-sm py-1 px-3 rounded-xl hover:bg-card hover:text-command-keys-foreground"
          >
            {commandsMode ? "⏎ Run command" : `\u2018/\u2019 for commands`}
          </Button>
        </div>
        <div
          className={`duration-200 transition-all ${
            commandsMode ? "max-h-0 opacity-0" : "max-h-[128px] opacity-100" // 128px is the size of the suggestion and tabs, refactor by using ref to get dynamic height and pass to <CommandListItems /> as prop to maintain height on transition
          }`}
        >
          <div className="max-w-full">
            <div className="whitespace-nowrap overflow-x-auto">
              <div className="flex mx-4 gap-2">
                {commandSuggestions.map((suggestion, i) => (
                  <SuggestedButton key={i}>{suggestion}</SuggestedButton>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-full">
            <div className="flex justify-between items-center w-full px-4 my-2">
              <div className="whitespace-nowrap overflow-x-auto mr-2">
                <CommandTabs
                  activeTab={activeTab}
                  tabOnClick={(tab) => setActiveTab(tab)}
                />
              </div>
              <Button
                asChild
                variant="outline"
                className="text-command-keys-foreground bg-white text-lg font-medium shadow-sm px-3 rounded-xl hover:bg-white hover:text-command-keys-foreground"
              >
                <div>
                  <DataTransferBoth className="rotate-90 -scale-y-100 w-6 h-6 mr-2" />
                  tabs
                </div>
              </Button>
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
          <CommandListItems
            list={commandListItems}
            commandsMode={commandsMode}
          />
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <Button
                asChild
                variant="outline"
                className="bg-white rounded-xl border-0 mr-2 hover:bg-white"
              >
                <div>
                  <DataTransferBoth className="w-6 h-6 text-brand-fill-400" />
                </div>
              </Button>
              <p className="font-medium text-lg text-brand-text-tertiary">
                Move
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center">
                <Button
                  asChild
                  variant="outline"
                  className="bg-white rounded-xl border-0 mr-2 hover:bg-white"
                >
                  <div>
                    <LongArrowDownLeft className="w-6 h-6 text-brand-fill-400" />
                  </div>
                </Button>
                <p className="font-medium text-lg text-brand-text-tertiary">
                  Open
                </p>
              </div>
              <div className="flex items-center">
                <Button
                  asChild
                  variant="outline"
                  className="bg-white rounded-xl border-0 mr-2 font-medium text-lg text-brand-fill-400 hover:bg-white hover:text-brand-fill-400"
                >
                  <p>esc</p>
                </Button>
                <p className="font-medium text-lg text-brand-text-tertiary">
                  Close
                </p>
              </div>
            </div>
          </div>
        </div>
      </CommandDialog>
    </>
  );
};
