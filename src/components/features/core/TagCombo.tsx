import TagIcon from "@/assets/icons/tag.svg?react";
import Combo from "@/components/features/core/design-system/Combo";
import ComboItem from "@/components/features/core/design-system/ComboItem";
import { TaskTag } from "@/gql/graphql";
import { TaskInputs } from "@/types/Task";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export default function TagCombo() {
  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();
  const tags = watch("tags") || [];

  const handleTagChange = (value: string) => {
    setValue(
      "tags",
      tags.includes(value as TaskTag)
        ? tags.filter((tag: string) => tag !== value)
        : [...tags, value as TaskTag],
    );
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <Combo
        className={clsx(errors.tags && "bg-ravn-primary-3")}
        contentClassName="w-[239px]"
        onValueChange={handleTagChange}
        optionIcon={<TagIcon />}
        placeholder="Label"
        value=""
      >
        <Select.Group className="h-full w-full">
          <Select.Label className="px-4 py-2 text-start text-ravn-neutral-2 text-body-xl-bold">
            Tag Title
          </Select.Label>

          <ComboItem
            selectIcon={tags.includes(TaskTag.NodeJs) ? "✅" : "⬜"}
            value={TaskTag.NodeJs}
          >
            NODE JS
          </ComboItem>
          <ComboItem
            selectIcon={tags.includes(TaskTag.React) ? "✅" : "⬜"}
            value={TaskTag.React}
          >
            React
          </ComboItem>
          <ComboItem
            selectIcon={tags.includes(TaskTag.Ios) ? "✅" : "⬜"}
            value={TaskTag.Ios}
          >
            IOS
          </ComboItem>
        </Select.Group>
      </Combo>
    </div>
  );
}
