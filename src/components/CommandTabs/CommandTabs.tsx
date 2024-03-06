import { Button } from "@/components/ui/button";
import { ActiveTabStrings, commandTabVariants } from "@/lib/data";

type CommandTabProps = {
  activeTab: ActiveTabStrings;
  tabOnClick: (val: ActiveTabStrings) => void;
};

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
