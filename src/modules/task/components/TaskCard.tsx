import MoreIcon from "@/assets/icons/more.svg?react";
import TimerTag from "@/core/components/TimerTag";
import Avatar from "@/core/design-system/Avatar";
import Button from "@/core/design-system/Button";
import Tag from "@/core/design-system/Tag";
import TaskCardAction from "@/task/components/TaskCardAction";

export default function TaskCard() {
  return (
    <article className="h-min-[208px] flex h-full w-[348px] flex-col items-center justify-center gap-4 rounded-lg bg-ravn-neutral-4 p-4 text-ravn-neutral-1">
      <div className="flex w-full items-center justify-between">
        <p>Twitter</p>
        <Button className="h-6 w-6">
          <MoreIcon className="text-ravn-neutral-2" />
        </Button>
      </div>

      <div className="flex w-full items-center justify-between">
        <p>3 Pts</p>
        <TimerTag timeTag="Yesterday" />
      </div>

      <div className="flex w-full items-center justify-start gap-2">
        <Tag className="bg-ravn-secondary-4/10 text-ravn-secondary-4">
          ios app
        </Tag>
        <Tag className="bg-ravn-tertiary-4/10 text-ravn-tertiary-4">
          android
        </Tag>
      </div>

      <div className="flex w-full items-center justify-between">
        <Avatar></Avatar>

        <TaskCardAction />
      </div>
    </article>
  );
}
