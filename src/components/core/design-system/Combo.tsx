import ReactProps from "@/types/ReactProps";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";

interface ComboboxProps extends ReactProps {
  placeholder: React.ReactNode;
  optionIcon: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  contentClassName?: string;
  showPlaceholder?: boolean;
}

export default function Combo({
  placeholder,
  optionIcon,
  value,
  onValueChange,
  children,
  contentClassName,
  className,
  showPlaceholder = true,
}: ComboboxProps) {
  return (
    <Select.Root onValueChange={onValueChange} value={value}>
      <Select.Trigger
        className={clsx(
          "inline-flex h-full w-full min-w-[128px] flex-row items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded bg-ravn-neutral-2/10 px-4 py-1",
          className,
        )}
      >
        {showPlaceholder ? <Select.Icon>{optionIcon}</Select.Icon> : null}
        <Select.Value
          className="text-body-m-regular"
          placeholder={placeholder}
        />
      </Select.Trigger>

      <Select.Portal container={document.getElementById("task-modal-content")}>
        <Select.Content
          align="start"
          className={clsx(
            "z-20 h-auto w-[122px] rounded-lg border border-ravn-neutral-2 bg-ravn-neutral-3",
            contentClassName,
          )}
          position="popper"
        >
          <Select.Viewport className="flex w-full flex-col items-center justify-between py-2">
            {children}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
