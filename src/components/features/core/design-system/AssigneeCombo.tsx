import AssigneeIcon from "@/assets/icons/assignee.svg?react";
import Avatar from "@/components/features/core/design-system/Avatar";
import Combo from "@/components/features/core/design-system/Combo";
import ComboItem from "@/components/features/core/design-system/ComboItem";
import ReactProps from "@/types/ReactProps";
import * as Select from "@radix-ui/react-select";

interface SelectOptionProps extends ReactProps {
  selectIcon: React.ReactNode;
  value: string;
}

export default function AssigneeCombo() {
  return (
    <Combo
      className="w-[239px]"
      optionIcon={<AssigneeIcon />}
      placeholder="Assignee"
    >
      <Select.Group className="h-full w-full">
        <Select.Label className="px-4 py-2 text-start text-ravn-neutral-2 text-body-xl-bold">
          Assign To...
        </Select.Label>

        <SelectOption selectIcon={<Avatar />} value="John Watts">
          John Watts
        </SelectOption>
        <SelectOption selectIcon={<Avatar />} value="Michaels Jackson">
          Michaels Jackson
        </SelectOption>
        <SelectOption selectIcon={<Avatar />} value="Batman y Robin">
          Batman y Robin
        </SelectOption>
      </Select.Group>
    </Combo>
  );
}

const SelectOption = ({ selectIcon, value, children }: SelectOptionProps) => {
  return (
    <ComboItem className="w-full py-3" selectIcon={selectIcon} value={value}>
      {children}
    </ComboItem>
  );
};
