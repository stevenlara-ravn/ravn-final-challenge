import TaskFormActions from "@/components/features/task/TaskFormActions";
import TaskFormFields from "@/components/features/task/TaskFormFields";
import useCreateTask from "@/hooks/api/task-actions/useCreateTask";
import useUpdateTask from "@/hooks/api/task-actions/useUpdateTask";
import { taskSchema } from "@/schemas/task";
import { useFormState } from "@/stores/form-state";
import { TaskInputs } from "@/types/Task";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

interface TaskFormProps {
  setOpen: (_: boolean) => void;
}

export default function TaskForm({ setOpen }: TaskFormProps) {
  const { currentTask, setCurrentTask } = useFormState((state) => state);

  const methods = useForm<TaskInputs>({
    resolver: zodResolver(taskSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: currentTask
      ? {
          name: currentTask.name,
          pointEstimate: currentTask.pointEstimate,
          assigneeId: currentTask.assignee?.id,
          tags: currentTask.tags,
          dueDate: currentTask.dueDate,
        }
      : {
          name: "",
          tags: [],
          dueDate: new Date().toISOString(),
        },
  });
  const { handleSubmit, reset } = methods;

  const { createTask, loading: createLoading } = useCreateTask(() => {
    reset();
    setCurrentTask();
    setOpen(false);
  });

  const { updateTask, loading: updateLoading } = useUpdateTask(() => {
    reset();
    setCurrentTask();
    setOpen(false);
  });

  const onSubmit = async (data: TaskInputs) => {
    if (currentTask) {
      await updateTask(currentTask.id, data);
    } else {
      await createTask(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center justify-between gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TaskFormFields />
        <TaskFormActions
          action={currentTask ? "update" : "create"}
          loading={createLoading || updateLoading}
          setOpen={setOpen}
        />
      </form>
    </FormProvider>
  );
}
