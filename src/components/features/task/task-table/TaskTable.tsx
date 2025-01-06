import TaskTableSkeleton from "@/components/core/TaskTableSkeleton";
import TaskTableAccordion from "@/components/features/task/task-table/TaskTableAccordion";
import TaskTableHeader from "@/components/features/task/task-table/TaskTableHeader";
import { UserProfileContext } from "@/context/UserProfileContext";
import { Status, Task, useGetTasksQuery } from "@/gql/graphql";
import { useContext } from "react";
import { useLocation } from "react-router";

export default function TaskTable() {
  const { profileData } = useContext(UserProfileContext);
  const location = useLocation();

  const isMyTasksRoute = location.pathname === "/my-tasks";
  const assigneeId = isMyTasksRoute ? profileData?.id : null;

  const { data, loading } = useGetTasksQuery({
    variables: { input: {} },
    notifyOnNetworkStatusChange: true,
  });

  const filteredTasks = isMyTasksRoute
    ? data?.tasks.filter((task) => task.assignee?.id === assigneeId)
    : data?.tasks;

  const statuses = [...new Set(filteredTasks?.map((task) => task.status))];

  const groupByStatus = filteredTasks?.reduce(
    (previousValue, currentValue) => {
      previousValue[currentValue.status] = [
        ...(previousValue[currentValue.status] ?? []),
        currentValue,
      ];
      return previousValue;
    },
    {} as Record<Status, Task[]>,
  );

  return (
    <main className="flex h-[700px] w-full flex-col items-start justify-start gap-4">
      <TaskTableHeader />

      <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-auto no-scrollbar">
        <div className="flex w-full flex-col items-start justify-start gap-4 pb-6">
          {loading ? (
            <TaskTableSkeleton />
          ) : (
            statuses.length >= 1 &&
            groupByStatus &&
            statuses.map((status) => (
              <TaskTableAccordion
                key={status}
                status={status}
                tasks={groupByStatus[status]}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
