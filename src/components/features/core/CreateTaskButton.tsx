import PlusSignIcon from "@/assets/icons/plus-sign.svg?react";
import Button from "@/components/features/core/design-system/Button";
import TaskForm from "@/components/features/task/TaskForm";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react";

export default function CreateTaskButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open}>
      <Button
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-ravn-primary-4 outline-none"
        onClick={() => setOpen(true)}
        type="button"
      >
        <PlusSignIcon className="h-[14px] w-[14px] text-ravn-neutral-1" />
      </Button>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[2] bg-black/10 backdrop-blur-sm" />
        <VisuallyHidden.Root>
          <Dialog.Title />
          <Dialog.Description />
        </VisuallyHidden.Root>

        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-20 min-h-[184px] w-full max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-ravn-neutral-3 p-4 text-ravn-neutral-1"
          id="task-modal-content"
        >
          <TaskForm setOpen={setOpen} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
