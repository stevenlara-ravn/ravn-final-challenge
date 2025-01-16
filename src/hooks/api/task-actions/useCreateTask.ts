import {
  errorToast,
  successToast,
} from "@/components/core/design-system/ToastNotifications";
import { Status, useCreateTaskMutation } from "@/gql/graphql";
import { TaskInputs } from "@/types/Task";

export default function useCreateTask(onSuccess: () => void) {
  const [createTaskMutation, { loading, error }] = useCreateTaskMutation({
    update: (cache, { data }) => {
      if (data?.createTask) {
        const newTaskRef = cache.identify(data.createTask);

        cache.modify({
          fields: {
            tasks(existingTasks = []) {
              return [...existingTasks, { __ref: newTaskRef }];
            },
          },
        });
      }
    },
  });

  const createTask = async (data: TaskInputs) => {
    await createTaskMutation({
      variables: {
        input: {
          dueDate: new Date(data.dueDate).toISOString(),
          name: data.name,
          pointEstimate: data.pointEstimate,
          tags: data.tags,
          status: Status.Backlog,
          assigneeId: data.assigneeId,
        },
      },
      optimisticResponse: {
        __typename: "Mutation",
        createTask: {
          __typename: "Task",
          id: "",
          name: data.name ?? "",
          dueDate: new Date(data.dueDate).toISOString(),
          pointEstimate: data.pointEstimate,
          tags: data.tags ?? [],
          assignee: {
            __typename: "User",
            id: data.assigneeId ?? "",
            fullName: "Saving...",
          },
          createdAt: new Date().toISOString(),
          creator: {
            __typename: "User",
            id: "",
            fullName: "Saving...",
          },
          status: Status.Backlog,
          position: data.position ?? 1,
        },
      },
      onCompleted: () => {
        successToast("Task created successfully!");
        onSuccess();
      },
      onError: (error) => {
        errorToast("Oops! Something went wrong.");
        console.error(error);
      },
    });
  };

  return {
    createTask,
    loading,
    error,
  };
}
