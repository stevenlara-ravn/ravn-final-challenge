import { ReactProps } from "@/types/ReactProps";

export default function Avatar(props: ReactProps) {
  return (
    <img
      className={`min-h-8 min-w-8 rounded-full bg-blue-200 ${props.className}`}
    />
  );
}
