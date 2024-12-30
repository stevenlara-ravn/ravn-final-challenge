import TableHeader from "@/components/core/TableHeader";
import TaskTable from "@/components/task/task-table/TaskTable";
import { useGetTasksStatusQuery } from "@/gql/graphql";

export default function TaskTableSection() {
  const { data } = useGetTasksStatusQuery({
    variables: {
      input: {},
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const STATUS = [...new Set(data?.tasks.map((task) => task.status))];

  return (
    <main className="flex h-full w-full flex-col items-start justify-start gap-4">
      <TableHeader />

      {
        STATUS.map((status) => (
          <TaskTable key={status} status={status} />
        ))
      }
    </main>
  );
}
