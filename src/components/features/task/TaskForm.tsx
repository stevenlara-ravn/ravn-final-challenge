import TaskFormActions from "@/components/features/task/TaskFormActions";
import TaskFormFields from "@/components/features/task/TaskFormFields";
import useCreateTask from "@/hooks/task-actions/useCreateTask";
import { taskSchema } from "@/schemas/task";
import { TaskInputs } from "@/types/Task";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function TaskForm({
  setOpen,
}: {
  setOpen: (_: boolean) => void;
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

  const { createTask, loading } = useCreateTask(() => {
    reset();
    setOpen(false);
  });

  const onSubmit = async (data: TaskInputs) => createTask(data);

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center justify-between gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TaskFormFields />
        <TaskFormActions loading={loading} setOpen={setOpen} />
      </form>
    </FormProvider>
  );
}
