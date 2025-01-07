import { Task, useGetTasksQuery } from "@/gql/graphql";

interface TasksResponse {
  tasks: Task[] | undefined;
  loading: boolean;
}

export default function useTasks(): TasksResponse {
  const { data, loading } = useGetTasksQuery({
    variables: { input: {} },
  });

  const mappedTasks = data?.tasks.map((task) => ({
    __typename: task?.__typename,
    id: task.id,
    name: task.name,
    assignee: task.assignee
      ? {
          __typename: task.assignee?.__typename,
          id: task.assignee.id,
          fullName: task.assignee.fullName,
          avatar: task.assignee?.avatar,
          createdAt: task.assignee.createdAt,
          email: task.assignee.email,
          type: task.assignee.type,
          updatedAt: task.assignee.updatedAt,
        }
      : undefined,
    creator: {
      __typename: task.creator.__typename,
      id: task.creator.id,
      fullName: task.creator.fullName,
      avatar: task.creator.avatar,
      createdAt: task.creator.createdAt,
      email: task.creator.email,
      type: task.creator.type,
      updatedAt: task.creator.updatedAt,
    },
    createdAt: task.createdAt,
    dueDate: task.dueDate,
    pointEstimate: task.pointEstimate,
    position: task.position,
    status: task.status,
    tags: task.tags,
  }));

  return {
    tasks: mappedTasks,
    loading,
  };
}
