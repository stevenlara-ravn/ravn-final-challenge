import TaskColumn from "@/components/task/TaskColumn";
import { useGetTasksStatusQuery } from "@/gql/graphql";

export default function TaskGridSection() {
  const { data } = useGetTasksStatusQuery({
    variables: {
      input: {},
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const STATUS = [...new Set(data?.tasks.map((task) => task.status))];

  return (
    <main className="flex h-full w-full items-start justify-between gap-8 overflow-x-auto no-scrollbar">
      {STATUS.map((status) => (
        <TaskColumn key={status} status={status} />
      ))}
    </main>
  );
}
