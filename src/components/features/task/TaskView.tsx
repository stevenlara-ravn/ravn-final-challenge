import PlusSignIcon from "@/assets/icons/plus-sign.svg?react";

import Button from "@/components/core/design-system/Button";
import ToggleViewModeButton from "@/components/core/design-system/ToggleViewModeButton";
import DeleteTaskModal from "@/components/features/task/DeleteTaskModal";
import TaskTable from "@/components/features/task/task-table/TaskTable";
import TaskFormModal from "@/components/features/task/TaskFormModal";
import TaskGrid from "@/components/features/task/TaskGrid";
import useToggleViewMode from "@/hooks/useToggleViewMode";
import { useFormState } from "@/stores/form-state";
import { ViewMode } from "@/types/ViewModeTypes";

const CreateTaskButton = () => {
  const { setCurrentTask, setIsDialogOpen } = useFormState((state) => state);

  return (
    <Button
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-ravn-primary-4 outline-none"
      onClick={() => {
        setCurrentTask();
        setIsDialogOpen(true);
      }}
      type="button"
    >
      <PlusSignIcon className="h-[14px] w-[14px] text-ravn-neutral-1" />
    </Button>
  );
};

export default function TaskView({
  defaultViewMode,
}: {
  defaultViewMode: ViewMode;
}) {
  const { viewMode, handleToggle } = useToggleViewMode(defaultViewMode);

  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-4 overflow-hidden">
      <div className="flex h-12 w-full items-center justify-between">
        <ToggleViewModeButton onToggle={handleToggle} viewMode={viewMode} />
        <CreateTaskButton />
      </div>

      <main className="h-[700px] w-full">
        {viewMode === "grid" ? <TaskGrid /> : <TaskTable />}
      </main>

      <TaskFormModal />
      <DeleteTaskModal />
    </section>
  );
}
