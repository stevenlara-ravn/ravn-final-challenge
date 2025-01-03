import AssigneeIcon from "@/assets/icons/assignee.svg?react";
import Avatar from "@/components/features/core/design-system/Avatar";
import Combo from "@/components/features/core/design-system/Combo";
import ComboItem from "@/components/features/core/design-system/ComboItem";
import ReactProps from "@/types/ReactProps";
import { TaskInputs } from "@/types/Task";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface SelectOptionProps extends ReactProps {
  selectIcon: React.ReactNode;
  value: string;
}

export default function AssigneeCombo() {
  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();
  const assignee = watch("assignee");

  return (
    <div className="flex flex-col items-center justify-between">
      <Combo
        className={clsx(errors.assignee && "bg-ravn-primary-3")}
        contentClassName="w-[239px]"
        onValueChange={(value) => setValue("assignee", value)}
        optionIcon={<AssigneeIcon />}
        placeholder="Assignee"
        value={assignee}
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
    </div>
  );
}

const SelectOption = ({ selectIcon, value, children }: SelectOptionProps) => {
  return (
    <ComboItem className="w-full py-3" selectIcon={selectIcon} value={value}>
      {children}
    </ComboItem>
  );
};
