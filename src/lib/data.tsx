import {
  Database,
  Lock,
  Puzzle,
  Tools,
  Settings,
  Folder,
  Eye,
  NetworkLeft,
  Shuffle,
  UserBadgeCheck,
  WarningTriangle,
  DashboardSpeed,
  PrivacyPolicy,
  Key,
  SigmaFunction,
  Network,
  Plus,
} from "iconoir-react";
import {
  AWSIcon,
  DatadogIcon,
  DatahubIcon,
  GithubIcon,
  S3Icon,
  SplunkIcon,
} from "@/components/Icons";

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

// Nextjs has issues with interpolating strings for incomplete classNames (ex.text-${color} and bg-${color})
// These need to be seperated for Nextjs the colors to apply to the buttons
export const commandTabVariants: CommandTabVariantsTypes = [
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

export const commandSuggestions = [
  "How many times user X has made Y?",
  "How many times has user group X has made Y query?",
  "How many times user X has made Y?",
  "How many times user X has made Y?",
  "How many times user X has made Y?",
];

type CommandListItemsType = {
  heading: string;
  color: {
    background: string;
    text: string;
  };
  items: {
    title: string;
    Icon: React.ForwardRefExoticComponent<
      | (Omit<React.SVGProps<SVGSVGElement>, "ref"> &
          React.RefAttributes<SVGSVGElement>)
      | JSX.Element
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

export const commandListItems: CommandListItemsType = [
  {
    heading: "data",
    color: {
      background: "bg-brand-primary",
      text: "text-brand-primary",
    },
    items: [
      {
        title: "Catalog",
        Icon: Folder,
        shortcut: "⌥ C",
        description: "Description of application",
        command: {
          title: "catalog search",
          description: "Search the data catalog for datasets using a keyword.",
          params: [{ label: "Keyword", color: "brand" }],
        },
      },
      {
        title: "Observability",
        Icon: Eye,
        shortcut: "⌥ O",
        description: "Description of application",
        command: {
          title: "observability status",
          description: "Check the observability status of a specific dataset.",
          params: [{ label: "Dataset", color: "brand" }],
        },
      },
      {
        title: "Lineage",
        Icon: NetworkLeft,
        shortcut: "⌥ L",
        description: "Description of application",
      },
      {
        title: "ETL",
        Icon: Shuffle,
        shortcut: "⌥ E",
        description: "Description of application",
        command: {
          title: "etl Run",
          description: "Run an ETL job by specifying its name.",
          params: [{ label: "Job Name", color: "brand" }],
        },
      },
    ],
  },
  {
    heading: "security",
    color: {
      background: "bg-brand-secondary",
      text: "text-brand-secondary",
    },
    items: [
      {
        title: "Access",
        Icon: UserBadgeCheck,
        shortcut: "⌥ A",
        description: "Description of application",
        command: {
          title: "access grant",
          description: "Grant access to a specific user for a resource.",
          params: [
            { label: "User", color: "blue" },
            { label: "Resource", color: "green" },
          ],
        },
      },
      {
        title: "Logs",
        Icon: WarningTriangle,
        shortcut: "⌥ G",
        description: "Description of application",
        command: {
          title: "logs view",
          description: "View security logs for a specific date and log type.",
          params: [
            { label: "Data", color: "blue" },
            { label: "Type", color: "green" },
          ],
        },
      },
      {
        title: "Discovery",
        Icon: DashboardSpeed,
        shortcut: "⌥ D",
        description: "Description of application",
      },
      {
        title: "Policies",
        Icon: PrivacyPolicy,
        shortcut: "⌥ P",
        description: "Description of application",
        command: {
          title: "policies create",
          description: "Create a security policy with specified rules.",
          params: [
            { label: "PolicyName", color: "blue" },
            { label: "Rule", color: "green" },
          ],
        },
      },
      {
        title: "Compliance",
        Icon: DashboardSpeed,
        shortcut: "⌥ Q",
        description: "Description of application",
      },
    ],
  },
  {
    heading: "store",
    color: {
      background: "bg-brand-gray-600",
      text: "text-brand-gray-600",
    },
    items: [
      {
        title: "AWS",
        Icon: AWSIcon,
        shortcut: "⌥ ↑ A",
        description: "Description of application",
      },
      {
        title: "Datadog",
        Icon: DatadogIcon,
        shortcut: "⌥ ↑ D",
        description: "Description of application",
      },
      {
        title: "Splunk",
        Icon: SplunkIcon,
        shortcut: "⌥ ↑ 3",
        description: "Description of application",
      },
      {
        title: "S3",
        Icon: S3Icon,
        shortcut: "⌥ ↑ G",
        description: "Description of application",
      },
      {
        title: "Github",
        Icon: GithubIcon,
        shortcut: "⌥ ↑ G",
        description: "Description of application",
      },
      {
        title: "datahub",
        Icon: DatahubIcon,
        shortcut: "⌥ ↑ G",
        description: "Description of application",
      },
      {
        title: "Manage Store Apps",
        Icon: Plus,
        shortcut: "⌥ ↑ G",
        description: "Description of application",
      },
    ],
  },
  {
    heading: "tools",
    color: {
      background: "bg-brand-tertiary",
      text: "text-brand-tertiary",
    },
    items: [
      {
        title: "API Keys",
        Icon: Key,
        shortcut: "⌥K",
        description: "Description of application",
        command: {
          title: "apikeys create",
          description: "Create a security policy with specified rules.",
          params: [{ label: "Name", color: "blue" }],
        },
      },
      {
        title: "Sigma",
        Icon: SigmaFunction,
        shortcut: "⌥ S",
        description: "Description of application",
        command: {
          title: "sigma analyze",
          description: "Analyze data using Sigma notation.",
          params: [{ label: "Query", color: "blue" }],
        },
      },
      {
        title: "Workflow",
        Icon: Network,
        shortcut: "⌥ W",
        description: "Description of application",
        command: {
          title: "workflow start",
          description: "Start a workflow by specifying its name.",
          params: [{ label: "workflow", color: "blue" }],
        },
      },
    ],
  },
];
