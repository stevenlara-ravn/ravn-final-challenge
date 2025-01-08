import { UserProfileContext } from "@/context/UserProfileContext";
import { Task } from "@/gql/graphql";
import { mappedPointsEstimate } from "@/helpers/points-estimate";
import useTasks from "@/hooks/api/useTasks";
import { useTaskSearchState } from "@/stores/task-search-state";
import { groupBy, sortBy } from "@/utils/array";
import { useContext } from "react";
import { useLocation } from "react-router";

const matchesDateSearch = (
  taskDate: Date | null,
  searchTerm: string,
): boolean => {
  if (!taskDate || isNaN(taskDate.getTime())) return false;

  const lowerSearchTerm = searchTerm.toLowerCase().trim();

  const year = taskDate.getFullYear().toString();
  const month = taskDate
    .toLocaleString("default", { month: "long" })
    .toLowerCase();
  const shortMonth = taskDate
    .toLocaleString("default", { month: "short" })
    .toLowerCase();
  const isoDate = taskDate.toISOString().split("T")[0];

  const parsedSearchDate = new Date(searchTerm);
  const isValidParsedDate = !isNaN(parsedSearchDate.getTime());

  return (
    isoDate === lowerSearchTerm ||
    year === lowerSearchTerm ||
    month.includes(lowerSearchTerm) ||
    shortMonth.includes(lowerSearchTerm) ||
    (isValidParsedDate &&
      parsedSearchDate.toISOString().split("T")[0] === isoDate)
  );
};

const matchesTextSearch = (task: Task, searchTerm: string): boolean => {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return (
    task.name?.toLowerCase().includes(lowerCaseSearchTerm) ||
    task.tags?.some((tag: string) =>
      tag.toLowerCase().includes(lowerCaseSearchTerm),
    ) ||
    task.assignee?.fullName?.toLowerCase().includes(lowerCaseSearchTerm) ||
    task.status?.toLowerCase().includes(lowerCaseSearchTerm) ||
    mappedPointsEstimate(task.pointEstimate, "number")
      ?.toString()
      .includes(lowerCaseSearchTerm)
  );
};

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
    filteredTasks = filteredTasks?.filter((task) => {
      const taskDate = task.dueDate ? new Date(task.dueDate) : null;

      return (
        matchesTextSearch(task, searchTerm) ||
        matchesDateSearch(taskDate, searchTerm)
      );
    });
  }

  filteredTasks = sortBy<Task>(
    filteredTasks ?? [],
    (task) => task.position,
    "asc",
  );

  const createdStatuses = [
    ...new Set(filteredTasks?.map((task) => task.status)),
  ];

  const groupedByStatus = groupBy(filteredTasks ?? [], (task) => task.status);

  return {
    createdStatuses,
    groupedByStatus,
    loading,
  };
}
