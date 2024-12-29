import { useGetTasksStatusQuery } from "@/gql/graphql";
import TaskColumn from "@/task/components/TaskColumn";

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
    <main className="flex items-start justify-between gap-8 overflow-x-auto">
      {
        STATUS.map((status) => (
          <TaskColumn key={status} status={status} />
        ))
      }
    </main>
  );
}
