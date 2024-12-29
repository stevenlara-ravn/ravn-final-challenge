import { timerTagColors } from "@/constants/tag-colors";
import { TaskTag } from "@/gql/graphql";

export interface TagProps {
    label: `${TaskTag}`;
};

export interface TimerTagProps {
    timeTag: keyof typeof timerTagColors | string;
};