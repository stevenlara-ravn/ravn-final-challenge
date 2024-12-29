import MoreIcon from "@/assets/icons/more.svg?react";
import TimerTag from "@/core/components/TimerTag";
import { POINTS_ESTIMATE } from "@/core/constants/points-estimate";
import Avatar from "@/core/design-system/Avatar";
import Button from "@/core/design-system/Button";
import Tag from "@/core/design-system/Tag";
import { formatDate } from "@/lib/date";
import TaskCardAction from "@/task/components/TaskCardAction";
import { TaskCardProps } from "@/task/types/TaskCard";

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="h-min-[208px] flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-ravn-neutral-4 p-4 text-ravn-neutral-1">
      <div className="flex w-full items-center justify-between">
        <p>{task.name}</p>
        <Button className="h-6 w-6">
          <MoreIcon className="text-ravn-neutral-2" />
        </Button>
      </div>

      <div className="flex w-full items-center justify-between">
        <p>{POINTS_ESTIMATE[task.pointEstimate]} Points</p>
        <TimerTag timeTag={formatDate(task.dueDate)} />
      </div>

      <div className="flex w-full items-center justify-start gap-2">
        {
          task.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))
        }
      </div>

      <div className="flex w-full items-center justify-between">
        <Avatar className="w-8 h-8" />

        <TaskCardAction />
      </div>
    </article>
  );
}
