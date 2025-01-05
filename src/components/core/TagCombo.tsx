import TagIcon from "@/assets/icons/tag.svg?react";
import Combo from "@/components/core/design-system/Combo";
import ComboItem from "@/components/core/design-system/ComboItem";
import TechTag from "@/components/core/TechTag";
import { FormPropsContext } from "@/context/FormPropsContext";
import { TaskTag } from "@/gql/graphql";
import { TaskInputs } from "@/types/Task";
import { normalizeText } from "@/utils/text-transform";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";

export default function TagCombo() {
  const { tags: tagsArray } = useContext(FormPropsContext);

  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();
  const tags = watch("tags");

  const handleTagChange = (value: string) => {
    setValue(
      "tags",
      tags.includes(value as TaskTag)
        ? tags.filter((tag: string) => tag !== value)
        : [...tags, value as TaskTag],
      { shouldValidate: true },
    );
  };

  const renderTechTagPlaceholder = (tags: TaskTag[]) => {
    if (tags.length === 0) return <p>Label</p>;

    return (
      <div className="flex gap-2">
        <TechTag tags={tags} />
      </div>
    );
  };

  return (
    <Combo
      className={clsx(
        "w-max",
        errors.tags && "bg-ravn-primary-3",
        tags.length >= 1 && "bg-transparent",
      )}
      contentClassName="w-[239px]"
      onValueChange={handleTagChange}
      optionIcon={<TagIcon />}
      placeholder={renderTechTagPlaceholder(tags)}
      showPlaceholder={tags.length === 0}
      value=""
    >
      <Select.Group className="h-full w-full">
        <Select.Label className="px-4 py-2 text-start text-ravn-neutral-2 text-body-xl-bold">
          Tag Title
        </Select.Label>

        {tagsArray.map((tag) => (
          <ComboItem
            className="uppercase"
            key={tag}
            selectIcon={tags.includes(tag) ? "✅" : "⬜"}
            value={tag}
          >
            {normalizeText(tag)}
          </ComboItem>
        ))}
      </Select.Group>
    </Combo>
  );
}
