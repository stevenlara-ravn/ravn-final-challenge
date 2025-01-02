import TaskTableAccordion from "@/components/features/task/task-table/TaskTableAccordion";
import TaskTableHeader from "@/components/features/task/task-table/TaskTableHeader";
import { useGetTasksStatusQuery } from "@/gql/graphql";

export default function TaskTable() {
  const { data } = useGetTasksStatusQuery({
    variables: { input: {} },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  const STATUS = [...new Set(data?.tasks.map((task) => task.status))];

  return (
    <main className="flex h-[700px] w-full flex-col items-start justify-start gap-4">
      <TaskTableHeader />

      <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-auto no-scrollbar">
        <div className="flex w-full flex-col items-start justify-start gap-4 pb-6">
          {STATUS.map((status) => (
            <TaskTableAccordion key={status} status={status} />
          ))}
        </div>
      </div>
    </main>
  );
}
