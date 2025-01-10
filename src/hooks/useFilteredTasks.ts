import { UserProfileContext } from "@/context/UserProfileContext";
import {
  PointEstimate,
  Status,
  TaskTag,
  useGetTasksQuery,
} from "@/gql/graphql";
import { mappedPointsEstimate } from "@/helpers/points-estimate";
import { useTaskSearchState } from "@/stores/task-search-state";
import { groupBy } from "@/utils/array";
import { useContext } from "react";
import { useLocation } from "react-router";

export default function useFilteredTasks() {
  const { profileData } = useContext(UserProfileContext);
  const location = useLocation();
  const { searchTerm } = useTaskSearchState((state) => state);

  const isMyTasksRoute = location.pathname === "/my-tasks";

  const { data: allTasks, loading: loadingAllTasks } = useGetTasksQuery({
    variables: {
      input: {
        ...(isMyTasksRoute && { assigneeId: profileData?.id }),
      },
    },
  });

  const { data: nameData, loading: loadingNameData } = useGetTasksQuery({
    variables: { input: { name: searchTerm } },
    skip: !searchTerm || !searchTerm.length,
  });

  const { data: tagData, loading: loadingTagData } = useGetTasksQuery({
    variables: {
      input: {
        tags: [searchTerm.toUpperCase() as TaskTag],
      },
    },
    skip:
      !searchTerm ||
      !Object.values(TaskTag).includes(searchTerm.toUpperCase() as TaskTag),
  });

  const { data: statusData, loading: loadingStatusData } = useGetTasksQuery({
    variables: { input: { status: searchTerm.toUpperCase() as Status } },
    skip:
      !searchTerm ||
      !Object.values(Status).includes(searchTerm.toUpperCase() as Status),
  });

  const { data: pointEstimateData, loading: loadingPointEstimateData } =
    useGetTasksQuery({
      variables: {
        input: {
          pointEstimate: mappedPointsEstimate(
            Number(searchTerm),
            "string",
          ) as PointEstimate,
        },
      },
      skip: !searchTerm || (!Number(searchTerm) && !(Number(searchTerm) === 0)),
    });

  const combinedTasks = [
    ...((!searchTerm && allTasks?.tasks) || []),
    ...(nameData?.tasks || []),
    ...(tagData?.tasks || []),
    ...(statusData?.tasks || []),
    ...(pointEstimateData?.tasks || []),
  ];

  const uniqueTasks = Array.from(
    new Map(combinedTasks.map((task) => [task.id, task])).values(),
  );

  const sortedTasks = uniqueTasks.sort((a, b) => a.position - b.position);

  const groupedByStatus = groupBy(sortedTasks, (task) => task.status);

  return {
    groupedByStatus,
    loading:
      loadingAllTasks ||
      loadingNameData ||
      loadingTagData ||
      loadingStatusData ||
      loadingPointEstimateData,
  };
}
