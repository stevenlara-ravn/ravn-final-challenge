import AssigneeIcon from "@/assets/icons/assignee.svg?react";
import Avatar from "@/components/core/design-system/Avatar";
import Combo from "@/components/core/design-system/Combo";
import ComboItem from "@/components/core/design-system/ComboItem";
import { FormPropsContext } from "@/context/FormPropsContext";
import { TaskInputs } from "@/types/Task";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";

export default function AssigneeCombo() {
  const { users } = useContext(FormPropsContext);

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
        onValueChange={(value) =>
          setValue("assignee", value, { shouldValidate: true })
        }
        optionIcon={<AssigneeIcon />}
        placeholder="Assignee"
        value={assignee}
      >
        <Select.Group className="h-full w-full">
          <Select.Label className="px-4 py-2 text-start text-ravn-neutral-2 text-body-xl-bold">
            Assign To...
          </Select.Label>

          {users?.map((user) => (
            <ComboItem
              className="py-3"
              key={user.id}
              selectIcon={<Avatar url={user.avatar} />}
              value={user.id}
            >
              {user.fullName}
            </ComboItem>
          ))}
        </Select.Group>
      </Combo>
    </div>
  );
}
