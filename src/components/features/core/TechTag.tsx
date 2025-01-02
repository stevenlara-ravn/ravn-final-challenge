import Tag from "@/components/features/core/design-system/Tag";
import { deviceTagColors } from "@/constants/colors";
import { TaskTag } from "@/gql/graphql";
import ReactProps from "@/types/ReactProps";
import { normalizeText } from "@/utils/text-transform";
import clsx from "clsx";

interface TechTagProps extends ReactProps {
  label: TaskTag | `+${number}`;
}

export default function TechTag(props: TechTagProps) {
  return (
    <Tag
      className={clsx(props.className, {
        [deviceTagColors[props.label as TaskTag]]: props.label in TaskTag,
      })}
    >
      <p className="text-center uppercase text-body-m-bold">
        {normalizeText(props.label)}
      </p>
    </Tag>
  );
}
