import AssigneeCombo from "@/components/core/AssigneeCombo";
import DueDatePicker from "@/components/core/DueDatePicker";
import EstimatePointsCombo from "@/components/core/EstimatePointsCombo";
import TagCombo from "@/components/core/TagCombo";
import TaskTitle from "@/components/features/task/TaskTitle";

export default function TaskFormFields() {
  return (
    <>
      <TaskTitle />
      <div className="flex h-8 w-full items-center justify-between gap-4">
        <EstimatePointsCombo />
        <AssigneeCombo />
        <TagCombo />
        <DueDatePicker />
      </div>
    </>
  );
}
