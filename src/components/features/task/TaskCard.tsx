import Avatar from "@/components/core/design-system/Avatar";
import DropDownMenu from "@/components/core/design-system/DropdownMenu";
import TechTag from "@/components/core/TechTag";
import TimerTag from "@/components/core/TimerTag";
import TaskCardAction from "@/components/features/task/TaskCardAction";
import { POINTS_ESTIMATE } from "@/constants/points-estimate";
import { Task, TaskTag } from "@/gql/graphql";
import { formatDate } from "@/lib/date";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="h-min-[208px] flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-ravn-neutral-4 p-4 text-ravn-neutral-1">
      <div className="flex h-8 w-full items-center justify-between">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-ravn-neutral-1 text-body-l-bold">
          {task.name}
        </p>

        <DropDownMenu task={task} />
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
