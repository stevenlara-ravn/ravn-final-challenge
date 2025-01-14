import Timer from "@/assets/icons/timer.svg?react";
import Tag from "@/components/core/design-system/Tag";
import { timerTagColors } from "@/constants/colors";
import { cn } from "@/utils/cn";

interface TimerTagProps {
  timeTag: keyof typeof timerTagColors | string;
}

const timeTagColor = (timeTag: TimerTagProps["timeTag"]) =>
  timerTagColors[timeTag] ?? "text-ravn-neutral-1 bg-ravn-neutral-2/10";

export default function TimerTag({ timeTag }: TimerTagProps) {
  return (
    <Tag className={cn("min-w-[115px] gap-2", timeTagColor(timeTag))}>
      <Timer className={cn("h-5 w-5", timeTagColor(timeTag))} />
      <p className="uppercase text-body-m-bold">{timeTag}</p>
    </Tag>
  );
}
