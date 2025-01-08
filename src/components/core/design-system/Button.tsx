import ReactProps from "@/types/ReactProps";
import { cn } from "@/utils/cn";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends ReactProps {
  type: ButtonType;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg",
        props.className,
      )}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
