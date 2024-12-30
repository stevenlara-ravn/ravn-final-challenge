import { ReactProps } from "@/types/ReactProps";

export default function Tag(props: ReactProps) {
  return (
    <div
      className={`overflow-hidden flex h-8 min-w-12 items-center justify-center rounded px-4 py-1 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
