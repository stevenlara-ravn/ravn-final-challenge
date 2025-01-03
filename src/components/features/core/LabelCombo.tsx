import TagIcon from "@/assets/icons/tag.svg?react";
import Checkbox from "@/components/features/core/design-system/Checkbox";
import Combo from "@/components/features/core/design-system/Combo";
import ComboItem from "@/components/features/core/design-system/ComboItem";
import * as Select from "@radix-ui/react-select";

export default function LabelCombo() {
  return (
    <Combo className="w-[239px]" optionIcon={<TagIcon />} placeholder="Label">
      <Select.Group className="h-full w-full">
        <Select.Label className="px-4 py-2 text-start text-ravn-neutral-2 text-body-xl-bold">
          Tag Title
        </Select.Label>

        <ComboItem className="w-full" value="John Watts">
          <Checkbox />
          <p>NODE JS</p>
        </ComboItem>
        <ComboItem className="w-full" value="Michaels Jackson">
          <Checkbox />
          <p>React</p>
        </ComboItem>
        <ComboItem className="w-full" value="Batman y Robin">
          <Checkbox />
          <p>IOS</p>
        </ComboItem>
      </Select.Group>
    </Combo>
  );
}
