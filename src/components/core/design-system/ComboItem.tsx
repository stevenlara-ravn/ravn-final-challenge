import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
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
        className={clsx(
          "flex w-full cursor-pointer items-center justify-start gap-2 px-4 py-1 text-ravn-neutral-1 text-body-m-regular",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {selectIcon && <Select.Icon>{selectIcon}</Select.Icon>}
        <Select.ItemText
          className={clsx(
            "flex items-center justify-between self-end text-ravn-neutral-5 text-body-m-regular",
            itemTextClassName,
          )}
        >
          {children}
        </Select.ItemText>
      </Select.Item>
    );
  },
);

export default ComboItem;
