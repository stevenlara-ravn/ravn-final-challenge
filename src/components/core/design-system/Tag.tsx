import ReactProps from "@/types/ReactProps";
import { cn } from "@/utils/cn";

export default function Tag(props: ReactProps) {
  return (
    <div
      className={cn(
        "flex h-8 min-w-12 items-center justify-center overflow-hidden rounded px-4 py-1",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
