import TaskFormActions from "@/components/features/task/TaskFormActions";
import useDeleteTask from "@/hooks/task-actions/useDeleteTask";
import { useFormState } from "@/stores/form-state";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export default function DeleteTaskModal() {
  const {
    isDeleteTaskModalOpen,
    setIsDeleteTaskModalOpen,
    currentTask,
    setCurrentTask,
  } = useFormState((state) => state);

  const { deleteTask, loading } = useDeleteTask(() => {
    setIsDeleteTaskModalOpen(false);
    setCurrentTask();
  });

  const handleAction = () => {
    if (!currentTask) return;

    deleteTask(currentTask?.id);
  };

  return (
    <AlertDialog.Root open={isDeleteTaskModalOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 z-[2] bg-black/10 backdrop-blur-sm" />

        <AlertDialog.Content className="fixed left-1/2 top-1/2 z-20 flex h-[184px] w-full max-w-[578px] -translate-x-1/2 -translate-y-1/2 flex-col items-start justify-between rounded-lg bg-ravn-neutral-3 p-4 text-ravn-neutral-1">
          <AlertDialog.Title className="text-ravn-neutral-1 text-body-xl-bold">
            Are you sure you want to delete this task?
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-5 mt-[15px] text-body-m-regular">
            This action cannot be undone. This will permanently delete this
            task.
          </AlertDialog.Description>

          <TaskFormActions
            action="delete"
            handleAction={handleAction}
            loading={loading}
            setOpen={setIsDeleteTaskModalOpen}
          />
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
