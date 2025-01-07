import {
  errorToast,
  successToast,
} from "@/components/core/design-system/ToastNotifications";
import { useUpdateTaskMutation } from "@/gql/graphql";
import { TaskInputs } from "@/types/Task";

export default function useUpdateTask(onSuccess: () => void) {
  const [updateTaskMutation, { loading, error }] = useUpdateTaskMutation();

  const updateTask = async (id: string, data: TaskInputs) => {
    await updateTaskMutation({
      variables: {
        input: {
          id: id,
          dueDate: new Date(data.dueDate).toISOString(),
          name: data.name,
          pointEstimate: data.pointEstimate,
          tags: data.tags,
          assigneeId: data.assigneeId,
        },
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
