import AssigneeCombo from "@/components/features/core/AssigneeCombo";
import Button from "@/components/features/core/design-system/Button";
import DueDate from "@/components/features/core/DueDate";
import EstimatePointsCombo from "@/components/features/core/EstimatePointsCombo";
import TagCombo from "@/components/features/core/TagCombo";
import TaskTitle from "@/components/features/task/TaskTitle";
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
  console.log(errors);

  const onSubmit = (data: TaskInputs) => {
    console.log({ data });
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center justify-between gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TaskTitle />
        <div className="flex min-h-8 w-full items-center justify-between gap-4">
          <EstimatePointsCombo />
          <AssigneeCombo />
          <TagCombo />
          <DueDate />
        </div>

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
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
