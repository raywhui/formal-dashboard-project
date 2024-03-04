import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const commandSuggestions = [
  "How many times user X has made Y?",
  "How many times has user group X has made Y query?",
  "How many times user X has made Y?",
  "How many times user X has made Y?",
  "How many times user X has made Y?",
];

export const commandListItems = [
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
