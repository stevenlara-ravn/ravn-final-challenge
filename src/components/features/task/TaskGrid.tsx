import TaskGridSkeleton from "@/components/core/TaskGridSkeleton";
import TaskColumn from "@/components/features/task/TaskColumn";
import { UserProfileContext } from "@/context/UserProfileContext";
import { Status, Task, useGetTasksQuery } from "@/gql/graphql";
import { useContext } from "react";
import { useLocation } from "react-router";

export default function TaskGrid() {
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
    <main className="flex h-full w-full items-start justify-start gap-8 overflow-x-auto no-scrollbar">
      {loading ? (
        <TaskGridSkeleton />
      ) : (
        statuses.length >= 1 &&
        groupByStatus &&
        statuses.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={groupByStatus[status]}
          />
        ))
      )}
    </main>
  );
}
