"use client";

import {
  CommandList as ShadcnCommandList,
  CommandGroup as ShadcnCommandGroup,
  CommandItem as ShadcnCommandItem,
  CommandEmpty as ShadcnCommandEmpty,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import Params from "@/components/Params";

interface CommandListItemsProps {
  list: {
    heading: string;
    color: {
      background: string;
      text: string;
    };
    items: {
      title: string;
      Icon: React.ForwardRefExoticComponent<
        | Omit<React.SVGProps<SVGSVGElement>, "ref"> &
            React.RefAttributes<SVGSVGElement>
      >;
      description: string;
      shortcut: string;
      command?: {
        title: string;
        description: string;
        params: { label: string; color: "brand" | "blue" | "green" }[];
      };
    }[];
  }[];
}

type CommandItemsProps = {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    | (Omit<React.SVGProps<SVGSVGElement>, "ref"> &
        React.RefAttributes<SVGSVGElement>)
    | JSX.Element
  >;
  description: string;
  shortcut?: string;
  iconColor?: string;
  iconBackgroundColor?: string;
  params?: { label: string; color: "brand" | "blue" | "green" }[];
};

type CommandGroupProps = {
  heading: string;
  index: number;
  children: React.ReactNode;
};

const CommandItems = ({
  title,
  Icon,
  description,
  shortcut,
  iconColor,
  iconBackgroundColor,
  params,
}: CommandItemsProps) => {
  return (
    <ShadcnCommandItem
      key={title}
      className="flex justify-between"
      value={params ? `/${title}` : title}
    >
      <div className="flex items-center">
        <div
          className={`${
            iconBackgroundColor ? iconBackgroundColor : "bg-white"
          } rounded-lg p-3 mr-3`}
        >
          <Icon className={`w-6 h-6 ${iconColor ? iconColor : "text-white"}`} />
        </div>
        <span className="text-brand-text-primary font-medium text-2xl mr-3">
          {title}
        </span>
        <div className="flex gap-2 mr-3">
          {params &&
            params.map(({ color, label }, i) => (
              <Params key={i} variant={color}>
                {label}
              </Params>
            ))}
        </div>
        <span className="text-brand-text-tertiary text-lg">{description}</span>
      </div>
      {shortcut && (
        <Button
          asChild
          variant="outline"
          className="text-command-keys-foreground bg-white text-lg font-medium shadow-sm px-3 rounded-xl hover:bg-white hover:text-command-keys-foreground"
        >
          <div>{shortcut}</div>
        </Button>
      )}
    </ShadcnCommandItem>
  );
};

const CommandGroup = ({ heading, index, children }: CommandGroupProps) => (
  <ShadcnCommandGroup
    heading={heading}
    className={index === 0 ? "[&_[cmdk-group-heading]]:mt-0" : ""}
  >
    {children}
  </ShadcnCommandGroup>
);

export const CommandListItems = ({
  list,
  commandsMode,
}: CommandListItemsProps) => {
  if (commandsMode) {
    return (
      <ShadcnCommandList className="duration-200 transition-colors">
        <ShadcnCommandEmpty>No commands found.</ShadcnCommandEmpty>
        {list.map(
          ({ heading, color, items }, i) =>
            items.some((item) => item.command) && (
              <CommandGroup key={i} index={i} heading={heading.toUpperCase()}>
                {items.map(
                  ({ Icon, command }, j) =>
                    command && (
                      <CommandItems
                        key={j}
                        title={command?.title || ""}
                        Icon={Icon}
                        params={command.params}
                        description={command?.description || ""}
                        iconColor={color.text}
                      />
                    )
                )}
              </CommandGroup>
            )
        )}
      </ShadcnCommandList>
    );
  }

  return (
    <ShadcnCommandList className="duration-200 transition-colors">
      <ShadcnCommandEmpty>No results found.</ShadcnCommandEmpty>
      {list.map(({ heading, color, items }, i) => (
        <CommandGroup key={i} index={i} heading={heading.toUpperCase()}>
          {items.map(({ title, Icon, shortcut, description }, j) => (
            <CommandItems
              key={j}
              title={title}
              Icon={Icon}
              shortcut={shortcut}
              description={description}
              iconBackgroundColor={color.background}
            />
          ))}
        </CommandGroup>
      ))}
      {/* {list.map(
        ({ heading, color, items }, k) =>
          items.some((item) => item.command) && (
            <CommandGroup key={k} index={k} heading={heading.toUpperCase()}>
              {items.map(
                ({ Icon, command }, l) =>
                  command && (
                    <CommandItems
                      key={l}
                      title={"/" + command?.title || ""}
                      Icon={Icon}
                      params={command.params}
                      description={command?.description || ""}
                      iconColor={color.text}
                    />
                  )
              )}
            </CommandGroup>
          )
      )} */}
    </ShadcnCommandList>
  );
};
