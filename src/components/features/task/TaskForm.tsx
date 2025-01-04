import AssigneeCombo from "@/components/features/core/AssigneeCombo";
import Button from "@/components/features/core/design-system/Button";
import DueDate from "@/components/features/core/DueDate";
import EstimatePointsCombo from "@/components/features/core/EstimatePointsCombo";
import TagCombo from "@/components/features/core/TagCombo";
import TaskTitle from "@/components/features/task/TaskTitle";
import { FormPropsProvider } from "@/context/FormPropsContext";
import { Status, useCreateTaskMutation } from "@/gql/graphql";
import { taskSchema } from "@/schemas/task";
import { TaskInputs } from "@/types/Task";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider, useForm } from "react-hook-form";

export default function TaskForm() {
  const methods = useForm<TaskInputs>({
    resolver: zodResolver(taskSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log({ errors });

  const [createTaskMutation, { loading, error }] = useCreateTaskMutation();

  const onSubmit = async (data: TaskInputs) => {
    try {
      const response = await createTaskMutation({
        variables: {
          input: {
            dueDate: new Date(data.dueDate).toISOString(),
            name: data.name,
            pointEstimate: data.pointEstimate,
            tags: data.tags,
            status: Status.Todo,
          },
        },
      });

      console.log(response.data);
      console.log("Task created successfully:", response.data);
    } catch (err) {
      console.error("Error creating task:", err);
    }
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
            <DueDate />
          </FormPropsProvider>
        </div>

        {error && <p className="text-red-500">Error: {error.message}</p>}

        <div className="flex h-10 w-[150px] items-center justify-between gap-6 self-end text-body-m-regular">
          <Dialog.Close asChild>
            <button
              className="h-full w-full rounded-lg p-2 hover:bg-ravn-neutral-4"
              type="button"
            >
              Cancel
            </button>
          </Dialog.Close>
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
