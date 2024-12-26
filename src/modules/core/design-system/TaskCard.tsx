import MoreIcon from "@/assets/icons/more.svg?react";
import Timer from "@/assets/icons/timer.svg?react";
import Button from "@/core/design-system/Button";

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
        <div className="flex w-[115px] items-center justify-center gap-2 rounded bg-ravn-neutral-2/10 text-ravn-neutral-1">
          <Timer className="h-5 w-5" />
          <p>Today</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </article>
  );
}
