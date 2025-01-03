import ReactProps from "@/types/ReactProps";
import * as Select from "@radix-ui/react-select";
import clsx from "clsx";

interface ComboboxProps extends ReactProps {
  placeholder: string;
  optionIcon: React.ReactNode;
}

export default function Combo(props: ComboboxProps) {
  return (
    <Select.Root>
      <Select.Trigger
        aria-label={props.placeholder}
        className="inline-flex h-full w-full min-w-[128px] flex-row items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded bg-ravn-neutral-2/10 px-4 py-1"
      >
        <Select.Icon>{props.optionIcon}</Select.Icon>
        <Select.Value
          className="text-body-m-regular"
          placeholder={props.placeholder}
        />
      </Select.Trigger>

      <Select.Portal container={document.getElementById("task-modal-content")}>
        <Select.Content
          align="start"
          className={clsx(
            "z-20 h-auto w-[122px] rounded-lg border border-ravn-neutral-2 bg-ravn-neutral-3",
            props.className,
          )}
          position="popper"
        >
          <Select.Viewport className="flex w-full flex-col items-center justify-between py-2">
            {props.children}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
