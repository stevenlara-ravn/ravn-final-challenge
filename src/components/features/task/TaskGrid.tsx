import TaskGridSkeleton from "@/components/core/TaskGridSkeleton";
import TaskColumn from "@/components/features/task/TaskColumn";
import useFilteredTasks from "@/hooks/useFilteredTasks";

const RenderTaskColumns = () => {
  const { groupByStatus, loading, statuses } = useFilteredTasks();

  return loading ? (
    <TaskGridSkeleton />
  ) : (
    statuses.length >= 1 &&
      groupByStatus &&
      statuses.map((status) => (
        <TaskColumn
          key={status}
          status={status}
          tasks={groupByStatus[status]}
        />
      ))
  );
};

export default function TaskGrid() {
  return (
    <main className="flex h-full w-full items-start justify-start gap-8 overflow-x-auto no-scrollbar">
      <RenderTaskColumns />
    </main>
  );
}
