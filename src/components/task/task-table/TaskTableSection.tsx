import TableFilterHeader from "@/components/core/TableFilterHeader";
import TaskTable from "@/components/task/task-table/TaskTable";

export default function TaskTableSection() {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-4">
      <TableFilterHeader />

      <TaskTable />
    </main>
  );
}
