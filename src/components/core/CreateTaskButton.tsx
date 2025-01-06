import PlusSignIcon from "@/assets/icons/plus-sign.svg?react";
import Button from "@/components/core/design-system/Button";
import { useFormState } from "@/stores/form-state";

export default function CreateTaskButton() {
  const { setCurrentTask, setIsFormOpen } = useFormState((state) => state);

  return (
    <Button
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-ravn-primary-4 outline-none"
      onClick={() => {
        setCurrentTask();
        setIsFormOpen(true);
      }}
      type="button"
    >
      <PlusSignIcon className="h-[14px] w-[14px] text-ravn-neutral-1" />
    </Button>
  );
}
