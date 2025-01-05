import AssigneeCombo from "@/components/core/AssigneeCombo";
import Button from "@/components/core/design-system/Button";
import DueDatePicker from "@/components/core/DueDatePicker";
import EstimatePointsCombo from "@/components/core/EstimatePointsCombo";
import TagCombo from "@/components/core/TagCombo";
import TaskTitle from "@/components/features/task/TaskTitle";
import { FormPropsProvider } from "@/context/FormPropsContext";
import { Status, useCreateTaskMutation } from "@/gql/graphql";
import { taskSchema } from "@/schemas/task";
import { TaskInputs } from "@/types/Task";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function TaskForm({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const methods = useForm<TaskInputs>({
    resolver: zodResolver(taskSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      pointEstimate: undefined,
      tags: [],
      dueDate: new Date().toISOString(),
    },
  });

  const { handleSubmit, reset } = methods;

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

  const onSubmit = async (data: TaskInputs) => {
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
      },
      onError: (error) => {
        toast.error("Oops! Something went wrong.");
        console.error(error);
      },
    });

    reset();
    setOpen(false);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center justify-between gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TaskTitle />
        <div className="flex min-h-8 w-full items-center justify-between gap-4">
          <FormPropsProvider>
            <EstimatePointsCombo />
            <AssigneeCombo />
            <TagCombo />
            <DueDatePicker />
          </FormPropsProvider>
        </div>

        {error && <p className="text-red-500">Error: {error.message}</p>}

        <div className="flex h-10 w-[150px] items-center justify-between gap-6 self-end text-body-m-regular">
          <Button
            className="h-full w-full rounded-lg p-2 hover:bg-ravn-neutral-4"
            onClick={() => setOpen(false)}
            type="button"
          >
            Cancel
          </Button>
          <Button
            className="h-full w-full rounded-lg bg-ravn-primary-4 p-2 hover:bg-ravn-primary-2"
            disabled={loading}
            type="submit"
          >
            {loading ? "Creating..." : "Create"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
