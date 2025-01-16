import Avatar from "@/components/core/design-system/Avatar";
import TaskDropDownMenuOptions from "@/components/core/design-system/TaskDropdownMenuOptions";
import TechTag from "@/components/core/TechTag";
import TimerTag from "@/components/core/TimerTag";
import TaskCardAction from "@/components/features/task/TaskCardAction";
import { POINTS_ESTIMATE } from "@/constants/points-estimate";
import { Task, TaskTag } from "@/gql/graphql";
import { formatDate } from "@/lib/date";
import { useFormState } from "@/stores/form-state";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      component: "TaskCard",
      name: task.name,
      position: task.position,
      status: task.status,
    },
  });
  const { setIsDialogOpen, setCurrentTask, setIsDeleteTaskModalOpen } =
    useFormState((state) => state);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : 0,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="h-min-[208px] flex h-full w-full cursor-grab touch-none flex-col items-center justify-center gap-4 rounded-lg bg-ravn-neutral-4 p-4 text-ravn-neutral-1 active:cursor-grabbing"
    >
      <div className="flex h-8 w-full items-center justify-between">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-ravn-neutral-1 text-body-l-bold">
          {task.name}
        </p>

        <TaskDropDownMenuOptions
          setCurrentTask={setCurrentTask}
          setIsDeleteTaskModalOpen={setIsDeleteTaskModalOpen}
          setIsDialogOpen={setIsDialogOpen}
          task={task}
        />
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="text-body-m-bold">
          {POINTS_ESTIMATE[task.pointEstimate]} Points
        </p>
        <TimerTag timeTag={formatDate(task.dueDate)} />
      </div>

      <div className="flex w-full items-center justify-start gap-2">
        {task.tags.map((tag: TaskTag) => (
          <TechTag key={tag} tags={[tag]} />
        ))}
      </div>

      <div className="flex w-full items-center justify-between">
        <Avatar className="h-8 w-8" url={task.creator?.avatar ?? undefined} />

        <TaskCardAction />
      </div>
    </article>
  );
}
