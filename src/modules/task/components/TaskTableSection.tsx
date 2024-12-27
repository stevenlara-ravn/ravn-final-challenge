import TableFilterHeader from "@/core/components/TableFilterHeader";
import TaskTable from "@/core/design-system/TaskTable";

export default function TaskTableSection() {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-4">
      <TableFilterHeader />

      <TaskTable></TaskTable>
    </main>
  );
}
