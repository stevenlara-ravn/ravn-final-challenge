import TaskColumn from "@/task/components/TaskColumn";

export default function TaskSectionList() {
  return (
    <main className="flex items-start justify-between gap-8">
      <TaskColumn count={7} />
      <TaskColumn count={2} />
      <TaskColumn count={1} />
    </main>
  );
}
