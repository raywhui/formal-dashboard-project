import { Button } from "@/components/ui/button";
import { Database, Lock, Puzzle, Tools, Settings } from "iconoir-react";

export type ActiveTabStrings =
  | "all"
  | "data"
  | "security"
  | "store"
  | "tools"
  | "settings";

type CommandTabVariantsTypes = {
  tab: ActiveTabStrings;
  text: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref">
  > | null;
  color: {
    icon: string;
    button: string;
  };
}[];

type CommandTabProps = {
  activeTab: ActiveTabStrings;
  tabOnClick: (val: ActiveTabStrings) => void;
};

// Nextjs has issues with partial strings for text-${color} and bg-${color}
// These need to be seperated for Nextjs the colors to apply to the buttons
const commandTabVariants: CommandTabVariantsTypes = [
  {
    tab: "all",
    text: "All",
    Icon: null,
    color: {
      icon: "text-brand-gray-700",
      button: "bg-brand-gray-700",
    },
  },
  {
    tab: "data",
    text: "Data",
    Icon: Database,
    color: {
      icon: "text-brand-primary",
      button: "bg-brand-primary",
    },
  },
  {
    tab: "security",
    text: "Security",
    Icon: Lock,
    color: {
      icon: "text-brand-secondary",
      button: "bg-brand-secondary",
    },
  },
  {
    tab: "store",
    text: "Store",
    Icon: Puzzle,
    color: {
      icon: "text-brand-gray-600",
      button: "bg-brand-gray-600",
    },
  },
  {
    tab: "tools",
    text: "Tools",
    Icon: Tools,
    color: {
      icon: "text-brand-tertiary",
      button: "bg-brand-tertiary",
    },
  },
  {
    tab: "settings",
    text: "Settings",
    Icon: Settings,
    color: {
      icon: "text-brand-gray-700",
      button: "bg-brand-gray-700",
    },
  },
];

export const CommandTabs = ({
  activeTab = "all",
  tabOnClick,
}: CommandTabProps) => {
  return (
    <div className="flex gap-2 py-4">
      {commandTabVariants.map(({ tab, text, Icon, color }) => (
        <Button
          key={text}
          variant="outline"
          className={`rounded-full text-lg shadow-sm ${
            activeTab === tab
              ? `${color.button} text-white hover:${color.button} hover:text-white`
              : `hover:bg-command-background`
          }`}
          onClick={() => tabOnClick(tab)}
        >
          {Icon && (
            <Icon
              className={`mr-1 duration-150 ${
                activeTab === tab ? `text-white` : `${color.icon}`
              }`}
            />
          )}
          {text}
        </Button>
      ))}
    </div>
  );
};
