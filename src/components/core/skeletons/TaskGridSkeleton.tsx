import TaskCardSkeleton from "@/components/core/skeletons/TaskCardSkeleton";

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
