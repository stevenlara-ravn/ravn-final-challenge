import MoreIcon from "@/assets/icons/more.svg?react";
import Avatar from "@/components/features/core/design-system/Avatar";
import Button from "@/components/features/core/design-system/Button";
import TechTag from "@/components/features/core/TechTag";
import TimerTag from "@/components/features/core/TimerTag";
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
      <div className="flex w-full items-center justify-between">
        <p className="text-ravn-neutral-1 text-body-l-bold">{task.name}</p>
        <Button className="h-6 w-6">
          <MoreIcon className="text-ravn-neutral-2" />
        </Button>
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="text-body-m-bold">
          {POINTS_ESTIMATE[task.pointEstimate]} Points
        </p>
        <TimerTag timeTag={formatDate(task.dueDate)} />
      </div>

      <div className="flex w-full items-center justify-start gap-2">
        {task.tags.map((tag: TaskTag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>

      <div className="flex w-full items-center justify-between">
        <Avatar className="h-8 w-8" url={task.creator?.avatar ?? undefined} />

        <TaskCardAction />
      </div>
    </article>
  );
}
