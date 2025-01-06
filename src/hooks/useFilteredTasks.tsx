import { UserProfileContext } from "@/context/UserProfileContext";
import { Status, Task, useGetTasksQuery } from "@/gql/graphql";
import { useContext } from "react";
import { useLocation } from "react-router";

export default function useFilteredTasks() {
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

  return {
    statuses,
    groupByStatus,
    loading,
  };
}
