import ReactProps from "@/types/ReactProps";
import { cn } from "@/utils/cn";

interface PlaceholderProps extends ReactProps {
  text: string;
  element?: "div" | "tr";
}

const Placeholder = (props: PlaceholderProps) => {
  const { text, className, element = "div" } = props;

  return element === "div" ? (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-lg border border-ravn-neutral-3 bg-ravn-neutral-4 p-4",
        className,
      )}
    >
      <p className="text-ravn-neutral-2 text-body-l-bold">{text}</p>
    </div>
  ) : (
    <tr
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-lg border border-ravn-neutral-3 bg-ravn-neutral-4 p-4",
        className,
      )}
    >
      <td className="text-ravn-neutral-2 text-body-l-bold">{text}</td>
    </tr>
  );
};

export const TaskTablePlaceholder = () => {
  return (
    <Placeholder
      className="h-[57px] w-full rounded-none border-t-0"
      element="tr"
      text="No tasks available"
    />
  );
};

export const TaskCardPlaceholder = () => {
  return (
    <Placeholder
      className="h-[208px] w-[348px]"
      element="div"
      text="No tasks available"
    />
  );
};
