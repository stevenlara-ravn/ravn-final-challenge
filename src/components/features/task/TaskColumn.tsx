import TaskCard from "@/components/features/task/TaskCard";
import { Status, Task } from "@/gql/graphql";
import { normalizeText, zeroPad } from "@/utils/text-transform";

interface TaskColumnProps {
  status: Status;
  tasks: Task[];
}

export default function TaskColumn({ status, tasks }: TaskColumnProps) {
  return (
    <section className="flex h-full w-full min-w-[348px] flex-col items-center justify-start gap-4 overflow-hidden rounded-lg">
      <p className="h-8 w-full capitalize text-ravn-neutral-1 text-body-l-bold">
        {normalizeText(status)} ({zeroPad(tasks.length ?? 0)})
      </p>

      <div className="flex w-full flex-col items-center justify-start gap-4 overflow-y-auto pb-6 no-scrollbar">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
