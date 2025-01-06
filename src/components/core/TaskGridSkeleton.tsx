const TaskCardSkeleton = () => {
  return (
    <article className="flex h-[208px] w-[348px] animate-pulse flex-col items-center justify-center gap-4 rounded-lg bg-ravn-neutral-4 p-4">
      <div className="flex w-full items-center justify-between">
        <div className="h-4 w-1/2 rounded bg-ravn-neutral-3" />
        <div className="h-6 w-10 bg-ravn-neutral-3" />
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="h-4 w-1/4 rounded bg-ravn-neutral-3" />
        <div className="h-4 w-1/4 rounded bg-ravn-neutral-3" />
      </div>

      <div className="flex w-full items-center justify-start gap-2">
        <div className="h-4 w-1/4 rounded bg-ravn-neutral-3" />
        <div className="h-4 w-1/4 rounded bg-ravn-neutral-3" />
        <div className="h-4 w-1/4 rounded bg-ravn-neutral-3" />
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="h-8 w-8 rounded-full bg-ravn-neutral-3" />
        <div className="h-6 w-[106px] bg-ravn-neutral-3" />
      </div>
    </article>
  );
};

export default function TaskGridSkeleton() {
  return (
    <div className="flex h-full w-full animate-pulse items-center justify-between gap-8">
      <div className="flex h-full w-[348px] flex-col gap-4">
        <div className="h-8 w-2/3 bg-ravn-neutral-4" />
        <TaskCardSkeleton />
        <TaskCardSkeleton />
        <TaskCardSkeleton />
      </div>
      <div className="flex h-full w-[348px] flex-col gap-4">
        <div className="h-8 w-2/3 bg-ravn-neutral-4" />
        <TaskCardSkeleton />
        <TaskCardSkeleton />
      </div>
      <div className="flex h-full w-[348px] flex-col gap-4">
        <div className="h-8 w-2/3 bg-ravn-neutral-4" />
        <TaskCardSkeleton />
      </div>
    </div>
  );
}
