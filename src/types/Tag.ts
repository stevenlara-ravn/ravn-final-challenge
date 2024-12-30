import { timerTagColors } from "@/constants/tag-colors";
import { TaskTag } from "@/gql/graphql";
import { ReactProps } from "./ReactProps";

export interface TechTagProps extends ReactProps {
  label: `${TaskTag}` | `+${number}`;
}
export interface TimerTagProps {
  timeTag: keyof typeof timerTagColors | string;
}
