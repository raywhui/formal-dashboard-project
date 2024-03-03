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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
        command: "⌥ C",
        description: "Description of application",
      },
      {
        title: "Observability",
        Icon: Eye,
        command: "⌥ O",
        description: "Description of application",
      },
      {
        title: "Lineage",
        Icon: NetworkLeft,
        command: "⌥ L",
        description: "Description of application",
      },
      {
        title: "ETL",
        Icon: Shuffle,
        command: "⌥ E",
        description: "Description of application",
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
        command: "⌥ A",
        description: "Description of application",
      },
      {
        title: "Logs",
        Icon: WarningTriangle,
        command: "⌥ G",
        description: "Description of application",
      },
      {
        title: "Discovery",
        Icon: DashboardSpeed,
        command: "⌥ D",
        description: "Description of application",
      },
      {
        title: "Policies",
        Icon: PrivacyPolicy,
        command: "⌥ P",
        description: "Description of application",
      },
      {
        title: "Compliance",
        Icon: DashboardSpeed,
        command: "⌥ Q",
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
        title: "Manage Store Apps",
        Icon: Plus,
        command: "⌥ ↑ G",
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
        command: "⌥K",
        description: "Description of application",
      },
      {
        title: "Sigma",
        Icon: SigmaFunction,
        command: "⌥ S",
        description: "Description of application",
      },
      {
        title: "Workflow",
        Icon: Network,
        command: "⌥ W",
        description: "Description of application",
      },
    ],
  },
];
