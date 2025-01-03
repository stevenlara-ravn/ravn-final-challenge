import PlusSignIcon from "@/assets/icons/plus-sign.svg?react";
import AssigneeCombo from "@/components/features/core/design-system/AssigneeCombo";
import DueDate from "@/components/features/core/DueDate";
import EstimatePointsCombo from "@/components/features/core/EstimatePointsCombo";
import LabelCombo from "@/components/features/core/LabelCombo";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function CreateTaskButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-ravn-primary-4"
          type="button"
        >
          <PlusSignIcon className="h-[14px] w-[14px] text-ravn-neutral-1" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[2] bg-black/50 backdrop-blur-sm" />
        <VisuallyHidden.Root>
          <Dialog.Title />
          <Dialog.Description />
        </VisuallyHidden.Root>

        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-20 h-[184px] w-full max-w-[572px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-ravn-neutral-3 p-4 text-ravn-neutral-1"
          id="task-modal-content"
        >
          <form className="flex flex-col items-center justify-between gap-6">
            <input
              className="h-8 w-full bg-ravn-neutral-3 outline-none text-body-xl-bold placeholder:text-ravn-neutral-2"
              placeholder="Task Title"
              type="text"
            />
            <div className="flex h-8 w-full items-center justify-between gap-4">
              <EstimatePointsCombo />
              <AssigneeCombo />
              <LabelCombo />
              <DueDate />
            </div>

            {/* <div className="flex h-10 w-[150px] items-center justify-between gap-6 self-end text-body-m-regular">
              <Dialog.Close asChild>
                <Button className="h-full w-full rounded-lg p-2 hover:bg-ravn-neutral-4">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Button className="h-full w-full rounded-lg bg-ravn-primary-2 p-2">
                  Create
                </Button>
              </Dialog.Close>
            </div> */}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
