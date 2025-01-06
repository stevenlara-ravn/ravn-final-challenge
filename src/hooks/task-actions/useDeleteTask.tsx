import { useDeleteTaskMutation } from "@/gql/graphql";
import { Reference } from "@apollo/client";
import { toast } from "sonner";

export default function useDeleteTask(onSuccess: () => void) {
  const [deleteTaskMutation, { loading, error }] = useDeleteTaskMutation({
    update: (cache, { data }) => {
      if (data?.deleteTask) {
        cache.modify({
          fields: {
            tasks(existingTasks = [], { readField }) {
              return existingTasks.filter(
                (taskRef: Reference) =>
                  readField("id", taskRef) !== data.deleteTask.id,
              );
            },
          },
        });
      }
    },
  });

  const deleteTask = async (id: string) => {
    await deleteTaskMutation({
      variables: {
        input: {
          id: id,
        },
      },
      onCompleted: () => {
        toast.success("Task deleted successfully!");
        onSuccess();
      },
      onError: (error) => {
        toast.error("Oops! Something went wrong.");
        console.error(error);
      },
    });
  };

  return {
    deleteTask,
    loading,
    error,
  };
}
