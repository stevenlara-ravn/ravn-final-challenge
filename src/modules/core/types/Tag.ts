import { TaskTag } from "@/gql/graphql";
import { timerTagColors } from "../constants/tag-colors";

export interface TagProps {
    label: `${TaskTag}`;
};

export interface TimerTagProps {
    timeTag: keyof typeof timerTagColors | string;
};