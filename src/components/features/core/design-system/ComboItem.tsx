import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { forwardRef } from "react";

interface ComboItemProps extends Select.SelectItemProps {
  selectIcon?: React.ReactNode;
}

const ComboItem = forwardRef<HTMLDivElement, ComboItemProps>(
  ({ children, className, selectIcon, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={clsx(
          "flex w-full items-center justify-start gap-2 px-4 py-1 text-ravn-neutral-1 text-body-m-regular",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {selectIcon && <Select.Icon>{selectIcon}</Select.Icon>}
        <Select.ItemText className="flex items-center justify-between self-end text-ravn-neutral-5 text-body-m-regular">
          {children}
        </Select.ItemText>
      </Select.Item>
    );
  },
);

export default ComboItem;
