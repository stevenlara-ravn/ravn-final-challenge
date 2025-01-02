import CreateButton from "@/components/features/core/design-system/CreateButton";
import ToggleViewModeButton from "@/components/features/core/design-system/ToggleViewModeButton";
import TaskTable from "@/components/features/task/task-table/TaskTable";
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
        <CreateButton />
      </div>

      {viewMode === "grid" ? <TaskGrid /> : <TaskTable />}
    </section>
  );
}
