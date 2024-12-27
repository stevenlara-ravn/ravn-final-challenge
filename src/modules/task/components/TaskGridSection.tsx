import TaskColumn from "@/task/components/TaskColumn";

export default function TaskGridSection() {
  return (
    <main className="over flex items-start justify-between gap-8 overflow-x-auto">
      <TaskColumn count={7} />
      <TaskColumn count={2} />
      <TaskColumn count={2} />
      <TaskColumn count={1} />
    </main>
  );
}
