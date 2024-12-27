import Timer from "@/assets/icons/timer.svg?react";

export default function TimerTag({ timeTag }: { timeTag: string }) {
  return (
    <div className="flex h-8 min-w-[115px] items-center justify-center gap-2 rounded bg-ravn-neutral-2/10 px-4 py-1 text-ravn-neutral-1">
      <Timer className="h-5 w-5" />
      <p className="uppercase">{timeTag}</p>
    </div>
  );
}
