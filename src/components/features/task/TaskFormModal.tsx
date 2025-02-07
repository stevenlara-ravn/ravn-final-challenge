import TaskForm from "@/components/features/task/TaskForm";
import { useFormState } from "@/stores/form-state";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function TaskFormModal() {
  const { isDialogOpen, setIsDialogOpen } = useFormState((state) => state);

  return (
    <Dialog.Root open={isDialogOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-[3] bg-black/10 backdrop-blur-sm"
          onClick={() => setIsDialogOpen(false)}
        />
        <VisuallyHidden.Root>
          <Dialog.Title />
          <Dialog.Description />
        </VisuallyHidden.Root>

        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[3] flex min-h-[184px] w-full max-w-[700px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg bg-ravn-neutral-3 p-4 text-ravn-neutral-1 md:flex-none"
          id="task-modal-content"
        >
          <TaskForm setOpen={setIsDialogOpen} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
