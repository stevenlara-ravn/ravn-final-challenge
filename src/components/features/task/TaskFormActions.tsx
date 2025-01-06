import LoadingIcon from "@/assets/icons/loading.svg?react";
import Button from "@/components/core/design-system/Button";
import clsx from "clsx";

interface TaskFormActionsProps {
  loading: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function TaskFormActions({
  loading,
  setOpen,
}: TaskFormActionsProps) {
  return (
    <div className="flex h-10 w-[150px] items-center justify-between gap-6 self-end text-body-m-regular">
      <Button
        className="h-full w-full rounded-lg p-2 hover:bg-ravn-neutral-4"
        onClick={() => setOpen(false)}
        type="button"
      >
        Cancel
      </Button>
      <Button
        className={clsx(
          "h-full w-full rounded-lg bg-ravn-primary-4 p-2 hover:bg-ravn-primary-2",
          loading && "cursor-not-allowed hover:bg-ravn-primary-4",
        )}
        disabled={loading}
        type="submit"
      >
        {loading ? (
          <LoadingIcon className="h-7 w-7 animate-spin text-ravn-primary-3" />
        ) : (
          "Create"
        )}
      </Button>
    </div>
  );
}
