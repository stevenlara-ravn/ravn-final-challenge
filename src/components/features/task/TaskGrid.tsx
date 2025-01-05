import TaskColumn from "@/components/features/task/TaskColumn";
import { useGetTasksStatusQuery } from "@/gql/graphql";

export default function TaskGrid() {
  const { data, loading } = useGetTasksStatusQuery({
    variables: { input: {} },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const STATUS = [...new Set(data?.tasks.map((task) => task.status))];

  return (
    <main className="flex h-full w-full items-start justify-start gap-8 overflow-x-auto no-scrollbar">
      {loading ? (
        <div className="flex h-8 w-full animate-pulse items-center justify-center gap-20">
          <span className="inline-block h-full w-[348px] bg-ravn-neutral-3" />
          <span className="inline-block h-full w-[348px] bg-ravn-neutral-3" />
          <span className="inline-block h-full w-[348px] bg-ravn-neutral-3" />
        </div>
      ) : (
        STATUS.map((status) => <TaskColumn key={status} status={status} />)
      )}
    </main>
  );
}
