import CreateTaskButton from "@/components/core/CreateTaskButton";
import ToggleViewModeButton from "@/components/core/design-system/ToggleViewModeButton";
import DeleteTaskModal from "@/components/features/task/DeleteTaskModal";
import TaskTable from "@/components/features/task/task-table/TaskTable";
import TaskFormModal from "@/components/features/task/TaskFormModal";
import TaskGrid from "@/components/features/task/TaskGrid";
import useToggleViewMode from "@/hooks/useToggleViewMode";
import { ViewMode } from "@/types/ViewModeTypes";

export default function TaskView({
  defaultViewMode,
}: {
  defaultViewMode: ViewMode;
}) {
  const { viewMode, handleToggle } = useToggleViewMode(defaultViewMode);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-4">
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
