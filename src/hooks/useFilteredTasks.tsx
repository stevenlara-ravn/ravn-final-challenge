import { UserProfileContext } from "@/context/UserProfileContext";
import useTasks from "@/hooks/api/useTasks";
import { useTaskSearchState } from "@/stores/task-search-state";
import { groupBy } from "@/utils/array";
import { useContext } from "react";
import { useLocation } from "react-router";

export default function useFilteredTasks() {
  const { profileData } = useContext(UserProfileContext);
  const location = useLocation();
  const searchTerm = useTaskSearchState((state) => state.searchTerm);
  const { tasks, loading } = useTasks();

  const isMyTasksRoute = location.pathname === "/my-tasks";
  const assigneeId = isMyTasksRoute ? profileData?.id : null;

  let filteredTasks = isMyTasksRoute
    ? tasks?.filter((task) => task.assignee?.id === assigneeId)
    : tasks;

  if (searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    filteredTasks = filteredTasks?.filter((task) => {
      return (
        task.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
        task.tags?.some((tag) =>
          tag.toLowerCase().includes(lowerCaseSearchTerm),
        ) ||
        task.assignee?.id?.toLowerCase().includes(lowerCaseSearchTerm) ||
        task.dueDate?.toLowerCase().includes(lowerCaseSearchTerm) ||
        task.status?.toLowerCase().includes(lowerCaseSearchTerm) ||
        String(task.pointEstimate).includes(searchTerm)
      );
    });
  }

  const statuses = [...new Set(filteredTasks?.map((task) => task.status))];

  const groupByStatus = groupBy(filteredTasks ?? [], (task) => task.status);

  return {
    statuses,
    groupByStatus,
    loading,
  };
}
