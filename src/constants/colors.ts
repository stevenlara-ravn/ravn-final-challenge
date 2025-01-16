import { Status, TaskTag } from "@/gql/graphql";

export const deviceTagColors = {
  IOS: "bg-ravn-secondary-4/10 text-ravn-secondary-4",
  ANDROID: "bg-ravn-tertiary-4/10 text-ravn-tertiary-4",
  RAILS: "bg-ravn-primary-4/10 text-ravn-primary-4",
  REACT: "bg-ravn-blue-1/10 text-ravn-blue-1",
  NODE_JS: "bg-ravn-secondary-4/10 text-ravn-secondary-4",
} satisfies Record<TaskTag, string>;

export const timerTagColors: Record<string, string> = {
  yesterday: "bg-ravn-primary-4/10 text-ravn-primary-4",
};

export const statusColors = {
  BACKLOG: "bg-ravn-neutral-1",
  CANCELLED: "bg-ravn-neutral-2",
  DONE: "bg-ravn-secondary-4",
  IN_PROGRESS: "bg-ravn-tertiary-4",
  TODO: "bg-ravn-blue-1",
} satisfies Record<Status, string>;
