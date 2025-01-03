import AssigneeCombo from "@/components/features/core/AssigneeCombo";
import Button from "@/components/features/core/design-system/Button";
import DueDate from "@/components/features/core/DueDate";
import EstimatePointsCombo from "@/components/features/core/EstimatePointsCombo";
import TagCombo from "@/components/features/core/TagCombo";
import { taskSchema } from "@/schemas/task";
import { TaskInputs } from "@/types/Task";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider, useForm } from "react-hook-form";

export default function TaskForm() {
  const methods = useForm<TaskInputs>({
    resolver: zodResolver(taskSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: TaskInputs) => {
    console.log({ data });
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center justify-between gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col items-start justify-between">
          <input
            className="h-8 w-full bg-ravn-neutral-3 outline-none text-body-xl-bold placeholder:text-ravn-neutral-2"
            placeholder="Task Title"
            type="text"
          />
          {errors.name && <p className="text-red-300">{errors.name.message}</p>}
        </div>
        <div className="flex min-h-8 w-full items-center justify-between gap-4">
          <EstimatePointsCombo />
          <AssigneeCombo />
          <TagCombo />
          <DueDate />
        </div>

        <div className="flex h-10 w-[150px] items-center justify-between gap-6 self-end text-body-m-regular">
          <Dialog.Close>
            <button
              className="h-full w-full rounded-lg p-2 hover:bg-ravn-neutral-4"
              type="button"
            >
              Cancel
            </button>
          </Dialog.Close>
          <Button
            className="h-full w-full rounded-lg bg-ravn-primary-2 p-2"
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
