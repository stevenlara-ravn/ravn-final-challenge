import {
  errorToast,
  successToast,
} from "@/components/core/design-system/ToastNotifications";
import {
  Status,
  Task,
  UpdateTaskInput,
  UserType,
  useUpdateTaskMutation,
} from "@/gql/graphql";

export default function useUpdateTask(onSuccess: () => void) {
  const [updateTaskMutation, { loading, error }] = useUpdateTaskMutation({});

  const updateTask = async (id: string, data: Omit<UpdateTaskInput, "id">) => {
    await updateTaskMutation({
      variables: {
        input: {
          id: id,
          dueDate: new Date(data.dueDate).toISOString(),
          name: data.name,
          pointEstimate: data.pointEstimate,
          tags: data.tags,
          assigneeId: data.assigneeId,
          status: data.status,
          position: data.position,
        },
      },
      optimisticResponse: {
        __typename: "Mutation",
        updateTask: {
          __typename: "Task",
          id,
          name: data.name ?? "",
          dueDate: new Date(data.dueDate).toISOString(),
          pointEstimate: data.pointEstimate,
          tags: data.tags ?? [],
          creator: {
            __typename: "User",
            id: "",
            avatar: "",
            createdAt: "",
            email: "",
            updatedAt: "",
            fullName: "",
            type: UserType.Candidate,
          },
          createdAt: new Date().toISOString(),
          assignee: {
            __typename: "User",
            id: data.assigneeId ?? "",
            avatar: "",
            email: "",
            createdAt: "",
            updatedAt: "",
            fullName: "",
            type: UserType.Candidate,
          },
          status: data.status ?? Status.Todo,
          position: data.position ?? 1,
        } as Task,
      },
      update: (cache, { data }) => {
        if (!data?.updateTask) return;

        cache.modify({
          id: cache.identify(data.updateTask),
          fields: {
            status: () => data.updateTask.status,
            position: () => data.updateTask.position,
            name: () => data.updateTask.name,
            dueDate: () => data.updateTask.dueDate,
            tags: () => data.updateTask.tags,
            assigneeId: () => data.updateTask.assignee?.id,
          },
        });
      },
      onCompleted: () => {
        successToast("Task updated successfully!");
        onSuccess();
      },
      onError: (error) => {
        errorToast("Oops! Something went wrong.");
        console.error(error);
      },
    });
  };

  return {
    updateTask,
    loading,
    error,
  };
}
