import Timer from "@/assets/icons/timer.svg?react";
import { timerTagColors } from "@/constants/tag-colors";
import { TimerTagProps } from "@/types/Tag";

const timeTagColor = (timeTag: TimerTagProps["timeTag"]) => timerTagColors[timeTag] ?? "text-ravn-neutral-1 bg-ravn-neutral-2/10";

export default function TimerTag({ timeTag }: TimerTagProps) {
  return (
    <div
      className={`flex h-8 min-w-[115px] items-center justify-center gap-2 rounded  px-4 py-1
        ${timeTagColor(timeTag)}`}
    >
      <Timer className={`h-5 w-5 ${timeTagColor(timeTag)}`} />
      <p className="uppercase">{timeTag}</p>
    </div>
  );
}
