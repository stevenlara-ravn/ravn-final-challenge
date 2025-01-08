import TaskCard from "@/components/features/task/TaskCard";
import { Status, Task } from "@/gql/graphql";
import { normalizeText, zeroPad } from "@/utils/text-transform";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

interface TaskColumnProps {
  status: Status;
  tasks: Task[];
}

export default function TaskColumn({ status, tasks }: TaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
    data: {
      status,
      position: tasks.length,
    },
  });

  const style = {
    backgroundColor: isOver ? "#BA25251A" : "",
    minHeight: "100px",
  };

  return (
    <section
      className="flex h-full w-[348px] min-w-[348px] flex-col items-center justify-start gap-4 overflow-hidden rounded-lg"
      ref={setNodeRef}
      style={style}
    >
      <p className="h-8 w-full capitalize text-ravn-neutral-1 text-body-l-bold">
        {normalizeText(status)} ({zeroPad(tasks.length ?? 0)})
      </p>

      <SortableContext items={tasks.map((task) => task.id)}>
        <div className="flex w-full flex-col items-center justify-start gap-4 overflow-y-auto pb-6 no-scrollbar">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </section>
  );
}
