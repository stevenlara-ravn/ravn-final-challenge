import { cn } from "@/utils/cn";
import * as Select from "@radix-ui/react-select";
import { forwardRef } from "react";

interface ComboItemProps extends Select.SelectItemProps {
  selectIcon?: React.ReactNode;
  itemTextClassName?: string;
}

const ComboItem = forwardRef<HTMLDivElement, ComboItemProps>(
  (
    { children, className, itemTextClassName, selectIcon, ...props },
    forwardedRef,
  ) => {
    return (
      <Select.Item
        className={cn(
          "flex w-full cursor-pointer items-center justify-start gap-2 px-4 py-1 text-ravn-neutral-1 text-body-m-regular",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {selectIcon && <Select.Icon>{selectIcon}</Select.Icon>}
        <Select.ItemText
          className={cn(
            "flex items-center justify-between self-end text-ravn-neutral-1 text-body-m-regular",
            itemTextClassName,
          )}
        >
          <p className="text-ravn-neutral-1">{children}</p>
        </Select.ItemText>
      </Select.Item>
    );
  },
);

export default ComboItem;
