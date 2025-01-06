import TaskTableSkeleton from "@/components/core/TaskTableSkeleton";
import TaskTableAccordion from "@/components/features/task/task-table/TaskTableAccordion";
import TaskTableHeader from "@/components/features/task/task-table/TaskTableHeader";
import useFilteredTasks from "@/hooks/useFilteredTasks";

const RenderTaskTableAccordions = () => {
  const { groupByStatus, loading, statuses } = useFilteredTasks();

  return loading ? (
    <TaskTableSkeleton />
  ) : (
    statuses.length >= 1 &&
      groupByStatus &&
      statuses.map((status) => (
        <TaskTableAccordion
          key={status}
          status={status}
          tasks={groupByStatus[status]}
        />
      ))
  );
};

export default function TaskTable() {
  return (
    <main className="flex h-[700px] w-full flex-col items-start justify-start gap-4">
      <TaskTableHeader />

      <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-auto no-scrollbar">
        <div className="flex w-full flex-col items-start justify-start gap-4 pb-6">
          <RenderTaskTableAccordions />
        </div>
      </div>
    </main>
  );
}
