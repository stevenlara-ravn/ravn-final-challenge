import LoadingIcon from "@/assets/icons/loading.svg?react";
import Button from "@/components/core/design-system/Button";
import { cn } from "@/utils/cn";

type Action = "create" | "update" | "delete";

interface Openable {
  setOpen: (isOpen: boolean) => void;
}

interface TaskFormActionsProps {
  loading: boolean;
  action: Action;
  handleAction?: (action: Action) => void;
}

const RenderActionButton = ({
  action,
  loading,
  handleAction,
}: TaskFormActionsProps) => {
  return (
    <Button
      className={cn(
        "h-full w-full rounded-lg bg-ravn-primary-4 p-2 capitalize hover:bg-ravn-primary-2",
        loading && "cursor-not-allowed hover:bg-ravn-primary-4",
      )}
      disabled={loading}
      onClick={() => {
        if (handleAction) {
          handleAction(action);
        }
      }}
      type={action === "create" || action === "update" ? "submit" : "button"}
    >
      {loading ? (
        <LoadingIcon className="h-7 w-7 animate-spin text-ravn-primary-3" />
      ) : (
        action
      )}
    </Button>
  );
};

export default function TaskFormActions({
  loading,
  setOpen,
  action,
  handleAction,
}: TaskFormActionsProps & Openable) {
  return (
    <div className="flex h-10 w-[150px] items-center justify-between gap-6 self-end text-body-m-regular">
      <Button
        className="h-full w-full rounded-lg p-2 hover:bg-ravn-neutral-4"
        onClick={() => setOpen(false)}
        type="button"
      >
        Cancel
      </Button>
      <RenderActionButton
        action={action}
        handleAction={handleAction}
        loading={loading}
      />
    </div>
  );
}
