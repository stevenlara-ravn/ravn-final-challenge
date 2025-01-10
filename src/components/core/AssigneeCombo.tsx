import AssigneeIcon from "@/assets/icons/assignee.svg?react";
import Avatar from "@/components/core/design-system/Avatar";
import Combo from "@/components/core/design-system/Combo";
import ComboItem from "@/components/core/design-system/ComboItem";
import { FormPropsContext } from "@/context/FormPropsContext";
import { useFormState } from "@/stores/form-state";
import { TaskInputs } from "@/types/Task";
import { cn } from "@/utils/cn";
import * as Select from "@radix-ui/react-select";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";

export default function AssigneeCombo() {
  const { users } = useContext(FormPropsContext);
  const { currentTask } = useFormState((state) => state);

  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<TaskInputs>();
  const assignee = watch("assigneeId", currentTask?.assignee?.id);

  const handleAssigneeIcon = () => {
    if (!assignee) return <AssigneeIcon />;
    const currentSelectedUser = users?.filter((user) => user.id === assignee);
    return (
      currentSelectedUser?.length === 1 && (
        <Avatar className="h-6 w-6" url={currentSelectedUser[0].avatar} />
      )
    );
  };

  return (
    <Combo
      className={cn(
        errors.assigneeId && "bg-ravn-primary-3",
        assignee && "bg-transparent",
        "h-full w-[900px] overflow-hidden",
      )}
      contentClassName="w-[239px]"
      onValueChange={(value) =>
        setValue("assigneeId", value, { shouldValidate: true })
      }
      optionIcon={handleAssigneeIcon()}
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
            selectIcon={<Avatar className="h-8 w-8" url={user.avatar} />}
            value={user.id}
          >
            {user.fullName}
          </ComboItem>
        ))}
      </Select.Group>
    </Combo>
  );
}
