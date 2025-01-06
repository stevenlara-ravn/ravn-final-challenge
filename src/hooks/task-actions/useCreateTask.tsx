import { Status, useCreateTaskMutation } from "@/gql/graphql";
import { TaskInputs } from "@/types/Task";
import { toast } from "sonner";

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
          status: Status.Todo,
          assigneeId: data.assigneeId,
        },
      },
      onCompleted: () => {
        toast.success("Task created successfully!");
        onSuccess();
      },
      onError: (error) => {
        toast.error("Oops! Something went wrong.");
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
