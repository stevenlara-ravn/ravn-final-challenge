import TaskCard from "@/task/components/TaskCard";

export default function TaskColumn({ count }: { count: number }) {
  return (
    <section className="flex h-[700px] w-full min-w-[348px] flex-col items-center justify-start gap-4 overflow-hidden rounded-lg">
      <p className="text-body-l h-8 w-full font-semibold text-ravn-neutral-1">
        Working on
      </p>

      <div className="flex w-full flex-col items-center justify-start gap-4 overflow-y-auto pb-4">
        {Array.from({ length: count }, (_, i) => (
          <TaskCard key={i} />
        ))}
      </div>
    </section>
  );
}
